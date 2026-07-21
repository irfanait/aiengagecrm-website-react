import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './ReportsAnalyticsMocks.module.css';

/** Hero: a business overview panel with 4 KPIs and a two-year revenue trend chart. */
export function AnalyticsWorkspaceMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Business Overview</span>
        <span className={styles.headChip}>
          <Icon name="calendar_today" size={14} color="var(--color-primary)" />Last 30 days ▾
        </span>
      </div>
      <div className={styles.statGrid4}>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>NEW LEADS</div>
          <div className={styles.statValue}>1,284</div>
          <div className={styles.statDelta} style={{ color: 'var(--color-green)' }}>▲ 12.4%</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>PIPELINE</div>
          <div className={styles.statValue}>₹4.2Cr</div>
          <div className={styles.statDelta} style={{ color: 'var(--color-green)' }}>▲ 8.1%</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>WON</div>
          <div className={styles.statValue}>₹1.2Cr</div>
          <div className={styles.statDelta} style={{ color: 'var(--color-green)' }}>▲ 5.6%</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>WIN RATE</div>
          <div className={styles.statValue}>28%</div>
          <div className={styles.statDelta} style={{ color: '#c0503a' }}>▼ 1.2%</div>
        </div>
      </div>
      <div className={styles.chartCard}>
        <div className={styles.chartCardHead}>
          <span className={styles.chartCardTitle}>Revenue Trend</span>
          <span className={styles.chartCardMeta}>₹ in Lakhs</span>
        </div>
        <svg viewBox="0 0 460 130" style={{ width: '100%', height: 'auto', display: 'block' }}>
          <line x1="34" y1="12" x2="452" y2="12" stroke="#efe8dc" strokeWidth="1" />
          <line x1="34" y1="45" x2="452" y2="45" stroke="#efe8dc" strokeWidth="1" />
          <line x1="34" y1="78" x2="452" y2="78" stroke="#efe8dc" strokeWidth="1" />
          <line x1="34" y1="111" x2="452" y2="111" stroke="#e8e0d2" strokeWidth="1" />
          <text x="6" y="15" fontSize="8" fill="#95887a">120</text>
          <text x="6" y="48" fontSize="8" fill="#95887a">80</text>
          <text x="6" y="81" fontSize="8" fill="#95887a">40</text>
          <text x="10" y="114" fontSize="8" fill="#95887a">0</text>
          <polygon points="34,92 90,80 146,86 202,60 258,66 314,42 370,48 426,22 452,28 452,111 34,111" fill="#ff5f38" opacity="0.1" />
          <polyline points="34,92 90,80 146,86 202,60 258,66 314,42 370,48 426,22 452,28" fill="none" stroke="#ff5f38" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="34,104 90,98 146,100 202,90 258,92 314,84 370,86 426,74 452,78" fill="none" stroke="#e8c7b8" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="426" cy="22" r="3.5" fill="#ff5f38" />
        </svg>
        <div className={styles.chartMonthRow}>
          <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
        </div>
        <div className={styles.chartLegendRow}>
          <span className={styles.chartLegendItem}>
            <span className={styles.legendSwatch} style={{ background: '#ff5f38' }} />This year
          </span>
          <span className={styles.chartLegendItem}>
            <span className={styles.legendSwatch} style={{ background: '#e8c7b8' }} />Last year
          </span>
        </div>
      </div>
    </div>
  );
}

