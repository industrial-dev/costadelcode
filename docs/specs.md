# Spec Driven Development (SDD)

> Este proyecto sigue un flujo Kiro-style: requirements → design → tasks → code.
> El código no se escribe hasta que el spec está aprobado por un humano.

## Estructura

Cada feature nueva (`"sdd": true` en `feature_list.json`) tiene una carpeta
dedicada en cuanto deja `pending`:

```
specs/<feature-name>/
├── requirements.md   # QUÉ se necesita (EARS notation)
├── design.md         # CÓMO se construirá (decisiones técnicas)
└── tasks.md          # PASOS concretos a implementar
```

El `feature-name` coincide con el campo `name` de `feature_list.json`.

## Estados de una feature

| Estado        | Significado                                                   |
| ------------- | ------------------------------------------------------------- |
| `pending`     | Sin spec. El `spec_author` es el primero en actuar.           |
| `spec_ready`  | Spec drafted. Esperando aprobación humana. NO se toca código. |
| `in_progress` | Spec aprobado. `implementer` trabajando.                      |
| `done`        | Código verificado, `reviewer` aprobó, sesión cerrada.         |
| `blocked`     | Atascado. Razón en `progress/current.md`.                     |

## La puerta de aprobación humana

El flujo automático se detiene **una vez**: cuando el `spec_author` termina
sus tres archivos, marca la feature como `spec_ready` y para. El humano
lee `specs/<feature>/` y dice "aprobado" (o pide cambios).

Solo entonces el `leader` transiciona `spec_ready → in_progress` y lanza
el `implementer`.

```
pending → [spec_author] → spec_ready → ⏸ HUMANO → in_progress → [implementer → reviewer] → done
```

## requirements.md — EARS estricto

Las requirements se redactan en **EARS** (Easy Approach to Requirements
Syntax). Cada requirement es un párrafo numerado con uno de estos cinco
patrones:

| Patrón         | Plantilla                                                   |
| -------------- | ----------------------------------------------------------- |
| **Ubicuo**     | `El sistema DEBE <acción>.`                                 |
| **Evento**     | `CUANDO <disparador>, el sistema DEBE <acción>.`            |
| **Estado**     | `MIENTRAS <estado>, el sistema DEBE <acción>.`              |
| **Opcional**   | `DONDE <feature opcional>, el sistema DEBE <acción>.`       |
| **No deseado** | `SI <evento no deseado> ENTONCES el sistema DEBE <acción>.` |

Reglas duras:

- Cada requirement tiene un id estable: `R1`, `R2`, ...
- Cada requirement DEBE ser verificable (manualmente o con `yarn build`).
- No mezcles varios `DEBE` en un mismo requirement. Si hay más de uno, parte.
- No uses verbos blandos ("podría", "puede", "soporta"). Solo `DEBE` / `NO DEBE`.

Ejemplo:

```markdown
## R1

El sistema DEBE mostrar al menos 3 categorías de recursos en `/recursos/`.

## R2

CUANDO la página `/recursos/` se renderiza, el sistema DEBE mostrar cada
recurso con nombre, descripción breve y enlace externo funcional.
```

## design.md — decisiones técnicas

Captura **antes** de tocar código:

- Qué archivos se crean / modifican (`src/data/site-content.ts`, `src/pages/*.astro`, etc.).
- Qué estructuras de datos nuevas aparecen (tipos TypeScript, nuevas propiedades).
- Qué componentes se crean o reutilizan.
- Qué alternativa se descartó y por qué (mínimo una).

NO es ingeniería desde primeros principios — apóyate en
`docs/architecture.md`, `docs/conventions.md` y `DESIGN.md`. El `design.md` documenta los
puntos donde tu feature roza la frontera de esas reglas.

## tasks.md — checklist ejecutable

Pasos discretos en orden, cada uno con checkbox. Cada task referencia al
menos un `R<n>` que cubre.

Ejemplo:

```markdown
- [ ] T1 — Añadir tipo `Resource` en `src/data/site-content.ts`. Cubre: R1, R2.
- [ ] T2 — Añadir array `recursos` con 3 categorías en `site-content.ts`. Cubre: R1.
- [ ] T3 — Crear componente `ResourceCard.astro` con props `name`, `description`, `url`. Cubre: R2.
- [ ] T4 — Actualizar `src/pages/recursos.astro` para renderizar las categorías. Cubre: R1, R2.
- [ ] T5 — Verificar `yarn build` pasa y revisar `/recursos/` en `yarn dev`. Cubre: todos.
```

El `implementer` marca `[x]` cada task al completarla. El `reviewer`
rechaza si queda alguna `[ ]` sin justificación documentada.

## Cuándo NO aplica SDD

Las features con `"sdd": false` o sin el campo `sdd` (las legacy 1–5) NO
tienen spec. SDD solo se aplica hacia adelante.
