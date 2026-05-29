# Costa del Code - Comunidad de Desarrolladores en Estepona

Landing page para conectar desarrolladores en Estepona. Una comunidad local para compartir experiencias, colaborar en proyectos y hacer crecer nuestras habilidades técnicas juntos.

## 🚀 Comenzar

### Instalación

```bash
yarn install
```

### Desarrollo

```bash
yarn dev
```

La página estará disponible en `http://localhost:4321`

### Build para producción

```bash
yarn build
```

El sitio estático se generará en la carpeta `/dist`

## 🚢 Despliegue

El repositorio está configurado para desplegar automáticamente en **GitHub Pages** con el workflow:

- `.github/workflows/deploy.yml`

El despliegue se ejecuta cuando hay cambios en `main` (o manualmente desde Actions).

### URL publicada

La web queda publicada en:

- `https://industrial-dev.github.io/costadelcode/`

### Requisitos en GitHub

1. Ir a **Settings → Pages**.
2. En **Source**, seleccionar **GitHub Actions**.

### Vista previa del build

```bash
yarn preview
```

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build)** - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first v4 con plugin de Vite
- **Yarn** - Gestor de paquetes del proyecto

## 📝 Estructura del Proyecto

```
/
├── public/          # Archivos estáticos (favicon, etc.)
├── src/
│   ├── pages/       # Páginas del sitio
│   │   └── index.astro
│   └── styles/      # Estilos globales de Tailwind
│       └── global.css
├── astro.config.mjs # Configuración de Astro
└── package.json
```

## 🎨 Características

- ✅ Diseño responsive (mobile-first)
- ✅ Tema oscuro orientado a desarrolladores
- ✅ Animaciones suaves
- ✅ Tipografía monospace para elementos de código
- ✅ Optimizado para rendimiento
- ✅ SEO-friendly

## 🤖 IA y contexto

El contexto base para trabajar con IA está en:

- AI_CONTEXT.md
- .ai/README.md

## 🧾 Convención de commits

Usamos Conventional Commits con Gitmoji y scope obligatorio. Consulta
`COMMIT_CONVENTION.md` para el formato y ejemplos.

## 📄 Licencia

Proyecto open source de la comunidad de desarrolladores de Estepona.
