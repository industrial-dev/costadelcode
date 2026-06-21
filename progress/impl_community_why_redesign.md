# Impl — community_why_redesign

Feature id: 2

## Tasks completadas

- [x] T1 — Creado `src/components/CommunityWhySection.astro` con Props `{ purpose: CommunityPage['purpose'] }`, importando `SectionHeading`, grid de 2 columnas en desktop, lista de `.card` con numero ordinal mono y texto body-copy.
- [x] T2 — Actualizado `src/pages/comunidad.astro`: import de `CommunityWhySection` añadido en frontmatter; bloque `<section>` de `community.purpose` (lineas 46–68 originales) reemplazado por `<CommunityWhySection purpose={community.purpose} />`.
- [x] T3 — Verificación estructural: el componente renderiza eyebrow, title, description via `SectionHeading` y 3 tarjetas individuales con numero ordinal en `text-accent-500` y texto en `body-copy`. Layout mobile (1 columna) y desktop (2 columnas via `lg:grid-cols-[...]`).
- [x] T4 — `yarn build` completado sin errores de TypeScript, Astro ni sintaxis. 5 paginas generadas en 1.99s.

## Archivos modificados

- `src/components/CommunityWhySection.astro` — creado (nuevo componente)
- `src/pages/comunidad.astro` — import añadido + bloque purpose reemplazado

## Resultado de yarn build

```
✓ astro check — sin errores
✓ 5 page(s) built in 1.99s
✓ Complete!
```

## Trazabilidad de requirements

| Requirement                                                  | Verificacion                                                                                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| R1 — eyebrow, title, description de `community.purpose`      | `SectionHeading` recibe los 3 campos via prop `purpose`                                                                       |
| R2 — cada punto como elemento visual individual con marcador | `<li class="card">` por cada punto con numero ordinal `text-accent-500`                                                       |
| R3 — mobile 1 columna                                        | grid sin columnas fijas por defecto; apilado vertical                                                                         |
| R4 — desktop 2 columnas                                      | `lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]`                                                                                |
| R5 — tokens del proyecto aplicados                           | `.card`, `.eyebrow`, `.title-lg` (via SectionHeading), `.body-copy`, `font-mono` (VT323), clases Tailwind con tokens de color |
| R6 — marcador visual `accent-500` consistente                | `text-accent-500` en span del numero ordinal; sin gradientes                                                                  |
| R7 — ningun string hardcodeado en componente                 | todo el contenido viene de la prop `purpose` de `site-content.ts`                                                             |
| R8 — separacion visual con secciones adyacentes              | `class="section section-border"` en el elemento `<section>`                                                                   |
| R9 — `yarn build` sin errores                                | confirmado (ver resultado arriba)                                                                                             |
