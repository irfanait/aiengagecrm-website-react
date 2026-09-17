// Centralized per-route SEO content. utils/seo.js turns these into Next.js Metadata objects.
// Add a new page? Add its entry here and call buildMetadata(seoData.<key>) from that page.

export const seoData = {
  home: {
    path: '/',
    title: 'AI CRM Software for Sales Teams | AiEngage CRM',
    description:
      'AiEngage CRM is an AI-powered CRM software built for sales teams in India. Automate leads, WhatsApp, and pipelines — all in one platform.',
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
    title: 'WhatsApp CRM Software for Business | AiEngage CRM',
    description:
      'Manage leads and conversations with WhatsApp CRM integration. AI agent automates WhatsApp Business chats and sales follow-ups.',
    keywords: ['WhatsApp CRM', 'WhatsApp Business API', 'WhatsApp automation', 'WhatsApp AI agent'],
    image: '/og/whatsapp.png',
  },
  multichannelCommunication: {
    path: '/multichannel-communication',
    title: 'Omnichannel CRM Software | AiEngage CRM',
    description:
      'Unify WhatsApp, email, and calls in one inbox with AiEngage’s multichannel customer engagement software.',
    keywords: ['multichannel communication', 'email and calling CRM', 'unified customer communication', 'communication timeline'],
    image: '/og/multichannel-communication.png',
  },
  customerManagement: {
    path: '/customer-management',
    title: 'Customer Management Software | AiEngage CRM',
    description:
      'Store and manage your customer database in one place with AiEngage’s customer relationship management software.',
    keywords: ['customer management software', 'contact management CRM', 'customer segments', '360 customer profile', 'customer timeline'],
    image: '/og/customer-management.png',
  },
  leadManagement: {
    path: '/lead-management',
    title: 'Lead Management Software for Small Business | AiEngage CRM',
    description:
      'Track, organize, and convert leads with AiEngage’s lead management system built for small businesses in India.',
    keywords: ['lead management software', 'lead capture forms', 'lead assignment', 'lead scoring', 'round robin lead distribution'],
    image: '/og/lead-management.png',
  },
  salesPipeline: {
    path: '/sales-pipeline',
    title: 'Sales Pipeline Software & Management Tool | AiEngage CRM',
    description:
      'Visualize your sales funnel and manage deals stage-by-stage with AiEngage’s sales pipeline management tool.',
    keywords: ['sales pipeline software', 'deal management CRM', 'sales forecasting', 'kanban sales pipeline', 'payment tracking CRM'],
    image: '/og/sales-pipeline.png',
  },
  marketingCampaigns: {
    path: '/marketing-campaigns',
    title: 'Marketing Campaign Software | AiEngage CRM',
    description:
      'Run WhatsApp and email marketing campaigns directly from your CRM with AiEngage’s campaign management tools.',
    keywords: ['marketing campaign software', 'email marketing CRM', 'WhatsApp marketing campaigns', 'AI campaign builder', 'campaign analytics'],
    image: '/og/marketing-campaigns.png',
  },
  automation: {
    path: '/automation',
    title: 'Sales Automation Software | AiEngage CRM',
    description:
      'Automate lead follow-ups and workflows with AiEngage’s CRM automation tool — save time and never miss a lead.',
    keywords: ['CRM automation', 'workflow automation software', 'email automation', 'WhatsApp automation', 'lead nurturing automation'],
    image: '/og/automation.png',
  },
  calling: {
    path: '/calling',
    title: 'CRM with Calling Feature | Cloud Telephony | AiEngage',
    description:
      'Click-to-call, call recording, and cloud telephony built into your CRM — manage every sales call with AiEngage.',
    keywords: ['CRM calling software', 'built-in calling', 'call recording CRM', 'call routing', 'business phone numbers'],
    image: '/og/calling.png',
  },
  mobileApp: {
    path: '/mobile-app',
    title: 'Mobile CRM App for Sales Teams | AiEngage CRM',
    description:
      'Manage leads and deals on the go with AiEngage’s mobile CRM app — built for field sales reps in India.',
    keywords: ['mobile CRM app', 'Android CRM app', 'iOS CRM app', 'CRM push notifications', 'sales app'],
    image: '/og/mobile-app.png',
  },
  dataManagement: {
    path: '/data-management',
    title: 'CRM Data Management Software | AiEngage CRM',
    description:
      'Clean up duplicate leads and migrate spreadsheets to CRM easily with AiEngage’s data management tools.',
    keywords: ['CRM data management', 'CRM import export', 'CRM audit logs', 'CRM sheet view', 'AI data cleanup'],
    image: '/og/data-management.png',
  },
  reportsAnalytics: {
    path: '/reports-analytics',
    title: 'Sales Reporting & Analytics Software | AiEngage CRM',
    description:
      'Track sales performance, lead sources, and team activity with AiEngage’s CRM analytics dashboard.',
    keywords: ['CRM reports and analytics', 'sales dashboard software', 'funnel report', 'KPI tracking', 'CRM charts'],
    image: '/og/reports-analytics.png',
  },
  integrations: {
    path: '/integrations',
    title: 'CRM Integrations: Meta, Google Ads & Razorpay | AiEngage',
    description:
      'Connect AiEngage CRM with Meta Ads, Google Ads, Razorpay, and WhatsApp API for a fully connected sales stack.',
    keywords: ['CRM integrations', 'Meta lead ads integration', 'WhatsApp CRM integration', 'Zapier CRM', 'CRM API and webhooks'],
    image: '/og/integrations.png',
  },
  customization: {
    path: '/customization',
    title: 'Customizable CRM Software | AiEngage CRM',
    description:
      'Configure custom fields, pipelines, and workflows to match your business with AiEngage’s customizable CRM.',
    keywords: ['CRM customization', 'custom fields CRM', 'custom modules', 'role-based CRM permissions', 'CRM branding'],
    image: '/og/customization.png',
  },
  securityCompliance: {
    path: '/security-compliance',
    title: 'CRM Data Security & DPDP Compliance | AiEngage CRM',
    description:
      'AiEngage CRM is a secure, DPDP-compliant CRM with role-based access control built for Indian businesses.',
    keywords: ['CRM security', 'role-based access control', 'CRM audit log', 'CRM data backup', 'two-factor authentication CRM'],
    image: '/og/security-compliance.png',
  },
  adsAnalytics: {
    path: '/ads-analytics',
    title: 'Ads & Analytics | Meta, Google & Offline Ad Tracking | AiEngage',
    description:
      'Connect Meta Lead Ads, Google Lead Form Ads, and offline campaigns to capture leads, track cost per lead, and measure revenue and ROAS — all in one CRM.',
    keywords: ['Meta lead ads CRM', 'Google lead form ads', 'ad ROAS tracking', 'cost per lead reporting', 'offline campaign tracking', 'ad analytics CRM'],
    image: '/og/ads-analytics.png',
  },
  meetingsCalendars: {
    path: '/meetings-calendars',
    title: 'Meetings & Calendars | Zoom, Google Meet & AI Notes | AiEngage',
    description:
      'Create Zoom and Google Meet meetings, share booking links, capture transcripts, and generate AI meeting summaries — all connected to the customer record inside AiEngage CRM.',
    keywords: ['CRM meeting scheduler', 'booking calendar CRM', 'Zoom CRM integration', 'Google Meet CRM integration', 'AI meeting summary', 'meeting transcripts CRM'],
    image: '/og/meetings-calendars.png',
  },
  customerServiceSupport: {
    path: '/customer-service-support',
    title: 'Customer Service & Support | Shared Inbox, AI Agents & Tickets | AiEngage',
    description:
      'Manage customer conversations, AI-handled FAQs, support tickets, and omnichannel service — all connected to the customer record — in AiEngage CRM.',
    keywords: ['customer service software', 'shared support inbox', 'AI support agent', 'support ticket management', 'omnichannel customer support'],
    image: '/og/customer-service-support.png',
  },
  aiVoiceCallDemo: {
    path: '/ai-voice-call-demo',
    title: 'AI Voice Call Demo | Hear Our AI Voice Agent Call You | AiEngage',
    description:
      'Drop your number and our AI Voice Agent will call you within seconds — qualifying, answering questions and booking the next step, logged straight into your CRM.',
    keywords: ['AI voice agent demo', 'AI voice call', 'AI calling CRM', 'AI phone agent', 'conversational AI voice'],
    image: '/og/ai-voice-call-demo.png',
  },
  shopifyPartner: {
    path: '/shopify-partner',
    title: 'CRM for Shopify Apps & Agencies | AI-Powered CRM | AiEngage',
    description:
      'The AI-powered CRM built for Shopify apps and agencies — capture Meta & Google leads, run one shared inbox, qualify with AI, and automate the entire customer journey.',
    keywords: ['CRM for Shopify apps', 'CRM for Shopify agencies', 'Shopify partner CRM', 'agency CRM', 'AI CRM for SaaS'],
    image: '/og/shopify-partner.png',
  },
  ai: {
    path: '/ai',
    title: 'AI CRM Features: Lead Scoring & Sales Assistant | AiEngage',
    description:
      'Explore AI lead qualification, an AI sales assistant, and AI chatbot tools built into AiEngage CRM.',
    keywords: ['AI CRM', 'AI chatbot', 'AI lead qualification', 'AI sales insights', 'AI sales forecasting', 'CRM email assistant'],
    image: '/og/ai.png',
  },
  about: {
    path: '/about',
    title: 'About AiEngage CRM | AI CRM Company India',
    description:
      'Learn about AiEngage CRM, the AI-powered CRM company helping Indian businesses manage leads and sales smarter.',
    keywords: ['about AiEngage CRM', 'AI powered CRM', 'CRM mission', 'AI sales assistant'],
    image: '/og/about.png',
  },
  // Live pricing page — Solo / Business / Business Pro plan structure (app/pricing/page.js).
  pricing: {
    path: '/pricing',
    title: 'AiEngage CRM Pricing | Affordable CRM for India',
    description:
      'See AiEngage CRM pricing plans and cost per user. Compare against HubSpot and Zoho pricing for Indian businesses.',
    keywords: ['AiEngage CRM pricing', 'CRM plans', 'WhatsApp CRM pricing', 'AI CRM cost'],
    image: '/og/pricing.png',
  },
  // Archived Growth/Advance/Custom pricing page (app/pricing-old/page.js) — kept on-site for
  // reference but noindexed since /pricing now covers this ground with the current plans.
  pricingOld: {
    path: '/pricing-old',
    title: 'Pricing | Plans for WhatsApp, Email, Voice & AI CRM | AiEngage',
    description:
      'Simple, transparent pricing for AiEngage CRM. Compare Growth, Advance and Custom plans — WhatsApp, email, voice calling, AI and automation, upgrade as you grow with no hidden costs.',
    keywords: ['AiEngage CRM pricing', 'CRM plans', 'WhatsApp CRM pricing', 'AI CRM cost'],
    image: '/og/pricing.png',
    noindex: true,
  },
  whatsNew: {
    path: '/whats-new',
    title: 'What’s New on AiEngage CRM? | Latest Features & Updates',
    description:
      'Stay ahead with AiEngage CRM’s latest AI-powered features, product enhancements and reports — new updates on Contacts, WhatsApp, AI Agents, Dashboards and more.',
    keywords: ['AiEngage CRM updates', 'AiEngage CRM new features', 'CRM changelog', 'AiEngage CRM release notes'],
    image: '/og/whats-new.png',
  },
  industryRealEstate: {
    path: '/industries/real-estate',
    title: 'CRM for Real Estate India | AiEngage CRM',
    description:
      'Manage property leads and buyer follow-ups with AiEngage, the CRM built for real estate agents and dealers in India.',
    keywords: ['real estate CRM', 'property lead management', 'real estate AI CRM', 'site visit scheduling software'],
    image: '/og/industries-real-estate.png',
  },
  industryHealthcare: {
    path: '/industries/healthcare',
    title: 'CRM for Healthcare & Clinics | AiEngage CRM',
    description:
      'Manage patient enquiries and appointments with AiEngage’s CRM built for hospitals, doctors, and clinics.',
    keywords: ['healthcare CRM', 'patient inquiry management', 'appointment scheduling software', 'healthcare AI CRM'],
    image: '/og/industries-healthcare.png',
  },
  industryToursTravels: {
    path: '/industries/tours-travels',
    title: 'CRM for Travel Agencies | AiEngage CRM',
    description:
      'Manage tour package enquiries and bookings with AiEngage’s CRM built for travel agencies and tour operators.',
    keywords: ['travel agency CRM', 'tour operator software', 'travel booking automation', 'travel CRM software'],
    image: '/og/industries-tours-travels.png',
  },
  industryFinance: {
    path: '/industries/finance',
    title: 'CRM for Insurance & Loan Agents | AiEngage CRM',
    description:
      'Manage leads for insurance, loans, and financial advisory with AiEngage’s CRM built for finance companies.',
    keywords: ['finance CRM', 'insurance CRM software', 'financial advisor CRM', 'loan and insurance lead management'],
    image: '/og/industries-finance.png',
  },
  industryIT: {
    path: '/industries/it',
    title: 'CRM for IT & Software Companies | AiEngage CRM',
    description:
      'Manage B2B leads and client relationships with AiEngage’s CRM built for IT services and software businesses.',
    keywords: ['IT CRM software', 'software company CRM', 'IT sales automation', 'IT lead management'],
    image: '/og/industries-it.png',
  },
  industryEducation: {
    path: '/industries/education',
    title: 'CRM for Coaching Institutes & Education | AiEngage CRM',
    description:
      'Manage student enquiries and admissions with AiEngage’s CRM built for coaching institutes and schools in India.',
    keywords: ['education CRM', 'admission management software', 'student enquiry management', 'school and college CRM'],
    image: '/og/industries-education.png',
  },
  vsHubspot: {
    path: '/hubspot-alternative',
    title: 'HubSpot Alternative for Small Business India | AiEngage',
    description:
      'Looking for an affordable HubSpot alternative? Compare AiEngage CRM vs HubSpot on features, pricing, and ease of use.',
    keywords: ['AiEngage vs HubSpot', 'HubSpot alternative', 'HubSpot CRM comparison'],
    image: '/og/vs-hubspot.png',
  },
  vsZoho: {
    path: '/zoho-alternative',
    title: 'Zoho CRM Alternative | AiEngage vs Zoho',
    description:
      'See how AiEngage CRM compares to Zoho as an affordable, easy-to-use alternative for Indian businesses.',
    keywords: ['AiEngage vs Zoho', 'Zoho CRM alternative', 'Zoho CRM comparison'],
    image: '/og/vs-zoho.png',
  },
  vsKeap: {
    path: '/keap-alternative',
    title: 'Keap Alternative | AiEngage vs Keap CRM',
    description:
      'Compare AiEngage CRM to Keap and see why it’s an affordable, simpler alternative for growing businesses.',
    keywords: ['AiEngage vs Keap', 'Keap alternative', 'Keap CRM comparison'],
    image: '/og/vs-keap.png',
  },
  bookADemo: {
    path: '/book-a-demo',
    title: 'Book a Free CRM Demo | AiEngage CRM',
    description: 'Book a free AiEngage CRM demo or start a free trial — no credit card required.',
    keywords: ['book a CRM demo', 'AiEngage demo', 'CRM demo request'],
    image: '/og/book-a-demo.png',
  },
  bookADemocoldemail: {
    path: '/book-a-demo-coldemail',
    title: 'Book a Free AiEngage CRM Demo | AiEngage',
    description: 'Book your free AiEngage CRM demo and see lead capture, pipeline management, and AI-powered engagement live, tailored to your business.',
    keywords: ['book a CRM demo', 'AiEngage demo', 'CRM demo request'],
    image: '/og/book-a-demo.png',
  },
  contactUs: {
    path: '/contact-us',
    title: 'Contact Us | Talk to Our CRM Experts | AiEngage',
    description: 'Get in touch with the AiEngage team — email, WhatsApp, or send us a message and we will help you find the right fit for your business.',
    keywords: ['contact AiEngage', 'AiEngage support', 'CRM sales contact'],
    image: '/og/contact-us.png',
  },
  termsOfService: {
    path: '/terms-of-service',
    title: 'Terms of Service | AiEngage CRM',
    description: 'Read the Terms of Service governing access to and use of AiEngage CRM’s websites, software, APIs, AI functionality and related services.',
    keywords: ['AiEngage terms of service', 'AiEngage CRM terms', 'terms and conditions'],
    image: '/og/default.png',
  },
  privacyPolicy: {
    path: '/privacy-policy',
    title: 'Privacy Policy | AiEngage CRM',
    description: 'Learn how AiEngage CRM collects, uses, stores, shares and otherwise processes personal information when you interact with our websites and Services.',
    keywords: ['AiEngage privacy policy', 'AiEngage CRM data privacy', 'data protection'],
    image: '/og/default.png',
  },
  dataProcessingAgreement: {
    path: '/data-processing-agreement',
    title: 'Data Processing Agreement | AiEngage CRM',
    description: 'AiEngage CRM’s Data Processing Agreement covering roles, subprocessors, security measures, international transfers and data subject requests.',
    keywords: ['AiEngage DPA', 'data processing agreement', 'GDPR DPA', 'DPDP compliance'],
    image: '/og/default.png',
  },
  acceptableUsePolicy: {
    path: '/acceptable-use-policy',
    title: 'Acceptable Use & Anti-Spam Policy | AiEngage CRM',
    description: 'Requirements for responsible use of AiEngage’s WhatsApp, calling, SMS and email communication features, including consent and anti-spam rules.',
    keywords: ['AiEngage acceptable use policy', 'anti-spam policy', 'TRAI compliance', 'WhatsApp business messaging policy'],
    image: '/og/default.png',
  },
  responsibleAiPolicy: {
    path: '/responsible-ai-policy',
    title: 'AI & Responsible Automation Policy | AiEngage CRM',
    description: 'How AiEngage’s AI Agents, AI calling and automation functionality should be used responsibly, with human oversight and disclosure requirements.',
    keywords: ['AiEngage AI policy', 'responsible AI policy', 'AI agent guidelines', 'AI calling compliance'],
    image: '/og/default.png',
  },
  trust: {
    path: '/trust',
    title: 'Trust Center | AiEngage CRM Data Privacy & Security',
    description: 'Explore AiEngage CRM’s trust center for data privacy practices, security measures, and compliance certifications.',
    keywords: ['AiEngage trust center', 'AiEngage legal', 'AiEngage compliance documents'],
    image: '/og/default.png',
  },
  partners: {
    path: '/partners',
    title: 'Partner Program | Become an AiEngage CRM Partner',
    description:
      'Join the AiEngage CRM Partner Program — refer, implement, consult or market AiEngage CRM and earn up to 35% recurring commission for a year.',
    keywords: ['AiEngage CRM partner program', 'CRM affiliate program', 'become a partner', 'AI CRM reseller'],
    image: '/og/default.png',
  },
  partnerSignup: {
    path: '/partners/signup',
    title: 'Partner Signup | AiEngage CRM Partner Program',
    description: 'Sign up for the AiEngage CRM Partner Program — pick your starting level and apply in minutes.',
    keywords: ['AiEngage CRM partner signup', 'become a partner', 'partner application'],
    image: '/og/default.png',
  },
  blog: {
    path: '/blog',
    title: 'Blog | AiEngage CRM',
    description: 'Insights, guides and product news on WhatsApp CRM, AI automation, lead capture and customer engagement.',
    keywords: ['AiEngage blog', 'WhatsApp CRM blog', 'AI automation guides'],
    image: '/og/default.png',
  },
  blogSearch: {
    path: '/blog/search',
    title: 'Search the Blog | AiEngage CRM',
    description: 'Search AiEngage CRM articles on WhatsApp automation, AI agents, lead capture and customer engagement.',
    keywords: ['search AiEngage blog', 'WhatsApp CRM articles'],
    image: '/og/default.png',
  },
};
