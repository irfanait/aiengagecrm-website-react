// Only the trusted-logos data survives the Newhomepage v2 revert (commit 1b3105f) — the Shopify
// partner page (components/templates/ShopifyPartner) still reuses TrustedByV2, which depends on
// this export. The rest of the original file's content (HERO_CHANNELS, DASHBOARD_SIDEBAR,
// AI_JOURNEY_CARDS) belonged to the reverted homepage v2 design and is intentionally not restored.

// Real client logos, extracted from the design mockup itself — same 14 logos it scrolls as a
// marquee (duplicated once in the component for a seamless loop).
export const TRUSTED_LOGOS = [
  { name: 'Wealth Wisdom India', logo: '/homev2/trusted-logos/wealth-wisdom-india.png' },
  { name: 'Aqua Solution', logo: '/homev2/trusted-logos/aqua-solution.png' },
  { name: 'Ctrl F5', logo: '/homev2/trusted-logos/ctrl-f5.png' },
  { name: 'Blueslag Technologies', logo: '/homev2/trusted-logos/blueslag-technologies.png' },
  { name: 'Dream Aangan', logo: '/homev2/trusted-logos/dream-aangan.png' },
  { name: 'Dream Shutters', logo: '/homev2/trusted-logos/dream-shutters.png' },
  { name: 'Mehndi Assets', logo: '/homev2/trusted-logos/mehndi-assets.png' },
  { name: 'Krishangi Financial Services', logo: '/homev2/trusted-logos/krishangi-financial-services.png' },
  { name: 'Insurance Lab', logo: '/homev2/trusted-logos/insurance-lab.png' },
  { name: 'Dayal Estate & Developers', logo: '/homev2/trusted-logos/dayal-estate-developers.png' },
  { name: 'Aks Publicity', logo: '/homev2/trusted-logos/aks-publicity.png' },
  { name: 'Garage Walle', logo: '/homev2/trusted-logos/garage-walle.png' },
  { name: 'Urban Money', logo: '/homev2/trusted-logos/urban-money.png' },
  { name: 'NIF Global', logo: '/homev2/trusted-logos/nif-global.png' },
];
