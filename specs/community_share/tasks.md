# Tasks — community_share

## Lista de tareas

- [ ] T1 — Añadir el tipo `SetupShareModal` en `src/data/site-content.ts` y
      reemplazar la propiedad `cta` de `setups` por `shareModal: SetupShareModal`
      con todos los textos en español. Cubre: R1, R2, R3, R4, R6, R7, R8.

- [ ] T2 — Crear `src/components/ProposeSetupModal.tsx` con:
  - Estado `isOpen`, `formValues`, `formErrors`, `formState`.
  - Botón disparador que abre el modal (R3).
  - Overlay con panel modal (R2).
  - Campos de formulario: nombre (text), descripción (textarea), imágenes
    (file input, `accept="image/*"`) (R4).
  - Validación en submit: campos obligatorios vacíos bloquean envío y muestran
    mensajes de error (R5).
  - Mock de envío: `setTimeout` 1 000 ms → estado `success` → mensaje de
    confirmación (R6, R7).
  - Cierre por botón X y tecla Escape (R8).
  - `overflow-hidden` en `document.body` mientras el modal está abierto (R9).
  - Todos los textos recibidos como prop `modal: SetupShareModal` (sin strings
    hardcodeados).

- [ ] T3 — Modificar `src/pages/comunidad.astro`:
  - Eliminar el `<a href={community.setups.cta.href} ...>` (líneas 123-128). (R1)
  - Importar `ProposeSetupModal` y montarlo con `client:load` pasando
    `modal={community.setups.shareModal}`. (R2, R3)

- [ ] T4 — Verificar que `yarn build` pasa sin errores de TypeScript ni Astro.
      Abrir `yarn dev` y comprobar visualmente en `/comunidad/`:
  - El botón enlace a Instagram ha desaparecido. (R1)
  - El botón disparador del modal es visible. (R3)
  - El modal se abre al pulsar el botón. (R2)
  - El formulario muestra errores si se envía vacío. (R5)
  - El formulario muestra mensaje de éxito tras rellenar y enviar. (R6, R7)
  - El modal se cierra con el botón X y con Escape. (R8)
  - El scroll del fondo se bloquea cuando el modal está abierto. (R9)
  - No hay errores en consola del navegador.
    Cubre: R1, R2, R3, R4, R5, R6, R7, R8, R9, R10.
