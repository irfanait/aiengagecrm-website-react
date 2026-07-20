import Icon from '../../atoms/Icon/Icon';
import styles from './MobileAppMocks.module.css';

/** Shared hardware chrome (bezel + notch) wrapping each OS-specific app screen. */
function PhoneShell({ variant = 'android', height, children }) {
  return (
    <div className={styles.shell} style={height ? { height } : undefined}>
      <span className={styles.sideButton} style={{ left: -2, top: 150, width: 3, height: 26 }} />
      <span className={styles.sideButton} style={{ left: -2, top: 188, width: 3, height: 44 }} />
      <span className={styles.sideButton} style={{ right: -2, top: 168, width: 3, height: 64 }} />
      <div className={styles.screen}>
        {variant === 'android' ? <span className={styles.cameraDot} /> : <span className={styles.notchPill} />}
        {children}
      </div>
    </div>
  );
}

const LEADS = [
  { initials: 'RS', name: 'Rahul Shah', meta: 'Skyline 2BHK · ₹85L', tag: 'New', bg: '#ffe1d6', color: 'var(--color-primary-hover)', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)' },
  { initials: 'AM', name: 'Aisha Mehta', meta: 'Demo · follow-up Fri', tag: 'Warm', bg: '#fff3d1', color: 'var(--color-yellow-icon)', tagBg: '#fff3d1', tagColor: 'var(--color-yellow-icon)' },
  { initials: 'VK', name: 'Vikram Kumar', meta: 'Quotation sent', tag: 'Hot', bg: '#ffe9e1', color: 'var(--color-primary-hover)', tagBg: '#ffe9e1', tagColor: 'var(--color-primary-hover)' },
  { initials: 'JD', name: 'John Davis', meta: '+1 415 552 0148', tag: 'Cold', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', tagBg: '#f3ede2', tagColor: 'var(--color-text-faint)' },
  { initials: 'SP', name: 'Sanjay Patel', meta: 'Site visit booked', tag: 'New', bg: '#ffe1d6', color: 'var(--color-primary-hover)', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)' },
];

/** [1] Android App: the "Leads" list screen with a floating add button and bottom tabs. */
export function AndroidAppMock() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PhoneShell variant="android" height={480}>
        <div className={styles.androidStatus}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Icon name="signal_cellular_alt" size={12} />
              <Icon name="wifi" size={12} />
              <Icon name="battery_full" size={12} />
            </span>
          </div>
        </div>
        <div className={styles.androidHeader}>
          <div className={styles.androidHeaderRow}>
            <div className={styles.androidHeaderLeft}>
              <Icon name="menu" size={20} />
              <span className={styles.androidHeaderTitle}>Leads</span>
            </div>
            <div className={styles.androidHeaderIcons}>
              <Icon name="search" size={19} />
              <Icon name="more_vert" size={19} />
            </div>
          </div>
        </div>
        <div className={styles.androidBody}>
          {LEADS.map((l) => (
            <div key={l.name} className={styles.leadRow}>
              <span className={styles.leadAvatar} style={{ background: l.bg, color: l.color }}>{l.initials}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.leadName}>{l.name}</div>
                <div className={styles.leadMeta}>{l.meta}</div>
              </div>
              <span className={styles.leadTag} style={{ background: l.tagBg, color: l.tagColor }}>{l.tag}</span>
            </div>
          ))}
        </div>
        <span className={styles.fab}>
          <Icon name="add" size={24} color="#fff" />
        </span>
        <div className={styles.tabBar}>
          <Icon name="group" size={20} color="var(--color-primary)" />
          <Icon name="call" size={20} color="var(--color-text-faint)" />
          <Icon name="task_alt" size={20} color="var(--color-text-faint)" />
          <Icon name="bar_chart" size={20} color="var(--color-text-faint)" />
        </div>
        <div className={styles.homeIndicator}>
          <span className={styles.homeIndicatorBar} />
        </div>
      </PhoneShell>
    </div>
  );
}

