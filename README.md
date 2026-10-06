# robertodorado.es

Portfolio personal de Roberto Dorado. La web sirve como presentación y punto de acceso a aplicaciones, programas, webs y otros proyectos.

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
├── pages/            Rutas de la web y manifiesto PWA
├── styles/           Estilos globales
└── content.config.ts Esquema y configuración de las colecciones

public/
├── icons/             Icono de la aplicación web
├── favicon.webp       Favicon
└── sw.js              Service worker de la PWA
```

Astro genera el sitio de producción en `dist/`. Esta carpeta no se versiona.

## Despliegue

La rama `main` se publica automáticamente en GitHub Pages mediante GitHub Actions. El workflow ejecuta las comprobaciones de Astro, genera `dist/` y despliega el artefacto resultante.

La dirección de GitHub Pages es:

`https://robdor80.github.io/robertodorado.es/`

El dominio canónico de producción sigue siendo `https://robertodorado.es` para builds fuera del entorno específico de GitHub Pages.

## PWA

La web incluye un manifiesto web generado por Astro y un service worker, por lo que puede instalarse como aplicación web desde navegadores compatibles.

La PWA utiliza el icono RD dorado de la identidad visual de Roberto Dorado. El `start_url`, el `scope` y las rutas de recursos se adaptan automáticamente al subdirectorio de GitHub Pages.

## Proyectos públicos

Cada archivo Markdown de `src/content/projects/` representa un proyecto. El nombre del archivo se utiliza como identificador y como segmento de su URL: `mi-proyecto.md` genera `/proyectos/mi-proyecto/`.

Los campos obligatorios son `title`, `summary`, `type` y `status`. `featured` utiliza `false` y `technologies` una lista vacía cuando se omiten. La imagen y las URL externas son opcionales. El esquema de `src/content.config.ts` valida cada entrada durante las comprobaciones y el build.

La ruta `/proyectos/` muestra la colección completa y genera una ficha estática para cada entrada.
