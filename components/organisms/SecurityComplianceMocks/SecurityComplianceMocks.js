import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './SecurityComplianceMocks.module.css';

const ACTIVITY = [
  { icon: 'manage_accounts', color: 'var(--color-primary)', bg: 'var(--color-primary-tint)', title: 'Role changed · Arjun Rao', meta: 'Sales Rep → Sales Manager', time: '1h' },
  { icon: 'cloud_done', color: 'var(--color-whatsapp)', bg: 'var(--color-green-tint)', title: 'Daily backup completed', meta: '2.4 GB · 24,812 records', time: '4h' },
  { icon: 'delete', color: '#c0503a', bg: '#faf0d6', title: 'Record deleted · Deal #4821', meta: 'By John Miller · recoverable', time: '6h' },
];

export function SecurityOverviewMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ width: 500 }}>
      <div className={styles.panelHead}>
        <div className={styles.panelHeadLeft}>
          <Icon name="shield" size={16} color="var(--color-primary)" />
          <span className={styles.panelHeadTitle}>Security Overview</span>
        </div>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>
          All systems secure
        </span>
      </div>

      <div className={waStyles.cardPadded}>
        <div className={styles.statGrid2} style={{ marginBottom: 12 }}>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Active users</div>
            <div className={styles.statValue}>42</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>2FA enabled</div>
            <div className={styles.statValue} style={{ color: 'var(--color-whatsapp)' }}>88%</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Last backup</div>
            <div className={styles.statValue}>04:00 AM</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statLabel}>Actions logged</div>
            <div className={styles.statValue} style={{ color: 'var(--color-primary)' }}>1,284/wk</div>
          </div>
        </div>

        <div className={styles.colLabel}>RECENT SECURITY ACTIVITY</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {ACTIVITY.map((a) => (
            <div className={styles.activityRow} key={a.title}>
              <span className={styles.activityIcon} style={{ background: a.bg }}>
                <Icon name={a.icon} size={13} color={a.color} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.activityTitle}>{a.title}</div>
                <div className={styles.activityMeta}>{a.meta}</div>
              </div>
              <span className={styles.activityTime}>{a.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footRow}>
        <span>Roles: 5 Admin · 12 Manager · 25 Rep</span>
        <span className={styles.viewAll}>View all</span>
      </div>
    </div>
  );
}

const USERS = [
  { name: 'Meera Iyer', email: 'meera@company.com', role: 'Admin', branch: 'Ahmedabad', status: 'Active', highlight: false },
  { name: 'Arjun Rao', email: 'arjun@company.com', role: 'Sales Mgr', branch: 'Mumbai', status: 'Active', highlight: true },
  { name: 'Sarah Collins', email: 'sarah@company.com', role: 'Sales Rep', branch: 'Austin', status: 'Active', highlight: false },
  { name: 'Priya Nair', email: 'priya@company.com', role: 'Support', branch: 'Kochi', status: 'Active', highlight: false },
  { name: 'John Miller', email: 'john@company.com', role: 'Marketing', branch: 'Denver', status: 'Invited', highlight: false },
  { name: 'Vikram Kumar', email: 'vikram@company.com', role: 'Branch User', branch: 'Pune', status: 'Active', highlight: false },
];

const PERMISSIONS = [
  { label: 'View team leads', on: true },
  { label: 'Edit deals', on: true },
  { label: 'Export records', on: false },
  { label: 'Account settings', on: false },
];

