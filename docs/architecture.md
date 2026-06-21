# Arquitectura — Qué significa "hacer un buen trabajo"

> Este documento define el estándar de calidad. Los agentes revisores
> evalúan código contra este archivo. Si no está aquí, no es un requisito.

## Principios

1. **Capas claras.** El proyecto tiene tres capas y solo tres:
   - `src/data/` — contenido y configuración (fuente única de verdad).
   - `src/components/` — componentes Astro (estáticos) y React (interactivos).
   - `src/pages/` — páginas con enrutamiento basado en archivos.
     No introducir capas adicionales (stores, servicios, routers) hasta que
     haya una razón concreta documentada en `feature_list.json`.

2. **Contenido en data, no en componentes.** Todo texto visible en la web
   vive en `src/data/site-content.ts`. Los componentes reciben datos como
   props. No hay strings hardcodeados en `.astro` ni `.tsx`.

3. **React solo donde haya estado cliente.** Los componentes Astro son la
   norma. React (`.tsx`) solo cuando se necesite interactividad real
   (actualmente: `GlobeHero.tsx`). No crear componentes React por costumbre.

4. **Estilo centralizado.** Los tokens de diseño (colores, fuentes, sombras)
   viven en `src/styles/global.css` bajo la directiva `@theme` de Tailwind v4.
   No crear `tailwind.config.*`. No poner variables CSS ad-hoc en componentes.

5. **Sitio completamente estático.** No hay API routes, SSR ni estado de
   servidor. Astro genera HTML en build time. Toda la lógica dinámica
   ocurre en el cliente o es pre-renderizada.

## Flujo de datos

```
src/data/site-content.ts  (contenido)
         │
         └─→  src/pages/*.astro  (página)
                    │
                    └─→  src/components/*.astro / .tsx  (presentación)
                               │
                               └─→  src/styles/global.css  (tokens @theme)
```

## Mapa de páginas

| Ruta          | Archivo           | Componentes principales                               |
| ------------- | ----------------- | ----------------------------------------------------- |
| `/`           | `index.astro`     | HomeHeroSection, HomePillarsSection, HomeEventSection |
| `/comunidad/` | `comunidad.astro` | CommunityMosaicSection                                |
| `/recursos/`  | `recursos.astro`  | —                                                     |
| `/eventos/`   | `events.astro`    | EventCard, HomeEventSection                           |
| `/faq/`       | `faq.astro`       | —                                                     |

Todas las páginas comparten: `BaseLayout` → `SiteHeader` + `JoinCta` + `SiteFooter`.

## Qué NO hacer

- No hardcodear texto en componentes. Todo a `site-content.ts`.
- No usar `console.log` para debug. Elimínalo antes de commitear.
- No añadir dependencias npm sin discutirlo primero (`status: "blocked"`).
- No mezclar lógica de contenido con presentación dentro de un componente.
- No crear `tailwind.config.*`.
