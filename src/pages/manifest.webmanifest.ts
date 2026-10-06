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
    background_color: '#ffffff',
    theme_color: '#17202a',
    lang: 'es',
    categories: ['productivity', 'utilities'],
    icons: [
      {
        src: `${base}icons/icon-192.png`,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: `${base}icons/icon-512.png`,
        sizes: '512x512',
        type: 'image/png',
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
