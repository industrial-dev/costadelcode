import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  site: 'https://industrial-dev.github.io',
  base: process.env.NODE_ENV === 'production' ? '/costadelcode' : '/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
