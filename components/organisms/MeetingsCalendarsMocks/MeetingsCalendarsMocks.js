import { Fragment } from 'react';
import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './MeetingsCalendarsMocks.module.css';

const WEEK = [
  { day: 'MON', date: 24 },
  { day: 'TUE', date: 25 },
  { day: 'WED', date: 26 },
  { day: 'THU', date: 27 },
  { day: 'FRI', date: 28 },
  { day: 'SAT', date: 29 },
  { day: 'SUN', date: 30 },
];

const UPCOMING = [
  { initials: 'RS', name: 'Rohan Sharma', when: 'Tue · 3:00 PM', platform: 'Zoom' },
  { initials: 'SD', name: 'Sneha Deshmukh', when: 'Wed · 11:00 AM', platform: 'Meet' },
  { initials: 'AM', name: 'Arjun Mehta', when: 'Wed · 3:00 PM', platform: 'Confirmed' },
];

export function UpcomingMeetingsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ width: 480 }}>
      <div className={styles.panelHead}>
        <div className={styles.panelHeadLeft}>
          <Icon name="event" size={16} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Upcoming Meetings</span>
        </div>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>Live</span>
      </div>

      <div className={waStyles.cardPadded}>
        <div className={styles.weekStrip}>
          {WEEK.map((w, i) => (
            <div key={w.day} className={i === 1 ? styles.weekDayActive : styles.weekDay}>
              <span className={styles.weekDayLabel}>{w.day}</span>
              <span className={styles.weekDayNum}>{w.date}</span>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
          {UPCOMING.map((m) => (
            <div className={styles.meetingRow} key={m.name}>
              <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 10, background: 'var(--color-primary-tint)', color: 'var(--color-primary)' }}>
                {m.initials}
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.meetingName}>{m.name}</div>
                <div className={styles.meetingMeta}>{m.when}</div>
              </div>
              {m.platform === 'Confirmed' ? (
                <span className={styles.meetingStatus}>Confirmed</span>
              ) : (
                <span className={styles.meetingPlatform}>
                  <Icon name="videocam" size={12} color="var(--color-text-faint)" />
                  {m.platform}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className={styles.aiNote}>
          <Icon name="summarize" size={14} color="var(--color-primary-dark-accent)" />
          AI summary ready for last call
        </div>
      </div>

      <div className={styles.footRow}>
        <span>3 meetings this week</span>
        <span className={styles.newMeetingBtn}>+ New Meeting</span>
      </div>
    </div>
  );
}

const PLATFORMS = [
  { icon: 'videocam', label: 'Zoom', active: true },
  { icon: 'videocam', label: 'Google Meet', active: false },
];

export function ZoomMeetCreationMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 480 }}>
      <div className={styles.colLabel}>PLATFORM</div>
      <div className={styles.platformRow}>
        {PLATFORMS.map((p) => (
          <span key={p.label} className={p.active ? styles.platformChipActive : styles.platformChip}>
            <Icon name={p.icon} size={14} color={p.active ? '#fff' : 'var(--color-text-faint)'} />
            {p.label}
          </span>
        ))}
      </div>

      <div className={styles.colLabel} style={{ marginTop: 14 }}>AUTO-GENERATED JOIN LINK</div>
      <div className={styles.linkBox}>
        <Icon name="link" size={14} color="var(--color-primary)" />
        meet.aiengage.io/rj-3fk-9pq
      </div>

      <div className={styles.colLabel} style={{ marginTop: 14 }}>LINKED CUSTOMER</div>
      <div className={styles.participantRow}>
        <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 10, background: 'var(--color-primary-tint)', color: 'var(--color-primary)' }}>AM</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.meetingName}>Arjun Mehta</div>
          <div className={styles.meetingMeta}>Deal #4821 · linked customer</div>
        </div>
      </div>
      <div className={styles.participantRow}>
        <span className={styles.addChip}><Icon name="add" size={12} color="var(--color-text-faint)" /></span>
        <div className={styles.meetingMeta}>Meera Kapoor (owner) · Internal participant</div>
      </div>
    </div>
  );
}

