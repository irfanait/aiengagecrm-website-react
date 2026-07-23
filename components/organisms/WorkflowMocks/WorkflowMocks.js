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

const DOC_STATE_LABEL = { received: 'Received', requested: 'Requested', overdue: 'Overdue' };

/** Document-collection tracker: customer header, per-document status list, optional reminder CTA
 * or a row of nudge chips (e.g. "Today · SMS"). Each item's badge text defaults from `state` but
 * can be overridden per item (e.g. "Submitted"/"Pending"/"Unpaid") via `badgeLabel`. */
export function DocumentChecklistMock({ initials, avatarBg, avatarFg, name, sub, statusBadge, items, reminderLabel, nudges }) {
  return (
    <div className={styles.card}>
      <div className={styles.docHeader}>
        <div className={styles.docHeaderLeft}>
          {initials && (
            <span className={styles.docAvatar} style={{ background: avatarBg, color: avatarFg }}>
              {initials}
            </span>
          )}
          <div>
            <div className={styles.scoreName}>{name}</div>
            <div className={styles.scorePhone}>{sub}</div>
          </div>
        </div>
        {statusBadge && (
          <span className={styles.scoreBadge} style={{ color: 'var(--color-primary-hover)', background: 'var(--color-primary-tint)' }}>
            {statusBadge}
          </span>
        )}
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
                {it.sub && <div className={styles.shareItemSub}>{it.sub}</div>}
              </div>
              <span className={styles.docStatus} style={{ color: badgeInfo.fg, background: badgeInfo.bg }}>
                {it.badgeLabel || DOC_STATE_LABEL[it.state]}
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
      {nudges && (
        <div className={styles.nudgesRow}>
          {nudges.map((n) => (
            <span key={n} className={styles.nudgeChip}>
              {n}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** Step 7 (IT): opportunity header (name + stage + value) + a checklist of pipeline activities,
 * each with a Done/Pending/Queued status badge. */
const PIPELINE_ICON = {
  done: { icon: 'check_circle', color: 'var(--color-green)' },
  pending: { icon: 'schedule', color: '#c0503a' },
  queued: { icon: 'radio_button_unchecked', color: 'var(--color-text-faint)' },
};

const PIPELINE_BADGE = {
  done: { fg: 'var(--color-primary-hover)', bg: 'var(--color-green-tint)', label: 'Done' },
  pending: { fg: '#c0503a', bg: '#fbe7e1', label: 'Pending' },
  queued: { fg: '#6e6154', bg: '#f4ece0', label: 'Queued' },
};

export function PipelineTrackerMock({ title, sub, value, items }) {
  return (
    <div className={styles.card}>
      <div className={styles.docHeader}>
        <div>
          <div className={styles.scoreName}>{title}</div>
          <div className={styles.scorePhone}>{sub}</div>
        </div>
        <span className={styles.pipelineValue}>{value}</span>
      </div>
      <div className={styles.docItems}>
        {items.map((it) => {
          const iconInfo = PIPELINE_ICON[it.state];
          const badgeInfo = PIPELINE_BADGE[it.state];
          return (
            <div key={it.label} className={styles.docItem}>
              <Icon name={iconInfo.icon} size={15} color={iconInfo.color} />
              <span className={it.state === 'queued' ? styles.pipelineLabelMuted : styles.pipelineLabel}>{it.label}</span>
              <span className={styles.docStatus} style={{ color: badgeInfo.fg, background: badgeInfo.bg, marginLeft: 'auto' }}>
                {badgeInfo.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Step 2 (Education): "auto-send" list — icon + label + channel + Sent status per row, plus a
 * dashed trigger-condition footer. */
export function AutoSendMock({ icon, title, sub, items, trigger }) {
  return (
    <div className={styles.card}>
      <div className={styles.autoSendHeader}>
        <span className={styles.shareIconWrap}>
          <Icon name={icon} size={17} color="var(--color-primary)" />
        </span>
        <div className={styles.rowText}>
          <div className={styles.shareItemTitle}>{title}</div>
          <div className={styles.shareItemSub}>{sub}</div>
        </div>
      </div>
      <div className={styles.docItems}>
        {items.map((it) => (
          <div key={it.label} className={styles.docItem}>
            <Icon name={it.icon} size={15} color="var(--color-primary)" />
            <span className={styles.pipelineLabel}>{it.label}</span>
            <span className={styles.autoSendChannel}>{it.channel}</span>
            <span className={styles.docStatus} style={{ color: 'var(--color-primary-hover)', background: 'var(--color-green-tint)' }}>{it.status}</span>
          </div>
        ))}
      </div>
      {trigger && (
        <div className={styles.triggerNote}>
          <Icon name="bolt" size={14} color="var(--color-text-faint)" />
          <span className={styles.triggerNoteText}>
            {trigger.prefix} <b>{trigger.value}</b>
          </span>
        </div>
      )}
    </div>
  );
}

/** Step 3 (Education): a single day's slot list (one row highlighted/confirmed) + reminder channel chips. */
export function DaySlotsMock({ dateLabel, sub, slots, remindersLabel = 'REMINDERS', reminders }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardTitle}>{dateLabel}</span>
        <span className={styles.schedMonth}>{sub}</span>
      </div>
      <div className={styles.slotsList}>
        {slots.map((s, i) => (
          <div key={i} className={`${styles.slotRow} ${s.active ? styles.slotRowActive : ''}`}>
            <span className={s.active ? styles.slotTimeActive : styles.slotTime}>{s.time}</span>
            <span className={s.active ? styles.slotLabelActive : styles.slotLabel}>{s.label}</span>
            {s.confirmed && (
              <span className={styles.docStatus} style={{ color: 'var(--color-primary-hover)', background: 'var(--color-green-tint)' }}>
                <Icon name="check_circle" size={11} color="var(--color-green)" /> Confirmed
              </span>
            )}
          </div>
        ))}
      </div>
      {reminders && (
        <div className={styles.remindersRow}>
          <span className={styles.availabilityHeading} style={{ marginBottom: 0 }}>
            {remindersLabel}
          </span>
          {reminders.map((r) => (
            <span key={r.label} className={styles.reminderChip}>
              <Icon name={r.icon} size={11} color="var(--color-primary)" />
              {r.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** Step 5 (Education): 3 funnel stat cards (count + label) + a list of applicant rows with a status chip. */
export function AdmissionFunnelMock({ stats, items }) {
  return (
    <div className={styles.card}>
      <div className={styles.funnelStatsRow}>
        {stats.map((s) => (
          <div key={s.label} className={styles.funnelStat}>
            <div className={styles.funnelStatValue}>{s.value}</div>
            <div className={styles.funnelStatLabel}>{s.label}</div>
          </div>
        ))}
      </div>
      <div className={styles.docItems}>
        {items.map((it) => (
          <div key={it.name} className={styles.funnelRow}>
            <div className={styles.rowText}>
              <div className={styles.shareItemTitle}>{it.name}</div>
              <div className={styles.shareItemSub}>{it.sub}</div>
            </div>
            <span className={styles.tag}>{it.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Step 6 (Education): success banner + Done/In-Progress checklist + onboarding progress bar. */
export function EnrollmentProgressMock({ banner, items, progress }) {
  return (
    <div className={styles.card}>
      <div className={styles.enrollBanner}>
        <span className={styles.enrollBannerIcon}>
          <Icon name={banner.icon} size={17} color="var(--color-green)" />
        </span>
        <div>
          <div className={styles.enrollBannerTitle}>{banner.title}</div>
          <div className={styles.enrollBannerSub}>{banner.sub}</div>
        </div>
      </div>
      <div className={styles.docItems}>
        {items.map((it) => (
          <div key={it.label} className={styles.docItem}>
            <Icon name={it.done ? 'check_circle' : 'radio_button_unchecked'} size={15} color={it.done ? 'var(--color-green)' : 'var(--color-text-faint)'} />
            <span className={it.done ? styles.pipelineLabel : styles.pipelineLabelMuted}>{it.label}</span>
            <span
              className={styles.docStatus}
              style={{ color: it.done ? 'var(--color-primary-hover)' : '#6e6154', background: it.done ? 'var(--color-green-tint)' : '#f4ece0', marginLeft: 'auto' }}
            >
              {it.status}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.progressWrap}>
        <div className={styles.progressLabelRow}>
          <span>{progress.label}</span>
          <span className={styles.progressPercent}>{progress.percent}%</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: `${progress.percent}%` }} />
        </div>
      </div>
    </div>
  );
}
