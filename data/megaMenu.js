// Features mega menu — 4 Suites (Marketing / Sales / Service & Support / Platform Capabilities),
// replacing the old 15-flat-category menu (kept intact, unused, in data/megaMenu.legacy.js).
// Same shape the renderer already expects: { name, icon, href, features:[[name, icon, desc, href]] },
// plus one new field — `description`, a one-line summary shown under each Suite's name in the
// mega menu's left column (the mockup's design calls for it there; its own data didn't define
// per-Suite copy, so these four lines are original, written to match the site's voice).
//
// Labels/descriptions/icons sourced from the "SiteHeader V2" design mockup; hrefs mapped to this
// project's real routes. Two mockup anchors don't exist on their target page's section list and
// were dropped to the page's top-level URL instead (verified against each page's own data file):
//   - Platform Capabilities → "AI Agents & Automations": mockup used /ai#ai-agent, but data/ai.js
//     has no `ai-agent` section id (it has ai-chatbot, ai-lead-qualification, etc.) → '/ai'.
//   - "Quotations & Invoices" (Service & Support Suite): mockup used /integrations#quotations-invoices,
//     but data/integrationsPage.js has no `quotations-invoices` section id → '/integrations'.
//     Sales Suite's own "Quotations & Invoices" item was removed (was a duplicate of this one).
// Ads & Analytics (/ads-analytics), Meeting Scheduler / AI Notes / Calendar, Meetings & AI
// Notetaker (/meetings-calendars), and AI Support Agents / Inbox (/customer-service-support) now
// point at their real pages — built from the "Ads Analytics" / "Meetings Calendars" /
// "Customer Service Support" standalone mockups. "Calendar, Meetings & AI Notetaker" links to
// /meetings-calendars' top (its copy spans the whole page, not one section); the other five use
// #fragments verified against each page's own section ids in data/{adsAnalytics,meetingsCalendars,
// customerServiceSupport}.js. /coming-soon is still used elsewhere for any future menu item whose
// page isn't built yet. "Customer AI Agent" was removed from the Marketing Suite (was a duplicate
// of WhatsApp Marketing & AI Agent's own AI-agent capability).
export const MEGA_MENU = [
  {
    name: 'Marketing Suite',
    icon: 'campaign',
    href: '#',
    description: 'Attract, engage and convert customers across every channel.',
    features: [
      ['Email Marketing', 'outgoing_mail', 'Create targeted email campaigns and manage customer communication from one place.', '/multichannel-communication#mass-email'],
      ['WhatsApp Marketing & AI Agent', 'chat', 'Run WhatsApp campaigns, automate conversations, and respond to leads with AI.', '/whatsapp'],
      ['Voice Calling', 'call', 'Make, receive, record, and track customer calls directly from your CRM.', '/calling'],
      ['AI Chatbot', 'smart_toy', 'Capture website inquiries and answer customer questions automatically with AI.', '/ai#ai-chatbot'],
      ['Mobile CRM', 'smartphone', 'Manage leads, conversations, tasks, and customer activity while on the go.', '/mobile-app'],
      ['Ads & Analytics', 'insights', 'Track Google, Meta, and offline ad performance — spend, leads, cost per lead, conversions, revenue, and ROAS.', '/ads-analytics'],
      ['Social Communication', 'forum', 'Keep customer conversations and social media channels connected in one CRM.', '/multichannel-communication'],
      ['Web Forms', 'list_alt', 'Create lead capture forms for website, landing pages, campaigns, and inquiries.', '/lead-management#lead-capture-forms'],
      ['Audience Segmentation', 'donut_small', 'Create targeted customer audiences using profile, activity, and engagement data.', '/marketing-campaigns'],
      ['Marketing Analytics', 'monitoring', 'Track campaign engagement, performance, conversions, and marketing results.', '/marketing-campaigns#campaign-insights'],
      ['Dashboards & Reporting', 'dashboard', 'Monitor campaign, sales, team, and business performance using customizable reports.', '/reports-analytics#dashboards'],
    ],
  },
  {
    name: 'Sales Suite',
    icon: 'trending_up',
    href: '#',
    description: 'Manage leads, pipelines and deals from first contact to close.',
    features: [
      ['Lead Management', 'person_search', 'Capture, assign, qualify, and manage leads from one place.', '/lead-management'],
      ['Deals & Pipeline', 'account_tree', 'Track deals, stages, values, activities, and sales progress across your pipeline.', '/sales-pipeline#pipeline-management'],
      ['Sales Automation', 'bolt', 'Automate follow-ups, tasks, lead nurturing, and sales processes based on triggers.', '/automation'],
      ['Sales AI Agent', 'smart_toy', 'Use AI to identify leads, qualify hot leads, and support your sales team with next actions.', '/sales-pipeline#ai-forecasting'],
      ['Email, WhatsApp & Voice Calling', 'forum', 'Connect with leads across email, WhatsApp, and calls from one customer workspace.', '/multichannel-communication'],
      ['Calling & Tracking', 'call', 'Make and receive customer calls with recordings, transcripts, call logs, and follow-up tracking.', '/calling#call-analytics'],
      ['Meeting Scheduler', 'event', 'Share booking links, manage availability, schedule meetings, and connect Zoom or Google Meet.', '/meetings-calendars#meeting-scheduler'],
      ['AI Notes', 'edit_note', 'Capture customer details, meeting takeaways, decisions, and follow-up points inside the CRM.', '/meetings-calendars#ai-notes'],
      ['Sales Analytics & Reporting', 'query_stats', 'Track pipeline performance, conversions, activities, targets, and sales outcomes.', '/sales-pipeline#ai-forecasting'],
    ],
  },
  {
    name: 'Service & Support Suite',
    icon: 'support_agent',
    href: '#',
    description: 'Support customers faster with AI, a shared inbox and self-serve tools.',
    features: [
      ['AI Support Agents', 'smart_toy', 'Use AI to answer customer questions, handle routine requests, and assist support teams automatically.', '/customer-service-support#ai-support-agents'],
      ['Inbox', 'inbox', 'Manage customer conversations, replies, and follow-ups from a shared communication inbox.', '/customer-service-support#inbox'],
      ['Quotations & Invoices', 'receipt_long', 'Create quotations, invoices, pricing, taxes, and billing — connected to the right customer or deal.', '/integrations'],
      ['Security & Compliance', 'shield', 'Protect customer and business data with access controls, audit logs, authentication, and security features.', '/security-compliance'],
      ['Knowledge Hub', 'menu_book', 'Give teams and AI agents access to centralized business information, resources, and support content.', 'https://help.aiengagecrm.com/'],
      ['Calendar, Meetings & AI Notetaker', 'event_note', 'Schedule meetings, manage availability, capture transcripts, and generate AI summaries for faster follow-ups.', '/meetings-calendars'],
    ],
  },
  {
    name: 'Platform Capabilities',
    icon: 'dashboard_customize',
    href: '#',
    description: 'The AI, data and automation layer underneath every suite.',
    features: [
      ['Smart CRM', 'neurology', 'Use AI-powered insights, summaries, and assistance to manage customer relationships more efficiently.', '/ai'],
      ['Data Management Platform', 'database', 'Import, organize, clean, map, and manage customer and CRM data from one place.', '/data-management'],
      ['Omnichannel Marketing', 'forum', 'Connect with customers across email, WhatsApp, calling, and other communication channels.', '/multichannel-communication'],
      ['AI Agents & Automations', 'smart_toy', 'Use AI agents to handle conversations, qualify leads, and automate repetitive customer workflows.', '/ai'],
    ],
  },
];
