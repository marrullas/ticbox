# TICBOX · ticbox.net

Sitio web y portafolio de TICBOX: software, integración de sistemas e inteligencia artificial
aplicada.

[ticbox.net](https://ticbox.net) · [Astro 7](https://astro.build) · GitHub Pages

## Desarrollo

Requiere Node.js ≥ 22.23 y pnpm 11.

```bash
pnpm install      # dependencias
pnpm dev          # http://localhost:4321
pnpm build        # genera dist/
pnpm preview      # previsualiza el build
```

Cada push a `main` compila y publica automáticamente vía GitHub Actions.

## Estructura

```
public/            # copia literal a dist/ (CNAME, iconos, og-image, robots)
src/
  assets/          # imágenes originales y fuente Inter
  components/      # Header, Footer, cards
  data/            # contenido editable
  layouts/
  pages/           # index y 404
  styles/
```

## Editar contenido

| Archivo | Contenido |
| ------- | --------- |
| `src/data/site.ts` | dominio, correo, redes, navegación, metadatos |
| `src/data/projects.ts` | tarjetas del portafolio |
| `src/data/services.ts` | servicios |
| `src/data/tools.ts` | extensiones de navegador |
| `src/data/expertise.ts` | áreas de experiencia y stack |
| `src/data/process.ts` | pasos de "Cómo trabajamos" |

Para cambiar una captura, reemplaza el PNG en `src/assets/images/` y actualiza el `import`
correspondiente en `projects.ts`. El build genera WebP y `srcset` responsive.

### Añadir un caso de estudio

1. Crea `src/content.config.ts` con una colección `proyectos`.
2. Añade Markdown en `src/content/proyectos/`.
3. Crea `src/pages/proyectos/[slug].astro`.
4. Añade `href: '/proyectos/<slug>'` en la tarjeta.

## Despliegue

GitHub Pages sirve `dist/` desde el workflow. El dominio personalizado se mantiene con
`public/CNAME`.

```bash
gh run list                          # despliegues
gh api repos/marrullas/ticbox/pages  # estado de Pages y certificado
```

La infraestructura de DNS y correo se documenta en un runbook privado fuera del repositorio.

## Licencia

Contenido y diseño © TICBOX. Todos los derechos reservados.
