// Education industry page content.

export const EDU_HERO = {
  eyebrow: 'Education',
  titleLead: 'Manage Student Admissions and Student Engagement ',
  titleAccent: 'In One Place',
  description: 'Capture every admission inquiry, nurture prospective students, and improve enrollment conversions with smarter workflows.',
  image: { src: '/industries/education-hero.png', alt: 'Education institution using AiEngage CRM', width: 1402, height: 1058 },
};

export const EDU_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Admission Season Moves Faster Than Your Enquiry Sheet',
  problems: [
    'Admission enquiries arrive from your website, ads, education portals, walk-ins and referrals — and none of those lists talk to each other.',
    'The same student enquires three times through three channels and gets counted, and contacted, as three separate prospects.',
    'Enquiries sit unassigned through peak admission season while the counselling team is already at capacity.',
    'Campus visits and demo classes are booked and then quietly missed, with nobody tracking the no-show.',
    'Students go silent halfway through the application and nobody notices until the intake has closed.',
  ],
  mock: {
    title: 'Admission Enquiries',
    searchLabel: 'All Programmes',
    filterLabel: 'Source',
    columnTemplate: '1.7fr 1.7fr 1.7fr 1.2fr 1.2fr 1.1fr',
    columns: ['STUDENT', 'PROGRAMME', 'SOURCE', 'COUNSELLOR', 'LAST CONTACT', 'STATUS'],
    footerText: '6 enquiries · 3 unassigned · 3 overdue follow-ups',
    rows: [
      { name: 'Sneha Iyer', product: 'MBA Finance', source: 'Education Portal', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '4 hours ago' }, status: 'New' },
      { name: 'Ananya Sharma', product: 'B.Sc Nursing', source: 'Website Form', assigned: { type: 'text', value: 'Kabir M.', strong: true }, lastContact: { text: '6 days ago', overdue: true }, status: 'Follow-up Due' },
      { name: 'Ananya Sharma', product: 'B.Sc Nursing', source: 'Meta Ads', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '5 days ago', overdue: true }, status: 'New' },
      { name: 'Imran Qureshi', product: 'Diploma Mechanical', source: 'Referral', assigned: { type: 'text', value: 'Unassigned', overdue: true }, lastContact: { text: '1 day ago' }, status: 'New' },
      { name: 'Meera Nair', product: 'BBA', source: 'Phone Enquiry', sourceExtra: 'Personal #', assigned: { type: 'text', value: 'Kabir M.', strong: true }, lastContact: { text: '8 days ago', overdue: true }, status: 'Follow-up Due' },
      { name: 'Aditya Rao', product: 'M.Tech Data Science', source: 'Education Portal', assigned: { type: 'text', value: 'Priya N.', strong: true }, lastContact: { text: '3 hours ago' }, status: 'Contacted' },
    ],
  },
};

export const EDU_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need to Grow Enrollments and Engage Students',
  items: [
    { icon: 'inbox', title: 'Admissions Inquiry Management', body: 'Capture leads from your website, ads, education portals, walk-ins, and referrals into one organized inbox.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/lead-management' },
    { icon: 'donut_small', title: 'Smart Student Segmentation', body: 'Segment students by program, location, qualification, and stage so every counselor speaks to the right student at the right time.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'forum', title: 'Multi-Channel Communication', body: 'Reach students and parents on email, SMS, WhatsApp, and calls with the full conversation history visible to every counselor.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/multichannel-communication' },
    { icon: 'fact_check', title: 'Application & Document Tracking', body: 'Track every application stage, document submission, and fee payment in real time, with auto-reminders for what is still missing.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'event_available', title: 'Counselor & Campus Visit Management', body: 'Schedule counseling sessions, campus visits, and demo classes with automated reminders that cut no-shows.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'monitoring', title: 'Data-Driven Insights & Reporting', body: 'Real-time dashboards on inquiries, drop-off points, counselor performance, and program-wise enrollments so every decision is informed.', chipBg: '#FFF3EA', iconColor: '#FF5F38', href: '/reports-analytics' },
  ],
};

