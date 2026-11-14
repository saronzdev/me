// The site is deployed to a subpath on GitHub Pages (`/saronzdev`), so absolute
// URLs cannot be hardcoded. `import.meta.env.BASE_URL` is the configured base,
// but it has no trailing slash here, which would produce `/saronzdevog.png`.

/** The configured base with a guaranteed trailing slash (`/` at the site root). */
export const basePath = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

/** Resolve a file from `public/` (or a path) against the deploy subpath. */
export function asset(path: string): string {
  return `${basePath}${path.replace(/^\/+/, '')}`;
}
