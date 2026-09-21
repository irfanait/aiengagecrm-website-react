// Content for the new homepage design (v2) — hero, trusted-by strip, the "Everything Your Team
// Needs" dashboard showcase, and the AI journey carousel. Kept separate from data/homeContent.js,
// which is the current live homepage's (v1) data file and must stay untouched.

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

// Each tab's own screenshot, extracted from the design source — clicking a sidebar item swaps
// the panel image, same interactive "product tour" the mockup itself has.
export const DASHBOARD_SIDEBAR = [
  { icon: 'dashboard', label: 'Dashboard', image: '/homev2/dashboard-tabs/1-dashboard.webp' },
  { icon: 'trending_up', label: 'Lead Management', image: '/homev2/dashboard-tabs/2-lead-management.webp' },
  { icon: 'handshake', label: 'Deals', image: '/homev2/dashboard-tabs/3-deals.webp' },
  { icon: 'chat', label: 'WhatsApp Team Inbox', image: '/homev2/dashboard-tabs/4-whatsapp-team-inbox.webp' },
  { icon: 'call', label: 'Calling', image: '/homev2/dashboard-tabs/5-calling.webp' },
  { icon: 'groups', label: 'Meetings & AI Notetaker', image: '/homev2/dashboard-tabs/6-meetings.webp' },
  { icon: 'calendar_month', label: 'Calendar', image: '/homev2/dashboard-tabs/7-calendar.webp' },
  { icon: 'insights', label: 'Ads & Analytics', image: '/homev2/dashboard-tabs/8-ads-analytics.webp' },
  { icon: 'smart_toy', label: 'AI & AI Agents', image: '/homev2/dashboard-tabs/9-ai.webp' },
  { icon: 'auto_awesome', label: 'Webforms', image: '/homev2/dashboard-tabs/10-webforms.webp' },
  { icon: 'bar_chart', label: 'Reports', image: '/homev2/dashboard-tabs/11-reports.webp' },
  { icon: 'receipt_long', label: 'Quotes & Invoices', image: '/homev2/dashboard-tabs/12-invoices-and-billing.webp' },
];

export const AI_JOURNEY_CARDS = [
  {
    image: '/homev2/ai-cards/whatsapp-agent.png',
    title: 'WhatsApp AI Agent',
    desc: 'Let AI answer inquiries, qualify leads, and hand over sales-ready conversations.',
    linkLabel: 'Explore WhatsApp AI Agent',
    href: '/whatsapp',
  },
  {
    image: '/homev2/ai-cards/ask-aiengage.png',
    title: 'Ask AiEngage',
    desc: 'Ask questions about leads, deals, follow-ups, and marketing activity. Get instant answers from your CRM.',
    linkLabel: 'Ask AiEngage',
    href: '/ai',
  },
  {
    image: '/homev2/ai-cards/smart-summaries.png',
    title: 'Smart Summaries',
    desc: "Get an instant AI summary of the customer's history before you call, message, or meet them.",
    linkLabel: 'Explore Smart Summaries',
    href: '/ai',
  },
  {
    image: '/homev2/ai-cards/call-intelligence.png',
    title: 'AI Call Intelligence',
    desc: 'Turn calls into searchable transcripts, summaries, and actionable customer context.',
    linkLabel: 'Explore AI Calling',
    href: '/calling',
  },
  {
    image: '/homev2/ai-cards/meeting-intelligence.png',
    title: 'AI Meeting Intelligence',
    desc: 'Connect Zoom or Google Meet, get call transcripts, AI summaries, key discussion points, and follow-up.',
    linkLabel: 'Explore Meetings & Calendar',
    href: '/meetings-calendars',
  },
  {
    image: '/homev2/ai-cards/lead-qualification.png',
    title: 'AI Lead Qualification',
    desc: 'AI can understand customer responses, collect qualification details and identify buying intent.',
    linkLabel: 'Explore AI Lead Qualification',
    href: '/lead-management',
  },
];

