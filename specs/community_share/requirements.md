# Requirements — community_share

Feature: Eliminar botón de compartir configuración y añadir modal de propuesta.

## Acceptance criteria de referencia

- Botón de compartir configuración eliminado.
- yarn build pasa sin errores.

---

## R1

El sistema NO DEBE renderizar el enlace/botón con label "Quiero compartir mi
configuración" en la sección de setups de `/comunidad/`.

## R2

CUANDO el usuario activa el disparador de propuesta de configuración, el sistema
DEBE mostrar un modal superpuesto accesible que contenga un formulario de
propuesta.

## R3

El sistema DEBE renderizar en la sección de setups de `/comunidad/` un botón que,
al ser pulsado, abra el modal definido en R2.

## R4

El formulario del modal DEBE incluir los siguientes campos:

- **Nombre** (texto, obligatorio).
- **Descripción** (textarea, obligatorio).
- **Imagen(es)** (file input, opcional, acepta solo tipos de imagen: image/\*).

## R5

CUANDO el usuario intenta enviar el formulario con uno o más campos obligatorios
vacíos, el sistema DEBE impedir el envío y mostrar un mensaje de error junto a
cada campo inválido.

## R6

CUANDO el usuario envía el formulario con todos los campos obligatorios
correctamente rellenos, el sistema DEBE mostrar un mensaje de confirmación
visible dentro del modal e impedir un segundo envío del mismo formulario.

## R7

El envío del formulario DEBE ser mockeado: el sistema NO DEBE realizar ninguna
llamada de red real a un servicio de correo. El mock DEBE resolverse con éxito
tras un retardo simulado de entre 500 ms y 1500 ms.

## R8

CUANDO el modal está abierto, el sistema DEBE permitir cerrarlo mediante:

- un botón de cierre explícito dentro del modal, y
- la tecla Escape del teclado.

## R9

CUANDO el modal está abierto, el sistema DEBE impedir el scroll del documento
subyacente.

## R10

El sistema DEBE pasar `yarn build` sin errores de TypeScript, Astro ni sintaxis.
