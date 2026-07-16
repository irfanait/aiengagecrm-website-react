// Centralized per-route SEO content. utils/seo.js turns these into Next.js Metadata objects.
// Add a new page? Add its entry here and call buildMetadata(seoData.<key>) from that page.

export const seoData = {
  home: {
    path: '/',
    title: 'AiEngage CRM | AI-Powered CRM to Automate Leads, Sales & WhatsApp',
    description:
      'Capture leads, engage customers on WhatsApp, email and calls, and let AI handle the follow-ups — all in one CRM your sales team will actually use.',
    keywords: [
      'AI CRM',
      'CRM software',
      'WhatsApp CRM',
      'lead management software',
      'sales pipeline software',
      'AiEngage CRM',
    ],
    image: '/og/home.png',
  },
  whatsappHub: {
    path: '/whatsapp',
    title: 'WhatsApp Business CRM | Shared Inbox, Broadcast & AI Agent | AiEngage',
    description:
      'Turn WhatsApp into your busiest sales channel — one shared inbox, multiple numbers, broadcasts, automation, analytics and a 24/7 AI Agent, inside AiEngage CRM.',
    keywords: ['WhatsApp CRM', 'WhatsApp Business API', 'WhatsApp automation', 'WhatsApp AI agent'],
    image: '/og/whatsapp.png',
  },
  whatsappTeamInbox: {
    path: '/whatsapp/shared-inbox',
    title: 'WhatsApp Team Inbox | Shared Inbox for Sales Teams | AiEngage CRM',
    description:
      'One shared WhatsApp inbox for your whole team. Assign chats to the right rep, leave private notes, and make sure no customer is ever left waiting.',
    keywords: ['WhatsApp shared inbox', 'WhatsApp team inbox', 'WhatsApp collaboration'],
    image: '/og/whatsapp-team-inbox.png',
  },
  whatsappNumbers: {
    path: '/whatsapp/numbers',
    title: 'Multiple WhatsApp Numbers | Manage Every Team On WhatsApp | AiEngage CRM',
    description:
      'Run separate WhatsApp numbers for sales, support and different branches — each with its own inbox, team and automations, managed from one AiEngage account.',
    keywords: ['multiple WhatsApp numbers', 'WhatsApp business numbers', 'WhatsApp API numbers'],
    image: '/og/whatsapp-numbers.png',
  },
  whatsappBroadcast: {
    path: '/whatsapp/broadcast',
    title: 'WhatsApp Broadcast Messaging | Reach Thousands Instantly | AiEngage CRM',
    description:
      'Send approved WhatsApp template messages to your whole audience — offers, launches, reminders and updates — then track who received, read and replied.',
    keywords: ['WhatsApp broadcast', 'WhatsApp bulk messaging', 'WhatsApp campaigns'],
    image: '/og/whatsapp-broadcast.png',
  },
  whatsappAutomation: {
    path: '/whatsapp/automation',
    title: 'WhatsApp Automation | Automated Follow-Ups & Workflows | AiEngage CRM',
    description:
      'Trigger WhatsApp messages the moment something happens — a new lead, a booked meeting, a pending payment. Set it once and let AiEngage handle every follow-up.',
    keywords: ['WhatsApp automation', 'WhatsApp workflows', 'automated WhatsApp follow-up'],
    image: '/og/whatsapp-automation.png',
  },
  whatsappAnalytics: {
    path: '/whatsapp/analytics',
    title: 'WhatsApp Analytics & Reporting | Track Team Performance | AiEngage CRM',
    description:
      "Track delivery, read and response rates, measure how fast your team replies, and see which campaigns and agents drive the most conversations.",
    keywords: ['WhatsApp analytics', 'WhatsApp reporting', 'WhatsApp performance tracking'],
    image: '/og/whatsapp-analytics.png',
  },
  whatsappAiAgent: {
    path: '/whatsapp/ai-agent',
    title: 'AI Agent for WhatsApp | 24/7 AI Sales Rep | AiEngage CRM',
    description:
      'The AI Agent answers inquiries, asks your qualifying questions, marks leads qualified and books meetings automatically — all on WhatsApp, all on its own.',
    keywords: ['WhatsApp AI agent', 'AI chatbot WhatsApp', 'AI lead qualification'],
    image: '/og/whatsapp-ai-agent.png',
  },
};
