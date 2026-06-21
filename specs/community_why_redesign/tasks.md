# Tasks — community_why_redesign

Feature id: 2

---

- [x] T1 — Crear `src/components/CommunityWhySection.astro` con la interfaz
      `Props { purpose: CommunityPage['purpose'] }`, importando `SectionHeading`
      y usando la estructura de grid documentada en `design.md` (seccion +
      shell-grid + SectionHeading izquierda + lista de `.card` con numero ordinal
      en mono y texto en body-copy a la derecha). Cubre: R1, R2, R3, R4, R5, R6, R7.

- [x] T2 — En `src/pages/comunidad.astro`: añadir el import de
      `CommunityWhySection` en el frontmatter y reemplazar el bloque `<section>`
      existente de `community.purpose` (actualmente lineas 46–68) por
      `<CommunityWhySection purpose={community.purpose} />`. Cubre: R1, R7, R8.

- [x] T3 — Verificar visualmente en `yarn dev` que la seccion "El por que"
      muestra: eyebrow, titulo, descripcion y los 3 puntos como tarjetas
      individuales con numero ordinal en acento y texto legible; comprobar layout
      mobile (1 columna) y desktop (2 columnas). Cubre: R2, R3, R4, R5, R6.

- [x] T4 — Ejecutar `yarn build` y confirmar que el proceso termina sin errores
      de TypeScript, Astro o sintaxis. Cubre: R9.
