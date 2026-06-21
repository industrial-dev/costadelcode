# Requirements — community_hero_refactor

Feature id: 1  
Acceptance criteria source: `feature_list.json` → `community_hero_refactor`

---

## R1

El sistema DEBE mostrar en `src/pages/comunidad.astro` una única sección hero
que contenga, en línea, el nombre del fundador (Dani Gevorkian / Daniel Núñez),
su nota personal y el eyebrow de origen de la comunidad, eliminando la sección
separada `origin` que actualmente se renderiza como un `<aside>` independiente.

> Cubre AC: "Información del fundador integrada en hero (no sección separada)"

---

## R2

El sistema DEBE eliminar de `comunidad.astro` el bloque `<aside>` que
actualmente contiene `community.origin.eyebrow`, `community.origin.title`,
`community.origin.description` y `community.origin.founderNote` como panel
lateral independiente.

> Cubre AC: "Información del fundador integrada en hero (no sección separada)"

---

## R3

El sistema DEBE simplificar el hero de comunidad para que el copy principal
(título + párrafo intro) ocupe menos texto que en la versión actual, eliminando
al menos uno de los dos párrafos del array `community.hero.description` o
reduciéndolos en longitud, de forma que la lectura visual del hero resulte
más concisa.

> Cubre AC: "Hero section con diseño simplificado y más llamativo"

---

## R4

El sistema DEBE aplicar al hero de comunidad un tratamiento visual diferente
al de `HomeHeroSection.astro`. La diferencia DEBE ser verificable
manualmente visitando `/` y `/comunidad/` en `yarn dev` y constatando que
ambas secciones hero tienen distintos elementos de diferenciación visual.
Como mínimo el hero de comunidad NO DEBE incluir el globo terráqueo
(`GlobeHero`) ni el bloque de stats en tarjetas que usa el home.

> Cubre AC: "Diseño diferenciado respecto a otras hero sections"

---

## R5

CUANDO el implementer modifique `src/data/site-content.ts`, el sistema DEBE
mantener la compatibilidad de tipos TypeScript del tipo `CommunityPage` —ya
sea actualizando el tipo para reflejar los campos eliminados o marcando campos
como opcionales— de modo que `yarn build` (que ejecuta `astro check`) NO
produzca errores de tipo.

> Cubre AC: "yarn build pasa sin errores"

---

## R6

El sistema DEBE mantener toda la información visible del hero (eyebrow, título,
intro y datos del fundador) como strings en `src/data/site-content.ts`. No se
permiten strings hardcodeados en el componente `.astro` ni en ningún `.tsx`
nuevo.

> Cubre AC: "Hero section con diseño simplificado y más llamativo" (calidad arquitectónica)

---

## R7

CUANDO `yarn build` se ejecute tras aplicar los cambios, el sistema DEBE
completar el proceso sin errores de compilación, errores de tipos TypeScript
ni advertencias tratadas como errores por `astro check`.

> Cubre AC: "yarn build pasa sin errores"

---

## R8

El sistema DEBE mostrar el hero de comunidad usando únicamente tokens de
diseño definidos en `src/styles/global.css` (colores `--color-*`, fuentes
`font-display`, `font-mono`, clases `.eyebrow`, `.title-xl`, `.body-copy`,
`.card`, etc.). No se permiten valores de color hardcodeados fuera del
sistema de tokens existente salvo los inline ya en uso con sintaxis
`rgb(…/…)` del resto del sitio.

> Cubre AC: "Diseño diferenciado respecto a otras hero sections" (calidad de tokens)
