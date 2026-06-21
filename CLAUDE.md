# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # dev server (localhost:4321)
yarn build        # type-check + build (astro check && astro build)
yarn preview      # preview production build
yarn format       # format all files with Prettier
```

No test suite. `yarn build` is the verification step — it runs `astro check` (TypeScript + Astro type checking) before bundling.

## Architecture

Static site built with **Astro + React + Tailwind CSS v4**, deployed to GitHub Pages at `industrial-dev.github.io/costadelcode`.

### Base path handling

The site runs under `/costadelcode` in production and `/` in dev. All internal paths must go through `withBasePath()` from `src/utils/paths.ts`. Never hardcode `/costadelcode/` in links or asset references.

### Content layer

All user-facing copy lives in `src/data/site-content.ts` as a single typed `esContent` object. Page components import the relevant slice from this object — they don't own their own strings. The shape is defined by the `SiteContent` type in the same file.

Page routes are declared in `src/data/i18n.ts` (`pagePaths`). Nav links are built automatically from that map, so adding/renaming a page means updating `pagePaths` and adding a corresponding `.astro` file in `src/pages/`.

### Component conventions

- `.astro` components are the default. Use React (`.tsx`) only when interactivity or animation requires it (e.g. `GlobeHero.tsx`, `CommunityTerminal.tsx`).
- `src/components/` holds shared/reusable pieces. Page-specific sections live directly in `src/pages/` as sibling `.astro` files named after the section (e.g. `HomeHeroSection.astro`).
- `BaseLayout.astro` wraps every page and handles `<head>`, OG tags, canonical URLs, and the video intro overlay. Pages pass `title`, `description`, and `canonicalPath` props.

### Intro video

`BaseLayout` includes an opt-in video intro (`showIntro` prop). The logic (play once, skip on `prefers-reduced-motion`, force with `?intro=1`) is inlined as `is:inline` scripts to run before hydration.
