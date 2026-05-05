// app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/_vercel/'],
    },
    sitemap: 'https://monentreprise.com/sitemap.xml',
    host: 'https://monentreprise.com',
  }
}