# Design — community_why_redesign

Feature id: 2

---

## Estado actual

La sección "El por qué" vive en `src/pages/comunidad.astro` entre las líneas
46–68. Usa un grid de dos columnas: a la izquierda `SectionHeading` y a la
derecha un `.card` con una `<ul>` plana. Cada item de la lista tiene un dot
amarillo (`bg-accent-500`) y texto pequeño (`text-sm`). El diseño es funcional
pero poco llamativo: el card derecho apenas tiene jerarquía visual y los puntos
se leen como una lista genérica.

## Objetivo del rediseño

Transformar la lista plana en un conjunto de tarjetas/items visualmente
diferenciados que comuniquen propósito con más impacto editorial, manteniendo
coherencia total con la paleta y tipografía del proyecto.

---

## Archivos a modificar

| Archivo                                    | Tipo de cambio                                                                                              |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `src/pages/comunidad.astro`                | Sustituir el bloque `<section>` de `community.purpose` (lineas 46–68) por la nueva estructura o componente. |
| `src/components/CommunityWhySection.astro` | Nuevo componente (creacion). Encapsula la sección rediseñada.                                               |
| `src/data/site-content.ts`                 | Sin cambios en tipos ni contenido; el componente nuevo recibe `community.purpose` como prop.                |

No se modifican `src/styles/global.css` ni `src/data/i18n.ts`.

---

## Nuevos tipos TypeScript

No se introducen tipos nuevos. El componente recibe el tipo ya existente:

```typescript
// prop del nuevo componente
interface Props {
  purpose: CommunityPage['purpose'];
}
```

`CommunityPage['purpose']` ya está definido en `site-content.ts`:

```typescript
purpose: {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}
```

---

## Componente nuevo: CommunityWhySection.astro

### Ubicacion

`src/components/CommunityWhySection.astro`

### Responsabilidad

Renderizar la sección "El por qué" con estructura editorial mejorada:
encabezado a la izquierda, y a la derecha un grid de tarjetas individuales
(una por punto), cada una con numero ordinal en mono, texto del punto en sans,
y borde sutil con acento en hover.

### Estructura de markup propuesta

```
<section class="section section-border">
  <div class="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">

    <!-- columna izquierda: SectionHeading existente -->
    <SectionHeading eyebrow={...} title={...} body={...} />

    <!-- columna derecha: lista de reason-cards -->
    <ul class="space-y-3">
      {points.map((point, i) => (
        <li class="card flex gap-4 p-5 items-start">
          <span class="font-mono text-accent-500 text-lg leading-none mt-0.5 shrink-0">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span class="body-copy">{point}</span>
        </li>
      ))}
    </ul>
  </div>
</section>
```

Notas de estilo:

- El numero ordinal usa `font-mono` (`VT323`) y `text-accent-500` para dar sabor tecnico sin romper la paleta.
- Cada item es una `<li>` con la clase `.card` del proyecto (superficies redondeadas, sombra suave).
- El texto del punto usa `.body-copy` para legibilidad.
- El gap entre numero y texto es `gap-4`.
- No se añaden animaciones adicionales mas alla de las ya presentes en `.card` (hover sutil).

---

## Alternativa descartada

**Alternativa: tres columnas de tarjetas grandes con icono SVG custom**

Se consideró un grid de 3 columnas donde cada punto ocupa una tarjeta cuadrada
con un icono ilustrativo (similar a `HomePillarsSection.astro`). Se descartó
porque:

1. `community.purpose.points` tiene 3 items de texto largo; convertirlos en
   tarjetas cuadradas con icono requeriría añadir una propiedad `icon` al tipo
   `purpose`, lo que implica cambiar `site-content.ts` e introduce acoplamiento
   de presentacion en los datos.
2. Los iconos SVG custom supondrian añadir nuevos assets no existentes en el
   proyecto, aumentando el scope innecesariamente.
3. El patron de numero ordinal + texto largo es mas editorial y coherente con
   el tono del proyecto (no startup-generic).

---

## Consideraciones de accesibilidad

- La lista usa semantica `<ul>/<li>` apropiada.
- El numero ordinal va dentro del `<li>`, no es un pseudo-elemento CSS, por lo
  que los lectores de pantalla lo leeran de forma natural.
- El contraste de `text-accent-500` sobre `cream-50` supera 3:1 para texto
  decorativo (numero ordinal); el texto principal en `body-copy` mantiene
  contraste alto (ink-800 sobre cream-50).

---

## Integracion en comunidad.astro

El bloque actual:

```astro
<section class="section section-border">
  <div class="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
    <SectionHeading ... />
    <div class="card p-6">
      <ul class="space-y-4">
        {community.purpose.points.map((point) => <li>{point}</li>)}
      </ul>
    </div>
  </div>
</section>
```

Se reemplazara por:

```astro
<CommunityWhySection purpose={community.purpose} />
```

El import se añade al frontmatter de `comunidad.astro`.
