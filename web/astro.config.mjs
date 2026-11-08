import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://open-code-everything-you-need-to-kn.vercel.app',
  integrations: [
    starlight({
      title: 'Aprende OpenCode',
      logo: { src: './src/assets/logo.png' },
      defaultLocale: 'root',
      locales: {
        root: { label: 'Español', lang: 'es-ES' },
      },
      components: {
        Footer: './src/components/overrides/Footer.astro',
      },
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
          items: [{ autogenerate: { directory: 'guias' } }],
        },
        {
          label: 'Avanzado',
          items: [{ autogenerate: { directory: 'avanzado' } }],
        },
        {
          label: 'OpenCode + OpenSpec',
          items: [
            { autogenerate: { directory: 'openspec' } },
            {
              label: 'Guía completa de OpenSpec ↗',
              link: 'https://openspec-ochre.vercel.app/',
              attrs: { target: '_blank' },
            },
          ],
        },
        {
          label: 'Recursos',
          items: [
            { autogenerate: { directory: 'recursos' } },
            { label: 'Manual en PDF', link: '/manual-opencode.pdf', attrs: { download: '' } },
          ],
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