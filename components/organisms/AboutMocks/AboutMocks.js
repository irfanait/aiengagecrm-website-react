import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './AboutMocks.module.css';

const AI_TILES = [
  { icon: 'summarize', label: 'Summaries' },
  { icon: 'forum', label: 'Chatbot' },
  { icon: 'insights', label: 'Insights' },
  { icon: 'edit_note', label: 'Email AI' },
  { icon: 'fact_check', label: 'Qualify' },
];

export function AICapabilitiesMock() {
  return (
    <div className={styles.tintedBox}>
      <div className={styles.iconGrid3}>
        {AI_TILES.map((t) => (
          <div className={styles.iconTile} key={t.label}>
            <Icon name={t.icon} size={16} color="var(--color-primary)" />
            <span className={styles.iconTileLabel}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function WhatsAppAgentMock() {
  return (
    <div className={styles.tintedBoxPadded} style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      <div className={styles.bubbleIn}>Hi! Do you have 2BHK flats in Pune?</div>
      <div className={styles.bubbleOut}>{"Yes! What's your budget range?"}</div>
      <div className={styles.bubbleIn}>Around ₹80L, ready to move.</div>
    </div>
  );
}

export function VoiceCallingMock() {
  return (
    <div className={styles.tintedBox}>
      <div className={styles.callHead}>
        <span className={waStyles.avatarCircle} style={{ width: 30, height: 30, fontSize: 9.5, background: '#FFE1D6', color: '#E64A24' }}>RS</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.callName}>Rohan Sharma</div>
          <div className={styles.callMeta}>+91 98204 55127</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className={styles.callStatusRow}>
            <span className={styles.callDot} />
            <span className={styles.callStatus}>On Call</span>
          </div>
          <div className={styles.callTimer}>04:12</div>
        </div>
      </div>
      <div className={styles.callActions}>
        <span className={styles.callActionBtn}>
          <Icon name="mic_off" size={12} color="var(--color-text-faint)" />
          <br />
          Mute
        </span>
        <span className={styles.callActionBtn}>
          <Icon name="pause" size={12} color="var(--color-text-faint)" />
          <br />
          Hold
        </span>
        <span className={styles.callActionEnd}>
          <Icon name="call_end" size={12} color="#fff" />
          <br />
          End
        </span>
      </div>
      <div className={styles.callNoteRow}>
        <div className={styles.callNoteBox}>&ldquo;&hellip;site visit confirmed for Saturday.&rdquo;</div>
        <span className={styles.callAddNote}>
          <Icon name="add" size={12} color="var(--color-primary)" />
          Note
        </span>
      </div>
    </div>
  );
}

export function MobileCRMMock() {
  return (
    <div className={styles.mobileShell}>
      <div className={styles.mobileGreeting}>Good morning,</div>
      <div className={styles.mobileName}>Meera 👋</div>
      <div className={styles.mobileStatRow}>
        <div className={styles.mobileStatBox}>
          <div className={styles.mobileStatValue} style={{ color: 'var(--color-primary)' }}>18</div>
          <div className={styles.mobileStatLabel}>Leads</div>
        </div>
        <div className={styles.mobileStatBox}>
          <div className={styles.mobileStatValue}>7</div>
          <div className={styles.mobileStatLabel}>Deals</div>
        </div>
        <div className={styles.mobileStatBox}>
          <div className={styles.mobileStatValue}>5</div>
          <div className={styles.mobileStatLabel}>Tasks</div>
        </div>
      </div>
      <div className={styles.mobileMsgRow}>
        <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 8.5, background: 'var(--color-green-tint)', color: '#128C4B' }}>AM</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.mobileMsgName}>Arjun Mehta</div>
          <div className={styles.mobileMsgPreview}>Share the floor plan?</div>
        </div>
        <span className={styles.mobileMsgTime}>2m</span>
      </div>
    </div>
  );
}

const PIPELINE_COLS = [
  { label: 'New', count: 3, color: '#FF5F38', name: 'Apex Realty', value: '₹48L', valueColor: '#FF5F38', more: '+2 more' },
  { label: 'Qual.', count: 2, color: '#FF7A52', name: 'Zephyr IT', value: '₹92L', valueColor: '#FF5F38', more: '+1 more' },
  { label: 'Prop.', count: 2, color: '#FF9068', name: 'MediCare', value: '₹1.2Cr', valueColor: '#FF5F38', more: '+1 more' },
  { label: 'Won', count: 4, color: '#1FAF64', name: 'Skyline Co', value: '₹64L', valueColor: '#1FAF64', more: '+3 more' },
];

export function SalesPipelineMock() {
  return (
    <div className={styles.tintedBox} style={{ height: 130 }}>
      <div className={styles.kanbanRow}>
        {PIPELINE_COLS.map((c) => (
          <div className={styles.kanbanCol} key={c.label}>
            <div className={styles.kanbanBar} style={{ background: c.color }} />
            <div className={styles.kanbanColLabel}>
              {c.label} <span>{c.count}</span>
            </div>
            <div className={styles.kanbanCard}>
              <div className={styles.kanbanCardName}>{c.name}</div>
              <div className={styles.kanbanCardValue} style={{ color: c.valueColor }}>{c.value}</div>
            </div>
            <div className={styles.kanbanMore}>{c.more}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LeadManagementMock() {
  return (
    <div className={styles.tintedBoxPadded}>
      <div className={styles.leadHead}>
        <span className={waStyles.avatarCircle} style={{ width: 32, height: 32, fontSize: 10, background: '#FFE1D6', color: '#E64A24' }}>SD</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.leadName}>Sneha Deshmukh</div>
          <div className={styles.leadPhone}>+91 90114 27883</div>
        </div>
        <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', fontSize: 8 }}>Qualified</span>
      </div>
      <div className={styles.leadFieldGrid}>
        <div>
          <div className={styles.leadFieldLabel}>SOURCE</div>
          <div className={styles.leadFieldValue}>WhatsApp</div>
        </div>
        <div>
          <div className={styles.leadFieldLabel}>BUDGET</div>
          <div className={styles.leadFieldValue}>₹86,000</div>
        </div>
        <div>
          <div className={styles.leadFieldLabel}>ASSIGNED</div>
          <div className={styles.leadFieldValue}>Meera K.</div>
        </div>
      </div>
    </div>
  );
}

const CUSTOMIZATION_TILES = [
  { icon: 'account_tree', label: 'Pipelines' },
  { icon: 'edit_attributes', label: 'Fields' },
  { icon: 'list_alt', label: 'Forms' },
  { icon: 'bolt', label: 'Workflows' },
  { icon: 'admin_panel_settings', label: 'Access' },
  { icon: 'view_kanban', label: 'Stages' },
];

export function CustomizationMock() {
  return (
    <div className={styles.tintedBox}>
      <div className={styles.iconGrid3}>
        {CUSTOMIZATION_TILES.map((t) => (
          <div className={styles.iconTile} key={t.label}>
            <Icon name={t.icon} size={15} color="var(--color-primary)" />
            <span className={styles.iconTileLabelSm}>{t.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const CHANNEL_ICONS = [
  { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' },
  { icon: 'mail', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'call', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'sms', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
  { icon: 'forum', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)' },
];

export function MultichannelMock() {
  return (
    <div className={styles.tintedBoxPadded}>
      <div className={styles.channelRow}>
        {CHANNEL_ICONS.map((c, i) => (
          <span className={styles.channelIcon} style={{ background: c.bg }} key={i}>
            <Icon name={c.icon} size={16} color={c.color} />
          </span>
        ))}
      </div>
      <div className={styles.mobileMsgRow}>
        <span className={waStyles.avatarCircle} style={{ width: 28, height: 28, fontSize: 9, background: '#FFE1D6', color: '#E64A24' }}>PN</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className={styles.mobileMsgName} style={{ fontSize: 10 }}>Priya Nair</div>
          <div className={styles.mobileMsgPreview}>Thanks, received the quote on email!</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span className={waStyles.tagPill} style={{ background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', fontSize: 7.5, padding: '2px 6px' }}>Active</span>
          <div className={styles.mobileMsgTime} style={{ marginTop: 3 }}>10:24</div>
        </div>
      </div>
    </div>
  );
}

export function AutomationFlowMock() {
  return (
    <div className={styles.tintedBoxPadded} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div className={styles.flowNode} style={{ background: 'var(--color-dark-bg)', color: '#fff', fontWeight: 600 }}>New Lead Captured</div>
      <div className={styles.flowArrowRow}>
        <Icon name="arrow_downward" size={13} color="var(--color-primary)" />
      </div>
      <div className={styles.flowNode} style={{ background: '#fff', border: '1px solid var(--color-border-light)', color: 'var(--color-text-secondary)' }}>Send Welcome Message</div>
      <div className={styles.flowArrowRowSplit}>
        <Icon name="south_west" size={13} color="var(--color-primary)" />
        <Icon name="south_east" size={13} color="var(--color-primary)" />
      </div>
      <div className={styles.flowBranchRow}>
        <div className={styles.flowBranch}>Set Follow-up Reminder</div>
        <div className={styles.flowBranch}>Move to Pipeline</div>
      </div>
    </div>
  );
}
