// Finance & Insurance industry page content.

export const FIN_HERO = {
  eyebrow: 'Finance',
  titleLead: 'Automate Your Customer Journey With ',
  titleAccent: 'AI-Powered Finance CRM',
  description:
    'Capture inquiries from your website, Meta Ads, WhatsApp, calls, landing pages, referral partners, and campaigns. Let AI respond quickly to customer inquiries, qualify opportunities, assign advisors, schedule consultations, and automate follow-ups.',
  image: { src: '/industries/finance-hero.png', alt: 'Financial advisors using AiEngage CRM', width: 1448, height: 1086 },
};

export const FIN_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Wondering, Why Customer Inquiries Get Missed?',
  problems: [
    'Inquiries coming from multiple channels',
    'Slow responses to interested customers',
    'Advisors using personal numbers for communication',
    'Missed follow-ups after sharing plans or quotations',
    'No clear view of customer financial requirements',
    'Repetitive questions taking up advisor time',
    'Difficulty identifying high-intent opportunities',
    'Customer documents scattered across conversations',
    'No visibility into advisor performance',
    'Renewal, payment, and application follow-ups getting missed',
  ],
  mock: {
    title: 'All Inquiries',
    searchLabel: 'Search inquiries',
    filterLabel: 'Product',
    columnTemplate: '1.9fr 1.3fr 1fr 1.3fr 1.1fr 1.2fr',
    columns: ['CUSTOMER', 'PRODUCT', 'SOURCE', 'ASSIGNED', 'LAST CONTACT', 'STATUS'],
    footerCount: 'Showing 7 of 214 inquiries',
    rows: [
      {
        name: 'Deepak Agarwal',
        phone: '+91 98330 41562',
        product: 'Term Insurance',
        source: 'Website',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '5h ago' },
        status: 'New',
      },
      {
        name: 'Deepak Agarwal',
        phone: '+91 98330 41562',
        product: 'Term Insurance',
        source: 'Meta Ads',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '7 days ago', overdue: true },
        status: 'New',
      },
      {
        name: 'Deepak Agarwal',
        phone: '+91 98330 41562',
        product: 'Term Insurance',
        source: 'WhatsApp',
        assigned: { type: 'avatar', initials: 'NR', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Nikhil R.' },
        lastContact: { text: '14 days ago', overdue: true },
        status: 'Proposal Sent',
      },
      {
        name: 'Shalini Verma',
        phone: '+91 90112 88407',
        product: 'Home Loan',
        source: 'Calls',
        assigned: { type: 'avatar', initials: 'PM', bg: '#E4D6C2', fg: '#8A6E45', name: 'Pooja M.' },
        lastContact: { text: '3h ago' },
        status: 'Contacted',
      },
      {
        name: 'Arvind Krishnan',
        phone: '+91 98455 21938',
        product: 'Mutual Funds',
        source: 'Referral Partner',
        assigned: { type: 'text', value: 'Unassigned' },
        lastContact: { text: '9 days ago', overdue: true },
        status: 'Docs Pending',
      },
      {
        name: 'Farhan Sheikh',
        phone: '+91 99201 66714',
        product: 'Business Loan',
        source: 'Landing Page',
        assigned: { type: 'avatar', initials: 'RD', bg: '#FFE1D6', fg: '#E64A24', name: 'Rakesh D.' },
        lastContact: { text: '2h ago' },
        status: 'Qualified',
      },
      {
        name: 'Latha Raman',
        phone: '+91 98840 30295',
        product: 'Health Insurance',
        source: 'Branch',
        assigned: { type: 'avatar', initials: 'SK', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Sunita K.' },
        lastContact: { text: 'Yesterday' },
        status: 'Consultation Booked',
      },
    ],
  },
};

