import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './IntegrationsPageMocks.module.css';

const HUB_NODES = [
  { name: 'Meta Ads', logo: '/brand/integrations/meta.svg', status: 'Connected', pos: { left: 14, top: 14 } },
  { name: 'Google Ads', logo: '/brand/integrations/googleads.svg', status: 'Connected', pos: { right: 14, top: 14 } },
  { name: 'WhatsApp', logo: '/brand/integrations/whatsapp.svg', status: 'Connected', pos: { left: 6, top: '50%', transform: 'translateY(-50%)' } },
  { name: 'Stripe', logo: '/brand/integrations/stripe.svg', status: 'Connected', pos: { right: 6, top: '50%', transform: 'translateY(-50%)' } },
  { name: 'Razorpay', logo: '/brand/integrations/razorpay.svg', status: 'Connected', pos: { left: 14, bottom: 8 } },
  { name: 'Webhooks', icon: 'webhook', status: 'Syncing…', alert: true, pos: { right: 14, bottom: 8 } },
];

/** Hero: a hub-and-spoke diagram of AiEngage connected to its most-used integrations. */
export function IntegrationsHubMock() {
  return (
    <div className={waStyles.card} style={{ width: 490, padding: 22 }}>
      <div className={styles.hubHead}>
        <span className={styles.hubTitle}>Connected Apps</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>10 active</span>
      </div>
      <div className={styles.hubStage}>
        <div className={styles.hubCenter}>
          <Icon name="hub" size={26} color="var(--color-primary-dark-accent)" />
          <span className={styles.hubCenterLabel}>AiEngage</span>
        </div>
        <svg viewBox="0 0 460 250" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <g stroke="#e8c7b8" strokeWidth="1.5" strokeDasharray="4 4">
            <line x1="230" y1="125" x2="70" y2="42" />
            <line x1="230" y1="125" x2="390" y2="42" />
            <line x1="230" y1="125" x2="48" y2="125" />
            <line x1="230" y1="125" x2="412" y2="125" />
            <line x1="230" y1="125" x2="70" y2="208" />
            <line x1="230" y1="125" x2="390" y2="208" />
          </g>
        </svg>
        {HUB_NODES.map((n) => (
          <div key={n.name} className={styles.hubNode} style={n.pos}>
            {n.logo ? (
              <Image src={n.logo} alt={n.name} width={20} height={20} className={styles.hubNodeIcon} />
            ) : (
              <Icon name={n.icon} size={18} color="var(--color-primary)" />
            )}
            <div>
              <div className={styles.hubNodeName}>{n.name}</div>
              <div className={n.alert ? styles.hubNodeStatusAlert : styles.hubNodeStatus}>● {n.status}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SYNC_ROWS = [
  { name: 'Meta Ads', logo: '/brand/integrations/meta.svg', lastSync: '2 min ago', records: '1,284', status: 'Synced', ok: true },
  { name: 'Google Ads', logo: '/brand/integrations/googleads.svg', lastSync: '8 min ago', records: '942', status: 'Synced', ok: true },
  { name: 'WhatsApp', logo: '/brand/integrations/whatsapp.svg', lastSync: 'just now', records: '3,610', status: 'Synced', ok: true },
  { name: 'Stripe', logo: '/brand/integrations/stripe.svg', lastSync: '1 hr ago', records: '18', status: 'Failed', ok: false },
  { name: 'Razorpay', logo: '/brand/integrations/razorpay.svg', lastSync: '12 min ago', records: '206', status: 'Synced', ok: true },
];

const SYNC_ACTIVITY = [
  { ok: true, text: <>New lead <b>Rohan Sharma</b> · +91 98250 11234 synced from Meta Ads</>, time: '2 min ago' },
  { ok: true, text: <>Payment ₹42,000 recorded for <b>Priya Nair</b> via Razorpay</>, time: '12 min ago' },
  { ok: false, text: <>Stripe sync failed for <b>James Carter</b> · $1,200 — retry needed</>, time: '1 hr ago' },
  { ok: true, text: <>Webhook fired · deal stage changed for <b>Meera Kapoor</b></>, time: '1 hr ago' },
];

/** Full-width band: a sync dashboard showing per-source status, stats and recent activity. */
export function DataSyncMock() {
  return (
    <div className={styles.syncPanel}>
      <div className={styles.syncHead}>
        <span className={styles.syncTitle}>Sync Dashboard</span>
        <div className={styles.syncChipRow}>
          <span className={styles.syncChip}>Last 24 hours ▾</span>
          <span className={styles.syncChip}>
            <Icon name="refresh" size={14} color="var(--color-primary)" />Sync now
          </span>
        </div>
      </div>
      <div className={styles.syncGrid}>
        <div className={styles.syncTable}>
          <div className={styles.syncTableHead}>
            <span style={{ flex: 1.5 }}>SOURCE</span>
            <span style={{ flex: 1 }}>LAST SYNC</span>
            <span style={{ flex: 0.8, textAlign: 'right' }}>RECORDS</span>
            <span style={{ flex: 0.9, textAlign: 'right' }}>STATUS</span>
          </div>
          {SYNC_ROWS.map((r) => (
            <div key={r.name} className={`${styles.syncRow} ${!r.ok ? styles.syncRowAlert : ''}`}>
              <span style={{ flex: 1.5, display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className={r.ok ? styles.syncSourceIcon : styles.syncSourceIconAlert}>
                  <Image src={r.logo} alt={r.name} width={15} height={15} className={styles.syncSourceImg} />
                </span>
                <span style={{ fontWeight: 600 }}>{r.name}</span>
              </span>
              <span style={{ flex: 1, color: r.ok ? 'var(--color-text-muted)' : '#c0503a', fontWeight: r.ok ? 400 : 600 }}>{r.lastSync}</span>
              <span style={{ flex: 0.8, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.records}</span>
              <span style={{ flex: 0.9, textAlign: 'right' }}>
                <span className={waStyles.tagPill} style={{ color: r.ok ? 'var(--color-whatsapp)' : '#c0503a', background: r.ok ? 'var(--color-green-tint)' : '#fbe7e1' }}>{r.status}</span>
              </span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className={styles.syncStatGrid}>
            <div className={styles.syncStatBox}>
              <div className={styles.syncStatLabel}>RECORDS TODAY</div>
              <div className={styles.syncStatValue}>6,060</div>
            </div>
            <div className={styles.syncStatBox}>
              <div className={styles.syncStatLabel}>SUCCESS RATE</div>
              <div className={styles.syncStatValue} style={{ color: 'var(--color-whatsapp)' }}>99.7%</div>
            </div>
          </div>
          <div className={styles.syncActivityBox}>
            <div className={styles.syncActivityTitle}>Recent Activity</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {SYNC_ACTIVITY.map((a, i) => (
                <div key={`${a.time}-${i}`} className={styles.syncActivityRow}>
                  <span className={styles.syncActivityDot} style={{ background: a.ok ? 'var(--color-whatsapp)' : '#c0503a' }} />
                  <div>
                    <div className={styles.syncActivityText}>{a.text}</div>
                    <div className={styles.syncActivityTime}>{a.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
