# Design — faq_questions_accordion

## Archivos a modificar / crear

| Archivo                           | Acción    | Motivo                                                                         |
| --------------------------------- | --------- | ------------------------------------------------------------------------------ |
| `src/data/site-content.ts`        | Modificar | Actualizar textos de `faq.questions` y añadir campo `ctaText`                  |
| `src/components/FaqAccordion.tsx` | Crear     | Componente React interactivo del acordeón                                      |
| `src/pages/faq.astro`             | Modificar | Importar `FaqAccordion`, reemplazar grid estático, actualizar `SectionHeading` |

## Cambios en `src/data/site-content.ts`

### Tipo `FaqPage` — campo nuevo

```typescript
questions: {
  eyebrow: string;
  title: string;
  intro: string;
  ctaText: string;   // campo nuevo
  items: FaqItem[];
};
```

### Valores actualizados en `esContent.pages.faq.questions`

```typescript
eyebrow: 'PREGUNTAS Y CONTACTO',
title: 'Respuestas claras antes de dar el paso.',
intro: 'Una comunidad abierta, gratuita y local. Queremos que te sea lo más fácil posible empezar.',
ctaText: '¿Tienes otra duda? Escríbenos y te respondemos rápido.',
```

Los 5 items de `FaqItem[]` no cambian.

## Componente `FaqAccordion.tsx`

### Props

```typescript
interface FaqAccordionProps {
  items: FaqItem[];
  ctaText: string;
}
```

`FaqItem` ya existe en `site-content.ts` como `{ question: string; answer: string }` y se importa desde ese módulo.

### Estado

```typescript
const [activeIndex, setActiveIndex] = useState<number | null>(null);
```

Un único índice activo. Al pulsar un ítem ya abierto, se cierra (se asigna `null`). Al pulsar uno cerrado, se abre el nuevo y cierra el anterior.

### Animación

- `AnimatePresence` de Framer Motion 12 envuelve cada bloque de respuesta.
- `motion.div` con `initial={{ opacity: 0, height: 0 }}`, `animate={{ opacity: 1, height: 'auto' }}`, `exit={{ opacity: 0, height: 0 }}` y `transition={{ duration: 0.22, ease: 'easeInOut' }}`.
- `overflow: hidden` en el `motion.div` para evitar desbordamiento durante la animación.

### Icono

`ChevronDown` de lucide-react. Clase Tailwind `transition-transform duration-200` con `rotate-180` cuando el ítem está activo.

### Layout del acordeón

- Lista de ítems en columna única (`flex flex-col gap-3` o `space-y-3`).
- Cada ítem usa la clase `.card` del proyecto con `p-5` o `p-6`.
- El botón de cabecera ocupa el ancho completo (`w-full`), alineación `justify-between`.
- El texto de la pregunta usa `font-display text-lg font-semibold text-ink-950`.
- El texto de la respuesta usa la clase `.body-copy` con padding-top.

### Bloque CTA

Al final del acordeón, fuera de la lista de ítems:

- `<p>` con el texto `ctaText` usando `.body-copy text-stone-500`.
- `<a>` hacia el primer enlace de `ctaLinks` que tenga `platform: 'whatsapp'` (o `telegram` como fallback). El enlace recibe clases `button button-secondary` para mantener el tono sutil.
- El componente recibe `ctaText` como prop. El enlace CTA se pasa como prop adicional desde `faq.astro` o se hardcodea a `shared.ctaLinks[0].href`. Dado que el componente es React y no tiene acceso directo al contenido compartido, `faq.astro` pasa el href del enlace como prop `ctaHref: string`.

> **Ajuste de prop**: el componente necesita `ctaHref` además de `ctaText`. Se añade a la interfaz:
>
> ```typescript
> interface FaqAccordionProps {
>   items: FaqItem[];
>   ctaText: string;
>   ctaHref: string;
> }
> ```
>
> En `faq.astro`, se pasa `ctaHref={shared.ctaLinks[0].href}` (que apunta a WhatsApp).

### Accesibilidad

- El botón de cabecera tiene `aria-expanded={activeIndex === i}` y `aria-controls={`faq-answer-${i}`}`.
- El bloque de respuesta tiene `id={`faq-answer-${i}`}`.

## Cambios en `faq.astro`

1. Importar `FaqAccordion` desde `../components/FaqAccordion`.
2. Reemplazar la `<section class="section section-border">` actual (con el `div.grid` y el `.map` de cards) por:

```astro
<section class="section section-border">
  <div class="shell space-y-10">
    <SectionHeading
      eyebrow={faq.questions.eyebrow}
      title={faq.questions.title}
      body={faq.questions.intro}
    />
    <FaqAccordion
      items={faq.questions.items}
      ctaText={faq.questions.ctaText}
      ctaHref={shared.ctaLinks[0].href}
      client:load
    />
  </div>
</section>
```

El `SectionHeading` ya consume los campos correctos; los nuevos valores vendrán del contenido actualizado.

## Alternativa descartada

**Usar `<details>`/`<summary>` HTML nativo con animación CSS.**

Motivo del descarte: la animación de altura con `<details>` en CSS puro no es posible en todos los navegadores sin JavaScript adicional (la propiedad `height: auto` no es animable directamente). El proyecto ya incluye Framer Motion 12 como dependencia (ver `GlobeHero.tsx`), por lo que reutilizarlo con `AnimatePresence` + `motion.div` es coherente con la arquitectura existente, produce la animación fluida requerida y no añade dependencias nuevas.

## Dependencias

No se añaden nuevas dependencias npm. Se reutilizan:

- `framer-motion` (ya instalada, usada en `GlobeHero.tsx`)
- `lucide-react` (ya instalada, usada en `ResourcesWidget.tsx`)
