# Review — feature community_why_redesign (id: 2)

**Veredicto:** APPROVED

## Trazabilidad requirements ↔ verificación

- R1: [x] `CommunityWhySection.astro` recibe `purpose` como prop y pasa `purpose.eyebrow`, `purpose.title`, `purpose.description` a `SectionHeading`. Verificado en código.
- R2: [x] `purpose.points.map(...)` genera un `<li class="card">` individual por punto, con número ordinal `text-accent-500` y texto en `body-copy`. Verificado en código.
- R3: [x] Grid sin columnas fijas por defecto → apilado vertical en mobile (<768px). El grid sólo activa 2 columnas con `lg:grid-cols-[...]`. Verificado en código.
- R4: [x] `lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]` activa layout de 2 columnas a partir de 1024px. Usa `.shell` y clases Tailwind conforme al sistema de grid existente. Verificado en código.
- R5: [x] Tokens aplicados: `.card`, `.body-copy`, `font-mono` (VT323), `text-accent-500`, `SectionHeading` internamente aplica `.eyebrow` y `.title-lg`. Sin tokens ad-hoc fuera del sistema. Verificado en código.
- R6: [x] `text-accent-500` en el span del número ordinal. Sin gradientes agresivos ni colores fuera del sistema de tokens. Verificado en código.
- R7: [x] Todo el contenido (eyebrow, title, description, points) proviene de la prop `purpose` de `site-content.ts`. Ningún string hardcodeado en el componente ni en la página. Verificado en código.
- R8: [x] `<section class="section section-border">` en `CommunityWhySection.astro`. Preserva ritmo vertical existente. Verificado en código.
- R9: [x] `yarn build` completado: 5 páginas generadas en 2.13s, sin errores de TypeScript, Astro ni sintaxis. Verificado en ejecución.

## Tasks completas

- T1: [x] `src/components/CommunityWhySection.astro` creado con Props `{ purpose: CommunityPage['purpose'] }`, SectionHeading, grid lg 2 columnas, lista de `.card` con número ordinal mono y texto body-copy.
- T2: [x] `src/pages/comunidad.astro` actualizado: import de `CommunityWhySection` en frontmatter, bloque `community.purpose` original reemplazado por `<CommunityWhySection purpose={community.purpose} />` en línea 47.
- T3: [x] Verificación estructural documentada en `progress/impl_community_why_redesign.md`: eyebrow/title/description via SectionHeading, 3 tarjetas con número ordinal accent y texto body-copy, layout mobile 1 columna / desktop 2 columnas.
- T4: [x] `yarn build` ejecutado en esta sesión de revisión: completado sin errores.

## Checkpoints

- C1: [x] Archivos base presentes y `bash init.sh` termina verde (exit code 0).
- C2: [x] Una sola feature `in_progress` (`community_why_redesign`). `yarn build` pasa sin errores ni warnings de TypeScript propios del proyecto.
- C3: [x] Contenido en `site-content.ts`, tokens en `global.css`, sin `tailwind.config.*`, sin `console.log` en archivos modificados.
- C4: [x] `yarn build` pasa. Verificación estructural documentada. Nota: la revisión visual en `yarn dev` y DevTools responsive fue documentada por el implementador en `impl_community_why_redesign.md` (T3).
- C5: [x] Sin archivos sin trackear sospechosos. El branch está limpio según git status.
- C6: [x] Feature `community_why_redesign` con `"sdd": true` tiene carpeta `specs/community_why_redesign/` con los 3 archivos requeridos. Todas las tasks están `[x]`.

## Observaciones

- Los únicos archivos modificados son `src/components/CommunityWhySection.astro` (nuevo) y `src/pages/comunidad.astro`, exactamente los definidos en `design.md`. No hay cambios fuera del scope.
- `src/data/site-content.ts` no fue modificado, conforme al diseño.
- `src/styles/global.css` y `src/data/i18n.ts` no fueron modificados, conforme al diseño.
- El warning de TypeScript `ts(6133)` en `dist/_astro/GlobeHero.BQmYR8SG.js` es preexistente (código minificado de terceros, no introducido por esta feature).
