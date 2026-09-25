// Content for the new homepage (v3, "Home V6" mockup) hero only. Kept separate from
// data/homeV2Discovery.js (the v2 hero's own data file), which must stay untouched since v2 stays
// live in the codebase even while v3 is the one wired to `/`.

export const HOMEV3_HERO_CHANNELS = [
  { key: 'whatsapp', label: 'WhatsApp', bg: 'rgb(230, 247, 236)', icon: 'chat', color: 'var(--color-whatsapp)' },
  { key: 'email', label: 'Email', bg: 'rgb(236, 235, 253)', icon: 'mail', color: 'rgb(79, 70, 229)' },
  { key: 'calling', label: 'Calling', bg: 'rgb(232, 243, 253)', icon: 'call', color: 'rgb(59, 143, 224)' },
  { key: 'meetings', label: 'Meetings', bg: 'rgb(255, 239, 228)', icon: 'calendar_month', color: 'rgb(255, 122, 26)' },
  { key: 'support', label: 'Support', bg: 'rgb(253, 235, 239)', icon: 'confirmation_number', color: 'rgb(232, 38, 77)' },
  { key: 'ai-agents', label: 'AI Agents', bg: 'rgb(240, 236, 253)', icon: 'smart_toy', color: 'rgb(108, 63, 224)' },
];
