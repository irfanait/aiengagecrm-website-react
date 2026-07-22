// Real Estate industry page content.

export const RE_HERO = {
  eyebrow: 'REAL ESTATE',
  titleLead: 'Automate Your Property Sales With ',
  titleAccent: 'AI-Powered Real Estate CRM',
  description:
    'Capture leads from property portals, Meta Ads, WhatsApp, calls, and your website. Let AI respond instantly to buyer inquiries, schedule site visits and automate follow-ups.',
  image: { src: '/industries/real-estate-hero.png', alt: 'AI-powered real estate CRM', width: 1426, height: 1103 },
};

export const RE_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Wondering, Why Property Leads Get Missed?',
  problems: [
    'Leads coming from multiple property portals',
    'Slow responses after an inquiry',
    'Agents using personal numbers',
    'Missed follow-ups after site visits',
    'No clear view of buyer preferences',
    'Duplicate or unqualified leads',
    'Difficulty tracking agent performance',
  ],
  mock: {
    title: 'All Leads',
    searchLabel: 'Search leads',
    columns: ['LEAD', 'SOURCE', 'ASSIGNED', 'LAST CONTACT', 'STATUS'],
    footerCount: 'Showing 7 of 128 leads',
    rows: [
      {
        name: 'Rohan Sharma',
        phone: '+91 98200 41125',
        source: 'MagicBricks',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '6 days ago', overdue: true },
        status: 'New',
      },
      {
        name: 'Sneha Deshmukh',
        phone: '+91 90224 71833',
        source: 'WhatsApp',
        assigned: { type: 'avatar', initials: 'AR', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Aisha R.' },
        lastContact: { text: '1h ago' },
        status: 'Contacted',
      },
      {
        name: 'Arjun Mehta',
        phone: '+91 98450 33218',
        source: 'Website',
        assigned: { type: 'avatar', initials: 'RV', bg: '#E4D6C2', fg: '#8A6E45', name: 'Rahul V.' },
        lastContact: { text: '3h ago' },
        status: 'Qualified',
      },
      {
        name: 'Rohan Sharma',
        phone: '+91 98200 41125',
        source: 'Meta Ads',
        assigned: { type: 'avatar', initials: 'MK', bg: '#F3E1D0', fg: '#B06A25', name: 'Meera K.' },
        lastContact: { text: '11 days ago', overdue: true },
        status: 'Follow-up',
      },
      {
        name: 'Kavya Pillai',
        phone: '+91 99801 55420',
        source: 'Calls',
        assigned: { type: 'avatar', initials: 'MK', bg: '#F3E1D0', fg: '#B06A25', name: 'Meera K.' },
        lastContact: { text: 'Yesterday' },
        status: 'Site Visit',
      },
    ],
  },
};

export const RE_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need To Sell More Properties',
  items: [
    { icon: 'fact_check', title: 'AI Lead Qualification', body: 'Automatically ask buyers about their budget, preferred location, property type, purchase timeline, and requirements. Help agents focus on leads with stronger buying intent.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'inbox', title: 'Property Inquiry Management', body: 'Capture and organize inquiries from property portals, Meta Ads, websites, WhatsApp, calls, and other lead sources in one place.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'chat', title: 'WhatsApp AI Agent', body: 'Respond to property inquiries instantly, answer common questions, collect buyer details, share information, and transfer qualified conversations to your team.', chipBg: '#E4F5EC', iconColor: '#1FAF64' },
    { icon: 'call', title: 'Built-In Calling', body: 'Make and receive business calls directly through the CRM. Record calls, save notes, track missed calls, and maintain a complete conversation history.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'event_available', title: 'Site Visit Scheduling', body: 'Schedule property visits, assign agents, send confirmations, and automatically remind buyers before their appointment.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'update', title: 'Automated Follow-Ups', body: 'Trigger timely messages, reminders, and tasks based on lead activity, site visits, missed calls, and pipeline stages.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'alt_route', title: 'Lead Distribution', body: 'Automatically assign leads based on project, location, agent availability, language, or predefined team rules.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'account_tree', title: 'Sales Pipeline', body: 'Track every opportunity from new inquiry and qualification to site visit, negotiation, and final booking.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'home_work', title: 'Property Preference Tracking', body: 'Store each buyer’s preferred location, budget, configuration, property type, amenities, and possession timeline for more relevant recommendations.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'summarize', title: 'Conversation Summaries', body: 'Turn long calls and messages into clear AI-generated summaries, including buyer requirements, key questions, and recommended next steps.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'campaign', title: 'Email and WhatsApp Campaigns', body: 'Send project updates, new property launches, price changes, availability alerts, and follow-up campaigns to selected lead segments.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'monitoring', title: 'Agent Performance Reports', body: 'Track response times, calls, follow-ups, site visits, lead progress, and conversions to understand how every agent is performing.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
  ],
};

