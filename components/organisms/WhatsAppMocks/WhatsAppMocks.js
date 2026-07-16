import Icon from '../../atoms/Icon/Icon';
import styles from './WhatsAppMocks.module.css';

/** WhatsApp hub hero: a realtor chat mock with the AI Agent replying. */
export function ChatMock() {
  return (
    <div className={styles.card}>
      <div className={styles.waHeader}>
        <span className={styles.waAvatar}>
          <Icon name="storefront" size={22} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.waHeaderName}>AiEngage Realty</div>
          <div className={styles.waHeaderStatus}>online · typically replies instantly</div>
        </div>
        <Icon name="more_vert" size={20} color="var(--color-whatsapp-light)" />
      </div>
      <div className={styles.chatBody}>
        <div className={styles.bubbleIn}>Hi, I saw your ad. Do you have 2BHK flats available?</div>
        <div className={styles.bubbleOut}>
          Hi! Yes, we do 😊 What&apos;s your preferred location and budget?
          <div className={styles.bubbleMeta}>Sent by AI Agent · 10:24</div>
        </div>
        <div className={styles.bubbleIn}>Near Prahlad Nagar, around ₹85L.</div>
        <div className={styles.bubbleOut}>
          Perfect — I have 3 options. Shall I book a site visit this weekend?
          <div className={styles.bubbleMeta}>Sent by AI Agent · 10:24</div>
        </div>
        <div className={styles.bubbleQualified}>
          <Icon name="fact_check" size={13} />
          Lead qualified &amp; assigned to Meera
        </div>
      </div>
    </div>
  );
}

