// Education industry page content.

export const EDU_HERO = {
  titleLead: 'Automate Your Student Admissions with ',
  titleAccent: 'AI-Powered Education CRM',
  description:
    'Capture admission inquiries from your website, Meta Ads, WhatsApp, education portals, calls, and landing pages. Let AI respond instantly to student queries, schedule counseling sessions, and automate admission follow-ups.',
  image: { src: '/industries/education-hero.png', alt: 'Education institution using AiEngage CRM', width: 1402, height: 1058 },
};

export const EDU_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: "Wondering Why Admission Inquiries Don't Convert?",
  problems: [
    'Student inquiries coming from multiple channels',
    'Slow responses to admission questions',
    'Counselors using personal numbers',
    'Missed follow-ups after counseling sessions',
    'No clear view of student interests and eligibility',
    'Duplicate or incomplete inquiries',
    'Difficulty tracking counselor performance',
  ],
  mock: {
    title: 'Admission Inquiries',
    searchLabel: 'Search inquiries',
    filterLabel: 'Program',
    columnTemplate: '1.7fr 1.7fr 1.7fr 1.2fr 1.2fr 1.1fr',
    columns: ['STUDENT', 'PROGRAM', 'SOURCE', 'COUNSELOR', 'LAST CONTACT', 'STATUS'],
    footerText: '7 inquiries · 3 unassigned · 3 overdue follow-ups',
    rows: [
      { name: 'Sneha Iyer', product: 'MBA Finance', source: 'Education Portal', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '4 hours ago' }, status: 'New' },
      { name: 'Ananya Sharma', product: 'B.Sc Nursing', source: 'Website Form', assigned: { type: 'text', value: 'Kabir M.', strong: true }, lastContact: { text: '6 days ago', overdue: true }, status: 'Follow-up Due' },
      { name: 'Ananya Sharma', product: 'B.Sc Nursing', source: 'Meta Ads', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '5 days ago', overdue: true }, status: 'New' },
      { name: 'Ananya Sharma', product: 'B.Sc Nursing', source: 'Education Portal', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '2 hours ago' }, status: 'New' },
      { name: 'Imran Qureshi', product: 'Diploma Mechanical', source: 'Referral', assigned: { type: 'text', value: 'Priya N.', strong: true }, lastContact: { text: '1 day ago' }, status: 'Contacted' },
      { name: 'Meera Nair', product: 'BBA', source: 'Phone Inquiry', sourceExtra: 'Personal #', assigned: { type: 'text', value: 'Kabir M.', strong: true }, lastContact: { text: '8 days ago', overdue: true }, status: 'Follow-up Due' },
      { name: 'Aditya Rao', product: 'M.Tech Data Science', source: 'Education Portal', assigned: { type: 'text', value: 'Priya N.', strong: true }, lastContact: { text: '3 hours ago' }, status: 'Contacted' },
    ],
  },
};

