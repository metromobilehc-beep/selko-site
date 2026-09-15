export default function sitemap() {
  const base = 'https://selko360.com';
  const routes = ['', '/healthcare', '/other-industries', '/demo'];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
