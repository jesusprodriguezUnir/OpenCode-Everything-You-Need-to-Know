import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Aprende OpenCode',
      social: [
        { icon: 'github', label: 'Repositorio', href: 'https://github.com/opencode-ai/opencode' },
      ],
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
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});