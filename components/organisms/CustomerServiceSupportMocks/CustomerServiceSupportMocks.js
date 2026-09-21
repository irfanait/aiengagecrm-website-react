import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './CustomerServiceSupportMocks.module.css';

const CONVERSATIONS = [
  { name: 'Rohan Sharma', subject: 'Refund status enquiry', channel: 'chat', channelColor: 'var(--color-whatsapp)', status: 'Open', statusColor: 'var(--color-primary-hover)', statusBg: 'var(--color-primary-tint)', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { name: 'Priya Nair', subject: 'Invoice copy needed', channel: 'mail', channelColor: 'var(--color-blue)', status: 'Resolved', statusColor: 'var(--color-whatsapp)', statusBg: 'var(--color-green-tint)', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  { name: 'Arjun Mehta', subject: 'Booking date change', channel: 'chat', channelColor: 'var(--color-whatsapp)', status: 'Open', statusColor: 'var(--color-primary-hover)', statusBg: 'var(--color-primary-tint)', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  { name: 'Sneha Deshmukh', subject: "Escalated · payment failed", channel: 'mail', channelColor: 'var(--color-blue)', status: 'Escalated', statusColor: '#c0503a', statusBg: '#faf0d6', bg: '#faf0d6', color: 'var(--color-yellow-icon)' },
  { name: 'James Carter', subject: 'Product setup question', channel: 'chat', channelColor: 'var(--color-whatsapp)', status: 'Open', statusColor: 'var(--color-primary-hover)', statusBg: 'var(--color-primary-tint)', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
];

export function SharedInboxMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ width: 460 }}>
      <div className={waStyles.inboxHead}>
        <span className={waStyles.panelTitle}>All Conversations</span>
        <span className={waStyles.pillGreen}>6 unread</span>
      </div>
      <div className={waStyles.inboxList}>
        {CONVERSATIONS.map((c) => (
          <div className={waStyles.inboxRow} key={c.name}>
            <span className={waStyles.avatarCircle} style={{ background: c.bg, color: c.color }}>
              {c.name.split(' ').map((p) => p[0]).join('')}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={waStyles.rowName}>{c.name}</div>
              <div className={waStyles.rowPreview}>{c.subject}</div>
            </div>
            <Icon name={c.channel} size={14} color={c.channelColor} />
            <span className={waStyles.tagPill} style={{ color: c.statusColor, background: c.statusBg }}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const AI_MESSAGES = [
  { from: 'user', text: 'Do you offer a free trial before I subscribe?' },
  { from: 'ai', text: 'Yes! You get a 14-day free trial, no card required.' },
  { from: 'user', text: 'Great. Can I cancel anytime?' },
  { from: 'ai', text: 'Yes, cancel anytime from account settings.' },
  { from: 'user', text: "I also have a billing issue with last month's invoice." },
];

export function AISupportAgentMock() {
  return (
    <div className={styles.aiShell}>
      <div className={styles.aiHead}>
        <div className={styles.aiHeadLeft}>
          <Icon name="support_agent" size={16} color="var(--color-primary-dark-accent)" />
          <span className={styles.aiHeadTitle}>AI Support Agent</span>
        </div>
        <span className={styles.aiHeadTag}>Replies instantly</span>
      </div>
      <div className={styles.aiBody}>
        {AI_MESSAGES.map((m, i) => (
          <div key={i} className={m.from === 'ai' ? styles.aiBubbleAI : styles.aiBubbleUser}>
            {m.text}
          </div>
        ))}
      </div>
      <div className={styles.aiHandoff}>
        <Icon name="alt_route" size={15} color="var(--color-primary-dark-accent)" />
        <span>Handed over to support agent</span>
      </div>
    </div>
  );
}

const TICKETS = [
  { id: '#1042', issue: 'App login failure', owner: 'Sneha D.', priority: 'High', priorityColor: '#c0503a', priorityBg: '#faf0d6', status: 'Open', statusColor: 'var(--color-primary-hover)', statusBg: 'var(--color-primary-tint)' },
  { id: '#1041', issue: 'Refund not processed', owner: 'Meera K.', priority: 'Med', priorityColor: 'var(--color-yellow-icon)', priorityBg: 'var(--color-yellow-tint)', status: 'In Progress', statusColor: 'var(--color-blue)', statusBg: 'var(--color-blue-tint)' },
  { id: '#1039', issue: 'Delivery delayed', owner: 'Rahul V.', priority: 'High', priorityColor: '#c0503a', priorityBg: '#faf0d6', status: 'Open', statusColor: 'var(--color-primary-hover)', statusBg: 'var(--color-primary-tint)' },
  { id: '#1035', issue: 'Billing discrepancy', owner: 'James C.', priority: 'Low', priorityColor: 'var(--color-text-faint)', priorityBg: 'var(--color-bg)', status: 'Resolved', statusColor: 'var(--color-whatsapp)', statusBg: 'var(--color-green-tint)' },
];

export function TicketManagementMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ width: 500 }}>
      <div className={styles.panelHead}>
        <span className={styles.panelHeadTitle}>Support Tickets</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-primary-hover)', background: 'var(--color-primary-tint)' }}>
          4 open
        </span>
      </div>
      <table className={styles.ticketTable}>
        <thead className={styles.ticketThead}>
          <tr>
            <th className={styles.ticketTh}>ID</th>
            <th className={styles.ticketTh}>ISSUE</th>
            <th className={styles.ticketTh}>OWNER</th>
            <th className={styles.ticketTh}>PRIORITY</th>
            <th className={styles.ticketTh}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {TICKETS.map((t) => (
            <tr className={styles.ticketTr} key={t.id}>
              <td className={styles.ticketTdStrong}>{t.id}</td>
              <td className={styles.ticketTd}>{t.issue}</td>
              <td className={styles.ticketTd}>{t.owner}</td>
              <td className={styles.ticketTd}>
                <span className={waStyles.priorityTag} style={{ color: t.priorityColor, background: t.priorityBg }}>
                  {t.priority}
                </span>
              </td>
              <td className={styles.ticketTd}>
                <span className={styles.statusTag} style={{ color: t.statusColor, background: t.statusBg }}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className={waStyles.footRowSimple}>Ownership, status, and notes stay linked to the customer record</div> */}
    </div>
  );
}

const CHANNELS = [
  { icon: 'chat', label: 'WhatsApp', color: 'var(--color-whatsapp)', bg: 'var(--color-green-tint)' },
  { icon: 'mail', label: 'Email', color: 'var(--color-blue)', bg: 'var(--color-blue-tint)' },
  { icon: 'call', label: 'Calling', color: 'var(--color-primary)', bg: 'var(--color-primary-tint)' },
  { icon: 'smart_toy', label: 'Chatbot', color: 'var(--color-purple)', bg: 'var(--color-purple-tint)' },
  { icon: 'event', label: 'Meetings', color: 'var(--color-yellow-icon)', bg: 'var(--color-yellow-tint)' },
];

const WORKLOAD = [
  { name: 'Sneha D.', value: 142, max: 142 },
  { name: 'Meera K.', value: 98, max: 142 },
  { name: 'Rahul V.', value: 76, max: 142 },
];

export function OmnichannelSupportMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div className={styles.channelRow}>
        {CHANNELS.map((c) => (
          <span key={c.label} className={styles.channelChip} style={{ background: c.bg }}>
            <Icon name={c.icon} size={16} color={c.color} />
            {c.label}
          </span>
        ))}
      </div>

      <div className={styles.colLabel}>SUPPORT DASHBOARD · THIS WEEK</div>
      <div className={styles.statGrid4}>
        <div className={styles.statBox}>
          <div className={waStyles.metricLabel}>INQUIRIES</div>
          <div className={styles.statValue}>412</div>
        </div>
        <div className={styles.statBox}>
          <div className={waStyles.metricLabel}>AVG RESPONSE</div>
          <div className={styles.statValue}>4m</div>
        </div>
        <div className={styles.statBox}>
          <div className={waStyles.metricLabel}>PENDING</div>
          <div className={styles.statValue} style={{ color: 'var(--color-yellow-icon)' }}>18</div>
        </div>
        <div className={styles.statBox}>
          <div className={waStyles.metricLabel}>RESOLVED</div>
          <div className={styles.statValue} style={{ color: 'var(--color-whatsapp)' }}>376</div>
        </div>
      </div>

      <div className={styles.colLabel} style={{ marginTop: 14 }}>AGENT WORKLOAD</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {WORKLOAD.map((w) => (
          <div key={w.name} className={styles.workloadRow}>
            <span className={styles.workloadName}>{w.name}</span>
            <span className={styles.workloadBarTrack}>
              <span className={styles.workloadBarFill} style={{ width: `${(w.value / w.max) * 100}%` }} />
            </span>
            <span className={styles.workloadValue}>{w.value}</span>
          </div>
        ))}
      </div>

      <div className={waStyles.noteBox} style={{ margin: '12px 0 0' }}>
        <Icon name="warning" size={16} color="var(--color-yellow-icon)" />
        <div>
          <div className={waStyles.noteLabel}>Heads up</div>
          <div className={waStyles.noteText}>Response times up 12% on WhatsApp — 6 conversations waiting 1h+.</div>
        </div>
      </div>
    </div>
  );
}
