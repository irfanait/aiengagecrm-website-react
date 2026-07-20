import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './AutomationMocks.module.css';

/** Hero: a lead-form trigger branching into an assignment + WhatsApp action. */
export function WorkflowHeroMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`}>
      <div className={waStyles.panelHead}>
        <span className={waStyles.panelTitle}>Workflow</span>
        <span className={waStyles.pillGreen}>Live</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={styles.triggerNode}>
          <span className={styles.triggerIcon}>
            <Icon name="bolt" size={18} color="#fff" />
          </span>
          <div>
            <div className={styles.triggerTag}>TRIGGER</div>
            <div className={styles.triggerLabel}>New lead submits form</div>
          </div>
        </div>
        <span className={styles.vLine} />
        <div className={styles.conditionNode}>
          <Icon name="alt_route" size={18} color="var(--color-primary-hover)" />
          <span className={styles.conditionLabel}>If budget &gt; ₹50L</span>
        </div>
        <div className={styles.branchConnectors} style={{ margin: '2px 0' }}>
          <span className={styles.vLine} />
          <span className={styles.vLine} />
        </div>
        <div className={styles.branchRow}>
          <div className={styles.branchCard} style={{ background: 'var(--color-blue-tint)' }}>
            <Icon name="person_add" size={18} color="var(--color-blue)" />
            <div className={styles.branchLabel} style={{ marginTop: 5 }}>Assign to Meera</div>
          </div>
          <div className={styles.branchCard} style={{ background: 'var(--color-green-tint)' }}>
            <Icon name="chat" size={18} color="var(--color-whatsapp)" />
            <div className={styles.branchLabel} style={{ marginTop: 5 }}>Send WhatsApp</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [1] Workflow Automation: full builder canvas with trigger → condition → branch → action + stats. */
export function WorkflowBuilderMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Workflow Builder</span>
        <span className={waStyles.statHeadTag}>Active · 214 runs</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className={styles.triggerNode}>
          <span className={styles.triggerIcon}>
            <Icon name="bolt" size={18} color="#fff" />
          </span>
          <div>
            <div className={styles.triggerTag}>TRIGGER</div>
            <div className={styles.triggerLabel}>Lead fills out form</div>
          </div>
        </div>
        <span className={styles.vLine} />
        <div className={styles.conditionNode}>
          <Icon name="alt_route" size={18} color="var(--color-primary-hover)" />
          <span className={styles.conditionLabel}>Source is Meta Ads?</span>
        </div>
        <div className={styles.branchConnectors} style={{ margin: '2px 0' }}>
          <span className={styles.vLine} />
          <span className={styles.vLine} />
        </div>
        <div className={styles.branchRow} style={{ marginBottom: 0 }}>
          <div className={styles.branchCard} style={{ background: 'var(--color-blue-tint)', borderColor: '#d3e2fb' }}>
            <div className={styles.branchCardHead}>
              <Icon name="person_add" size={17} color="var(--color-blue)" />
              <span className={styles.branchTag} style={{ color: 'var(--color-blue)' }}>YES</span>
            </div>
            <div className={styles.branchLabel}>Assign to Sales</div>
          </div>
          <div className={styles.branchCard} style={{ background: 'var(--color-purple-tint)', borderColor: '#e0d6f5' }}>
            <div className={styles.branchCardHead}>
              <Icon name="mark_email_read" size={17} color="var(--color-purple)" />
              <span className={styles.branchTag} style={{ color: 'var(--color-purple)' }}>NO</span>
            </div>
            <div className={styles.branchLabel}>Add to nurture</div>
          </div>
        </div>
        <span className={styles.vLine} />
        <div className={styles.actionNode}>
          <Icon name="chat" size={18} color="var(--color-whatsapp)" />
          <span className={styles.actionLabel}>Send instant WhatsApp reply</span>
        </div>
      </div>
      <div className={waStyles.stat3} style={{ marginTop: 14 }}>
        <div className={waStyles.statBlock}>
          <div className={waStyles.statBlockLabel}>Runs today</div>
          <div className={waStyles.statBlockValue}>42</div>
        </div>
        <div className={waStyles.statBlock}>
          <div className={waStyles.statBlockLabel}>Success</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-whatsapp)' }}>100%</div>
        </div>
        <div className={waStyles.statBlock}>
          <div className={waStyles.statBlockLabel}>Avg time</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-primary)' }}>0.8s</div>
        </div>
      </div>
      <div className={styles.miniRow} style={{ marginTop: 10 }}>
        <Icon name="check_circle" size={15} color="var(--color-whatsapp)" />
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>Rahul Shah · assigned + WhatsApp sent</span>
        <span style={{ fontSize: 10, color: 'var(--color-text-faint)' }}>2m</span>
      </div>
      <div className={styles.footerRow} style={{ marginTop: 14 }}>
        <span className={styles.footerMeta}>Last run 2m ago</span>
        <span className={styles.footerAction}>+ Add step</span>
      </div>
    </div>
  );
}

/** [2] Email Automation: a numbered welcome journey with open-rate badges + stats. */
export function EmailAutomationMock() {
  const steps = [
    { n: 0, bg: 'var(--color-primary)', title: 'Welcome email', badge: '72% open', badgeColor: 'var(--color-whatsapp)', badgeBg: 'var(--color-green-tint)', meta: 'Day 0 · sent instantly' },
    { n: 2, bg: '#ff8c68', title: 'Product highlights', badge: '54% open', badgeColor: 'var(--color-whatsapp)', badgeBg: 'var(--color-green-tint)', meta: 'Day 2 · if no reply' },
    { n: 7, bg: '#ffb199', title: 'Limited-time offer', badge: 'scheduled', badgeColor: 'var(--color-yellow-icon)', badgeBg: 'var(--color-yellow-tint)', meta: 'Day 7 · re-engagement' },
    { n: 14, bg: 'var(--color-border-light)', ntext: 'var(--color-text-faint)', title: 'Final check-in', badge: 'queued', badgeColor: 'var(--color-text-faint)', badgeBg: '#f3ede2', meta: 'Day 14 · exit if converted', dim: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={waStyles.panelHead}>
        <span className={waStyles.panelTitle}>Welcome Journey</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-blue)', background: 'var(--color-blue-tint)' }}>3 emails</span>
      </div>
      <div className={styles.miniRow} style={{ background: '#fff', marginBottom: 14 }}>
        <Icon name="group" size={15} color="var(--color-purple)" />
        <span style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>Audience · New leads (no reply)</span>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)' }}>2,140</span>
      </div>
      <div className={styles.numTimeline}>
        <span className={styles.numTimelineLine} />
        {steps.map((s) => (
          <div key={s.title} className={styles.numTimelineStep}>
            <span className={styles.numBadge} style={{ background: s.bg, color: s.ntext || '#fff' }}>{s.n}</span>
            <div className={styles.numCard} style={s.dim ? { opacity: 0.7 } : undefined}>
              <div className={styles.numCardHead}>
                <span className={styles.numCardTitle}>{s.title}</span>
                <span className={waStyles.tagPill} style={{ color: s.badgeColor, background: s.badgeBg }}>{s.badge}</span>
              </div>
              <div className={styles.numCardMeta}>{s.meta}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={waStyles.stat3} style={{ marginTop: 14 }}>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Sent</div>
          <div className={waStyles.statBlockValue}>6,120</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Avg open</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-whatsapp)' }}>63%</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Replies</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-primary)' }}>418</div>
        </div>
      </div>
    </div>
  );
}

/** [3] WhatsApp Automation: an AI-automated appointment confirmation + reminder chat. */
export function WhatsAppAutomationMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ overflow: 'hidden' }}>
      <div className={waStyles.waHeader}>
        <span className={waStyles.waAvatar}>
          <Icon name="smart_toy" size={20} color="var(--color-whatsapp)" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={waStyles.waHeaderName}>AiEngage · Automated</div>
          <div className={waStyles.waHeaderStatus}>replies instantly</div>
        </div>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-whatsapp-light)' }}>AUTO</span>
      </div>
      <div className={waStyles.chatBody}>
        <div className={waStyles.bubbleIn}>Hi, I submitted a form for a site visit.</div>
        <div className={waStyles.bubbleOut}>
          Thanks! Your visit is confirmed for Sat 11 AM 📍
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
            <span className={waStyles.miniTag} style={{ color: 'var(--color-whatsapp)', background: '#fff' }}>Automated</span>
            <Icon name="done_all" size={13} color="#34b7f1" />
          </div>
        </div>
        <div className={waStyles.bubbleOut}>
          Reminder: your visit is tomorrow at 11 AM. Reply RESCHEDULE to change.
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
            <span className={waStyles.miniTag} style={{ color: 'var(--color-whatsapp)', background: '#fff' }}>Automated · 24h before</span>
            <Icon name="done_all" size={13} color="#34b7f1" />
          </div>
        </div>
        <div className={waStyles.bubbleIn}>Perfect, see you then!</div>
        <div className={waStyles.bubbleQualified}>
          <Icon name="check_circle" size={13} />
          3 messages auto-sent
        </div>
      </div>
      <div className={styles.footerRow} style={{ padding: '11px 14px', borderTop: '1px solid var(--color-border-light)' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className={styles.footerMeta} style={{ fontWeight: 700 }}>TRIGGER</span>
          <span style={{ fontSize: 11, fontWeight: 600 }}>Form submitted</span>
        </span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>3-step sequence</span>
      </div>
    </div>
  );
}

/** [4] Appointment Reminder Automation: a day view with a highlighted confirmed visit. */
export function AppointmentReminderMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.calendarHead}>
        <span className={styles.calendarTitle}>Saturday, 12 July</span>
        <Icon name="calendar_month" size={20} color="var(--color-text-faint)" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div className={styles.slotRow}>
          <span className={styles.slotTime}>10:00</span>
          <div className={styles.slotCard}>
            <div className={styles.slotCardTitle}>Team sync</div>
          </div>
        </div>
        <div className={styles.slotRow}>
          <span className={`${styles.slotTime} ${styles.slotTimeActive}`}>11:00</span>
          <div className={styles.slotCardHighlight}>
            <div className={styles.slotCardHeadRow}>
              <span className={styles.slotCardHeadTitle}>Site visit · Skyline 2BHK</span>
              <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>Confirmed</span>
            </div>
            <div className={styles.slotCardPerson}>
              <Icon name="person" size={14} color="var(--color-text-faint)" />
              Sanjay Patel · Prahlad Nagar
            </div>
            <div className={styles.slotChecklist}>
              <span className={styles.slotCheckRow} style={{ color: 'var(--color-whatsapp)' }}>
                <Icon name="check_circle" size={15} color="var(--color-whatsapp)" />
                Reminder sent · 24h before
              </span>
              <span className={styles.slotCheckRow} style={{ color: 'var(--color-whatsapp)' }}>
                <Icon name="check_circle" size={15} color="var(--color-whatsapp)" />
                Reminder sent · 1h before
              </span>
              <span className={styles.slotCheckRow} style={{ color: 'var(--color-text-faint)' }}>
                <Icon name="schedule" size={15} color="var(--color-text-faint)" />
                Follow-up · scheduled after visit
              </span>
            </div>
          </div>
        </div>
        <div className={styles.slotRow}>
          <span className={styles.slotTime}>14:30</span>
          <div className={styles.slotCard}>
            <div className={styles.slotCardTitle}>Demo · AiEngage CRM</div>
          </div>
        </div>
      </div>
      <div className={styles.remindRow}>
        <span className={styles.remindLabel}>REMIND VIA</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>WhatsApp</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-blue)', background: 'var(--color-blue-tint)' }}>Email</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-text-muted)', background: '#f3ede2' }}>24h + 1h</span>
      </div>
      <div className={styles.statBanner}>
        <Icon name="notifications_active" size={16} color="var(--color-whatsapp)" />
        No-show rate down 38% this month
      </div>
    </div>
  );
}

/** [5] Lead Nurturing Automation: a scored sequence with per-step engagement status. */
export function LeadNurturingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Nurture Sequence · Ravi D.</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-purple)', background: 'var(--color-purple-tint)' }}>Step 3 of 5</span>
      </div>
      <div className={styles.scoreBox}>
        <div className={styles.scoreHeadRow}>
          <span className={styles.scoreLabel}>Lead score</span>
          <span className={styles.scoreValue}>
            78 <span className={styles.scoreDelta}>▲ +32</span>
          </span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: '78%', background: 'linear-gradient(90deg,#ffb199,#ff5f38)' }} />
        </div>
      </div>
      <div className={styles.stepList}>
        <div className={`${styles.stepRow} ${styles.stepRowDone}`}>
          <Icon name="check_circle" size={17} color="var(--color-whatsapp)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Welcome email</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-whatsapp)' }}>Opened</span>
        </div>
        <div className={`${styles.stepRow} ${styles.stepRowDone}`}>
          <Icon name="check_circle" size={17} color="var(--color-whatsapp)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Case study · WhatsApp</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-whatsapp)' }}>Clicked</span>
        </div>
        <div className={`${styles.stepRow} ${styles.stepRowActive}`}>
          <Icon name="pending" size={17} color="var(--color-primary)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Demo invitation</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-primary-hover)' }}>Sending now</span>
        </div>
        <div className={`${styles.stepRow} ${styles.stepRowPending}`}>
          <Icon name="radio_button_unchecked" size={17} color="var(--color-text-faint)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Offer message</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-text-faint)' }}>Day 6</span>
        </div>
      </div>
      <div className={styles.flagBanner}>
        <Icon name="flag" size={16} color="var(--color-primary-dark-accent)" />
        <span className={styles.flagText}>Marked sales-ready at score 80</span>
      </div>
    </div>
  );
}

/** [6] Customer Onboarding Automation: a progress checklist for a new account. */
export function CustomerOnboardingMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Onboarding · Joshi Realty</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>4 of 6 done</span>
      </div>
      <div className={styles.progressTrack} style={{ marginBottom: 14 }}>
        <div className={styles.progressFill} style={{ width: '66%', background: 'var(--color-green)' }} />
      </div>
      <div className={styles.stepList}>
        <div className={styles.miniRow} style={{ background: '#fff' }}>
          <Icon name="check_circle" size={18} color="var(--color-whatsapp)" />
          <span style={{ flex: 1, fontSize: 11.5, fontWeight: 600 }}>Welcome email &amp; WhatsApp sent</span>
        </div>
        <div className={styles.miniRow} style={{ background: '#fff' }}>
          <Icon name="check_circle" size={18} color="var(--color-whatsapp)" />
          <span style={{ flex: 1, fontSize: 11.5, fontWeight: 600 }}>Account setup instructions</span>
        </div>
        <div className={styles.miniRow} style={{ background: '#fff' }}>
          <Icon name="check_circle" size={18} color="var(--color-whatsapp)" />
          <span style={{ flex: 1, fontSize: 11.5, fontWeight: 600 }}>Documents collected</span>
        </div>
        <div className={styles.miniRow} style={{ background: '#fff' }}>
          <Icon name="check_circle" size={18} color="var(--color-whatsapp)" />
          <span style={{ flex: 1, fontSize: 11.5, fontWeight: 600 }}>Kickoff call scheduled</span>
        </div>
        <div className={`${styles.stepRow} ${styles.stepRowActive}`}>
          <Icon name="pending" size={18} color="var(--color-primary)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Team introduction message</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-primary-hover)' }}>Today</span>
        </div>
        <div className={`${styles.stepRow} ${styles.stepRowPending}`}>
          <Icon name="radio_button_unchecked" size={18} color="var(--color-text-faint)" />
          <span className={styles.stepTitle} style={{ flex: 1 }}>Feedback request</span>
          <span className={styles.stepStatus} style={{ color: 'var(--color-text-faint)' }}>Day 14</span>
        </div>
      </div>
      <div className={waStyles.stat3} style={{ marginTop: 14 }}>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Steps done</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-whatsapp)' }}>4/6</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Day</div>
          <div className={waStyles.statBlockValue}>3</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>On track</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-whatsapp)' }}>Yes</div>
        </div>
      </div>
    </div>
  );
}

/** [7] Deal Stage Automation: actions fired automatically when a deal is won. */
export function DealStageMock() {
  const actions = [
    { icon: 'rocket_launch', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', label: 'Start onboarding journey', done: true },
    { icon: 'notifications', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', label: 'Notify finance team', done: true },
    { icon: 'receipt_long', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', label: 'Generate invoice', done: true },
    { icon: 'reviews', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', label: 'Schedule feedback request', done: false },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={waStyles.statHeadRow}>
        <span className={waStyles.statHeadTitle}>Deal · Green Villa</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)', fontWeight: 700 }}>₹1.2Cr</span>
      </div>
      <div className={styles.stageRow}>
        <span className={styles.stagePill}>Negotiation</span>
        <Icon name="arrow_forward" size={16} color="var(--color-primary)" />
        <span className={styles.stagePillWon}>Closed Won 🎉</span>
      </div>
      <div className={styles.triggeredLabel}>TRIGGERED AUTOMATICALLY</div>
      <div className={styles.stepList}>
        {actions.map((a) => (
          <div key={a.label} className={styles.dealActionRow}>
            <span className={styles.dealActionIcon} style={{ background: a.bg }}>
              <Icon name={a.icon} size={16} color={a.color} />
            </span>
            <span className={styles.dealActionLabel}>{a.label}</span>
            <Icon name={a.done ? 'check' : 'schedule'} size={15} color={a.done ? 'var(--color-green)' : 'var(--color-text-faint)'} />
          </div>
        ))}
      </div>
      <div className={styles.statBanner}>
        <Icon name="check_circle" size={16} color="var(--color-whatsapp)" />
        <span style={{ flex: 1 }}>4 actions fired automatically</span>
        <span style={{ fontWeight: 700 }}>Just now</span>
      </div>
    </div>
  );
}

/** [8] AI-Powered Automation: next-best-action suggestions with approve/dismiss controls. */
export function AIAutomationMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.aiHeadRow}>
        <span className={styles.aiHeadIcon}>
          <Icon name="auto_awesome" size={18} color="var(--color-purple)" />
        </span>
        <span className={styles.aiHeadTitle}>Next Best Action</span>
      </div>
      <div className={waStyles.stat3} style={{ marginBottom: 12 }}>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Suggestions</div>
          <div className={waStyles.statBlockValue}>12</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Approved</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-whatsapp)' }}>9</div>
        </div>
        <div className={styles.statBlockWhite}>
          <div className={waStyles.statBlockLabel}>Time saved</div>
          <div className={waStyles.statBlockValue} style={{ color: 'var(--color-primary)' }}>4h</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        <div className={styles.aiCard}>
          <div className={styles.aiCardHead}>
            <span className={waStyles.avatarCircle} style={{ background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>AS</span>
            <span className={styles.aiCardName}>Anita Sharma</span>
            <span className={styles.aiCardTag} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>HIGH INTENT</span>
          </div>
          <div className={styles.aiCardText}>Opened quote 3× today — call within the hour to close.</div>
          <div className={styles.aiCardActions}>
            <span className={styles.aiBtnPrimary}>Approve &amp; call</span>
            <span className={styles.aiBtnSecondary}>Snooze</span>
          </div>
        </div>
        <div className={styles.aiCard}>
          <div className={styles.aiCardHead}>
            <span className={waStyles.avatarCircle} style={{ background: 'var(--color-red-tint)', color: 'var(--color-red)' }}>MJ</span>
            <span className={styles.aiCardName}>Manoj Joshi</span>
            <span className={styles.aiCardTag} style={{ color: 'var(--color-red)', background: 'var(--color-red-tint)' }}>AT RISK</span>
          </div>
          <div className={styles.aiCardText}>No activity in 14 days — send a re-engagement message.</div>
          <div className={styles.aiCardActions}>
            <span className={styles.aiBtnPrimary}>Send message</span>
            <span className={styles.aiBtnSecondary}>Dismiss</span>
          </div>
        </div>
        <div className={styles.aiMiniRow}>
          <Icon name="route" size={17} color="var(--color-purple)" />
          <span className={styles.aiMiniLabel}>Route 4 new leads to best-fit reps</span>
          <span className={styles.aiMiniTag} style={{ color: 'var(--color-purple)' }}>Auto</span>
        </div>
        <div className={styles.aiMiniRow}>
          <Icon name="sentiment_dissatisfied" size={17} color="var(--color-yellow-icon)" />
          <span className={styles.aiMiniLabel}>Flag unhappy reply from Priya N.</span>
          <span className={styles.aiMiniTag} style={{ color: 'var(--color-yellow-icon)' }}>Review</span>
        </div>
      </div>
    </div>
  );
}
