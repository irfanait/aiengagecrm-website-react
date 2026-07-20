import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './MultichannelMocks.module.css';

/** Hero: calls/emails/WhatsApp converging into one CRM record. */
export function ChannelsConvergeMock() {
  const rows = [
    { icon: 'mail', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Email · Quotation sent', meta: 'Opened 2h ago' },
    { icon: 'call', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Call · 8 min, outbound', meta: 'Yesterday' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'WhatsApp · 3 new replies', meta: '10:24 AM' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`}>
      <div className={styles.sidePanelLabel} style={{ marginBottom: 16 }}>ONE CUSTOMER · EVERY CHANNEL</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {rows.map((r) => (
          <div key={r.title} className={waStyles.numRow} style={{ marginBottom: 0 }}>
            <span className={waStyles.numIcon} style={{ background: r.bg, borderRadius: 9 }}>
              <Icon name={r.icon} size={19} color={r.color} />
            </span>
            <div style={{ flex: 1 }}>
              <div className={waStyles.numName}>{r.title}</div>
              <div className={waStyles.numMeta}>{r.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px 0 8px' }}>
        <Icon name="south" size={24} color="var(--color-text-faint)" />
      </div>
      <div className={waStyles.crmSyncCard}>
        <span className={waStyles.crmSyncIcon}>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>AS</span>
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Anita Sharma</div>
          <div style={{ fontSize: 10.5, color: 'var(--color-dark-text-muted)' }}>Deal · ₹1.4L · Negotiation</div>
        </div>
        <span className={waStyles.liveTag}>1 record</span>
      </div>
    </div>
  );
}

/** [1] Mass Email: campaign composer with audience chips + a subject/body preview. */
export function MassEmailMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.panelHead}>
        <span className={waStyles.panelTitle}>New Email Campaign</span>
        <span className={waStyles.pillGreen} style={{ color: 'var(--color-blue)', background: 'var(--color-blue-tint)' }}>8,240 recipients</span>
      </div>
      <div className={styles.audienceLabel}>Audience</div>
      <div className={waStyles.filterRow} style={{ marginBottom: 16 }}>
        <span className={waStyles.filterActive}>Segment: Warm leads</span>
        <span className={waStyles.filterChip}>Tag: Ahmedabad</span>
        <span className={waStyles.filterChip}>Stage: Quotation</span>
      </div>
      <div className={styles.emailPreview}>
        <div className={styles.emailPreviewHead}>
          <div className={styles.emailSubjectLabel}>Subject</div>
          <div className={styles.emailSubjectText}>Your exclusive festive offer inside 🎉</div>
        </div>
        <div className={styles.emailPreviewBody}>
          <div className={styles.skeletonLine} style={{ width: '90%' }} />
          <div className={styles.skeletonLine} style={{ width: '100%' }} />
          <div className={styles.skeletonLine} style={{ width: '70%', marginBottom: 14 }} />
          <span className={styles.emailCta}>Claim your offer</span>
        </div>
      </div>
    </div>
  );
}

/** [2] Built-In Calling: click-to-call contact card + recent call history. */
export function CallingMock() {
  const calls = [
    { icon: 'call_made', color: 'var(--color-green)', label: 'Outbound · 8 min', when: 'Today' },
    { icon: 'call_received', color: 'var(--color-blue)', label: 'Inbound · 3 min', when: 'Mon' },
    { icon: 'call_missed', color: 'var(--color-red)', label: 'Missed call', when: 'Fri' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={waStyles.syncCard} style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 14 }}>
        <span className={waStyles.avatarCircle} style={{ width: 46, height: 46, fontSize: 15, background: 'var(--color-purple-tint)', color: 'var(--color-purple)' }}>VS</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Vikram Singh</div>
          <div style={{ fontSize: 11.5, color: 'var(--color-text-faint)' }}>Skyline Estates · Deal ₹2.1L</div>
        </div>
        <span className={waStyles.crmSyncIcon} style={{ background: 'var(--color-green)', boxShadow: '0 8px 18px -6px rgba(31,175,100,0.6)' }}>
          <Icon name="call" size={22} color="#fff" />
        </span>
      </div>
      <div className={styles.audienceLabel}>Call history</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {calls.map((c) => (
          <div key={c.label} className={waStyles.syncCard} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px' }}>
            <Icon name={c.icon} size={18} color={c.color} />
            <div style={{ flex: 1, fontSize: 12, fontWeight: 500 }}>{c.label}</div>
            <span style={{ fontSize: 10.5, color: 'var(--color-text-faint)' }}>{c.when}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [3] WhatsApp Integration: a mini WhatsApp chat linked to a CRM record. */
export function WhatsAppIntegrationMock() {
  return (
    <div className={styles.split}>
      <div className={`${waStyles.card} ${waStyles.cardFluid}`}>
        <div className={waStyles.waHeader} style={{ padding: '12px 14px' }}>
          <span className={waStyles.waAvatar} style={{ width: 32, height: 32 }}>
            <Icon name="person" size={18} color="var(--color-whatsapp)" />
          </span>
          <div className={waStyles.waHeaderName}>Kavya Nair</div>
        </div>
        <div className={waStyles.chatBody} style={{ minHeight: 180, padding: '14px 12px' }}>
          <div className={waStyles.bubbleIn} style={{ maxWidth: '85%' }}>Is the 3BHK still available?</div>
          <div className={waStyles.bubbleOut} style={{ maxWidth: '85%' }}>Yes! Want me to schedule a visit this weekend?</div>
          <div className={waStyles.bubbleIn} style={{ maxWidth: '85%' }}>Sunday works 👍</div>
        </div>
      </div>
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelLabel}>LINKED RECORD</div>
        <span className={waStyles.avatarCircle} style={{ width: 40, height: 40, fontSize: 13, background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', marginBottom: 8 }}>KN</span>
        <div className={styles.sidePanelName}>Kavya Nair</div>
        <div className={styles.sidePanelMeta}>Lead · Website</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 10.5, color: 'var(--color-text-muted)' }}>
          <span className={styles.sidePanelRow}>
            <Icon name="flag" size={14} color="var(--color-primary)" />Stage: Visit
          </span>
          <span className={styles.sidePanelRow}>
            <Icon name="person_pin" size={14} color="var(--color-blue)" />Owner: Meera
          </span>
        </div>
      </div>
    </div>
  );
}

/** [4] Emails: a one-to-one email thread linked to a CRM record. */
export function EmailsMock() {
  return (
    <div className={styles.split}>
      <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className={styles.previewBox} style={{ padding: '11px 13px' }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, marginBottom: 3 }}>Ananya Rao</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)', lineHeight: 1.5 }}>Could you share the revised quotation with the updated pricing?</div>
        </div>
        <div className={styles.previewBox} style={{ padding: '11px 13px', alignSelf: 'flex-end', maxWidth: '92%', background: 'var(--color-blue-tint)', borderColor: '#d3e2fb' }}>
          <div style={{ fontSize: 11.5, fontWeight: 600, marginBottom: 3, color: 'var(--color-blue)' }}>You</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>Sure Ananya, attaching the revised quote now. Let me know if it works!</div>
        </div>
      </div>
      <div className={styles.sidePanel} style={{ width: 160, background: '#fff' }}>
        <div className={styles.sidePanelLabel}>CONTEXT</div>
        <span className={waStyles.avatarCircle} style={{ width: 38, height: 38, fontSize: 13, background: '#ffe1d6', color: 'var(--color-primary-hover)', marginBottom: 8 }}>AR</span>
        <div className={styles.sidePanelName}>Ananya Rao</div>
        <div className={styles.sidePanelMeta} style={{ marginBottom: 12 }}>Deal · ₹95K</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7, fontSize: 10.5, color: 'var(--color-text-muted)' }}>
          <span className={styles.sidePanelRow}>
            <Icon name="mail" size={14} color="var(--color-blue)" />7 emails
          </span>
          <span className={styles.sidePanelRow}>
            <Icon name="chat" size={14} color="var(--color-green)" />4 WhatsApp
          </span>
          <span className={styles.sidePanelRow}>
            <Icon name="event" size={14} color="var(--color-primary)" />Follow-up Thu
          </span>
        </div>
      </div>
    </div>
  );
}

/** [5] Templates: a template library grid + a merge-tag preview. */
export function TemplatesMock() {
  const templates = [
    { icon: 'outgoing_mail', label: 'Sales outreach', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', active: true },
    { icon: 'update', label: 'Follow-up', color: 'var(--color-blue)' },
    { icon: 'payments', label: 'Payment reminder', color: 'var(--color-green)' },
    { icon: 'event_available', label: 'Appointment', color: 'var(--color-purple)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Template Library</div>
      <div className={styles.templateGrid}>
        {templates.map((t) => (
          <div key={t.label} className={styles.templateChip} style={{ background: t.active ? t.bg : 'var(--color-bg)', border: `1px solid ${t.active ? '#f6dfcc' : 'var(--color-border)'}` }}>
            <Icon name={t.icon} size={17} color={t.color} />
            {t.label}
          </div>
        ))}
      </div>
      <div className={styles.previewBox}>
        <div className={styles.previewLabel}>Preview</div>
        <div className={styles.previewText}>
          Hi <span className={styles.mergeTag}>[First Name]</span>, thanks for your interest in <span className={styles.mergeTag}>[Product]</span>. Shall we schedule a quick call this week?
        </div>
      </div>
    </div>
  );
}

/** [6] Automated Follow-Ups: a trigger → wait → message → task workflow. */
export function FollowUpsMock() {
  const steps = [
    { tag: 'TRIGGER', icon: 'bolt', title: 'New lead enquiry', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
    { tag: 'WAIT', icon: 'schedule', title: '1 day, if no reply', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
    { tag: 'MESSAGE', icon: 'chat', title: 'Send WhatsApp reminder', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { tag: 'TASK', icon: 'task_alt', title: 'Create call task for rep', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16 }}>Follow-Up Workflow</div>
      <div>
        {steps.map((s, i) => (
          <div key={s.tag}>
            {i > 0 && <span className={waStyles.journeyLine} />}
            <div className={styles.journeyStepTagged}>
              <span className={waStyles.journeyIcon} style={{ background: s.bg }}>
                <Icon name={s.icon} size={19} color={s.color} />
              </span>
              <div>
                <div className={styles.journeyTag}>{s.tag}</div>
                <div className={styles.journeyTitle}>{s.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [7] Communication Timeline: every touchpoint for one customer, chronologically. */
export function TimelineMock() {
  const events = [
    { icon: 'list_alt', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', title: 'Website form submitted', when: 'Mon · 09:12 AM' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'WhatsApp · AI qualified lead', when: 'Mon · 09:13 AM' },
    { icon: 'call', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Call · 8 min, discussed pricing', when: 'Tue · 11:40 AM' },
    { icon: 'mail', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Email · Quotation sent', when: 'Tue · 02:15 PM' },
    { icon: 'sticky_note_2', bg: 'var(--color-yellow-tint)', color: 'var(--color-yellow-icon)', title: 'Note · Ready to close this week', when: 'Wed · 10:02 AM', last: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 16 }}>Customer Timeline · Anita Sharma</div>
      <div>
        {events.map((e) => (
          <div key={e.title} className={styles.timelineRow}>
            <div className={styles.timelineIconCol}>
              <span className={styles.timelineIcon} style={{ background: e.bg }}>
                <Icon name={e.icon} size={17} color={e.color} />
              </span>
              {!e.last && <span className={styles.timelineLine} />}
            </div>
            <div className={styles.timelineBody}>
              <div className={styles.timelineTitle}>{e.title}</div>
              <div className={styles.timelineMeta}>{e.when}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [8] Push Notifications: a lock-screen style stack of CRM alerts. */
export function PushNotificationsMock() {
  const notifs = [
    { icon: 'person_add', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', title: 'New lead enquiry', meta: 'Anita Sharma · Website form' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'WhatsApp reply', meta: 'Kavya: "Sunday works 👍"' },
    { icon: 'task', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Task due in 1 hour', meta: 'Call Vikram about renewal' },
    { icon: 'trending_up', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Deal moved to Negotiation', meta: 'Skyline Estates · ₹2.1L' },
  ];
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneScreen}>
        <div className={styles.phoneClock}>
          <div className={styles.phoneTime}>9:41</div>
          <div className={styles.phoneDate}>Wednesday, 15 July</div>
        </div>
        <div>
          {notifs.map((n) => (
            <div key={n.title} className={styles.notifCard}>
              <span className={styles.notifIcon} style={{ background: n.bg }}>
                <Icon name={n.icon} size={16} color={n.color} />
              </span>
              <div>
                <div className={styles.notifTitle}>{n.title}</div>
                <div className={styles.notifMeta}>{n.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** [9] AI Sentiment Analysis: conversations tagged by detected customer sentiment. */
export function SentimentMock() {
  const rows = [
    { initials: 'RS', name: 'Rahul Shah', quote: '"Great, let’s move ahead with the deal!"', tag: 'Positive', icon: 'sentiment_satisfied', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { initials: 'PN', name: 'Priya Nair', quote: '"I need this resolved today please."', tag: 'Urgent', icon: 'priority_high', bg: '#fff3d1', color: 'var(--color-yellow-icon)' },
    { initials: 'MJ', name: 'Manoj Joshi', quote: '"This is the third time I’m following up."', tag: 'Unhappy', icon: 'sentiment_dissatisfied', bg: 'var(--color-red-tint)', color: 'var(--color-red)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 14 }}>Conversations · Sentiment</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {rows.map((r) => (
          <div key={r.name} className={styles.sentimentRow}>
            <span className={waStyles.avatarCircle} style={{ background: r.bg, color: r.color }}>{r.initials}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={waStyles.rowName}>{r.name}</div>
              <div className={styles.sentimentPreview}>{r.quote}</div>
            </div>
            <span className={styles.sentimentTag} style={{ background: r.bg, color: r.color }}>
              <Icon name={r.icon} size={13} color={r.color} />
              {r.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
