// Data for the new homepage (v2) sections owned by this file: ReplaceStackV2, AutomationFlowV2,
// TestimonialV2, OneCrmJourneyV2. Independent from data/homeContent.js, which backs the old
// homepage (homepagev1) — that file must stay untouched so the live site is unaffected.

export const SCATTERED_STACK_TOOLS = [
  { name: 'Hubspot', category: 'CRM', logo: '/homev2/tools/hubspot.png' },
  { name: 'Zoho', category: 'CRM', logo: '/homev2/tools/zoho.png' },
  { name: 'Calendly', category: 'Meetings', logo: '/homev2/tools/calendly.png' },
  { name: 'AI Synse', category: 'AI Voice', logo: '/homev2/tools/ai-synse.png' },
  { name: 'Intercom', category: 'Support', logo: '/homev2/tools/intercom.png' },
  { name: 'Wati', category: 'WhatsApp', logo: '/homev2/tools/wati.png' },
  { name: 'Calling', category: 'Business Calling', logo: '/homev2/tools/calling.png' },
  { name: 'Notetaker', category: 'AI Notetaker', logo: '/homev2/tools/notetaker.png' },
];

export const AIENGAGE_REPLACES = [
  { icon: 'smart_toy', label: 'AI Agents & AI Bot' },
  { icon: 'mail', label: 'Email Marketing' },
  { icon: 'event', label: 'Meetings & AI Notetaker' },
  { icon: 'support_agent', label: 'Support & Ticketing System' },
  { icon: 'chat', label: 'WhatsApp & Voice Automation' },
  { icon: 'receipt_long', label: 'Quotes & Invoices' },
  { icon: 'notifications', label: 'Follow-ups & Reminders' },
  { icon: 'bar_chart', label: 'Advanced Reports & MCP' },
];

// The design source's own testimonial, plus the 3 existing ones already live on the current
// homepage (data/homeContent.js) — the mockup's dot pagination implies more than one slide was
// always the intent, so this keeps all of them rather than dropping the originals.
export const TESTIMONIALS_V2 = [
  {
    quote:
      "Customer data was spread across different tools, which made things confusing. AiEngage CRM helped us keep all our customer data in one place, giving our team a clear view of every interaction and making it easier to manage relationships.",
    initials: 'AP',
    name: 'Anmay Phadkey',
    role: 'Founder, Sify Limited',
  },
  {
    quote:
      'We were getting inquiries from different channels, and keeping track of them was challenging for us. After using AiEngage CRM, all our inquiries were organized in one place, and our team was able to follow up and close deals faster.',
    initials: 'NM',
    name: 'Nitin Maheshwari',
    role: 'Marketing Manager, Micro Mitti',
    avatar: '/testimonials/Nitin.webp',
  },
  {
    quote:
      'We wanted a better way to connect with customers on WhatsApp. With AiEngage CRM, we were able to send bulk messages and run campaigns smoothly without worrying about numbers getting blocked. It made customer communication much easier.',
    initials: 'YM',
    name: 'Yogendra Mahajan',
    role: 'CMO, Micro Mitti',
    avatar: '/testimonials/Yogendra.webp',
  },
  {
    quote:
      'Customer data was spread across different tools, which made things confusing. AiEngage CRM helped us keep all customer data in one place, giving our team a clear view of every interaction and making it easier to manage relationships.',
    initials: 'AP',
    name: 'Anurag Pandey',
    role: 'Founder & CEO, ControlF5',
    avatar: '/testimonials/Anurag.webp',
  },
];

export const ONE_CRM_JOURNEY_COPY = {
  lead: 'How many tools does your team need just to manage leads?',
  paragraph1:
    'A lead comes in from an ad. The conversation moves to WhatsApp. Calls happen somewhere else. Meetings are booked in another tool. Follow-ups are tracked in the CRM. That means more switching, more missed follow-ups, and less clarity on what is actually happening with each lead.',
  bold: "One lead shouldn't require five different tools.",
  paragraph2:
    'With AiEngage CRM, keep every customer interaction connected from the first ad click to conversations, calls, meetings, follow-ups, and sales, all in one place. So your team can see where the customer came from, what happened next, and what needs to happen now.',
};
