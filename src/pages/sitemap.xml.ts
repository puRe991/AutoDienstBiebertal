import { services } from '@/content/services';
import { site } from '@/content/site';

const staticPaths = ['/', '/leistungen/', '/ueber-uns/', '/kontakt/', '/impressum/', '/datenschutz/'];

export function GET() {
  const urls = [
    ...staticPaths,
    ...services.map((service) => `/leistungen/${service.slug}/`)
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((path) => `  <url><loc>${new URL(path, site.url).toString()}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
