# Implementación — community_hero_refactor

Feature id: 1

## Tasks

- [x] T1 — Tipo `CommunityPage` actualizado: se añadió `founderIntro: { name, note, eyebrow }` bajo `hero`; `origin` marcado como opcional (`origin?:`).
- [x] T2 — Datos de `community.hero` actualizados: `description` reducido a 1 párrafo; `founderIntro` añadido con `name: 'Daniel Núñez'`, `eyebrow: 'Fundador · Estepona'` y `note` tomada de `community.origin.founderNote`.
- [x] T3 — Hero refactorizado en `comunidad.astro`: layout de 1 columna editorial (`max-w-2xl` centrado), `<aside>` de origin eliminado, bloque `.card` embebido con datos del fundador (`founderIntro.eyebrow`, `.name`, `.note`).
- [x] T4 — Confirmado: cero referencias a `community.origin.*` en `comunidad.astro` tras la refactorización.
- [x] T5 — `yarn build` completado: 0 errores, 0 warnings. 5 páginas generadas en 1.95s.
- [ ] T6 — Verificación visual manual en `yarn dev` (pendiente de ejecución por humano).

## Resultado de yarn build

```
astro check: 0 errors, 0 warnings, 38 hints
astro build: 5 page(s) built in 1.95s — Complete!
```

## Decisiones tomadas durante la implementación

- T3: La estructura del hero quedó con `<div class="shell mx-auto max-w-2xl">` para centrar el contenido editorial sin romper el sistema de tokens existente (`shell` es la clase de contenedor del sitio). El bloque del fundador usa la clase `.card` con padding `p-8`, igual que el aside anterior, para mantener coherencia visual sin introducir nuevos tokens.
- T4: El campo `origin` permanece en los datos de `site-content.ts` (con sus valores originales) pero no se renderiza en ningún template. No se eliminó el dato para minimizar el diff y preservar la historia; el tipo lo permite al estar marcado como opcional.
- T6 es verificación manual no automatizable — queda pendiente para el reviewer o el humano.

## Trazabilidad R → verificación

| Requisito                             | Verificación                                                                                                                      |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| R1 — Fundador integrado en hero       | Visual: bloque `.card` con `founderIntro` embebido en la sección hero de `/comunidad/`                                            |
| R2 — `<aside>` de origin eliminado    | Grep: cero referencias a `community.origin.*` en `comunidad.astro`                                                                |
| R3 — Description reducida a 1 párrafo | Code: `description` pasa de 2 párrafos a 1 en `site-content.ts`                                                                   |
| R4 — Hero diferenciado del home       | Visual: sin GlobeHero, sin stats cards; layout de 1 columna vs 2 columnas del home                                                |
| R5 — Compatibilidad de tipos TS       | Build: `astro check` 0 errores                                                                                                    |
| R6 — Strings en `site-content.ts`     | Code: todos los textos del hero en el archivo de datos, ninguno hardcodeado en `.astro`                                           |
| R7 — `yarn build` sin errores         | Build: 0 errores, 0 warnings                                                                                                      |
| R8 — Tokens de diseño                 | Code: se usan `.eyebrow`, `.card`, `.title-xl`, `.body-copy`, `font-display`, `rgb(…/…)` inline — sin colores hardcodeados nuevos |
