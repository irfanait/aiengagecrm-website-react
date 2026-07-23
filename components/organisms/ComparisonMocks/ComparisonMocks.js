import { Fragment } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './ComparisonMocks.module.css';

const SLOTS = [styles.slot0, styles.slot1, styles.slot2, styles.slot3];

/** Positions up to 4 children as a rotated, overlapping "collage" — the shared problem-section
 * visual for the HubSpot and Zoho comparison pages (same 4 offsets, different card content). */
export function ScatteredCollage({ children }) {
  return (
    <div className={styles.collage}>
      {children.map((child, i) => (
        <div key={i} className={`${styles.collageCard} ${SLOTS[i]}`}>
          {child}
        </div>
      ))}
    </div>
  );
}

/** CRM contact-record card — shared by the HubSpot and Zoho collages. */
export function ContactCardWidget({ name, initials, sub, badge, fields, footNote }) {
  return (
    <>
      <div className={styles.widgetHeader}>
        <div className={styles.widgetHeaderLeft}>
          <span className={styles.avatar}>{initials}</span>
          <div>
            <div className={styles.widgetName}>{name}</div>
            <div className={styles.widgetSub}>{sub}</div>
          </div>
        </div>
        {badge && <span className={styles.pillBadge}>{badge}</span>}
      </div>
      <div className={styles.fieldRows}>
        {fields.map((f) => (
          <div key={f.label} className={styles.fieldRow}>
            <span className={styles.fieldLabel}>{f.label}</span>
            <span className={styles.fieldValue}>{f.value}</span>
          </div>
        ))}
      </div>
      {footNote && (
        <div className={styles.footNote}>
          <Icon name="history" size={12} color="#c0503a" />
          {footNote}
        </div>
      )}
    </>
  );
}

