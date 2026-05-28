# Agent Instructions

High-signal, repository-specific context to prevent development errors and align with current project configurations.

## 🛠️ Commands & Package Manager

- **Package Manager:** Use **Yarn v1** (`yarn`). **Do NOT** use `npm`, `pnpm`, or `bun`.
- **Formatting:** Run `yarn format` (runs Prettier) to format files.
- **Compilation & Typechecks:** Run `yarn build` to verify changes. This executes `astro check && astro build`, verifying Astro files and TypeScript types.
- **Tests:** There is no testing suite. Rely on `yarn build` and manual dev environment checks.

## ⚠️ Pre-Commit & Verification

- **Husky Hooks:** The pre-commit hook (`.husky/pre-commit`) runs `yarn lint-staged` (formatting) followed by `yarn build` (Astro check + build).
- **Gotcha:** Any TypeScript, Astro, or syntax warning/error will prevent commits. Always run `yarn build` locally to verify changes before trying to commit.

## 🎨 Tailwind CSS v4 Integration

- **Toolchain:** Tailwind v4 is integrated via `@tailwindcss/vite` in `astro.config.mjs`.
- **No Config Files:** There is **NO** `tailwind.config.js` or `tailwind.config.ts`. Do not create one.
- **Customization:** Define custom theme colors, fonts, and variables inside `src/styles/global.css` under the `@theme` directive.
