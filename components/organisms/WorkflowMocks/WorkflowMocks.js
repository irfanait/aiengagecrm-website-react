import Icon from '../../atoms/Icon/Icon';
import styles from './WorkflowMocks.module.css';

/** Step 1: incoming-lead/inquiry capture list with a "Live capture" badge, optional summary fields. */
export function CaptureListMock({ title, rows, fields }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.liveBadge}>
          <span className={styles.liveDot} />
          Live capture
        </span>
      </div>
      <div className={styles.rows}>
        {rows.map((r) => (
          <div key={r.name + r.time} className={styles.rowItem}>
            <span className={styles.rowTag} style={{ background: r.tagBg, color: r.tagFg }}>
              {r.tag}
            </span>
            <div className={styles.rowText}>
              <div className={styles.rowName}>{r.name}</div>
              <div className={styles.rowSub}>{r.sub}</div>
            </div>
            <span className={styles.rowTime}>{r.time}</span>
          </div>
        ))}
      </div>
      {fields && (
        <div className={styles.captureFieldsGrid}>
          {fields.map((f) => (
            <div key={f.label}>
              <div className={styles.scoreFieldLabel}>{f.label}</div>
              <div className={styles.scoreFieldValue}>{f.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/** Step 2: AI WhatsApp chat conversation preview, with an optional header badge (e.g. "Replied in 30s"). */
export function ChatMock({ agentIcon, agentIconBg, agentIconColor, agentName = 'AiEngage AI Agent', agentSub, headerBadge, messages }) {
  return (
    <div className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
      <div className={styles.chatHeader}>
        <div className={styles.chatHeaderLeft}>
          <span className={styles.chatIconWrap} style={{ background: agentIconBg }}>
            <Icon name={agentIcon} size={15} color={agentIconColor} />
          </span>
          <div>
            <div className={styles.chatName}>{agentName}</div>
            <div className={styles.chatSub}>{agentSub}</div>
          </div>
        </div>
        {headerBadge && (
          <span className={styles.chatHeaderBadge} style={{ color: headerBadge.color, background: headerBadge.bg }}>
            <Icon name={headerBadge.icon} size={11} color={headerBadge.iconColor} />
            {headerBadge.text}
          </span>
        )}
      </div>
      <div className={styles.chatBody}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'out' ? styles.bubbleOut : styles.bubbleIn}>
            {m.text}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Step 3: qualification score gauge + captured fields, with optional chips row and footer. */
export function ScoreCardMock({ avatarInitials, avatarBg, avatarFg, name, phone, badge, badgeFg, badgeBg, score, fields, chips, footer }) {
  const circumference = 151;
  const dash = Math.round((score / 100) * circumference);

  return (
    <div className={styles.card}>
      <div className={styles.scoreHeader}>
        <span className={styles.scoreAvatar} style={{ background: avatarBg, color: avatarFg }}>
          {avatarInitials}
        </span>
        <div className={styles.scoreIdentity}>
          <div className={styles.scoreName}>{name}</div>
          <div className={styles.scorePhone}>{phone}</div>
        </div>
        <span className={styles.scoreBadge} style={{ color: badgeFg, background: badgeBg }}>
          {badge}
        </span>
      </div>
      <div className={styles.scoreBody}>
        <svg viewBox="0 0 60 60" className={styles.scoreGauge}>
          <circle cx="30" cy="30" r="24" fill="none" stroke="var(--color-border)" strokeWidth="7" />
          <circle
            cx="30"
            cy="30"
            r="24"
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            transform="rotate(-90 30 30)"
          />
          <text x="30" y="34" fontSize="14" fontWeight="700" fill="var(--color-text)" textAnchor="middle">
            {score}
            {typeof score === 'number' ? '%' : ''}
          </text>
        </svg>
        <div className={styles.scoreFieldsGrid}>
          {fields.map((f) => (
            <div key={f.label}>
              <div className={styles.scoreFieldLabel}>{f.label}</div>
              <div className={styles.scoreFieldValue}>{f.value}</div>
            </div>
          ))}
        </div>
      </div>
      {chips && (
        <div className={styles.scoreChipsRow}>
          {chips.map((c) => (
            <span key={c} className={styles.scoreChip}>
              {c}
            </span>
          ))}
        </div>
      )}
      {footer && (
        <div className={styles.scoreFooter}>
          <span className={styles.scoreFooterLabel}>{footer.label}</span>
          <span className={styles.scoreFooterValue}>
            <Icon name={footer.icon} size={13} />
            {footer.value}
          </span>
        </div>
      )}
    </div>
  );
}

/** Step 4: assignment rules list + "routed in Ns" note, with an optional team-availability list. */
export function AssignmentMock({ title = 'Assignment Rules', rules, routedNote, availability }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle} style={{ marginBottom: 11 }}>
        {title}
      </div>
      <div className={styles.assignRows}>
        {rules.map((r, i) => (
          <div key={i} className={styles.assignRow}>
            <span className={styles.assignLabel}>{r.label}</span>
            <span className={styles.assignValue}>{r.value}</span>
            <Icon name="arrow_forward" size={14} color="var(--color-primary)" />
            <span className={styles.assignTarget}>{r.target}</span>
          </div>
        ))}
      </div>
      {routedNote && (
        <div className={styles.assignNote}>
          <Icon name="check_circle" size={15} color="var(--color-primary-hover)" />
          <span className={styles.assignNoteText}>
            {routedNote.prefix}
            <b style={{ color: 'var(--color-text)', fontWeight: 700 }}>{routedNote.name}</b>
            {routedNote.suffix}
          </span>
        </div>
      )}
      {availability && (
        <div className={styles.availabilityWrap}>
          <div className={styles.availabilityHeading}>{availability.heading}</div>
          <div className={styles.availabilityRows}>
            {availability.items.map((p) => (
              <div key={p.name} className={styles.availabilityRow}>
                <span className={styles.availabilityAvatar} style={{ background: p.avatarBg, color: p.avatarFg }}>
                  {p.initials}
                </span>
                <div className={styles.rowText}>
                  <div className={styles.availabilityName}>{p.name}</div>
                  <div className={styles.availabilitySub}>{p.sub}</div>
                </div>
                <span className={styles.availabilityCount}>{p.count}</span>
                <span className={styles.availabilityStatus} style={{ color: p.statusFg, background: p.statusBg }}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/** Step 5: shared info/package cards + channel buttons, with optional tag chips and per-item share icon. */
export function ShareMock({ title, items, tags, channels, showItemShareIcon }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle} style={{ marginBottom: 11 }}>
        {title}
      </div>
      <div className={styles.shareRows}>
        {items.map((it) => (
          <div key={it.title} className={styles.shareRow}>
            <span className={styles.shareIconWrap}>
              <Icon name={it.icon} size={18} color="var(--color-primary)" />
            </span>
            <div className={styles.rowText}>
              <div className={styles.shareItemTitle}>{it.title}</div>
              <div className={styles.shareItemSub}>{it.sub}</div>
            </div>
            <span className={styles.shareValue}>{it.value}</span>
            {showItemShareIcon && <Icon name="ios_share" size={15} color="var(--color-text-faint)" />}
          </div>
        ))}
      </div>
      {tags && (
        <div className={styles.tagsRow}>
          {tags.map((t) => (
            <span key={t.label} className={styles.shareTag}>
              <Icon name={t.icon} size={11} />
              {t.label}
            </span>
          ))}
        </div>
      )}
      {channels && (
        <div className={styles.channelsRow}>
          {channels.map((c) => (
            <span key={c.label} className={`${styles.channelBtn} ${c.active ? styles.channelBtnActive : ''}`}>
              <Icon name={c.icon} size={13} color={c.active ? 'var(--color-green)' : 'var(--color-primary)'} />
              {c.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** Step 6: date/time picker card with a confirmed-appointment footer. */
export function ScheduleMock({ title, monthLabel, days, times, footerLabel, footerName, statusLabel, statusFg, statusBg, statusIconColor }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardTitle}>{title}</span>
        <span className={styles.schedMonth}>{monthLabel}</span>
      </div>
      <div className={styles.daysRow}>
        {days.map((d) => (
          <div key={d.label} className={`${styles.dayCell} ${d.active ? styles.dayCellActive : ''}`}>
            <div className={`${styles.dayLabel} ${d.active ? styles.dayLabelActive : ''}`}>{d.label}</div>
            <div className={`${styles.dayNum} ${d.active ? styles.dayNumActive : ''}`}>{d.num}</div>
          </div>
        ))}
      </div>
      <div className={styles.timesRow}>
        {times.map((t) => (
          <span key={t.label} className={`${styles.timeChip} ${t.active ? styles.timeChipActive : ''}`}>
            {t.label}
          </span>
        ))}
      </div>
      <div className={styles.schedFooter}>
        <span className={styles.schedFooterLabel}>
          {footerLabel} · <span className={styles.schedFooterName}>{footerName}</span>
        </span>
        <span className={styles.statusBadge} style={{ color: statusFg, background: statusBg }}>
          <Icon name="check_circle" size={12} color={statusIconColor} />
          {statusLabel}
        </span>
      </div>
    </div>
  );
}

/** Step 7: automation timeline with completed/pending dots. */
export function TimelineMock({ title = 'Automation Timeline', badge, events }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader} style={{ marginBottom: 13 }}>
        <span className={styles.cardTitle}>{title}</span>
        {badge && (
          <span className={styles.timelineBadge}>
            <Icon name={badge.icon} size={12} />
            {badge.text}
          </span>
        )}
      </div>
      <div className={styles.timelineRows}>
        {events.map((e, i) => (
          <div key={e.title} className={styles.timelineRow}>
            <div className={styles.timelineDotCol}>
              <span className={e.done ? styles.timelineDot : styles.timelineDotPending} />
              {i < events.length - 1 && <span className={styles.timelineConnector} />}
            </div>
            <div className={styles.timelineEventBody}>
              <div className={e.done ? styles.timelineEventTitle : `${styles.timelineEventTitle} ${styles.timelineEventTitlePending}`}>{e.title}</div>
              <div className={styles.timelineEventSub}>{e.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Full-width step content: N category cards (icon + title + checklist) + a grid of matching data cards. */
export function RequirementCategoriesMock({ categories, dataCards }) {
  return (
    <div>
      <div className={styles.reqCategoriesGrid}>
        {categories.map((c) => (
          <div key={c.title} className={styles.reqCategoryCard}>
            <div className={styles.reqCategoryHeader}>
              <span className={styles.reqCategoryIcon}>
                <Icon name={c.icon} size={18} color="var(--color-primary)" />
              </span>
              <div className={styles.reqCategoryTitle}>{c.title}</div>
            </div>
            <div className={styles.reqChecklistGrid}>
              {c.checklist.map((li) => (
                <div key={li} className={styles.checklistItemStatic}>
                  <Icon name="check_circle" size={16} color="var(--color-primary)" className={styles.checklistIconStatic} />
                  {li}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {dataCards && (
        <div className={styles.reqDataGrid}>
          {dataCards.map((d) => (
            <div key={d.label} className={styles.reqDataCard}>
              <div className={styles.reqDataHeader}>
                <span className={styles.reqDataLabel}>{d.label}</span>
                <Icon name={d.icon} size={16} color="var(--color-primary)" />
              </div>
              <div className={styles.reqDataFields}>
                {d.fields.map((f) => (
                  <div key={f.label}>
                    <div className={styles.scoreFieldLabel}>{f.label}</div>
                    <div className={styles.scoreFieldValue}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const DOC_STATE_ICON = {
  received: { icon: 'check_circle', color: 'var(--color-green)' },
  requested: { icon: 'radio_button_unchecked', color: 'var(--color-text-faint)' },
  overdue: { icon: 'error', color: '#c0503a' },
};

const DOC_STATE_BADGE = {
  received: { fg: 'var(--color-primary-hover)', bg: 'var(--color-green-tint)' },
  requested: { fg: '#6e6154', bg: '#f4ece0' },
  overdue: { fg: '#c0503a', bg: '#fbe7e1' },
};

/** Document-collection tracker: customer header, per-document status list, optional reminder CTA. */
export function DocumentChecklistMock({ initials, avatarBg, avatarFg, name, sub, statusBadge, items, reminderLabel }) {
  return (
    <div className={styles.card}>
      <div className={styles.docHeader}>
        <div className={styles.docHeaderLeft}>
          <span className={styles.docAvatar} style={{ background: avatarBg, color: avatarFg }}>
            {initials}
          </span>
          <div>
            <div className={styles.scoreName}>{name}</div>
            <div className={styles.scorePhone}>{sub}</div>
          </div>
        </div>
        <span className={styles.scoreBadge} style={{ color: 'var(--color-primary-hover)', background: 'var(--color-primary-tint)' }}>
          {statusBadge}
        </span>
      </div>
      <div className={styles.docItems}>
        {items.map((it) => {
          const iconInfo = DOC_STATE_ICON[it.state];
          const badgeInfo = DOC_STATE_BADGE[it.state];
          return (
            <div key={it.label} className={styles.docItem}>
              <Icon name={iconInfo.icon} size={16} color={iconInfo.color} />
              <div className={styles.rowText}>
                <div className={styles.shareItemTitle}>{it.label}</div>
                <div className={styles.shareItemSub}>{it.sub}</div>
              </div>
              <span className={styles.docStatus} style={{ color: badgeInfo.fg, background: badgeInfo.bg }}>
                {it.state === 'received' ? 'Received' : it.state === 'requested' ? 'Requested' : 'Overdue'}
              </span>
            </div>
          );
        })}
      </div>
      {reminderLabel && (
        <div className={styles.docReminderBtn}>
          <Icon name="notifications_active" size={13} />
          {reminderLabel}
        </div>
      )}
    </div>
  );
}
