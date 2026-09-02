import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './AdsAnalyticsMocks.module.css';

export function AdsOverviewMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ width: 500 }}>
      <div className={styles.panelHead}>
        <div className={styles.panelHeadLeft}>
          <Icon name="query_stats" size={16} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Advertising Overview</span>
        </div>
        <span className={waStyles.statHeadTagMuted}>Last 30 days</span>
      </div>

      <div className={waStyles.cardPadded}>
        <div className={styles.statGrid4} style={{ marginBottom: 16 }}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Spend</div>
            <div className={styles.statValue}>₹4.8L</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Leads</div>
            <div className={styles.statValue}>1,204</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>CPL</div>
            <div className={styles.statValue}>₹399</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>ROAS</div>
            <div className={styles.statValue} style={{ color: 'var(--color-whatsapp)' }}>4.6x</div>
          </div>
        </div>

        <div className={styles.colLabel}>LEADS BY PLATFORM</div>
        <div className={waStyles.miniChart} style={{ marginBottom: 8 }}>
          {[38, 52, 44, 61, 49, 58, 66, 54, 60, 71, 63, 68].map((h, i) => (
            <div key={i} className={`${waStyles.miniBar} ${i === 9 ? waStyles.miniBarPeak : i % 3 === 0 ? waStyles.miniBarStrong : ''}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className={styles.legendRow}>
          <span className={styles.legendItem}><span className={styles.legendDot} style={{ background: 'var(--color-purple)' }} />Meta</span>
          <span className={styles.legendItem}><span className={styles.legendDot} style={{ background: 'var(--color-purple-tint-strong)' }} />Google</span>
        </div>
      </div>

      <div className={styles.footRow}>
        <span>Meta &amp; Google Lead Ads connected</span>
        <span className={styles.viewAll}>View all</span>
      </div>
    </div>
  );
}

const META_FORMS = [
  { name: 'Whitefield Launch Form', meta: 'Facebook · 312 leads' },
  { name: 'Free Consultation Form', meta: 'Instagram · 198 leads' },
];

export function MetaLeadAdsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 460 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className={styles.panelHeadTitle}>Meta Lead Ads</span>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>Connected</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {META_FORMS.map((f) => (
          <div className={styles.rowCard} key={f.name}>
            <span className={styles.rowIcon} style={{ background: 'var(--color-purple-tint)' }}>
              <Icon name="ads_click" size={15} color="var(--color-purple)" />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.rowTitle}>{f.name}</div>
              <div className={styles.rowMeta}>{f.meta}</div>
            </div>
            <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>Active</span>
          </div>
        ))}
      </div>

      <div className={styles.colLabel}>LIVE LEAD CAPTURE</div>
      <div className={styles.liveLeadRow}>
        <span className={waStyles.avatarCircle} style={{ background: 'var(--color-primary-tint)', color: 'var(--color-primary)', width: 30, height: 30, fontSize: 11 }}>KR</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.rowTitle}>Kavya Reddy</div>
          <div className={styles.rowMeta}>Whitefield Launch Form · just now</div>
        </div>
        <span className={styles.liveLeadTag}>
          <Icon name="sync" size={12} color="var(--color-whatsapp)" />
          Synced
        </span>
      </div>
    </div>
  );
}

const FIELD_MAP = [
  { from: 'Full name', to: 'Contact Name' },
  { from: 'Phone number', to: 'Mobile' },
  { from: 'Email', to: 'Email' },
  { from: 'Preferred city', to: 'Location' },
];

export function GoogleLeadAdsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 460 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
        <Icon name="ads_click" size={16} color="var(--color-primary)" />
        <span className={styles.panelHeadTitle}>Google Lead Form — Field Mapping</span>
      </div>

      <div className={styles.fieldMapHead}>
        <span>GOOGLE FORM FIELD</span>
        <span>CRM FIELD</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 14 }}>
        {FIELD_MAP.map((f) => (
          <div className={styles.fieldMapRow} key={f.from}>
            <span className={styles.fieldMapFrom}>{f.from}</span>
            <Icon name="arrow_forward" size={14} color="var(--color-text-faint)" />
            <span className={styles.fieldMapTo}>{f.to}</span>
          </div>
        ))}
      </div>

      <div className={styles.footRowSimple}>Synced 4 minutes ago · 86 leads today</div>
    </div>
  );
}

const OFFLINE_SOURCES = [
  { icon: 'newspaper', name: 'Times of India — Print', meta: 'Newspaper · manually tracked', leads: '42 leads' },
  { icon: 'radio', name: 'Radio City Spot', meta: 'Radio · manually tracked', leads: '17 leads' },
  { icon: 'signpost', name: 'ORR Hoarding — Site 4', meta: 'Outdoor · manually tracked', leads: '9 leads' },
  { icon: 'event', name: 'Property Expo 2026', meta: 'Event · manually tracked', leads: '63 leads' },
];

export function OfflineCampaignsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className={styles.panelHeadTitle}>Custom Advertising Sources</span>
        <span className={styles.addSourceBtn}>
          <Icon name="add" size={13} color="var(--color-primary)" />
          Add Source
        </span>
      </div>
      <div className={styles.sourceGrid}>
        {OFFLINE_SOURCES.map((s) => (
          <div className={styles.sourceCard} key={s.name}>
            <span className={styles.sourceIcon}>
              <Icon name={s.icon} size={16} color="var(--color-text-faint)" />
            </span>
            <div className={styles.rowTitle}>{s.name}</div>
            <div className={styles.rowMeta}>{s.meta}</div>
            <div className={styles.sourceLeads}>{s.leads}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const INTEGRATIONS = [
  { icon: 'group', name: 'Meta Ads', status: 'Connected', on: true },
  { icon: 'ads_click', name: 'Google Ads', status: 'Connected', on: true },
  { icon: 'sync', name: 'Custom Source', status: 'Syncing', on: false },
  { icon: 'tune', name: 'Conversion Settings', status: 'Configured', on: true },
  { icon: 'menu_book', name: 'Docs', status: 'View guides', on: false },
];

export function AdIntegrationsMock() {
  return (
    <div className={styles.darkShell}>
      <div className={styles.darkHead}>
        <span className={styles.darkSearch}>
          <Icon name="search" size={14} color="var(--color-dark-text-muted)" />
          Search integrations…
        </span>
        <span className={styles.darkChip}>Advertising ▾</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {INTEGRATIONS.map((i) => (
          <div className={styles.darkRow} key={i.name}>
            <span className={styles.darkRowIcon}>
              <Icon name={i.icon} size={15} color="var(--color-dark-text)" />
            </span>
            <span className={styles.darkRowName}>{i.name}</span>
            <span className={i.on ? styles.darkStatusOn : styles.darkStatusMuted}>{i.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const OFFLINE_ROWS = [
  { channel: 'Newspapers', spend: '₹85,000', leads: '42', cpl: '₹2,024' },
  { channel: 'Radio', spend: '₹40,000', leads: '17', cpl: '₹2,353' },
  { channel: 'Hoardings', spend: '₹1,20,000', leads: '9', cpl: '₹13,333' },
  { channel: 'Events & Exhibitions', spend: '₹2,10,000', leads: '63', cpl: '₹3,333' },
  { channel: 'Referral Partnerships', spend: '₹0', leads: '28', cpl: '₹0' },
];

export function OfflineReportingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 520 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className={styles.panelHeadTitle}>Offline Channel Report</span>
        <Icon name="signpost" size={16} color="var(--color-text-faint)" />
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>CHANNEL</th>
              <th className={styles.th}>SPEND</th>
              <th className={styles.th}>LEADS</th>
              <th className={styles.th}>CPL</th>
            </tr>
          </thead>
          <tbody>
            {OFFLINE_ROWS.map((r) => (
              <tr className={styles.tr} key={r.channel}>
                <td className={styles.tdStrong}>{r.channel}</td>
                <td className={styles.td}>{r.spend}</td>
                <td className={styles.td}>{r.leads}</td>
                <td className={styles.td}>{r.cpl}</td>
              </tr>
            ))}
            <tr className={styles.trTotal}>
              <td className={styles.tdStrong}>Total Offline</td>
              <td className={styles.tdStrong}>₹4,55,000</td>
              <td className={styles.tdStrong}>159</td>
              <td className={styles.tdStrong}>₹2,862</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CPL_ROWS = [
  { name: 'Whitefield Launch (Meta)', value: 287, cpl: '₹287' },
  { name: 'Free Consultation (Meta)', value: 410, cpl: '₹410' },
  { name: 'Search — Home Loans (Google)', value: 512, cpl: '₹512' },
  { name: 'Display Retargeting (Google)', value: 889, cpl: '₹889' },
  { name: 'Property Expo (Offline)', value: 3333, cpl: '₹3,333' },
];
const CPL_MAX = 3333;

export function CostPerLeadMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className={styles.panelHeadTitle}>Cost Per Lead by Campaign</span>
        <span className={waStyles.statHeadTagMuted}>₹ INR</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
        {CPL_ROWS.map((r) => (
          <div key={r.name}>
            <div className={styles.barRowLabel}>
              <span>{r.name}</span>
              <span className={styles.barRowValue}>{r.cpl}</span>
            </div>
            <div className={styles.barTrack}>
              <div className={styles.barFill} style={{ width: `${(r.value / CPL_MAX) * 100}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.tipBox}>
        <Icon name="lightbulb" size={16} color="var(--color-yellow-icon)" />
        <span className={styles.tipText}>Whitefield Launch has the lowest CPL this month — consider reallocating budget.</span>
      </div>
    </div>
  );
}

export function RevenueRoasMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span className={styles.panelHeadTitle}>Revenue From Ads</span>
        <span className={waStyles.statHeadTag}>4.6x ROAS ▲</span>
      </div>
      <div className={waStyles.miniChart} style={{ marginBottom: 16 }}>
        {[30, 40, 35, 48, 44, 52, 58, 55, 62, 68, 64, 71].map((h, i) => (
          <div key={i} className={`${waStyles.miniBar} ${i === 11 ? waStyles.miniBarPeak : ''}`} style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className={styles.colLabel}>REVENUE BY PLATFORM</div>
      <div className={styles.statGrid3}>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Meta</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>₹86.4L</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Google</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>₹57.1L</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>Offline</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>₹23.8L</div>
        </div>
      </div>
    </div>
  );
}

const COMPARISON_ROWS = [
  { platform: 'Meta Ads', spend: '₹2.1L', leads: '510', cpl: '₹412', revenue: '₹86.4L', roas: '4.1x' },
  { platform: 'Google Ads', spend: '₹2.3L', leads: '535', cpl: '₹430', revenue: '₹57.1L', roas: '2.5x' },
  { platform: 'Offline Sources', spend: '₹4.6L', leads: '159', cpl: '₹2,862', revenue: '₹23.8L', roas: '0.5x' },
];

export function PlatformComparisonMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 560 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className={styles.panelHeadTitle}>Platform Comparison · July FY26</span>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>PLATFORM</th>
              <th className={styles.th}>SPEND</th>
              <th className={styles.th}>LEADS</th>
              <th className={styles.th}>CPL</th>
              <th className={styles.th}>REVENUE</th>
              <th className={styles.th}>ROAS</th>
            </tr>
          </thead>
          <tbody>
            {COMPARISON_ROWS.map((r) => (
              <tr className={styles.tr} key={r.platform}>
                <td className={styles.tdStrong}>{r.platform}</td>
                <td className={styles.td}>{r.spend}</td>
                <td className={styles.td}>{r.leads}</td>
                <td className={styles.td}>{r.cpl}</td>
                <td className={styles.td}>{r.revenue}</td>
                <td className={styles.td} style={{ color: 'var(--color-whatsapp)', fontWeight: 600 }}>{r.roas}</td>
              </tr>
            ))}
            <tr className={styles.trTotal}>
              <td className={styles.tdStrong}>Total</td>
              <td className={styles.tdStrong}>₹9.0L</td>
              <td className={styles.tdStrong}>1,204</td>
              <td className={styles.tdStrong}>₹748</td>
              <td className={styles.tdStrong}>₹1.67Cr</td>
              <td className={styles.tdStrong}>4.6x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const CAMPAIGN_ROWS = [
  { name: 'Whitefield Launch', spend: '₹90K', leads: '312', cpl: '₹287' },
  { name: 'Free Consultation', spend: '₹81K', leads: '198', cpl: '₹410' },
  { name: 'Search — Home Loans', spend: '₹1.1L', leads: '214', cpl: '₹512' },
];

export function CampaignReportsMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 520 }}>
      <div className={styles.toolbarRow}>
        <span className={styles.darkSearch} style={{ flex: 1 }}>
          <Icon name="search" size={14} color="var(--color-text-faint)" />
          Search campaigns, accounts…
        </span>
        <span className={styles.toolbarBtn}>
          <Icon name="view_column" size={14} color="var(--color-text-muted)" />
        </span>
        <span className={styles.toolbarBtn}>
          <Icon name="download" size={14} color="var(--color-text-muted)" />
        </span>
      </div>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>CAMPAIGN</th>
              <th className={styles.th}>SPEND</th>
              <th className={styles.th}>LEADS</th>
              <th className={styles.th}>CPL</th>
            </tr>
          </thead>
          <tbody>
            {CAMPAIGN_ROWS.map((r) => (
              <tr className={styles.tr} key={r.name}>
                <td className={styles.tdStrong}>{r.name}</td>
                <td className={styles.td}>{r.spend}</td>
                <td className={styles.td}>{r.leads}</td>
                <td className={styles.td}>{r.cpl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.footRowSimple}>Showing 3 of 24 campaigns · 25 / page</div>
    </div>
  );
}
