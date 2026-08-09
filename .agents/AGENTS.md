# Reglas y Guías Permanentes del Proyecto (Propuestas Web Legal)

1. **Botón Menú Hamburguesa Móvil (Header.css)**:
   - En vistas móviles (`@media (max-width: 992px)`), el contenedor `.header-container` debe tener `padding: 0 1.5rem;` y el botón `.mobile-menu-btn` debe llevar `margin-right: 0;` y `padding: 0.5rem;`. Esto posiciona al icono a exactamente 1.5rem del borde derecho sin desbordar hacia afuera.

2. **Integración del Logo en Navbar (`Header.jsx` & `Header.css`)**:
   - En cada propuesta nueva, reemplazar inmediatamente el texto plano de `main` en `Header.jsx` por `<img className="logo-img" src={isScrolledState ? "/logo-dark.svg" : "/logo.svg"} alt={brandConfig.name} />`.
   - Definir siempre `.logo-img { height: 72px; width: auto; object-fit: contain; }` en `Header.css`.

3. **Garantía de Contraste Automático en Títulos (`index.css`)**:
   - `h1, h2, h3, h4, h5, h6 { color: inherit; }` para que hereden blanco `#FFFFFF` en contenedores oscuros y azul oscuro en contenedores claros.
   - En componentes con fondo oscuro (`Quiz.css`, `ServiceDetail.css`), aplicar `color: #FFFFFF !important;` en títulos.

4. **Etiquetas de Sección Limpias**:
   - `.section-label` NO debe llevar punto bullet inicial. (`.section-label::before { display: none; }`).

5. **Redacción de Títulos & Copy**:
   - Reemplazar siempre la ampersand `&` por la conjunción `y` en todos los títulos y textos de la web.
