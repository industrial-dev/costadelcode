import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://industrial-dev.github.io',
  base: '/costadelcode',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
