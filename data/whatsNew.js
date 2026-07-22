// "What's New" changelog content. Adding a new update is a data-only change:
//   1. drop the feature image in public/whats-new/<slug>.png (or .jpg)
//   2. add an entry to WN_ENTRIES below with a unique `slug`
// The listing page, its filters, and the entry's own detail page (/whats-new/<slug>) are all
// generated from this array — no component or route code needs to change.

export const WN_BANNER = {
  title: 'What’s New on AiEngage CRM?',
  subtitle:
    'Stay ahead with AiEngage CRM’s latest AI-powered features to automate customer engagement, streamline workflows, and drive business growth.',
  contactLead: 'Contact us',
  contactHref: '/book-a-demo',
  contactTail: ' if you have any specific suggestions and we are happy to work on them.',
};

// Top pill tabs. `key` (except 'all') is the value matched against an entry's `typeTag`.
export const WN_TYPE_FILTERS = [
  { key: 'all', label: 'All', icon: 'apps' },
  { key: 'enhancement', label: 'Product Enhancements', icon: 'upgrade' },
  { key: 'new-feature-update', label: 'New Features', icon: 'auto_awesome' },
  { key: 'reports', label: 'Reports', icon: 'bar_chart' },
];

// Sidebar "Modules" list. Matched against each entry's `moduleTags` array (exact string match).
export const WN_MODULE_FILTERS = [
  'Dashboards',
  'Records',
  'Invoices & Quotes',
  'WhatsApp',
  'Ai Agents',
  'Marketing',
  'Mobile App',
  'Voice',
  'Contacts',
];

// CTA row shown at the bottom of every detail page.
export const WN_DETAIL_CTA = {
  tryLabel: 'Try on your Store',
  tryHref: 'https://crm.aitrillion.com/',
  signupLead: 'New to AiEngage CRM? ',
  signupLabel: 'Sign Up',
  signupHref: '/pricing',
};

