# Guía y Reglas Estrictas para Generación de Propuestas Web

## ⚠️ DIRECTIVAS CRÍTICAS Y OBLIGATORIAS (Estructura Congelada)

1. **Cero Modificaciones de Estructura / Layout:**
   - NO modificar la posición ni distribución de los elementos de la Navbar.
   - NO modificar la ubicación, tamaño base, ni orden de los botones (CTAs) de la web.
   - NO alterar el layout de los componentes ni la estructura de secciones de `main`.
   - NO agregar ni eliminar etiquetas contenedoras o mensajes adicionales en componentes congelados como el Hero (por ejemplo, NO incluir etiquetas o `section-label` adicionales dentro del Hero que no pertenecieran a la plantilla original).

2. **Prohibición Estricta de Puntos/Viñetas antes de las Secciones (`section-label`):**
   - NUNCA utilizar puntos, viñetas ni pseudo-elementos (`::before` / `::after`) antes de los nombres de sección o etiquetas (`.section-label`).
   - Las etiquetas de sección deben ser abiertas y limpias, sin viñetas o puntos circulares iniciales.

3. **Trabajo Exclusivo de Branding:**
   - Aplicar la paleta de colores corporativa mediante variables CSS (`--color-black`, `--color-gold`, etc.).
   - Aplicar tipografía oficial (Google Fonts: Montserrat para encabezados y subtítulos en mayúsculas, Inter para cuerpo de texto).
   - Integrar logotipo SVG oficial y marca de agua del monograma con opacidad sutil en fondos (Hero, etc.).
   - Adaptar las colecciones de datos en `src/config/brandConfig.js`, `src/data/servicesData.js`, `src/data/teamData.js` y `src/data/articlesData.js`.
   - Utilizar imágenes de stock corporativas de alto nivel visual.

4. **Flujo de Trabajo Git Obligatorio:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b propuesta-[nombre-cliente]
   ```

5. **Validación & Publicación:**
   - `npm run lint` debe ejecutarse con **0 errores y 0 advertencias**.
   - `npm run build` debe ser 100% exitoso.
   - Incluir en el footer el crédito: `"Diseñado y desarrollado por Kacti Labs"` enlazado a `https://kactilabs.vercel.app/`.
