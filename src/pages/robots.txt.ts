import type { APIContext } from 'astro';

export function GET({ site }: APIContext) {
  const origin = site ?? new URL('https://example.com');
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', origin).href}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
