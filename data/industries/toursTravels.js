// Tours & Travels industry page content.

export const TT_HERO = {
  eyebrow: 'Tours & Travels',
  titleLead: 'Automate Your Travel Bookings With ',
  titleAccent: 'AI-Powered Travel CRM',
  description:
    'Capture travel inquiries from your website, Meta Ads, WhatsApp, calls, landing pages, and travel campaigns. Let AI respond quickly to travellers inquiries, collect traveller preferences, schedule consultations, and automate follow-ups.',
  image: { src: '/industries/tours-travels-hero.png', alt: 'Travel consultants using AiEngage CRM', width: 1586, height: 992 },
};

export const TT_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Why Travel Inquiries Get Missed',
  problems: [
    'Inquiries coming from multiple channels',
    'Slow responses to travellers requesting packages',
    'Sales agents using personal numbers',
    'Repetitive questions about prices and itineraries',
    'No clear view of traveller preferences',
    'Missed follow-ups after sharing quotations',
    'Difficulty tracking inquiry and booking performance',
  ],
  mock: {
    title: 'All Inquiries',
    searchLabel: 'Search inquiries',
    columns: ['TRAVELLER', 'SOURCE', 'ASSIGNED', 'LAST CONTACT', 'STATUS'],
    footerCount: 'Showing 5 of 142 inquiries',
    rows: [
      {
        name: 'Ananya Joshi',
        phone: '+91 98670 31294',
        source: 'Website',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '4h ago' },
        status: 'New',
      },
      {
        name: 'Ananya Joshi',
        phone: '+91 98670 31294',
        source: 'Meta Ads',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '6 days ago', overdue: true },
        status: 'New',
      },
      {
        name: 'Ananya Joshi',
        phone: '+91 98670 31294',
        source: 'WhatsApp',
        assigned: { type: 'avatar', initials: 'RK', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Rohit K.' },
        lastContact: { text: '12 days ago', overdue: true },
        status: 'Quotation Sent',
      },
      {
        name: 'Karan Malhotra',
        phone: '+91 90045 77218',
        source: 'Calls',
        assigned: { type: 'avatar', initials: 'DP', bg: '#E4D6C2', fg: '#8A6E45', name: 'Divya P.' },
        lastContact: { text: '2h ago' },
        status: 'Contacted',
      },
      {
        name: 'Meera Pillai',
        phone: '+91 98455 60923',
        source: 'Landing Page',
        assigned: { type: 'avatar', initials: 'SN', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Sameer N.' },
        lastContact: { text: '1h ago' },
        status: 'Qualified',
      },
    ],
  },
};

export const TT_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need To Automate Travel Bookings',
  items: [
    {
      icon: 'fact_check',
      title: 'AI Inquiry Qualification',
      href: '/ai#ai-lead-qualification',
      body: 'Automatically collect important details such as destination, travel dates, number of travellers, budget, departure city, trip duration, and accommodation preferences.',
      body2: 'Help your team identify serious travellers before starting the sales conversation.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'inbox',
      title: 'Travel Inquiry Management',
      href: '/lead-management',
      body: 'Capture and organize inquiries from Meta Ads, websites, WhatsApp, calls, landing pages, travel campaigns, referral sources, and other channels in one place.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'chat',
      title: 'WhatsApp AI Agent',
      href: '/whatsapp#ai-agent',
      body: 'Respond to travel inquiries quickly, answer common questions, collect trip requirements, share package information, and transfer qualified conversations to your travel consultants.',
      chipBg: '#E4F5EC',
      iconColor: '#1FAF64',
    },
    {
      icon: 'call',
      title: 'Built-In Calling',
      href: '/calling',
      body: 'Make and receive business calls directly through the CRM. Record calls, save notes, track missed calls, and maintain a complete communication history for every traveller.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'event_available',
      title: 'Consultation Scheduling',
      body: 'Schedule calls or meetings with travel consultants based on destination, package type, traveller availability, and agent expertise.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'update',
      title: 'Automated Follow-Ups',
      href: '/automation',
      body: 'Trigger quotation reminders, payment follow-ups, booking reminders, document requests, and next-step tasks based on traveller activity and booking stage.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'alt_route',
      title: 'Inquiry Distribution',
      href: '/lead-management',
      body: 'Automatically assign travel inquiries based on destination, package category, departure city, traveller language, agent availability, or predefined team rules.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'account_tree',
      title: 'Booking Pipeline',
      href: '/sales-pipeline',
      body: 'Track every travel opportunity from new inquiry and qualification to package sharing, quotation, payment, booking confirmation, and trip completion.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'luggage',
      title: 'Traveller Preference Tracking',
      body: 'Store each traveller’s destination, budget, travel dates, preferred hotel category, meal preference, trip type, activities, and special requirements.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'summarize',
      title: 'Conversation Summaries',
      href: '/ai#smart-summaries',
      body: 'Turn long WhatsApp chats and calls into clear AI-generated summaries containing trip requirements, traveller preferences, questions, quoted packages, and recommended next steps.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'campaign',
      title: 'Email and WhatsApp Campaigns',
      href: '/marketing-campaigns',
      body: 'Send destination offers, seasonal packages, group tours, early-booking deals, visa updates, payment reminders, and travel campaigns to selected traveller segments.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'monitoring',
      title: 'Agent Performance Reports',
      href: '/reports-analytics',
      body: 'Track response times, calls, quotations shared, pending follow-ups, confirmed bookings, booking value, and conversion performance for every travel consultant.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
  ],
};