export const EDU_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need to Manage Student Admissions',
  items: [
    { icon: 'fact_check', title: 'AI Lead Qualification', body: 'Automatically collect the course of interest, academic background, preferred intake, budget considerations, and admission timeline so counselors know each student before they respond.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/ai#ai-lead-qualification' },
    { icon: 'inbox', title: 'Admission Inquiry Management', body: 'Capture and organize inquiries from your website, Meta Ads, WhatsApp, education portals, landing pages, referral programs, and campus events in one place.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/lead-management' },
    { icon: 'chat', title: 'WhatsApp AI Assistant', body: 'Answer common admission questions, share brochures and fee details, collect student requirements, and hand the conversation to a counselor when required.', chipBg: '#E4F5EC', iconColor: '#25D366', href: '/whatsapp#ai-agent' },
    { icon: 'call', title: 'Built-In Calling', body: 'Make and receive admission calls directly in the CRM. Record call activity, save notes, track missed calls, and keep every conversation attached to the student profile.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/calling' },
    { icon: 'event_available', title: 'Counseling Session Scheduling', body: 'Schedule counseling calls, campus visits, and demo classes. Assign the right counselor and send automatic confirmations and reminders.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'update', title: 'Automated Follow-Ups', body: "Trigger application reminders, document requests, deadline alerts, and next-step tasks based on each student's admission stage.", chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/automation' },
    { icon: 'alt_route', title: 'Lead Distribution', body: 'Automatically assign student inquiries based on course, department, campus, language, counselor availability, or your own team rules.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/lead-management' },
    { icon: 'account_tree', title: 'Admission Pipeline', body: 'Track every student from first inquiry and counseling session to application, document submission, fee payment, and enrollment.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/sales-pipeline' },
    { icon: 'assignment_ind', title: 'Student Profile Management', body: 'Store the course of interest, qualification, parent details, preferred campus, documents submitted, and complete communication history in one profile.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/customer-management' },
    { icon: 'summarize', title: 'Conversation Summaries', body: 'Turn long calls and WhatsApp threads into clear AI-generated summaries with student requirements, questions asked, and recommended next actions.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/ai#smart-summaries' },
    { icon: 'campaign', title: 'Email & WhatsApp Campaigns', body: 'Send admission announcements, deadline reminders, scholarship information, event invitations, and program updates to selected student segments.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/marketing-campaigns' },
    { icon: 'monitoring', title: 'Counselor Performance Reports', body: 'Track response times, calls, pending inquiries, counseling sessions scheduled, follow-ups, and conversion from inquiry to enrollment.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/reports-analytics' },
  ],
};

