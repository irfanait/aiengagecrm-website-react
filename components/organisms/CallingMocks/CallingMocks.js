import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './CallingMocks.module.css';

const COUNTRIES = [
  { flag: '🇺🇸', name: 'United States', meta: '+1 415 552 0148' },
  { flag: '🇬🇧', name: 'United Kingdom', meta: '+44 20 7946 0958' },
  { flag: '🇮🇳', name: 'India', meta: 'Incoming call…', active: true },
  { flag: '🇦🇪', name: 'UAE', meta: '+971 4 123 4567' },
  { flag: '🇦🇺', name: 'Australia', meta: '+61 2 8014 7900' },
  { flag: '🇸🇬', name: 'Singapore', meta: '+65 3159 1200' },
];

/** Hero: an in-call summary with connected numbers, transcript and click-to-call. */
export function CallHeroMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headIcon} style={{ background: 'var(--color-green-tint)' }}>
          <Icon name="call" size={19} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.headTitle}>Anita Sharma</div>
          <div className={styles.headMeta}>Connected · 04:12</div>
        </div>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>Live</span>
      </div>
      <div className={styles.transcriptBox} style={{ marginBottom: 12 }}>
        <div className={styles.transcriptHead}>
          <Icon name="description" size={16} color="var(--color-purple)" />
          <span className={styles.transcriptLabel}>TRANSCRIPT</span>
        </div>
        <div className={styles.transcriptLine}>
          <b style={{ color: 'var(--color-whatsapp)' }}>Customer:</b> Is the 2BHK still available?
        </div>
      </div>
      <div className={styles.numberGrid} style={{ marginBottom: 12 }}>
        <div className={styles.numberCard}>
          <span className={styles.numberFlag}>🇮🇳</span>
          <div>
            <div className={styles.numberName}>India Sales</div>
            <div className={styles.numberMeta}>Connected</div>
          </div>
        </div>
        <div className={styles.numberCard}>
          <span className={styles.numberFlag}>🇺🇸</span>
          <div>
            <div className={styles.numberName}>US Sales</div>
            <div className={styles.numberMeta}>Available</div>
          </div>
        </div>
      </div>
      <div className={styles.footerRow}>
        <span style={{ width: 26, height: 26, borderRadius: 8, background: 'var(--color-primary-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="person_add" size={15} color="var(--color-primary)" />
        </span>
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>Assign to Meera</span>
        <Icon name="chevron_right" size={16} color="var(--color-text-faint)" />
      </div>
    </div>
  );
}

/** [1] Business Numbers: connected numbers across countries + mobile app forwarding. */
export function ConnectedNumbersMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Connected Numbers</span>
        <span className={waStyles.statHeadTag}>6 countries</span>
      </div>
      <div className={styles.numberGrid}>
        {COUNTRIES.map((c) => (
          <div key={c.name} className={`${styles.numberCard} ${c.active ? styles.numberCardActive : ''}`}>
            <span className={styles.numberFlag}>{c.flag}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.numberName}>{c.name}</div>
              <div className={c.active ? styles.numberMetaActive : styles.numberMeta}>{c.meta}</div>
            </div>
            {c.active && (
              <span className={styles.ringIcon}>
                <Icon name="call" size={15} color="#fff" />
              </span>
            )}
          </div>
        ))}
      </div>
      <div className={styles.darkRow}>
        <span className={styles.darkRowIcon}>
          <Icon name="smartphone" size={19} color="#fff" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.darkRowTitle}>AiEngage mobile app</div>
          <div className={styles.darkRowMeta}>Receive on app · or forward to mobile</div>
        </div>
        <span className={styles.darkRowTag}>Online</span>
      </div>
    </div>
  );
}