export const TT_WORKFLOW = {
  eyebrow: 'TOURS AND TRAVEL WORKFLOW',
  heading: 'From Travel Inquiry To Confirmed Booking Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Travel Inquiry Is Captured',
      paragraphs: [
        'Every new inquiry is automatically added to AiEngage from Meta Ads, your website, WhatsApp, landing pages, incoming calls, travel forms, referral sources, and other channels.',
        'The traveller profile can include contact details, inquiry source, preferred destination, travel dates, selected package, and available conversation history.',
      ],
      mock: {
        type: 'captureList',
        props: {
          title: 'New Inquiries',
          rows: [
            { tag: 'Meta Ads', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Ananya Joshi', sub: 'Bali · 6 nights', time: '2m' },
            { tag: 'Website', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Karan Malhotra', sub: 'Dubai · Family', time: '5m' },
            { tag: 'WhatsApp', tagBg: '#E5F5EC', tagFg: '#0E7A45', name: 'Meera Pillai', sub: 'Kerala · Honeymoon', time: '9m' },
            { tag: 'Landing Page', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Rohit Verma', sub: 'Manali · Group', time: '13m' },
            { tag: 'Calls', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Sana Kapoor', sub: 'Thailand · Couple', time: '18m' },
          ],
          fields: [
            { label: 'SOURCE', value: 'Meta Ads' },
            { label: 'DESTINATION', value: 'Bali' },
            { label: 'TRAVEL DATES', value: '12–18 Dec' },
            { label: 'PACKAGE', value: 'Bali Explorer' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Quickly',
      paragraphs: [
        'AI starts the conversation when your travel consultants are busy or unavailable.',
        'It welcomes the traveller, understands the type of trip they are planning, answers common questions, and starts collecting the information needed to recommend suitable packages.',
      ],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'smart_toy',
          agentIconBg: '#FFF3EA',
          agentIconColor: '#FF5F38',
          agentSub: 'Replying to Ananya · WhatsApp',
          headerBadge: { icon: 'bolt', text: 'Replied in 30s', color: '#0E7A45', bg: '#E5F5EC', iconColor: '#1FAF64' },
          messages: [
            { from: 'in', text: "Hi, I'm planning a trip to Bali." },
            { from: 'out', text: 'Wonderful! When are you planning to travel?' },
            { from: 'in', text: 'Around 12–18 December.' },
            { from: 'out', text: 'Great. How many travellers will be joining?' },
            { from: 'in', text: '2 adults, from Mumbai.' },
            { from: 'out', text: "Perfect — I'll share a few Bali packages that fit those dates." },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Travel Requirements Are Collected',
      paragraphs: ['AI asks relevant questions to understand the traveller’s requirements, including:'],
      checklist: [
        'Preferred destination',
        'Domestic or international travel',
        'Departure city',
        'Travel dates',
        'Trip duration',
        'Number of adults and children',
        'Estimated budget',
        'Hotel category',
        'Trip type',
        'Preferred activities',
        'Visa assistance requirement',
        'Flights and transportation requirement',
      ],
      footNotes: [
        { text: 'Based on the responses, the inquiry can be categorized as high intent, quotation ready, follow-up required, future traveller, group inquiry, or incomplete.' },
      ],
      mock: {
        type: 'scoreCard',
        props: {
          avatarInitials: 'AJ',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Ananya Joshi',
          phone: '+91 98670 31294',
          badge: 'High Intent',
          badgeFg: '#E64A24',
          badgeBg: '#FFF3EA',
          score: 87,
          fields: [
            { label: 'DESTINATION', value: 'Bali' },
            { label: 'DEPARTURE', value: 'Mumbai' },
            { label: 'DATES · NIGHTS', value: '12 Dec · 6N' },
            { label: 'TRAVELLERS', value: '2 Adults' },
            { label: 'BUDGET', value: '₹1.85L' },
            { label: 'HOTEL', value: '4-Star' },
          ],
          chips: ['Quotation Ready', 'High Intent', 'Couple'],
        },
      },
    },
    {
      n: 4,
      title: 'Inquiry Is Assigned to the Right Consultant',
      paragraphs: [
        'Once the trip requirements are clear, the inquiry is automatically assigned to the most suitable travel consultant.',
        'Assignment can be based on:',
      ],
      checklist: ['Destination expertise', 'Domestic or international travel', 'Honeymoon, family, group, or corporate trip', 'Departure city', 'Traveller language', 'Consultant availability', 'Inquiry source', 'Package category'],
      footNotes: [{ text: 'This helps reduce response delays and prevents travel inquiries from remaining unattended.' }],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Destination', value: 'Bali', target: 'Rohit K.' },
            { label: 'Trip Type', value: 'Honeymoon', target: 'Divya P.' },
            { label: 'Departure', value: 'Delhi', target: 'Sameer N.' },
          ],
          availability: {
            heading: 'CONSULTANT AVAILABILITY',
            items: [
              { initials: 'RK', avatarBg: '#FFE1D6', avatarFg: '#E64A24', name: 'Rohit K.', sub: 'Bali · Thailand', count: '3 active', status: 'Available', statusFg: '#0E7A45', statusBg: '#E5F5EC' },
              { initials: 'DP', avatarBg: '#F3E1D0', avatarFg: '#B06A25', name: 'Divya P.', sub: 'Kerala · Andaman', count: '5 active', status: 'Busy', statusFg: '#6E6154', statusBg: '#F4ECE0' },
              { initials: 'SN', avatarBg: '#F0DFC9', avatarFg: '#9A6A2C', name: 'Sameer N.', sub: 'Dubai · Europe', count: '2 active', status: 'Available', statusFg: '#0E7A45', statusBg: '#E5F5EC' },
              { initials: 'PM', avatarBg: '#E4D6C2', avatarFg: '#8A6E45', name: 'Priya M.', sub: 'Manali · Leh', count: '4 active', status: 'Busy', statusFg: '#6E6154', statusBg: '#F4ECE0' },
            ],
          },
        },
      },
    },
    {
      n: 5,
      title: 'Suitable Travel Packages Are Shared',
      paragraphs: [
        'The traveller receives package options that match their destination, dates, budget, group size, and preferences.',
        'Your team can share:',
      ],
      checklist: ['Travel packages', 'Day-wise itineraries', 'Hotel options', 'Flight details', 'Transportation information', 'Activities and sightseeing', 'Package inclusions', 'Package exclusions', 'Pricing and payment details', 'Photos, videos, and destination guides'],
      footNotes: [{ text: 'These details can be shared through WhatsApp or email while keeping the entire conversation connected to the CRM.' }],
      mock: {
        type: 'share',
        props: {
          title: 'Packages for Ananya · Bali',
          showItemShareIcon: true,
          items: [
            { icon: 'beach_access', title: 'Bali Explorer · 6N', sub: '4-Star · Breakfast', value: '₹1.85L pp' },
            { icon: 'villa', title: 'Bali Luxe · 6N', sub: '5-Star · Half Board', value: '₹3.2L pp' },
            { icon: 'surfing', title: 'Bali Adventure · 5N', sub: '3-Star · Activities', value: '₹1.4L pp' },
          ],
          tags: [
            { icon: 'description', label: 'Itinerary PDF' },
            { icon: 'hotel', label: 'Hotel Sheet' },
            { icon: 'flight', label: 'Flights' },
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
      title: 'Consultation or Booking Is Scheduled',
      paragraphs: [
        'Once the traveller shows interest, they can schedule a call or meeting with the assigned travel consultant.',
        'AiEngage can:',
      ],
      checklist: ['Show available consultation slots', 'Assign the appropriate travel consultant', 'Add the meeting to the calendar', 'Send confirmation messages', 'Share call or meeting details', 'Send reminders before the consultation', 'Track rescheduled or missed meetings', 'Create the next follow-up task'],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Consultation',
          monthLabel: 'Dec 2025',
          days: [
            { label: 'MON', num: '01' },
            { label: 'TUE', num: '02', active: true },
            { label: 'WED', num: '03' },
            { label: 'THU', num: '04' },
          ],
          times: [
            { label: '11:00 AM', active: true },
            { label: '2:00 PM' },
            { label: '5:30 PM' },
          ],
          footerLabel: 'Consultant',
          footerName: 'Rohit K.',
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
      paragraphs: [
        'After the package or quotation is shared, AiEngage keeps the inquiry moving with timely reminders and follow-ups.',
        'Automations can be triggered for:',
      ],
      checklist: ['Quotation follow-ups', 'Revised itinerary requests', 'Pending traveller details', 'Passport and document collection', 'Visa application reminders', 'Payment reminders', 'Booking confirmation', 'Flight and hotel updates', 'Pre-departure reminders', 'Post-trip feedback', 'Future travel campaigns'],
      footNotes: [{ text: 'This helps your travel consultants stay consistent without manually tracking every next step.' }],
      mock: {
        type: 'timeline',
        props: {
          badge: { icon: 'bolt', text: 'Bali · Ananya' },
          events: [
            { title: 'Quotation follow-up sent', sub: 'Tue 02, 9:02 AM · WhatsApp', done: true },
            { title: 'Payment reminder', sub: 'Scheduled · Wed 03, 10:00 AM', done: true },
            { title: 'Document collection call', sub: 'Missed · Wed 03, 4:00 PM', done: true },
            { title: 'Pre-departure reminder', sub: 'Queued · 10 Dec, 8:00 AM', done: false },
          ],
        },
      },
    },
  ],
};

export const TT_BENEFITS = {
  heading: 'The Benefits Of AI-Powered Travel CRM',
  items: [
    { icon: 'bolt', title: 'Faster Response to Travel Inquiries', body: 'Respond to new trip inquiries quickly, even when travel consultants are busy or outside normal working hours.' },
    { icon: 'verified', title: 'More Qualified Travel Inquiries', body: 'Collect destination, budget, dates, traveller count, trip type, and package preferences before assigning the inquiry to a consultant.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: 'Automatically send reminders, create tasks, and trigger the next action after packages, itineraries, or quotations are shared.' },
    { icon: 'trending_up', title: 'More Quotations Moving Toward Booking', body: 'Keep interested travellers engaged with timely responses, suitable package options, revised quotations, and clear next steps.' },
    { icon: 'alt_route', title: 'Better Inquiry Distribution', body: 'Assign inquiries to the right consultant based on destination, trip type, language, departure city, availability, or expertise.' },
    { icon: 'contact_page', title: 'Complete Traveller Information', body: 'Keep calls, WhatsApp chats, emails, trip requirements, quotations, documents, notes, and previous interactions connected to one traveller profile.' },
    { icon: 'task_alt', title: 'Less Manual Work for Travel Consultants', body: 'Reduce repetitive tasks such as collecting trip details, updating inquiry records, summarizing conversations, sending reminders, and tracking pending responses.' },
    { icon: 'account_tree', title: 'Clearer Booking Pipeline', body: 'See which inquiries are new, qualified, waiting for a quotation, under discussion, awaiting payment, confirmed, cancelled, or due for follow-up.' },
    { icon: 'insights', title: 'Better Agent Accountability', body: 'Track response times, call activity, quotations shared, pending follow-ups, bookings confirmed, and revenue generated by every consultant.' },
  ],
};

export const TT_BUSINESS_TYPES = {
  heading: 'Built For Different Types Of Travel Businesses',
  columns: 4,
  items: [
    { icon: 'tour', name: 'Tour Operators' },
    { icon: 'travel_explore', name: 'Travel Agencies' },
    { icon: 'flight_takeoff', name: 'Domestic Travel Companies' },
    { icon: 'corporate_fare', name: 'Corporate Travel Management Companies' },
    { icon: 'hiking', name: 'Adventure Travel Companies' },
    { icon: 'favorite', name: 'Honeymoon and Luxury Travel Planners' },
    { icon: 'location_city', name: 'Multi-Branch Travel Businesses' },
  ],
};

export const TT_RESULTS = {
  headingLead: 'The Smarter Way To Manage Travel Leads ',
  headingAccent: 'Starts Here',
  stats: [
    [
      { value: '2X', label: 'Faster Inquiry Follow-Ups' },
      { value: 'More', label: 'Qualified Travel Inquiries' },
      { value: 'Fewer', label: 'Missed Quotation Follow-Ups' },
    ],
    [
      { value: 'Less', label: 'Manual Inquiry Management' },
      { value: 'Better', label: 'Consultant Accountability' },
      { value: 'More', label: 'Travel Inquiries Moving Toward Booking' },
    ],
  ],
};