/** [1] Dashboards: KPI tiles, a leads-vs-deals line chart, a stage donut, and recent activity. */
export function DashboardMock() {
  const activity = [
    { color: 'var(--color-green)', text: 'Rohan Sharma — deal moved to Won', time: '2m' },
    { color: 'var(--color-primary)', text: 'Priya Nair — new lead assigned', time: '14m' },
    { color: '#c0503a', text: 'Emily Carter — follow-up overdue', time: '1h' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>My Dashboard</span>
        <div className={styles.headChipRow}>
          <span className={styles.headChip} style={{ padding: '4px 9px', fontSize: 9.5 }}>Last 30 days ▾</span>
          <span className={styles.headChipDashed}>
            <Icon name="add" size={13} />Widget
          </span>
        </div>
      </div>
      <div className={styles.statGrid4} style={{ marginBottom: 11 }}>
        <div className={styles.statBox} style={{ padding: '9px 10px' }}>
          <div className={styles.statLabel}>NEW LEADS</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>1,284</div>
        </div>
        <div className={styles.statBox} style={{ padding: '9px 10px' }}>
          <div className={styles.statLabel}>ACTIVE DEALS</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>342</div>
        </div>
        <div className={styles.statBox} style={{ padding: '9px 10px' }}>
          <div className={styles.statLabel}>FOLLOW-UPS</div>
          <div className={styles.statValue} style={{ fontSize: 15, color: '#c0503a' }}>57</div>
        </div>
        <div className={styles.statBox} style={{ padding: '9px 10px' }}>
          <div className={styles.statLabel}>REVENUE</div>
          <div className={styles.statValue} style={{ fontSize: 15 }}>₹1.2Cr</div>
        </div>
      </div>
      <div className={styles.dualRow}>
        <div className={styles.dualPanel} style={{ flex: 1.5 }}>
          <div className={styles.dualPanelTitle}>Leads vs Deals</div>
          <svg viewBox="0 0 250 92" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <line x1="4" y1="20" x2="246" y2="20" stroke="#efe8dc" strokeWidth="1" />
            <line x1="4" y1="46" x2="246" y2="46" stroke="#efe8dc" strokeWidth="1" />
            <line x1="4" y1="72" x2="246" y2="72" stroke="#e8e0d2" strokeWidth="1" />
            <polyline points="4,60 44,52 84,56 124,38 164,44 204,26 244,30" fill="none" stroke="#ff5f38" strokeWidth="2.5" strokeLinejoin="round" />
            <polyline points="4,70 44,66 84,64 124,58 164,60 204,52 244,50" fill="none" stroke="#e8c7b8" strokeWidth="2" />
          </svg>
        </div>
        <div className={styles.dualPanel} style={{ flex: 1 }}>
          <div className={styles.dualPanelTitle}>Deals by Stage</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg viewBox="0 0 42 42" style={{ width: 64, height: 64 }}>
              <circle cx="21" cy="21" r="15.5" fill="none" stroke="#e8e0d2" strokeWidth="7" />
              <circle cx="21" cy="21" r="15.5" fill="none" stroke="#ff5f38" strokeWidth="7" strokeDasharray="44 97" transform="rotate(-90 21 21)" />
              <circle cx="21" cy="21" r="15.5" fill="none" stroke="#ff7a52" strokeWidth="7" strokeDasharray="28 97" strokeDashoffset="-44" transform="rotate(-90 21 21)" />
              <circle cx="21" cy="21" r="15.5" fill="none" stroke="#1faf64" strokeWidth="7" strokeDasharray="20 97" strokeDashoffset="-72" transform="rotate(-90 21 21)" />
            </svg>
            <div className={styles.donutLegend}>
              <div className={styles.donutLegendRow}>
                <span className={styles.legendDot} style={{ background: '#ff5f38' }} />New 45%
              </div>
              <div className={styles.donutLegendRow}>
                <span className={styles.legendDot} style={{ background: '#ff7a52' }} />Neg. 29%
              </div>
              <div className={styles.donutLegendRow}>
                <span className={styles.legendDot} style={{ background: '#1faf64' }} />Won 26%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activityPanel}>
        <div className={styles.activityTitle}>Recent Activity</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {activity.map((a) => (
            <div key={a.text} className={styles.activityRow}>
              <span className={styles.activityDot} style={{ background: a.color }} />
              <span style={{ flex: 1, color: 'var(--color-text-secondary)' }}>{a.text}</span>
              <span className={styles.activityTime}>{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** [2] Sales Reports: per-pipeline conversion table with a totals row. */
export function SalesReportsMock() {
  const rows = [
    { name: 'Real Estate Sales', deals: 128, value: '₹2.4Cr', conv: '31%', good: true },
    { name: 'IT Services', deals: 86, value: '₹94.5L', conv: '27%', good: true },
    { name: 'US Enterprise', deals: 42, value: '$186K', conv: '24%', good: true },
    { name: 'Healthcare', deals: 64, value: '₹58.2L', conv: '18%', good: false },
    { name: 'Education', deals: 51, value: '₹32.0L', conv: '15%', good: false },
    { name: 'Tours & Travels', deals: 37, value: '₹21.4L', conv: '22%', good: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Sales Report · By Pipeline</span>
        <div className={styles.headChipRow}>
          <span className={styles.headChip} style={{ background: '#fff', fontSize: 9.5, padding: '4px 9px' }}>Q3 FY26 ▾</span>
          <span className={styles.headChip} style={{ background: '#fff', fontSize: 9.5, padding: '4px 9px' }}>
            <Icon name="download" size={13} color="var(--color-primary)" />Export
          </span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span style={{ flex: 1.6 }}>PIPELINE</span>
          <span style={{ flex: 0.7, textAlign: 'right' }}>DEALS</span>
          <span style={{ flex: 1.1, textAlign: 'right' }}>VALUE</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>CONV %</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className={styles.tableRow}>
            <span style={{ flex: 1.6, fontWeight: 600 }}>{r.name}</span>
            <span style={{ flex: 0.7, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.deals}</span>
            <span style={{ flex: 1.1, textAlign: 'right', fontWeight: 600 }}>{r.value}</span>
            <span style={{ flex: 0.9, textAlign: 'right', fontWeight: 700, color: r.good ? 'var(--color-green)' : '#c0503a' }}>{r.conv}</span>
          </div>
        ))}
        <div className={styles.tableRowTotal}>
          <span style={{ flex: 1.6, fontWeight: 700, color: '#fff' }}>Total</span>
          <span style={{ flex: 0.7, textAlign: 'right', fontWeight: 700, color: '#fff' }}>408</span>
          <span style={{ flex: 1.1, textAlign: 'right', fontWeight: 700, color: 'var(--color-primary-dark-accent)' }}>₹4.2Cr</span>
          <span style={{ flex: 0.9, textAlign: 'right', fontWeight: 700, color: '#fff' }}>26%</span>
        </div>
      </div>
      <div className={styles.statGrid3}>
        <div className={styles.statBoxWhite}>
          <div className={styles.statLabel}>AVG DEAL VALUE</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>₹1.03L</div>
        </div>
        <div className={styles.statBoxWhite}>
          <div className={styles.statLabel}>EXPECTED REVENUE</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>₹1.9Cr</div>
        </div>
        <div className={styles.statBoxWhite}>
          <div className={styles.statLabel}>LOST DEALS</div>
          <div style={{ fontSize: 13, fontWeight: 700, color: '#c0503a' }}>96</div>
        </div>
      </div>
    </div>
  );
}

/** [3] Campaign Reports: delivery/open rates per channel plus a per-campaign table. */
export function CampaignReportsMock() {
  const channels = [
    { name: 'Email', meta: 'Delivered 96% · Open 41%', delivered: 96, opened: 41 },
    { name: 'WhatsApp', meta: 'Delivered 99% · Read 78%', delivered: 99, opened: 78 },
    { name: 'SMS', meta: 'Delivered 94% · Open 29%', delivered: 94, opened: 29 },
  ];
  const campaigns = [
    { name: 'Diwali Offer — WA', sent: '8,420', ctr: '12.4%', leads: '318', good: true },
    { name: 'Q3 Newsletter — Email', sent: '15,200', ctr: '6.1%', leads: '204', good: false },
    { name: 'Renewal Reminder — SMS', sent: '3,650', ctr: '3.2%', leads: '57', good: false },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Campaign Performance</span>
        <span className={styles.headChip} style={{ fontSize: 9.5, padding: '4px 9px' }}>This month ▾</span>
      </div>
      <div className={styles.chartCard} style={{ marginBottom: 12 }}>
        <div className={styles.dualPanelTitle}>Delivery &amp; Open by Channel</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {channels.map((c) => (
            <div key={c.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, marginBottom: 4 }}>
                <span style={{ fontWeight: 600 }}>{c.name}</span>
                <span style={{ color: 'var(--color-text-faint)' }}>{c.meta}</span>
              </div>
              <div style={{ height: 9, borderRadius: 5, background: 'var(--color-border)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${c.delivered}%`, background: '#e8c7b8', borderRadius: 5 }} />
                <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${c.opened}%`, background: 'var(--color-primary)', borderRadius: 5 }} />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.chartLegendRow}>
          <span className={styles.chartLegendItem}>
            <span style={{ width: 12, height: 7, borderRadius: 2, background: '#e8c7b8' }} />Delivered
          </span>
          <span className={styles.chartLegendItem}>
            <span style={{ width: 12, height: 7, borderRadius: 2, background: 'var(--color-primary)' }} />Opened / Read
          </span>
        </div>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span style={{ flex: 1.7 }}>CAMPAIGN</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>SENT</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>CTR</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>LEADS</span>
        </div>
        {campaigns.map((c) => (
          <div key={c.name} className={styles.tableRow} style={{ fontSize: 10 }}>
            <span style={{ flex: 1.7, fontWeight: 600 }}>{c.name}</span>
            <span style={{ flex: 0.9, textAlign: 'right', color: 'var(--color-text-muted)' }}>{c.sent}</span>
            <span style={{ flex: 0.9, textAlign: 'right', fontWeight: 700, color: c.good ? 'var(--color-green)' : 'var(--color-text-muted)' }}>{c.ctr}</span>
            <span style={{ flex: 0.9, textAlign: 'right', color: 'var(--color-text-muted)' }}>{c.leads}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [4] Funnel Reports: a shrinking-width conversion funnel with drop-off annotations. */
export function FunnelReportsMock() {
  const stages = [
    { label: 'Captured', value: '4,820', width: 100, bg: '#ff5f38', drop: '↓ 71% · 1,400 dropped' },
    { label: 'Contacted', value: '3,420', width: 88, bg: '#ff6e43', drop: '↓ 54% · 1,570 dropped' },
    { label: 'Qualified', value: '1,850', width: 74, bg: '#ff7a52', drop: '↓ 46% · 998 dropped' },
    { label: 'Meetings', value: '852', width: 60, bg: '#ff9068', drop: '↓ 57% · 366 dropped' },
    { label: 'Proposals', value: '486', width: 46, bg: '#e8a488', drop: '↓ 61% · 189 dropped' },
    { label: 'Won', value: '297', width: 32, bg: '#1faf64', drop: null },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Conversion Funnel</span>
        <span className={styles.headChip} style={{ background: '#fff', fontSize: 9.5, padding: '4px 9px' }}>Last 90 days ▾</span>
      </div>
      <div className={styles.funnelWrap}>
        {stages.map((s) => (
          <div key={s.label} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <div className={styles.funnelBar} style={{ width: `${s.width}%`, background: s.bg }}>
              <span className={styles.funnelLabel}>{s.label}</span>
              <span className={styles.funnelValue}>{s.value}</span>
            </div>
            {s.drop && <div className={styles.funnelDrop}>{s.drop}</div>}
          </div>
        ))}
      </div>
      <div className={styles.darkFootRow}>
        <span className={styles.darkFootLabel}>Overall conversion</span>
        <span className={styles.darkFootValue}>6.2%</span>
      </div>
    </div>
  );
}

/** [5] Team Performance: a rep leaderboard with sparkline trends. */
export function TeamPerformanceMock() {
  const reps = [
    { initials: 'MK', bg: '#ffe1d6', color: '#e64a24', name: 'Meera Kapoor', meta: '₹42.6L', leads: 184, calls: 312, won: 38, wonGood: true, trend: '0,12 8,10 16,11 24,6 32,7 40,3 48,2', trendColor: '#1faf64' },
    { initials: 'JC', bg: '#fff0d6', color: '#b07d0b', name: 'James Carter', meta: '$58K', leads: 156, calls: 268, won: 31, wonGood: true, trend: '0,10 8,11 16,8 24,9 32,5 40,6 48,4', trendColor: '#ff5f38' },
    { initials: 'PN', bg: '#e4f5ec', color: '#128c4b', name: 'Priya Nair', meta: '₹31.2L', leads: 142, calls: 240, won: 27, wonGood: true, trend: '0,8 8,9 16,7 24,8 32,6 40,7 48,5', trendColor: '#ff5f38' },
    { initials: 'RV', bg: '#fde3dc', color: '#b0432a', name: 'Rahul Verma', meta: '₹24.8L', leads: 128, calls: 198, won: 22, wonGood: false, trend: '0,7 8,6 16,9 24,8 32,10 40,9 48,11', trendColor: '#c0503a' },
    { initials: 'EW', bg: '#eae5da', color: '#655a4e', name: 'Emily Wong', meta: '$34K', leads: 110, calls: 176, won: 18, wonGood: false, trend: '0,9 8,8 16,9 24,7 32,8 40,7 48,6', trendColor: '#1faf64' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Team Leaderboard</span>
        <span className={styles.headChip} style={{ fontSize: 9.5, padding: '4px 9px' }}>This month ▾</span>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead} style={{ fontSize: 8 }}>
          <span style={{ flex: 1.7 }}>REP</span>
          <span style={{ flex: 0.7, textAlign: 'right' }}>LEADS</span>
          <span style={{ flex: 0.7, textAlign: 'right' }}>CALLS</span>
          <span style={{ flex: 0.8, textAlign: 'right' }}>WON</span>
          <span style={{ flex: 1, textAlign: 'center' }}>TREND</span>
        </div>
        {reps.map((r) => (
          <div key={r.name} className={styles.tableRow}>
            <span className={styles.repRow} style={{ flex: 1.7 }}>
              <span className={waStyles.avatarCircle} style={{ width: 22, height: 22, fontSize: 8, background: r.bg, color: r.color }}>{r.initials}</span>
              <span>
                <div className={styles.repName}>{r.name}</div>
                <div className={styles.repMeta}>{r.meta}</div>
              </span>
            </span>
            <span style={{ flex: 0.7, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.leads}</span>
            <span style={{ flex: 0.7, textAlign: 'right', color: 'var(--color-text-muted)' }}>{r.calls}</span>
            <span style={{ flex: 0.8, textAlign: 'right', fontWeight: 700, color: r.wonGood ? 'var(--color-green)' : 'var(--color-text-muted)' }}>{r.won}</span>
            <span style={{ flex: 1, textAlign: 'center' }}>
              <svg viewBox="0 0 48 16" style={{ width: 48, height: 16 }}>
                <polyline points={r.trend} fill="none" stroke={r.trendColor} strokeWidth="1.6" />
              </svg>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.statGrid3}>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>AVG RESPONSE</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>4m 12s</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>TASKS DONE</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>1,142</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statLabel}>TEAM REVENUE</div>
          <div style={{ fontSize: 13, fontWeight: 700 }}>₹1.2Cr</div>
        </div>
      </div>
    </div>
  );
}

/** [6] KPI Tracking: a scorecard grid comparing performance against targets. */
export function KPITrackingMock() {
  const kpis = [
    { label: 'REVENUE', badge: '▲ 9%', up: true, value: '₹1.2Cr', target: 'Target ₹1.5Cr · 80%', fill: 80, color: 'var(--color-primary)' },
    { label: 'CONVERSION', badge: '▲ 3%', up: true, value: '28%', target: 'Target 30% · 93%', fill: 93, color: 'var(--color-primary)' },
    { label: 'RESPONSE TIME', badge: '▼ 6%', up: false, value: '4m 12s', target: 'Target 3m · 71%', fill: 71, color: '#c0503a' },
    { label: 'FOLLOW-UP RATE', badge: '▲ 5%', up: true, value: '92%', target: 'Target 95% · 97%', fill: 97, color: 'var(--color-primary)' },
    { label: 'RETENTION', badge: '▲ 2%', up: true, value: '89%', target: 'Target 90% · 99%', fill: 99, color: 'var(--color-primary)' },
    { label: 'COLLECTION', badge: '▼ 4%', up: false, value: '₹68L', target: 'Target ₹90L · 76%', fill: 76, color: '#c0503a' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>KPI Scorecard</span>
        <span className={styles.headChip} style={{ background: '#fff', fontSize: 9.5, padding: '4px 9px' }}>vs last period ▾</span>
      </div>
      <div className={styles.kpiGrid}>
        {kpis.map((k) => (
          <div key={k.label} className={styles.kpiCard}>
            <div className={styles.kpiHead}>
              <span className={styles.kpiLabel}>{k.label}</span>
              <span className={k.up ? styles.kpiBadgeUp : styles.kpiBadgeDown}>{k.badge}</span>
            </div>
            <div className={styles.kpiValue}>{k.value}</div>
            <div className={styles.kpiTarget}>{k.target}</div>
            <div className={styles.kpiTrack}>
              <div className={styles.kpiFill} style={{ width: `${k.fill}%`, background: k.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [7] Target Meters: four radial-gauge cards showing progress toward monthly goals. */
export function TargetMetersMock() {
  const meters = [
    { title: 'Monthly Revenue', pct: '80%', sub: '₹1.2/1.5Cr', dash: '161 201', color: '#ff5f38' },
    { title: 'Deals Closed', pct: '92%', sub: '138/150', dash: '185 201', color: '#1faf64' },
    { title: 'Calls Completed', pct: '66%', sub: '1,320/2,000', dash: '132 201', color: '#ff7a52' },
    { title: 'Payment Collection', pct: '49%', sub: '₹44/90L', dash: '98 201', color: '#c0503a' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Target Meters · July</span>
        <span className={styles.headChip} style={{ color: 'var(--color-primary)', background: 'var(--color-primary-tint)', border: 'none', fontWeight: 700, fontSize: 9.5, padding: '4px 9px' }}>9 days left</span>
      </div>
      <div className={styles.meterGrid}>
        {meters.map((m) => (
          <div key={m.title} className={styles.meterCard}>
            <svg viewBox="0 0 80 80" style={{ width: 96, height: 96 }}>
              <circle cx="40" cy="40" r="32" fill="none" stroke="#e8e0d2" strokeWidth="9" />
              <circle cx="40" cy="40" r="32" fill="none" stroke={m.color} strokeWidth="9" strokeLinecap="round" strokeDasharray={m.dash} transform="rotate(-90 40 40)" />
              <text x="40" y="38" fontSize="16" fontWeight="700" fill="#000923" textAnchor="middle">{m.pct}</text>
              <text x="40" y="52" fontSize="8" fill="#95887a" textAnchor="middle">{m.sub}</text>
            </svg>
            <div className={styles.meterTitle}>{m.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** [8] Charts: a mini gallery of chart types available in the report builder. */
export function ChartsLibraryMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Chart Library</span>
        <span className={styles.headChipDashed}>
          <Icon name="add" size={13} />Add chart
        </span>
      </div>
      <div className={styles.libGrid}>
        <div className={styles.libCardActive}>
          <div className={styles.libCardTitle}>Sales Trend · Line</div>
          <svg viewBox="0 0 150 60" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <line x1="0" y1="46" x2="150" y2="46" stroke="#efe8dc" strokeWidth="1" />
            <polyline points="4,44 30,36 56,40 82,24 108,30 134,12 146,16" fill="none" stroke="#ff5f38" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.libCard}>
          <div className={styles.libCardTitle}>Revenue by Month · Bar</div>
          <svg viewBox="0 0 150 60" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <line x1="0" y1="52" x2="150" y2="52" stroke="#efe8dc" strokeWidth="1" />
            <rect x="8" y="32" width="14" height="20" rx="2" fill="#ff7a52" />
            <rect x="34" y="24" width="14" height="28" rx="2" fill="#ff7a52" />
            <rect x="60" y="30" width="14" height="22" rx="2" fill="#ff7a52" />
            <rect x="86" y="16" width="14" height="36" rx="2" fill="#ff5f38" />
            <rect x="112" y="22" width="14" height="30" rx="2" fill="#ff7a52" />
            <rect x="132" y="12" width="14" height="40" rx="2" fill="#ff5f38" />
          </svg>
        </div>
        <div className={styles.libCard}>
          <div className={styles.libCardTitle}>Deals by Stage · Stacked</div>
          <svg viewBox="0 0 150 60" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <line x1="0" y1="52" x2="150" y2="52" stroke="#efe8dc" strokeWidth="1" />
            <rect x="14" y="34" width="20" height="18" rx="2" fill="#ff5f38" />
            <rect x="14" y="22" width="20" height="12" fill="#ff9068" />
            <rect x="14" y="14" width="20" height="8" rx="2" fill="#1faf64" />
            <rect x="50" y="30" width="20" height="22" rx="2" fill="#ff5f38" />
            <rect x="50" y="18" width="20" height="12" fill="#ff9068" />
            <rect x="50" y="12" width="20" height="6" rx="2" fill="#1faf64" />
            <rect x="86" y="38" width="20" height="14" rx="2" fill="#ff5f38" />
            <rect x="86" y="26" width="20" height="12" fill="#ff9068" />
            <rect x="86" y="20" width="20" height="6" rx="2" fill="#1faf64" />
            <rect x="122" y="28" width="20" height="24" rx="2" fill="#ff5f38" />
            <rect x="122" y="18" width="20" height="10" fill="#ff9068" />
            <rect x="122" y="12" width="20" height="6" rx="2" fill="#1faf64" />
          </svg>
        </div>
        <div className={styles.libCard}>
          <div className={styles.libCardTitle}>Lead Source · Donut</div>
          <div className={styles.libCenter}>
            <svg viewBox="0 0 60 60" style={{ width: 56, height: 56 }}>
              <circle cx="30" cy="30" r="22" fill="none" stroke="#ff5f38" strokeWidth="11" strokeDasharray="60 138" transform="rotate(-90 30 30)" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="#ff9068" strokeWidth="11" strokeDasharray="40 138" strokeDashoffset="-60" transform="rotate(-90 30 30)" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="#1faf64" strokeWidth="11" strokeDasharray="28 138" strokeDashoffset="-100" transform="rotate(-90 30 30)" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="#e8c7b8" strokeWidth="11" strokeDasharray="10 138" strokeDashoffset="-128" transform="rotate(-90 30 30)" />
            </svg>
          </div>
        </div>
        <div className={styles.libCard}>
          <div className={styles.libCardTitle}>Customer Growth · Area</div>
          <svg viewBox="0 0 150 60" style={{ width: '100%', height: 'auto', display: 'block' }}>
            <line x1="0" y1="52" x2="150" y2="52" stroke="#efe8dc" strokeWidth="1" />
            <polygon points="4,46 34,40 64,42 94,28 124,30 146,18 146,52 4,52" fill="#ff5f38" opacity="0.15" />
            <polyline points="4,46 34,40 64,42 94,28 124,30 146,18" fill="none" stroke="#ff5f38" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
        <div className={styles.libCard}>
          <div className={styles.libCardTitle}>Target Progress · Radial</div>
          <div className={styles.libCenter}>
            <svg viewBox="0 0 60 60" style={{ width: 56, height: 56 }}>
              <circle cx="30" cy="30" r="22" fill="none" stroke="#e8e0d2" strokeWidth="9" />
              <circle cx="30" cy="30" r="22" fill="none" stroke="#ff5f38" strokeWidth="9" strokeLinecap="round" strokeDasharray="108 138" transform="rotate(-90 30 30)" />
              <text x="30" y="34" fontSize="13" fontWeight="700" fill="#000923" textAnchor="middle">78%</text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
