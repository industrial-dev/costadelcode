# Implementacion: community_remove_pillars

## Feature

ID: 3
Nombre: community_remove_pillars
Descripcion: Eliminar seccion de pilares de la pagina de comunidad.

## Lo que se encontro

La seccion de pilares estaba incrustada directamente en `src/pages/comunidad.astro` (lineas 49-72).
Renderizaba `community.pillars.items` con `SectionHeading` y un grid de articulos tipo `card`.

Los datos de pilares siguen existiendo en `src/data/site-content.ts` (campo `community.pillars`)
pero no se referencian desde ningun template activo tras la eliminacion.

No existe un componente dedicado para la seccion (era markup inline en el page).

Archivos con referencias a "pillar/pilar":

- `src/pages/comunidad.astro` — referencia eliminada
- `src/data/site-content.ts` — datos de contenido (sin uso, sin romper nada)
- `src/pages/index.astro` — usa HomePillarsSection (seccion distinta, home page, no tocada)
- `src/components/PillarIcon.astro` — componente de icono usado por HomePillarsSection (no tocado)
- `src/components/HomePillarsSection.astro` — seccion de home (no tocada)

## Cambio realizado

Archivo modificado: `src/pages/comunidad.astro`

Se elimino el bloque completo de la seccion de pilares:

```astro
<section class="section">
  <div class="shell space-y-10">
    <SectionHeading
      eyebrow={community.pillars.eyebrow}
      title={community.pillars.title}
    />
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {
        community.pillars.items.map((pillar, index) => (
          <article ...>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </article>
        ))
      }
    </div>
  </div>
</section>
```

## Verificacion de requirements

- R1 (Seccion de pilares eliminada de la pagina): verificado — el bloque fue removido de comunidad.astro.
- R2 (No hay referencias rotas): verificado — los datos en site-content.ts son ignorados (TypeScript no emite error por datos no usados), el resto de referencias son a componentes de home independientes no afectados.
- R3 (yarn build pasa sin errores): verificado — build completado con exito en 1.94s, 5 paginas generadas, 0 errores.

## Resultado del build

```
[build] 5 page(s) built in 1.94s
[build] Complete!
Done in 12.68s.
```