export function UserRolesMock() {
  return (
    <div className={styles.rolesRow}>
      <div className={styles.rolesTableCard}>
        <div className={styles.panelHead}>
          <span className={styles.panelHeadTitle}>Team &amp; Access</span>
          <Icon name="group" size={15} color="var(--color-text-faint)" />
        </div>
        <table className={styles.userTable}>
          <thead className={styles.userThead}>
            <tr>
              <th className={styles.userTh}>USER</th>
              <th className={styles.userTh}>ROLE</th>
              <th className={styles.userTh}>BRANCH</th>
              <th className={styles.userTh}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {USERS.map((u) => (
              <tr className={u.highlight ? styles.userTrHighlight : styles.userTr} key={u.name}>
                <td className={styles.userTd}>
                  <div className={styles.userNameCell}>
                    <span className={waStyles.avatarCircle} style={{ width: 22, height: 22, fontSize: 9 }}>
                      {u.name.charAt(0)}
                    </span>
                    <div>
                      <div className={styles.userName}>{u.name}</div>
                      <div className={styles.userEmail}>{u.email}</div>
                    </div>
                  </div>
                </td>
                <td className={styles.userTd}>
                  <span className={styles.roleChip} style={{ background: 'var(--color-primary-tint)', color: 'var(--color-primary)' }}>
                    {u.role}
                  </span>
                </td>
                <td className={styles.userTd}>{u.branch}</td>
                <td className={styles.userTd}>
                  <span className={u.status === 'Active' ? styles.statusActive : styles.statusInvited}>{u.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.footRowSimple}>6 of 42 users</div>
      </div>

      <div className={styles.assignCard}>
        <div className={styles.assignHead}>
          <span className={waStyles.avatarCircle} style={{ width: 30, height: 30, fontSize: 12 }}>AR</span>
          <div>
            <div className={styles.assignName}>Arjun Rao</div>
            <div className={styles.assignRole}>Sales Manager</div>
          </div>
        </div>
        <div className={styles.colLabel}>ROLE ASSIGNMENT</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {PERMISSIONS.map((p) => (
            <div className={styles.permRow} key={p.label}>
              <span style={{ fontSize: 9.5 }}>{p.label}</span>
              <span className={p.on ? styles.toggleOn : styles.toggleOff}>
                <span className={p.on ? styles.toggleKnobOn : styles.toggleKnobOff} />
              </span>
            </div>
          ))}
        </div>
        <div className={styles.saveRoleBtn}>Save role</div>
      </div>
    </div>
  );
}

const LOG_ROWS = [
  { time: '14:22', user: 'Meera I.', action: 'Edit', actionColor: 'var(--color-primary-dark-accent)', record: 'Deal #4821', change: '₹80L → ₹85L', ip: '106.51.x.x' },
  { time: '13:47', user: 'Arjun R.', action: 'Stage', actionColor: 'var(--color-primary-dark-accent)', record: 'Lead #2093', change: 'Contacted → Site Visit', ip: '49.36.x.x' },
  { time: '11:58', user: 'John M.', action: 'Delete', actionColor: '#ff8a7a', record: 'Deal #4788', change: 'Moved to trash', ip: '98.11.x.x' },
  { time: '10:33', user: 'Meera I.', action: 'Role', actionColor: 'var(--color-primary-dark-accent)', record: 'Arjun Rao', change: 'Rep → Manager', ip: '106.51.x.x' },
  { time: '09:20', user: 'Priya N.', action: 'Login', actionColor: 'var(--color-whatsapp)', record: 'Session', change: '2FA verified', ip: '157.32.x.x' },
  { time: '08:47', user: 'Vikram K.', action: 'Export', actionColor: 'var(--color-primary-dark-accent)', record: 'Leads (312)', change: 'CSV export', ip: '103.5.x.x' },
  { time: '08:02', user: 'System', action: 'Setting', actionColor: 'var(--color-dark-text-muted)', record: 'Integration', change: 'Webhook enabled', ip: '—' },
];

const AUDIT_FILTERS = ['All actors', 'Edits', 'Deletes', 'Logins'];

export function SecurityAuditLogMock() {
  return (
    <div className={styles.darkShell}>
      <div className={styles.darkHead}>
        <div className={styles.darkHeadTop}>
          <span className={styles.darkHeadTitle}>Audit Log</span>
          <span className={styles.darkChip}>
            <Icon name="calendar_month" size={12} color="var(--color-dark-text-muted)" />
            1–14 Jul 2026
          </span>
        </div>
        <div className={styles.darkFilterRow}>
          {AUDIT_FILTERS.map((f, i) => (
            <span key={f} className={i === 0 ? styles.darkFilterActive : styles.darkFilterChip}>{f}</span>
          ))}
        </div>
      </div>

      <table className={styles.logTable}>
        <thead>
          <tr>
            <th className={styles.logTh}>TIME</th>
            <th className={styles.logTh}>USER</th>
            <th className={styles.logTh}>ACTION</th>
            <th className={styles.logTh}>RECORD</th>
            <th className={styles.logTh}>CHANGE</th>
            <th className={styles.logTh}>IP</th>
          </tr>
        </thead>
        <tbody>
          {LOG_ROWS.map((r) => (
            <tr className={styles.logTr} key={`${r.time}-${r.user}`}>
              <td className={styles.logTd}>{r.time}</td>
              <td className={styles.logTdStrong}>{r.user}</td>
              <td className={styles.logTd}>
                <span className={styles.actionTag} style={{ color: r.actionColor, background: 'rgba(255,255,255,0.06)' }}>
                  {r.action}
                </span>
              </td>
              <td className={styles.logTdStrong}>{r.record}</td>
              <td className={styles.logTd}>{r.change}</td>
              <td className={styles.logTd}>{r.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.darkFoot}>
        <span className={styles.darkFootMeta}>Showing 8 of 48,213 events</span>
        <div className={styles.darkPageDots}>
          <span className={styles.darkPageDot}>‹</span>
          <span className={styles.darkPageDotActive}>1</span>
          <span className={styles.darkPageDot}>2</span>
          <span className={styles.darkPageDot}>›</span>
        </div>
      </div>
    </div>
  );
}

const BACKUP_RUNS = [
  { date: '14 Jul', time: '04:00', size: '2.4 GB', records: '24,812', dur: '3m 12s', status: 'Completed' },
  { date: '13 Jul', time: '04:00', size: '2.4 GB', records: '24,655', dur: '3m 04s', status: 'Completed' },
  { date: '12 Jul', time: '04:00', size: '2.3 GB', records: '24,491', dur: '2m 58s', status: 'Completed' },
  { date: '11 Jul', time: '04:00', size: '—', records: '—', dur: '0m 41s', status: 'Failed' },
  { date: '10 Jul', time: '04:00', size: '2.3 GB', records: '24,203', dur: '3m 09s', status: 'Completed' },
];

export function DataBackupMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className={styles.panelHeadTitle}>Backup &amp; Recovery</span>
        <Icon name="cloud_done" size={16} color="var(--color-whatsapp)" />
      </div>

      <div className={`${styles.statGrid3} ${styles.backupStatRow}`}>
        <div className={styles.backupStatBox}>
          <div className={styles.statLabel}>Frequency</div>
          <div className={styles.statValue} style={{ fontSize: 13 }}>Daily · 04:00</div>
        </div>
        <div className={styles.backupStatBox}>
          <div className={styles.statLabel}>Retention</div>
          <div className={styles.statValue} style={{ fontSize: 13 }}>90 days</div>
        </div>
        <div className={styles.backupStatBox}>
          <div className={styles.statLabel}>Next run</div>
          <div className={styles.statValue} style={{ fontSize: 13, color: 'var(--color-primary)' }}>in 6h 12m</div>
        </div>
      </div>

      <div className={styles.colLabel}>RECENT BACKUP RUNS</div>
      <div className={styles.backupTableCard}>
        <table className={styles.backupTable}>
          <thead className={styles.backupThead}>
            <tr>
              <th className={styles.backupTh}>DATE / TIME</th>
              <th className={styles.backupTh}>SIZE</th>
              <th className={styles.backupTh}>RECORDS</th>
              <th className={styles.backupTh}>TIME</th>
              <th className={styles.backupTh}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {BACKUP_RUNS.map((b) => (
              <tr className={styles.backupTr} key={`${b.date}-${b.time}`}>
                <td className={styles.backupTdStrong}>{b.date} · {b.time}</td>
                <td className={styles.backupTd}>{b.size}</td>
                <td className={styles.backupTd}>{b.records}</td>
                <td className={styles.backupTd}>{b.dur}</td>
                <td className={styles.backupTd}>
                  <span
                    className={styles.statusTag}
                    style={
                      b.status === 'Completed'
                        ? { color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }
                        : { color: '#c0503a', background: '#faf0d6' }
                    }
                  >
                    {b.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.restoreBanner}>
        <div className={styles.restoreLeft}>
          <Icon name="restore" size={18} color="var(--color-primary-dark-accent)" />
          <div>
            <div className={styles.restoreTitle}>Restore available</div>
            <div className={styles.restoreMeta}>Contacts · Deals · Tasks · Call logs · Campaigns</div>
          </div>
        </div>
        <span className={styles.restoreBtn}>Restore</span>
      </div>

      <div style={{ marginTop: 10, fontSize: 9, color: 'var(--color-text-faint)', textAlign: 'center' }}>
        24,812 records protected · encrypted at rest
      </div>
    </div>
  );
}

const METHODS = [
  { icon: 'smartphone', color: 'var(--color-primary)', bg: 'var(--color-primary-tint)', title: 'Authenticator app', meta: 'Time-based codes · primary', on: true },
  { icon: 'sms', color: 'var(--color-whatsapp)', bg: 'var(--color-green-tint)', title: 'SMS verification', meta: '+91 98250 41000 · +1 512 555 0148', on: true },
  { icon: 'key', color: 'var(--color-text-faint)', bg: '#f3ede2', title: 'Backup codes', meta: '10 single-use codes', on: false },
];

const ENFORCEMENT = [
  { name: 'Meera Iyer', role: 'Admin', active: true },
  { name: 'Arjun Rao', role: 'Sales Manager', active: true },
  { name: 'Sarah Collins', role: 'Sales Rep', active: true },
  { name: 'John Miller', role: 'Marketing', active: false },
];

export function TwoFactorAuthMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`} style={{ width: 480 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
        <span className={styles.panelHeadTitle}>Two-Factor Authentication</span>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>Enabled</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {METHODS.map((m) => (
          <div className={styles.methodRow} key={m.title}>
            <span className={styles.methodIcon} style={{ background: m.bg }}>
              <Icon name={m.icon} size={15} color={m.color} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.methodTitle}>{m.title}</div>
              <div className={styles.methodMeta}>{m.meta}</div>
            </div>
            <span className={m.on ? styles.methodOn : styles.methodOff}>{m.on ? 'On' : 'Off'}</span>
          </div>
        ))}
      </div>

      <div className={styles.colLabel}>TEAM ENFORCEMENT</div>
      <div className={styles.enforcementCard}>
        {ENFORCEMENT.map((e) => (
          <div className={styles.enforcementRow} key={e.name}>
            <div className={styles.userNameCell}>
              <span className={waStyles.avatarCircle} style={{ width: 20, height: 20, fontSize: 8 }}>{e.name.charAt(0)}</span>
              <div>
                <div className={styles.enforcementName}>{e.name}</div>
                <div className={styles.userEmail}>{e.role}</div>
              </div>
            </div>
            <span className={e.active ? styles.enforcementActive : styles.enforcementPending}>
              {e.active ? '2FA active' : 'Pending'}
            </span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, fontSize: 9, color: 'var(--color-text-faint)', textAlign: 'center' }}>
        37 of 42 users have 2FA enabled
      </div>
    </div>
  );
}
