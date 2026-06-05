# Video Project

Proyecto independiente de Remotion para generar las intros y piezas de video de Costa del Code.

## Instalacion

```bash
yarn install
```

Ejecuta el comando dentro de `video/`.

## Comandos

```bash
yarn studio
yarn render:intro
yarn still:intro
```

## Archivos principales

- `src/Root.tsx`
- `src/IntroComposition.tsx`
- `src/IntroCompositionBackup.tsx`

## Output

Los renders se generan en `video/out/`. Si quieres usarlos en la web, copia los archivos finales a `public/intro/`.