export const FIN_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need To Automate Customer Engagement',
  items: [
    {
      icon: 'fact_check',
      title: 'AI Inquiry Qualification',
      href: '/ai#ai-lead-qualification',
      body: 'Automatically collect important details such as the required financial product, income range, financial goal, preferred investment amount, insurance coverage needs, loan requirements, and decision timeline.',
      body2: 'Help your team identify relevant and high-intent opportunities before assigning them to an advisor.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'inbox',
      title: 'Financial Inquiry Management',
      href: '/lead-management',
      body: 'Capture and organize inquiries from websites, Meta Ads, WhatsApp, calls, landing pages, referral partners, campaigns, branches, and other lead sources in one place.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'chat',
      title: 'WhatsApp AI Agent',
      href: '/whatsapp#ai-agent',
      body: 'Respond to common questions, collect customer requirements, share approved product information, request basic documents, schedule consultations, and transfer qualified conversations to the right advisor.',
      chipBg: '#E4F5EC',
      iconColor: '#1FAF64',
    },
    {
      icon: 'call',
      title: 'Built-In Calling',
      href: '/calling',
      body: 'Make and receive business calls directly through the CRM. Record calls where permitted, save notes, track missed calls, and maintain a complete communication history for every customer.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'event_available',
      title: 'Consultation Scheduling',
      body: 'Schedule calls or meetings with insurance advisors, loan consultants, investment professionals, relationship managers, or financial planners based on customer requirements.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'update',
      title: 'Automated Follow-Ups',
      href: '/automation',
      body: 'Trigger reminders for quotations, proposals, pending applications, document submission, payments, policy renewals, consultations, and other important next steps.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'alt_route',
      title: 'Inquiry Distribution',
      href: '/lead-management',
      body: 'Automatically assign inquiries based on product category, location, language, advisor expertise, branch, customer value, availability, or predefined team rules.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'account_tree',
      title: 'Sales and Application Pipeline',
      href: '/sales-pipeline',
      body: 'Track every opportunity from initial inquiry and qualification to consultation, document collection, application, approval, payment, activation, or closure.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'assignment_ind',
      title: 'Customer Requirement Tracking',
      body: 'Store important details such as financial goals, preferred products, investment horizon, budget, coverage requirements, loan amount, risk-related responses, and communication preferences.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'summarize',
      title: 'Conversation Summaries',
      href: '/ai#smart-summaries',
      body: 'Turn long calls, emails, and WhatsApp conversations into clear AI-generated summaries containing customer requirements, discussed products, pending documents, concerns, and recommended next actions.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'description',
      title: 'Document Follow-Ups',
      body: 'Track pending documents and send reminders for identity documents, income details, application forms, policy documents, bank statements, and other required information.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
    {
      icon: 'campaign',
      title: 'Email and WhatsApp Campaigns',
      href: '/marketing-campaigns',
      body: 'Send product updates, educational content, renewal reminders, payment alerts, investment information, insurance campaigns, and customer engagement messages to selected segments.',
      chipBg: '#FFF3EA',
      iconColor: '#FF5F38',
    },
  ],
};

