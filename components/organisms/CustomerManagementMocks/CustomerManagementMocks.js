import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import mcStyles from '../MultichannelMocks/MultichannelMocks.module.css';
import styles from './CustomerManagementMocks.module.css';

/** Hero: a 360° lead profile card — details, tags, and quick-action tabs. */
export function ProfileCardMock() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <span className={styles.profileAvatar}>PS</span>
        <div style={{ flex: 1 }}>
          <div className={styles.profileName}>Priya Sharma</div>
          <div className={styles.profileMeta}>Prime Realty · Ahmedabad</div>
        </div>
        <span className={styles.qualifiedBadge}>QUALIFIED</span>
      </div>
      <div className={styles.profileBody}>
        <div className={styles.detailGrid}>
          <div>
            <div className={styles.detailLabel}>PHONE</div>
            <div className={styles.detailValue}>+91 98••• ••210</div>
          </div>
          <div>
            <div className={styles.detailLabel}>EMAIL</div>
            <div className={styles.detailValue}>priya@primerealty.in</div>
          </div>
          <div>
            <div className={styles.detailLabel}>SOURCE</div>
            <div className={styles.detailValue}>Meta Ads · Monsoon</div>
          </div>
          <div>
            <div className={styles.detailLabel}>OWNER</div>
            <div className={styles.detailValue}>Meera · Sales</div>
          </div>
        </div>
        <div className={styles.tagRow}>
          <span className={styles.tagChip} style={{ color: 'var(--color-primary)', background: 'var(--color-primary-tint)' }}>Hot lead</span>
          <span className={styles.tagChip} style={{ color: 'var(--color-purple)', background: 'var(--color-purple-tint)' }}>2BHK</span>
          <span className={styles.tagChip} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>₹85L budget</span>
        </div>
        <div className={styles.actionRow}>
          <span className={`${styles.actionBtn} ${styles.actionBtnActive}`}>Chats</span>
          <span className={styles.actionBtn}>Calls</span>
          <span className={styles.actionBtn}>Emails</span>
          <span className={styles.actionBtn}>Deals</span>
        </div>
      </div>
    </div>
  );
}

