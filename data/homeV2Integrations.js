// Data for the new homepage (v2) IntegrationsV2 section. Independent from data/homeContent.js's
// INTEGRATIONS array, which backs the old homepage's Integrations component (homepagev1) — that
// file and component must stay untouched so the live site is unaffected. The new design renders
// every item as a plain logo image (even Plivo/Open APIs/Webhooks, which v1 renders as a colored
// Material icon in a circle instead), so this can't just reuse INTEGRATIONS as-is.

export const HOMEV2_INTEGRATIONS = [
  { label: 'WhatsApp', logo: '/brand/integrations/whatsapp.svg' },
  { label: 'Meta Ads', logo: '/brand/integrations/meta.svg' },
  { label: 'Google Ads', logo: '/brand/integrations/googleads-color.png' },
  { label: 'Stripe', logo: '/brand/integrations/stripe.svg' },
  { label: 'Razorpay', logo: '/brand/integrations/razorpay-color.png' },
  { label: 'Twilio', logo: '/brand/integrations/twilio.svg' },
  { label: 'Plivo', logo: '/brand/integrations/plivo.png' },
  { label: 'Open APIs', logo: '/brand/integrations/open-apis.png' },
  { label: 'Webhooks', logo: '/brand/integrations/webhooks.png' },
];