export const RE_WORKFLOW = {
  eyebrow: 'REAL ESTATE WORKFLOW',
  heading: 'From Property Inquiry to Site Visit Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Lead Is Captured',
      paragraphs: [
        'Every new inquiry is automatically added to AiEngage from Meta Ads, property portals, WhatsApp, website forms, landing pages, incoming calls, and other lead sources.',
        'The lead profile includes the source, contact details, inquiry time, interested property, and available conversation history.',
      ],
      mock: {
        type: 'captureList',
        props: {
          title: 'New Leads',
          rows: [
            { tag: 'Meta Ads', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Arjun Mehta', sub: 'Godrej Air · 3BHK', time: '2m' },
            { tag: '99acres', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Rohan Sharma', sub: 'Prestige Whitefield', time: '6m' },
            { tag: 'WhatsApp', tagBg: '#E5F5EC', tagFg: '#0E7A45', name: 'Sneha Deshmukh', sub: 'Lodha Park · 2BHK', time: '9m' },
            { tag: 'Website', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Kavya Pillai', sub: 'Purva Zenium', time: '14m' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Instantly',
      paragraphs: [
        'AI Chatbot welcomes the buyer, understands the reason for the inquiry, answers common questions, and begins collecting the information your agents need. It starts the conversation within minutes, even when your sales team is busy or unavailable.',
      ],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'chat',
          agentIconBg: '#E5F5EC',
          agentIconColor: '#1FAF64',
          agentSub: 'Replying to Arjun · WhatsApp',
          messages: [
            { from: 'in', text: 'Hi, saw the 3BHK ad for Godrej Air.' },
            { from: 'out', text: "Hello Arjun! It's available. May I know your budget range?" },
            { from: 'in', text: 'Around ₹94L, ready to move.' },
            { from: 'out', text: 'Great — when would you like a site visit?' },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Buyer Requirements Are Qualified',
      paragraphs: ['AI asks relevant questions to understand the buyer’s actual requirements, including:'],
      checklist: [
        'Preferred location',
        'Property type',
        'Budget range',
        'Number of bedrooms',
        'Ready-to-move or under-construction preference',
        'Buying or investment purpose',
        'Financing requirement',
        'Purchase timeline',
      ],
      mock: {
        type: 'scoreCard',
        props: {
          avatarInitials: 'SD',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Sneha Deshmukh',
          phone: '+91 90224 71833',
          badge: 'High Intent',
          badgeFg: '#E64A24',
          badgeBg: '#FFF3EA',
          score: 82,
          fields: [
            { label: 'LOCATION', value: 'Pune' },
            { label: 'BUDGET', value: '₹1.05Cr' },
            { label: 'TYPE', value: '2BHK · RTM' },
            { label: 'TIMELINE', value: '30 days' },
          ],
        },
      },
    },
    {
      n: 4,
      title: 'Lead Is Assigned to the Right Agent',
      paragraphs: ['Once the buyer’s requirements are clear, the lead is automatically assigned to the most suitable agent. Assignment can be based on:'],
      checklist: ['Interested project', 'Property location', 'Buyer language', 'Agent availability', 'Lead source', 'Property category', 'Team or department'],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Project', value: 'Godrej Air', target: 'Meera K.' },
            { label: 'Language', value: 'Marathi', target: 'Aisha R.' },
            { label: 'Source', value: 'Meta Ads', target: 'Rahul V.' },
          ],
          routedNote: { prefix: 'Lead routed to ', name: 'Meera K.', suffix: ' in 4s' },
        },
      },
    },
    {
      n: 5,
      title: 'Relevant Property Options Are Shared',
      paragraphs: ['The buyer receives property options that match their budget, location, configuration, and other preferences. Your team can share:'],
      checklist: ['Property listings', 'Project brochures', 'Floor plans', 'Pricing details', 'Location maps', 'Amenities', 'Availability updates', 'Photos and videos'],
      mock: {
        type: 'share',
        props: {
          title: 'Shared with Sneha',
          items: [
            { icon: 'apartment', title: 'Lodha Park · 2BHK', sub: 'Ready to move · 1240 sqft', value: '₹1.05Cr' },
            { icon: 'apartment', title: 'Purva Zenium · 2BHK', sub: 'Possession 2026 · 1180 sqft', value: '₹96L' },
          ],
          channels: [
            { icon: 'chat', label: 'WhatsApp', active: true },
            { icon: 'mail', label: 'Email', active: false },
          ],
        },
      },
    },
    {
      n: 6,
      title: 'Site Visit Is Scheduled',
      paragraphs: ['Once the buyer shows interest, they can choose a suitable date and time for a property visit. AiEngage can:'],
      checklist: [
        'Check available time slots',
        'Assign the responsible agent',
        'Add the visit to the calendar',
        'Send booking confirmation',
        'Share location details',
        'Send reminders before the visit',
        'Track rescheduled or missed visits',
      ],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Site Visit',
          monthLabel: 'Nov 2025',
          days: [
            { label: 'FRI', num: '21' },
            { label: 'SAT', num: '22', active: true },
            { label: 'SUN', num: '23' },
            { label: 'MON', num: '24' },
          ],
          times: [
            { label: '11:00 AM', active: true },
            { label: '1:00 PM' },
            { label: '4:30 PM' },
          ],
          footerLabel: 'Agent',
          footerName: 'Meera K.',
          statusLabel: 'Confirmed',
          statusFg: '#0E7A45',
          statusBg: '#E5F5EC',
          statusIconColor: '#1FAF64',
        },
      },
    },
    {
      n: 7,
      title: 'Follow-Ups Continue Automatically',
      paragraphs: ['After the site visit, AiEngage keeps the opportunity moving with timely follow-ups and reminders. Automations can be triggered for:'],
      checklist: [
        'Visit confirmation',
        'Upcoming visit reminders',
        'Missed visits',
        'Post-visit feedback',
        'Additional property options',
        'Pricing updates',
        'Negotiation follow-ups',
        'Booking reminders',
        'Long-term lead nurturing',
      ],
      mock: {
        type: 'timeline',
        props: {
          events: [
            { title: 'Visit confirmation sent', sub: 'Sat 22, 9:02 AM · WhatsApp', done: true },
            { title: 'Reminder scheduled', sub: '1h before visit', done: true },
            { title: 'Post-visit feedback', sub: 'Queued · Sat 22, 6:00 PM', done: false },
          ],
        },
      },
    },
  ],
};