/** [2] Assign Numbers: per-provider number table + active-number footer. */
export function AssignNumbersMock() {
  const rows = [
    { number: '+1 415 552 0148', country: '🇺🇸 US', type: 'Sales', provider: 'Provider 2' },
    { number: '+91 98250 11001', country: '🇮🇳 IN', type: 'Sales', provider: 'Provider 1' },
    { number: '+91 98250 11002', country: '🇮🇳 IN', type: 'Support', provider: 'Provider 1' },
    { number: '+1 800 552 9000', country: '🇺🇸 US', type: 'VIP', provider: 'Provider 2' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Voice Settings · Numbers</span>
        <span className={styles.headMeta}>4 providers</span>
      </div>
      <div className={styles.chipRow}>
        <span className={styles.chip}>
          <Icon name="cloud" size={13} color="var(--color-blue)" />Provider 1
        </span>
        <span className={styles.chip}>
          <Icon name="cloud" size={13} color="var(--color-purple)" />Provider 2
        </span>
        <span className={styles.chipDashed}>
          <Icon name="add" size={13} />Add provider
        </span>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span style={{ flex: 1.4 }}>NUMBER</span>
          <span style={{ flex: 0.9 }}>COUNTRY</span>
          <span style={{ flex: 0.9 }}>TYPE</span>
          <span style={{ flex: 0.9 }}>PROVIDER</span>
        </div>
        {rows.map((r) => (
          <div key={r.number} className={styles.tableRow}>
            <span className={styles.tableCellStrong} style={{ flex: 1.4 }}>{r.number}</span>
            <span style={{ flex: 0.9 }}>{r.country}</span>
            <span style={{ flex: 0.9 }}>{r.type}</span>
            <span style={{ flex: 0.9, fontWeight: 600, fontSize: 10 }}>{r.provider}</span>
          </div>
        ))}
      </div>
      <div className={styles.footerRow}>
        <span className={waStyles.avatarCircle} style={{ background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>MK</span>
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>Meera · active number</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: 'var(--color-text-muted)', background: '#f3ede2', borderRadius: 7, padding: '4px 9px' }}>🇮🇳 India Sales ▾</span>
      </div>
    </div>
  );
}

/** [3] Call Timeline: an inbound call saved with stats, transcript and follow-up actions. */
export function CallTimelineMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headIcon} style={{ background: 'var(--color-green-tint)' }}>
          <Icon name="call_received" size={19} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.headTitle}>Inbound call · Anita Sharma</div>
          <div className={styles.headMeta}>Skyline 2BHK · Deal ₹85L</div>
        </div>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>Connected</span>
      </div>
      <div className={styles.statGrid2}>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>START</div>
          <div className={styles.statBoxValue}>Jul 12 · 11:04</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>DURATION</div>
          <div className={styles.statBoxValue}>6m 21s</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>OWNER</div>
          <div className={styles.statBoxValue}>Meera · Sales</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>OUTCOME</div>
          <div className={styles.statBoxValue} style={{ color: 'var(--color-whatsapp)' }}>Site visit booked</div>
        </div>
      </div>
      <div className={styles.transcriptBox}>
        <div className={styles.transcriptHead}>
          <Icon name="description" size={16} color="var(--color-purple)" />
          <span className={styles.transcriptLabel}>TRANSCRIPT</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 600, color: 'var(--color-purple)' }}>Searchable</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div className={styles.transcriptLine}>
            <b style={{ color: 'var(--color-whatsapp)' }}>Customer:</b> Is the 2BHK still available near Prahlad Nagar?
          </div>
          <div className={styles.transcriptLine}>
            <b style={{ color: 'var(--color-blue)' }}>Meera:</b> Yes! I can arrange a site visit this Saturday at 11.
          </div>
        </div>
      </div>
      <div className={styles.actionRow}>
        <span className={styles.actionBtn}>▶ Recording</span>
        <span className={styles.actionBtn}>+ Follow-up note</span>
      </div>
    </div>
  );
}

/** [4] Call Routing: ring type, department/agent fallback and mobile forwarding. */
export function CallRoutingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headIcon} style={{ background: 'var(--color-primary-tint)' }}>
          <Icon name="alt_route" size={19} color="var(--color-primary)" />
        </span>
        <div className={styles.headTitle}>Incoming Call Routing</div>
      </div>
      <div className={styles.smallLabel}>RING TYPE</div>
      <div className={styles.toggleRow}>
        <span className={styles.toggleActive}>Simultaneous</span>
        <span className={styles.toggleInactive}>Sequential</span>
      </div>
      <div className={styles.agentRow}>
        <span className={styles.agentIcon} style={{ background: 'var(--color-green-tint)' }}>
          <Icon name="support_agent" size={16} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.agentName}>Sales department</div>
          <div className={styles.agentMeta}>4 available agents</div>
        </div>
        <span className={styles.dotOnline} />
      </div>
      <div className={styles.agentRow} style={{ marginBottom: 14 }}>
        <span className={styles.agentIcon} style={{ background: 'var(--color-blue-tint)' }}>
          <Icon name="groups" size={16} color="var(--color-blue)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.agentName}>Available agents</div>
          <div className={styles.agentMeta}>Meera, Dev, Arjun</div>
        </div>
        <span className={styles.dotOnline} />
      </div>
      <div className={styles.darkRow} style={{ marginTop: 0 }}>
        <Icon name="phone_forwarded" size={18} color="var(--color-primary-dark-accent)" />
        <div style={{ flex: 1 }}>
          <div className={styles.darkRowTitle}>Fallback → personal mobile</div>
          <div className={styles.darkRowMeta}>If no agent answers in 20s</div>
        </div>
        <span className={styles.darkRowTag}>On</span>
      </div>
    </div>
  );
}

