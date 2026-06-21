# Design — community_share

## Contexto

La sección de setups en `src/pages/comunidad.astro` (líneas 123-128) contiene
un `<a>` con el label "Quiero compartir mi configuración" que apunta a
`sharedLinks.instagram`. Esta feature elimina ese enlace y lo reemplaza por un
botón que abre un modal React con formulario de propuesta.

---

## Archivos a modificar

| Archivo                     | Cambio                                                                                                                                                               |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/site-content.ts`  | Reemplazar la propiedad `cta` del objeto `setups` (actualmente `{ label, href, variant }`) por una nueva propiedad `shareModal` con los textos del modal y el botón. |
| `src/pages/comunidad.astro` | Eliminar el `<a>` de compartir. Importar y montar `<ProposeSetupModal client:load />` pasando los textos desde `site-content`.                                       |

## Archivos a crear

| Archivo                                | Descripción                                                                                                      |
| -------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `src/components/ProposeSetupModal.tsx` | Componente React con estado cliente: botón disparador, modal overlay, formulario con validación y mock de envío. |

---

## Tipos TypeScript nuevos

### En `src/data/site-content.ts`

```ts
export type SetupShareModal = {
  triggerLabel: string;      // texto del botón que abre el modal
  modalTitle: string;        // título del modal
  fields: {
    name: { label: string; placeholder: string };
    description: { label: string; placeholder: string };
    images: { label: string; hint: string };
  };
  submitLabel: string;       // texto del botón submit
  submittingLabel: string;   // texto durante el mock delay
  successMessage: string;    // mensaje tras el mock de envío
  errorRequired: string;     // mensaje genérico de campo obligatorio
  closeLabel: string;        // aria-label del botón de cierre
};
```

La propiedad `cta` del objeto `setups` se sustituye por `shareModal: SetupShareModal`.

### En `src/components/ProposeSetupModal.tsx`

```ts
interface Props {
  modal: SetupShareModal;
}
```

Estado interno del componente (no expuesto):

```ts
type FormState = 'idle' | 'submitting' | 'success';

interface FormValues {
  name: string;
  description: string;
  images: FileList | null;
}

interface FormErrors {
  name?: string;
  description?: string;
}
```

---

## Componente: ProposeSetupModal.tsx

- Es un componente React (`.tsx`) porque requiere estado cliente: apertura del
  modal, validación en tiempo real y gestión del ciclo de vida del formulario.
- Se monta con `client:load` en `comunidad.astro`.
- Renderiza siempre el botón disparador; el overlay solo se renderiza cuando
  el modal está abierto (`isOpen === true`).
- El overlay usa un `<dialog>`-like div con `position: fixed; inset: 0` y
  backdrop semitransparente. Se evita el elemento `<dialog>` nativo por
  compatibilidad con el modo estático de Astro y para mantener control total
  del estilo con Tailwind tokens.
- El mock de envío: `setTimeout` de 1 000 ms que resuelve con estado `success`.
  No hay `fetch`, `XMLHttpRequest` ni llamada de red.
- Al abrir el modal se añade `overflow-hidden` a `document.body`; al cerrar se
  elimina (R9). Se limpia en el cleanup de `useEffect`.
- La tecla Escape se captura con un `keydown` listener en `useEffect` (R8).

---

## Tokens de diseño utilizados

Se reutilizan los tokens existentes de `src/styles/global.css` y las clases de
`docs/conventions.md`:

- Overlay: `bg-ink-950/60 backdrop-blur-sm`
- Panel modal: `card` (rounded, soft border, shadow)
- Botón de envío: `.button-primary`
- Botón disparador: `.button-ghost` o `.button-secondary` (coherente con el
  botón previo)
- Tipografía: `.title-xl` para el heading del modal, `.body-copy` para hints

---

## Contenido en site-content.ts

Todos los strings visibles del modal (títulos, labels, placeholders, mensajes
de error y éxito) viven en `site-content.ts` bajo
`pages.community.setups.shareModal`. Ningún string está hardcodeado en el
componente React.

---

## Alternativa descartada

**Usar el elemento `<dialog>` nativo de HTML con `showModal()`.**

Descartado porque:

1. Astro renderiza en build time: el atributo `open` gestionado por JS nativo
   requeriría una referencia al DOM con `ref`, añadiendo complejidad sin
   beneficio real dado que el componente ya es React.
2. El estilo del backdrop de `<dialog>` no es controlable con las clases
   Tailwind v4 de este proyecto (requeriría `::backdrop` en CSS ad-hoc),
   violando la regla de "no estilos inline ni CSS ad-hoc en componentes".
3. La solución div+fixed mantiene control completo del diseño con los tokens
   existentes y tiene soporte universal.