/** [1] Contacts: a single contact record synced from multiple sources. */
export function ContactRecordMock() {
  const sources = [
    { icon: 'table_view', color: 'var(--color-green)', label: 'Excel' },
    { icon: 'chat', color: 'var(--color-green)', label: 'WhatsApp' },
    { icon: 'thumb_up', color: 'var(--color-blue)', label: 'Meta Ads' },
    { icon: 'ads_click', color: 'var(--color-primary)', label: 'Google Ads' },
    { icon: 'list_alt', color: 'var(--color-purple)', label: 'Website forms' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.recordHead}>
        <span className={waStyles.avatarCircle} style={{ width: 44, height: 44, fontSize: 15, background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>RM</span>
        <div style={{ flex: 1 }}>
          <div className={styles.recordName}>Rahul Mehta</div>
          <div className={styles.recordSub}>Contact record</div>
        </div>
        <Icon name="more_horiz" size={20} color="var(--color-text-faint)" />
      </div>
      <div className={styles.detailGrid} style={{ gap: '11px 16px' }}>
        <div>
          <div className={styles.detailLabel} style={{ fontSize: 9.5 }}>PHONE</div>
          <div className={styles.detailValue} style={{ fontSize: 12.5 }}>+91 98••• ••118</div>
        </div>
        <div>
          <div className={styles.detailLabel} style={{ fontSize: 9.5 }}>EMAIL</div>
          <div className={styles.detailValue} style={{ fontSize: 12.5 }}>rahul@mehta.co</div>
        </div>
        <div>
          <div className={styles.detailLabel} style={{ fontSize: 9.5 }}>STAGE</div>
          <div className={styles.detailValue} style={{ fontSize: 12.5 }}>Contacted</div>
        </div>
        <div>
          <div className={styles.detailLabel} style={{ fontSize: 9.5 }}>OWNER</div>
          <div className={styles.detailValue} style={{ fontSize: 12.5 }}>Dev · Sales</div>
        </div>
      </div>
      <div className={styles.syncedLabel}>SYNCED FROM</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {sources.map((s) => (
          <span key={s.label} className={styles.sourceChip}>
            <Icon name={s.icon} size={15} color={s.color} />
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/** [2] Customer Segments: a segment builder resolving to a matching audience count. */
export function SegmentBuilderMock() {
  const conditions = [
    { field: 'Lead stage', value: 'Qualified' },
    { field: 'Location', value: 'Ahmedabad' },
    { field: 'Source', value: 'Meta Ads' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 16 }}>
        <Icon name="donut_small" size={19} color="var(--color-primary)" />
        <span style={{ fontSize: 13.5, fontWeight: 600 }}>New segment</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {conditions.map((c, i) => (
          <div key={c.field}>
            {i > 0 && <div style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, color: 'var(--color-primary)', padding: '4px 0' }}>AND</div>}
            <div className={waStyles.condRow}>
              <span style={{ fontWeight: 500, color: 'var(--color-text-faint)' }}>{c.field}</span>
              <span style={{ color: 'var(--color-dot)' }}>is</span>
              <span style={{ fontWeight: 600, background: '#fff', border: '1px solid var(--color-border-light)', borderRadius: 6, padding: '2px 9px' }}>{c.value}</span>
            </div>
          </div>
        ))}
        <div style={{ border: '1.5px dashed var(--color-border-dashed)', borderRadius: 10, padding: '9px 13px', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-text-faint)', fontSize: 11.5, fontWeight: 500 }}>
          <Icon name="add" size={16} color="var(--color-text-faint)" />
          Add condition
        </div>
      </div>
      <div className={waStyles.audienceCard} style={{ marginTop: 16 }}>
        <Icon name="groups" size={24} color="var(--color-primary)" />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>1,284</div>
          <div style={{ fontSize: 11, color: 'var(--color-dark-text-muted)', marginTop: 3 }}>customers in this segment</div>
        </div>
      </div>
    </div>
  );
}

/** [3] 360° Customer Profile: tabbed record with a WhatsApp mini-chat and activity stats. */
export function ProfileTabsMock() {
  const tabs = ['WhatsApp', 'Calls', 'Emails', 'Deals', 'Tasks'];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`}>
      <div className={styles.recordHead} style={{ margin: '18px 20px 0', paddingBottom: 16 }}>
        <span className={waStyles.avatarCircle} style={{ width: 42, height: 42, fontSize: 14, background: 'var(--color-purple-tint)', color: 'var(--color-purple)' }}>KN</span>
        <div style={{ flex: 1 }}>
          <div className={styles.recordName}>Kavya Nair</div>
          <div className={styles.recordSub}>360° profile</div>
        </div>
      </div>
      <div className={styles.tabBar}>
        {tabs.map((t, i) => (
          <span key={t} className={`${styles.tab} ${i === 0 ? styles.tabActive : ''}`}>{t}</span>
        ))}
      </div>
      <div className={styles.miniChat}>
        <div className={waStyles.bubbleIn} style={{ maxWidth: '78%' }}>Hi, is the 3BHK still open?</div>
        <div className={waStyles.bubbleOut} style={{ maxWidth: '78%' }}>Yes! Shall I share the brochure?</div>
        <div className={waStyles.bubbleIn} style={{ maxWidth: '78%' }}>Please do 🙂</div>
      </div>
      <div className={styles.statFooter}>
        <div className={styles.statCol}>
          <div className={styles.statValue}>14</div>
          <div className={styles.statLabel}>Chats</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.statValue}>6</div>
          <div className={styles.statLabel}>Calls</div>
        </div>
        <div className={styles.statCol}>
          <div className={styles.statValue} style={{ color: 'var(--color-primary)' }}>2</div>
          <div className={styles.statLabel}>Open deals</div>
        </div>
      </div>
    </div>
  );
}

/** [4] Customer Timeline: every interaction for one customer, chronologically. */
export function ActivityTimelineMock() {
  const events = [
    { icon: 'list_alt', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Lead form submitted', when: 'Website · Jul 3, 10:12' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'WhatsApp reply received', when: 'AI Agent · Jul 3, 10:14' },
    { icon: 'call', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Call · 8 min', when: 'Meera · Jul 4, 15:40' },
    { icon: 'mail', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Quotation emailed', when: '₹85L · Jul 5, 11:02' },
    { icon: 'handshake', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', title: 'Deal moved to Won', when: 'Jul 8, 17:20', last: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 18 }}>Activity timeline</div>
      <div>
        {events.map((e) => (
          <div key={e.title} className={mcStyles.timelineRow}>
            <div className={mcStyles.timelineIconCol}>
              <span className={mcStyles.timelineIcon} style={{ background: e.bg }}>
                <Icon name={e.icon} size={14} color={e.color} />
              </span>
              {!e.last && <span className={mcStyles.timelineLine} />}
            </div>
            <div className={mcStyles.timelineBody}>
              <div className={mcStyles.timelineTitle}>{e.title}</div>
              <div className={mcStyles.timelineMeta}>{e.when}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