export const EDU_WORKFLOW = {
  heading: 'From Student Inquiry to Enrollment Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Student Inquiry Is Captured',
      paragraphs: [
        'Every new admission inquiry is automatically added to AiEngage from Meta Ads, your website, education portals, WhatsApp, referral programs, campus events, and other channels.',
        'The inquiry profile can include the source, contact details, inquiry time, and the program the student is interested in.',
      ],
      mock: {
        type: 'captureList',
        props: {
          title: 'Inbound Inquiries',
          rows: [
            { tag: 'Meta Ads', tagBg: '#F4ECE0', tagFg: '#6E6154', name: 'Rohit Verma', sub: 'B.Tech Computer Science', time: '2m' },
            { tag: 'Ed. Portal', tagBg: '#F4ECE0', tagFg: '#6E6154', name: 'Sneha Iyer', sub: 'MBA Finance', time: '7m' },
            { tag: 'Website', tagBg: '#F4ECE0', tagFg: '#6E6154', name: 'Ananya Sharma', sub: 'B.Sc Nursing', time: '12m' },
            { tag: 'Referral', tagBg: '#F4ECE0', tagFg: '#6E6154', name: 'Imran Qureshi', sub: 'Diploma Mechanical', time: '18m' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Quickly',
      paragraphs: [
        'AI begins the conversation when your counseling team is busy or unavailable. It welcomes the student, answers common admission questions, shares relevant information, and collects the details needed to move the inquiry forward.',
      ],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'chat',
          agentIconBg: '#E4F5EC',
          agentIconColor: '#1FAF64',
          agentSub: 'Replying to Sneha · WhatsApp',
          headerBadge: { icon: 'bolt', text: 'Replied in 35s', color: '#0E7A45', bg: '#E5F5EC', iconColor: '#1FAF64' },
          messages: [
            { from: 'in', text: 'What is the eligibility for MBA Finance?' },
            { from: 'out', text: "A bachelor's degree with 50% aggregate, plus CAT/MAT/CMAT score. Sharing the brochure." },
            { from: 'in', text: 'Any scholarship for merit students?' },
            { from: 'out', text: 'Yes — merit scholarships for 85%+ scorers. Applications close 12 Aug.' },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Student Requirements Are Collected',
      paragraphs: ["AI asks relevant questions to understand the student's admission requirements, including:"],
      checklist: ['Student name & contact', 'Parent details', 'Course or program of interest', 'Grade / Qualification', 'Preferred campus', 'Lead source', 'Assigned admission counselor', 'Previous conversations'],
      mock: {
        type: 'scoreCard',
        props: {
          avatarInitials: 'RV',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Rohit Verma',
          phone: '+91 98204 55127 · Parent: Anil Verma',
          badge: 'Ready',
          badgeFg: '#E64A24',
          badgeBg: '#FFF3EA',
          score: 88,
          fields: [
            { label: 'PROGRAM', value: 'B.Tech CS' },
            { label: 'GRADE', value: 'Class 12 · PCM' },
            { label: 'CAMPUS', value: 'Pune Main' },
            { label: 'COUNSELOR', value: 'Priya Nambiar' },
          ],
        },
      },
    },
    {
      n: 4,
      title: 'Inquiry Is Assigned to the Right Counselor',
      paragraphs: ["Once the student's requirements are clear, the inquiry is automatically assigned to the most suitable counselor or department. Assignment can be based on:"],
      checklist: ['Course or program', 'Department', 'Preferred campus', 'Student language', 'Counselor availability', 'Lead source', 'New or returning inquiry'],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Program', value: 'B.Sc Nursing', target: 'Kabir Menon' },
            { label: 'Program', value: 'MBA Finance', target: 'Priya Nambiar' },
            { label: 'Source', value: 'Referral', target: 'Priya N.' },
          ],
          routedNote: { prefix: 'Inquiry routed to ', name: 'Kabir Menon', suffix: ' in 4s' },
        },
      },
    },
    {
      n: 5,
      title: 'Relevant Information Is Shared',
      paragraphs: ['The student receives information relevant to their inquiry through approved channels. Your team can share:'],
      checklist: ['WhatsApp welcome message', 'Course brochure', 'Fee structure', 'Admission process', 'Scholarship information', 'Email follow-ups', 'Application reminders', 'Internal notifications'],
      mock: {
        type: 'share',
        props: {
          title: 'Shared with Rohit',
          items: [
            { icon: 'description', title: 'Programme Brochure', sub: 'B.Tech Computer Science', value: 'Sent' },
            { icon: 'payments', title: 'Fee Structure', sub: 'Full breakdown', value: 'Sent' },
            { icon: 'fact_check', title: 'Admission Criteria', sub: 'Eligibility & documents', value: 'Sent' },
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
      title: 'Counseling Session Is Scheduled',
      paragraphs: ['Once the student shows interest, they can select a suitable time for a counseling call, campus visit, or demo class. AiEngage can:'],
      checklist: ['Show available counseling slots', 'Assign the appropriate counselor', 'Add the session to the calendar', 'Send confirmation messages', 'Share campus location details', 'Send reminders before the session', 'Track rescheduled or missed sessions'],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Counseling Session',
          monthLabel: 'Nov 2025',
          days: [
            { label: 'TUE', num: '18' },
            { label: 'WED', num: '19', active: true },
            { label: 'THU', num: '20' },
            { label: 'FRI', num: '21' },
          ],
          times: [{ label: '11:30 AM', active: true }, { label: '2:00 PM' }, { label: '4:30 PM' }],
          footerLabel: 'Counselor',
          footerName: 'Priya Nambiar',
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
      paragraphs: ['AiEngage keeps every admission inquiry moving with timely messages, reminders, and tasks. Automations can be triggered for:'],
      checklist: ['Counseling session reminders', 'Pending document requests', 'Application deadline alerts', 'Fee payment reminders', 'Scholarship deadline alerts', 'Post-session follow-ups', 'Long-term prospect nurturing'],
      mock: {
        type: 'timeline',
        props: {
          badge: { icon: 'bolt', text: 'Rohit V.' },
          events: [
            { title: 'Confirmation sent', sub: 'Wed 19, 9:02 AM · WhatsApp', done: true },
            { title: 'Reminder scheduled', sub: '1h before session', done: true },
            { title: 'Document request sent', sub: 'Wed 19, 11:45 AM · Email', done: true },
            { title: 'Feedback request', sub: 'Queued · Wed 19, 6:00 PM', done: false },
          ],
        },
      },
    },
  ],
};

export const EDU_BENEFITS = {
  heading: 'The Benefits of AI-Powered Education CRM',
  items: [
    { icon: 'bolt', title: 'Faster Responses to Every Admission Inquiry', body: 'Respond to admission questions within minutes, even during peak intake season or outside office hours.' },
    { icon: 'verified', title: 'More Qualified Admission Leads', body: 'Collect the course interest, academic background, intake preference, and timeline before the inquiry reaches a counselor.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: "Automatically send reminders, create tasks, and trigger the next action based on each student's admission stage." },
    { icon: 'calendar_month', title: 'More Counseling Sessions Scheduled', body: 'Make it easy for students and parents to view available slots and book a counseling call or campus visit.' },
    { icon: 'alt_route', title: 'Better Inquiry Distribution', body: 'Assign inquiries to the right counselor, course team, or campus based on predefined rules.' },
    { icon: 'contact_page', title: 'Complete Student Information', body: 'Keep calls, WhatsApp chats, emails, notes, documents, and previous interactions connected to one student profile.' },
    { icon: 'task_alt', title: 'Less Manual Work for Counselors', body: 'Reduce repetitive work such as answering common questions, updating inquiry details, writing summaries, and sending reminders.' },
    { icon: 'account_tree', title: 'Clearer Admission Pipeline', body: 'See which students are new, waiting for information, ready for counseling, applied, documented, or enrolled.' },
    { icon: 'insights', title: 'Better Counselor Accountability', body: 'Track response time, call activity, pending inquiries, sessions held, and follow-up completion for every counselor.' },
  ],
};

export const EDU_INSTITUTION_TYPES = {
  heading: 'Built for Every Type of Educational Institution',
  columns: 3,
  items: [
    { icon: 'school', name: 'Schools' },
    { icon: 'account_balance', name: 'Colleges & Universities' },
    { icon: 'menu_book', name: 'Coaching Institutes' },
    { icon: 'devices', name: 'EdTech Companies' },
    { icon: 'workspace_premium', name: 'Skill Development & Training Centers' },
  ],
};

export const EDU_FAQS = {
  heading: 'Frequently Asked Questions',
  items: [
    { q: 'What is an education CRM?', a: 'An education CRM is software that helps schools, colleges, universities, and training institutes manage admissions, student inquiries, communication, and enrollment processes.' },
    { q: 'How does CRM help educational institutions?', a: 'Education CRM software automates admission inquiries, tracks student interactions, improves communication, and simplifies enrollment management.' },
    { q: 'Can education CRM automate admission inquiries?', a: 'Yes, education CRM systems can automatically capture inquiries, assign leads, send follow-ups, and nurture prospective students throughout the admission journey.' },
    { q: 'Why do schools and colleges need CRM software?', a: 'CRM software helps educational institutions improve student engagement, increase admissions, manage communication, and streamline administrative workflows.' },
    { q: 'How can educational institutions automate admission inquiries?', a: 'Educational institutions can automate admission inquiries using an education CRM that captures leads, sends WhatsApp responses, automates follow-ups, and tracks student applications.' },
    { q: 'Can WhatsApp automation improve student engagement?', a: 'Yes, WhatsApp automation helps schools and colleges communicate with students instantly, send admission updates, reminders, and important notifications automatically.' },
    { q: 'What is the role of CRM in admission management?', a: 'An admissions CRM helps institutions manage inquiries, automate follow-ups, nurture prospects, and improve enrollment conversions through organized communication.' },
  ],
};

export const EDU_RESULTS = {
  heading: 'The Smarter Way to Manage Student Admissions Starts Here',
  description: 'Capture every admission inquiry, automate follow-ups, keep prospective students engaged, and grow enrollments with our AI-powered CRM.',
  statRows: [
    [
      { value: '2X', label: 'Faster Admission Responses' },
      { value: 'More', label: 'Qualified Student Inquiries' },
      { value: 'Fewer', label: 'Missed Counseling Sessions' },
    ],
  ],
};
