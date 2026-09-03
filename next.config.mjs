/** @type {import('next').NextConfig} */
const nextConfig = {
  // Old standalone routes that used to be live and were likely crawled/indexed by Google before
  // being consolidated into other pages. 301s (statusCode: 301, not the default 308 `permanent`)
  // so any existing backlinks/search index entries carry over instead of 404ing.
  async redirects() {
    return [
      { source: '/whatsapp/ai-agent', destination: '/whatsapp#ai-agent', statusCode: 301 },
      { source: '/whatsapp/analytics', destination: '/whatsapp#analytics', statusCode: 301 },
      { source: '/whatsapp/automation', destination: '/whatsapp#automation', statusCode: 301 },
      { source: '/whatsapp/broadcast', destination: '/whatsapp#broadcast', statusCode: 301 },
      { source: '/whatsapp/numbers', destination: '/whatsapp#multiple-numbers', statusCode: 301 },
      { source: '/whatsapp/shared-inbox', destination: '/whatsapp#team-inbox', statusCode: 301 },
      { source: '/pricing-new', destination: '/pricing', statusCode: 301 },
      // Never a route in this codebase's history — an old marketing/backlink URL Google has
      // indexed from elsewhere. Closest current page by intent.
      { source: '/whatsapp-crm', destination: '/whatsapp', statusCode: 301 },
    ];
  },
  images: {
    // What's New post images now come from the CMS (utils/whatsNewApi.js), rendered via
    // next/image in WhatsNewCard/WhatsNewDetail — unlike the blog's own components, which
    // deliberately use plain <img> for admin-uploaded media instead of allow-listing this host.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aiengagecrm-kb-portal.s3.ap-south-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
