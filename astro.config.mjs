import { defineConfig } from 'astro/config';

// Published as a GitHub Pages project site:
//   https://saronzdev.github.io/me/
//
// `site` is the origin (used for canonical URLs, Open Graph, robots.txt and
// sitemap.xml) and `base` is the repository path. If you move to a custom
// domain, set `site` to it and remove `base`.
export default defineConfig({
  site: 'https://saronzdev.github.io',
  base: '/me',
  trailingSlash: 'never',
});
