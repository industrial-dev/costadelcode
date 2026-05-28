# Copilot Instructions

When generating commit messages, follow the repository convention.
Use the Gitmoji list from `.github/gitmojis.json` to pick valid icons.

## Commit convention

Format:

```
:gitmoji: type(scope): subject
```

Rules:

- Start with 1 or more Gitmoji shortcodes (e.g. `:sparkles:`).
- `type` must be one of: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`,
  `perf`, `test`, `build`, `ci`, `revert`.
- `scope` is mandatory and must be a single token (no spaces).
- `subject` is required and should be concise.

`BREAKING CHANGE:` is allowed in the body when needed.

Example:

```
:sparkles: feat(homepage): add hero copy
```
