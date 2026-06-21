# Requirements — community_why_redesign

Feature id: 2
Feature name: community_why_redesign
Status: spec_ready

---

## R1

El sistema DEBE mostrar la sección "El por qué" en la página `/comunidad/` con
un encabezado de sección que incluya `eyebrow`, `title` y `description`
provenientes de `community.purpose` en `site-content.ts`.

## R2

El sistema DEBE mostrar cada uno de los puntos de `community.purpose.points`
como un elemento visual individual con ícono o marcador diferenciado, texto del
punto y suficiente espacio visual entre elementos para facilitar la lectura.

## R3

CUANDO la sección "El por qué" se renderiza en viewport mobile (< 768 px), el
sistema DEBE apilar el encabezado y los puntos verticalmente en una sola
columna.

## R4

CUANDO la sección "El por qué" se renderiza en viewport desktop (>= 1024 px),
el sistema DEBE disponer el encabezado y los puntos en un layout de dos
columnas que respete el sistema de grid existente (`.shell` + clases Tailwind).

## R5

El sistema DEBE aplicar el sistema de tokens de diseño del proyecto
(`--color-accent-500`, `.card`, `.eyebrow`, `.title-lg`, `.body-copy`,
fuentes Chakra Petch y Manrope) en todos los elementos de la sección.

## R6

El sistema DEBE que cada punto de `community.purpose.points` use el marcador
visual `accent-500` (amarillo cálido) de forma consistente con los patrones
de marca del proyecto, sin añadir gradientes agresivos ni colores fuera del
sistema de tokens.

## R7

El sistema DEBE que el texto de cada punto sea legible y conciso: el contenido
proviene íntegramente de `site-content.ts`; ningún string DEBE estar
hardcodeado en el componente o en la página.

## R8

El sistema DEBE que la sección tenga separación visual respecto a las secciones
adyacentes mediante la clase `section-border` o equivalente ya presente en el
proyecto, preservando el ritmo vertical existente.

## R9

CUANDO `yarn build` se ejecuta, el sistema DEBE completar sin errores de
TypeScript, Astro o sintaxis.