export const FIN_WORKFLOW = {
  eyebrow: 'FINANCE WORKFLOW',
  heading: 'From Inquiry To Customer Onboarding Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Financial Inquiry Is Captured',
      paragraphs: [
        'Every new inquiry is automatically added to AiEngage from Meta Ads, your website, WhatsApp, landing pages, incoming calls, referral partners, campaigns, branch inquiries, and other sources.',
        'The customer profile can include:',
      ],
      checklist: ['Contact details', 'Inquiry source', 'Interested product', 'Inquiry date and time', 'Assigned branch or advisor', 'Previous communication history', 'Campaign information', 'Available customer requirements'],
      mock: {
        type: 'captureList',
        props: {
          title: 'New Inquiries',
          rows: [
            { tag: 'Meta Ads', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Deepak Agarwal', sub: 'Term Insurance', time: '2m' },
            { tag: 'Website', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Shalini Verma', sub: 'Home Loan', time: '5m' },
            { tag: 'WhatsApp', tagBg: '#E5F5EC', tagFg: '#0E7A45', name: 'Arvind Krishnan', sub: 'Mutual Funds', time: '9m' },
            { tag: 'Referral', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Farhan Sheikh', sub: 'Business Loan', time: '13m' },
            { tag: 'Branch', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Latha Raman', sub: 'Health Insurance', time: '18m' },
          ],
          fields: [
            { label: 'SOURCE', value: 'Meta Ads' },
            { label: 'PRODUCT', value: 'Term Insurance' },
            { label: 'INQUIRY TIME', value: 'Today · 10:24 AM' },
            { label: 'BRANCH', value: 'Andheri' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Quickly',
      paragraphs: [
        'AI starts the conversation when your advisors or support team are busy or unavailable.',
        'It welcomes the customer, understands the reason for the inquiry, answers approved general questions, and begins collecting the details required for the next step.',
        'The AI Agent can help with common inquiries related to:',
      ],
      checklist: ['Insurance plans', 'Loans and financing', 'Investment services', 'Mutual fund assistance', 'Wealth management', 'Tax and accounting services', 'Credit and financial products', 'Policy renewals', 'Application status', 'Consultation scheduling'],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'smart_toy',
          agentIconBg: '#FFF3EA',
          agentIconColor: '#FF5F38',
          agentSub: 'Replying to Deepak · WhatsApp',
          headerBadge: { icon: 'bolt', text: 'Replied in 45s', color: '#0E7A45', bg: '#E5F5EC', iconColor: '#1FAF64' },
          messages: [
            { from: 'in', text: "Hi, I'm looking for a term insurance plan." },
            { from: 'out', text: 'Happy to help! Is this a new policy or a renewal?' },
            { from: 'in', text: 'New policy, for my family.' },
            { from: 'out', text: 'Understood. Would you like to speak with an advisor?' },
            { from: 'in', text: 'Yes, sometime this week.' },
            { from: 'out', text: "Great — I'll set up a consultation and confirm the slot." },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Customer Requirements Are Collected',
      fullWidth: true,
      paragraphs: ['AI asks relevant questions based on the financial product or service the customer is interested in.'],
      mock: {
        type: 'requirementCategories',
        props: {
          categories: [
            {
              icon: 'shield',
              title: 'For Insurance Inquiries',
              checklist: ['Type of insurance required', 'Age range', 'Number of people to be covered', 'Preferred coverage amount', 'Existing insurance coverage', 'Policy duration preference', 'Individual or family coverage', 'Renewal or new policy', 'Preferred consultation time'],
            },
            {
              icon: 'account_balance_wallet',
              title: 'For Loan Inquiries',
              checklist: ['Type of loan required', 'Required loan amount', 'Employment or business type', 'Approximate monthly income', 'Preferred repayment period', 'Loan purpose', 'Existing financial obligations', 'Preferred consultation time'],
            },
            {
              icon: 'trending_up',
              title: 'For Investment Inquiries',
              checklist: ['Financial goal', 'Preferred investment amount', 'One-time or recurring investment', 'Expected investment duration', 'General risk-related preferences', 'Existing investment experience', 'Retirement, education, wealth creation, or another goal', 'Preferred advisor consultation time'],
            },
            {
              icon: 'diamond',
              title: 'For Wealth Management Inquiries',
              checklist: ['Primary financial objective', 'Investment horizon', 'Existing portfolio size range', 'Preferred advisory service', 'Retirement or succession requirements', 'Tax-planning support requirement', 'Preferred relationship manager'],
            },
          ],
          dataCards: [
            {
              icon: 'shield',
              label: 'Insurance',
              fields: [
                { label: 'TYPE', value: 'Term' },
                { label: 'COVERAGE SOUGHT', value: '₹1Cr' },
                { label: 'PEOPLE COVERED', value: '2 Adults' },
                { label: 'DURATION', value: '30 years' },
              ],
            },
            {
              icon: 'account_balance_wallet',
              label: 'Loan',
              fields: [
                { label: 'TYPE', value: 'Home Loan' },
                { label: 'AMOUNT REQUIRED', value: '₹25,00,000' },
                { label: 'EMPLOYMENT', value: 'Salaried' },
                { label: 'TENURE PREFERENCE', value: '20 years' },
              ],
            },
            {
              icon: 'trending_up',
              label: 'Investment',
              fields: [
                { label: 'GOAL', value: 'Retirement' },
                { label: 'AMOUNT', value: '₹15,000 / mo' },
                { label: 'MODE', value: 'Recurring' },
                { label: 'HORIZON', value: '10 years' },
              ],
            },
            {
              icon: 'diamond',
              label: 'Wealth',
              fields: [
                { label: 'OBJECTIVE', value: 'Succession' },
                { label: 'PORTFOLIO RANGE', value: '₹2Cr+' },
                { label: 'SERVICE', value: 'Advisory' },
                { label: 'HORIZON', value: 'Long term' },
              ],
            },
          ],
        },
      },
    },
    {
      n: 4,
      title: 'Inquiry Is Assigned to the Right Advisor',
      paragraphs: [
        'Once the customer’s requirements are clear, the inquiry is automatically assigned to the most suitable advisor, consultant, branch, or department.',
        'Assignment can be based on:',
      ],
      checklist: ['Product category', 'Insurance type', 'Loan category', 'Investment service', 'Advisor expertise', 'Customer location', 'Preferred language', 'Branch', 'Advisor availability', 'Inquiry source', 'Customer segment', 'Existing customer relationship'],
      footNotes: [{ text: 'This helps reduce response delays and prevents valuable inquiries from remaining unattended.' }],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Product', value: 'Term Insurance', target: 'Nikhil R.' },
            { label: 'Product', value: 'Home Loan', target: 'Rakesh D.' },
            { label: 'Language', value: 'Tamil', target: 'Sunita K.' },
          ],
          availability: {
            heading: 'ADVISOR AVAILABILITY',
            items: [
              { initials: 'NR', avatarBg: '#FFE1D6', avatarFg: '#E64A24', name: 'Nikhil R.', sub: 'Insurance · Andheri', count: '4 active', status: 'Available', statusFg: '#0E7A45', statusBg: '#E5F5EC' },
              { initials: 'RD', avatarBg: '#F3E1D0', avatarFg: '#B06A25', name: 'Rakesh D.', sub: 'Loans · Bandra', count: '6 active', status: 'Busy', statusFg: '#6E6154', statusBg: '#F4ECE0' },
              { initials: 'SK', avatarBg: '#F0DFC9', avatarFg: '#9A6A2C', name: 'Sunita K.', sub: 'Health · Chennai', count: '3 active', status: 'Available', statusFg: '#0E7A45', statusBg: '#E5F5EC' },
              { initials: 'AM', avatarBg: '#E4D6C2', avatarFg: '#8A6E45', name: 'Anita M.', sub: 'Investments · Pune', count: '5 active', status: 'Busy', statusFg: '#6E6154', statusBg: '#F4ECE0' },
            ],
          },
        },
      },
    },
    {
      n: 5,
      title: 'Relevant Information Is Shared',
      paragraphs: ['The customer receives information related to their inquiry through approved communication templates.', 'Your team can share:'],
      checklist: ['Product information', 'Insurance coverage details', 'Loan eligibility requirements', 'Required document lists', 'Consultation details', 'Approved brochures', 'Application forms', 'Quotations or illustrations', 'Payment information', 'Branch details', 'Educational material', 'Frequently asked questions'],
      footNotes: [{ text: 'These details can be shared through WhatsApp or email while keeping the entire communication connected to the CRM.' }],
      mock: {
        type: 'share',
        props: {
          title: 'Shared with Deepak',
          showItemShareIcon: true,
          items: [
            { icon: 'description', title: 'Product Information', sub: 'Term Insurance overview', value: '' },
            { icon: 'checklist', title: 'Required Document List', sub: '5 documents', value: '' },
            { icon: 'event', title: 'Consultation Details', sub: 'Advisor · Nikhil R.', value: '' },
          ],
          tags: [
            { icon: 'picture_as_pdf', label: 'Brochure' },
            { icon: 'assignment', label: 'Application Form' },
            { icon: 'menu_book', label: 'FAQ' },
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
      title: 'Consultation or Application Is Scheduled',
      paragraphs: ['Once the customer shows interest, they can schedule a call or meeting with the appropriate advisor.', 'AiEngage can:'],
      checklist: ['Show available consultation slots', 'Assign the appropriate advisor', 'Add the meeting to the calendar', 'Send confirmation messages', 'Share meeting details', 'Send reminders before the consultation', 'Track rescheduled or missed meetings', 'Create follow-up tasks', 'Move the inquiry to the next pipeline stage'],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Consultation',
          monthLabel: 'Dec 2025',
          days: [
            { label: 'MON', num: '08' },
            { label: 'TUE', num: '09', active: true },
            { label: 'WED', num: '10' },
            { label: 'THU', num: '11' },
          ],
          times: [
            { label: '11:30 AM', active: true },
            { label: '2:30 PM' },
            { label: '5:00 PM' },
          ],
          footerLabel: 'Advisor',
          footerName: 'Nikhil R.',
          statusLabel: 'Confirmed',
          statusFg: '#0E7A45',
          statusBg: '#E5F5EC',
          statusIconColor: '#1FAF64',
        },
      },
    },
    {
      n: 7,
      title: 'Documents and Applications Are Followed Up',
      paragraphs: ['After the consultation, AiEngage helps your team track the information required to continue the application.', 'Follow-ups can be created for:'],
      checklist: ['Identity documents', 'Income details', 'Bank statements', 'Application forms', 'Insurance proposal forms', 'Medical documents where applicable', 'Investment-related forms', 'Loan documentation', 'Signatures and approvals', 'Payment confirmation'],
      footNotes: [{ text: 'This gives advisors a clear view of what has been received and what is still pending.' }],
      mock: {
        type: 'documentChecklist',
        props: {
          initials: 'DA',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Deepak Agarwal',
          sub: 'Term Insurance · Nikhil R.',
          statusBadge: '4 of 6 received',
          reminderLabel: 'Send reminder',
          items: [
            { label: 'Identity document', sub: 'Requested 08 Dec', state: 'received' },
            { label: 'Income details', sub: 'Requested 08 Dec', state: 'received' },
            { label: 'Bank statement', sub: 'Requested 08 Dec', state: 'received' },
            { label: 'Application form', sub: 'Requested 08 Dec', state: 'received' },
            { label: 'Proposal form', sub: 'Requested 10 Dec', state: 'requested' },
            { label: 'Signatures and approvals', sub: 'Due 11 Dec', state: 'overdue' },
          ],
        },
      },
    },
    {
      n: 8,
      title: 'Follow-Ups Continue Automatically',
      paragraphs: ['AiEngage keeps each opportunity moving with timely messages, reminders, and tasks.', 'Automations can be triggered for:'],
      checklist: ['Consultation reminders', 'Quotation follow-ups', 'Proposal follow-ups', 'Pending document reminders', 'Application status updates', 'Payment reminders', 'Policy issuance updates', 'Loan approval updates', 'Investment consultation follow-ups', 'Renewal reminders', 'Maturity-related communication', 'Customer feedback', 'Long-term customer engagement'],
      footNotes: [{ text: 'This helps advisors maintain consistent communication without manually tracking every next step.' }],
      mock: {
        type: 'timeline',
        props: {
          badge: { icon: 'bolt', text: 'Deepak A.' },
          events: [
            { title: 'Consultation reminder sent', sub: 'Tue 09, 9:00 AM · WhatsApp', done: true },
            { title: 'Pending document reminder', sub: 'Scheduled · Wed 10, 10:00 AM', done: true },
            { title: 'Signature collection call', sub: 'Missed · Thu 11, 4:00 PM', done: true },
            { title: 'Renewal reminder', sub: 'Queued · 05 Jan, 9:00 AM', done: false },
          ],
        },
      },
    },
  ],
};

export const FIN_BENEFITS = {
  heading: 'The Benefits Of AI-Powered Finance CRM',
  items: [
    { icon: 'bolt', title: 'Faster Response to Every Inquiry', body: 'Respond to new financial inquiries quickly, even when advisors are busy or outside normal working hours.' },
    { icon: 'contact_page', title: 'More Complete Customer Information', body: 'Collect product interest, financial requirements, preferred amount, timeline, location, and consultation preference before assigning the inquiry.' },
    { icon: 'verified', title: 'More Qualified Opportunities', body: 'Help advisors understand customer needs and identify inquiries that are ready for a consultation or application.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: 'Automatically create reminders, send approved messages, and trigger the next action based on the customer’s stage.' },
    { icon: 'alt_route', title: 'Better Advisor Assignment', body: 'Assign every inquiry to the right advisor based on product, location, language, expertise, branch, or availability.' },
    { icon: 'forum', title: 'Complete Communication History', body: 'Keep calls, WhatsApp chats, emails, notes, documents, application updates, and previous interactions connected to one customer profile.' },
    { icon: 'task_alt', title: 'Less Manual Work for Advisors', body: 'Reduce repetitive tasks such as collecting basic details, updating records, summarizing conversations, sending reminders, and tracking pending actions.' },
    { icon: 'folder_open', title: 'More Organized Document Collection', body: 'Track required documents and remind customers about incomplete submissions without relying on separate spreadsheets and personal messages.' },
    { icon: 'account_tree', title: 'Clearer Sales and Application Pipeline', body: 'See which inquiries are new, qualified, waiting for consultation, pending documents, under review, approved, completed, or due for follow-up.' },
    { icon: 'autorenew', title: 'Better Renewal Management', body: 'Track upcoming insurance renewals, recurring customer reviews, and other time-sensitive opportunities.' },
    { icon: 'insights', title: 'Better Advisor Accountability', body: 'Track response times, calls, consultations, pending tasks, applications, renewals, and conversions for every advisor.' },
  ],
};

export const FIN_BUSINESS_TYPES = {
  heading: 'Built For Different Types Of Finance And Insurance Businesses',
  columns: 5,
  items: [
    { icon: 'shield', name: 'Insurance Agencies and Brokers' },
    { icon: 'health_and_safety', name: 'Life and Health Insurance Advisors' },
    { icon: 'payments', name: 'Loan and Finance Companies' },
    { icon: 'account_balance', name: 'Banks and Credit Unions' },
    { icon: 'trending_up', name: 'Investment Advisory Firms' },
    { icon: 'pie_chart', name: 'Mutual Fund Distributors' },
    { icon: 'diamond', name: 'Wealth Management Firms' },
    { icon: 'savings', name: 'Financial Planning Firms' },
    { icon: 'receipt_long', name: 'Tax and Accounting Firms' },
    { icon: 'memory', name: 'Fintech Companies' },
  ],
};

export const FIN_RESULTS = {
  headingLead: 'The Smarter Way To Manage Customer Leads ',
  headingAccent: 'Starts Here',
  primaryLabel: 'Book Your Free Demo',
  stats: [
    { value: '2X', label: 'Faster Inquiry Follow-Ups' },
    { value: 'More', label: 'Qualified Financial Inquiries' },
    { value: 'Fewer', label: 'Missed Consultations and Renewals' },
  ],
};
