import type { APIRoute } from 'astro';

export const prerender = true;

const base = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export const GET: APIRoute = () => {
  const manifest = {
    id: base,
    name: 'Roberto Dorado',
    short_name: 'Roberto Dorado',
    description: 'Portfolio personal de Roberto Dorado con aplicaciones, programas y proyectos web.',
    start_url: base,
    scope: base,
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    orientation: 'any',
    background_color: '#ffffff',
    theme_color: '#17202a',
    lang: 'es',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: `${base}icons/roberto-dorado.webp`,
        sizes: '1254x1254',
        type: 'image/webp',
        purpose: 'any',
      },
    ],
  };

  return new Response(JSON.stringify(manifest, null, 2), {
    headers: {
      'Content-Type': 'application/manifest+json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