/** Team Inbox hero: split inbox list + active conversation. */
export function TeamInboxMock() {
  return (
    <div className={styles.card} style={{ display: 'flex' }}>
      <div style={{ width: 150, flexShrink: 0, borderRight: '1px solid var(--color-border-light)', padding: '14px 10px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-faint)', padding: '4px 8px 10px' }}>INBOX · 3 open</div>
        <div style={{ background: 'var(--color-primary-tint)', borderRadius: 9, padding: '9px 10px', marginBottom: 6 }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Priya Sharma</div>
          <div style={{ fontSize: 9.5, color: 'var(--color-text-subtle)', marginTop: 2 }}>Meera · now</div>
        </div>
        <div style={{ padding: '9px 10px', marginBottom: 6 }}>
          <div style={{ fontSize: 12, fontWeight: 500 }}>Rahul Mehta</div>
          <div style={{ fontSize: 9.5, color: 'var(--color-text-subtle)', marginTop: 2 }}>Dev · 5m</div>
        </div>
        <div style={{ padding: '9px 10px' }}>
          <div style={{ fontSize: 12, fontWeight: 500 }}>Kavya Nair</div>
          <div style={{ fontSize: 9.5, color: 'var(--color-text-subtle)', marginTop: 2 }}>Unassigned</div>
        </div>
      </div>
      <div style={{ flex: 1, padding: 14, display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1px solid var(--color-border-light)' }}>
          <span className={styles.waAvatar} style={{ width: 30, height: 30, background: 'var(--color-green-tint)' }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-whatsapp)' }}>PS</span>
          </span>
          <span style={{ fontSize: 12.5, fontWeight: 600 }}>Priya Sharma</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-tint)', borderRadius: 999, padding: '3px 8px' }}>
            Meera
          </span>
        </div>
        <div style={{ alignSelf: 'flex-start', maxWidth: '82%', background: '#f4f0ea', borderRadius: '9px 9px 9px 2px', padding: '8px 11px', fontSize: 11.5, lineHeight: 1.5 }}>
          Is the 2BHK still available?
        </div>
        <div style={{ alignSelf: 'flex-end', maxWidth: '82%', background: 'var(--color-whatsapp-bubble-out)', borderRadius: '9px 9px 2px 9px', padding: '8px 11px', fontSize: 11.5, lineHeight: 1.5 }}>
          Yes! Want a site visit this weekend?
        </div>
        <div style={{ background: '#fffbe6', border: '1px solid #f5e9b8', borderRadius: 8, padding: '7px 10px', fontSize: 10, color: '#8a7a32', display: 'flex', gap: 6 }}>
          <Icon name="sticky_note_2" size={13} />
          Note: budget ₹85L, hot lead
        </div>
      </div>
    </div>
  );
}

/** Multiple Numbers hero: list of connected numbers. */
export function NumbersMock() {
  const numbers = [
    { icon: 'sell', name: 'Sales', meta: '+91 98••• ••001 · 4 agents', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { icon: 'support_agent', name: 'Support', meta: '+91 98••• ••002 · 6 agents', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
    { icon: 'store', name: 'Ahmedabad Branch', meta: '+91 98••• ••003 · 3 agents', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  ];
  return (
    <div className={`${styles.card} ${styles.cardPadded}`}>
      <div className={styles.sectionLabel}>YOUR NUMBERS</div>
      {numbers.map((n) => (
        <div key={n.name} className={styles.numRow}>
          <span className={styles.numIcon} style={{ background: n.bg }}>
            <Icon name={n.icon} size={19} color={n.color} />
          </span>
          <div style={{ flex: 1 }}>
            <div className={styles.numName}>{n.name}</div>
            <div className={styles.numMeta}>{n.meta}</div>
          </div>
          <span className={styles.numStatus}>ACTIVE</span>
        </div>
      ))}
      <div className={styles.numAdd}>
        <Icon name="add_circle" size={19} />
        <span className={styles.numAddLabel}>Add another number</span>
      </div>
    </div>
  );
}

/** Broadcast hero: campaign preview + sent/read/replied counts. */
export function BroadcastMock() {
  return (
    <div className={`${styles.card} ${styles.cardPadded}`}>
      <div className={styles.statHeadRow}>
        <span className={styles.statHeadTitle}>Monsoon Offer Broadcast</span>
        <span className={styles.statHeadTag}>SENT</span>
      </div>
      <div className={styles.broadcastPreview}>
        <div className={styles.broadcastBubble}>
          🌧️ Monsoon Special! Flat 15% off on all 2 &amp; 3BHK bookings this month. Reply <b>YES</b> for a callback.
        </div>
      </div>
      <div className={styles.stat3}>
        <div className={styles.statBlock}>
          <div className={styles.statBlockValue}>8,420</div>
          <div className={styles.statBlockLabel}>Sent</div>
        </div>
        <div className={styles.statBlock}>
          <div className={styles.statBlockValue} style={{ color: 'var(--color-blue)' }}>7,915</div>
          <div className={styles.statBlockLabel}>Read</div>
        </div>
        <div className={styles.statBlock}>
          <div className={styles.statBlockValue} style={{ color: 'var(--color-green)' }}>1,204</div>
          <div className={styles.statBlockLabel}>Replied</div>
        </div>
      </div>
    </div>
  );
}

/** Automation hero: a small trigger → action → wait → action workflow card. */
export function AutomationMock() {
  const nodes = [
    { tag: 'TRIGGER', bg: 'var(--color-primary)', label: 'New lead added' },
    { tag: 'ACTION', bg: 'var(--color-green)', label: 'Send WhatsApp welcome' },
    { tag: 'WAIT', bg: 'var(--color-purple)', label: '2 days, no reply' },
    { tag: 'ACTION', bg: 'var(--color-primary)', label: 'Send reminder + notify rep', highlight: true },
  ];
  return (
    <div className={`${styles.card} ${styles.cardPadded}`}>
      <div className={styles.sectionLabel} style={{ marginBottom: 18 }}>Workflow: New lead welcome</div>
      <div className={styles.flowStack}>
        {nodes.map((n, i) => (
          <div key={n.label} style={{ width: '100%' }}>
            {i > 0 && (
              <div className={styles.flowArrow}>
                <Icon name="south" size={16} />
              </div>
            )}
            <div className={`${styles.flowNode} ${n.highlight ? styles.flowNodeHighlight : ''}`}>
              <span className={styles.flowTag} style={{ background: n.bg }}>{n.tag}</span>
              <span className={styles.flowLabel}>{n.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Analytics hero: delivered/read/replied metrics + a small bar chart. */
export function AnalyticsMock() {
  const bars = [42, 58, 50, 72, 64, 88, 76];
  return (
    <div className={`${styles.card} ${styles.cardPadded}`}>
      <div className={styles.statHeadRow}>
        <span className={styles.statHeadTitle}>WhatsApp Performance</span>
        <span className={styles.statHeadTagMuted}>Last 30 days</span>
      </div>
      <div className={styles.metricGrid}>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Delivered</div>
          <div className={styles.metricValue}>98.2%</div>
        </div>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Read</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-blue)' }}>89%</div>
        </div>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Replied</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-green)' }}>34%</div>
        </div>
      </div>
      <div className={styles.miniChart}>
        {bars.map((h, i) => (
          <div
            key={i}
            className={`${styles.miniBar} ${i >= 3 && i < 5 ? styles.miniBarStrong : ''} ${i === 5 || i === 6 ? styles.miniBarPeak : ''}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

/** AI Agent hero: assistant chat mock ending in a booked meeting. */
export function AIAgentChatMock() {
  return (
    <div className={`${styles.card} ${styles.narrow}`}>
      <div className={styles.waHeader}>
        <span className={`${styles.waAvatar} ${styles.waAvatarSm}`}>
          <Icon name="smart_toy" size={19} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.waHeaderName}>AiEngage Assistant</div>
          <div className={styles.waHeaderStatus}>AI Agent · online 24/7</div>
        </div>
      </div>
      <div className={styles.chatBody} style={{ minHeight: 300, padding: '16px 14px' }}>
        <div className={styles.bubbleIn}>Hi, do you offer CRM for a small team?</div>
        <div className={styles.bubbleOut}>Absolutely! How many people are on your team?</div>
        <div className={styles.bubbleIn}>About 8. Mostly WhatsApp &amp; calls.</div>
        <div className={styles.bubbleOut}>Perfect fit. What budget are you planning this month?</div>
        <div className={styles.bubbleIn}>Around ₹15–20k/mo.</div>
        <div className={styles.bubbleQualified}>
          <Icon name="event_available" size={13} />
          Meeting booked · Fri 11:00 with Meera
        </div>
      </div>
    </div>
  );
}

/** AI handoff summary card for the second section of the AI Agent page. */
export function AIHandoffMock() {
  return (
    <div className={`${styles.card} ${styles.cardPadded}`} style={{ width: 420, boxShadow: 'var(--shadow-card)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <Icon name="auto_awesome" size={18} color="var(--color-primary)" />
        <span style={{ fontSize: 13, fontWeight: 600 }}>AI handoff summary</span>
      </div>
      <div className={styles.summaryBlock}>
        <div className={styles.summaryLabel}>LEAD</div>
        <div className={styles.summaryText}>Rohan Gupta · team of 8 · WhatsApp + calling focus</div>
      </div>
      <div className={styles.summaryBlock}>
        <div className={styles.summaryLabel}>BUDGET &amp; TIMELINE</div>
        <div className={styles.summaryText}>₹15–20k/mo · decision this month</div>
      </div>
      <div className={`${styles.summaryBlock} ${styles.summaryBlockAlert}`} style={{ marginBottom: 0 }}>
        <div className={`${styles.summaryLabel} ${styles.summaryLabelAlert}`}>STATUS</div>
        <div className={styles.summaryText}>Qualified · meeting booked Fri 11:00 · assigned to Meera</div>
      </div>
    </div>
  );
}
