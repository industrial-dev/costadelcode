# CHECKPOINTS — Evaluación del estado final

> En sistemas multi-agente no se evalúa el camino, se evalúa el destino.
> Estos son los checkpoints objetivos que un juez (humano o IA) puede usar
> para decidir si el proyecto está sano.

## C1 — El arnés está completo

- [ ] Existen los 4 archivos base: `AGENTS.md`, `init.sh`, `feature_list.json`,
      `progress/current.md`.
- [ ] Existen los docs: `docs/architecture.md`, `docs/conventions.md`,
      `docs/specs.md`, `docs/verification.md`.
- [ ] `bash init.sh` termina con exit code 0.

## C2 — El estado es coherente

- [ ] Como mucho una feature en `in_progress` en `feature_list.json`.
- [ ] `yarn build` pasa sin errores ni warnings de TypeScript.
- [ ] `progress/current.md` está vacío o describe la sesión activa
      (no contiene basura de sesiones anteriores).

## C3 — El código respeta la arquitectura

- [ ] El contenido textual está en `src/data/site-content.ts`, no hardcodeado.
- [ ] Los tokens de tema están en `src/styles/global.css` bajo `@theme`.
- [ ] No existe `tailwind.config.*`.
- [ ] No hay `console.log` de debug sueltos ni TODOs sin contexto.

## C4 — La verificación es real

- [ ] `yarn build` (`astro check && astro build`) pasa en verde.
- [ ] Las rutas afectadas se han revisado visualmente en `yarn dev`.
- [ ] La verificación se ha hecho en vista mobile (DevTools responsive).

## C5 — La sesión se cerró bien

- [ ] No hay archivos sin trackear sospechosos.
- [ ] `progress/history.md` tiene una entrada por la última sesión.
- [ ] La última feature trabajada está reflejada en su estado correcto.

## C6 — Spec Driven Development

- [ ] Toda feature con `"sdd": true` en estado `spec_ready`, `in_progress`
      o `done` tiene su carpeta `specs/<name>/` con los 3 archivos:
      `requirements.md`, `design.md`, `tasks.md`.
- [ ] `requirements.md` usa EARS estricto (ver `docs/specs.md`).
- [ ] Toda feature `done` con `"sdd": true` tiene todas sus tasks marcadas
      `[x]` en `tasks.md`.
- [ ] Cada `R<n>` de `requirements.md` está cubierto por al menos un criterio
      de verificación concreto en `docs/verification.md` o comprobado manualmente.

---

**Cómo usar este archivo:** un agente revisor (`.claude/agents/reviewer.md`)
recorre cada checkbox, marca `[x]` o `[ ]`, y rechaza el cierre de sesión
si quedan boxes vacíos en C1-C6.
