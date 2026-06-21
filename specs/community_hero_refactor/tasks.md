# Tasks — community_hero_refactor

El implementer ejecuta estas tasks en orden y marca `[x]` al completar cada una.
El reviewer rechaza si queda alguna `[ ]` sin justificación documentada.

---

- [x] T1 — Actualizar el tipo `CommunityPage` en `src/data/site-content.ts`:
      añadir `founderIntro: { name: string; note: string; eyebrow: string }` dentro
      de `hero`; marcar `origin` como opcional (`origin?:`). Cubre: R5, R6.

- [x] T2 — Actualizar los datos de `community.hero` en `src/data/site-content.ts`:
      reducir `description` a un solo párrafo conciso; añadir el objeto `founderIntro`
      con `name: 'Daniel Núñez'`, `eyebrow: 'Fundador · Estepona'` y `note` tomada
      del actual `community.origin.founderNote`. Cubre: R3, R6.

- [x] T3 — Refactorizar el bloque hero en `src/pages/comunidad.astro`:
      cambiar el grid de dos columnas a una composición de una columna editorial
      (`max-w-2xl` o similar centrado), eliminando el `<aside>` del bloque `origin`
      y sustituyéndolo por un bloque `.card` embebido que muestre
      `community.hero.founderIntro.eyebrow`, `community.hero.founderIntro.name` y
      `community.hero.founderIntro.note`. Cubre: R1, R2, R4, R6, R8.

- [x] T4 — Verificar en `comunidad.astro` que no quedan referencias a
      `community.origin.*` (ya que el campo es ahora opcional y los datos se
      movieron a `hero.founderIntro`). Si el campo `origin` ya no se usa en ningún
      template, puede quedar en el dato pero no debe renderizarse. Cubre: R2, R5.

- [x] T5 — Ejecutar `yarn build` y confirmar que termina sin errores de
      compilación ni de tipos (`astro check`). Cubre: R5, R7.

- [ ] T6 — (manual) Verificar visualmente en `yarn dev`: abrir `/` y `/comunidad/` en
      paralelo y confirmar que los dos heroes son visualmente distintos (sin globo,
      sin stats cards en comunidad; tarjeta fundador integrada visible). Cubre: R1,
      R3, R4.
