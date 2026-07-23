// "AiEngage vs Keap" comparison page content.

export const KEAP_HERO = {
  badge: 'AIENGAGE VS KEAP',
  titleLead: 'Paying More for Keap?',
  titleAccentLine: { lead: 'Here Is a ', accent: 'Smarter Way', trail: ' to Scale' },
};

export const KEAP_PROBLEM = {
  paragraphs: [
    'If you are using Keap today, you have probably noticed something changing over time as your business scales. The platform that once helped you organize contacts and automate campaigns slowly starts becoming more expensive to maintain.',
    'At first, everything feels manageable. You begin with a smaller contact list, a few campaigns, and some automation. But as your marketing starts working and your database grows, the monthly cost begins to rise as well.',
    'The more contacts you add, the more you pay. As you build additional campaigns and automation, the cost continues to increase. Over time, the system that once supported your growth starts demanding a larger budget just to keep everything running.',
    'At some point, you start questioning it. Why are you paying so much just to keep the marketing operating?',
    'That is where the problem becomes clear. The platform that supported your early efforts starts limiting how efficiently you can scale.',
  ],
  pricingCard: {
    title: 'Monthly Plan',
    sub: 'Billing · scales with contacts',
    badge: 'Growth tier',
    tiers: [
      { label: 'Up to 2,500', value: '₹6,900' },
      { label: 'Up to 10,000', value: '₹18,400' },
      { label: 'Up to 25,000', value: '₹37,200' },
      { label: 'Up to 50,000', value: '₹64,800' },
      { label: 'Over 50,000', value: '₹92,000+', alert: true },
    ],
    addons: [
      { label: '+ Advanced automation add-on', value: '₹8,200' },
      { label: '+ AI features add-on', value: '₹6,500' },
    ],
    total: { label: 'Cost rises as your list grows', value: '₹1,06,700/mo' },
  },
  leadOutHeading: "That's Where We Come In.",
  leadOutBody:
    'Instead of charging you more as your database grows, we help you manage customer engagement, campaigns, and automation in a way that stays efficient and predictable. So you can focus on scaling your business without worrying about your marketing costs scaling with it.',
};

export const KEAP_ZIG1 = {
  titleAccent: 'AI and Automation',
  titleTrail: ' Already Built In',
  paragraphs: [
    'Automation should make your work easier, not give you another system to manage. With many platforms, you end up building workflows, connecting tools, or paying extra for AI features just to make automation work properly. Here, AI and automation are already part of the platform. Our system analyzes customer activity, suggests next actions, and automatically handles follow ups and engagement while you focus on growing your business. From AI assisted messages to smart engagement workflows, everything is designed to help you move faster without adding extra tools.',
  ],
  contact: { initials: 'RS', name: 'Rohan Sharma', sub: '3 opens · 1 reply · no follow-up yet' },
  actions: [
    { icon: 'send', title: 'Send WhatsApp follow-up', sub: 'High intent · 92% match', applied: true },
    { icon: 'schedule', title: 'Schedule reminder in 2 days', sub: 'Trigger · no reply detected', applied: false },
    { icon: 'campaign', title: 'Add to re-engagement campaign', sub: 'Segment · warm leads', applied: false },
  ],
};

export const KEAP_ZIG2 = {
  titleAccent: 'Modern Communication',
  titleTrail: 'Without Extra Tools',
  paragraphs: [
    'Nowadays, customer conversations move across channels. A customer might start on WhatsApp, respond to an SMS reminder, and later reply to an email campaign. Many Keap users rely on additional tools just to keep these conversations organized. Our platform keeps everything in one place. Your team can run WhatsApp marketing campaigns, send SMS messages, automate follow-ups, and manage customer conversations without switching between tools.',
    'Every interaction stays connected to the customer record, so your team always knows the context of the conversation and can respond quickly without searching through multiple systems.',
  ],
  contact: { initials: 'RS', name: 'Rohan Sharma', sub: '+91 98204 55127 · Customer since 2023', badge: '1 record' },
  events: [
    { channel: 'WhatsApp', channelIcon: 'chat', time: '10:24 AM', text: 'Hi, is the annual plan still available?' },
    { channel: 'SMS', time: 'Yesterday', text: 'Reminder: your demo is scheduled for Thursday at 3 PM.' },
    { channel: 'Email', time: '2 days ago', text: 'Opened "Year-end offer" campaign · clicked pricing link' },
  ],
};

export const KEAP_TABLE = {
  competitor: 'Keap',
  rows: [
    { cap: 'Pricing', competitor: 'Expensive', ai: 'Cost-efficient', bg: '#FAF7F1' },
    { cap: 'Built-in AI', competitor: 'Limited', ai: 'Included', bg: '#FFFFFF' },
    { cap: 'WhatsApp Marketing', competitor: 'Not native', ai: 'Built-in', bg: '#FAF7F1' },
    { cap: 'SMS Marketing', competitor: 'Add-on', ai: 'Included', bg: '#FFFFFF' },
    { cap: 'Automation', competitor: 'Available', ai: 'Advanced & Included', bg: '#FAF7F1' },
    { cap: 'Tool Dependency', competitor: 'Multiple tools needed', ai: 'All-in-one', bg: '#FFFFFF' },
  ],
};