/** [2] iOS App: a contact detail screen with quick actions and an activity timeline. */
export function IOSAppMock() {
  const activity = [
    { icon: 'call', bg: '#fff3ea', color: 'var(--color-primary)', title: 'Call · 6m 21s', meta: 'Today 11:04' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'WhatsApp · 4 messages', meta: 'Today 11:20' },
    { icon: 'description', bg: 'var(--color-bg)', color: 'var(--color-text-muted)', title: 'Quotation · ₹85L', meta: 'Yesterday' },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PhoneShell variant="ios" height={480}>
        <div className={styles.iosStatus}>
          <div className={styles.statusBar}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Icon name="signal_cellular_alt" size={12} />
              <Icon name="wifi" size={12} />
              <Icon name="battery_full" size={12} />
            </span>
          </div>
        </div>
        <div className={styles.iosBody}>
          <div className={styles.iosNavRow} style={{ marginTop: 12 }}>
            <Icon name="chevron_left" size={18} color="var(--color-primary)" />
            <Icon name="more_horiz" size={17} color="var(--color-primary)" />
          </div>
          <div className={styles.iosTitle}>Contact</div>
          <div className={styles.profileBlock}>
            <span className={styles.profileAvatar} style={{ background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>PS</span>
            <div className={styles.profileName}>Priya Sharma</div>
            <div className={styles.profileMeta}>Prime Realty · Ahmedabad</div>
          </div>
          <div className={styles.actionRow}>
            <span className={styles.actionBtn} style={{ background: 'var(--color-primary)', color: '#fff' }}>
              <Icon name="call" size={16} color="#fff" />Call
            </span>
            <span className={styles.actionBtn} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>
              <Icon name="chat" size={16} color="var(--color-whatsapp)" />WhatsApp
            </span>
            <span className={styles.actionBtn} style={{ background: 'var(--color-bg)', color: 'var(--color-text-muted)' }}>
              <Icon name="mail" size={16} color="var(--color-text-muted)" />Email
            </span>
          </div>
          <div className={styles.segmentRow}>
            <span className={styles.segmentActive}>Activity</span>
            <span className={styles.segmentInactive}>Deals</span>
            <span className={styles.segmentInactive}>Notes</span>
          </div>
          <div className={styles.activityList}>
            {activity.map((a) => (
              <div key={a.title} className={styles.activityRow}>
                <span className={styles.activityIcon} style={{ background: a.bg }}>
                  <Icon name={a.icon} size={14} color={a.color} />
                </span>
                <div style={{ flex: 1 }}>
                  <div className={styles.activityTitle}>{a.title}</div>
                  <div className={styles.activityMeta}>{a.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.homeIndicator}>
          <span className={styles.homeIndicatorBar} />
        </div>
      </PhoneShell>
    </div>
  );
}

/** [3] Push Notifications: a lock-screen stack of live CRM alerts. */
export function PushNotificationsAppMock() {
  const notifs = [
    { icon: 'person_add', bg: 'var(--color-primary)', app: 'AiEngage', time: 'now', body: 'New lead assigned · Rahul Shah (₹85L)' },
    { icon: 'chat', bg: 'var(--color-green)', app: 'WhatsApp', time: '2m', body: 'Priya Sharma: Is the site visit confirmed?' },
    { icon: 'phone_missed', bg: 'var(--color-primary-hover)', app: 'Missed call', time: '14m', body: 'Aisha Mehta · +1 415 552 0148' },
    { icon: 'event', bg: 'var(--color-dark-bg)', app: 'Task due', time: '30m', body: 'Send quotation to Vikram Kumar' },
    { icon: 'trending_up', bg: 'var(--color-primary)', app: 'AiEngage', time: '1h', body: 'Deal moved to Negotiation · Green Villa' },
  ];
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PhoneShell variant="ios" height={538}>
        <div className={styles.lockScreen} style={{ minHeight: 520 }}>
          <div className={styles.lockStatus}>
            <span>9:41</span>
            <span className={styles.statusIcons}>
              <Icon name="signal_cellular_alt" size={12} />
              <Icon name="wifi" size={12} />
              <Icon name="battery_full" size={12} />
            </span>
          </div>
          <div className={styles.lockClock}>
            <div className={styles.lockTime}>9:41</div>
            <div className={styles.lockDate}>Saturday, 12 July</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {notifs.map((n) => (
              <div key={`${n.app}-${n.time}`} className={styles.notifCard}>
                <span className={styles.notifIcon} style={{ background: n.bg }}>
                  <Icon name={n.icon} size={16} color="#fff" />
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className={styles.notifHeadRow}>
                    <span className={styles.notifApp}>{n.app}</span>
                    <span className={styles.notifTime}>{n.time}</span>
                  </div>
                  <div className={styles.notifBody}>{n.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PhoneShell>
    </div>
  );
}

const HERO_ACTIVITY = [
  { icon: 'call', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Call · Outgoing', meta: '6m 21s · Today 11:04' },
  { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'Sent brochure', meta: 'WhatsApp · Today 9:32' },
  { icon: 'sticky_note_2', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Wants a site visit Sat', meta: 'Note · Yesterday' },
];

const HERO_LEADS = [
  { initials: 'RS', name: 'Rahul Shah', meta: '+91 98•• 118', tag: 'New', bg: '#ffe1d6', color: 'var(--color-primary-hover)', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)' },
  { initials: 'AM', name: 'Aisha Mehta', meta: '+1 415 552 0148', tag: 'Warm', bg: '#fff3d1', color: 'var(--color-yellow-icon)', tagBg: '#fff3d1', tagColor: 'var(--color-yellow-icon)' },
  { initials: 'VK', name: 'Vikram Kumar', meta: '+91 98•• 742', tag: 'Hot', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', tagBg: '#ffe9e1', tagColor: 'var(--color-primary-hover)' },
  { initials: 'CS', name: 'Chhavi Shan', meta: '+91 98•• 118', tag: 'New', bg: '#ffe1d6', color: 'var(--color-primary-hover)', tagBg: 'var(--color-green-tint)', tagColor: 'var(--color-whatsapp)' },
  { initials: 'AG', name: 'Arun Gole', meta: '+91 98•• 987', tag: 'Hot', bg: '#ffe1d6', color: 'var(--color-primary-hover)', tagBg: '#ffe9e1', tagColor: 'var(--color-primary-hover)' },
  { initials: 'SM', name: 'Sushmita Mehta', meta: '+1 415 000 0148', tag: 'Warm', bg: '#fff3d1', color: 'var(--color-yellow-icon)', tagBg: '#fff3d1', tagColor: 'var(--color-yellow-icon)' },
];

/** Hero: two tilted, overlapping phones (contact profile + leads list) with floating badges. */
export function MobileHeroMock() {
  return (
    <div className={styles.heroStack}>
      <span className={`${styles.floatBadge} ${styles.badgeNewLead}`}>
        <Icon name="person_add" size={15} color="var(--color-primary)" />New lead
      </span>
      <span className={`${styles.floatBadge} ${styles.badgeWhatsApp}`}>
        <Icon name="chat" size={15} color="var(--color-green)" />WhatsApp reply
      </span>
      <span className={`${styles.floatBadge} ${styles.badgeTaskDue}`}>
        <Icon name="event" size={15} color="var(--color-primary-hover)" />Task due
      </span>

      {/* Back phone: contact profile card */}
      <div className={`${styles.miniShell} ${styles.miniShellBack}`}>
        <div className={styles.miniScreen}>
          <span className={styles.miniNotchPill} />
          <div className={styles.miniProfileHead}>
            <div className={styles.miniStatusRow}>
              <span>9:41</span>
              <span>▪ ▪ ▪ 100%</span>
            </div>
            <div className={styles.miniProfileBlock}>
              <span className={styles.miniProfileAvatar}>PS</span>
              <div className={styles.miniProfileName}>Priya Sharma</div>
              <div className={styles.miniProfileMeta}>+91 98250 11001</div>
            </div>
          </div>
          <div className={styles.miniBody}>
            <div className={styles.miniActionRow}>
              <span className={styles.miniActionBtn} style={{ background: 'var(--color-primary)', color: '#fff' }}>
                <Icon name="call" size={12} color="#fff" />Call
              </span>
              <span className={styles.miniActionBtn} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>
                <Icon name="chat" size={12} color="var(--color-whatsapp)" />WhatsApp
              </span>
              <span className={styles.miniActionBtn} style={{ background: '#f3ede2', color: 'var(--color-text-muted)' }}>
                <Icon name="mail" size={12} color="var(--color-text-muted)" />Email
              </span>
            </div>
            <div className={styles.miniSegmentRow}>
              <span className={styles.miniSegmentActive}>Activity</span>
              <span className={styles.miniSegmentInactive}>Deals</span>
              <span className={styles.miniSegmentInactive}>Notes</span>
            </div>
            <div className={styles.miniActivityList}>
              {HERO_ACTIVITY.map((a) => (
                <div key={a.title} className={styles.miniActivityRow}>
                  <span className={styles.miniActivityIcon} style={{ background: a.bg }}>
                    <Icon name={a.icon} size={11} color={a.color} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className={styles.miniActivityTitle}>{a.title}</div>
                    <div className={styles.miniActivityMeta}>{a.meta}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.miniFollowUp}>
              <Icon name="event" size={12} color="var(--color-primary-hover)" />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className={styles.miniFollowUpLabel}>Follow-up call</div>
                <div className={styles.miniFollowUpValue}>Tomorrow · 10:30 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Front phone: leads list */}
      <div className={`${styles.miniShell} ${styles.miniShellFront}`}>
        <div className={styles.miniScreen}>
          <span className={styles.miniNotchDot} />
          <div className={styles.miniListHead}>
            <div className={styles.miniStatusRow} style={{ color: 'var(--color-text-faint)' }}>
              <span>9:41</span>
              <span>▪ ▪ ▪ 100%</span>
            </div>
            <div className={styles.miniListHeadRow}>
              <span className={styles.miniListTitle}>My Leads</span>
              <Icon name="filter_list" size={16} color="var(--color-primary)" />
            </div>
          </div>
          <div className={styles.miniListBody}>
            {HERO_LEADS.map((l) => (
              <div key={l.name} className={styles.miniLeadRow}>
                <span className={styles.miniLeadAvatar} style={{ background: l.bg, color: l.color }}>{l.initials}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className={styles.miniLeadName}>{l.name}</div>
                  <div className={styles.miniLeadMeta}>{l.meta}</div>
                </div>
                <span className={styles.miniLeadTag} style={{ background: l.tagBg, color: l.tagColor }}>{l.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
