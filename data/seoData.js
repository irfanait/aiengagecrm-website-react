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
      'WhatsApp for smarter sales and stronger customer connections — shared team inbox, multiple numbers, broadcasts, automation, flows, segmentation and a 24/7 AI Agent, inside AiEngage CRM.',
    keywords: ['WhatsApp CRM', 'WhatsApp Business API', 'WhatsApp automation', 'WhatsApp AI agent'],
    image: '/og/whatsapp.png',
  },
  multichannelCommunication: {
    path: '/multichannel-communication',
    title: 'Multichannel Communication CRM | Email, Calling & WhatsApp | AiEngage',
    description:
      'Keep every call, email, WhatsApp chat, and follow-up connected in one CRM — mass email, built-in calling, templates, automated follow-ups and AI sentiment analysis.',
    keywords: ['multichannel communication', 'email and calling CRM', 'unified customer communication', 'communication timeline'],
    image: '/og/multichannel-communication.png',
  },
  customerManagement: {
    path: '/customer-management',
    title: 'Customer Management CRM | Contacts, Segments & 360° Profiles | AiEngage',
    description:
      'Manage every contact, customer segment, 360° profile, and interaction timeline from one connected CRM. Centralize customer data and personalize every conversation.',
    keywords: ['customer management software', 'contact management CRM', 'customer segments', '360 customer profile', 'customer timeline'],
    image: '/og/customer-management.png',
  },
  leadManagement: {
    path: '/lead-management',
    title: 'Lead Management Software | Capture, Assign & Score Leads | AiEngage',
    description:
      'Capture, assign, and convert every lead faster — lead capture forms, automatic assignment, AI lead scoring, Meta & Google Ads sync, round-robin routing and AI lead qualification.',
    keywords: ['lead management software', 'lead capture forms', 'lead assignment', 'lead scoring', 'round robin lead distribution'],
    image: '/og/lead-management.png',
  },
  salesPipeline: {
    path: '/sales-pipeline',
    title: 'Sales Pipeline Software | Deal, Task & Payment Tracking | AiEngage',
    description:
      'Manage every deal from enquiry to closure — custom sales pipelines, deal management, task and follow-up tracking, payment tracking, product catalog, stage transition rules and AI sales forecasting.',
    keywords: ['sales pipeline software', 'deal management CRM', 'sales forecasting', 'kanban sales pipeline', 'payment tracking CRM'],
    image: '/og/sales-pipeline.png',
  },
  marketingCampaigns: {
    path: '/marketing-campaigns',
    title: 'Marketing Campaigns Software | Email, WhatsApp & AI | AiEngage',
    description:
      'Create, send, and track marketing campaigns from one place — email campaigns, WhatsApp campaigns, an AI campaign builder and cross-channel campaign insights.',
    keywords: ['marketing campaign software', 'email marketing CRM', 'WhatsApp marketing campaigns', 'AI campaign builder', 'campaign analytics'],
    image: '/og/marketing-campaigns.png',
  },
  automation: {
    path: '/automation',
    title: 'Automation Software | Workflows, Email & WhatsApp | AiEngage',
    description:
      'Automate routine communication, tasks, lead journeys, and deal actions — workflow automation, email and WhatsApp automation, appointment reminders, lead nurturing and AI-powered next-best-actions.',
    keywords: ['CRM automation', 'workflow automation software', 'email automation', 'WhatsApp automation', 'lead nurturing automation'],
    image: '/og/automation.png',
  },
  calling: {
    path: '/calling',
    title: 'Built-In Calling Software | Call, Record & Track | AiEngage',
    description:
      'Bring all your business calls into one CRM — multi-country business numbers, smart call routing, one-click calling, call recording and transcription, and calling analytics.',
    keywords: ['CRM calling software', 'built-in calling', 'call recording CRM', 'call routing', 'business phone numbers'],
    image: '/og/calling.png',
  },
  mobileApp: {
    path: '/mobile-app',
    title: 'Mobile CRM App | Android & iOS | AiEngage',
    description:
      'AiEngage mobile app gives your team access to leads, customers, tasks, follow-ups, chats, and sales activity while they are away from their desk — Android, iOS and instant push notifications.',
    keywords: ['mobile CRM app', 'Android CRM app', 'iOS CRM app', 'CRM push notifications', 'sales app'],
    image: '/og/mobile-app.png',
  },
  dataManagement: {
    path: '/data-management',
    title: 'Data Management Software | Import, Forms & Audit Logs | AiEngage',
    description:
      'Import and export records, manage a product catalog and forms, track every change with audit logs, work in Sheet View, map imported fields, and clean up data with AI — all inside AiEngage CRM.',
    keywords: ['CRM data management', 'CRM import export', 'CRM audit logs', 'CRM sheet view', 'AI data cleanup'],
    image: '/og/data-management.png',
  },
  reportsAnalytics: {
    path: '/reports-analytics',
    title: 'Reports & Analytics Software | Dashboards & KPIs | AiEngage',
    description:
      'Real-time dashboards, sales and campaign reports, funnel and team performance tracking, KPI scorecards, target meters, and visual charts — all inside AiEngage CRM.',
    keywords: ['CRM reports and analytics', 'sales dashboard software', 'funnel report', 'KPI tracking', 'CRM charts'],
    image: '/og/reports-analytics.png',
  },
  integrations: {
    path: '/integrations',
    title: 'Integrations | Meta, Google, WhatsApp, Stripe & More | AiEngage',
    description:
      'Connect AiEngage CRM with Meta and Google Lead Ads, WhatsApp, Gmail, Plivo, Twilio, Stripe, Razorpay, Zapier, and your own systems via APIs and webhooks — all synced in real time.',
    keywords: ['CRM integrations', 'Meta lead ads integration', 'WhatsApp CRM integration', 'Zapier CRM', 'CRM API and webhooks'],
    image: '/og/integrations.png',
  },
  customization: {
    path: '/customization',
    title: 'CRM Customization | Fields, Modules, Roles & Branding | AiEngage',
    description:
      'Customize AiEngage CRM to fit your business — custom fields, custom modules, custom pipelines, role-based permissions, branding, custom tags, and saved custom views.',
    keywords: ['CRM customization', 'custom fields CRM', 'custom modules', 'role-based CRM permissions', 'CRM branding'],
    image: '/og/customization.png',
  },
  securityCompliance: {
    path: '/security-compliance',
    title: 'Security & Compliance | Roles, Audit Logs & Backup | AiEngage',
    description:
      'Manage customer data with role-based access control, full audit trails, reliable data backup, and two-factor authentication — built into AiEngage CRM.',
    keywords: ['CRM security', 'role-based access control', 'CRM audit log', 'CRM data backup', 'two-factor authentication CRM'],
    image: '/og/security-compliance.png',
  },
  ai: {
    path: '/ai',
    title: 'AI CRM | Smart Summaries, AI Chatbot & Sales Insights | AiEngage',
    description:
      'AI built into your CRM — smart conversation summaries, an AI chatbot, lead qualification, AI insights, mobile AI, an email assistant, call transcription, sales insights, and forecasting.',
    keywords: ['AI CRM', 'AI chatbot', 'AI lead qualification', 'AI sales insights', 'AI sales forecasting', 'CRM email assistant'],
    image: '/og/ai.png',
  },
  about: {
    path: '/about',
    title: 'About AiEngage CRM | AI-Powered CRM For Every Lead & Sale',
    description:
      'AiEngage CRM brings AI into the complete customer journey — answering questions, qualifying leads, summarizing conversations, and automating follow-ups so no opportunity is missed.',
    keywords: ['about AiEngage CRM', 'AI powered CRM', 'CRM mission', 'AI sales assistant'],
    image: '/og/about.png',
  },
};
