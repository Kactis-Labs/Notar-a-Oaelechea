# Reglas y Guías Permanentes del Proyecto (Propuestas Web Legal)

1. **Botón Menú Hamburguesa Móvil (Header.css)**:
   - En vistas móviles (`@media (max-width: 992px)`), el contenedor `.header-container` debe tener `padding: 0 1.5rem;`, el logo `.logo-img` debe reducir su alto a `height: 46px;`, y el botón `.mobile-menu-btn` debe llevar `margin-right: 1.25rem;`, `padding: 0.5rem;` y `flex-shrink: 0;`. Esto posiciona al icono holgadamente desplazado hacia la izquierda del borde derecho sin pegarse a la pantalla.

2. **Integración del Logo en Navbar (`Header.jsx` & `Header.css`)**:
   - En cada propuesta nueva, reemplazar inmediatamente el texto plano de `main` en `Header.jsx` por `<img className="logo-img" src={isScrolledState ? "/logo-dark.svg" : "/logo.svg"} alt={brandConfig.name} />`.
   - Definir siempre `.logo-img { height: 72px; width: auto; object-fit: contain; }` en `Header.css` para escritorio.

3. **Garantía de Contraste Automático en Títulos (`index.css`)**:
   - `h1, h2, h3, h4, h5, h6 { color: inherit; }` para que hereden blanco `#FFFFFF` en contenedores oscuros y oscuro en contenedores claros.
   - En componentes con fondo oscuro (`Quiz.css`, `ServiceDetail.css`), aplicar `color: #FFFFFF !important;` en títulos.

4. **Etiquetas de Sección Limpias**:
   - `.section-label` NO debe llevar punto bullet inicial (`.section-label::before { display: none; }`).

5. **Redacción de Títulos & Copy**:
   - Reemplazar siempre la ampersand `&` por la conjunción `y` en todos los títulos y textos de la web.

6. **Capa y Visibilidad de Imagen en Hero (`Hero.css`)**:
   - Mantener siempre una capa de overlay suave (opacidad reducida entre 0.35 y 0.5) sobre la imagen del Hero. La imagen de fondo debe percibirse con total claridad y nitidez sin oscurecerse en exceso, conservando a la vez un contraste óptimo para la lectura del texto principal.
