import { defineConfig } from 'astro/config';

// TODO: replace `https://example.com` with your production domain.
// It feeds the canonical link, Open Graph URLs, robots.txt and sitemap.xml.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'never',
});
