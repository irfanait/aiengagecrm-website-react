'use client';

import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { HERO_TABS } from '../../../data/homeContent';
import styles from './ProductMock.module.css';

function PipelineTab() {
  const columns = [
    { name: 'New', count: '1,287', cards: [{ n: 'Priya Sharma', m: 'Website form · 2m ago' }, { n: 'Rahul Mehta', m: 'Meta Ads · 11m ago' }] },
    { name: 'Contacted', count: '869', cards: [{ n: 'Kavya Nair', m: 'WhatsApp replied', icon: 'chat', c: 'var(--color-green)' }, { n: 'Arjun Patel', m: 'Call scheduled', icon: 'call' }] },
    { name: 'Qualified', count: '543', cards: [{ n: 'Sneha Reddy', m: 'Quote sent · ₹1.2L' }, { n: 'Vikram Singh', m: 'Demo booked · Fri' }] },
  ];
  const won = { name: 'Won', count: '126', cards: [{ n: 'Ananya Desai', m: 'Paid · ₹86,000', c: 'var(--color-green)' }, { n: 'Rohan Gupta', m: 'Paid · ₹54,500', c: 'var(--color-green)' }] };

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.colHead}>
          <span className={styles.colTitle}>Sales Pipeline</span>
          <span className={styles.chipMuted}>This Month</span>
          <span className={styles.metaRight}>4 stages · 1,287 leads</span>
        </div>
        <div className={styles.board}>
          {columns.map((col) => (
            <div className={styles.boardCol} key={col.name}>
              <div className={styles.boardColHead}>
                {col.name}
                <span>{col.count}</span>
              </div>
              {col.cards.map((card) => (
                <div className={styles.boardCard} key={card.n}>
                  <div className={styles.boardCardName}>{card.n}</div>
                  <div className={styles.boardCardMeta} style={{ color: card.c }}>
                    {card.icon && <Icon name={card.icon} size={11} />}
                    {card.m}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div className={`${styles.boardCol} ${styles.boardColWon}`}>
            <div className={`${styles.boardColHead} ${styles.boardColHeadWon}`}>
              {won.name}
              <span>{won.count}</span>
            </div>
            {won.cards.map((card) => (
              <div className={styles.boardCard} key={card.n}>
                <div className={styles.boardCardName}>{card.n}</div>
                <div className={styles.boardCardMeta} style={{ color: card.c }}>{card.m}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.sideCol} style={{ width: 270 }}>
        <div className={styles.sideHead}>
          <Icon name="auto_awesome" size={18} color="var(--color-primary)" />
          <span className={styles.sideTitle}>AI working for you</span>
        </div>
        <div className={styles.feedList}>
          <div className={styles.feedItem}><Icon name="chat" size={16} color="var(--color-green)" /><span className={styles.feedText}>AI Agent qualified <b>Priya Sharma</b> on WhatsApp — budget ₹1–2L, ready this month</span></div>
          <div className={styles.feedItem}><Icon name="bolt" size={16} color="var(--color-primary)" /><span className={styles.feedText}>Follow-up sequence started for <b>12 leads</b> that went quiet this week</span></div>
          <div className={styles.feedItem}><Icon name="graphic_eq" size={16} color="var(--color-purple)" /><span className={styles.feedText}>Call with <b>Vikram Singh</b> transcribed — 2 action items added</span></div>
          <div className={styles.feedItem}><Icon name="query_stats" size={16} color="var(--color-blue)" /><span className={styles.feedText}>Forecast: <b>₹9.2L</b> likely to close by month end</span></div>
        </div>
      </div>
    </div>
  );
}

function AIAgentTab() {
  return (
    <div className={styles.row} style={{ gap: 0 }}>
      <div className={styles.inboxList}>
        <div className={styles.colHead} style={{ marginBottom: 14 }}>
          <Icon name="inbox" size={17} color="var(--color-green)" />
          <span className={styles.colTitle}>Team Inbox</span>
        </div>
        <div className={`${styles.inboxItem} ${styles.inboxItemActive}`}>
          <div className={styles.inboxItemTop}>
            <span className={styles.inboxItemName}>Priya Sharma</span>
            <span className={styles.inboxItemTag} style={{ color: 'var(--color-primary)' }}>AI HANDLING</span>
          </div>
          <div className={styles.inboxItemPreview}>What&apos;s your monthly budget?</div>
        </div>
        <div className={`${styles.inboxItem} ${styles.inboxItemInactive}`}>
          <div className={styles.inboxItemTop}>
            <span className={styles.inboxItemName}>Rahul Mehta</span>
            <span className={styles.inboxItemTag} style={{ color: 'var(--color-blue)' }}>YOU</span>
          </div>
          <div className={styles.inboxItemPreview}>Quote shared · awaiting reply</div>
        </div>
        <div className={`${styles.inboxItem} ${styles.inboxItemInactive}`}>
          <div className={styles.inboxItemTop}>
            <span className={styles.inboxItemName}>Kavya Nair</span>
            <span className={styles.inboxItemTag} style={{ color: 'var(--color-primary)' }}>AI HANDLING</span>
          </div>
          <div className={styles.inboxItemPreview}>Booking a site visit for Sat</div>
        </div>
      </div>

      <div className={styles.chatCol}>
        <div className={styles.bubbleIn}>Hi! I saw your ad — I need a CRM for my real estate team.</div>
        <div className={styles.bubbleOutWrap}>
          <div className={styles.bubbleOutTag}><Icon name="smart_toy" size={11} />AI AGENT</div>
          <div className={styles.bubbleOut}>Happy to help! How many sales reps will be using it?</div>
        </div>
        <div className={styles.bubbleIn}>8 reps. We mainly need WhatsApp and calling.</div>
        <div className={styles.bubbleOutWrap}>
          <div className={styles.bubbleOut}>Perfect fit. And what budget are you working with this month?</div>
        </div>
        <div className={styles.qualifiedTag}><Icon name="fact_check" size={13} />AI marked this lead Qualified</div>
      </div>

      <div className={styles.sideCol} style={{ width: 262 }}>
        <div className={styles.sideHead}>
          <Icon name="auto_awesome" size={17} color="var(--color-primary)" />
          <span className={styles.sideTitle}>AI Summary</span>
        </div>
        <div className={styles.summaryBlock}>
          <div className={styles.summaryLabel}>CONVERSATION</div>
          <div className={styles.summaryText}>Real estate team of 8 needs WhatsApp + calling. High intent — decision this month.</div>
        </div>
        <div className={styles.summaryBlock}>
          <div className={styles.summaryLabel}>DEAL SUMMARY</div>
          <div className={styles.summaryText}>Est. value <b>₹1.2L</b> · Close by <b>Jul 30</b> · Stage: Qualified</div>
        </div>
        <div className={`${styles.summaryBlock} ${styles.summaryBlockAlert}`}>
          <div className={`${styles.summaryLabel} ${styles.summaryLabelAlert}`}>NEXT BEST ACTION</div>
          <div className={styles.summaryText}>Book a demo call — buyer is ready this week.</div>
        </div>
      </div>
    </div>
  );
}

function ReportsTab() {
  const bars = [38, 52, 44, 64, 58, 78, 70, 96];
  const funnel = [
    { name: 'New', value: '1,287', width: '100%', color: 'var(--color-primary)' },
    { name: 'Contacted', value: '869', width: '68%', color: '#ff7e3e' },
    { name: 'Qualified', value: '543', width: '42%', color: '#ffb088' },
    { name: 'Won', value: '126', width: '12%', color: 'var(--color-green)' },
  ];

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.colHead} style={{ marginBottom: 16 }}>
          <span className={styles.colTitle}>Revenue Dashboard</span>
          <span className={styles.chipMuted}>This Month</span>
        </div>
        <div className={styles.statRow3}>
          <div className={styles.statCard}><div className={styles.statCardLabel}>Revenue</div><div className={styles.statCardValue}>₹98.6K</div><div className={styles.statCardDelta}>+15% vs last month</div></div>
          <div className={styles.statCard}><div className={styles.statCardLabel}>Deals Won</div><div className={styles.statCardValue}>126</div><div className={styles.statCardDelta}>+9% vs last month</div></div>
          <div className={styles.statCard}><div className={styles.statCardLabel}>Conversion</div><div className={styles.statCardValue}>19%</div><div className={styles.statCardDelta}>+3 pts</div></div>
        </div>
        <div className={styles.barChart}>
          {bars.map((h, i) => (
            <div key={i} className={`${styles.bar} ${i >= 5 && i < 7 ? styles.barActive : ''} ${i === 7 ? styles.barPeak : ''}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={styles.sideCol} style={{ width: 290 }}>
        <div className={styles.sideTitle} style={{ marginBottom: 14 }}>Lead Funnel</div>
        <div className={styles.funnelRow}>
          {funnel.map((f) => (
            <div key={f.name}>
              <div className={styles.funnelLabelRow}><span className={styles.funnelLabelName}>{f.name}</span><span>{f.value}</span></div>
              <div className={styles.funnelTrack} style={{ background: f.color, width: f.width }} />
            </div>
          ))}
        </div>
        <div className={styles.targetCard}>
          <div className={styles.targetTop}><span className={styles.funnelLabelName}>Q3 Target</span><span style={{ color: 'var(--color-primary)' }}>76%</span></div>
          <div className={styles.targetTrack}><div className={styles.targetFill} style={{ width: '76%' }} /></div>
        </div>
      </div>
    </div>
  );
}

function SyncTab() {
  const sources = [
    { icon: 'list_alt', name: 'Website Forms', color: 'var(--color-primary)' },
    { icon: 'thumb_up', name: 'Meta Lead Ads', color: 'var(--color-blue)' },
    { icon: 'ads_click', name: 'Google Ads', color: 'var(--color-primary)' },
    { icon: 'chat', name: 'WhatsApp', color: 'var(--color-green)' },
    { icon: 'api', name: 'API & Integrations', color: 'var(--color-purple)' },
  ];
  const landed = [
    { n: 'Priya Sharma', t: '2s ago', m: 'Meta Ads · assigned to Meera' },
    { n: 'Rahul Mehta', t: '41s ago', m: 'Website form · assigned to Dev' },
    { n: 'Kavya Nair', t: '2m ago', m: 'WhatsApp · assigned to Meera' },
    { n: 'Arjun Patel', t: '5m ago', m: 'Google Ads · assigned to Ravi' },
  ];

  return (
    <div className={styles.row} style={{ gap: 0, alignItems: 'stretch' }}>
      <div className={styles.syncSources}>
        <div className={styles.sideTitle} style={{ marginBottom: 14 }}>Lead sources</div>
        {sources.map((s) => (
          <div key={s.name} className={styles.syncSourceItem}>
            <Icon name={s.icon} size={16} color={s.color} />
            <span className={styles.syncSourceName}>{s.name}</span>
            <span className={styles.syncSourceStatus}>SYNCING</span>
          </div>
        ))}
      </div>
      <div className={styles.syncCenter}>
        <Icon name="east" size={30} color="var(--color-border-dashed)" />
        <div className={styles.syncOrb}>
          <Icon name="equalizer" size={32} color="#fff" />
        </div>
        <div className={styles.syncCenterTitle}>AiEngage CRM</div>
        <div className={styles.syncCenterDesc}>Real-time sync · field mapping<br />auto-assignment · dedupe</div>
      </div>
      <div className={styles.landedList}>
        <div className={styles.sideTitle} style={{ marginBottom: 14 }}>Just landed</div>
        {landed.map((l) => (
          <div key={l.n} className={styles.landedItem}>
            <div className={styles.landedTop}><span className={styles.landedName}>{l.n}</span><span className={styles.landedTime}>{l.t}</span></div>
            <div className={styles.landedMeta}>{l.m}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowTab() {
  const perf = [
    { label: 'Leads enrolled', value: '1,287' },
    { label: 'Replied', value: '41%', color: 'var(--color-green)' },
    { label: 'Qualified by AI', value: '543', color: 'var(--color-primary)' },
    { label: 'Avg. first response', value: '28s' },
  ];

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.colTitle} style={{ marginBottom: 16 }}>Workflow: New lead follow-up</div>
        <div className={styles.flowCol}>
          <div className={styles.flowNode}>
            <span className={styles.flowTag} style={{ background: 'var(--color-primary)' }}>TRIGGER</span>
            <span className={styles.flowNodeLabel}>New lead from Meta Ads</span>
          </div>
          <span className={styles.flowArrow}><Icon name="south" size={16} /></span>
          <div className={styles.flowNode}>
            <span className={styles.flowTag} style={{ background: 'var(--color-green)' }}>ACTION</span>
            <span className={styles.flowNodeLabel}>Send WhatsApp welcome template</span>
            <span className={styles.flowNodeMeta}>instant</span>
          </div>
          <span className={styles.flowArrow}><Icon name="south" size={16} /></span>
          <div className={styles.flowNode}>
            <span className={styles.flowTag} style={{ background: 'var(--color-purple)' }}>CONDITION</span>
            <span className={styles.flowNodeLabel}>Replied within 24 hours?</span>
          </div>
          <span className={styles.flowArrow}><Icon name="south" size={16} /></span>
          <div className={styles.flowBranch}>
            <div className={`${styles.flowBranchCard} ${styles.flowBranchYes}`}>
              <div className={styles.flowBranchLabel} style={{ color: 'var(--color-green)' }}>YES</div>
              <div className={styles.flowBranchText}>AI Agent takes over the chat</div>
            </div>
            <div className={`${styles.flowBranchCard} ${styles.flowBranchNo}`}>
              <div className={styles.flowBranchLabel} style={{ color: 'var(--color-red)' }}>NO</div>
              <div className={styles.flowBranchText}>Reminder + notify sales rep</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sideCol} style={{ width: 280 }}>
        <div className={styles.sideTitle} style={{ marginBottom: 14 }}>Workflow performance</div>
        <div className={styles.perfList}>
          {perf.map((p) => (
            <div key={p.label} className={styles.perfRow}>
              <span className={styles.perfLabel}>{p.label}</span>
              <span className={styles.perfValue} style={{ color: p.color }}>{p.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TAB_CONTENT = [PipelineTab, AIAgentTab, ReportsTab, SyncTab, WorkflowTab];

export default function ProductMock() {
  const [active, setActive] = useState(0);
  const ActiveTabContent = TAB_CONTENT[active];

  return (
    <div className={styles.mockShell}>
      <div className={styles.tabBar}>
        {HERO_TABS.map((tab, i) => (
          <span
            key={tab.key}
            className={`${styles.tabPill} ${active === i ? styles.tabPillActive : ''}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
          >
            <Icon name={tab.icon} size={16} />
            {tab.label}
          </span>
        ))}
      </div>
      <div className={styles.panel}>
        <ActiveTabContent />
      </div>
    </div>
  );
}