export const RE_BENEFITS = {
  heading: 'The Benefits of AI-Powered Real Estate CRM',
  items: [
    { icon: 'bolt', title: 'Faster Response to Every Inquiry', body: 'Respond to new property leads within minutes, even when agents are busy or outside working hours.' },
    { icon: 'verified', title: 'More Qualified Property Leads', body: 'Collect buyer requirements, budget, location, property type, and purchase timeline before assigning the lead to an agent.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: 'Automatically create reminders, send messages, and trigger the next action based on lead activity and pipeline stage.' },
    { icon: 'calendar_month', title: 'More Site Visits Scheduled', body: 'Make it easier for interested buyers to select a suitable date and time while your team manages confirmations and reminders automatically.' },
    { icon: 'alt_route', title: 'Better Lead Distribution', body: 'Assign every inquiry to the right agent based on project, location, language, availability, or predefined rules.' },
    { icon: 'contact_page', title: 'Complete Buyer Information', body: 'Keep calls, WhatsApp chats, emails, preferences, notes, and previous interactions connected to one lead profile.' },
    { icon: 'task_alt', title: 'Less Manual Work for Agents', body: 'Reduce repetitive tasks such as updating lead details, writing conversation summaries, sending reminders, and scheduling follow-ups.' },
    { icon: 'account_tree', title: 'Clearer Sales Pipeline', body: 'See which leads are new, qualified, waiting for follow-up, scheduled for a visit, under negotiation, or ready to book.' },
    { icon: 'insights', title: 'Better Agent Accountability', body: 'Track response time, call activity, pending follow-ups, site visits, and lead progress for every agent.' },
  ],
};

export const RE_BUSINESS_TYPES = {
  heading: 'Built for Every Type of Real Estate Business',
  columns: 4,
  items: [
    { icon: 'apartment', name: 'Residential Developers' },
    { icon: 'real_estate_agent', name: 'Real Estate Brokers' },
    { icon: 'support_agent', name: 'Property Consultants' },
    { icon: 'vpn_key', name: 'Rental Agencies' },
  ],
};

export const RE_RESULTS = {
  heading: 'The Smarter Way to Manage Property Leads Starts Here',
  stats: [
    { value: '2X', label: 'Faster Lead Follow-Ups' },
    { value: 'More', label: 'Qualified Property Inquiries' },
    { value: 'Fewer', label: 'Missed Site Visits' },
  ],
};
