# Instrucciones Fijas para Propuestas Web (Kacti Labs)

## Directivas Obligatorias de Estructura y Branding

1. **Flujo de Trabajo Git Limpio:**
   - Para cada nueva propuesta, realizar checkout a `main`, hacer `pull origin main` y crear una nueva rama limpia: `git checkout -b propuesta-[nombre-cliente]`.
   - Modificar únicamente variables de branding, contenido, tipografías, paleta de colores y logos.
   - Prohibido alterar la posición, distribución u orden de los elementos de la Navbar, CTAs o secciones de main.

2. **Crédito de Footer Obligatorio:**
   - Incluir SIEMPRE en el Footer el crédito: `"Diseñado y desarrollado por Kacti Labs"` enlazado a [https://kactilabs.vercel.app/](https://kactilabs.vercel.app/).

3. **Subtítulos y Etiquetas de Sección (Unboxed):**
   - NO utilizar viñetas ni puntos antes del nombre de la sección (`.section-label::before` estrictamente eliminado).
   - Mantener las etiquetas de sección en texto limpio en mayúsculas.

4. **Tipografía:**
   - Utilizar las fuentes originales de la plantilla (`Inter` para cuerpo/sans-serif y `Playfair Display` para títulos/serif).

5. **Favicon y Logotipo:**
   - Utilizar siempre el símbolo del logo oficial (versión SVG nítida y transparente) tanto para la Navbar como para el favicon del navegador (`public/favicon.svg`).

6. **Imágenes:**
   - Cuando por el branding parezca una firma muy seria o heráldica, utilizar las imágenes originales de la plantilla.
