/** @type {import('next').NextConfig} */
const nextConfig = {
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
