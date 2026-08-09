# Reglas del Proyecto y Directivas de Branding

Recopilación de directivas y estándares obligatorios para el desarrollo de propuestas web sobre la plantilla jurídica.

---

### 1. Flujo de Trabajo Git & Ramas Limpias
- Para cada propuesta nueva, crear siempre una rama limpia desde `main`:
  ```bash
  git checkout main
  git pull origin main
  git checkout -b propuesta-<nombre-firma>
  ```
- **Cero Modificaciones de Estructura:** No alterar la posición de la Navbar, la ubicación ni orden de los botones CTAs, ni la maquetación de los componentes de `main`. El trabajo se limita a aplicar branding (colores, fuentes, logos, imágenes de stock y textos).

---

### 2. Integración y Dimensiones del Logo en Navbar (`Header.jsx` & `Header.css`)
- Integrar los logos mediante:
  ```jsx
  <img className="logo-img" src={isScrolledState ? "/logo-dark.png" : "/logo.png"} alt={brandConfig.name} />
  ```
- **Dimensiones Proporcionales del Logo:**
  - **Escritorio:** `height: 36px - 38px; max-height: 38px; max-width: 240px; object-fit: contain; object-position: left center;`. En scroll: `height: 30px - 32px; max-height: 32px; max-width: 210px;`.
  - **Móvil (`@media (max-width: 992px)`):** `height: 24px; max-height: 24px; max-width: 160px;`. En scroll: `height: 22px; max-height: 22px; max-width: 150px;`.
- **Alineación:** El logo en escritorio debe alinearse a la extrema izquierda sin empujar ni colisionar con las opciones fijas de la Navbar.

---

### 3. Menú Hamburguesa en Vista Móvil (`Header.css`)
- En vistas móviles (`@media (max-width: 992px)`), el contenedor `.header-container` lleva `padding: 0 1.25rem;`.
- El botón `.mobile-menu-btn` debe llevar:
  ```css
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  margin-right: 0;
  flex-shrink: 0;
  ```
  Esto garantiza que el botón hamburguesa quede 100% visible en el extremo derecho de la pantalla sin desbordar ni ocultarse.

---

### 4. Dimensiones y Adaptabilidad del Logo en Footer (`Footer.jsx` & `Footer.css`)
- Los logos de firmas con proporciones apaisadas (~7:1) NUNCA deben llevar alturas fijas mayores a `40px` en escritorio ni mayores a `26px` (`max-width: 170px`) en móvil.
- Usar siempre un archivo dedicado `Footer.css` con `flex-direction: column` y `overflow: hidden` en móviles para prevenir que la imagen expanda horizontalmente el viewport y recorte el copyright o créditos.

---

### 5. Fidelidad Estricta a Assets Adjuntos
- Utilizar literalmente los archivos de imagen o logos adjuntados por el usuario (`public/logo.png` y `public/logo-dark.png`), sin recreaciones ni sustituciones.

---

### 6. Preservación Estricta de Textos y Contenidos de Plantilla
- Conservar los textos exactos de los botones CTAs originales de la plantilla (`Hero.jsx`: *"Agendar una cita"* y *"Ver servicios"*) a menos que el usuario ordene explícitamente cambiarlos.

---

### 7. Tipografías Originales de Plantilla
- Respetar la combinación de fuentes original de la plantilla (`Playfair Display` para titulares `h1, h2, h3, h4, h5, h6` y `Montserrat` para cuerpo de texto y UI) a menos que se indique lo contrario en las instrucciones de la marca.

---

### 8. Garantía de Contraste Automático en Títulos (`index.css`)
- `h1, h2, h3, h4, h5, h6 { color: inherit; }` para que hereden blanco `#FFFFFF` en contenedores oscuros y oscuro en contenedores claros.
- En componentes con fondo oscuro (`Quiz.css`, `ServiceDetail.css`), aplicar `color: #FFFFFF !important;` en títulos.

---

### 9. Etiquetas de Sección Limpias
- `.section-label` NO debe llevar punto bullet inicial (`.section-label::before { display: none !important; }`).

---

### 10. Redacción de Títulos & Copy (Sustitución de Ampersand)
- Reemplazar siempre la ampersand `&` por la conjunción `y` en todos los títulos y textos visibles de la web.

---

### 11. Capa y Visibilidad de Imagen en Hero (`Hero.css`)
- Mantener siempre una capa de overlay suave (opacidad reducida entre 0.35 y 0.5) sobre la imagen del Hero. La imagen de fondo debe percibirse con total claridad y nitidez sin oscurecerse en exceso, conservando a la vez un contraste óptimo para la lectura del texto principal.