const SLOTS = ['10:00 AM', '2:00 PM', '4:30 PM'];
const SHARE_CHANNELS = [
  { icon: 'chat', label: 'WhatsApp' },
  { icon: 'mail', label: 'Email' },
  { icon: 'handshake', label: 'Sales follow-up' },
];

export function BookingSchedulerMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.panelHeadLeft} style={{ marginBottom: 12 }}>
          <Icon name="calendar_month" size={16} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Book a Demo · Sales Team</span>
        </div>
        <div className={styles.weekStrip}>
          {WEEK.slice(0, 5).map((w, i) => (
            <div key={w.day} className={i === 2 ? styles.weekDayActive : styles.weekDay}>
              <span className={styles.weekDayLabel}>{w.day}</span>
              <span className={styles.weekDayNum}>{w.date}</span>
            </div>
          ))}
        </div>
        <div className={styles.colLabel} style={{ marginTop: 12 }}>AVAILABLE SLOTS · WED 26</div>
        <div className={styles.slotRow}>
          {SLOTS.map((s) => (
            <span key={s} className={styles.slotChip}>{s}</span>
          ))}
        </div>
        <div className={styles.confirmBtn}>Confirm Booking</div>
      </div>

      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.colLabel}>YOUR BOOKING LINK</div>
        <div className={styles.linkBox}>
          <Icon name="link" size={14} color="var(--color-primary)" />
          book.aiengage.io/meera-kapoor
        </div>
        <div className={styles.shareRow}>
          {SHARE_CHANNELS.map((c) => (
            <span key={c.label} className={styles.shareChip}>
              <Icon name={c.icon} size={13} color="var(--color-text-faint)" />
              {c.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AutoLinksMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.panelHeadLeft} style={{ marginBottom: 12 }}>
          <Icon name="description" size={16} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Meeting Record · #M-1187</span>
        </div>
        <div className={styles.metaGrid}>
          <div><div className={styles.statLabel}>DATE</div><div className={styles.statValueSm}>26 Aug 2026</div></div>
          <div><div className={styles.statLabel}>TIME</div><div className={styles.statValueSm}>3:00 PM IST</div></div>
          <div><div className={styles.statLabel}>OWNER</div><div className={styles.statValueSm}>Meera Kapoor</div></div>
          <div><div className={styles.statLabel}>CUSTOMER</div><div className={styles.statValueSm}>Rohan Sharma</div></div>
        </div>
        <div className={styles.linkBox} style={{ marginTop: 10 }}>
          <Icon name="content_copy" size={13} color="var(--color-primary)" />
          meet.aiengage.io/rj-3fk-9pq · auto-generated
        </div>
      </div>

      <div className={waStyles.flowStack}>
        {['Meeting Created', 'Link Generated', 'Customer Notified'].map((step, i, arr) => (
          <div key={step} style={{ width: '100%' }}>
            <div className={waStyles.flowNode}>
              <span className={styles.flowDot} />
              <span className={waStyles.flowLabel}>{step}</span>
            </div>
            {i < arr.length - 1 && <div className={waStyles.flowArrow}>↓</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

const GROUP_PARTICIPANTS = [
  { initials: 'RS', name: 'Rohan Sharma', tag: 'Customer' },
  { initials: 'SD', name: 'Sneha Deshmukh', tag: 'Customer' },
  { initials: 'MK', name: 'Meera Kapoor', tag: 'Internal' },
];

export function GroupMeetingsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 480 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
        <span className={styles.panelHeadTitle}>Onboarding Call — Whitefield Accounts</span>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-blue-tint)', color: 'var(--color-blue)' }}>Group</span>
      </div>
      <div className={styles.meetingMeta} style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
        <Icon name="videocam" size={12} color="var(--color-text-faint)" /> Google Meet
      </div>

      <div className={styles.colLabel}>PARTICIPANTS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {GROUP_PARTICIPANTS.map((p) => (
          <div className={styles.participantRow} key={p.name}>
            <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 10, background: 'var(--color-primary-tint)', color: 'var(--color-primary)' }}>{p.initials}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.meetingName}>{p.name}</div>
            </div>
            <span className={p.tag === 'Customer' ? styles.roleChipCustomer : styles.roleChipInternal}>{p.tag}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const TRANSCRIPT = [
  { who: 'Rep', time: '00:10', text: "Let's start with your current CRM setup." },
  { who: 'Rohan', time: '00:26', text: 'We use spreadsheets — need automated follow-ups.' },
  { who: 'Rep', time: '00:48', text: 'Understood. Can we do onboarding by Monday?' },
];

export function AiNotesMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.panelHeadLeft} style={{ marginBottom: 10 }}>
          <Icon name="description" size={15} color="var(--color-text-faint)" />
          <span className={styles.panelHeadTitle}>Meeting Transcript</span>
        </div>
        {TRANSCRIPT.map((t) => (
          <div key={t.time} className={styles.transcriptRow}>
            <span className={styles.transcriptWho}>{t.who}</span>
            <span className={styles.transcriptTime}>{t.time}</span>
            <span className={styles.transcriptText}>{t.text}</span>
          </div>
        ))}
      </div>

      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.panelHeadLeft} style={{ marginBottom: 10 }}>
          <Icon name="summarize" size={15} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>AI Meeting Summary</span>
        </div>
        <div className={waStyles.summaryBlock}>
          <div className={waStyles.summaryLabel}>KEY POINTS</div>
          <div className={waStyles.summaryText}>Current setup: spreadsheets. Wants automated follow-ups.</div>
        </div>
        <div className={waStyles.summaryBlock}>
          <div className={waStyles.summaryLabel}>DECISIONS</div>
          <div className={waStyles.summaryText}>Onboarding scheduled for Monday.</div>
        </div>
        <div className={`${waStyles.summaryBlock} ${waStyles.summaryBlockAlert}`} style={{ marginBottom: 0 }}>
          <div className={`${waStyles.summaryLabel} ${waStyles.summaryLabelAlert}`}>NEXT STEPS</div>
          <div className={waStyles.summaryText}>Send onboarding checklist &amp; automation setup guide.</div>
        </div>
      </div>
    </div>
  );
}

const TEAM_CALENDARS = [
  { icon: 'call', team: 'Sales Team', type: 'Book a Demo', hours: 'Mon–Fri · 9am–6pm', link: 'book.aiengage.io/sales-demo' },
  { icon: 'support_agent', team: 'Customer Success', type: 'Onboarding', hours: 'Mon–Sat · 10am–5pm', link: 'book.aiengage.io/onboarding' },
  { icon: 'headset_mic', team: 'Support Team', type: 'Support Call', hours: 'All days · 24/7', link: 'book.aiengage.io/support' },
];

const HOUR_ROWS = ['9 – 11am', '11 – 2pm', '2 – 6pm'];
const AVAIL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const BLOCKED = new Set(['0-2', '5-0', '5-1', '5-2', '6-0', '6-1', '6-2']);

export function TeamBookingCalendarsMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.colLabel}>TEAM BOOKING CALENDARS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {TEAM_CALENDARS.map((t) => (
            <div className={styles.teamCalRow} key={t.team}>
              <span className={styles.teamCalIcon}><Icon name={t.icon} size={15} color="var(--color-primary)" /></span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.meetingName}>{t.team} · {t.type}</div>
                <div className={styles.meetingMeta}>{t.hours}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.colLabel}>WORKING HOURS &amp; AVAILABILITY</div>
        <div className={styles.availGrid}>
          <div />
          {AVAIL_DAYS.map((d) => <div key={d} className={styles.availDayLabel}>{d}</div>)}
          {HOUR_ROWS.map((row, ri) => (
            <Fragment key={row}>
              <div className={styles.availHourLabel}>{row}</div>
              {AVAIL_DAYS.map((d, di) => (
                <div key={`${ri}-${di}`} className={BLOCKED.has(`${di}-${ri}`) ? styles.availCellBlocked : styles.availCellOpen} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

const CAL_MEETINGS = { 0: ['10:00 Demo'], 2: ['3:00 Demo', '4:30 Sync'], 3: ['11:00 Onboarding'] };

const KANBAN = [
  { col: 'Scheduled', color: 'var(--color-blue)', items: [{ title: 'Whitefield Demo', meta: '10:00 AM · RS' }, { title: 'ERP Discovery', meta: '2:00 PM · RV' }] },
  { col: 'In Progress', color: 'var(--color-yellow-icon)', items: [{ title: 'Clinic Onboarding', meta: '11:00 AM · PN' }] },
  { col: 'Done', color: 'var(--color-whatsapp)', items: [{ title: 'Campus LMS Call', meta: '9:00 AM · MK' }, { title: 'Support Sync', meta: '4:30 PM · JC' }] },
];

export function UnifiedCalendarMock() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
        <div className={styles.panelHeadLeft} style={{ marginBottom: 10 }}>
          <Icon name="calendar_month" size={15} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Week of 24 – 30 Aug</span>
        </div>
        <div className={styles.weekStrip}>
          {WEEK.map((w, i) => (
            <div key={w.day} className={styles.weekDay} style={{ alignItems: 'flex-start', minHeight: 44 }}>
              <span className={styles.weekDayLabel}>{w.day}</span>
              <span className={styles.weekDayNum}>{w.date}</span>
              {CAL_MEETINGS[i]?.map((m) => <span key={m} className={styles.calChip}>{m}</span>)}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.kanbanRow}>
        {KANBAN.map((col) => (
          <div className={styles.kanbanCol} key={col.col}>
            <div className={styles.kanbanColHead} style={{ color: col.color }}>{col.col.toUpperCase()}</div>
            {col.items.map((it) => (
              <div className={styles.kanbanCard} key={it.title}>
                <div className={styles.kanbanCardTitle}>{it.title}</div>
                <div className={styles.meetingMeta}>{it.meta}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImportHistoryMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 480 }}>
      <div className={styles.panelHeadLeft} style={{ marginBottom: 12 }}>
        <Icon name="upload_file" size={16} color="var(--color-primary)" />
        <span className={styles.panelHeadTitle}>Importing Meeting History</span>
      </div>

      <div className={styles.progressBarTrack}>
        <div className={styles.progressBarFill} style={{ width: '68%' }} />
      </div>
      <div className={styles.meetingMeta} style={{ marginTop: 6, marginBottom: 14 }}>In progress · 68% complete · 412 of 600 meetings</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div className={styles.importRow}>
          <Icon name="check_circle" size={15} color="var(--color-whatsapp)" />
          <span className={styles.meetingName} style={{ flex: 1 }}>Past meetings imported</span>
          <span className={styles.meetingMeta}>Just now</span>
        </div>
        <div className={styles.importRow}>
          <Icon name="check_circle" size={15} color="var(--color-whatsapp)" />
          <span className={styles.meetingName} style={{ flex: 1 }}>Historical meeting notes imported</span>
          <span className={styles.meetingMeta}>2m ago</span>
        </div>
        <div className={styles.importRow}>
          <Icon name="sync" size={15} color="var(--color-primary)" />
          <span className={styles.meetingName} style={{ flex: 1 }}>Customer meeting history importing</span>
          <span className={styles.meetingMeta}>In progress</span>
        </div>
      </div>
    </div>
  );
}

const FLOW_STEPS = [
  { icon: 'person', label: 'Customer Books' },
  { icon: 'event', label: 'Meeting Created' },
  { icon: 'videocam', label: 'Zoom / Google Meet Link' },
  { icon: 'notifications', label: 'Customer Notified' },
  { icon: 'groups', label: 'Meeting Happens' },
  { icon: 'summarize', label: 'Transcript + AI Summary' },
  { icon: 'task_alt', label: 'Follow-Up' },
];

export function MeetingFlowMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 420 }}>
      {FLOW_STEPS.map((s, i) => (
        <div key={s.label}>
          <div className={waStyles.journeyStep}>
            <span className={styles.journeyIconTinted}><Icon name={s.icon} size={17} color="var(--color-primary)" /></span>
            <span className={waStyles.journeyLabel}>{s.label}</span>
          </div>
          {i < FLOW_STEPS.length - 1 && <span className={waStyles.journeyLine} />}
        </div>
      ))}
    </div>
  );
}
