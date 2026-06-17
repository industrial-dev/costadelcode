# Bitácora histórica (append-only)

> Cada vez que se cierra una sesión, su resumen se añade aquí.
> No edites entradas anteriores. Solo añades al final.

---

## 2026-06-17 — Bootstrap del proyecto (features 1–4)

- **Agente:** humano (Dani)
- **Cambios:** rediseño de home, integración del globo 3D con Cobe/React,
  página de comunidad con mosaico del fundador, simplificación a español único.
- **Resultado:** landing page con 5 páginas operativa en GitHub Pages.

## 2026-06-17 — Feature 5: harness_sdd

- **Agente:** Claude Code (leader)
- **Plan:** implementar la estructura SDD completa adaptando betta-tech/harness-sdd
  al stack Node.js/Astro del proyecto. Sin suite de tests (sustituido por yarn build).
- **Cambios:** CLAUDE.md, AGENTS.md (reescrito), CHECKPOINTS.md, feature_list.json,
  init.sh, docs/architecture.md, docs/conventions.md, docs/specs.md, docs/verification.md,
  .claude/agents/ (4 archivos), .claude/settings.json, docs/AI_CONTEXT.md (simplificado),
  specs/, progress/.
- **Verificación:** bash init.sh verde.
- **Cierre:** pendiente de aprobación humana.
