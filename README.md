# robertodorado.es

Portfolio personal de Roberto Dorado. La web servirá como presentación y punto de acceso a aplicaciones, programas, webs y otros proyectos.

La primera fase utiliza [Astro](https://astro.build/) en modo estático, TypeScript estricto y CSS propio, sin frameworks de interfaz adicionales.

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
├── components/  Componentes reutilizables de la interfaz
├── layouts/     Estructuras compartidas entre páginas
├── pages/       Rutas de la web
└── styles/      Estilos globales
```

Astro genera el sitio de producción en `dist/`. Esta carpeta no se versiona.
