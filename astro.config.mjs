// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.denercon.com', // TODO: dominio definitivo
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Astro 7 genera automáticamente variantes responsive (WebP/AVIF) con sharp
    responsiveStyles: true,
    layout: 'constrained',
  },
});
