# Tasks — faq_questions_accordion

- [x] T1 — Añadir el campo `ctaText: string` al tipo `FaqPage.questions` en `src/data/site-content.ts`. Cubre: R2, R16.

- [x] T2 — Actualizar los valores de `esContent.pages.faq.questions` en `src/data/site-content.ts`: cambiar `eyebrow`, `title`, `intro` a los textos aprobados y añadir `ctaText`. Los 5 items de `FaqItem[]` no se tocan. Cubre: R1, R2, R3.

- [x] T3 — Crear `src/components/FaqAccordion.tsx` con las props `items: FaqItem[]`, `ctaText: string` y `ctaHref: string`. Importar `FaqItem` desde `../data/site-content`. Cubre: R4, R16.

- [x] T4 — Implementar el estado `activeIndex: number | null` en `FaqAccordion.tsx` con la lógica toggle (abrir uno cierra el anterior). Cubre: R5, R6, R7.

- [x] T5 — Añadir el icono `ChevronDown` de lucide-react en cada ítem del acordeón con rotación CSS de 180° cuando está activo (`transition-transform duration-200 rotate-180`). Cubre: R8.

- [x] T6 — Implementar la animación de apertura/cierre con `AnimatePresence` y `motion.div` de Framer Motion 12 (`initial`, `animate`, `exit` de opacidad y altura, `overflow: hidden`). Cubre: R9.

- [x] T7 — Aplicar layout en columna única (`flex flex-col`) y clases del proyecto (`.card` en ítems, `font-display` en preguntas, `.body-copy` en respuestas). Cubre: R10, R12, R13.

- [x] T8 — Añadir atributos de accesibilidad `aria-expanded` y `aria-controls`/`id` al botón y al bloque de respuesta. Cubre: R4.

- [x] T9 — Añadir bloque CTA al final de `FaqAccordion.tsx` con el texto `ctaText` (clase `.body-copy text-stone-500`) y enlace `ctaHref` (clases `button button-secondary`). Cubre: R11, R12.

- [x] T10 — Actualizar `src/pages/faq.astro`: importar `FaqAccordion`, reemplazar el bloque `<section>` con el grid estático por el nuevo bloque con `<FaqAccordion client:load ...>`, y pasar `items`, `ctaText` y `ctaHref={shared.ctaLinks[0].href}`. El `SectionHeading` consumirá automáticamente los nuevos valores del content. Cubre: R4, R14, R15.

- [x] T11 — Verificar que `yarn build` pasa sin errores TypeScript ni de compilación, y revisar visualmente `/faq/` en `yarn dev`: acordeón funcional, animación suave, icono rotando, CTA visible, layout mobile-first correcto. Cubre: R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11, R12, R13, R14, R15, R16.