/** [5] One-Click Calling: a leads table with click-to-call, mid-dial. */
export function OneClickCallingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Leads</span>
        <span className={styles.headMeta}>Click number to call</span>
      </div>
      <div className={styles.table} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-light)' }}>
        <div className={styles.tableHead}>
          <span style={{ flex: 1.3 }}>NAME</span>
          <span style={{ flex: 1.2 }}>PHONE</span>
          <span style={{ flex: 0.8 }}>STAGE</span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableCellStrong} style={{ flex: 1.3 }}>Rahul Shah</span>
          <span style={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary-hover)', fontWeight: 600 }}>
            <Icon name="call" size={14} color="var(--color-primary-hover)" />+91 98•• 118
          </span>
          <span style={{ flex: 0.8 }}>New</span>
        </div>
        <div className={`${styles.tableRow} ${styles.tableRowHot}`}>
          <span className={styles.tableCellStrong} style={{ flex: 1.3 }}>Anita Sharma</span>
          <span style={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary-hover)', fontWeight: 700 }}>
            <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="call" size={13} color="#fff" />
            </span>
            Dialing…
          </span>
          <span style={{ flex: 0.8 }}>Hot</span>
        </div>
        <div className={styles.tableRow}>
          <span className={styles.tableCellStrong} style={{ flex: 1.3 }}>Manoj Joshi</span>
          <span style={{ flex: 1.2, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary-hover)', fontWeight: 600 }}>
            <Icon name="call" size={14} color="var(--color-primary-hover)" />+91 98•• 742
          </span>
          <span style={{ flex: 0.8 }}>Follow-up</span>
        </div>
      </div>
      <div className={styles.miniCardRow}>
        <div className={styles.miniCard}>
          <div className={styles.miniCardHead}>
            <Icon name="call_made" size={16} color="var(--color-green)" />
            <span className={styles.miniCardTag}>Outbound</span>
          </div>
          <div className={styles.miniCardName}>Anita Sharma</div>
          <div className={styles.miniCardMeta} style={{ color: 'var(--color-whatsapp)' }}>Connected · 00:12</div>
        </div>
        <div className={styles.miniCard}>
          <div className={styles.miniCardHead}>
            <Icon name="schedule" size={16} color="var(--color-text-faint)" />
            <span className={styles.miniCardTag}>Queued</span>
          </div>
          <div className={styles.miniCardName}>Manoj Joshi</div>
          <div className={styles.miniCardMeta} style={{ color: 'var(--color-text-faint)' }}>Next in dialer</div>
        </div>
      </div>
    </div>
  );
}

/** [6] Call Monitoring: recording player with flagged pricing-objection transcript. */
export function CallMonitoringMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headIcon} style={{ background: 'var(--color-purple-tint)' }}>
          <Icon name="graphic_eq" size={19} color="var(--color-purple)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.headTitle}>Recording · Dev &amp; Vikram K.</div>
          <div className={styles.headMeta}>Outbound · 8m 12s</div>
        </div>
      </div>
      <div className={styles.playerRow}>
        <span className={styles.playIcon}>
          <Icon name="play_arrow" size={20} color="#fff" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.playerTrack}>
            <div className={styles.playerFill} style={{ width: '42%' }} />
            <span className={styles.playerKnob} style={{ left: '42%' }} />
          </div>
          <div className={styles.playerTimes}>
            <span>03:28</span>
            <span>08:12</span>
          </div>
        </div>
        <span className={styles.speedTag}>1.5×</span>
      </div>
      <div className={styles.transcriptBox}>
        <div className={styles.transcriptHead}>
          <Icon name="description" size={16} color="var(--color-purple)" />
          <span className={styles.transcriptLabel}>TRANSCRIPT</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div className={styles.transcriptLine}>
            <b style={{ color: 'var(--color-blue)' }}>Dev:</b> Our enterprise plan is ₹18,000 a year with priority support.
          </div>
          <div className={styles.transcriptLine}>
            <b style={{ color: 'var(--color-whatsapp)' }}>Vikram:</b> Can you share a discount for annual billing?
          </div>
          <div className={styles.transcriptFlag}>
            <b style={{ color: 'var(--color-yellow-icon)' }}>Flag:</b> Pricing objection · discount requested
          </div>
        </div>
      </div>
    </div>
  );
}

