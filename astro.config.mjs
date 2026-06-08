import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://industrial-dev.github.io',
  base: process.env.NODE_ENV === 'production' ? '/costadelcode' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
