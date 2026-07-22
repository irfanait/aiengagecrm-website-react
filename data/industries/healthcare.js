// Healthcare industry page content.

export const HC_HERO = {
  eyebrow: 'HEALTHCARE',
  titleLead: 'Automate Your Patient Journey with ',
  titleAccent: 'AI-Powered Healthcare CRM',
  description:
    'Capture patient inquiries from your website, Meta Ads, WhatsApp, calls, appointment forms, and referral sources. Let AI respond quickly to patient inquiries, collect patient requirements, schedule appointments and automate follow-ups.',
  image: { src: '/industries/healthcare-hero.png', alt: 'AI-powered healthcare CRM', width: 1447, height: 1080 },
};

export const HC_PROBLEM = {
  eyebrow: 'THE CHALLENGE',
  heading: 'Wondering, Why Patient Inquiries Get Missed?',
  problems: [
    'Patient inquiries coming from multiple channels',
    'Slow responses to appointment requests',
    'Staff using personal numbers for communication',
    'Missed appointment confirmations and follow-ups',
    'No clear view of patient communication history',
    'Repetitive questions taking up staff time',
    'Difficulty tracking inquiry and appointment performance',
  ],
  mock: {
    title: 'All Inquiries',
    searchLabel: 'Search inquiries',
    columns: ['PATIENT', 'SOURCE', 'ASSIGNED', 'LAST CONTACT', 'STATUS'],
    footerCount: 'Showing 5 of 96 inquiries',
    rows: [
      {
        name: 'Ananya Rao',
        phone: '+91 98200 41125',
        source: 'Website',
        assigned: { type: 'text', value: 'Unassigned', overdue: true },
        lastContact: { text: '2h ago' },
        status: 'New',
      },
      {
        name: 'Ananya Rao',
        phone: '+91 98200 41125',
        source: 'Meta Ads',
        assigned: { type: 'text', value: 'Unassigned', overdue: true },
        lastContact: { text: '5 days ago', overdue: true },
        status: 'New',
      },
      {
        name: 'Rahul Menon',
        phone: '+91 90224 71833',
        source: 'WhatsApp',
        assigned: { type: 'avatar', initials: 'PS', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Priya S.' },
        lastContact: { text: '1h ago' },
        status: 'Contacted',
      },
      {
        name: 'Kabir Shah',
        phone: '+91 98450 33218',
        source: 'Referral',
        assigned: { type: 'avatar', initials: 'ND', bg: '#E4D6C2', fg: '#8A6E45', name: 'Neha D.' },
        lastContact: { text: '3h ago' },
        status: 'Scheduled',
      },
      {
        name: 'Fatima Khan',
        phone: '+91 99801 55420',
        source: 'Calls',
        assigned: { type: 'avatar', initials: 'PS', bg: '#F0DFC9', fg: '#9A6A2C', name: 'Priya S.' },
        lastContact: { text: 'Yesterday' },
        status: 'Follow-up',
      },
    ],
  },
};

export const HC_SOLUTIONS = {
  eyebrow: 'SOLUTIONS',
  heading: 'Everything You Need to Automate Patient Engagement',
  items: [
    { icon: 'fact_check', title: 'AI Inquiry Qualification', body: 'Automatically collect important details such as the required service, preferred doctor or department, appointment urgency, location, and suitable time. Help your team understand each inquiry before responding.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'inbox', title: 'Patient Inquiry Management', body: 'Capture and organize inquiries from websites, Meta Ads, WhatsApp, calls, appointment forms, landing pages, and referral sources in one place.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'chat', title: 'WhatsApp AI Agent', body: 'Respond to common patient questions, collect appointment details, share basic service information, provide available slots, and transfer conversations to your team when required.', chipBg: '#E4F5EC', iconColor: '#1FAF64' },
    { icon: 'call', title: 'Built-In Calling', body: 'Make and receive business calls directly through the CRM. Record call activity, save notes, track missed calls, and keep communication connected to the patient inquiry.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'event_available', title: 'Appointment Scheduling', body: 'Schedule consultations, diagnostic appointments, follow-ups, and other services. Assign the right doctor, department, branch, or staff member and send automatic confirmations.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'update', title: 'Automated Follow-Ups', body: 'Trigger appointment reminders, follow-up messages, pending inquiry alerts, and next-step tasks based on appointment status and patient activity.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'alt_route', title: 'Inquiry Distribution', body: 'Automatically assign patient inquiries based on department, service, doctor, branch, language, availability, or predefined team rules.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'account_tree', title: 'Patient Journey Pipeline', body: 'Track every inquiry from first contact and appointment request to confirmation, consultation, follow-up, and completion.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'assignment_ind', title: 'Patient Requirement Tracking', body: 'Store important details such as the required service, preferred specialist, location, appointment time, previous inquiries, and communication preferences.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'summarize', title: 'Conversation Summaries', body: 'Turn long calls and WhatsApp conversations into clear AI-generated summaries with patient requirements, questions, appointment details, and recommended next actions.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'campaign', title: 'Email and WhatsApp Campaigns', body: 'Send appointment reminders, health check-up information, service updates, clinic announcements, follow-up messages, and educational campaigns to selected patient segments.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
    { icon: 'monitoring', title: 'Team Performance Reports', body: 'Track response times, calls, pending inquiries, scheduled appointments, follow-ups, and conversion from inquiry to appointment.', chipBg: '#FFF3EA', iconColor: '#FF5F38' },
  ],
};

export const HC_WORKFLOW = {
  eyebrow: 'HEALTHCARE WORKFLOW',
  heading: 'From Patient Inquiry to Confirmed Appointment Without Human Efforts',
  steps: [
    {
      n: 1,
      title: 'Patient Inquiry Is Captured',
      paragraphs: [
        'Every new inquiry is automatically added to AiEngage from Meta Ads, your website, WhatsApp, appointment forms, incoming calls, landing pages, and other lead sources.',
        'The inquiry profile can include contact details, source, inquiry time, requested service, preferred branch, and available conversation history.',
      ],
      mock: {
        type: 'captureList',
        props: {
          title: 'New Inquiries',
          rows: [
            { tag: 'Meta Ads', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Ananya Rao', sub: 'Cardiology · Andheri', time: '2m' },
            { tag: 'Website', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Rahul Menon', sub: 'Orthopedics · Bandra', time: '6m' },
            { tag: 'WhatsApp', tagBg: '#F4ECE0', tagFg: '#6E6154', name: 'Kabir Shah', sub: 'Dermatology · Andheri', time: '9m' },
            { tag: 'Calls', tagBg: '#FFF3EA', tagFg: '#C2410C', name: 'Fatima Khan', sub: 'Physiotherapy · Powai', time: '14m' },
          ],
        },
      },
    },
    {
      n: 2,
      title: 'AI Responds Quickly',
      paragraphs: [
        'AI begins the conversation when your front-desk team is busy or unavailable. It welcomes the patient, understands the reason for the inquiry, answers common non-clinical questions, and begins collecting the details needed to process the request.',
      ],
      mock: {
        type: 'chat',
        props: {
          agentIcon: 'smart_toy',
          agentIconBg: '#FFF3EA',
          agentIconColor: '#FF5F38',
          agentSub: 'Replying to Ananya · WhatsApp',
          messages: [
            { from: 'in', text: "Hi, I'd like to book a cardiology consultation." },
            { from: 'out', text: 'Hello Ananya! Dr. Iyer is available this week. Which day works for you?' },
            { from: 'in', text: 'Saturday morning, if possible.' },
            { from: 'out', text: 'Sure — Sat 11:00 AM is open at Andheri. Shall I confirm it?' },
          ],
        },
      },
    },
    {
      n: 3,
      title: 'Patient Requirements Are Collected',
      paragraphs: ['AI asks relevant questions to understand the patient’s appointment needs, including:'],
      checklist: [
        'Required service or department',
        'Preferred doctor or specialist',
        'Preferred clinic or branch',
        'Suitable appointment date',
        'Preferred time slot',
        'New or returning patient',
        'Consultation or follow-up appointment',
        'Preferred communication language',
      ],
      footNotes: [
        { text: 'Based on the information provided, the inquiry can be categorized as urgent follow-up required, appointment ready, information requested, returning patient, or incomplete.' },
        { text: 'AI should not diagnose medical conditions or replace clinical assessment. Medical decisions remain with qualified healthcare professionals.', italic: true },
      ],
      mock: {
        type: 'scoreCard',
        props: {
          avatarInitials: 'AR',
          avatarBg: '#FFF3EA',
          avatarFg: '#C2410C',
          name: 'Ananya Rao',
          phone: '+91 98200 41125',
          badge: 'Ready',
          badgeFg: '#E64A24',
          badgeBg: '#FFF3EA',
          score: 80,
          fields: [
            { label: 'DEPARTMENT', value: 'Cardiology' },
            { label: 'BRANCH', value: 'Andheri' },
            { label: 'TYPE', value: 'New patient' },
            { label: 'TIME SLOT', value: 'Sat 11 AM' },
          ],
          chips: ['Returning · No', 'Language · Marathi', 'Consultation', 'Urgency · Routine'],
          footer: { label: 'Details captured', value: '8 of 8', icon: 'task_alt' },
        },
      },
    },
    {
      n: 4,
      title: 'Inquiry Is Assigned to the Right Team',
      paragraphs: ['Once the patient’s requirement is clear, the inquiry is automatically assigned to the appropriate staff member, department, doctor, or location. Assignment can be based on:'],
      checklist: ['Required service', 'Medical department', 'Preferred specialist', 'Clinic location', 'Staff availability', 'Patient language', 'Inquiry source', 'New or returning patient'],
      footNotes: [{ text: 'This helps reduce delays and keeps inquiries from remaining unattended.' }],
      mock: {
        type: 'assignment',
        props: {
          rules: [
            { label: 'Department', value: 'Cardiology', target: 'Dr. Iyer' },
            { label: 'Language', value: 'Marathi', target: 'Priya S.' },
            { label: 'Source', value: 'Referral', target: 'Neha D.' },
          ],
          routedNote: { prefix: 'Inquiry routed to ', name: 'Dr. Iyer’s desk', suffix: ' in 4s' },
        },
      },
    },
    {
      n: 5,
      title: 'Relevant Information Is Shared',
      paragraphs: ['The patient receives useful information related to their inquiry. Your team can share:'],
      checklist: [
        'Available appointment slots',
        'Doctor or specialist information',
        'Clinic location and directions',
        'Service information',
        'Consultation timings',
        'Preparation instructions approved by the healthcare provider',
        'Documents required for the appointment',
        'Payment or insurance information',
        'Contact details for further support',
      ],
      footNotes: [{ text: 'These details can be shared through WhatsApp or email while keeping the communication connected to the CRM.' }],
      mock: {
        type: 'share',
        props: {
          title: 'Shared with Ananya',
          items: [
            { icon: 'event_available', title: 'Available Slots', sub: 'Sat 11:00 AM · Andheri', value: '3 open' },
            { icon: 'person', title: 'Dr. Iyer · Cardiology', sub: 'Consults 10 AM – 2 PM', value: 'MBBS, MD' },
            { icon: 'directions', title: 'Clinic Location', sub: 'Andheri West · Map shared', value: '2.4 km' },
          ],
          channels: [
            { icon: 'chat', label: 'WhatsApp', active: false },
            { icon: 'mail', label: 'Email', active: false },
          ],
        },
      },
    },
    {
      n: 6,
      title: 'Appointment Is Scheduled',
      paragraphs: ['Once the patient selects a suitable date and time, the appointment can be booked and assigned to the appropriate doctor, department, branch, or staff member. AiEngage can:'],
      checklist: [
        'Show available appointment slots',
        'Assign the appropriate team member',
        'Add the appointment to the calendar',
        'Send booking confirmation',
        'Share clinic location',
        'Send pre-appointment reminders',
        'Track rescheduled appointments',
        'Track missed or cancelled appointments',
      ],
      mock: {
        type: 'schedule',
        props: {
          title: 'Schedule Appointment',
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
          footerLabel: 'Doctor',
          footerName: 'Dr. Iyer',
          statusLabel: 'Confirmed',
          statusFg: '#C2410C',
          statusBg: '#FFF3EA',
          statusIconColor: '#FF5F38',
        },
      },
    },
    {
      n: 7,
      title: 'Follow-Ups Continue Automatically',
      paragraphs: ['After the appointment is scheduled or completed, AiEngage helps your team maintain timely communication. Automations can be triggered for:'],
      checklist: [
        'Appointment confirmation',
        'Upcoming appointment reminders',
        'Rescheduling requests',
        'Missed appointments',
        'Post-appointment follow-ups',
        'Follow-up consultation reminders',
        'Pending document reminders',
        'Diagnostic report collection reminders',
        'Feedback requests',
        'Long-term patient engagement',
      ],
      footNotes: [{ text: 'This helps staff manage routine communication without manually tracking every next step.' }],
      mock: {
        type: 'timeline',
        props: {
          badge: { icon: 'bolt', text: '4 active' },
          events: [
            { title: 'Confirmation sent', sub: 'Sat 22, 9:02 AM · WhatsApp', done: true },
            { title: 'Reminder scheduled', sub: '1h before appointment', done: true },
            { title: 'Pre-visit instructions sent', sub: 'Sat 22, 8:00 AM · WhatsApp', done: true },
            { title: 'Feedback request', sub: 'Queued · Sat 22, 6:00 PM', done: false },
          ],
        },
      },
    },
  ],
};

export const HC_BENEFITS = {
  heading: 'The Benefits of AI-Powered Healthcare CRM',
  items: [
    { icon: 'bolt', title: 'Faster Response to Patient Inquiries', body: 'Respond to appointment and service inquiries quickly, even when the front-desk team is busy or outside normal working hours.' },
    { icon: 'verified', title: 'More Complete Patient Information', body: 'Collect the required service, preferred specialist, location, appointment type, and suitable time before the inquiry reaches your team.' },
    { icon: 'event_repeat', title: 'Fewer Missed Follow-Ups', body: 'Automatically send reminders, create tasks, and trigger the next action based on inquiry and appointment status.' },
    { icon: 'calendar_month', title: 'More Appointments Scheduled', body: 'Make it easier for patients to view available slots and select a suitable appointment time.' },
    { icon: 'alt_route', title: 'Better Inquiry Distribution', body: 'Assign inquiries to the right doctor, department, branch, or staff member based on predefined rules.' },
    { icon: 'contact_page', title: 'Complete Communication History', body: 'Keep calls, WhatsApp chats, emails, notes, appointment details, and previous interactions connected to one patient inquiry profile.' },
    { icon: 'task_alt', title: 'Less Manual Work for Staff', body: 'Reduce repetitive tasks such as answering common questions, updating inquiry details, writing conversation summaries, confirming appointments, and sending reminders.' },
    { icon: 'account_tree', title: 'Clearer Patient Journey', body: 'See which inquiries are new, waiting for information, ready to schedule, confirmed, completed, cancelled, or due for follow-up.' },
    { icon: 'insights', title: 'Better Team Accountability', body: 'Track response time, call activity, pending inquiries, appointment handling, and follow-up completion for every team member.' },
  ],
};

export const HC_BUSINESS_TYPES = {
  heading: 'Built for Different Types of Healthcare Providers',
  columns: 5,
  items: [
    { icon: 'stethoscope', name: 'Clinics and Medical Practices' },
    { icon: 'local_hospital', name: 'Hospitals and Healthcare Groups' },
    { icon: 'biotech', name: 'Diagnostic Centres' },
    { icon: 'exercise', name: 'Physiotherapy and Rehabilitation Centres' },
    { icon: 'location_city', name: 'Multi-Location Healthcare Businesses' },
  ],
};

export const HC_RESULTS = {
  heading: 'The Smarter Way to Manage Patient Leads Starts Here',
  stats: [
    { value: '2X', label: 'Faster Inquiry Follow-Ups' },
    { value: 'More', label: 'Complete Patient Information' },
    { value: 'Fewer', label: 'Missed Appointments' },
    { value: 'Less', label: 'Manual Administrative Work' },
  ],
};
