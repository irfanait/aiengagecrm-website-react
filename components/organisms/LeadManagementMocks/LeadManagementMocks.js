import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import mcStyles from '../MultichannelMocks/MultichannelMocks.module.css';
import styles from './LeadManagementMocks.module.css';

/** Hero: a freshly captured lead, auto-assigned and greeted within seconds. */
export function NewLeadMock() {
  return (
    <div className={waStyles.card}>
      <div className={styles.notifyHead}>
        <span className={styles.notifyIcon}>
          <Icon name="bolt" size={18} color="#fff" />
        </span>
        <span className={styles.notifyTitle}>New lead captured</span>
        <span className={styles.notifyTag}>JUST NOW</span>
      </div>
      <div style={{ padding: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginBottom: 18 }}>
          <span className={waStyles.avatarCircle} style={{ width: 48, height: 48, fontSize: 16, background: 'var(--color-primary-tint)', color: 'var(--color-primary)' }}>AP</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 15, fontWeight: 600 }}>Arjun Patel</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-subtle)' }}>+91 98••• ••742 · arjun@mail.com</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
          <span className={styles.qualTag} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-blue)', background: 'var(--color-blue-tint)', fontSize: 11.5, padding: '6px 12px' }}>
            <Icon name="thumb_up" size={15} color="var(--color-blue)" />Meta Ads
          </span>
          <span className={styles.qualTag} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-purple)', background: 'var(--color-purple-tint)', fontSize: 11.5, padding: '6px 12px' }}>
            <Icon name="person" size={15} color="var(--color-purple)" />Owner: Meera
          </span>
          <span className={styles.qualTag} style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--color-primary)', background: 'var(--color-primary-tint)', fontSize: 11.5, padding: '6px 12px' }}>
            <Icon name="flag" size={15} color="var(--color-primary)" />Stage: New
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ background: 'var(--color-bg)', borderRadius: 10, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="check_circle" size={17} color="var(--color-green)" />
            <span style={{ fontSize: 12, fontWeight: 500 }}>Auto-assigned to sales rep</span>
          </div>
          <div style={{ background: 'var(--color-bg)', borderRadius: 10, padding: '11px 13px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="check_circle" size={17} color="var(--color-green)" />
            <span style={{ fontSize: 12, fontWeight: 500 }}>WhatsApp welcome sent</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [1] Lead Capture Forms: a website form flowing straight into the CRM. */
export function CaptureFormMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.signalsLabel}>GET A FREE QUOTE</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
        <div className={styles.formField}>Arjun Patel</div>
        <div className={styles.formField}>+91 98••• ••742</div>
        <div className={`${styles.formField} ${styles.formFieldRow}`}>
          Interested in<span style={{ fontWeight: 600, color: 'var(--color-text)' }}>2BHK Flat</span>
        </div>
        <div className={styles.formSubmit}>Submit enquiry</div>
      </div>
      <div className={styles.flowArrowCenter}>
        <Icon name="south" size={22} color="var(--color-dot)" />
      </div>
      <div className={styles.darkResultBar}>
        <span className={styles.darkResultIcon}>
          <Icon name="equalizer" size={17} color="#fff" />
        </span>
        <span className={styles.darkResultLabel}>Added to AiEngage CRM</span>
        <Icon name="check_circle" size={18} color="#4ed08a" />
      </div>
    </div>
  );
}

/** [2] Lead Assignment: a rule routing a matching lead to the right rep. */
export function AssignmentRuleMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead}>
        <Icon name="rule" size={19} color="var(--color-primary)" />
        <span className={styles.cardHeadTitle}>Assignment rule</span>
      </div>
      <div className={styles.ruleBox}>
        <div className={styles.ruleBoxLabel}>IF</div>
        <div className={styles.ruleTagRow}>
          <span className={styles.ruleTag}>Source = Meta Ads</span>
          <span className={styles.ruleTagJoin}>and</span>
          <span className={styles.ruleTag}>City = Ahmedabad</span>
        </div>
      </div>
      <div className={styles.flowArrowCenter} style={{ margin: '2px 0 0' }}>
        <Icon name="south" size={18} color="var(--color-dot)" />
      </div>
      <div className={styles.assignBox}>
        <div className={styles.assignBoxLabel}>ASSIGN TO</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className={waStyles.avatarCircle} style={{ background: 'var(--color-purple)', color: '#fff' }}>MK</span>
          <div>
            <div style={{ fontSize: 12.5, fontWeight: 600 }}>Meera Kapoor</div>
            <div style={{ fontSize: 10.5, color: 'var(--color-text-subtle)' }}>Sales · Ahmedabad</div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div className={styles.ruleLogRow}>
          <Icon name="check_circle" size={15} color="var(--color-green)" />
          Google Ads → Dev Sharma
        </div>
        <div className={styles.ruleLogRow}>
          <Icon name="check_circle" size={15} color="var(--color-green)" />
          Website form → Ravi Nair
        </div>
      </div>
    </div>
  );
}

