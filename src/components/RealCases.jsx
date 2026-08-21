import { useState } from 'react';
import { Play } from 'lucide-react';
import './RealCases.css';

const realCaseVideos = [
  {
    id: 'caso-revocatoria-22-anos',
    driveId: '1Pnl0WkjSyULuzQX_mQypSMLWFud_OZvV',
    title: 'Revocatoria de Condena de 22 Años',
    category: 'Apelación Penal Compleja &middot; Sala Superior',
    result: 'Revocatoria de Sentencia en Segunda Instancia',
    tag: 'Apelación Penal',
    driveThumbnail: 'https://drive.google.com/thumbnail?id=1Pnl0WkjSyULuzQX_mQypSMLWFud_OZvV&sz=w1000',
    fallbackThumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caso-dori-cruz-posesion',
    driveId: '1rKv4Uh6dYdPQmq-OcIyRCbef2u_B5IVw',
    title: 'Defensa de Inocencia: Dori Cruz',
    category: 'Acusación por Constancia de Posesión',
    result: 'Admisión de Prueba Clave y Tutela Efectiva',
    tag: 'Testimonio Real',
    driveThumbnail: 'https://drive.google.com/thumbnail?id=1rKv4Uh6dYdPQmq-OcIyRCbef2u_B5IVw&sz=w1000',
    fallbackThumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caso-omision-familiar',
    driveId: '1Fd_5w5XR6fYbuPtzrQUvGeoxyDpkQfSV',
    title: 'Omisión a la Asistencia Familiar',
    category: 'Defensa Técnica en Delitos de OAF',
    result: 'Acreditación de Realidad Económica',
    tag: 'Defensa Probatoria',
    driveThumbnail: 'https://drive.google.com/thumbnail?id=1Fd_5w5XR6fYbuPtzrQUvGeoxyDpkQfSV&sz=w1000',
    fallbackThumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'caso-usurpacion-terreno',
    driveId: '1myZ4QcyTZ4LOkq98h9-S9kZB4zDRAUdz',
    title: 'Protección de Terreno y Despojo',
    category: 'Defensa de Posesión y Propiedad Inmobiliaria',
    result: 'Freno Inmediato de Despojo Ilegal',
    tag: 'Defensa en Campo',
    driveThumbnail: 'https://drive.google.com/thumbnail?id=1myZ4QcyTZ4LOkq98h9-S9kZB4zDRAUdz&sz=w1000',
    fallbackThumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80'
  }
];

function CaseThumbnail({ caseItem, onPlay }) {
  const [imgSrc, setImgSrc] = useState(caseItem.driveThumbnail);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(caseItem.fallbackThumbnail);
    }
  };

  return (
    <div className="case-thumbnail-cover" onClick={onPlay}>
      <img 
        src={imgSrc} 
        alt={caseItem.title} 
        className="case-vertical-img" 
        onError={handleError}
      />
      <div className="case-play-overlay">
        <div className="case-play-btn">
          <Play size={24} className="play-icon-triangle" />
        </div>
        <span className="case-duration-badge">{caseItem.tag}</span>
      </div>
    </div>
  );
}

export default function RealCases() {
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (id) => {
    setPlayingId(id);
  };

  return (
    <section className="real-cases-section" id="casos-reales">
      <div className="container">
        
        <div className="cases-header-block">
          <div className="section-label">Casos Reales</div>
          <h2 className="cases-main-title">Casos que hemos defendido.</h2>
          <p className="cases-main-subtitle">
            &ldquo;No te contamos solamente lo que podemos hacer. Te mostramos cómo trabajamos a través de testimonios y resoluciones reales.&rdquo;
          </p>
        </div>

        <div className="cases-vertical-grid">
          {realCaseVideos.map((caseItem) => (
            <div className="case-vertical-card" key={caseItem.id}>
              
              <div className="case-vertical-video-wrapper">
                {playingId === caseItem.id ? (
                  <video 
                    src={`https://drive.google.com/uc?export=download&id=${caseItem.driveId}`}
                    controls
                    autoPlay
                    playsInline
                    className="case-native-video"
                  >
                    Tu navegador no soporta reproducción directa de video.
                  </video>
                ) : (
                  <CaseThumbnail 
                    caseItem={caseItem} 
                    onPlay={() => handlePlay(caseItem.id)} 
                  />
                )}
              </div>

              <div className="case-vertical-info">
                <h3 className="case-card-title">{caseItem.title}</h3>
                <p 
                  className="case-card-category" 
                  dangerouslySetInnerHTML={{ __html: caseItem.category }}
                ></p>
                <p className="case-card-result">
                  {caseItem.result}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
