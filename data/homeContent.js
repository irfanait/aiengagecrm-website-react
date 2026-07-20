// Content for the Home v2 page, extracted from the design source (Home v2.dc.html).

export const HERO_TABS = [
  { key: 'pipeline', label: 'Sales Pipeline', icon: 'view_kanban' },
  { key: 'agent', label: 'AI Agent', icon: 'smart_toy' },
  { key: 'reports', label: 'Reports & Dashboards', icon: 'monitoring' },
  { key: 'sync', label: 'Lead Syncing', icon: 'sync_alt' },
  { key: 'workflows', label: 'Workflows', icon: 'account_tree' },
];

export const PLATFORM_TABS = [
  {
    name: 'Capture every lead',
    icon: 'person_search',
    desc: 'Website forms, WhatsApp, Meta & Google Ads, calls and walk-ins — every inquiry lands in one CRM with an owner and a next step. No spreadsheets, no leads slipping through.',
    features: ['Lead capture forms', 'Meta & Google Ads sync', 'Round-robin assignment', 'AI lead scoring', 'Import from spreadsheets', 'AI data cleanup'],
    link: 'Explore Lead Management',
    visTitle: 'Incoming leads',
    rows: [
      { icon: 'list_alt', text: 'Priya Sharma · Website form', status: 'New', color: 'var(--color-primary)' },
      { icon: 'sync_alt', text: 'Rahul Mehta · Meta Ads', status: 'Synced', color: 'var(--color-blue)' },
      { icon: 'chat', text: 'Kavya Nair · WhatsApp', status: 'Assigned', color: 'var(--color-green)' },
      { icon: 'star', text: 'Arjun Patel · Google Ads', status: 'Hot 92', color: 'var(--color-primary)' },
    ],
  },
  {
    name: 'Engage on every channel',
    icon: 'forum',
    desc: 'WhatsApp, email, calls, SMS and push — one shared inbox and one timeline for every conversation, so your team always knows what happened and what to say next.',
    features: ['WhatsApp team inbox', 'Built-in calling', 'One-to-one & mass email', 'SMS & push notifications', 'Message templates', 'Communication timeline'],
    link: 'Explore Multichannel Communication',
    visTitle: 'Today’s conversations',
    rows: [
      { icon: 'chat', text: 'WhatsApp · Sneha Reddy replied', status: '2m', color: 'var(--color-green)' },
      { icon: 'call', text: 'Call · Vikram Singh, 12 min', status: 'Done', color: 'var(--color-purple)' },
      { icon: 'mail', text: 'Email · Quote sent to Ananya', status: 'Opened', color: 'var(--color-blue)' },
      { icon: 'sms', text: 'SMS · Payment reminder sent', status: 'Sent', color: 'var(--color-primary)' },
    ],
  },
  {
    name: 'Automate the busywork',
    icon: 'bolt',
    desc: 'Build journeys that respond to what customers do — an instant reply on a new enquiry, a nudge after a quote, a reminder before every meeting. Set it once, it runs forever.',
    features: ['Workflow automation', 'Automated follow-ups', 'Appointment reminders', 'Lead nurturing journeys', 'Onboarding sequences', 'Deal stage triggers'],
    link: 'Explore Automation',
    visTitle: 'Active workflows',
    rows: [
      { icon: 'bolt', text: 'New enquiry → instant WhatsApp', status: 'Live', color: 'var(--color-green)' },
      { icon: 'update', text: 'Quote sent → follow-up in 2 days', status: 'Live', color: 'var(--color-green)' },
      { icon: 'alarm', text: 'Meeting → reminder 1h before', status: 'Live', color: 'var(--color-green)' },
      { icon: 'trending_up', text: 'Quiet 14 days → re-engage', status: 'Live', color: 'var(--color-green)' },
    ],
  },
  {
    name: 'Let AI do the heavy lifting',
    icon: 'auto_awesome',
    desc: 'An AI agent qualifies leads on WhatsApp around the clock, calls get transcribed with action items, emails write themselves, and forecasts tell you what will close.',
    features: ['AI agent for WhatsApp', 'AI lead qualification', 'AI email assistant', 'Call transcription', 'Sentiment analysis', 'Sales forecasting'],
    link: 'Explore AI Features',
    visTitle: 'AI activity',
    rows: [
      { icon: 'smart_toy', text: 'AI Agent qualified 8 leads overnight', status: 'Done', color: 'var(--color-primary)' },
      { icon: 'graphic_eq', text: '3 calls transcribed & summarized', status: 'Done', color: 'var(--color-purple)' },
      { icon: 'sentiment_satisfied', text: '1 frustrated customer flagged', status: 'Urgent', color: 'var(--color-red)' },
      { icon: 'query_stats', text: 'Forecast: ₹9.2L closing this month', status: 'New', color: 'var(--color-blue)' },
    ],
  },
  {
    name: 'Measure what matters',
    icon: 'monitoring',
    desc: 'Dashboards, funnel reports and target meters show where revenue comes from, where deals get stuck and how every rep is performing — in real time, not at month end.',
    features: ['Custom dashboards', 'Sales & funnel reports', 'Team performance', 'KPIs & target meters', 'Campaign reports', 'Revenue attribution'],
    link: 'Explore Reports & Analytics',
    visTitle: 'This month',
    rows: [
      { icon: 'bar_chart', text: 'Revenue ₹98.6K', status: '+15%', color: 'var(--color-green)' },
      { icon: 'filter_alt', text: 'Lead → deal conversion', status: '19%', color: 'var(--color-primary)' },
      { icon: 'groups', text: 'Fastest responder: Meera', status: '4 min', color: 'var(--color-blue)' },
      { icon: 'track_changes', text: 'Q3 target progress', status: '76%', color: 'var(--color-purple)' },
    ],
  },
];

