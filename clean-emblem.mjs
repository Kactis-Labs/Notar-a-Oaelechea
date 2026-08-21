import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('public/emblem.png');

// Find IHDR
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
const bitDepth = buf[24];
const colorType = buf[25];

console.log({ width, height, bitDepth, colorType });

// Extract all IDAT chunks
let idatChunks = [];
let offset = 8;
while (offset < buf.length) {
  const len = buf.readUInt32BE(offset);
  const type = buf.toString('ascii', offset + 4, offset + 8);
  if (type === 'IDAT') {
    idatChunks.push(buf.subarray(offset + 8, offset + 8 + len));
  }
  offset += 12 + len;
}

const compressed = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(compressed);
console.log('Decompressed scanline buffer length:', decompressed.length);

// Scanlines: each row has 1 filter byte + (width * 4) bytes for RGBA or 3 for RGB
const bpp = colorType === 6 ? 4 : (colorType === 2 ? 3 : 4);
console.log('Bytes per pixel:', bpp);

// Let's create two cleaned RGBA buffers:
// 1) Dark blue EU with 100% transparent background
// 2) Pure white EU with 100% transparent background
const stride = 1 + width * 4;
const darkBuffer = Buffer.alloc(height * stride);
const whiteBuffer = Buffer.alloc(height * stride);

let srcOffset = 0;
let dstOffset = 0;

for (let y = 0; y < height; y++) {
  const filter = decompressed[srcOffset++];
  darkBuffer[dstOffset] = 0; // None filter
  whiteBuffer[dstOffset] = 0;
  dstOffset++;

  for (let x = 0; x < width; x++) {
    let r, g, b, a;
    if (colorType === 6) {
      r = decompressed[srcOffset++];
      g = decompressed[srcOffset++];
      b = decompressed[srcOffset++];
      a = decompressed[srcOffset++];
    } else if (colorType === 2) {
      r = decompressed[srcOffset++];
      g = decompressed[srcOffset++];
      b = decompressed[srcOffset++];
      a = 255;
    } else {
      r = decompressed[srcOffset++];
      g = decompressed[srcOffset++];
      b = decompressed[srcOffset++];
      a = decompressed[srcOffset++];
    }

    // Determine if pixel is part of the blue EU monogram or white/transparent background
    // Blue is dark (e.g. R < 100, G < 100, B > 100 or brightness < 200)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    const isBackground = brightness > 230 && a > 0; // White background

    if (isBackground || a === 0) {
      // Fully transparent
      darkBuffer[dstOffset] = 0;
      darkBuffer[dstOffset + 1] = 0;
      darkBuffer[dstOffset + 2] = 0;
      darkBuffer[dstOffset + 3] = 0;

      whiteBuffer[dstOffset] = 0;
      whiteBuffer[dstOffset + 1] = 0;
      whiteBuffer[dstOffset + 2] = 0;
      whiteBuffer[dstOffset + 3] = 0;
    } else {
      // Monogram pixel:
      // Anti-aliasing alpha calculation if near border:
      const alpha = a * (1 - Math.max(0, (brightness - 100) / 130));
      const finalAlpha = Math.min(255, Math.max(0, Math.round(a === 255 ? (255 - brightness) * 1.2 : a)));

      // Dark blue version (#122e7e -> 18, 46, 126)
      darkBuffer[dstOffset] = 18;
      darkBuffer[dstOffset + 1] = 46;
      darkBuffer[dstOffset + 2] = 126;
      darkBuffer[dstOffset + 3] = finalAlpha > 20 ? 255 : 0;

      // Pure white version (#FFFFFF -> 255, 255, 255)
      whiteBuffer[dstOffset] = 255;
      whiteBuffer[dstOffset + 1] = 255;
      whiteBuffer[dstOffset + 2] = 255;
      whiteBuffer[dstOffset + 3] = finalAlpha > 20 ? 255 : 0;
    }
    dstOffset += 4;
  }
}

// Function to write a minimal valid PNG from RGBA scanline buffer
function createPng(rgbaBuffer, w, h) {
  const compressedData = zlib.deflateSync(rgbaBuffer);
  
  // PNG signature
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  
  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace
  
  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));
  
  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xEDB88320 : 0);
    }
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type, 'ascii');
  const len = data.length;
  const chunk = Buffer.alloc(12 + len);
  chunk.writeUInt32BE(len, 0);
  typeBuf.copy(chunk, 4);
  data.copy(chunk, 8);
  const crcVal = crc32(Buffer.concat([typeBuf, data]));
  chunk.writeUInt32BE(crcVal, 8 + len);
  return chunk;
}

const darkPng = createPng(darkBuffer, width, height);
const whitePng = createPng(whiteBuffer, width, height);

fs.writeFileSync('public/emblem-dark.png', darkPng);
fs.writeFileSync('public/emblem-white.png', whitePng);

console.log('Successfully created transparent emblem-dark.png and emblem-white.png!');
