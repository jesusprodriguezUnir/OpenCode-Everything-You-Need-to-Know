import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Aprende OpenCode',
      social: [],
      sidebar: [
        {
          label: 'Inicio',
          items: [
            { label: 'Introducción', link: '/' },
            { label: 'Ejemplos', link: '/ejemplos/' },
          ],
        },
        {
          label: 'Ruta de Aprendizaje',
          link: '/ruta-aprendizaje/',
        },
        {
          label: 'Guías',
          autogenerate: { directory: 'guias' },
        },
        {
          label: 'Avanzado',
          autogenerate: { directory: 'avanzado' },
        },
        {
          label: 'Recursos',
          autogenerate: { directory: 'recursos' },
        },
      ],
      customCss: [
        '@fontsource-variable/dm-sans',
        '@fontsource/jetbrains-mono',
        './src/styles/custom.css',
      ],
    }),
  ],
});