export const AUTOPILOT_STEPS = [
  { step: 1, icon: 'campaign', title: 'Ad runs on Meta', desc: 'Your campaign is live on Facebook & Instagram, reaching the right audience.', statusIcon: 'circle', statusText: 'Campaign: "Monsoon Offer" · Active', dot: true },
  { step: 2, icon: 'ads_click', title: 'Customer fills the inquiry', desc: 'They see the ad and submit the lead form — without leaving Meta.', statusIcon: 'person', statusText: 'Priya Sharma · +91 98••• ••210' },
  { step: 3, icon: 'sync_alt', title: 'Lead syncs into AiEngage', desc: 'In real time — fields mapped, deduped and owner assigned automatically.', statusIcon: 'check_circle', statusText: 'Synced in 2s · assigned to Meera', statusColor: 'var(--color-green)' },
  { step: 4, icon: 'bolt', title: 'Workflow fires instantly', desc: 'A welcome message goes out on WhatsApp and email within seconds.', statusIcon: 'chat', statusText: '"Hi Priya! Thanks for reaching out…"', statusColor: 'var(--color-green)' },
  { step: 5, icon: 'chat', title: 'Customer replies on WhatsApp', desc: 'The reply lands in your team inbox — where the AI Agent is enabled.', statusIcon: 'mark_chat_unread', statusText: '"Yes, I’m interested. Tell me more."', statusColor: 'var(--color-green)' },
  { step: 6, icon: 'smart_toy', title: 'AI Agent qualifies the lead', desc: 'It handles the enquiry and asks your qualifying questions — budget, need, timeline.', statusIcon: 'quiz', statusText: '"What budget are you working with?"' },
  { step: 7, icon: 'fact_check', title: 'Marked Qualified — team notified', desc: 'Workflow triggers on qualification: segment updated, rep notified with the AI summary.', statusIcon: 'notifications_active', statusText: 'Segment: "Qualified — this week"', statusColor: 'var(--color-green)' },
  { step: 8, icon: 'event_available', title: 'Meeting booked — your rep closes', desc: 'The AI books the meeting. Your rep joins with budget, requirement and full chat history in hand.', statusIcon: 'person', statusText: 'First human touch · Demo, Fri 11:00', final: true },
];

