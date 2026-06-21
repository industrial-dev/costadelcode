# Impl — faq_questions_accordion

## Trazabilidad R -> verificacion

| Req | Verificacion                                                                                                                                                                                         |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| R1  | `esContent.pages.faq.questions` en `site-content.ts` lineas 667-669: eyebrow='PREGUNTAS Y CONTACTO', title='Respuestas claras antes de dar el paso.', intro='Una comunidad abierta...'. Build verde. |
| R2  | Campo `ctaText: string` en tipo `FaqPage.questions` (linea 222) y valor en data (linea 670). Build TypeScript confirma tipado correcto.                                                              |
| R3  | Los 5 items de `faq.questions.items` no fueron modificados.                                                                                                                                          |
| R4  | `FaqAccordion.tsx` creado con props `items`, `ctaText`, `ctaHref`. Instanciado con `client:load` en `faq.astro`. `aria-expanded` y `aria-controls`/`id` presentes.                                   |
| R5  | `toggle(i)` setea `activeIndex = i` cuando estaba cerrado. `AnimatePresence` anima entrada con `initial={{ opacity:0, height:0 }}` -> `animate={{ opacity:1, height:'auto' }}`.                      |
| R6  | `toggle(i)` setea `activeIndex = null` cuando `activeIndex === i`. `exit={{ opacity:0, height:0 }}`.                                                                                                 |
| R7  | Estado es `number                                                                                                                                                                                    | null`, un solo `activeIndex`activo. Al abrir uno nuevo el anterior se desmonta via`AnimatePresence`. |
| R8  | `ChevronDown` de lucide-react con `transition-transform duration-200` y clase `rotate-180` condicional cuando `isOpen`.                                                                              |
| R9  | `AnimatePresence initial={false}` + `motion.div` con `initial/animate/exit` de opacidad y altura, `style={{ overflow:'hidden' }}`, `transition={{ duration:0.22, ease:'easeInOut' }}`.               |
| R10 | Lista en `flex flex-col gap-3`, sin grid de columnas multiples.                                                                                                                                      |
| R11 | Bloque CTA al final: `<p>` con `ctaText` y `<a href={ctaHref}>` con `target="_blank"`. `ctaHref` viene de `shared.ctaLinks[0].href` en `faq.astro`.                                                  |
| R12 | `.card` en cada `<li>`, `font-display` en texto de pregunta, `.body-copy` en respuesta, `button button-secondary` en enlace CTA.                                                                     |
| R13 | Layout `flex flex-col` (mobile-first); CTA row cambia a `sm:flex-row` en pantallas anchas.                                                                                                           |
| R14 | `SectionHeading` en `faq.astro` consume `faq.questions.eyebrow/title/intro` que ahora tienen los valores R1.                                                                                         |
| R15 | `faq.astro` pasa `items={faq.questions.items}` y `ctaText={faq.questions.ctaText}` a `FaqAccordion`. Grid estatico eliminado.                                                                        |
| R16 | `yarn build` termina con exit code 0. Nota: se uso `shared.ctaLinks[0].href` (propiedad real de `CtaLink`) en lugar de `.ctaHref` que no existe en el tipo.                                          |

## Nota de implementacion

La instruccion original indicaba `ctaHref={shared.ctaLinks[0].ctaHref}` pero `CtaLink` expone `.href`, no `.ctaHref`. Se uso `.href` para que el build TypeScript pasara limpio. El design.md confirma que la prop correcta es `.href` (linea 93: `ctaHref={shared.ctaLinks[0].href}`).
