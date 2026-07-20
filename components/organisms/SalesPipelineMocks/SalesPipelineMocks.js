import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './SalesPipelineMocks.module.css';

/** Hero: a compact 3-column kanban with deal cards moving toward Won. */
export function KanbanHeroMock() {
  const columns = [
    { label: 'NEW', count: 2, labelColor: 'var(--color-text-muted)', deals: [
      { name: 'Skyline 2BHK', value: '₹85L', initials: 'RS', bg: '#ffe1d6', color: 'var(--color-primary-hover)' },
      { name: 'Green Villa', value: '₹1.2Cr', initials: 'MJ', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
    ] },
    { label: 'NEGOTIATION', count: 1, labelColor: 'var(--color-text-muted)', deals: [
      { name: 'Office Lease', value: '₹3.4L/mo', initials: 'VK', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', active: true },
    ] },
    { label: 'WON', count: 1, labelColor: 'var(--color-green)', deals: [
      { name: 'Plot A-12', value: '₹62L', initials: 'PN', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', won: true },
    ] },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Sales Pipeline</span>
        <span className={waStyles.pillGreen}>₹42.6L open</span>
      </div>
      <div className={styles.board}>
        {columns.map((col) => (
          <div key={col.label} className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.columnLabel} style={{ color: col.labelColor }}>{col.label}</span>
              <span className={styles.columnCount}>{col.count}</span>
            </div>
            {col.deals.map((d) => (
              <div key={d.name} className={`${styles.dealCard} ${d.active ? styles.dealCardActive : ''}`}>
                <div className={styles.dealCardTitle}>{d.name}</div>
                <div className={styles.dealCardFoot}>
                  <span className={`${styles.dealCardValue} ${d.won ? styles.dealCardValueWon : ''}`}>{d.value}</span>
                  <span className={waStyles.avatarCircle} style={{ width: 20, height: 20, fontSize: 8.5, background: d.bg, color: d.color }}>{d.initials}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** [1] Pipeline Management: a full kanban board with stage stats. */
export function PipelineBoardMock() {
  const columns = [
    { label: 'ENQUIRY', count: 2, deals: [
      { name: 'Riverside Flat', value: '₹74L' },
      { name: 'Lake View 3BHK', value: '₹1.1Cr' },
    ] },
    { label: 'SITE VISIT', count: 2, alt: true, deals: [
      { name: 'Skyline 2BHK', value: '₹85L', active: true },
      { name: 'Office Lease', value: '₹3.4L/mo' },
    ] },
    { label: 'CLOSED WON', count: 2, won: true, deals: [
      { name: 'Plot A-12', value: '₹62L', won: true },
      { name: 'Sunrise Apt', value: '₹48L', won: true },
    ] },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="view_kanban" size={18} color="var(--color-primary)" />
          <span className={styles.panelTitle}>Real Estate Pipeline</span>
        </div>
        <span className={styles.panelMeta}>Drag to move stage</span>
      </div>
      <div className={styles.statRow}>
        <div className={styles.statChip}>
          <div className={styles.statChipLabel}>Open deals</div>
          <div className={styles.statChipValue}>32</div>
        </div>
        <div className={styles.statChip}>
          <div className={styles.statChipLabel}>Pipeline value</div>
          <div className={styles.statChipValue} style={{ color: 'var(--color-primary)' }}>₹42.6L</div>
        </div>
        <div className={styles.statChip}>
          <div className={styles.statChipLabel}>Win rate</div>
          <div className={styles.statChipValue} style={{ color: 'var(--color-green)' }}>38%</div>
        </div>
      </div>
      <div className={styles.board}>
        {columns.map((col) => (
          <div key={col.label} className={`${styles.column} ${col.alt ? styles.columnAlt : ''}`}>
            <div className={styles.columnHead}>
              <span className={styles.columnLabel} style={{ color: col.won ? 'var(--color-green)' : col.alt ? 'var(--color-primary-hover)' : undefined }}>{col.label}</span>
              <span className={styles.columnCount}>{col.count}</span>
            </div>
            {col.deals.map((d) => (
              <div key={d.name} className={`${styles.dealCard} ${d.active ? styles.dealCardActive : ''}`}>
                {d.active && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 5 }}>
                    <Icon name="drag_indicator" size={14} color="var(--color-primary)" />
                    <span className={styles.dealCardTitle} style={{ marginBottom: 0 }}>{d.name}</span>
                  </div>
                )}
                {!d.active && <div className={styles.dealCardTitle}>{d.name}</div>}
                <span className={`${styles.dealCardValue} ${d.won ? styles.dealCardValueWon : ''}`}>{d.value}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerChips}>
          <span className={styles.footerChip}>+ Add stage</span>
          <span className={styles.footerChip}>Switch pipeline</span>
        </div>
        <span className={styles.footerMeta}>Updated 2m ago</span>
      </div>
    </div>
  );
}

/** [2] Deal Management: a single deal record with fields, activity, and quick actions. */
export function DealDetailMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.dealHead}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className={waStyles.avatarCircle} style={{ width: 38, height: 38, borderRadius: 10, fontSize: 13, background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>SP</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Skyline 2BHK — Sanjay Patel</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-faint)' }}>Real Estate Pipeline · Negotiation</div>
          </div>
        </div>
        <span className={styles.priorityTag}>High priority</span>
      </div>
      <div className={styles.stageBar}>
        <span className={styles.stageBarSeg} style={{ background: 'var(--color-green)' }} />
        <span className={styles.stageBarSeg} style={{ background: 'var(--color-green)' }} />
        <span className={styles.stageBarSeg} style={{ background: 'var(--color-primary)' }} />
        <span className={styles.stageBarSeg} />
        <span className={styles.stageBarLabel}>Negotiation</span>
      </div>
      <div className={styles.fieldGrid}>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Deal value</div>
          <div className={styles.fieldValue} style={{ color: 'var(--color-primary)' }}>₹85,00,000</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Expected close</div>
          <div className={styles.fieldValue}>28 Jul 2026</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Owner</div>
          <div className={styles.fieldValue}>Meera · Sales</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Interest</div>
          <div className={styles.fieldValue}>2BHK · Prahlad Nagar</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Source</div>
          <div className={styles.fieldValue}>Meta Ads</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Probability</div>
          <div className={styles.fieldValue} style={{ color: 'var(--color-green)' }}>72%</div>
        </div>
      </div>
      <div className={styles.activityBox}>
        <div className={styles.activityBoxTitle}>Recent activity</div>
        <div className={styles.activityRow}>
          <Icon name="call" size={15} color="var(--color-blue)" />
          <span style={{ flex: 1, color: 'var(--color-text-secondary)' }}>Call logged · discussed pricing</span>
          <span style={{ fontSize: 10, color: 'var(--color-text-faint)' }}>2h</span>
        </div>
        <div className={styles.activityRow}>
          <Icon name="description" size={15} color="var(--color-purple)" />
          <span style={{ flex: 1, color: 'var(--color-text-secondary)' }}>Quotation v2 shared</span>
          <span style={{ fontSize: 10, color: 'var(--color-text-faint)' }}>1d</span>
        </div>
        <div className={styles.activityRow}>
          <Icon name="chat" size={15} color="var(--color-green)" />
          <span style={{ flex: 1, color: 'var(--color-text-secondary)' }}>WhatsApp reply received</span>
          <span style={{ fontSize: 10, color: 'var(--color-text-faint)' }}>1d</span>
        </div>
      </div>
      <div className={styles.actionRow}>
        <span className={styles.actionBtn}>
          <Icon name="description" size={15} color="var(--color-blue)" />Quotation
        </span>
        <span className={styles.actionBtn}>
          <Icon name="sticky_note_2" size={15} color="var(--color-purple)" />Notes
        </span>
        <span className={styles.actionBtn}>
          <Icon name="forum" size={15} color="var(--color-green)" />Chats
        </span>
      </div>
    </div>
  );
}

/** [3] Task Management: today's tasks filtered by type. */
export function TaskListMock() {
  const filters = ['All', 'Calls', 'Demos', 'Payments'];
  const tasks = [
    { icon: 'description', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', title: 'Send quotation · Office Lease', meta: 'Assigned to Meera', time: '3:30 PM' },
    { icon: 'payments', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'Payment follow-up · Plot A-12', meta: 'Booking amount due', time: '5:00 PM' },
    { icon: 'folder_open', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', title: 'Collect documents · Anita Sharma', meta: 'KYC + address proof', time: '6:00 PM' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-green)', title: 'WhatsApp follow-up · Ravi Desai', meta: 'Share brochure', time: '6:30 PM' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>My Tasks</span>
        <span className={styles.panelMeta}>Today · 7</span>
      </div>
      <div className={waStyles.filterRow} style={{ marginBottom: 13 }}>
        {filters.map((f, i) => (
          <span key={f} className={i === 0 ? waStyles.filterActive : waStyles.filterChip}>{f}</span>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {tasks.map((t) => (
          <div key={t.title} className={styles.taskRow}>
            <span className={styles.taskIcon} style={{ background: t.bg }}>
              <Icon name={t.icon} size={18} color={t.color} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.taskTitle}>{t.title}</div>
              <div className={styles.taskMeta}>{t.meta}</div>
            </div>
            <span className={styles.taskTime}>{t.time}</span>
          </div>
        ))}
      </div>
      <div className={styles.footerRow}>
        <span className={styles.footerMeta}>3 done · 4 pending today</span>
        <span className={styles.footerAction}>+ New task</span>
      </div>
    </div>
  );
}

/** [4] Follow-Up Management: a scheduled follow-up calendar with overdue flags. */
export function FollowUpScheduleMock() {
  const items = [
    { day: 'MON', date: 14, title: 'WhatsApp · Ravi Desai', meta: 'Overdue by 2 days', icon: 'chat', color: 'var(--color-green)', overdue: true },
    { day: 'WED', date: 16, title: 'Proposal reminder · Anita Sharma', meta: 'Due 11:00 AM', icon: 'mail', color: 'var(--color-purple)' },
    { day: 'FRI', date: 18, title: 'Renewal reminder · Vikram Kumar', meta: 'Annual plan', icon: 'event_repeat', color: 'var(--color-whatsapp)' },
    { day: 'WED', date: 23, title: 'Payment reminder · Plot A-12', meta: 'Balance due', icon: 'payments', color: 'var(--color-whatsapp)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Follow-Up Schedule</span>
        <span className={styles.priorityTag}>2 overdue</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {items.map((it) => (
          <div key={it.title} className={`${styles.taskRow} ${it.overdue ? styles.overdueRow : ''}`} style={{ background: it.overdue ? undefined : '#fff' }}>
            <span className={styles.dateBox}>
              {it.day}
              <br />
              <span className={styles.dateBoxNum}>{it.date}</span>
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.taskTitle}>{it.title}</div>
              <div className={styles.taskMeta}>{it.meta}</div>
            </div>
            <Icon name={it.icon} size={18} color={it.color} />
          </div>
        ))}
      </div>
      <div className={styles.footerRow}>
        <span className={styles.footerMeta}>7 scheduled · 2 overdue this week</span>
        <span className={styles.footerAction}>View all</span>
      </div>
    </div>
  );
}

/** [5] Connected Pipeline: a deal with every linked conversation and record. */
export function ConnectedDealMock() {
  const linked = [
    { icon: 'chat', color: 'var(--color-whatsapp)', label: 'WhatsApp conversation', meta: '6 chats' },
    { icon: 'call', color: 'var(--color-blue)', label: 'Calls logged', meta: '3 calls' },
    { icon: 'mail', color: 'var(--color-yellow-icon)', label: 'Email thread', meta: '5 emails' },
    { icon: 'description', color: 'var(--color-purple)', label: 'Quotations shared', meta: '2 files' },
    { icon: 'payments', color: 'var(--color-green)', label: 'Advance payment', meta: '₹5L paid' },
    { icon: 'event_repeat', color: 'var(--color-primary)', label: 'Tasks & follow-ups', meta: '4 open' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ padding: 12 }}>
      <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
          <span className={waStyles.avatarCircle} style={{ width: 40, height: 40, borderRadius: 11, fontSize: 13, background: '#ffe1d6', color: 'var(--color-primary-hover)' }}>GV</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Green Villa</div>
            <div style={{ fontSize: 11, color: 'var(--color-text-faint)' }}>Manoj Joshi · Joshi Realty</div>
          </div>
        </div>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-primary)', background: 'var(--color-primary-tint)', borderRadius: 8, padding: '5px 11px' }}>₹1.2Cr</span>
      </div>
      <div style={{ padding: '13px 18px', borderBottom: '1px solid var(--color-border-light)', display: 'flex', gap: 8 }}>
        <div className={styles.fieldChip} style={{ flex: 1, padding: '8px 10px' }}>
          <div className={styles.fieldLabel}>Stage</div>
          <div className={styles.fieldValue} style={{ fontSize: 11.5 }}>Negotiation</div>
        </div>
        <div className={styles.fieldChip} style={{ flex: 1, padding: '8px 10px' }}>
          <div className={styles.fieldLabel}>Owner</div>
          <div className={styles.fieldValue} style={{ fontSize: 11.5 }}>Meera</div>
        </div>
        <div className={styles.fieldChip} style={{ flex: 1, padding: '8px 10px' }}>
          <div className={styles.fieldLabel}>Close</div>
          <div className={styles.fieldValue} style={{ fontSize: 11.5 }}>30 Jul</div>
        </div>
      </div>
      <div style={{ padding: '14px 18px' }}>
        <div className={styles.linkedLabel}>LINKED CONTEXT</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {linked.map((l) => (
            <div key={l.label} className={styles.linkedRow}>
              <Icon name={l.icon} size={16} color={l.color} />
              <span className={styles.linkedRowLabel}>{l.label}</span>
              <span className={styles.linkedRowMeta}>{l.meta}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px 18px', borderTop: '1px solid var(--color-border-light)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className={styles.footerMeta}>Last activity 2h ago</span>
        <span className={styles.footerAction}>Open deal</span>
      </div>
    </div>
  );
}

/** [6] Team Pipeline: switching between department pipelines with per-stage bars. */
export function TeamPipelineSwitchMock() {
  const pipelines = [
    { icon: 'apartment', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', name: 'Real Estate Sales', deals: 32, active: true, segs: [{ w: 2, c: 'var(--color-primary)' }, { w: 1.5, c: '#ffb199' }, { w: 1, c: 'var(--color-green)' }] },
    { icon: 'memory', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', name: 'IT Services', deals: 21, segs: [{ w: 1.2, c: 'var(--color-blue)' }, { w: 2, c: '#a9c6f5' }, { w: 1, c: 'var(--color-green)' }] },
    { icon: 'flight_takeoff', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', name: 'Travel — Mumbai Branch', deals: 17, segs: [{ w: 1, c: 'var(--color-purple)' }, { w: 1.4, c: '#c5b8f0' }, { w: 1.6, c: 'var(--color-green)' }] },
    { icon: 'medical_services', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', name: 'Healthcare Sales', deals: 15, segs: [{ w: 1.6, c: 'var(--color-green)' }, { w: 1, c: '#9fd9bb' }, { w: 1.2, c: 'var(--color-green)' }] },
    { icon: 'account_balance', bg: '#fff3d1', color: 'var(--color-yellow-icon)', name: 'Finance — Delhi', deals: 13, segs: [{ w: 1, c: 'var(--color-yellow-icon)' }, { w: 1.8, c: '#ead79a' }, { w: 1.3, c: 'var(--color-green)' }] },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle} style={{ fontSize: 13 }}>Switch Pipeline</span>
        <span className={styles.panelMeta}>6 pipelines</span>
      </div>
      <div className={styles.statRow} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className={styles.statChip} style={{ background: '#fff' }}>
          <div className={styles.statChipLabel}>Total open deals</div>
          <div className={styles.statChipValue}>98</div>
        </div>
        <div className={styles.statChip} style={{ background: '#fff' }}>
          <div className={styles.statChipLabel}>Combined value</div>
          <div className={styles.statChipValue} style={{ color: 'var(--color-primary)' }}>₹1.4Cr</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {pipelines.map((p) => (
          <div key={p.name} className={`${styles.pipelineRow} ${p.active ? styles.pipelineRowActive : ''}`}>
            <div className={styles.pipelineRowHead}>
              <div className={styles.pipelineName}>
                <span className={styles.pipelineIcon} style={{ background: p.bg }}>
                  <Icon name={p.icon} size={16} color={p.color} />
                </span>
                <span className={styles.pipelineNameText}>{p.name}</span>
              </div>
              <span className={styles.pipelineDealCount}>{p.deals} deals</span>
            </div>
            <div className={styles.pipelineStageBar}>
              {p.segs.map((s, i) => (
                <span key={i} className={styles.pipelineStageSeg} style={{ flex: s.w, background: s.c }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footerRow}>
        <span className={styles.footerMeta}>Manager view · all teams</span>
        <span className={styles.footerAction}>+ New pipeline</span>
      </div>
    </div>
  );
}

/** [7] Payment Tracking: paid/pending/overdue milestones for one deal. */
export function PaymentTrackerMock() {
  const payments = [
    { dot: 'var(--color-green)', title: 'Booking advance', meta: 'Paid · 02 Jul', amount: '₹5,00,000', color: 'var(--color-green)' },
    { dot: 'var(--color-yellow-icon)', title: 'Milestone 1', meta: 'Pending · due 25 Jul', amount: '₹40,00,000', color: 'var(--color-yellow-icon)' },
    { dot: 'var(--color-primary-hover)', title: 'Registration fee', meta: 'Overdue · 10 Jul', amount: '₹2,50,000', color: 'var(--color-primary-hover)', overdue: true },
    { dot: 'var(--color-yellow-icon)', title: 'Milestone 2', meta: 'Pending · due 15 Aug', amount: '₹40,00,000', color: 'var(--color-yellow-icon)' },
    { dot: 'var(--color-yellow-icon)', title: 'Final handover', meta: 'Pending · on possession', amount: '₹32,50,000', color: 'var(--color-yellow-icon)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Payments · Green Villa</span>
        <span className={styles.panelMeta}>₹1.2Cr total</span>
      </div>
      <div className={styles.paymentSummaryRow}>
        <div className={styles.paymentSummaryChip} style={{ background: 'var(--color-green-tint)' }}>
          <div className={styles.paymentSummaryLabel} style={{ color: 'var(--color-whatsapp)' }}>Paid</div>
          <div className={styles.paymentSummaryValue} style={{ color: 'var(--color-whatsapp)' }}>₹5L</div>
        </div>
        <div className={styles.paymentSummaryChip} style={{ background: '#fff3d1' }}>
          <div className={styles.paymentSummaryLabel} style={{ color: '#8a6d14' }}>Pending</div>
          <div className={styles.paymentSummaryValue} style={{ color: 'var(--color-yellow-icon)' }}>₹40L</div>
        </div>
        <div className={styles.paymentSummaryChip} style={{ background: '#ffe9e1' }}>
          <div className={styles.paymentSummaryLabel} style={{ color: '#c0503a' }}>Overdue</div>
          <div className={styles.paymentSummaryValue} style={{ color: 'var(--color-primary-hover)' }}>₹2.5L</div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {payments.map((p) => (
          <div key={p.title} className={styles.paymentRow} style={p.overdue ? { background: '#fff6f3', borderColor: '#f6c9ba' } : undefined}>
            <span className={styles.paymentDot} style={{ background: p.dot }} />
            <div style={{ flex: 1 }}>
              <div className={styles.paymentTitle}>{p.title}</div>
              <div className={styles.paymentMeta} style={p.overdue ? { color: '#c0503a', fontWeight: 600 } : undefined}>{p.meta}</div>
            </div>
            <span className={styles.paymentAmount} style={{ color: p.color }}>{p.amount}</span>
          </div>
        ))}
      </div>
      <div className={styles.paymentTotalBar}>
        <span style={{ fontSize: 11, color: 'var(--color-dark-text-muted)' }}>Collected so far</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>
          ₹5L <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--color-dark-text-muted)' }}>/ ₹1.2Cr</span>
        </span>
      </div>
    </div>
  );
}

/** [8] External Record Sharing: a deal record shared with controlled permissions. */
export function ShareRecordMock() {
  const people = [
    { initials: 'MJ', name: 'Manoj Joshi', role: 'Customer', permission: 'View only', bg: '#ffe1d6', color: 'var(--color-primary-hover)' },
    { initials: 'AP', name: 'Anil Partner', role: 'Channel partner', permission: 'Can comment', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)' },
    { initials: 'RA', name: 'Riya (Accounts)', role: 'External team', permission: 'View only', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
        <Icon name="share" size={20} color="var(--color-primary)" />
        <span className={styles.panelTitle}>Share deal record</span>
      </div>
      <div className={styles.shareFileRow}>
        <span className={styles.shareFileIcon}>
          <Icon name="description" size={17} color="var(--color-primary)" />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Green Villa — Quotation v2</div>
          <div style={{ fontSize: 10.5, color: 'var(--color-text-faint)' }}>PDF · ₹1.2Cr</div>
        </div>
      </div>
      <div className={styles.shareLabel}>Permission scope</div>
      <div className={styles.toggleRow}>
        <span className={`${styles.toggleBtn} ${styles.toggleBtnActive}`}>View only</span>
        <span className={`${styles.toggleBtn} ${styles.toggleBtnInactive}`}>Can comment</span>
      </div>
      <div className={styles.linkRow}>
        <Icon name="link" size={16} color="var(--color-text-faint)" />
        <span className={styles.linkText}>aiengage.io/s/green-villa-9x2</span>
        <span className={styles.linkCopy}>Copy</span>
      </div>
      <div className={styles.shareLabel}>Shared with</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
        {people.map((p) => (
          <div key={p.name} className={styles.shareRow}>
            <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 9.5, background: p.bg, color: p.color }}>{p.initials}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.shareName}>{p.name}</div>
              <div className={styles.shareRole}>{p.role}</div>
            </div>
            <span className={styles.sharePermission}>{p.permission}</span>
          </div>
        ))}
      </div>
      <div className={styles.footerRow} style={{ marginTop: 0 }}>
        <span className={styles.footerMeta}>Internal CRM data hidden</span>
        <span className={styles.footerAction}>Manage access</span>
      </div>
    </div>
  );
}

/** [9] Product Catalog: a searchable catalog beside the deal's line items. */
export function ProductCatalogMock() {
  const products = [
    { name: 'Premium Plan', meta: 'Annual', added: true },
    { name: 'Onboarding Pack', meta: 'One-time', added: true },
    { name: 'Extra Seats ×5', meta: 'Add-on', added: false },
    { name: 'Priority Support', meta: 'Annual', added: true },
    { name: 'Data Migration', meta: 'One-time', added: true },
  ];
  const lineItems = [
    { label: 'Premium Plan', amount: '₹60,000' },
    { label: 'Onboarding', amount: '₹15,000' },
    { label: 'Extra Seats', amount: '₹25,000' },
    { label: 'Priority Support', amount: '₹18,000' },
    { label: 'Data Migration', amount: '₹12,000' },
  ];
  return (
    <div className={styles.catalogSplit}>
      <div className={styles.catalogPanel}>
        <div className={styles.panelHead} style={{ marginBottom: 11 }}>
          <span className={styles.panelTitle} style={{ fontSize: 12 }}>Catalog</span>
          <Icon name="search" size={16} color="var(--color-text-faint)" />
        </div>
        <div className={waStyles.filterRow} style={{ marginBottom: 11 }}>
          <span className={waStyles.filterActive}>All</span>
          <span className={waStyles.filterChip}>Plans</span>
          <span className={waStyles.filterChip}>Add-ons</span>
          <span className={waStyles.filterChip}>Services</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          {products.map((p) => (
            <div key={p.name} className={styles.catalogItemRow}>
              <div>
                <div className={styles.catalogItemName}>{p.name}</div>
                <div className={styles.catalogItemMeta}>{p.meta}</div>
              </div>
              <Icon name={p.added ? 'add_circle' : 'check_circle'} size={18} color={p.added ? 'var(--color-primary)' : 'var(--color-text-faint)'} />
            </div>
          ))}
        </div>
        <div className={waStyles.flowSubmit} style={{ background: 'var(--color-primary)' }}>Add selected to deal</div>
      </div>
      <div className={styles.lineItemsPanel}>
        <div className={styles.lineItemLabel}>DEAL LINE ITEMS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {lineItems.map((l) => (
            <div key={l.label} className={styles.lineItemRow}>
              <span style={{ color: 'var(--color-text-muted)' }}>{l.label}</span>
              <span style={{ fontWeight: 700 }}>{l.amount}</span>
            </div>
          ))}
          <div className={styles.lineItemTotal}>
            <span>Total</span>
            <span style={{ color: 'var(--color-primary)' }}>₹1,30,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [10] Stage Transition Rules: required checklist blocking a stage change. */
export function StageRulesMock() {
  const checks = [
    { label: 'Quotation sent', done: true },
    { label: 'Advance payment recorded', done: true },
    { label: 'Site visit completed', done: true },
    { label: 'Deal value confirmed', done: true },
    { label: 'Agreement documents uploaded', done: true },
    { label: 'Manager approval required', done: false },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.ruleHeadTitle}>
        <Icon name="rule" size={19} color="var(--color-yellow-icon)" />
        Move to &ldquo;Closed Won&rdquo;
      </div>
      <div className={styles.ruleProgressRow}>
        <div className={styles.ruleProgressTrack}>
          <div className={styles.ruleProgressFill} style={{ width: '83%' }} />
        </div>
        <span style={{ fontSize: 10.5, fontWeight: 700, color: 'var(--color-text-muted)' }}>5 of 6</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {checks.map((c) => (
          <div key={c.label} className={`${styles.checklistRow} ${!c.done ? styles.checklistRowPending : ''}`}>
            <Icon name={c.done ? 'check_circle' : 'radio_button_unchecked'} size={17} color={c.done ? 'var(--color-green)' : 'var(--color-primary-hover)'} />
            <span className={!c.done ? styles.checklistRowPendingText : undefined}>{c.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.requiredFieldsBox}>
        <div className={styles.linkedLabel} style={{ marginBottom: 9 }}>REQUIRED FIELDS</div>
        <div className={styles.activityRow}>
          <Icon name="check_circle" size={15} color="var(--color-green)" />
          <span style={{ flex: 1, color: 'var(--color-text-secondary)' }}>Expected close date</span>
        </div>
        <div className={styles.activityRow} style={{ marginBottom: 0 }}>
          <Icon name="radio_button_unchecked" size={15} color="var(--color-primary-hover)" />
          <span style={{ flex: 1, color: '#c0503a', fontWeight: 600 }}>Approver assigned</span>
        </div>
      </div>
      <div className={styles.blockedBanner}>
        <Icon name="block" size={18} color="var(--color-primary-hover)" />
        Stage move blocked — 1 step pending
      </div>
    </div>
  );
}

/** [11] AI Sales Forecasting: projected revenue and the deals that need attention. */
export function ForecastMock() {
  const bars = [48, 66, 58, 82, 95];
  const barColors = ['#ffd9cc', '#ffb199', '#ff8c68', '#ff7350', 'var(--color-primary)'];
  const attention = [
    { color: 'var(--color-primary-hover)', label: 'Office Lease · no activity 12d', amount: '₹3.4L' },
    { color: 'var(--color-yellow-icon)', label: 'Lake View 3BHK · quote pending', amount: '₹1.1Cr' },
    { color: 'var(--color-yellow-icon)', label: 'Skyline 2BHK · awaiting approval', amount: '₹85L' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead} style={{ marginBottom: 16 }}>
        <span className={styles.panelTitle}>Forecast · This Quarter</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-purple)', background: 'var(--color-purple-tint)', borderRadius: 999, padding: '3px 10px' }}>AI projected</span>
      </div>
      <div className={styles.statRow} style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Projected revenue</div>
          <div style={{ fontSize: 19, fontWeight: 700, color: 'var(--color-primary)' }}>₹2.8Cr</div>
        </div>
        <div className={styles.fieldChip}>
          <div className={styles.fieldLabel}>Weighted pipeline</div>
          <div style={{ fontSize: 19, fontWeight: 700 }}>₹4.1Cr</div>
        </div>
      </div>
      <div className={waStyles.chartPanel} style={{ marginBottom: 12 }}>
        <div className={waStyles.miniChart}>
          {bars.map((h, i) => (
            <div key={i} className={waStyles.miniBar} style={{ height: `${h}%`, background: barColors[i] }} />
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <div className={styles.paymentSummaryChip} style={{ flex: 1, background: 'var(--color-green-tint)' }}>
          <div className={styles.paymentSummaryLabel} style={{ color: 'var(--color-whatsapp)' }}>Likely to close</div>
          <div className={styles.paymentSummaryValue} style={{ color: 'var(--color-whatsapp)' }}>14 deals</div>
        </div>
        <div className={styles.paymentSummaryChip} style={{ flex: 1, background: '#fff6f3' }}>
          <div className={styles.paymentSummaryLabel} style={{ color: '#c0503a' }}>At risk</div>
          <div className={styles.paymentSummaryValue} style={{ color: 'var(--color-primary-hover)' }}>5 deals</div>
        </div>
      </div>
      <div className={styles.activityBox} style={{ marginBottom: 0 }}>
        <div className={styles.activityBoxTitle}>Needs attention</div>
        {attention.map((a) => (
          <div key={a.label} className={styles.forecastRow}>
            <span className={styles.forecastDot} style={{ background: a.color }} />
            <span className={styles.forecastLabel}>{a.label}</span>
            <span className={styles.forecastValue}>{a.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
