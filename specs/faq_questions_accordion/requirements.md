# Requirements — faq_questions_accordion

## R1

El sistema DEBE mostrar los textos de encabezado de la sección de preguntas con los siguientes valores exactos: eyebrow "PREGUNTAS Y CONTACTO", title "Respuestas claras antes de dar el paso." e intro "Una comunidad abierta, gratuita y local. Queremos que te sea lo más fácil posible empezar."

## R2

El sistema DEBE incluir un campo `ctaText` en `faq.questions` de `site-content.ts` con el valor "¿Tienes otra duda? Escríbenos y te respondemos rápido."

## R3

El sistema DEBE mostrar los 5 items de preguntas existentes en `faq.questions.items` sin modificar su contenido (pregunta y respuesta de cada uno).

## R4

El sistema DEBE renderizar la sección de preguntas mediante el componente React `FaqAccordion` con las props `items: FaqItem[]` y `ctaText: string`, instanciado con `client:load` en `faq.astro`.

## R5

CUANDO el usuario hace clic en el encabezado de una pregunta cerrada, el sistema DEBE abrir ese ítem mostrando su respuesta con animación de entrada (opacidad de 0 a 1 y altura de 0 a auto).

## R6

CUANDO el usuario hace clic en el encabezado de una pregunta abierta, el sistema DEBE cerrar ese ítem ocultando su respuesta con animación de salida (opacidad de 1 a 0 y altura de auto a 0).

## R7

MIENTRAS un ítem del acordeón está abierto, el sistema DEBE mantener todos los demás ítems cerrados (un solo ítem abierto a la vez; `activeIndex: number | null`).

## R8

El sistema DEBE mostrar el icono `ChevronDown` de lucide-react en cada ítem del acordeón, rotado 180° mediante transición CSS cuando el ítem está abierto y en posición 0° cuando está cerrado.

## R9

El sistema DEBE implementar la animación de apertura y cierre del contenido usando `AnimatePresence` y `motion.div` de Framer Motion 12.

## R10

El sistema DEBE mostrar el acordeón en columna única, ancho completo, sin grid de columnas múltiples, en todos los breakpoints.

## R11

El sistema DEBE mostrar al final del acordeón un bloque CTA que contenga el texto de `ctaText` y un enlace hacia WhatsApp o Telegram obtenido de `shared.ctaLinks`.

## R12

El sistema DEBE aplicar las clases de diseño del proyecto en el componente `FaqAccordion`: `.card` para los ítems del acordeón, `font-display` para los textos de pregunta, `.body-copy` para las respuestas y `.button` (en su variante sutil) para el enlace del CTA.

## R13

El sistema DEBE construir el componente `FaqAccordion` con enfoque mobile-first, asegurando una lectura cómoda en pantallas desde 320 px en adelante.

## R14

El sistema DEBE actualizar el `SectionHeading` de la sección de preguntas en `faq.astro` para reflejar los valores de `R1`.

## R15

El sistema DEBE pasar `items={faq.questions.items}` y `ctaText={faq.questions.ctaText}` como props al componente `FaqAccordion` en `faq.astro`, reemplazando el bloque `<section>` con el grid estático actual.

## R16

El sistema DEBE compilar sin errores TypeScript ni de build tras aplicar todos los cambios (`yarn build` pasa limpio).
