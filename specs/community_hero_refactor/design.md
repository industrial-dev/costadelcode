# Design — community_hero_refactor

## Resumen

Refactorizar el hero de `/comunidad/` para integrar la información del
fundador directamente en la sección hero, eliminar el aside lateral separado
(`origin`), reducir la densidad de texto, y lograr un tratamiento visual
diferenciado respecto al hero del home (`HomeHeroSection.astro`).

---

## Archivos a modificar

| Archivo                     | Tipo de cambio                                                                                                  |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `src/data/site-content.ts`  | Modificar tipo `CommunityPage` y datos de `community.hero`; eliminar o marcar opcionales los campos de `origin` |
| `src/pages/comunidad.astro` | Refactorizar sección hero: nuevo layout, eliminar `<aside>` de origin, integrar datos del fundador              |

## Archivos a NO crear

El `TerminalHero.tsx` referenciado en el contexto de la tarea **no existe**
en el repositorio (git status lo muestra como untracked pero no hay archivo).
El spec no depende de él y no se crea ningún componente React nuevo para
esta feature: la lógica del hero es estática y no requiere estado cliente.

---

## Estructura de datos nueva en `site-content.ts`

### Cambios en `CommunityPage`

Se añade un sub-objeto `founderIntro` bajo `hero` para agrupar los datos del
fundador que ahora vivirán integrados en el hero. Se eliminan o marcan
opcionales los campos del bloque `origin` que ya no se renderizan por separado.

```typescript
// Antes (CommunityPage.hero)
hero: {
  eyebrow: string;
  title: string;
  intro: string;
  description: string[];
}

// Después (CommunityPage.hero)
hero: {
  eyebrow: string;
  title: string;
  intro: string;
  description: string[];   // reducido a 1 párrafo conciso
  founderIntro: {
    name: string;          // "Dani Gevorkian"
    note: string;          // cita personal del fundador (actualmente en origin.founderNote)
    eyebrow: string;       // etiqueta tipo "Fundador · Estepona"
  };
}

// origin pasa a ser optional en el tipo para no romper referencias
// que pudieran existir; sus datos se mueven a hero.founderIntro
origin?: {
  eyebrow: string;
  title: string;
  description: string;
  founderNote: string;
}
```

---

## Nuevo layout del hero en `comunidad.astro`

La sección hero pasa de un grid de dos columnas (contenido + aside) a una
composición de una sola columna ancha con dos zonas diferenciadas:

1. **Zona principal** (ancho completo): eyebrow + título + intro (máx. 1 párrafo).
2. **Zona fundador** (tarjeta integrada, no aside): muestra el nombre del
   fundador, su eyebrow/etiqueta y su nota personal, visualmente tratada como
   un bloque embebido dentro del hero (no fuera de él).

### Diferenciación visual respecto a HomeHeroSection

| Elemento                         | Home hero                           | Community hero                                      |
| -------------------------------- | ----------------------------------- | --------------------------------------------------- |
| Elemento visual derecho          | GlobeHero (React, interactivo)      | Ausente — reemplazado por bloque fundador integrado |
| Stats cards                      | Sí (3 tarjetas métricas)            | No                                                  |
| Código monospace sobre el título | Sí (`hero.code`)                    | No (se usa solo `.eyebrow`)                         |
| Distribución                     | Dos columnas en md+ (texto + globo) | Una columna centrada con máx-width editorial        |
| Tarjeta fundador                 | Ausente                             | Presente, embebida en el hero                       |

El efecto diferenciador elegido para el hero de comunidad es una composición
editorial de una columna con la tarjeta del fundador integrada como bloque
subordinado (no lateral), usando la clase `.card` con padding más generoso y
sin el globo.

---

## Alternativa descartada

**Crear un componente `CommunityHeroSection.astro` separado**

Se estudió extraer el hero en un componente propio (como `HomeHeroSection.astro`)
para mantener `comunidad.astro` limpio. Se descartó porque:

1. El `architecture.md` no lista un componente hero de comunidad en el mapa de
   páginas y no hay patrón establecido de extraer heroes de página como
   componentes fuera del home.
2. La feature no requiere reutilización en otras páginas.
3. Extraer añade un archivo sin aportar abstracción reutilizable, aumentando
   la carga cognitiva sin beneficio arquitectónico real.

La implementación correcta edita directamente el bloque hero inline en
`comunidad.astro`, que es el patrón que ya usan `eventos.astro`, `faq.astro`
y `recursos.astro`.

---

## Restricciones

- No se crea ningún componente React (`.tsx`). El hero de comunidad es
  completamente estático.
- No se introduce `tailwind.config.*`.
- Todo el texto permanece en `src/data/site-content.ts`.
- Se mantienen los tokens de `src/styles/global.css` sin modificación.
- La sección `CommunityMosaicSection` y el resto de secciones de la página
  permanecen intactas.
