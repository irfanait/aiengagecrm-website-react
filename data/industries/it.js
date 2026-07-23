// IT & Technology industry page content.

export const IT_HERO = {
  eyebrow: 'IT & Technology',
  titleLead: 'Automate Your Client Journey With ',
  titleAccent: 'AI-Powered CRM',
  description:
    'Capture inquiries from your website, Meta Ads, LinkedIn campaigns, WhatsApp, calls, forms, and referral partners. Let AI respond quickly to client requirements, qualify leads, assign sales reps, schedule discovery calls, and automate follow-ups.',
  image: { src: '/industries/it-hero.png', alt: 'IT services team using AiEngage CRM', width: 1388, height: 1086 },
};

export const IT_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Wondering, Why Client Inquiries Get Missed?',
  problems: [
    'Inquiries coming from multiple channels',
    'Slow responses to potential clients',
    'Sales teams using personal numbers',
    'Incomplete project requirements',
    'Missed follow-ups after discovery calls',
    'Proposals shared without proper tracking',
    'Unqualified inquiries taking up sales time',
    'Difficulty coordinating sales and technical teams',
    'Limited visibility into pipeline and team performance',
  ],
  mock: {
    title: 'All Inquiries',
    searchLabel: 'Search inquiries',
    filterLabel: 'Source',
    columnTemplate: '2.2fr 1.4fr 1.1fr 1.4fr 1fr',
    columns: ['PROSPECT', 'SERVICE', 'SOURCE', 'OWNER', 'STATUS'],
    footerCount: 'Showing 7 of 214 inquiries',
    rows: [
      { name: 'Rohan Sharma', phone: '+91 98204 55127', product: 'Web Development', source: 'LinkedIn', assigned: { type: 'text', value: 'Unassigned', overdue: true }, status: 'New' },
      { name: 'Priya Nair', phone: '+91 90114 27883', product: 'Mobile App', source: 'Meta Ads', assigned: { type: 'text', value: '6 days ago', overdue: true }, status: 'Follow-up' },
      { name: 'James Carter', phone: '+1 415 220 8841', product: 'SaaS Platform', source: 'Website', assigned: { type: 'text', value: 'Unassigned', overdue: true }, status: 'New' },
      { name: 'Sneha Deshmukh', phone: '+91 90224 71833', product: 'Cloud Migration', source: 'WhatsApp', assigned: { type: 'text', value: 'Aisha R.', strong: true }, status: 'Contacted' },
      { name: 'Arjun Mehta', phone: '+91 98450 33218', product: 'Security Audit', source: 'Referral', assigned: { type: 'text', value: '9 days ago', overdue: true }, status: 'Qualified' },
      { name: 'Kavya Pillai', phone: '+91 99801 55420', product: 'IT Consulting', source: 'Website', assigned: { type: 'text', value: 'Meera K.', strong: true }, status: 'Proposal' },
      { name: 'Vikram Rao', phone: '+91 98450 11276', product: 'Managed IT', source: 'LinkedIn', assigned: { type: 'text', value: 'Unassigned', overdue: true }, status: 'New' },
    ],
  },
};