export const EDU_WORKFLOW = {
  eyebrow: 'STUDENT ADMISSION JOURNEY',
  heading: 'Automate the Entire Student Admission Journey',
  steps: [
    {
      n: 1,
      title: 'Student Inquiry Captured',
      paragraphs: ['A prospective student or parent discovers your institution through ads, social media, education portals, or referrals. Every inquiry lands in your pipeline.'],
      mock: {
        type: 'captureList',
        props: {
          title: 'Inbound Enquiries',
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
      title: 'Course & Admission Information Shared',
      paragraphs: ["Brochures, fee structure, admission criteria, and program details sent automatically based on the student's interest and qualification."],
      mock: {
        type: 'autoSend',
        props: {
          icon: 'send',
          title: 'Auto-send · B.Tech Computer Science',
          sub: 'Matched to Rohit Verma',
          items: [
            { icon: 'description', label: 'Programme Brochure', channel: 'Email', status: 'Sent' },
            { icon: 'payments', label: 'Fee Structure', channel: 'WhatsApp', status: 'Sent' },
            { icon: 'fact_check', label: 'Admission Criteria', channel: 'Email', status: 'Sent' },
            { icon: 'apartment', label: 'Campus Overview', channel: 'SMS', status: 'Sent' },
          ],
          trigger: { prefix: 'Trigger · when programme interest =', value: 'B.Tech CS' },
        },
      },
    },
    {
      n: 3,
      title: 'Counseling Session Scheduled',
      paragraphs: ['Confirmed slot for a campus visit, demo class, or counselor call, with reminders across email, SMS, and WhatsApp.'],
      mock: {
        type: 'daySlots',
        props: {
          dateLabel: 'Wed · 19 Nov',
          sub: 'Counsellor · Priya N.',
          slots: [
            { time: '10:00', label: '—' },
            { time: '11:30', label: 'Campus Visit · Ananya S.', active: true, confirmed: true },
            { time: '1:00', label: 'Demo Class · slot open' },
            { time: '3:30', label: '—' },
            { time: '5:00', label: 'Counsellor Call · slot open' },
          ],
          reminders: [
            { icon: 'mail', label: 'Email' },
            { icon: 'sms', label: 'SMS' },
            { icon: 'chat', label: 'WhatsApp' },
          ],
        },
      },
    },
    {
      n: 4,
      title: 'Application Submission & Follow-Up',
      paragraphs: ['Personalized nudges to complete applications, submit documents, and pay registration fees on time.'],
      mock: {
        type: 'documentChecklist',
        props: {
          name: 'Application · Ananya Sharma',
          sub: 'B.Sc Nursing',
          items: [
            { label: 'Application Form', state: 'received', badgeLabel: 'Submitted' },
            { label: 'Photo ID', state: 'received', badgeLabel: 'Submitted' },
            { label: 'Transcript', state: 'overdue', badgeLabel: 'Pending' },
            { label: 'ID Proof of Guardian', state: 'overdue', badgeLabel: 'Pending' },
            { label: 'Registration Fee', state: 'overdue', badgeLabel: 'Unpaid' },
          ],
          nudges: ['Today · SMS', '+2d · WhatsApp', '+5d · Call'],
        },
      },
    },
    {
      n: 5,
      title: 'Admission Review and Enrollment Progression',
      paragraphs: ['Applications are reviewed, shortlists are shared, and serious students move into discussions around final enrollment.'],
      mock: {
        type: 'admissionFunnel',
        props: {
          stats: [
            { value: '42', label: 'UNDER REVIEW' },
            { value: '18', label: 'SHORTLISTED' },
            { value: '9', label: 'IN DISCUSSION' },
          ],
          items: [
            { name: 'Rohit Verma', sub: 'B.Tech Computer Science', status: 'Under Review' },
            { name: 'Aditya Rao', sub: 'M.Tech Data Science', status: 'Shortlisted' },
            { name: 'Meera Nair', sub: 'BBA', status: 'In Discussion' },
            { name: 'Sneha Iyer', sub: 'MBA Finance', status: 'Under Review' },
          ],
        },
      },
    },
    {
      n: 6,
      title: 'Admission Confirmation & Student Onboarding',
      paragraphs: ['Once the student decides to enroll, the system tracks confirmation, sends welcome kits, and shares orientation resources.'],
      mock: {
        type: 'enrollmentProgress',
        props: {
          banner: { icon: 'verified', title: 'Enrollment Confirmed · Ananya Sharma', sub: 'B.Sc Nursing · Batch 2026' },
          items: [
            { label: 'Welcome Kit Sent', done: true, status: 'Done' },
            { label: 'Orientation Schedule Shared', done: true, status: 'Done' },
            { label: 'Student Portal Access', done: true, status: 'Done' },
            { label: 'Document Verification', done: false, status: 'In Progress' },
          ],
          progress: { label: 'Onboarding progress', percent: 75 },
        },
      },
    },
  ],
};

export const EDU_BENEFITS = {
  heading: 'Grow Enrollments and Build Stronger Student Communities',
  items: [
    { icon: 'trending_up', title: 'Increase Student Enrollments', body: 'Convert more inquiries into enrollments with automated, personalized nurture across every channel.' },
    { icon: 'inbox', title: 'Capture Every Admission Inquiry', body: 'Auto-pull leads from every channel so no prospective student is missed during peak admission seasons.' },
    { icon: 'bolt', title: 'Respond to Students Faster', body: 'Centralized inbox plus automated first responses ensure no student waits more than minutes for a reply.' },
    { icon: 'event_repeat', title: 'Reduce Application Drop-Off', body: 'Smart reminders and personalized follow-ups keep students engaged through every stage of application.' },
    { icon: 'sentiment_satisfied', title: 'Improve Student Experience', body: 'Timely, personalized communication builds the kind of experience that turns students into advocates.' },
    { icon: 'insights', title: 'Improve Marketing Performance', body: 'Track which campaigns drive enrollments to invest where it actually grows your institution.' },
  ],
};

export const EDU_INSTITUTION_TYPES = {
  heading: 'Built for Every Kind of Institution',
  columns: 3,
  variant: 'card',
  items: [
    { icon: 'school', name: 'Schools (K–12)', body: 'Manage admission enquiries, parent communication and seat allocation across every grade.' },
    { icon: 'account_balance', name: 'Colleges & Universities', body: 'Handle high-volume applications across multiple programmes, departments and intakes.' },
    { icon: 'menu_book', name: 'Coaching & Test-Prep Institutes', body: 'Track batch enquiries, demo classes and enrolment conversions across every centre.' },
    { icon: 'workspace_premium', name: 'Training & Skill Development Institutes', body: 'Move enquiries from first interest to course enrolment with automated follow-ups.' },
    { icon: 'devices', name: 'Ed-Tech & Online Learning Platforms', body: 'Capture and nurture digital enquiries at scale without adding counselling headcount.' },
    { icon: 'child_care', name: 'Preschools & Play Schools', body: 'Manage parent enquiries, campus visits and admission formalities in one place.' },
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
  heading: 'Ready To Take Your Business To The Next Level?',
  description: 'Capture every admission inquiry, automate follow-ups, keep prospective students engaged, and grow enrollments with our AI-powered CRM.',
  statRows: [
    [
      { value: '+45%', label: 'ENROLLMENTS', title: 'Increase Student Enrollments', desc: 'Convert more inquiries into enrollments with automated, personalized nurture.' },
      { value: '100%', label: 'INQUIRY CAPTURE', title: 'Capture Every Admission Inquiry', desc: 'Auto-pull leads from every channel so no prospective student is missed.' },
      { value: '2.4×', label: 'RESPONSE SPEED', title: 'Respond to Students Faster', desc: 'Centralized inbox and automated first responses cut reply times to minutes.' },
    ],
    [
      { value: '−35%', label: 'DROP-OFF RATE', title: 'Reduce Application Drop-Off', desc: 'Smart reminders keep students engaged through every stage of application.' },
      { value: '4.9★', label: 'STUDENT EXPERIENCE', title: 'Improve Student Experience', desc: 'Timely, personalized communication turns students into advocates.' },
      { value: '3×', label: 'MARKETING ROI', title: 'Improve Marketing Performance', desc: 'Track which campaigns drive enrollments and invest where growth actually happens.' },
    ],
  ],
};
