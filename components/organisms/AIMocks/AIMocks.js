import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './AIMocks.module.css';

const HERO_STATS = [
  { label: 'SUMMARIES', value: '248' },
  { label: 'QUALIFIED', value: '76' },
  { label: 'DRAFTS', value: '134' },
  { label: 'CALLS', value: '52' },
];

const CAPABILITIES = [
  { icon: 'summarize', label: 'Smart Summaries', active: true },
  { icon: 'fact_check', label: 'Lead Qualification', active: false },
  { icon: 'edit_note', label: 'Email Assistant', active: false },
  { icon: 'graphic_eq', label: 'Transcription', active: false },
  { icon: 'insights', label: 'Insights', active: false },
];

const HERO_ACTIVITY = [
  { icon: 'summarize', color: '#FF5F38', title: 'Summary generated', name: 'Rohan Sharma', meta: 'Deal #4821 · 2m ago' },
  { icon: 'fact_check', color: '#1FAF64', title: 'Lead qualified', name: 'Priya Nair', meta: 'Score 82 · 11m ago' },
  { icon: 'edit_note', color: '#FF5F38', title: 'Draft written', name: 'Emily Carter', meta: 'Proposal · 24m ago' },
  { icon: 'graphic_eq', color: '#FF7A52', title: 'Call transcribed', name: 'Arjun Mehta', meta: '8m 14s · 41m ago' },
];