export const IT_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need To Automate Client Engagement',
  items: [
    { icon: 'fact_check', title: 'AI Lead Qualification', body: 'Automatically collect the required service, project scope, budget range, expected timeline, company size, existing technology, and decision-making stage so your team focuses on opportunities with stronger buying intent.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'inbox', title: 'IT Inquiry Management', body: 'Capture and organize inquiries from your website, Meta Ads, LinkedIn campaigns, WhatsApp, calls, forms, landing pages, marketplaces, and referrals in one place.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'chat', title: 'WhatsApp AI Agent', body: 'Respond to service inquiries quickly, answer common questions, collect project requirements, share company information, and transfer qualified opportunities to your sales team.', chipBg: '#E4F5EC', iconColor: '#1FAF64' },
    { icon: 'call', title: 'Built-In Calling', body: 'Make and receive business calls directly through the CRM. Record calls where permitted, save notes, track missed calls, and maintain a complete communication history.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'event_available', title: 'Discovery Call Scheduling', body: 'Allow qualified prospects to schedule discovery calls, technical consultations, product demonstrations, and project discussions with the right team member.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'update', title: 'Automated Follow-Ups', body: 'Trigger reminders and messages after inquiries, discovery calls, demonstrations, proposals, technical discussions, and contract negotiations.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'alt_route', title: 'Lead Distribution', body: 'Automatically assign inquiries based on service category, industry, location, language, project size, technical expertise, or sales representative availability.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'account_tree', title: 'Sales Pipeline', body: 'Track every opportunity from initial inquiry and qualification to discovery, proposal, negotiation, contract signing, and project handover.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'summarize', title: 'Conversation Summaries', body: 'Turn long calls, emails, meetings, and WhatsApp conversations into clear AI-generated summaries with project requirements, technical questions, decisions, and next actions.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'campaign', title: 'Email and WhatsApp Campaigns', body: 'Send service updates, case studies, webinar invitations, product announcements, consultation reminders, and lead-nurturing campaigns to selected prospect segments.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'monitoring', title: 'Sales Performance Reports', body: 'Track response times, calls, meetings, proposals, follow-ups, pipeline movement, conversion rates, and revenue opportunities for every sales representative.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
  ],
};