/** Campaign performance mini-dashboard (bar chart + 3 stats) — shared by HubSpot and Zoho. */
export function CampaignChartWidget({ title, badge, bars, stats }) {
  return (
    <>
      <div className={styles.widgetHeaderTight}>
        <span className={styles.widgetName}>{title}</span>
        <span className={badge?.tone === 'warn' ? styles.pillBadgeWarn : styles.pillBadge}>{badge?.text}</span>
      </div>
      <div className={styles.barsRow}>
        {bars.map((h, i) => (
          <span key={i} className={styles.bar} style={{ height: `${h}%`, background: h >= 80 ? 'var(--color-primary)' : h >= 60 ? '#ff9068' : '#f3c9b5' }} />
        ))}
      </div>
      <div className={styles.statsRow}>
        {stats.map((s) => (
          <div key={s.label}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}

/** Email/message inbox list — HubSpot collage only. */
export function InboxListWidget({ title, rows }) {
  return (
    <>
      <div className={styles.widgetName} style={{ marginBottom: 10 }}>
        {title}
      </div>
      <div className={styles.inboxRows}>
        {rows.map((r) => (
          <div key={r.name} className={styles.inboxRow}>
            <span className={r.unread ? styles.inboxDotActive : styles.inboxDot} />
            <div className={styles.rowTextTight}>
              <div className={r.unread ? styles.inboxNameActive : styles.inboxName}>{r.name}</div>
              <div className={styles.inboxSub}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** WhatsApp-style chat thread — used by the HubSpot collage. */
export function ChatThreadWidget({ name, sub, messages }) {
  return (
    <>
      <div className={styles.chatThreadHeader}>
        <span className={styles.chatThreadIcon}>
          <Icon name="chat" size={14} color="var(--color-green)" />
        </span>
        <div>
          <div className={styles.widgetName}>{name}</div>
          <div className={styles.widgetSubFaint}>{sub}</div>
        </div>
      </div>
      <div className={styles.chatBubbles}>
        {messages.map((m, i) => (
          <div key={i} className={m.from === 'out' ? styles.bubbleOutMini : styles.bubbleInMini}>
            {m.text}
          </div>
        ))}
      </div>
    </>
  );
}

/** Support ticket card — Zoho collage only. */
export function TicketWidget({ ticketId, badge, name, initials, question, priorityLabel }) {
  return (
    <>
      <div className={styles.widgetHeaderTight}>
        <span className={styles.widgetName}>{ticketId}</span>
        <span className={styles.pillBadge}>{badge}</span>
      </div>
      <div className={styles.ticketRow}>
        <span className={styles.avatar}>{initials}</span>
        <div className={styles.rowTextTight}>
          <div className={styles.widgetName}>{name}</div>
          <div className={styles.widgetSub}>{question}</div>
        </div>
      </div>
      <div className={styles.ticketPriorityRow}>
        <span className={styles.widgetSubFaint}>Priority</span>
        <span className={styles.priorityValue}>
          <Icon name="priority_high" size={11} color="#c0503a" />
          {priorityLabel}
        </span>
      </div>
    </>
  );
}

/** Mini automation-builder card (New lead → Assign → Setup needed) — Zoho collage only. */
export function WorkflowBuilderWidget({ title, badge, steps, caption }) {
  return (
    <>
      <div className={styles.widgetHeaderTight}>
        <span className={styles.widgetName}>{title}</span>
        <span className={styles.pillBadge}>{badge}</span>
      </div>
      <div className={styles.builderRow}>
        {steps.map((s, i) => (
          <Fragment key={s.label}>
            {i > 0 && <Icon name="arrow_forward" size={13} color="#c9bca9" />}
            <span className={s.warn ? styles.builderPillWarn : styles.builderPill}>{s.label}</span>
          </Fragment>
        ))}
      </div>
      {caption && <div className={styles.builderCaption}>{caption}</div>}
    </>
  );
}

/** Escalating pricing-tier card — the Keap problem-section visual. */
export function PricingTiersWidget({ title, sub, badge, tiers, addons, total }) {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingHeader}>
        <div>
          <div className={styles.widgetName}>{title}</div>
          <div className={styles.widgetSubFaint}>{sub}</div>
        </div>
        <span className={styles.pillBadge}>{badge}</span>
      </div>
      <div className={styles.pricingColLabels}>
        <span>CONTACTS</span>
        <span>MONTHLY COST</span>
      </div>
      <div className={styles.pricingTiers}>
        {tiers.map((t) => (
          <div key={t.label} className={styles.pricingTierRow}>
            <span className={t.alert ? styles.pricingTierLabelAlert : styles.pricingTierLabel}>
              {t.alert && <Icon name="priority_high" size={14} color="#c0503a" />}
              {t.label}
            </span>
            <span className={t.alert ? styles.pricingTierValueAlert : styles.pricingTierValue}>{t.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.pricingAddons}>
        {addons.map((a) => (
          <div key={a.label} className={styles.pricingAddonRow}>
            <span className={styles.widgetSub}>{a.label}</span>
            <span className={styles.pricingAddonValue}>{a.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.pricingTotal}>
        <div className={styles.pricingTotalLeft}>
          <Icon name="trending_up" size={17} color="#c0503a" />
          <span className={styles.pricingTotalLabel}>{total.label}</span>
        </div>
        <span className={styles.pricingTotalValue}>{total.value}</span>
      </div>
    </div>
  );
}

/** AI "suggested next actions" card — Keap zigzag section 1. */
export function AIAssistantWidget({ contact, actionsLabel = 'SUGGESTED NEXT ACTIONS', actions }) {
  return (
    <div className={styles.zigCard}>
      <div className={styles.zigHeader}>
        <span className={styles.zigHeaderIcon}>
          <Icon name="auto_awesome" size={20} color="var(--color-primary)" />
        </span>
        <div className={styles.rowTextTight}>
          <div className={styles.widgetName}>AI Assistant</div>
          <div className={styles.widgetSubFaint}>Reviewing customer activity</div>
        </div>
        <span className={styles.pillBadge}>Live</span>
      </div>
      <div className={styles.zigContactRow}>
        <span className={styles.avatar}>{contact.initials}</span>
        <div className={styles.rowTextTight}>
          <div className={styles.widgetName}>{contact.name}</div>
          <div className={styles.widgetSubFaint}>{contact.sub}</div>
        </div>
      </div>
      <div className={styles.zigActionsLabel}>{actionsLabel}</div>
      <div className={styles.zigActions}>
        {actions.map((a) => (
          <div key={a.title} className={styles.zigActionRow}>
            <span className={styles.zigActionIcon}>
              <Icon name={a.icon} size={15} color="var(--color-primary)" />
            </span>
            <div className={styles.rowTextTight}>
              <div className={styles.zigActionTitle}>{a.title}</div>
              <div className={styles.widgetSubFaint}>{a.sub}</div>
            </div>
            {a.applied ? <span className={styles.pillBadgeGreen}>Applied</span> : <Icon name="chevron_right" size={17} color="#c9bca9" />}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Channel chips + 2 contact rows — the differentiators card-1 visual, identical on the HubSpot
 * and Zoho pages. */
export function ChannelChipsContactsWidget({ contacts }) {
  return (
    <>
      <div className={styles.chipsRow}>
        <span className={styles.channelChip}>
          <Icon name="chat" size={11} color="var(--color-green)" />
          WhatsApp
        </span>
        <span className={styles.channelChipPlain}>SMS</span>
        <span className={styles.channelChipPlain}>Email</span>
      </div>
      <div className={styles.chipsContacts}>
        {contacts.map((c) => (
          <div key={c.name} className={styles.chipsContactRow}>
            <span className={styles.avatarSm} style={{ background: c.avatarBg, color: c.avatarFg }}>
              {c.initials}
            </span>
            <div className={styles.rowTextTight}>
              <div className={styles.widgetName} style={{ fontSize: 9 }}>
                {c.name}
              </div>
              <div className={styles.widgetSubFaint}>{c.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/** "ONE PLATFORM" 2x2 capability icon grid — differentiators card-2 visual, shared by HubSpot/Zoho. */
export function OnePlatformGridWidget({ items }) {
  return (
    <div className={styles.platformGridWrap}>
      <div className={styles.platformGridLabel}>ONE PLATFORM</div>
      <div className={styles.platformGrid}>
        {items.map((it) => (
          <div key={it.label} className={styles.platformGridItem}>
            <span className={styles.platformGridIcon}>
              <Icon name={it.icon} size={13} color="var(--color-primary)" />
            </span>
            <span className={styles.widgetName} style={{ fontSize: 8.5 }}>
              {it.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Connected-nodes growth timeline (Lead → Conversation → Booking → Follow-up) — differentiators
 * card-3 visual, shared by HubSpot/Zoho. */
export function GrowthTimelineWidget({ items }) {
  return (
    <div className={styles.growthTimelineWrap}>
      <div className={styles.growthTimelineLine} />
      {items.map((it) => (
        <div key={it.label} className={styles.growthNode}>
          <span className={styles.growthNodeIcon}>
            <Icon name={it.icon} size={12} color="var(--color-primary)" />
          </span>
          <span className={styles.growthNodeLabel}>{it.label}</span>
        </div>
      ))}
    </div>
  );
}

/** Channel-mixed communication timeline — Keap zigzag section 2. */
export function CommunicationTimelineWidget({ contact, events }) {
  return (
    <div className={styles.zigCard}>
      <div className={styles.zigHeader}>
        <span className={styles.avatarLg}>{contact.initials}</span>
        <div className={styles.rowTextTight}>
          <div className={styles.widgetName}>{contact.name}</div>
          <div className={styles.widgetSubFaint}>{contact.sub}</div>
        </div>
        <span className={styles.pillBadge}>{contact.badge}</span>
      </div>
      <div className={styles.timelineWrap}>
        {events.map((e, i) => (
          <div key={i} className={styles.timelineEvent}>
            <span className={styles.timelineDotOutline} />
            <div className={styles.timelineMeta}>
              <span className={styles.channelTag}>
                {e.channelIcon && <Icon name={e.channelIcon} size={11} color="var(--color-green)" />}
                {e.channel}
              </span>
              <span className={styles.widgetSubFaint}>{e.time}</span>
            </div>
            <div className={styles.timelineText}>{e.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
