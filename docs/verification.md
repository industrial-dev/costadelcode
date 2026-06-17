# Verificación — Cómo demostrar que el trabajo funciona

> Regla de oro: **el agente no dice "funciona", lo demuestra**.
> Toda feature termina con evidencia ejecutable, no con afirmaciones.

## Niveles de verificación

### Nivel 1 — Build limpio (obligatorio)

`yarn build` ejecuta `astro check` (TypeScript + sintaxis Astro) seguido del
build estático completo.

- Detecta errores de tipos, props inválidas, imports rotos, HTML malformado.
- Debe pasar en verde antes de cualquier commit (Husky pre-commit lo fuerza).

Comando:

```bash
yarn build
```

### Nivel 2 — Revisión visual en dev server (obligatorio para features de UI)

Las features que añaden o modifican páginas o componentes se verifican
arrancando el servidor de desarrollo y revisando en el navegador:

```bash
yarn dev
# → http://localhost:4321
```

Checklist mínimo:

- [ ] Las rutas afectadas renderizan sin errores.
- [ ] El contenido es correcto (texto, imágenes, links).
- [ ] La vista mobile (DevTools → responsive) es legible.
- [ ] La navegación entre páginas funciona.

### Nivel 3 — Trazabilidad de requirements (obligatorio para features con `"sdd": true`)

Cada `R<n>` de `specs/<name>/requirements.md` debe poder verificarse:

- Con `yarn build` (si es una propiedad estructural del código), o
- Manualmente en `yarn dev` (si es visual o de comportamiento).

El implementer documenta el mapa en `progress/impl_<name>.md`:

```markdown
## Trazabilidad

- R1 → verificado en yarn dev: /recursos/ muestra 3 categorías
- R2 → verificado en yarn dev: cada recurso tiene nombre, descripción y enlace
- R3 → verificado con yarn build: tipos TypeScript correctos
```

## Anti-patrones (no hacer)

- ❌ "He añadido el componente, debería funcionar." → falta revisión en dev server.
- ❌ Marcar la feature como `done` sin pasar `bash init.sh`.
- ❌ Dejar `yarn build` en rojo y commitear igualmente.
- ❌ Hardcodear contenido en componentes en lugar de `site-content.ts`.

## Verificación final antes de cerrar

```bash
bash init.sh   # debe terminar con [OK] Entorno listo
yarn build     # debe pasar sin errores
```

Si alguno falla, **no** marques nada como `done`. Anota el bloqueo
en `progress/current.md` con estado `blocked` en `feature_list.json`.