// Each entry: card fields (title, image, date, tags, teaser) + `body` blocks for its detail page.
// `body` block types: { type:'paragraph', segments:[{text, bold?, href?, external?}] } |
// { type:'heading', text } | { type:'list', items:[string] }.
export const WN_ENTRIES = [
  {
    slug: 'instantly-create-contacts-by-scanning-images-such-as-business-cards',
    title: '📇 Instantly Create Contacts by Scanning Images Such as Business Cards',
    date: '2026-07-15',
    typeTag: 'new-feature-update',
    moduleTags: ['Contacts'],
    image: '/whats-new/instantly-create-contacts-by-scanning-images-such-as-business-cards.png',
    teaser:
      "Adding new contacts is now faster than ever. We're excited to introduce Create Contact by Scanning Image, a new feature that lets you instantly create CRM contacts by scanning a business card or uploading an image.",
    body: [
      { type: 'paragraph', segments: [{ text: 'Adding new contacts is now faster than ever.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Create Contact by Scanning Image', bold: true },
          {
            text: ', a new feature that lets you instantly create CRM contacts by scanning a business card or uploading an image. AiEngage automatically extracts the contact details and fills in the relevant fields, eliminating manual data entry and helping your team save valuable time.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Create contacts in seconds using scanned images.',
          'Save time by automatically capturing contact information.',
          'Minimize manual typing and reduce data entry errors.',
          'Quickly add leads collected during meetings, events, or networking sessions.',
          'Keep your CRM updated with accurate customer information.',
          'Improve team productivity with a faster contact creation process.',
        ],
      },
      { type: 'heading', text: '❤️ Why You’ll Love It' },
      {
        type: 'paragraph',
        segments: [
          { text: 'No more manually typing information from business cards or contact images. Simply scan, review, and save. ' },
          { text: 'Create Contact by Scanning Image', bold: true },
          { text: ' makes it easy to capture new leads wherever you meet them, ensuring every valuable contact is added to your CRM quickly and accurately.' },
        ],
      },
      { type: 'heading', text: 'Use Case' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Imagine you’re attending a trade show, networking event, or customer meeting and collecting multiple business cards throughout the day. Instead of manually entering each contact into your CRM later, simply scan the business card or upload its image. AiEngage automatically extracts the contact details, allowing you to create a new contact in seconds. This helps your sales and support teams save time, reduce manual errors, and start following up with prospects immediately while keeping your CRM accurate and up to date.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'make-customer-calls-smarter-with-mobile-crm-calling',
    title: 'Make Customer Calls Smarter with Mobile CRM Calling',
    date: '2026-07-15',
    typeTag: 'new-feature-update',
    moduleTags: ['Marketing', 'Mobile App', 'Voice'],
    image: '/whats-new/make-customer-calls-smarter-with-mobile-crm-calling.png',
    teaser:
      "Managing customer conversations on the go just got easier. We're excited to introduce Mobile Calling, a new feature that lets you log and manage customer calls directly from your mobile device.",
    body: [
      { type: 'paragraph', segments: [{ text: 'Managing customer conversations on the go just got easier.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Mobile Calling', bold: true },
          {
            text: ', a new feature that lets you log and manage customer calls directly from your mobile device. Whether you’re following up with prospects, speaking with customers, or recording important conversations, every call can now be tracked and linked to the right CRM record—keeping your sales and support teams productive from anywhere.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Log customer calls in real time.',
          'Keep customer communication organized and accessible.',
          'Improve follow-ups with call history linked to CRM records.',
          'Help sales and support teams stay productive wherever they are.',
          'Ensure customer interactions are recorded immediately after every conversation.',
          'Maintain better visibility into customer communication across your team.',
        ],
      },
      { type: 'heading', text: '❤️ Why You’ll Love It' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Customer conversations don’t always happen from your desk. With Mobile Calling, your team can capture every important interaction as it happens, ensuring no follow-up is missed and every conversation becomes part of your customer history.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'Whether you’re in the field, meeting customers, or working remotely, Mobile Calling helps your team stay connected, organized, and always up to date.' },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'organize-customer-information-with-notes',
    title: 'Organize Customer Information with Notes',
    date: '2026-07-15',
    typeTag: 'enhancement',
    moduleTags: ['Records'],
    image: '/whats-new/organize-customer-information-with-notes.png',
    teaser:
      'Keep every customer interaction organized in one place. We’re excited to introduce Contact Related Notes View—a centralized space to create, view, and manage notes associated with your contacts.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Keep every customer interaction organized in one place.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Contact Related Notes View', bold: true },
          {
            text: '—a centralized space to create, view, and manage notes associated with your contacts. Record important customer information, follow-up details, meeting summaries, and internal updates, so your team always has the complete context before interacting with a customer.',
          },
        ],
      },
      { type: 'heading', text: '🚀 What’s New?' },
      { type: 'paragraph', segments: [{ text: 'With Contact Related Notes View, you can:' }] },
      {
        type: 'list',
        items: [
          'Add internal notes to any contact record.',
          'View all notes related to a contact from a single location.',
          'Maintain a chronological history of customer interactions and updates.',
          'Keep your entire team informed with shared customer context.',
          'Quickly access important information before reaching out to a customer.',
        ],
      },
      { type: 'heading', text: '🎯 Use Case' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'A sales representative speaks with a customer about a custom pricing request and records the discussion as a note on the customer’s profile. Later, when a support agent or another sales team member opens the same contact, they can instantly view the previous notes, understand the customer’s history, and continue the conversation without asking the customer to repeat the same information.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'automate-whatsapp-conversations-with-ai',
    title: 'Automate WhatsApp Conversations with AI',
    date: '2026-07-15',
    typeTag: 'new-feature-update',
    moduleTags: ['Ai Agents'],
    image: '/whats-new/automate-whatsapp-conversations-with-ai.png',
    teaser:
      "Bring your AI Agent to the world's most popular messaging platform. We're excited to introduce AI Agent for WhatsApp—a seamless integration that lets your AI Agent engage with customers directly on WhatsApp.",
    body: [
      { type: 'paragraph', segments: [{ text: 'Bring your AI Agent to the world’s most popular messaging platform.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'AI Agent for WhatsApp', bold: true },
          {
            text: '—a seamless integration that lets your AI Agent engage with customers directly on WhatsApp. Once connected, your AI Agent can answer customer questions, provide instant support, recommend products, and assist shoppers 24/7 using the knowledge you’ve trained it with.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      { type: 'paragraph', segments: [{ text: 'With AI Agent for WhatsApp, you can:' }] },
      {
        type: 'list',
        items: [
          'Connect your AI Agent to your WhatsApp Business account.',
          'Enable AI-powered conversations directly on WhatsApp.',
          'Respond using your AI Agent’s trained knowledge base.',
          'Provide instant, 24/7 support without manual intervention.',
          'Manage and monitor WhatsApp AI conversations from a single platform.',
        ],
      },
      { type: 'heading', text: '❤️ Why It’s Important' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Your customers already use WhatsApp to communicate with your business. By connecting your AI Agent to WhatsApp, you can deliver instant, consistent, and personalized responses around the clock, reduce support workload, and ensure customers receive quick assistance without waiting for a human agent. AI-powered automation helps you scale customer support while maintaining a seamless messaging experience.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'bring-ai-powered-support-to-your-customers',
    title: 'Bring AI-Powered Support to Your Customers',
    date: '2026-07-15',
    typeTag: 'new-feature-update',
    moduleTags: ['Ai Agents'],
    image: '/whats-new/bring-ai-powered-support-to-your-customers.png',
    teaser:
      'Deliver instant, personalized customer support 24/7 with AI-powered agents. We’re excited to introduce AI Agents—an intelligent shopping assistant that helps customers discover products, answer questions, and more.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Deliver instant, personalized customer support 24/7 with AI-powered agents.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'AI Agents', bold: true },
          {
            text: '—an intelligent shopping assistant that helps customers discover products, answer questions, track orders, learn about your business, and much more. Train your AI Agent using your own business knowledge, customize its behavior, and deploy it to your website or WhatsApp to provide fast, accurate, and engaging customer support around the clock.',
          },
        ],
      },
      { type: 'heading', text: '🚀 What You Can Set Up' },
      {
        type: 'list',
        items: [
          'Build and launch AI Agents in just a few steps.',
          'Train your AI Agent using knowledge sources such as FAQs, help articles, documents, and website content.',
          'Configure your AI Agent’s personality, behavior, welcome message, and response settings.',
          'Publish your AI Agent on your website to assist visitors in real time.',
          'Connect your AI Agent to WhatsApp to automate customer conversations on one of the most popular messaging channels.',
          'Monitor AI conversations, track usage, and review customer interactions to continuously improve your AI Agent.',
        ],
      },
      { type: 'heading', text: '❤️ Why It’s Important' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Customers expect instant answers, no matter when they reach out. AI Agents help businesses automate routine conversations, reduce support workload, and deliver consistent, accurate responses using your own business knowledge. Whether customers have questions about products, orders, policies, or services, your AI Agent is always available to provide assistance, creating a better customer experience while allowing your team to focus on more complex requests.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'find-merge-duplicate-contacts-with-ease',
    title: 'Find & Merge Duplicate Contacts with Ease',
    date: '2026-07-15',
    typeTag: 'enhancement',
    moduleTags: ['Records'],
    image: '/whats-new/find-merge-duplicate-contacts-with-ease.png',
    teaser:
      'Keep your CRM clean by merging duplicate contact records. This feature helps you identify duplicate customer records and merge them into a single, complete contact.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Keep your CRM clean by merging duplicate contact records.' }] },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'This feature helps you identify duplicate customer records and merge them into a single, complete contact. Eliminate duplicate entries, preserve valuable customer information, and maintain a single source of truth for every contact in your CRM, and keep better visibility over record updates.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Identify duplicate customer records in your CRM.',
          'Select exactly which contact fields to keep when merging duplicate records.',
          'Combine duplicate contacts into a single, complete customer profile.',
          'Preserve important customer information while removing redundant records.',
          'Maintain a clean, accurate CRM with complete customer histories.',
          'Review and choose the field values (such as name, email, phone number, address, tags, and more) that should be retained.',
        ],
      },
      { type: 'heading', text: '❤️ Why It’s Important' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'Duplicate contacts can lead to inaccurate reports, repeated customer communication, fragmented customer history, and unnecessary confusion for your team. By merging duplicate records, you maintain a clean CRM, ensure every customer has a single, complete profile, and enable your team to make better decisions with reliable data.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'accept-payments-with-stripe-or-razorpay',
    title: 'Accept Payments with Stripe or Razorpay',
    date: '2026-07-15',
    typeTag: 'new-feature-update',
    moduleTags: ['Invoices & Quotes'],
    image: '/whats-new/accept-payments-with-stripe-or-razorpay.png',
    teaser:
      'Accept payments seamlessly with trusted payment gateways. We’re excited to introduce Stripe and Razorpay integration for online payments, so you can securely collect payments directly through your storefront.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Accept payments seamlessly with trusted payment gateways.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Stripe and Razorpay integration', bold: true },
          {
            text: ' for online payments. You can now connect your preferred payment gateway to securely collect payments for memberships, subscriptions, and other purchases directly through your storefront—providing a fast, reliable, and hassle-free checkout experience.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Connect your Stripe or Razorpay account in just a few steps.',
          'Accept secure online payments from your customers.',
          'Support multiple payment methods based on your payment gateway.',
          'Provide a smooth and trusted checkout experience.',
          'Simplify payment collection for memberships and other paid offerings.',
          'Send invoices directly to customers.',
          'Easy to copy and share the payment link.',
        ],
      },
      { type: 'heading', text: '❤️ Why You’ll Love It' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'A simple and secure payment experience helps reduce checkout friction and increases customer confidence. By integrating with Stripe or Razorpay, you can automate payment collection, minimize manual work, and provide customers with a seamless way to complete their purchases using trusted payment providers.',
          },
        ],
      },
      { type: 'heading', text: '🎯 Use Case' },
      {
        type: 'paragraph',
        segments: [
          { text: 'You’re managing memberships or selling paid products to hundreds of customers. Instead of tracking invoices and payments manually, integrate ' },
          { text: 'Stripe', bold: true },
          { text: ' or ' },
          { text: 'Razorpay', bold: true },
          {
            text: ' to automatically generate and manage invoices, record successful payments, and maintain a complete payment history for every customer. This gives you a centralized view of invoices, payment status, amounts received, customer records, and reports—making it easier to reconcile payments, monitor revenue, and provide better customer support.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'organize-your-dashboard-with-labels',
    title: 'Organize Your Dashboard with Labels',
    date: '2026-07-15',
    typeTag: 'enhancement',
    moduleTags: ['Dashboards'],
    image: '/whats-new/organize-your-dashboard-with-labels.png',
    teaser:
      'Organize your dashboard the way you work. We’re excited to introduce Dashboard Labels & Sections—a new way to group, organize, and navigate your dashboard with customizable labels.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Organize your dashboard the way you work.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Dashboard Labels & Sections', bold: true },
          {
            text: '—a new way to group, organize, and navigate your dashboard with customizable labels and sections. Easily categorize related widgets and metrics to create a cleaner, more structured dashboard that’s easier to understand at a glance.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Add custom labels to identify different dashboard areas.',
          'Group related widgets into organized sections.',
          'Improve dashboard readability with a clear visual structure.',
          'Highlight important business metrics in one place.',
          'Make dashboards more useful for sales and management teams.',
        ],
      },
      { type: 'heading', text: '❤️ Why It’s Important' },
      {
        type: 'paragraph',
        segments: [
          { text: 'As your business grows, your dashboard can become crowded with widgets and metrics. ' },
          { text: 'Dashboard Labels & Sections', bold: true },
          {
            text: ' help you organize related information into meaningful groups, making it easier to navigate, locate key insights, and monitor performance without unnecessary scrolling.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'filter-your-entire-dashboard-at-once',
    title: 'Filter Your Entire Dashboard at Once',
    date: '2026-07-15',
    typeTag: 'enhancement',
    moduleTags: ['Dashboards'],
    image: '/whats-new/filter-your-entire-dashboard-at-once.png',
    teaser:
      'Analyze your dashboard faster with one filter that updates everything at once. Instead of selecting a date range on each page individually, filter your data once and view results across your dashboard.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Analyze your dashboard faster with one filter that updates everything at once.' }] },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'A powerful way to apply a single date range across supported CRM modules. Instead of selecting a date range on each page individually, you can now filter your data once and instantly view results for the same time period across your dashboard and reports.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: 'You can filter data based on fields such as deal creation date, contact details, and other important CRM data points.' }],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Apply one filter across the entire dashboard.',
          'Quickly view data for last week, this month, custom dates, and more.',
          'Filter by deal, contact, and other key CRM fields.',
          'Save time by avoiding repeated manual filter changes.',
          'Get a cleaner and more consistent dashboard view.',
        ],
      },
      { type: 'heading', text: '🎯 Use Case' },
      {
        type: 'paragraph',
        segments: [
          { text: 'You’re reviewing the performance of a marketing campaign across multiple CRM modules. Instead of selecting the same date range on every dashboard, simply apply the ' },
          { text: 'Global Date Filter', bold: true },
          { text: ' once. All supported reports and dashboards instantly update to show data for the selected period, making it easy to compare campaign performance and customer engagement.' },
        ],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
  {
    slug: 'scale-conversations-with-multiple-whatsapp-senders',
    title: 'Scale Conversations with Multiple WhatsApp Senders',
    date: '2026-07-14',
    typeTag: 'new-feature-update',
    moduleTags: ['WhatsApp'],
    image: '/whats-new/scale-conversations-with-multiple-whatsapp-senders.png',
    teaser:
      'Managing customer conversations across multiple WhatsApp numbers just got easier. We’re excited to introduce Multiple WhatsApp Senders, a new feature to connect and manage multiple sender accounts from one platform.',
    body: [
      { type: 'paragraph', segments: [{ text: 'Managing customer conversations across multiple WhatsApp numbers just got easier.' }] },
      {
        type: 'paragraph',
        segments: [
          { text: 'We’re excited to introduce ' },
          { text: 'Multiple WhatsApp Senders', bold: true },
          {
            text: ', a new feature that lets you connect and manage multiple WhatsApp sender accounts from a single platform. Whether you use separate numbers for sales, support, marketing, or different teams/brands, you can now organize and control them all in one place.',
          },
        ],
      },
      { type: 'heading', text: '🚀 Key Benefits' },
      {
        type: 'list',
        items: [
          'Admins get full access to all connected WhatsApp numbers.',
          'Team members can access only the numbers assigned to them.',
          'Easily switch between sender numbers whenever needed.',
          'Better visibility control across sales, support, and service teams.',
          'Teams can communicate from the right WhatsApp number based on their role or assignment.',
          'Use dedicated WhatsApp numbers for different brands, teams, or business functions.',
        ],
      },
      { type: 'heading', text: '❤️ Why You’ll Love It' },
      {
        type: 'paragraph',
        segments: [
          {
            text: 'As your business grows, a single WhatsApp number may not be enough. Multiple WhatsApp Senders helps you streamline communication, improve team organization, and manage customer conversations more efficiently—all from one centralized workspace.',
          },
        ],
      },
      {
        type: 'paragraph',
        segments: [{ text: 'Start connecting your WhatsApp sender accounts today and simplify the way your business communicates with customers.' }],
      },
      {
        type: 'paragraph',
        segments: [
          { text: 'For more details on enabling and using this feature, visit our ' },
          { text: 'Help Center', href: 'https://help.aiengagecrm.com/', external: true },
          { text: ' or contact our support team.' },
        ],
      },
    ],
  },
];

/** '2026-07-15' -> '15 Jul, 2026', matching the source site's date display. */
export function formatWhatsNewDate(iso) {
  const [year, month, day] = iso.split('-');
  const monthLabel = new Date(Number(year), Number(month) - 1, 1).toLocaleString('en-US', { month: 'short' });
  return `${Number(day)} ${monthLabel}, ${year}`;
}

/** Distinct years present across all entries, newest first — powers the sidebar's Years list. */
export function getWhatsNewYears() {
  const years = new Set(WN_ENTRIES.map((e) => e.date.slice(0, 4)));
  return [...years].sort().reverse();
}

export function getWhatsNewEntry(slug) {
  return WN_ENTRIES.find((e) => e.slug === slug) || null;
}

/** Builds a /whats-new filter URL, keeping only the facets that are actually set. */
export function buildWhatsNewFilterUrl({ type, module, year } = {}) {
  const params = new URLSearchParams();
  if (type && type !== 'all') params.set('type', type);
  if (module) params.set('module', module);
  if (year) params.set('year', year);
  const qs = params.toString();
  return qs ? `/whats-new?${qs}` : '/whats-new';
}
