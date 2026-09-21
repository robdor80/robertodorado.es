# robertodorado.es

Portfolio personal de Roberto Dorado. La web servirá como presentación y punto de acceso a aplicaciones, programas, webs y otros proyectos.

El proyecto utiliza [Astro](https://astro.build/) en modo estático, TypeScript estricto y CSS propio, sin frameworks de interfaz adicionales.

## Requisitos

- Node.js 22.12 o posterior.
- npm 9.6.5 o posterior.

## Desarrollo local

Instala las dependencias:

```sh
npm install
```

Inicia el servidor de desarrollo:

```sh
npm run dev
```

La terminal mostrará la dirección local en la que está disponible la web.

## Comprobaciones y build

Comprueba los archivos Astro y TypeScript:

```sh
npm run check
```

Genera el build estático de producción:

```sh
npm run build
```

Para revisar localmente el resultado generado:

```sh
npm run preview
```

## Estructura actual

```text
src/
├── components/       Componentes reutilizables de la interfaz
├── content/projects/ Entradas Markdown de proyectos públicos
├── layouts/          Estructuras compartidas entre páginas
├── lib/              Utilidades y etiquetas compartidas
├── pages/            Rutas de la web
├── styles/           Estilos globales
└── content.config.ts Esquema y configuración de las colecciones
```

Astro genera el sitio de producción en `dist/`. Esta carpeta no se versiona.

## Proyectos públicos

Cada archivo Markdown de `src/content/projects/` representa un proyecto. El nombre del archivo se utiliza como identificador y como segmento de su URL: `mi-proyecto.md` genera `/proyectos/mi-proyecto/`.

Los campos obligatorios son `title`, `summary`, `type` y `status`. `featured` utiliza `false` y `technologies` una lista vacía cuando se omiten. La imagen y las URL externas son opcionales. El esquema de `src/content.config.ts` valida cada entrada durante las comprobaciones y el build.

La ruta `/proyectos/` muestra la colección completa y genera una ficha estática para cada entrada.