export function AIWorkspaceMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`} style={{ width: 512, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className={styles.panelHead}>
        <div className={styles.panelHeadLeft}>
          <span className={styles.iconBox}>
            <Icon name="neurology" size={16} color="var(--color-primary)" />
          </span>
          <span className={styles.panelTitle}>AI Workspace</span>
        </div>
        <span className={styles.livePill}>
          <span className={styles.liveDot} />
          Live
        </span>
      </div>

      <div className={styles.statGrid4}>
        {HERO_STATS.map((s) => (
          <div className={styles.statBoxSm} key={s.label}>
            <div className={styles.statBoxLabel}>{s.label}</div>
            <div className={styles.statBoxValue}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <div className={styles.capRail}>
          <div className={styles.capLabel}>CAPABILITIES</div>
          {CAPABILITIES.map((c) => (
            <div className={c.active ? styles.capRowActive : styles.capRow} key={c.label}>
              <Icon name={c.icon} size={15} color={c.active ? 'var(--color-primary-hover)' : 'var(--color-text-faint)'} />
              {c.label}
            </div>
          ))}
        </div>
        <div className={styles.activityPanel}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }}>
            <span style={{ fontSize: 10.5, fontWeight: 700 }}>AI Activity</span>
            <span style={{ fontSize: 8.5, color: 'var(--color-text-faint)' }}>Today</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {HERO_ACTIVITY.map((a) => (
              <div className={styles.activityRow} key={a.title}>
                <Icon name={a.icon} size={15} color={a.color} />
                <div style={{ flex: 1 }}>
                  <div className={styles.activityText}>
                    {a.title} · <span style={{ fontWeight: 600 }}>{a.name}</span>
                  </div>
                  <div className={styles.activityMeta}>{a.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const SUMMARY_CHAT = [
  { side: 'in', text: 'Hi, is the 3BHK in Whitefield still available?', time: '10:02' },
  { side: 'out', text: "Yes it is. Budget range you're looking at?", time: '10:04' },
  { side: 'in', text: 'Around ₹1.2Cr, ready to move in 2 months.', time: '10:05' },
  { side: 'out', text: 'Perfect. Can we schedule a site visit Sat?', time: '10:07' },
  { side: 'in', text: 'Saturday 11am works. Please share location.', time: '10:08' },
  { side: 'in', text: 'Also, is bank loan assistance available?', time: '10:09' },
];

const SUMMARY_PENDING = [
  { text: 'Share site location', checked: true },
  { text: 'Confirm Sat 11am visit', checked: false },
  { text: 'Connect loan desk', checked: false },
];

export function SmartSummariesMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ padding: 16, display: 'flex', gap: 12, height: 400 }}>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, paddingBottom: 10, borderBottom: '1px solid var(--color-border-light)', marginBottom: 10 }}>
          <span className={waStyles.avatarCircle} style={{ background: 'var(--color-green-tint)', color: '#128C4B' }}>AM</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 600 }}>Arjun Mehta</div>
            <div style={{ fontSize: 8.5, color: 'var(--color-text-faint)' }}>+91 98204 55127 · WhatsApp</div>
          </div>
          <Icon name="chat" size={16} color="#1FAF64" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {SUMMARY_CHAT.map((m, i) => (
            <div key={i} className={m.side === 'in' ? styles.bubbleInSm : styles.bubbleOutSm}>
              {m.text}
              <div className={styles.bubbleTime} style={m.side === 'out' ? { textAlign: 'right' } : undefined}>{m.time}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.summarySide}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <Icon name="summarize" size={16} color="var(--color-primary)" />
          <span style={{ fontSize: 11, fontWeight: 700 }}>AI Summary</span>
        </div>
        <div>
          <div className={styles.summaryFieldLabel}>WHAT HAPPENED</div>
          <div className={styles.summaryFieldValue}>Enquiry on 3BHK Whitefield, confirmed available.</div>
        </div>
        <div>
          <div className={styles.summaryFieldLabel}>CUSTOMER NEEDS</div>
          <div className={styles.summaryFieldValue}>Budget ₹1.2Cr · move-in 2 months · loan help.</div>
        </div>
        <div>
          <div className={styles.summaryFieldLabel}>NEXT STEP</div>
          <div className={styles.summaryFieldValue}>Site visit Sat 11am · send location + loan desk.</div>
        </div>
        <div className={styles.pendingBox}>
          <div className={styles.summaryFieldLabel} style={{ marginBottom: 6 }}>PENDING ACTIONS</div>
          {SUMMARY_PENDING.map((p) => (
            <div className={styles.pendingRow} key={p.text}>
              <Icon name={p.checked ? 'check_box' : 'check_box_outline_blank'} size={14} color={p.checked ? 'var(--color-primary)' : 'var(--color-text-faint)'} />
              {p.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const KNOWLEDGE_SOURCES = [
  { icon: 'language', title: 'Website pages', meta: '32 pages · synced 2h ago', status: 'Active' },
  { icon: 'quiz', title: 'FAQ document', meta: '48 Q&A · synced 1d ago', status: 'Active' },
  { icon: 'picture_as_pdf', title: 'Price list.pdf', meta: 'syncing · 3m ago', status: 'Syncing' },
  { icon: 'policy', title: 'Policy document', meta: '12 pages · synced 4d ago', status: 'Active' },
];

const WIDGET_MESSAGES = [
  { side: 'in', text: 'Hi! What are your business hours?' },
  { side: 'out', text: "We're open Mon–Sat, 9am to 7pm IST." },
  { side: 'in', text: 'Do you offer EMI on packages?' },
  { side: 'out', text: 'Yes — 3, 6 and 9-month EMI via Razorpay.' },
];

export function AIChatbotMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ background: 'var(--color-bg)', padding: 16, display: 'flex', gap: 12, position: 'relative', left: 12 }}>
      <div style={{ flex: 1, minWidth: 0, background: '#fff', border: '1px solid var(--color-border)', borderRadius: 13, padding: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700 }}>Knowledge Sources</span>
          <span style={{ fontSize: 8.5, fontWeight: 700, color: '#FF5F38', background: 'var(--color-primary-tint)', borderRadius: 6, padding: '3px 7px' }}>4 synced</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {KNOWLEDGE_SOURCES.map((s) => (
            <div className={styles.sourceRow} key={s.title}>
              <Icon name={s.icon} size={16} color="var(--color-primary)" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.sourceTitle}>{s.title}</div>
                <div className={styles.sourceMeta}>{s.meta}</div>
              </div>
              <span className={s.status === 'Active' ? styles.sourceActive : styles.sourceSyncing}>{s.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.widgetShell}>
        <div className={styles.widgetHeader}>
          <span className={styles.widgetAvatar}>
            <Icon name="support_agent" size={13} color="#fff" />
          </span>
          <div>
            <div className={styles.widgetName}>AiEngage Assistant</div>
            <div className={styles.widgetStatus}>Typically replies instantly</div>
          </div>
        </div>
        <div className={styles.widgetBody}>
          {WIDGET_MESSAGES.map((m, i) => (
            <div key={i} className={m.side === 'in' ? styles.widgetBubbleIn : styles.widgetBubbleOut}>{m.text}</div>
          ))}
          <div className={styles.widgetTyping}>
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
            <span className={styles.typingDot} />
          </div>
        </div>
        <div className={styles.widgetFooter}>
          <span className={styles.widgetFooterText}>Type a message…</span>
          <Icon name="send" size={16} color="var(--color-primary)" />
        </div>
      </div>
    </div>
  );
}

const QUALIFICATION_CHAT = [
  { side: 'in', text: 'Which service are you interested in?' },
  { side: 'out', text: 'Home loan for a ₹85L property.' },
  { side: 'in', text: 'Do you have a pre-approved offer?' },
  { side: 'out', text: 'No, first-time buyer.' },
  { side: 'in', text: "Great. What's your expected timeline?" },
  { side: 'out', text: 'Within 30 days. Located in Pune.' },
];

const LEAD_FIELDS = [
  { label: 'BUDGET', value: '₹85,00,000' },
  { label: 'LOCATION', value: 'Pune' },
  { label: 'TIMELINE', value: '30 days' },
  { label: 'INTENT', value: 'High', color: '#1FAF64' },
];

export function AILeadQualificationMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ padding: 16, display: 'flex', gap: 12, height: 340 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
          <Icon name="fact_check" size={16} color="var(--color-primary)" />
          <span style={{ fontSize: 11, fontWeight: 700 }}>Qualification Chat</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {QUALIFICATION_CHAT.map((m, i) => (
            <div key={i} className={m.side === 'in' ? styles.bubbleInSm : styles.bubbleOutSm} style={{ padding: '8px' }}>
              {m.text}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.leadCard}>
        <div className={styles.leadHead}>
          <span className={waStyles.avatarCircle} style={{ background: '#FFE1D6', color: '#E64A24' }}>SD</span>
          <div>
            <div className={styles.leadName}>Sneha Deshmukh</div>
            <div className={styles.leadMeta}>+91 90114 27883</div>
          </div>
        </div>
        <div className={styles.leadFieldGrid}>
          {LEAD_FIELDS.map((f) => (
            <div key={f.label}>
              <div className={styles.leadFieldLabel}>{f.label}</div>
              <div className={styles.leadFieldValue} style={f.color ? { color: f.color } : undefined}>{f.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.scoreRow}>
          <svg viewBox="0 0 60 60" style={{ width: 52, height: 52, flexShrink: 0 }}>
            <circle cx="30" cy="30" r="24" fill="none" stroke="#E8E0D2" strokeWidth="7" />
            <circle cx="30" cy="30" r="24" fill="none" stroke="#FF5F38" strokeWidth="7" strokeLinecap="round" strokeDasharray="123 151" transform="rotate(-90 30 30)" />
            <text x="30" y="34" fontSize="15" fontWeight="700" fill="#000923" textAnchor="middle">82</text>
          </svg>
          <div>
            <div className={styles.scoreLabel}>QUALIFICATION SCORE</div>
            <div className={styles.scoreValue}>Sales-ready</div>
          </div>
        </div>
        <div className={styles.routeBox}>
          <Icon name="alt_route" size={15} color="var(--color-primary)" />
          <div className={styles.routeText}>
            Routed to <span style={{ fontWeight: 700 }}>Meera Kapoor</span> · Home Loans
          </div>
        </div>
      </div>
    </div>
  );
}

const INSIGHT_STATS = [
  { label: 'NEED FOLLOW-UP', value: '18', color: '#C0503A' },
  { label: 'HIGH INTENT', value: '24', color: '#1FAF64' },
  { label: 'AT RISK', value: '7' },
];

const INSIGHT_ROWS = [
  { tag: 'FOLLOW-UP', tagColor: '#E64A24', tagBg: '#FFF3EA', title: '6 high-intent leads had no reply in 48h', meta: 'Affects 6 leads · ₹52L pipeline' },
  { tag: 'ENGAGEMENT', tagColor: '#128C4B', tagBg: '#E4F5EC', title: 'Whitefield project drives most enquiries', meta: 'Affects 31 conversations this week' },
  { tag: 'OBJECTION', tagColor: '#B07D0B', tagBg: '#FFF0D6', title: '"Price too high" raised in 9 chats', meta: 'Common objection · suggest EMI offer' },
];

export function AIInsightsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ background: 'var(--color-bg)', position: 'relative', left: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontSize: 14, fontWeight: 700 }}>AI Insights</div>
        <span style={{ fontSize: 9, fontWeight: 600, color: 'var(--color-text-muted)', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 7, padding: '4px 9px' }}>This week ▾</span>
      </div>

      <div className={styles.insightStatGrid} style={{ marginBottom: 12 }}>
        {INSIGHT_STATS.map((s) => (
          <div className={styles.insightStatBox} key={s.label}>
            <div className={styles.statBoxLabel}>{s.label}</div>
            <div className={styles.insightStatValue} style={s.color ? { color: s.color } : undefined}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {INSIGHT_ROWS.map((r) => (
          <div className={styles.insightRow} key={r.tag}>
            <span className={styles.insightTag} style={{ color: r.tagColor, background: r.tagBg }}>{r.tag}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.insightTitle}>{r.title}</div>
              <div className={styles.insightMeta}>{r.meta}</div>
            </div>
            <span className={styles.insightReview}>
              Review
              <Icon name="arrow_forward" size={14} color="var(--color-primary)" />
            </span>
          </div>
        ))}
      </div>

      <div style={{ background: '#fff', border: '1px solid var(--color-border)', borderRadius: 11, padding: '11px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 9.5, fontWeight: 700 }}>Customer Sentiment</span>
          <span style={{ fontSize: 8, color: 'var(--color-text-faint)' }}>412 conversations</span>
        </div>
        <div className={styles.sentimentBar}>
          <div style={{ width: '62%', background: '#1FAF64' }} />
          <div style={{ width: '26%', background: '#E8C7B8' }} />
          <div style={{ width: '12%', background: '#C0503A' }} />
        </div>
        <div className={styles.sentimentLegend}>
          <span className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#1FAF64' }} />Positive 62%</span>
          <span className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#E8C7B8' }} />Neutral 26%</span>
          <span className={styles.legendItem}><span className={styles.legendDot} style={{ background: '#C0503A' }} />Negative 12%</span>
        </div>
      </div>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className={styles.phoneStatusBar}>
      <span>9:41</span>
      <span className={styles.phoneStatusIcons}>
        <Icon name="signal_cellular_alt" size={12} color="var(--color-text)" />
        <Icon name="wifi" size={12} color="var(--color-text)" />
        <Icon name="battery_full" size={13} color="var(--color-text)" />
      </span>
    </div>
  );
}

const MOBILE_ACTIVITY = [
  { color: '#1FAF64', text: 'WhatsApp reply · 2h ago' },
  { color: '#FF5F38', text: 'Site visit booked · 1d ago' },
];

const NEXT_STEP_GUIDANCE = [
  'Carry floor plan & price sheet',
  'Confirm ₹1.2Cr budget on-site',
  'Discuss loan desk timeline',
  'Note parking preference',
  'Offer Sat 11am slot lock-in',
];

export function MobileAIMock() {
  return (
    <div className={styles.phoneStage}>
      <div className={`${styles.phoneShell} ${styles.phoneShellFront}`}>
        <div className={styles.phoneRim} />
        <div className={styles.phoneScreen}>
          <div className={styles.phoneNotch} />
          <div className={styles.phoneScreenPad}>
            <PhoneStatusBar />
            <div className={styles.phoneAppHead}>
              <span className={styles.phoneAppIcon}>
                <Icon name="neurology" size={15} color="var(--color-primary)" />
              </span>
              <span className={styles.phoneAppTitle}>AI Summary</span>
            </div>
            <div className={styles.phoneCard}>
              <div className={styles.phoneCardHead}>
                <span className={waStyles.avatarCircle} style={{ width: 22, height: 22, fontSize: 8, background: 'var(--color-green-tint)', color: '#128C4B' }}>RS</span>
                <div>
                  <div className={styles.phoneCardName}>Rohan Sharma</div>
                  <div className={styles.phoneCardMeta}>Lead · Real Estate</div>
                </div>
              </div>
              <div className={styles.phoneCardBody}>Toured 2 sites, prefers Whitefield 3BHK. Budget ₹1.2Cr. Asked for loan help &amp; parking.</div>
            </div>
            <div className={styles.phoneSectionLabel}>RECENT ACTIVITY</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 11 }}>
              {MOBILE_ACTIVITY.map((a) => (
                <div className={styles.phoneActivityRow} key={a.text}>
                  <span className={styles.phoneActivityDot} style={{ background: a.color }} />
                  {a.text}
                </div>
              ))}
            </div>
            <div className={styles.phoneSuggestBox}>
              <div className={styles.phoneSuggestHead}>
                <Icon name="bolt" size={14} color="var(--color-primary)" />
                <span className={styles.phoneSuggestLabel}>SUGGESTED REPLY</span>
              </div>
              <div className={styles.phoneSuggestText}>&quot;Hi Rohan, sharing the Whitefield floor plan &amp; loan options for Sat&apos;s visit.&quot;</div>
              <div className={styles.phoneSuggestActions}>
                <span className={styles.phoneSendBtn}>Send</span>
                <span className={styles.phoneEditBtn}>Edit</span>
              </div>
            </div>
          </div>
          <div className={styles.phoneHomeBar} />
        </div>
      </div>

      <div className={`${styles.phoneShell} ${styles.phoneShellBack}`}>
        <div className={styles.phoneRim} />
        <div className={styles.phoneScreen}>
          <div className={styles.phoneCamDot} />
          <div className={styles.phoneScreenPad}>
            <PhoneStatusBar />
            <div className={styles.phoneAppHead}>
              <span className={styles.phoneAppIcon}>
                <Icon name="checklist" size={15} color="var(--color-primary)" />
              </span>
              <span className={styles.phoneAppTitle}>Before Site Visit</span>
            </div>
            <div className={styles.phoneCard}>
              <div className={styles.phoneSectionLabel} style={{ marginBottom: 3 }}>MEETING</div>
              <div className={styles.phoneCardName} style={{ fontSize: 10 }}>Sneha Deshmukh · 11:00 AM</div>
              <div className={styles.phoneCardMeta} style={{ fontSize: 8.5, marginTop: 2 }}>Whitefield · 3BHK tour</div>
            </div>
            <div className={styles.phoneSectionLabel} style={{ marginBottom: 7 }}>NEXT-STEP GUIDANCE</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {NEXT_STEP_GUIDANCE.map((g) => (
                <div className={styles.phoneChecklistRow} key={g}>
                  <Icon name="check_circle" size={14} color="var(--color-primary)" />
                  {g}
                </div>
              ))}
            </div>
            <div className={styles.phoneRouteBox}>
              <Icon name="route" size={15} color="#FF7A52" />
              <span className={styles.phoneRouteText}>12 min drive · leave by 10:35</span>
            </div>
          </div>
          <div className={styles.phoneHomeBar} />
        </div>
      </div>
    </div>
  );
}

const CONTEXT_CHIPS = ['Rohan Sharma', 'Deal #4821', '₹1.2Cr', 'Site visited'];

export function AIEmailAssistantMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ background: 'var(--color-bg)', padding: 16, display: 'flex', gap: 12, position: 'relative', left: 12 }}>
      <div className={styles.promptRail}>
        <div className={styles.promptCard}>
          <div className={styles.promptLabel}>PROMPT</div>
          <div className={styles.promptText}>Write a follow-up after the Whitefield site visit and include EMI options.</div>
        </div>
        <div>
          <div className={styles.promptLabel}>CUSTOMER CONTEXT</div>
          <div className={styles.contextChips}>
            {CONTEXT_CHIPS.map((c) => (
              <span className={styles.contextChip} key={c}>{c}</span>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.promptLabel}>TONE</div>
          <div className={styles.toneRow}>
            <span className={styles.toneActive}>Warm</span>
            <span className={styles.toneChip}>Formal</span>
            <span className={styles.toneChip}>Brief</span>
          </div>
        </div>
        <div>
          <div className={styles.promptLabel}>LENGTH</div>
          <div className={styles.toneRow}>
            <span className={styles.toneChip}>Short</span>
            <span className={styles.toneActive}>Medium</span>
          </div>
        </div>
        <div className={styles.regenBtn}>
          <Icon name="autorenew" size={14} color="var(--color-primary)" />
          Regenerate
        </div>
      </div>

      <div className={styles.draftShell}>
        <div className={styles.draftSubjectBox}>
          <div className={styles.promptLabel} style={{ marginBottom: 0 }}>SUBJECT</div>
          <div className={styles.draftSubjectValue}>Your Whitefield 3BHK visit — floor plan &amp; EMI options</div>
        </div>
        <div className={styles.draftBody}>
          Hi Rohan,
          <br />
          <br />
          Thank you for visiting our Whitefield project on Saturday. As discussed, I&apos;ve attached the 3BHK floor plan and pricing for the ₹1.2Cr configuration you liked.
          <br />
          <br />
          We also offer flexible EMI plans via Razorpay (3, 6 and 9 months) and can connect you with our loan desk this week.
          <br />
          <br />
          Would Thursday 4pm work for a quick call?
          <br />
          <br />
          <span style={{ color: 'var(--color-text-muted)' }}>
            Warm regards,
            <br />
            Meera Kapoor · AiEngage Realty
            <br />
            +91 98860 20114
          </span>
        </div>
        <div className={styles.draftFooter}>
          <span className={styles.variantLabel}>VARIANTS</span>
          <span className={styles.variantActive}>A</span>
          <span className={styles.variantChip}>B</span>
          <span className={styles.variantChip}>C</span>
          <span style={{ flex: 1 }} />
          <span className={styles.draftActionBtn}>
            <Icon name="schedule" size={13} color="var(--color-text-muted)" />
            Schedule
          </span>
          <span className={styles.draftSendBtn}>
            <Icon name="send" size={13} color="#fff" />
            Send
          </span>
        </div>
      </div>
    </div>
  );
}

function Waveform() {
  const bars = Array.from({ length: 32 }, (_, i) => 4 + ((i * 7) % 16));
  return (
    <svg viewBox="0 0 220 22" style={{ flex: 1, height: 22 }} preserveAspectRatio="none">
      {bars.map((h, i) => (
        <rect key={i} x={2 + i * 6.5} y={11 - h / 2} width="2" height={h} rx="1" fill={i < 19 ? '#FF5F38' : '#E0C9BC'} />
      ))}
    </svg>
  );
}

const TRANSCRIPT_LINES = [
  { speaker: 'Rep', time: '00:12', text: "Thanks for your time. What's the main requirement you're evaluating?" },
  { speaker: 'Arjun', time: '00:28', text: 'We need a ', highlight: '3BHK under ₹1.2Cr', after: ', possession within 2 months.' },
  { speaker: 'Rep', time: '00:51', text: 'We have two ready options in Whitefield. Any location constraint?' },
  { speaker: 'Arjun', time: '01:10', text: 'Close to the tech park is preferred. ', highlight: 'Worried the price may be high.', alert: true },
  { speaker: 'Rep', time: '01:34', text: 'Understood — we offer EMI and loan assistance to ease that.' },
  { speaker: 'Arjun', time: '01:58', text: 'Good. Can we do a site visit this Saturday?' },
];

const EXTRACTED_FIELDS = [
  { label: 'REQUIREMENT', value: '3BHK, Whitefield' },
  { label: 'BUDGET', value: 'Under ₹1.2Cr' },
  { label: 'TIMELINE', value: '2 months' },
  { label: 'OBJECTION', value: 'Price concern', color: '#C0503A' },
  { label: 'NEXT STEP', value: 'Site visit — Sat' },
];

export function AICallTranscriptionMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ padding: 16, display: 'flex', gap: 12, height: 370 }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, paddingBottom: 10, borderBottom: '1px solid var(--color-border-light)', marginBottom: 10 }}>
          <span className={waStyles.avatarCircle} style={{ background: '#FFE1D6', color: '#E64A24' }}>AM</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, fontWeight: 700 }}>Arjun Mehta</div>
            <div style={{ fontSize: 8, color: 'var(--color-text-faint)' }}>+91 98204 55127 · 8m 14s · 21 Jul, 10:12</div>
          </div>
          <span style={{ fontSize: 8, fontWeight: 700, color: '#1FAF64', background: 'var(--color-green-tint)', borderRadius: 6, padding: '3px 8px' }}>Transcribed</span>
        </div>

        <div className={styles.playerBar}>
          <div className={styles.playerRow}>
            <Icon name="play_circle" size={20} color="var(--color-primary)" />
            <Waveform />
            <span className={styles.playerTime}>3:24 / 8:14</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {TRANSCRIPT_LINES.map((l, i) => (
            <div className={styles.transcriptLine} key={i}>
              <div className={styles.transcriptMeta}>
                <span className={l.speaker === 'Rep' ? styles.speakerRep : styles.speakerCustomer}>{l.speaker}</span>
                <span className={styles.transcriptTime}>{l.time}</span>
              </div>
              <div className={styles.transcriptText}>
                {l.highlight ? (
                  <>
                    {l.text}
                    <span className={l.alert ? styles.highlightAlert : styles.highlightWarm}>{l.highlight}</span>
                    {l.after}
                  </>
                ) : (
                  l.text
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.extractRail}>
        <div className={styles.extractHead}>
          <Icon name="auto_awesome" size={15} color="var(--color-primary)" />
          <span className={styles.extractHeadTitle}>Extracted Details</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {EXTRACTED_FIELDS.map((f) => (
            <div key={f.label}>
              <div className={styles.leadFieldLabel}>{f.label}</div>
              <div className={styles.leadFieldValue} style={f.color ? { color: f.color } : undefined}>{f.value}</div>
            </div>
          ))}
        </div>
        <div className={styles.linkBox}>
          <Icon name="link" size={15} color="var(--color-primary)" />
          <div className={styles.linkText}>
            Linked to <span style={{ fontWeight: 700 }}>Deal #4821</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const DEALS = [
  { name: 'Whitefield 3BHK', owner: 'Meera K.', value: '₹1.2Cr', inactive: '2d', inactiveAlert: false, spark: [11, 8, 13], sparkColor: '#FF5F38', risk: 'Low' },
  { name: 'ERP Migration', owner: 'Rahul V.', value: '₹42L', inactive: '11d', inactiveAlert: true, spark: [5, 4, 6], sparkColor: ['#E0C9BC', '#E0C9BC', '#FF5F38'], risk: 'High' },
  { name: 'Clinic CRM', owner: 'Priya N.', value: '₹18L', inactive: '5d', inactiveAlert: false, spark: [9, 6, 7], sparkColor: ['#FF5F38', '#FF5F38', '#E0C9BC'], risk: 'Med' },
  { name: 'US Enterprise', owner: 'James C.', value: '$96K', inactive: '3d', inactiveAlert: false, spark: [12, 10, 13], sparkColor: '#FF5F38', risk: 'Low' },
  { name: 'Campus LMS', owner: 'Meera K.', value: '₹28L', inactive: '14d', inactiveAlert: true, spark: [4, 5, 4], sparkColor: '#E0C9BC', risk: 'High' },
  { name: 'Travel Portal', owner: 'Rahul V.', value: '₹9.5L', inactive: '6d', inactiveAlert: false, spark: [7, 5, 6], sparkColor: ['#FF5F38', '#E0C9BC', '#FF5F38'], risk: 'Med' },
  { name: 'Fintech Rollout', owner: 'James C.', value: '$54K', inactive: '4d', inactiveAlert: false, spark: [10, 12, 9], sparkColor: '#FF5F38', risk: 'Low' },
];

const RISK_STYLE = {
  Low: { color: '#128C4B', bg: '#E4F5EC' },
  Med: { color: '#B07D0B', bg: '#FFF0D6' },
  High: { color: '#B0432A', bg: '#FBE7E1' },
};

export function AISalesInsightsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`} style={{ width: '94%', background: 'var(--color-bg)', position: 'relative', left: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>Deals Needing Attention</div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--color-text-muted)', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 7, padding: '4px 8px' }}>All owners ▾</span>
          <span style={{ fontSize: 8.5, fontWeight: 600, color: 'var(--color-text-muted)', background: '#fff', border: '1px solid var(--color-border)', borderRadius: 7, padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 3 }}>
            <Icon name="filter_list" size={12} color="var(--color-primary)" />
            Filter
          </span>
        </div>
      </div>

      <div className={styles.dealsTableCard}>
        <div className={styles.dealsHeadRow}>
          <span style={{ flex: 1.5 }}>DEAL</span>
          <span style={{ flex: 1 }}>OWNER</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>VALUE</span>
          <span style={{ flex: 0.8, textAlign: 'right' }}>INACTIVE</span>
          <span style={{ flex: 0.9, textAlign: 'center' }}>ENGAGE</span>
          <span style={{ flex: 0.7, textAlign: 'center' }}>RISK</span>
        </div>
        {DEALS.map((d) => (
          <div className={styles.dealsRow} key={d.name}>
            <span style={{ flex: 1.5, fontWeight: 600, minWidth: 0 }}>{d.name}</span>
            <span style={{ flex: 1, color: 'var(--color-text-muted)' }}>{d.owner}</span>
            <span style={{ flex: 0.9, textAlign: 'right', fontWeight: 600 }}>{d.value}</span>
            <span style={{ flex: 0.8, textAlign: 'right', color: d.inactiveAlert ? '#C0503A' : 'var(--color-text-muted)' }}>{d.inactive}</span>
            <span style={{ flex: 0.9 }} className={styles.sparkBars}>
              {d.spark.map((h, i) => (
                <span key={i} className={styles.sparkBar} style={{ height: h, background: Array.isArray(d.sparkColor) ? d.sparkColor[i] : d.sparkColor }} />
              ))}
            </span>
            <span style={{ flex: 0.7, textAlign: 'center' }}>
              <span className={styles.riskTag} style={{ color: RISK_STYLE[d.risk].color, background: RISK_STYLE[d.risk].bg }}>{d.risk}</span>
            </span>
          </div>
        ))}
        <div className={styles.dealsRowTotal}>
          <span style={{ flex: 1.5, fontWeight: 700, color: '#fff' }}>8 deals</span>
          <span style={{ flex: 1, color: 'var(--color-dark-text-muted)' }}>4 owners</span>
          <span style={{ flex: 0.9, textAlign: 'right', fontWeight: 700, color: '#FF7A52' }}>₹2.4Cr</span>
          <span style={{ flex: 0.8, textAlign: 'right', color: 'var(--color-dark-text-muted)' }}>avg 7d</span>
          <span style={{ flex: 0.9, textAlign: 'center', color: 'var(--color-dark-text-muted)', fontSize: 8 }}>—</span>
          <span style={{ flex: 0.7, textAlign: 'center', color: 'var(--color-dark-text-muted)', fontSize: 8 }}>3 hi</span>
        </div>
      </div>

      <div className={styles.recommendBanner}>
        <Icon name="lightbulb" size={16} color="var(--color-primary)" />
        <div className={styles.recommendText}>
          <span style={{ fontWeight: 700 }}>Recommended:</span> Re-engage ERP Migration &amp; Campus LMS today — inactive 11+ days.
        </div>
      </div>
    </div>
  );
}

