# Convenciones de código

> Homogeneidad extrema. La IA predice mejor cuando el repositorio se parece
> a sí mismo en todas partes.

## Herramientas

- **Gestor de paquetes:** Yarn v1. **No usar** `npm`, `pnpm` ni `bun`.
- **Framework:** Astro 6. El output es HTML estático.
- **Estilos:** Tailwind CSS v4 vía `@tailwindcss/vite`. Sin `tailwind.config.*`.
- **React:** Solo para componentes con estado cliente (`*.tsx`). El resto es Astro (`.astro`).

## Comandos

| Comando        | Uso                                                       |
| -------------- | --------------------------------------------------------- |
| `yarn dev`     | Servidor de desarrollo (http://localhost:4321)            |
| `yarn build`   | `astro check` + build estático — verificación obligatoria |
| `yarn format`  | Prettier sobre todo el proyecto                           |
| `bash init.sh` | Verificación del arnés SDD                                |

## Nombres

| Tipo                    | Convención                           | Ejemplo                                  |
| ----------------------- | ------------------------------------ | ---------------------------------------- |
| Componentes Astro/React | `PascalCase`                         | `HomeHeroSection.astro`, `GlobeHero.tsx` |
| Archivos de datos/utils | `kebab-case`                         | `site-content.ts`, `paths.ts`            |
| Rutas de página         | kebab-case + trailing slash          | `/mi-pagina/`                            |
| Variables CSS           | `--color-cream-50`, `--font-display` |                                          |
| Clases de componente    | kebab-case en `@layer components`    | `.card`, `.button-primary`               |

## Estructura de componente Astro

```astro
---
// props e imports al inicio del frontmatter
import type { Feature } from '../data/site-content';

interface Props {
  features: Feature[];
}

const { features } = Astro.props;
---

<section class="section">
  <!-- markup aquí -->
</section>
```

## Estilos

- Clases de Tailwind en el markup, tokens en `@theme`.
- Clases reutilizables (`@layer components`) en `src/styles/global.css`.
- Clases disponibles: `.shell`, `.section`, `.eyebrow`, `.title-xl`, `.body-copy`, `.card`, `.button-primary`, `.button-ghost`, `.tag`.
- No usar estilos inline (`style="..."`) salvo valores dinámicos imposibles con Tailwind.

## Manejo de rutas

Las rutas con base path se construyen con `src/utils/paths.ts`. No concatenar
strings para construir URLs internas — usar el helper disponible.

## Commits

Formato obligatorio: `<gitmoji> type(scope): subject`

- Gitmoji requerido (ver `.github/gitmojis.json`).
- Tipos: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `build`, `ci`, `revert`.
- Scope obligatorio, token único.
- Ejemplo: `✨ feat(recursos): add curated tools section`

Ver `docs/COMMIT_CONVENTION.md` para la referencia completa.

## Comentarios

Por defecto **no** se escriben. Solo se permiten cuando explican un _por qué_
no obvio (workaround, invariante sutil). Los nombres deben hacer el resto.

## Pre-commit

El hook de Husky ejecuta automáticamente `lint-staged` (Prettier) + `yarn build`.
Cualquier error de TypeScript, Astro o sintaxis bloquea el commit. Ejecuta
`yarn build` antes de intentar commitear para detectar errores antes del hook.