/** [7] Call Analytics: connected-call stats, team activity chart and outcomes. */
export function CallAnalyticsMock() {
  const bars = [
    { name: 'Meera', height: 54, color: '#ffb199' },
    { name: 'Dev', height: 70, color: '#ff8c68' },
    { name: 'Arjun', height: 62, color: 'var(--color-primary)' },
    { name: 'Priya', height: 40, color: '#ffc4b0' },
    { name: 'Ravi', height: 48, color: 'var(--color-primary-hover)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Calling Analytics</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-purple)', background: 'var(--color-purple-tint)' }}>This week</span>
      </div>
      <div className={waStyles.stat3} style={{ marginBottom: 14 }}>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>Made / Received</div>
          <div className={styles.statBoxValue} style={{ fontSize: 16 }}>486</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>Connected</div>
          <div className={styles.statBoxValue} style={{ fontSize: 16, color: 'var(--color-whatsapp)' }}>78%</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxLabel}>Missed</div>
          <div className={styles.statBoxValue} style={{ fontSize: 16, color: 'var(--color-primary-hover)' }}>42</div>
        </div>
      </div>
      <div className={styles.chartCard}>
        <div className={styles.chartHead}>
          <span className={styles.chartHeadLabel}>Team activity</span>
          <span className={styles.chartHeadMeta}>Avg talk 4m 20s</span>
        </div>
        <div className={styles.barChart}>
          {bars.map((b) => (
            <div key={b.name} className={styles.barCol}>
              <div className={styles.bar} style={{ height: b.height, background: b.color }} />
              <span className={styles.barLabel}>{b.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.resultRow}>
        <div className={styles.resultBlock} style={{ background: 'var(--color-green-tint)' }}>
          <div className={styles.resultLabel} style={{ color: 'var(--color-whatsapp)' }}>Meetings generated</div>
          <div className={styles.resultValue} style={{ color: 'var(--color-whatsapp)' }}>63</div>
        </div>
        <div className={styles.resultBlock} style={{ background: 'var(--color-primary-tint)' }}>
          <div className={styles.resultLabel} style={{ color: '#b06a4a' }}>Deals closed</div>
          <div className={styles.resultValue} style={{ color: 'var(--color-primary)' }}>21</div>
        </div>
      </div>
    </div>
  );
}

/** [8] Calling + CRM: one customer profile unifying call, WhatsApp and email. */
export function CallingCrmMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardTinted}`} style={{ overflow: 'hidden' }}>
      <div className={styles.unifiedHead}>
        <span className={waStyles.avatarCircle} style={{ width: 40, height: 40, borderRadius: 11, background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>AS</span>
        <div style={{ flex: 1 }}>
          <div className={styles.headTitle}>Anita Sharma</div>
          <div className={styles.headMeta}>One profile · every channel</div>
        </div>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>Hot lead</span>
      </div>
      <div className={styles.unifiedBody}>
        <div className={styles.unifiedRow}>
          <span className={styles.unifiedIcon} style={{ background: 'var(--color-purple-tint)' }}>
            <Icon name="call" size={17} color="var(--color-purple)" />
          </span>
          <div style={{ flex: 1 }}>
            <div className={styles.unifiedTitle}>Call · 6m 21s</div>
            <div className={styles.unifiedMeta}>Recording + transcript saved</div>
          </div>
          <span className={styles.unifiedTime}>11:04</span>
        </div>
        <div className={styles.unifiedRow}>
          <span className={styles.unifiedIcon} style={{ background: 'var(--color-green-tint)' }}>
            <Icon name="chat" size={17} color="var(--color-whatsapp)" />
          </span>
          <div style={{ flex: 1 }}>
            <div className={styles.unifiedTitle}>WhatsApp · 4 messages</div>
            <div className={styles.unifiedMeta}>&quot;Site visit confirmed 👍&quot;</div>
          </div>
          <span className={styles.unifiedTime}>11:20</span>
        </div>
        <div className={styles.unifiedRow}>
          <span className={styles.unifiedIcon} style={{ background: 'var(--color-blue-tint)' }}>
            <Icon name="mail" size={17} color="var(--color-blue)" />
          </span>
          <div style={{ flex: 1 }}>
            <div className={styles.unifiedTitle}>Email · Quotation sent</div>
            <div className={styles.unifiedMeta}>₹85L · opened 2×</div>
          </div>
          <span className={styles.unifiedTime}>12:02</span>
        </div>
        <div className={styles.darkStatRow}>
          <div className={styles.darkStatBlock}>
            <div className={styles.darkStatLabel}>Lead status</div>
            <div className={styles.darkStatValue}>Negotiation</div>
          </div>
          <div className={styles.darkStatBlock}>
            <div className={styles.darkStatLabel}>Open deal</div>
            <div className={styles.darkStatValue} style={{ color: 'var(--color-primary-dark-accent)' }}>₹85L</div>
          </div>
        </div>
      </div>
    </div>
  );
}
