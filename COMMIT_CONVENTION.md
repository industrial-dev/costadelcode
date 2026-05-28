# Commit Convention

All commits must follow Conventional Commits with mandatory Gitmoji and scope.

## Format

```
:gitmoji: type(scope): subject
```

## Requirements

- Start with 1 or more Gitmoji shortcodes (e.g. `:sparkles:`).
- `type` must be one of: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `revert`.
- `scope` is mandatory and must be a single token (no spaces).
- `subject` is required and should be concise.

## Examples

Valid:

```
✨ :sparkles: feat(homepage): add hero copy
🐛 :bug: fix(api): handle empty response
🚧 :construction: 🔧 :wrench: chore(tooling): update lint settings
```

Invalid:

```
feat(homepage): missing gitmoji
:sparkles: feat: missing scope
:sparkles: feat(home page): scope has spaces
```

## BREAKING CHANGE

`BREAKING CHANGE:` is allowed in the body of the commit message.

```
💥 :boom: feat(api): update pagination

BREAKING CHANGE: pagination now requires pageSize
```

## Gitmoji source

You can import your own Gitmoji JSON list. Validation only checks for the
`:{shortcode}:` pattern, not specific emoji names.