/** [3] AI Lead Scoring: ranked leads with the signals behind the top score. */
export function LeadScoringMock() {
  const leads = [
    { initials: 'SR', name: 'Sneha Reddy', score: 92, bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', scoreColor: 'var(--color-green)' },
    { initials: 'VS', name: 'Vikram Singh', score: 67, bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', scoreColor: 'var(--color-primary)' },
    { initials: 'KN', name: 'Kavya Nair', score: 34, bg: 'var(--color-border-light)', color: 'var(--color-text-faint)', scoreColor: 'var(--color-text-faint)' },
  ];
  const signals = [
    { label: 'Email opens', pct: 88 },
    { label: 'Call activity', pct: 74 },
    { label: 'WhatsApp', pct: 95 },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead}>
        <Icon name="star" size={19} color="var(--color-primary)" />
        <span className={styles.cardHeadTitle}>Lead scores</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 16 }}>
        {leads.map((l) => (
          <div key={l.name} className={styles.scoreRow}>
            <span className={waStyles.avatarCircle} style={{ width: 32, height: 32, fontSize: 11, background: l.bg, color: l.color }}>{l.initials}</span>
            <span className={styles.scoreName}>{l.name}</span>
            <span className={styles.scoreValue} style={{ color: l.scoreColor }}>{l.score}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: '1px solid var(--color-border-light)', paddingTop: 14 }}>
        <div className={styles.signalsLabel}>SNEHA&apos;S SIGNALS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {signals.map((s) => (
            <div key={s.label} className={styles.signalRow}>
              <span className={styles.signalLabel}>{s.label}</span>
              <div className={styles.signalTrack}>
                <div className={styles.signalFill} style={{ width: `${s.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** [4] Lead Sync: Meta & Google ad leads flowing live into the CRM. */
export function LeadSyncMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
        <div className={waStyles.syncCard} style={{ background: 'var(--color-blue-tint)', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
            <span style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--color-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>M</span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Meta Ads</span>
          </div>
          <div className={waStyles.syncStatus}>
            <span className={waStyles.dotOnline} style={{ width: 6, height: 6 }} />
            Live sync · 34 today
          </div>
        </div>
        <div className={waStyles.syncCard} style={{ background: 'var(--color-primary-tint)', border: 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
            <span style={{ width: 26, height: 26, borderRadius: 7, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800 }}>G</span>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Google Ads</span>
          </div>
          <div className={waStyles.syncStatus}>
            <span className={waStyles.dotOnline} style={{ width: 6, height: 6 }} />
            Live sync · 21 today
          </div>
        </div>
      </div>
      <div className={styles.flowArrowCenter}>
        <Icon name="south" size={22} color="var(--color-dot)" />
      </div>
      <div className={waStyles.crmSyncCard} style={{ marginBottom: 12 }}>
        <span className={waStyles.crmSyncIcon} style={{ borderRadius: 8 }}>
          <Icon name="equalizer" size={17} color="#fff" />
        </span>
        <span style={{ flex: 1, fontSize: 12, fontWeight: 500, color: '#fff' }}>AiEngage CRM</span>
        <span className={styles.notifyTag} style={{ marginLeft: 0 }}>55 SYNCED</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--color-text-muted)' }}>
          <Icon name="bolt" size={14} color="var(--color-blue)" />Priya Sharma · Monsoon Offer · assigned
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--color-text-muted)' }}>
          <Icon name="bolt" size={14} color="var(--color-primary)" />Rohan Gupta · Search - CRM · assigned
        </div>
      </div>
    </div>
  );
}

/** [5] Lead Sources: a donut breakdown of where leads come from. */
export function LeadSourcesMock() {
  const sources = [
    { label: 'Meta Ads', value: 438, color: 'var(--color-primary)' },
    { label: 'Google Ads', value: 309, color: 'var(--color-blue)' },
    { label: 'Website', value: 232, color: 'var(--color-purple)' },
    { label: 'WhatsApp', value: 180, color: 'var(--color-green)' },
    { label: 'Referrals', value: 128, color: '#f0b72a' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead} style={{ marginBottom: 18 }}>
        <Icon name="pie_chart" size={19} color="var(--color-primary)" />
        <span className={styles.cardHeadTitle}>Leads by source</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--color-text-faint)' }}>1,287 total</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
        <div className={styles.donut} style={{ background: 'conic-gradient(var(--color-primary) 0 34%, var(--color-blue) 34% 58%, var(--color-purple) 58% 76%, var(--color-green) 76% 90%, #f0b72a 90% 100%)' }}>
          <div className={styles.donutCenter}>
            <span className={styles.donutPercent}>34%</span>
            <span className={styles.donutCenterLabel}>Meta Ads</span>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 9 }}>
          {sources.map((s) => (
            <div key={s.label} className={styles.legendRow}>
              <span className={styles.legendDot} style={{ background: s.color }} />
              <span className={styles.legendLabel}>{s.label}</span>
              <span className={styles.legendValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** [6] Import Leads: a spreadsheet mapped to CRM fields before a bulk import. */
export function ImportLeadsMock() {
  const mappings = [
    { from: 'Full Name', to: 'Contact name' },
    { from: 'Mobile', to: 'Phone' },
    { from: 'City', to: 'Location' },
    { from: 'Interest', to: 'Product interest' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead}>
        <Icon name="table_view" size={19} color="var(--color-green)" />
        <span className={styles.cardHeadTitle}>leads_2026.xlsx</span>
        <span className={waStyles.pillGreen} style={{ marginLeft: 'auto' }}>842 rows</span>
      </div>
      <div className={styles.signalsLabel}>MAP COLUMNS TO FIELDS</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        {mappings.map((m) => (
          <div key={m.from} className={styles.mapRow}>
            <span className={styles.mapField}>{m.from}</span>
            <Icon name="arrow_forward" size={16} color="var(--color-primary)" />
            <span className={`${styles.mapField} ${styles.mapFieldTarget}`}>{m.to}</span>
          </div>
        ))}
      </div>
      <div className={styles.formSubmit}>Import 842 leads</div>
    </div>
  );
}

/** [7] Round-Robin Assignment: incoming leads rotating evenly across reps. */
export function RoundRobinMock() {
  const reps = [
    { initials: 'MK', name: 'Meera', bg: 'var(--color-purple)', ring: true },
    { initials: 'DS', name: 'Dev', bg: 'var(--color-blue)' },
    { initials: 'RN', name: 'Ravi', bg: 'var(--color-green)' },
  ];
  const log = [
    { lead: 'Lead #1281', rep: 'Meera', color: 'var(--color-purple)' },
    { lead: 'Lead #1282', rep: 'Dev', color: 'var(--color-blue)' },
    { lead: 'Lead #1283', rep: 'Ravi', color: 'var(--color-green)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead} style={{ marginBottom: 18 }}>
        <Icon name="autorenew" size={19} color="var(--color-primary)" />
        <span className={styles.cardHeadTitle}>Round-robin rotation</span>
      </div>
      <div className={styles.rotationRow}>
        {reps.map((r, i) => (
          <div key={r.name} style={{ display: 'contents' }}>
            <div className={styles.rotationAvatarCol}>
              <span className={styles.rotationAvatar} style={{ background: r.bg, border: r.ring ? '3px solid var(--color-primary-highlight)' : undefined }}>{r.initials}</span>
              <span className={styles.rotationName}>{r.name}</span>
            </div>
            {i < reps.length - 1 && <Icon name="arrow_forward" size={18} color="var(--color-dot)" />}
          </div>
        ))}
        <Icon name="restart_alt" size={18} color="var(--color-dot)" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        {log.map((l) => (
          <div key={l.lead} className={styles.rotationLogRow}>
            <Icon name="arrow_forward" size={15} color={l.color} />
            <span style={{ flex: 1 }}>
              {l.lead} → <b>{l.rep}</b>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [8] AI Lead Qualification: leads triaged by intent, urgency, or exploration. */
export function LeadQualificationMock() {
  const leads = [
    { initials: 'SR', name: 'Sneha Reddy', tag: 'HIGH-INTENT', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)', avatarBg: 'var(--color-green-tint)', avatarColor: 'var(--color-whatsapp)', desc: 'Asked for pricing & site visit · budget confirmed', alert: false },
    { initials: 'VS', name: 'Vikram Singh', tag: 'URGENT', tagBg: '#ffe2d3', tagColor: 'var(--color-primary-hover)', avatarBg: 'var(--color-primary-tint)', avatarColor: 'var(--color-primary)', desc: 'Wants a callback today · comparing options', alert: true },
    { initials: 'KN', name: 'Kavya Nair', tag: 'EXPLORING', tagBg: 'var(--color-border-light)', tagColor: 'var(--color-text-faint)', avatarBg: 'var(--color-border-light)', avatarColor: 'var(--color-text-faint)', desc: 'Early research · no timeline yet', alert: false },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.cardHead}>
        <Icon name="smart_toy" size={19} color="var(--color-primary)" />
        <span className={styles.cardHeadTitle}>AI qualification</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {leads.map((l) => (
          <div key={l.name} className={`${styles.qualCard} ${l.alert ? styles.qualCardAlert : ''}`}>
            <div className={styles.qualCardHead}>
              <span className={waStyles.avatarCircle} style={{ width: 30, height: 30, fontSize: 11, background: l.avatarBg, color: l.avatarColor }}>{l.initials}</span>
              <span className={styles.qualCardName}>{l.name}</span>
              <span className={styles.qualTag} style={{ background: l.tagBg, color: l.tagColor }}>{l.tag}</span>
            </div>
            <div className={styles.qualDesc}>{l.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