const STAGE_ROWS = [
  { label: 'Committed', pct: 74, color: '#1FAF64', value: '₹52L' },
  { label: 'Best case', pct: 58, color: '#FF5F38', value: '₹34L' },
  { label: 'Pipeline', pct: 40, color: '#FF9068', value: '₹24L' },
  { label: 'Closed', pct: 32, color: '#000923', value: '₹18L' },
];

const FORECAST_REPS = [
  { name: 'Meera Kapoor', committed: '₹22L', best: '₹31L', closed: '₹8L' },
  { name: 'Rahul Verma', committed: '₹15L', best: '₹24L', closed: '₹5L' },
  { name: 'James Carter', committed: '$18K', best: '$29K', closed: '$6K' },
];

export function AIForecastingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700 }}>Sales Forecast · July FY26</div>
        <span style={{ fontSize: 8.5, fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-tint)', borderRadius: 7, padding: '4px 9px' }}>9 days left</span>
      </div>

      <div className={styles.forecastCard}>
        <div className={styles.forecastHeadRow}>
          <span style={{ fontSize: 10, fontWeight: 700 }}>Target vs Projected</span>
          <span style={{ fontSize: 9, color: 'var(--color-text-faint)' }}>₹1.02Cr / ₹1.2Cr</span>
        </div>
        <div className={styles.forecastTrack}>
          <div className={styles.forecastFill} style={{ width: '85%' }} />
          <div className={styles.forecastMarker} style={{ left: '85%' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
          <span style={{ fontSize: 8, color: 'var(--color-text-muted)', fontWeight: 600 }}>Projected ₹1.02Cr · 85%</span>
          <span style={{ fontSize: 8, fontWeight: 700 }}>Target ₹1.2Cr</span>
        </div>
      </div>

      <div className={styles.forecastCard}>
        <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 10 }}>Revenue by Stage</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {STAGE_ROWS.map((s) => (
            <div className={styles.stageRow} key={s.label}>
              <span className={styles.stageLabel}>{s.label}</span>
              <div className={styles.stageTrack}>
                <div className={styles.stageFill} style={{ width: `${s.pct}%`, background: s.color }} />
              </div>
              <span className={styles.stageValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.repTableCard}>
        <div className={styles.repHeadRow}>
          <span style={{ flex: 1.4 }}>REP</span>
          <span style={{ flex: 1, textAlign: 'right' }}>COMMITTED</span>
          <span style={{ flex: 1, textAlign: 'right' }}>BEST CASE</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>CLOSED</span>
        </div>
        {FORECAST_REPS.map((r) => (
          <div className={styles.repRow} key={r.name}>
            <span style={{ flex: 1.4, fontWeight: 600 }}>{r.name}</span>
            <span style={{ flex: 1, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.committed}</span>
            <span style={{ flex: 1, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.best}</span>
            <span style={{ flex: 0.9, textAlign: 'right', color: '#1FAF64', fontWeight: 700 }}>{r.closed}</span>
          </div>
        ))}
      </div>

      <div className={styles.warningBanner}>
        <Icon name="warning" size={16} color="#C0503A" />
        <div className={styles.warningText}>
          <span style={{ fontWeight: 700 }}>3 deals at risk of going cold</span> — ₹79L inactive 10+ days. Prioritize this week.
        </div>
      </div>
    </div>
  );
}
