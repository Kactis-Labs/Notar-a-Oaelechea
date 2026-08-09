# Reglas y Guías Permanentes del Proyecto (Propuestas Web Legal)

1. **Botón Menú Hamburguesa Móvil (Header.css)**:
   - En vistas móviles (`@media (max-width: 992px)`), el botón `.mobile-menu-btn` DEBE incluir siempre `margin-right: 0.5rem;` y `padding: 0.5rem;`, además de `.header-container { padding: 0 1.5rem; }` para evitar que el icono quede pegado al borde derecho de la pantalla.

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