export const IT_WORKFLOW = {
  eyebrow: 'IT SERVICES WORKFLOW',
  heading: 'From Client Inquiry to Client Onboarding Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Business Inquiry Is Captured',
      paragraphs: [
        'Every new inquiry is automatically added to AiEngage from LinkedIn campaigns, Meta Ads, your website, WhatsApp, contact forms, incoming calls, landing pages, marketplaces, and referral sources.',
        'The prospect profile can include the contact details, company, source, required service, inquiry time, campaign, and previous communication.',
      ],
      mock: {
        type: 'captureList',
        props: {
          title: 'New Inquiries',
          rows: [
            { tag: 'LinkedIn', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Arjun Mehta', sub: 'Web App · React', time: '2m' },
            { tag: 'Meta Ads', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Rohan Sharma', sub: 'Cloud Migration', time: '6m' },
            { tag: 'WhatsApp', tagBg: '#E5F5EC', tagFg: '#0E7A45', name: 'Sneha Deshmukh', sub: 'SaaS Platform', time: '9m' },
            { tag: 'Website', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Kavya Pillai', sub: 'IT Consulting', time: '14m' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Quickly',
      paragraphs: [
        'AI starts the conversation when your sales team is busy or unavailable. It welcomes the prospect, identifies the service they are interested in — from web and mobile development to cloud, cybersecurity, and managed IT — answers common questions, and begins collecting the information required for a meaningful sales conversation.',
      ],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'chat',
          agentIconBg: '#E5F5EC',
          agentIconColor: '#1FAF64',
          agentSub: 'Replying to Arjun · WhatsApp',
          messages: [
            { from: 'in', text: 'Hi, I need a quote for a web app.' },
            { from: 'out', text: 'Hello Arjun! Happy to help. Is this a new build or a revamp?' },
            { from: 'in', text: 'New build, ~15 screens, budget ₹8–10L.' },
            { from: 'out', text: 'Great — shall I set up a discovery call this week?' },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Project Requirements Are Collected',
      paragraphs: ['AI asks relevant questions to understand the opportunity, including:'],
      checklist: ['Required IT service', 'Business problem to be solved', 'Project scope', 'Existing system or technology', 'Required features', 'Integration requirements', 'Preferred technology', 'Budget range', 'Expected project timeline', 'Decision-making stage', 'Number of users', 'Required support level'],
      mock: {
        type: 'scoreCard',
        props: {
          avatarInitials: 'AM',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Arjun Mehta',
          phone: 'Acme Fintech · +91 98450 33218',
          badge: 'High Intent',
          badgeFg: '#E64A24',
          badgeBg: '#FFF3EA',
          score: 78,
          fields: [
            { label: 'SERVICE', value: 'Web App' },
            { label: 'BUDGET', value: '₹8–10L' },
            { label: 'TIMELINE', value: '8 weeks' },
            { label: 'STAGE', value: 'Evaluating' },
          ],
        },
      },
    },
    {
      n: 4,
      title: 'Inquiry Is Assigned to the Right Team',
      paragraphs: ['Once the requirements are clear, the inquiry is automatically assigned to the most suitable sales rep, consultant, or technical expert. Assignment can be based on:'],
      checklist: ['Required service', 'Technology', 'Industry', 'Project size', 'Prospect location', 'Preferred language', 'Sales rep availability', 'Technical expertise', 'New or existing client', 'Inquiry source', 'Estimated opportunity value'],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Service', value: 'Web App', target: 'Rahul V.' },
            { label: 'Tech', value: 'React · Node', target: 'Meera K.' },
            { label: 'Industry', value: 'Fintech', target: 'Aisha R.' },
          ],
          routedNote: { prefix: 'Routed to ', name: 'Rahul V.', suffix: ' in 4s' },
        },
      },
    },
    {
      n: 5,
      title: 'Relevant Information Is Shared',
      paragraphs: ['The prospect receives useful information based on their requirements and stage in the sales journey. Your team can share:'],
      checklist: ['Service information', 'Company profile', 'Relevant case studies', 'Project portfolio', 'Technology capabilities', 'Engagement models', 'Development process', 'Estimated timelines', 'Consultation details', 'Product demonstrations', 'Security information', 'Support options'],
      mock: {
        type: 'share',
        props: {
          title: 'Shared with Arjun',
          items: [
            { icon: 'description', title: 'Company Profile.pdf', sub: 'Services · Engagement models', value: '2.1 MB' },
            { icon: 'workspace_premium', title: 'Fintech Case Study', sub: 'Payments platform · 6 weeks', value: 'Link' },
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
      title: 'Discovery Call Is Scheduled',
      paragraphs: ['Once the prospect shows interest, they can select a suitable time for a discovery call, technical consultation, or demo. AiEngage can:'],
      checklist: ['Display available meeting slots', 'Assign the appropriate sales rep', 'Include a technical expert when required', 'Add the meeting to the calendar', 'Send confirmation messages', 'Share meeting links', 'Send reminders before the call', 'Track rescheduled or missed meetings', 'Create preparation tasks', 'Move the opportunity to the next stage'],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Discovery Call',
          monthLabel: 'Nov 2025',
          days: [
            { label: 'TUE', num: 18 },
            { label: 'WED', num: 19, active: true },
            { label: 'THU', num: 20 },
            { label: 'FRI', num: 21 },
          ],
          times: [{ label: '11:30 AM', active: true }, { label: '2:00 PM' }, { label: '5:00 PM' }],
          footerLabel: 'Rep',
          footerName: 'Rahul V. + Tech lead',
          statusLabel: 'Confirmed',
          statusFg: '#0E7A45',
          statusBg: '#E5F5EC',
          statusIconColor: '#1FAF64',
        },
      },
    },
    {
      n: 7,
      title: 'Proposal and Technical Discussion Are Tracked',
      paragraphs: ['After the discovery call, your team can track every activity required to move the opportunity forward. This can include:'],
      checklist: ['Technical requirement review', 'Solution planning', 'Scope confirmation', 'Effort estimation', 'Proposal preparation', 'Proposal sharing', 'Security questionnaire', 'Technical demonstration', 'Stakeholder meeting', 'Contract discussion', 'Commercial negotiation'],
      mock: {
        type: 'pipelineTracker',
        props: {
          title: 'Acme Fintech · Web App',
          sub: 'Stage · Proposal',
          value: '₹9.2L',
          items: [
            { label: 'Requirement review', state: 'done' },
            { label: 'Proposal shared', state: 'done' },
            { label: 'Security questionnaire', state: 'pending' },
            { label: 'Contract discussion', state: 'queued' },
          ],
        },
      },
    },
    {
      n: 8,
      title: 'Follow-Ups Continue Automatically',
      paragraphs: ['AiEngage helps your sales team stay connected with prospects after meetings, demos, and proposals. Automations can be triggered for:'],
      checklist: ['Discovery call reminders', 'Post-meeting follow-ups', 'Pending requirement reminders', 'Proposal follow-ups', 'Technical discussion reminders', 'Demo follow-ups', 'Stakeholder meeting reminders', 'Contract follow-ups', 'Negotiation reminders', 'Future project nurturing', 'Case study campaigns', 'Client feedback requests'],
      mock: {
        type: 'timeline',
        props: {
          events: [
            { title: 'Proposal sent', sub: 'Wed 19, 4:12 PM · Email', done: true },
            { title: 'Follow-up scheduled', sub: '2 days after proposal', done: true },
            { title: 'Feedback request', sub: 'Queued · post-decision', done: false },
          ],
        },
      },
    },
  ],
};

export const IT_BENEFITS = {
  heading: 'The Benefits of AI-Powered CRM',
  items: [
    { icon: 'bolt', title: 'Faster Response to Business Inquiries', body: 'Respond to potential clients quickly, even when your sales team is busy, unavailable, or working across different time zones.' },
    { icon: 'fact_check', title: 'More Complete Project Requirements', body: 'Collect the required service, business challenge, project scope, budget, technology, and timeline before assigning the opportunity.' },
    { icon: 'verified', title: 'More Qualified Sales Opportunities', body: 'Identify prospects whose requirements, budget, timeline, and expectations match your services.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: 'Automatically create reminders, send messages, and trigger next actions after meetings, demonstrations, proposals, and technical discussions.' },
    { icon: 'calendar_month', title: 'More Discovery Calls Scheduled', body: 'Make it easier for qualified prospects to select a suitable time to speak with your sales or technical team.' },
    { icon: 'alt_route', title: 'Better Lead Distribution', body: 'Assign inquiries to the right sales representative or technical expert based on service, technology, industry, region, or project size.' },
    { icon: 'contact_page', title: 'Complete Prospect Information', body: 'Keep calls, WhatsApp chats, emails, meeting notes, requirements, files, proposals, and previous interactions connected to one opportunity.' },
    { icon: 'task_alt', title: 'Less Manual Work for Sales Teams', body: 'Reduce repetitive tasks such as collecting basic requirements, updating CRM records, creating summaries, scheduling meetings, and sending reminders.' },
    { icon: 'groups', title: 'Better Sales and Technical Coordination', body: 'Give sales reps, consultants, and technical experts access to the same requirements, communication history, and agreed next steps.' },
    { icon: 'account_tree', title: 'Clearer Sales Pipeline', body: 'See which opportunities are new, qualified, scheduled for discovery, under technical review, waiting for a proposal, under negotiation, or ready to close.' },
    { icon: 'description', title: 'Better Proposal Tracking', body: 'Know when proposals were shared, which opportunities require follow-up, and what is preventing the prospect from moving forward.' },
    { icon: 'insights', title: 'Better Sales Accountability', body: 'Track response times, calls, meetings, proposals, pending tasks, pipeline progress, and conversions for each team member.' },
  ],
};

export const IT_BUSINESS_TYPES = {
  heading: 'Built for Different Types of IT Businesses',
  columns: 3,
  variant: 'horizontal',
  items: [
    { icon: 'code', name: 'Software Development Companies' },
    { icon: 'devices', name: 'Web & Mobile App Agencies' },
    { icon: 'cloud_sync', name: 'SaaS Companies' },
    { icon: 'support_agent', name: 'IT Consulting Firms' },
    { icon: 'dns', name: 'Managed IT Service Providers' },
    { icon: 'cloud', name: 'Cloud Service Providers' },
    { icon: 'security', name: 'Cybersecurity Companies' },
    { icon: 'groups', name: 'IT Staffing & Augmentation' },
    { icon: 'location_city', name: 'Multi-Location IT Companies' },
  ],
};

export const IT_RESULTS = {
  heading: 'The Smarter Way to Manage Client Leads Starts Here',
  stats: [
    { value: '2X', label: 'Faster Inquiry Follow-Ups' },
    { value: 'More', label: 'Qualified Project Opportunities' },
    { value: 'Fewer', label: 'Missed Proposal Follow-Ups' },
  ],
};