export const JOURNEY_STEPS = [
  { number: 1, title: 'Capture every inquiry', desc: 'Website forms, WhatsApp, Meta & Google Ads, calls and walk-ins land in one place.', tags: ['Forms', 'WhatsApp', 'Ad Leads', 'Calls'], dark: false },
  { number: 2, title: 'Score & assign', desc: 'AI scores every lead and routes it to the right rep by source, location or workload.', tags: ['AI Lead Score', 'Round-Robin', 'Smart Rules'], dark: false },
  { number: 3, title: 'Follow up automatically', desc: 'WhatsApp messages, emails and reminders keep every conversation moving.', tags: ['Sequences', 'Reminders', 'AI Agent'], dark: false },
  { number: 4, title: 'Convert & repeat', desc: 'Book meetings, share quotes, collect payments and re-engage past customers.', tags: ['Quotes', 'Payments', 'Re-engagement'], dark: true },
];

export const STATS = [
  { value: '5x', label: 'Faster follow-ups', desc: 'Automated sequences reply while leads are still interested.' },
  { value: '30%', label: 'Increase in sales', desc: 'Prioritized leads and timely nudges convert more deals.' },
  { value: '41%', label: 'Reduction in cost', desc: 'One platform replaces a stack of disconnected tools.' },
  { value: '52', unit: 'min', label: 'Saved daily, per rep', desc: 'AI handles the busywork so your team can sell.' },
];

export const INDUSTRIES = [
  { icon: 'apartment', label: 'Real Estate' },
  { icon: 'medical_services', label: 'Healthcare' },
  { icon: 'school', label: 'Education' },
  { icon: 'payments', label: 'Finance' },
  { icon: 'code', label: 'IT & Technology' },
  { icon: 'travel_explore', label: 'Tours & Travels' },
  { icon: 'event', label: 'Event Management' },
  { icon: 'factory', label: 'Manufacturing' },
  { icon: 'storefront', label: 'Retail' },
  { icon: 'handshake', label: 'Agencies' },
];

export const TESTIMONIALS = [
  {
    quote:
      'We were getting inquiries from different channels, and keeping track of them was challenging for us. After using AiEngage CRM, all our inquiries were organized in one place, and our team was able to follow up and close deals faster.',
    name: 'Nitin Maheshwari',
    role: 'Marketing Manager, Micro Mitti',
    avatar: '/testimonials/Nitin.webp',
  },
  {
    quote:
      'We wanted a better way to connect with customers on WhatsApp. With AiEngage CRM, we were able to send bulk messages and run campaigns smoothly without worrying about numbers getting blocked. It made customer communication much easier.',
    name: 'Yogendra Mahajan',
    role: 'CMO, Micro Mitti',
    avatar: '/testimonials/Yogendra.webp',
  },
  {
    quote:
      'Customer data was spread across different tools, which made things confusing. AiEngage CRM helped us keep all customer data in one place, giving our team a clear view of every interaction and making it easier to manage relationships.',
    name: 'Anurag Pandey',
    role: 'Founder & CEO, ControlF5',
    avatar: '/testimonials/Anurag.webp',
  },
];

export const TESTIMONIAL_STATS = [
  { value: '2000+', label: 'businesses' },
  { value: '100+', label: 'integrations' },
  { value: '24/7', label: 'AI agent' },
];

export const INTEGRATIONS = [
  { label: 'WhatsApp', logo: '/brand/integrations/whatsapp.svg' },
  { label: 'Meta Ads', logo: '/brand/integrations/meta.svg' },
  { label: 'Google Ads', logo: '/brand/integrations/googleads.svg' },
  { label: 'Stripe', logo: '/brand/integrations/stripe.svg' },
  { label: 'Razorpay', logo: '/brand/integrations/razorpay.svg' },
  { label: 'Twilio', logo: '/brand/integrations/twilio.svg' },
  { label: 'Plivo', icon: 'call', bg: 'var(--color-green-tint)', color: 'var(--color-green)' },
  { label: 'Open APIs', icon: 'api', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { label: 'Webhooks', icon: 'webhook', bg: '#F1EDE7', color: 'var(--color-text-muted)' },
];
