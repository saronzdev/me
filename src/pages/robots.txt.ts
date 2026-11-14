import type { APIContext } from 'astro';
import { asset } from '../lib/paths';

export function GET({ site }: APIContext) {
  const origin = site ?? new URL('https://saronzdev.github.io');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL(asset('sitemap.xml'), origin).href}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
