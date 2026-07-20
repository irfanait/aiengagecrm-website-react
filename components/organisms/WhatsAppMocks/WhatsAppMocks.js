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

/** [1] Team Inbox: shared inbox with per-chat assignment tags + an internal note. */
export function TeamInboxMock() {
  const rows = [
    { initials: 'RS', name: 'Rahul Shah', preview: 'Need pricing for the enterprise plan…', tag: 'Meera · Sales', tagBg: 'var(--color-blue-tint)', tagColor: 'var(--color-blue)', avatarBg: '#ffe1d6', avatarColor: 'var(--color-primary-hover)', hot: true },
    { initials: 'PN', name: 'Priya Nair', preview: 'Is my order shipped yet?', tag: 'Arjun · Support', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)', avatarBg: 'var(--color-green-tint)', avatarColor: 'var(--color-whatsapp)' },
    { initials: 'VK', name: 'Vikram Kumar', preview: 'Partnership proposal attached', tag: 'Unassigned', tagBg: 'var(--color-border-light)', tagColor: 'var(--color-text-faint)', avatarBg: 'var(--color-purple-tint)', avatarColor: 'var(--color-purple)' },
  ];
  return (
    <div className={`${styles.card} ${styles.cardFluid}`}>
      <div className={styles.inboxHead}>
        <span className={styles.panelTitle}>Team Inbox</span>
        <span className={styles.pillGreen}>3 numbers · 8 agents</span>
      </div>
      <div className={styles.inboxList}>
        {rows.map((r) => (
          <div key={r.name} className={`${styles.inboxRow} ${r.hot ? styles.inboxRowHot : ''}`}>
            <span className={styles.avatarCircle} style={{ background: r.avatarBg, color: r.avatarColor }}>
              {r.initials}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.rowName}>{r.name}</div>
              <div className={styles.rowPreview}>{r.preview}</div>
            </div>
            <span className={styles.tagPill} style={{ background: r.tagBg, color: r.tagColor }}>
              {r.tag}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.noteBox}>
        <Icon name="sticky_note_2" size={17} color="var(--color-yellow-icon)" />
        <div>
          <div className={styles.noteLabel}>Internal note · Meera</div>
          <div className={styles.noteText}>Hot lead — replied in 42s. Sending pricing doc now.</div>
        </div>
      </div>
    </div>
  );
}

/** [2] Multiple Numbers: connected WhatsApp numbers, one per team. */
export function NumbersMock() {
  const numbers = [
    { icon: 'sell', name: '+91 98250 11001', meta: 'Sales team · 4 agents', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { icon: 'support_agent', name: '+91 98250 11002', meta: 'Support team · 3 agents', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
    { icon: 'campaign', name: '+91 98250 11003', meta: 'Marketing · 2 agents', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
    { icon: 'event', name: '+91 98250 11004', meta: 'Bookings · 2 agents', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
  ];
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded} ${styles.cardTinted}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>WhatsApp Numbers</span>
        <Icon name="add_circle" size={20} color="var(--color-text-faint)" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {numbers.map((n) => (
          <div key={n.name} className={styles.numRow} style={{ marginBottom: 0, background: '#fff' }}>
            <span className={styles.numIcon} style={{ background: n.bg, borderRadius: 10 }}>
              <Icon name={n.icon} size={19} color={n.color} />
            </span>
            <div style={{ flex: 1 }}>
              <div className={styles.numName}>{n.name}</div>
              <div className={styles.numMeta}>{n.meta}</div>
            </div>
            <span className={styles.dotOnline} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** [3] AI Agent: assistant chat mock ending in a qualified lead. */
export function AIAgentChatMock() {
  return (
    <div className={`${styles.card} ${styles.narrow}`}>
      <div className={styles.waHeader}>
        <span className={`${styles.waAvatar} ${styles.waAvatarSm}`}>
          <Icon name="smart_toy" size={19} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.waHeaderName}>AiEngage Assistant</div>
          <div className={styles.waHeaderStatus}>AI Agent · online</div>
        </div>
      </div>
      <div className={styles.chatBody} style={{ minHeight: 250 }}>
        <div className={styles.bubbleIn}>Do you offer AC repair on weekends?</div>
        <div className={styles.bubbleOut}>
          Yes! We service 7 days a week. May I know your city and preferred time slot?
          <div className={styles.bubbleMeta}>Sent by AI Agent</div>
        </div>
        <div className={styles.bubbleIn}>Ahmedabad, tomorrow morning.</div>
        <div className={styles.bubbleOut}>
          Booked for 9–11 AM. A technician will confirm shortly. 🙌
          <div className={styles.bubbleMeta}>Sent by AI Agent</div>
        </div>
        <div className={styles.bubbleQualified}>
          <Icon name="fact_check" size={13} />
          Lead qualified
        </div>
      </div>
    </div>
  );
}

/** [4] Chat Management: filterable chat list with tags and priority. */
export function ChatManagementMock() {
  const filters = ['All', 'Unassigned', 'Priority', 'Sales'];
  const rows = [
    { initials: 'AS', name: 'Anita Sharma', tags: [{ text: 'Hot lead', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }, { text: 'Demo', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' }], priority: 'High', priorityBg: '#ffe9e1', priorityColor: 'var(--color-primary-hover)', avatarBg: '#ffe1d6', avatarColor: 'var(--color-primary-hover)' },
    { initials: 'MJ', name: 'Manoj Joshi', tags: [{ text: 'Follow-up', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' }], priority: 'Med', priorityBg: '#fff3d1', priorityColor: 'var(--color-yellow-icon)', avatarBg: 'var(--color-blue-tint)', avatarColor: 'var(--color-blue)' },
    { initials: 'RD', name: 'Ravi Desai', tags: [{ text: 'Support', bg: 'var(--color-border-light)', color: 'var(--color-text-faint)' }], priority: 'Low', priorityBg: 'var(--color-border-light)', priorityColor: 'var(--color-text-faint)', avatarBg: 'var(--color-green-tint)', avatarColor: 'var(--color-whatsapp)' },
  ];
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded} ${styles.cardTinted}`}>
      <div className={styles.filterRow}>
        {filters.map((f, i) => (
          <span key={f} className={i === 0 ? styles.filterActive : styles.filterChip}>
            {f}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {rows.map((r) => (
          <div key={r.name} className={styles.numRow} style={{ marginBottom: 0, background: '#fff', padding: '12px 14px' }}>
            <span className={styles.avatarCircle} style={{ background: r.avatarBg, color: r.avatarColor, width: 32, height: 32, fontSize: 11 }}>
              {r.initials}
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.rowName}>{r.name}</div>
              <div style={{ display: 'flex', gap: 5, marginTop: 4 }}>
                {r.tags.map((t) => (
                  <span key={t.text} className={styles.miniTag} style={{ background: t.bg, color: t.color }}>
                    {t.text}
                  </span>
                ))}
              </div>
            </div>
            <span className={styles.priorityTag} style={{ background: r.priorityBg, color: r.priorityColor }}>
              {r.priority}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [5] Broadcast: campaign preview bubble + audience category chips. */
export function BroadcastMock() {
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>New Broadcast</span>
        <span className={styles.pillGreen}>12,480 recipients</span>
      </div>
      <div className={styles.broadcastPreview}>
        <div className={styles.broadcastBubble}>
          🎉 Diwali Sale is live! Flat 30% off on all plans till Nov 5. Reply <b>OFFER</b> to claim yours.
          <div className={styles.broadcastActions}>
            <span className={styles.broadcastAction}>Claim offer</span>
            <span className={styles.broadcastAction}>View plans</span>
          </div>
        </div>
      </div>
      <div className={styles.chipRow}>
        <span className={styles.chip} style={{ background: 'var(--color-primary-tint)', color: 'var(--color-primary-hover)' }}>
          Product launches
        </span>
        <span className={styles.chip} style={{ background: 'var(--color-purple-tint)', color: 'var(--color-purple)' }}>
          Festival promotions
        </span>
        <span className={styles.chip} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>
          Discount offers
        </span>
      </div>
    </div>
  );
}

/** [6] One-to-One Messaging: chat thread beside a CRM contact summary. */
export function OneToOneMock() {
  return (
    <div style={{ display: 'flex', gap: 14, width: '100%' }}>
      <div className={styles.threadCard}>
        <div className={styles.bubbleIn} style={{ maxWidth: '88%', fontSize: 11.5 }}>Can you send the quotation again?</div>
        <div className={styles.bubbleOut} style={{ maxWidth: '88%', fontSize: 11.5 }}>Sure! Sharing the updated PDF now 📄</div>
        <div className={styles.bubbleOut} style={{ maxWidth: '88%', display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon name="picture_as_pdf" size={18} color="var(--color-primary-hover)" />
          Quotation_v2.pdf
        </div>
      </div>
      <div className={styles.crmCard}>
        <div className={styles.crmHead}>
          <span className={styles.avatarCircle} style={{ background: '#ffe1d6', color: 'var(--color-primary-hover)', width: 44, height: 44, fontSize: 15, marginBottom: 8 }}>
            SP
          </span>
          <div style={{ fontSize: 13, fontWeight: 700 }}>Sanjay Patel</div>
          <div style={{ fontSize: 10.5, color: 'var(--color-text-faint)' }}>Deal · ₹1.2L</div>
        </div>
        <div className={styles.crmMetaList}>
          <span className={styles.crmMetaRow}>
            <Icon name="call" size={15} color="var(--color-blue)" />3 calls
          </span>
          <span className={styles.crmMetaRow}>
            <Icon name="mail" size={15} color="var(--color-purple)" />5 emails
          </span>
          <span className={styles.crmMetaRow}>
            <Icon name="event" size={15} color="var(--color-primary)" />Follow-up Fri
          </span>
          <span className={styles.crmMetaRow}>
            <Icon name="flag" size={15} color="var(--color-green)" />Stage: Negotiation
          </span>
        </div>
      </div>
    </div>
  );
}

/** [7] Automation: a vertical automated-journey timeline. */
export function AutomationMock() {
  const steps = [
    { icon: 'contact_mail', label: 'Lead submits enquiry', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
    { icon: 'chat', label: 'Instant WhatsApp response', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { icon: 'shopping_bag', label: 'Purchase', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
    { icon: 'favorite', label: 'Thank-you message', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
    { icon: 'reviews', label: 'Feedback request', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)' },
    { icon: 'redeem', label: 'Recommendation / offer', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  ];
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded}`}>
      <div className={styles.sectionLabel} style={{ marginBottom: 16 }}>Automated Journey</div>
      <div>
        {steps.map((s, i) => (
          <div key={s.label}>
            {i > 0 && <span className={styles.journeyLine} />}
            <div className={styles.journeyStep}>
              <span className={styles.journeyIcon} style={{ background: s.bg }}>
                <Icon name={s.icon} size={19} color={s.color} />
              </span>
              <span className={styles.journeyLabel}>{s.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [8] Flows & Forms: a WhatsApp Flow form preview. */
export function FlowsFormsMock() {
  const fields = ['Full name', 'Phone number'];
  return (
    <div className={styles.flowFrame}>
      <div className={styles.flowFormCard}>
        <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 3 }}>Book your consultation</div>
        <div style={{ fontSize: 11, color: 'var(--color-text-faint)', marginBottom: 14 }}>Fill in the details below</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {fields.map((f) => (
            <div key={f} className={styles.flowField}>{f}</div>
          ))}
          <div className={styles.flowField} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Service interest
            <Icon name="expand_more" size={16} color="var(--color-text-faint)" />
          </div>
          <div className={styles.flowField} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            Preferred time
            <Icon name="schedule" size={16} color="var(--color-text-faint)" />
          </div>
          <div className={styles.flowSubmit}>Submit</div>
        </div>
      </div>
      <div className={styles.flowCaption}>WhatsApp Flow · saved to AiEngage CRM</div>
    </div>
  );
}

/** [9] Segmentation: an IF/AND condition builder resolving to a matching audience count. */
export function SegmentationMock() {
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded}`}>
      <div className={styles.sectionLabel} style={{ marginBottom: 14 }}>Build a Segment</div>
      <div className={styles.condRow}>
        <span className={styles.condTag}>IF</span>
        <span style={{ fontWeight: 600 }}>Purchase history</span>
        <span style={{ color: 'var(--color-text-faint)' }}>is</span>
        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>≥ 2 orders</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '8px 0 8px 6px' }}>
        <span className={styles.andTag}>AND</span>
      </div>
      <div className={styles.condRow}>
        <span className={styles.condTag}>IF</span>
        <span style={{ fontWeight: 600 }}>Location</span>
        <span style={{ color: 'var(--color-text-faint)' }}>is</span>
        <span style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Ahmedabad</span>
      </div>
      <div className={styles.audienceCard}>
        <div>
          <div style={{ fontSize: 10.5, color: 'var(--color-dark-text-muted)' }}>Matching audience</div>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff' }}>
            3,842 <span style={{ fontSize: 12, fontWeight: 400, color: 'var(--color-dark-text-muted)' }}>contacts</span>
          </div>
        </div>
        <Icon name="groups" size={32} color="var(--color-primary-dark-accent)" />
      </div>
    </div>
  );
}

/** [10] CRM Integration: ad platforms syncing leads into AiEngage CRM. */
export function CrmIntegrationMock() {
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded} ${styles.cardTinted}`}>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <div className={styles.syncCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className={styles.syncIcon} style={{ background: 'var(--color-blue-tint)' }}>
              <Icon name="ads_click" size={17} color="var(--color-blue)" />
            </span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Meta Ads</span>
          </div>
          <div className={styles.syncStatus}>
            <span className={styles.dotOnline} style={{ width: 6, height: 6 }} />
            Syncing · 24 leads today
          </div>
        </div>
        <div className={styles.syncCard}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span className={styles.syncIcon} style={{ background: 'var(--color-primary-tint)' }}>
              <Icon name="travel_explore" size={17} color="var(--color-primary)" />
            </span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Google Ads</span>
          </div>
          <div className={styles.syncStatus}>
            <span className={styles.dotOnline} style={{ width: 6, height: 6 }} />
            Syncing · 18 leads today
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 12 }}>
        <Icon name="sync_alt" size={24} color="var(--color-text-faint)" />
      </div>
      <div className={styles.crmSyncCard}>
        <span className={styles.crmSyncIcon}>
          <Icon name="hub" size={20} color="#fff" />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>AiEngage CRM</div>
          <div style={{ fontSize: 10.5, color: 'var(--color-dark-text-muted)' }}>42 leads routed · 0 failed</div>
        </div>
        <span className={styles.liveTag}>Live</span>
      </div>
    </div>
  );
}

/** [11] Analytics: response/read/conversion stats + a 7-day message volume chart. */
export function AnalyticsMock() {
  const bars = [45, 62, 52, 78, 68, 95, 84];
  const barColors = ['#ffd9cc', '#ffc4b0', '#ffb199', '#ff8c68', '#ff7350', 'var(--color-primary)', 'var(--color-primary-hover)'];
  return (
    <div className={`${styles.card} ${styles.cardFluid} ${styles.cardPadded}`}>
      <div className={styles.metricGrid}>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Avg. response</div>
          <div className={styles.metricValue}>48s</div>
        </div>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Read rate</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-whatsapp)' }}>92%</div>
        </div>
        <div className={styles.metricBlock}>
          <div className={styles.metricLabel}>Conversions</div>
          <div className={styles.metricValue} style={{ color: 'var(--color-primary)' }}>312</div>
        </div>
      </div>
      <div className={styles.chartPanel}>
        <div className={styles.sectionLabel} style={{ marginBottom: 12 }}>Messages sent · last 7 days</div>
        <div className={styles.miniChart}>
          {bars.map((h, i) => (
            <div key={i} className={styles.miniBar} style={{ height: `${h}%`, background: barColors[i] }} />
          ))}
        </div>
      </div>
    </div>
  );
}
