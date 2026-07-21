import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './CustomizationMocks.module.css';

/** Hero: a settings overview with quick stats and a setup-completeness banner. */
export function SettingsOverviewMock() {
  const stats = [
    { icon: 'edit_attributes', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', label: 'Custom fields', value: 24 },
    { icon: 'widgets', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', label: 'Custom modules', value: 6 },
    { icon: 'account_tree', bg: '#faf0d6', color: 'var(--color-yellow-icon)', label: 'Pipelines', value: 9 },
    { icon: 'admin_panel_settings', bg: '#f3ede2', color: 'var(--color-text-muted)', label: 'Roles', value: 5 },
  ];
  const nav = [
    { icon: 'edit_attributes', label: 'Custom Fields', active: true },
    { icon: 'widgets', label: 'Custom Modules' },
    { icon: 'account_tree', label: 'Custom Pipelines' },
    { icon: 'admin_panel_settings', label: 'Roles & Permissions' },
    { icon: 'palette', label: 'Branding' },
    { icon: 'sell', label: 'Custom Tags' },
    { icon: 'view_list', label: 'Custom Views' },
  ];
  return (
    <div className={waStyles.card} style={{ width: 500, overflow: 'hidden' }}>
      <div className={styles.panelHead}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Icon name="settings" size={18} color="var(--color-text-faint)" />
          <span className={styles.panelHeadTitle}>Settings › Customization</span>
        </div>
        <span className={styles.panelHeadChip}>
          <Icon name="search" size={13} color="var(--color-text-faint)" />Search
        </span>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 168, flexShrink: 0, borderRight: '1px solid var(--color-border-light)', padding: '10px 8px', display: 'flex', flexDirection: 'column', gap: 2 }}>
          {nav.map((n) => (
            <div
              key={n.label}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, fontSize: 11.5, fontWeight: n.active ? 600 : 400,
                color: n.active ? 'var(--color-primary-hover)' : 'var(--color-text-muted)',
                background: n.active ? 'var(--color-primary-tint)' : 'transparent', borderRadius: 8, padding: '8px 9px',
              }}
            >
              <Icon name={n.icon} size={15} color={n.active ? 'var(--color-primary-hover)' : 'var(--color-text-faint)'} />{n.label}
            </div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ border: '1px solid var(--color-border)', borderRadius: 12, padding: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                  <span style={{ width: 26, height: 26, borderRadius: 7, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={s.icon} size={15} color={s.color} />
                  </span>
                  <span style={{ fontSize: 10.5, color: 'var(--color-text-faint)', fontWeight: 500 }}>{s.label}</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{s.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 11, background: 'var(--color-dark-bg)', borderRadius: 12, padding: '11px 13px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 9.5, color: 'var(--color-dark-text-muted)', fontWeight: 600 }}>Setup completeness</div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>Business profile 82%</div>
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#0b1530', background: 'var(--color-primary-dark-accent)', borderRadius: 7, padding: '5px 9px' }}>Configure</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [1] Custom Fields: a drag-and-drop field builder with type palette and properties panel. */
export function FieldBuilderMock() {
  const fieldTypes = [
    { icon: 'text_fields', label: 'Text' },
    { icon: '123', label: 'Number' },
    { icon: 'arrow_drop_down_circle', label: 'Dropdown', active: true },
    { icon: 'calendar_month', label: 'Date' },
    { icon: 'currency_rupee', label: 'Currency' },
    { icon: 'check_box', label: 'Checkbox' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ overflow: 'hidden' }}>
      <div className={styles.panelHead}>
        <span className={styles.panelHeadTitle}>Field Builder · Leads</span>
        <span className={styles.panelHeadBtn}>Save</span>
      </div>
      <div className={styles.threeCol}>
        <div className={styles.fieldTypesCol}>
          <div className={styles.colLabel}>FIELD TYPES</div>
          {fieldTypes.map((f) => (
            <div key={f.label} className={f.active ? styles.fieldTypeChipActive : styles.fieldTypeChip}>
              <Icon name={f.icon} size={13} color={f.active ? 'var(--color-primary)' : 'var(--color-text-muted)'} />{f.label}
            </div>
          ))}
        </div>
        <div className={styles.canvasCol}>
          <div className={styles.colLabel}>LEAD FORM CANVAS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div>
              <div className={styles.canvasField}>Full name</div>
              <div className={styles.canvasFieldBox}>Rahul Mehta</div>
            </div>
            <div>
              <div className={styles.canvasField}>Budget range</div>
              <div className={styles.canvasFieldBox} style={{ color: 'var(--color-text-muted)' }}>₹80L – ₹1.2Cr</div>
            </div>
            <div className={styles.canvasFieldBoxEditing}>
              <div className={styles.canvasFieldEditingLabel}>
                Property type <span style={{ color: 'var(--color-text-faint)', fontWeight: 400 }}>· editing</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-text-faint)' }}>2BHK · 3BHK · Villa · Plot</div>
            </div>
            <div>
              <div className={styles.canvasField}>Preferred appointment time</div>
              <div className={styles.canvasFieldBox} style={{ color: 'var(--color-text-muted)' }}>Sat, 11:00 AM</div>
            </div>
          </div>
        </div>
        <div className={styles.propsCol}>
          <div className={styles.colLabel}>PROPERTIES</div>
          <div className={styles.propField}>
            <div className={styles.propLabel}>Field name</div>
            <div className={styles.propValue}>Property type</div>
          </div>
          <div className={styles.propField}>
            <div className={styles.propLabel}>Type</div>
            <div className={styles.propValue} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              Dropdown <Icon name="expand_more" size={13} color="var(--color-text-faint)" />
            </div>
          </div>
          <div className={styles.propField} style={{ marginBottom: 0 }}>
            <div className={styles.propRow}>
              <span style={{ fontSize: 10, color: 'var(--color-text-secondary)' }}>Required</span>
              <span className={styles.toggleOn}>
                <span className={styles.toggleKnob} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [2] Custom Modules: a grid of business-specific record modules with status badges. */
export function CustomModulesMock() {
  const modules = [
    { icon: 'apartment', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', name: 'Properties', meta: '1,248 records · Meera', updated: 'Updated 2h ago', status: 'ACTIVE' },
    { icon: 'event_available', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', name: 'Bookings', meta: '642 records · Arjun', updated: 'Updated 1d ago', status: 'ACTIVE' },
    { icon: 'school', bg: '#faf0d6', color: 'var(--color-yellow-icon)', name: 'Admissions', meta: '389 records · Priya', updated: 'Updated 3h ago', status: 'ACTIVE' },
    { icon: 'request_quote', bg: '#f3ede2', color: 'var(--color-text-muted)', name: 'Quotations', meta: '57 records · Vikram', updated: 'Updated 5d ago', status: 'DRAFT' },
    { icon: 'local_shipping', bg: 'var(--color-primary-tint)', color: 'var(--color-primary)', name: 'Vendors', meta: '213 records · Neha', updated: 'Updated 6h ago', status: 'ACTIVE' },
    { icon: 'celebration', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', name: 'Events', meta: '18 records · Sanjay', updated: 'Updated 1w ago', status: 'DRAFT' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardTinted}`} style={{ overflow: 'hidden' }}>
      <div className={styles.panelHead} style={{ background: '#fff' }}>
        <span className={styles.panelHeadTitle}>Custom Modules</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className={styles.panelHeadChip}>
            <Icon name="search" size={13} color="var(--color-text-faint)" />Search
          </span>
          <span className={styles.panelHeadBtn}>+ New Module</span>
        </div>
      </div>
      <div className={styles.moduleGrid}>
        {modules.map((m) => (
          <div key={m.name} className={styles.moduleCard}>
            <div className={styles.moduleCardHead}>
              <span className={styles.moduleIcon} style={{ background: m.bg }}>
                <Icon name={m.icon} size={17} color={m.color} />
              </span>
              <span className={waStyles.tagPill} style={m.status === 'ACTIVE' ? { color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' } : { color: 'var(--color-yellow-icon)', background: '#faf0d6' }}>{m.status}</span>
            </div>
            <div className={styles.moduleName}>{m.name}</div>
            <div className={styles.moduleMeta}>{m.meta}</div>
            <div className={styles.moduleUpdated}>{m.updated}</div>
          </div>
        ))}
      </div>
      <div className={styles.moduleFoot}>
        <span>6 modules · 2,567 total records</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  );
}

/** [3] Custom Pipelines: pipeline selector + drag-orderable stages for the active pipeline. */
export function CustomPipelinesMock() {
  const pipelines = [
    { name: 'New Sales Enquiries', count: 6, active: true },
    { name: 'Property Bookings', count: 5 },
    { name: 'Admissions', count: 4 },
    { name: 'Service Requests', count: 5 },
  ];
  const stages = [
    { name: 'New Enquiry', pct: '20%' },
    { name: 'Contacted', pct: '40%' },
    { name: 'Site Visit', pct: '60%', active: true },
    { name: 'Negotiation', pct: '80%' },
    { name: 'Closed Won', pct: '100%', won: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid}`} style={{ overflow: 'hidden' }}>
      <div className={styles.panelHead}>
        <span className={styles.panelHeadTitle}>Pipeline Configuration</span>
        <span className={styles.panelHeadBtn}>Save changes</span>
      </div>
      <div style={{ display: 'flex' }}>
        <div className={styles.pipelinesCol}>
          <div className={styles.colLabel} style={{ padding: '2px 6px 6px', marginBottom: 0 }}>PIPELINES</div>
          {pipelines.map((p) => (
            <div key={p.name} className={p.active ? styles.pipelineItemActive : styles.pipelineItem}>
              {p.name} <span className={styles.pipelineCount}>{p.count}</span>
            </div>
          ))}
        </div>
        <div className={styles.stagesCol}>
          <div className={styles.colLabel}>STAGES · NEW SALES ENQUIRIES</div>
          {stages.map((s) => (
            <div key={s.name} className={s.active ? styles.stageRowActive : styles.stageRow}>
              <Icon name="drag_indicator" size={15} color={s.active ? 'var(--color-primary)' : 'var(--color-border-dashed)'} />
              <span className={s.active ? styles.stageLabelActive : styles.stageLabel}>{s.name}</span>
              <span
                className={s.active ? styles.stagePctActive : styles.stagePct}
                style={s.won ? { color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' } : undefined}
              >
                {s.pct}
              </span>
            </div>
          ))}
          <div className={styles.addStageRow}>
            <Icon name="add" size={15} />Add stage
          </div>
        </div>
      </div>
    </div>
  );
}

/** [4] Roles & Permissions: a dark access matrix (view/edit/no-access) across modules and roles. */
export function RolesPermissionsMock() {
  const roles = ['ADMIN', 'SALES MGR', 'SALES REP', 'SUPPORT', 'MKTG', 'BRANCH'];
  const rows = [
    { module: 'Leads & Contacts', access: ['full', 'full', 'edit', 'edit', 'full', 'none'] },
    { module: 'Companies & Deals', access: ['full', 'full', 'edit', 'none', 'none', 'edit'] },
    { module: 'WhatsApp Chats', access: ['full', 'full', 'full', 'full', 'edit', 'none'] },
    { module: 'Campaigns', access: ['full', 'edit', 'none', 'none', 'full', 'none'] },
    { module: 'Reports & Dashboards', access: ['full', 'full', 'none', 'none', 'edit', 'edit'] },
    { module: 'Import / Export', access: ['full', 'edit', 'none', 'none', 'none', 'none'] },
    { module: 'Account Settings', access: ['full', 'none', 'none', 'none', 'none', 'none'] },
  ];
  const iconFor = (a) => {
    if (a === 'full') return { name: 'check_circle', color: 'var(--color-green)', size: 16 };
    if (a === 'edit') return { name: 'edit', color: 'var(--color-yellow-icon)', size: 15 };
    return { name: 'block', color: '#b0556a', size: 15 };
  };
  return (
    <div style={{ width: '95%', background: '#0b1530', border: '1px solid var(--color-dark-border)', borderRadius: 16, boxShadow: '0 30px 60px -30px rgba(0,0,0,0.6)', overflow: 'hidden', position: 'relative', left: 12 }}>
      <div style={{ padding: '13px 15px', borderBottom: '1px solid var(--color-dark-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 12.5, fontWeight: 700, color: '#fff' }}>Permissions Matrix</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#0b1530', background: 'var(--color-primary-dark-accent)', borderRadius: 7, padding: '5px 11px' }}>Edit roles</span>
      </div>
      <div className={styles.matrixWrap}>
        <table className={styles.matrixTable}>
          <thead>
            <tr>
              <th className={styles.matrixThLeft}>MODULE</th>
              {roles.map((r) => (
                <th key={r} className={styles.matrixTh}>{r}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.module} className={styles.matrixTr}>
                <td className={styles.matrixTdLabel}>{row.module}</td>
                {row.access.map((a, i) => {
                  const ic = iconFor(a);
                  return (
                    <td key={`${row.module}-${roles[i]}`} className={styles.matrixTd}>
                      <Icon name={ic.name} size={ic.size} color={ic.color} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.matrixLegend}>
          <span className={styles.matrixLegendItem}>
            <Icon name="check_circle" size={14} color="var(--color-green)" />View &amp; edit
          </span>
          <span className={styles.matrixLegendItem}>
            <Icon name="edit" size={14} color="var(--color-yellow-icon)" />Limited
          </span>
          <span className={styles.matrixLegendItem}>
            <Icon name="block" size={14} color="#b0556a" />No access
          </span>
        </div>
      </div>
    </div>
  );
}

/** [5] Branding: logo/color settings with a live preview of email and WhatsApp sender identity. */
export function BrandingMock() {
  const swatches = ['var(--color-primary)', 'var(--color-dark-bg)', 'var(--color-green)', 'var(--color-yellow-icon)', '#f3ede2'];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardTinted}`} style={{ overflow: 'hidden' }}>
      <div className={styles.panelHead} style={{ background: '#fff' }}>
        <span className={styles.panelHeadTitle}>Brand Settings</span>
        <span className={styles.panelHeadBtn}>Publish</span>
      </div>
      <div className={styles.brandingRow}>
        <div className={styles.brandingLeft}>
          <div className={styles.dropzone}>
            <Icon name="cloud_upload" size={22} color="var(--color-primary)" />
            <div className={styles.dropzoneTitle}>Upload company logo</div>
            <div className={styles.dropzoneMeta}>PNG or SVG · max 2MB</div>
          </div>
          <div className={styles.colLabel}>BRAND COLORS</div>
          <div className={styles.swatchRow}>
            {swatches.map((c, i) => (
              <span key={c} className={styles.swatch} style={{ background: c, border: i === 0 ? '2px solid #fff' : undefined, boxShadow: i === 0 ? `0 0 0 1.5px ${c}` : undefined }} />
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <div>
              <div className={styles.propLabel}>Email sender name</div>
              <div className={styles.propValue} style={{ background: '#fff' }}>AiEngage Sales</div>
            </div>
            <div>
              <div className={styles.propLabel}>Email signature</div>
              <div className={styles.propValue} style={{ background: '#fff', color: 'var(--color-text-muted)', fontWeight: 400 }}>Team AiEngage · +91 98250 41000</div>
            </div>
          </div>
        </div>
        <div className={styles.brandingRight}>
          <div className={styles.colLabel}>LIVE PREVIEW</div>
          <div className={styles.previewCard}>
            <div className={styles.previewHead}>
              <span className={styles.previewLogo}>A</span>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: '#fff' }}>AiEngage</span>
            </div>
            <div className={styles.previewBody}>
              <div style={{ fontSize: 10, fontWeight: 600 }}>Hi Rahul,</div>
              <div style={{ fontSize: 9, color: 'var(--color-text-faint)', marginTop: 3, lineHeight: 1.5 }}>Thanks for your enquiry about Skyline 2BHK…</div>
              <div className={styles.previewBtn}>View details</div>
            </div>
          </div>
          <div className={styles.previewChatRow}>
            <span style={{ width: 26, height: 26, borderRadius: '50%', background: 'var(--color-green-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="chat" size={15} color="var(--color-whatsapp)" />
            </span>
            <div>
              <div style={{ fontSize: 9.5, fontWeight: 700 }}>AiEngage Realty</div>
              <div style={{ fontSize: 8, color: 'var(--color-text-faint)' }}>WhatsApp sender name</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const TAGS = [
  { label: 'Hot lead', bg: '#ffe1d6', color: '#e64a24', usage: 1284, by: 'Meera', last: 'Today' },
  { label: 'High-value', bg: '#faf0d6', color: 'var(--color-yellow-icon)', usage: 512, by: 'Arjun', last: 'Yesterday' },
  { label: 'Cold lead', bg: '#f3ede2', color: 'var(--color-text-muted)', usage: 2047, by: 'Priya', last: '2 days ago' },
  { label: 'Returning', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', usage: 318, by: 'Neha', last: '3 days ago' },
  { label: 'Payment due', bg: '#ffe9e1', color: '#c0503a', usage: 86, by: 'Vikram', last: '4 days ago' },
  { label: 'Webinar', bg: '#e7e9ef', color: 'var(--color-dark-bg)', usage: 640, by: 'Sanjay', last: '5 days ago' },
  { label: 'Follow-up', bg: '#fff0ea', color: '#e64a24', usage: 974, by: 'Meera', last: '6 days ago' },
];

/** [6] Custom Tags: a tag manager table plus a contact record showing applied tags. */
export function CustomTagsMock() {
  return (
    <div className={styles.tagsRow} style={{ width: '95%', position: 'relative', left: 12 }}>
      <div className={styles.tagsTableCard}>
        <div className={styles.panelHead} style={{ background: 'var(--color-bg)' }}>
          <span className={styles.panelHeadTitle}>Tag Manager</span>
          <span className={styles.panelHeadBtn} style={{ borderRadius: 6, padding: '4px 9px', fontSize: 9.5 }}>+ Tag</span>
        </div>
        <table className={styles.tagsTable}>
          <thead className={styles.tagsThead}>
            <tr>
              <th className={styles.tagsTh}>TAG</th>
              <th className={styles.tagsTh}>USAGE</th>
              <th className={styles.tagsTh}>BY</th>
              <th className={styles.tagsTh}>LAST USED</th>
            </tr>
          </thead>
          <tbody>
            {TAGS.map((t) => (
              <tr key={t.label} className={styles.tagsTr}>
                <td className={styles.tagsTd}>
                  <span className={styles.tagPillSm} style={{ background: t.bg, color: t.color }}>{t.label}</span>
                </td>
                <td className={styles.tagsTd} style={{ fontWeight: 700 }}>{t.usage}</td>
                <td className={styles.tagsTd} style={{ color: 'var(--color-text-muted)' }}>{t.by}</td>
                <td className={styles.tagsTd} style={{ color: 'var(--color-text-faint)' }}>{t.last}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.tagsFoot}>7 of 24 tags</div>
      </div>
      <div className={styles.contactCard}>
        <div className={styles.colLabel}>CONTACT RECORD</div>
        <div className={styles.contactHead}>
          <span className={waStyles.avatarCircle} style={{ width: 34, height: 34, background: '#ffe1d6', color: '#e64a24' }}>RM</span>
          <div>
            <div className={styles.contactName}>Rahul Mehta</div>
            <div className={styles.contactMeta}>+91 98250 33417</div>
          </div>
        </div>
        <div className={styles.colLabel} style={{ marginBottom: 7 }}>APPLIED TAGS</div>
        <div className={styles.appliedTagsWrap}>
          {TAGS.slice(0, 4).map((t) => (
            <span key={t.label} className={styles.tagPillSm} style={{ background: t.bg, color: t.color }}>{t.label}</span>
          ))}
          <span className={styles.tagAddChip}>+ Add</span>
        </div>
      </div>
    </div>
  );
}

/** [7] Custom Views: saved filtered views per team, with an active record list. */
export function CustomViewsMock() {
  const views = [
    { name: 'New Leads Needing Follow-up', active: true },
    { name: 'High-Value Deals' },
    { name: 'Pending Payments' },
    { name: "Today's Appointments" },
  ];
  const records = [
    { name: 'Rahul Mehta', source: 'Website', value: '₹86,000', last: '8d' },
    { name: 'Sarah Collins', source: 'Meta Ads', value: '₹1.2Cr', last: '9d' },
    { name: 'Amit Shah', source: 'Referral', value: '₹45,000', last: '7d' },
    { name: 'Priya Nair', source: 'WhatsApp', value: '₹92,500', last: '11d' },
    { name: 'John Miller', source: 'Website', value: '₹1.8L', last: '10d' },
    { name: 'Neha Kapoor', source: 'Google Ads', value: '₹64,000', last: '12d' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardTinted}`} style={{ overflow: 'hidden' }}>
      <div className={styles.panelHead} style={{ background: '#fff' }}>
        <span className={styles.panelHeadTitle}>Saved Views</span>
        <span className={styles.panelHeadBtn} style={{ borderRadius: 6, padding: '4px 9px', fontSize: 9.5 }}>Save view</span>
      </div>
      <div className={styles.viewsRow}>
        <div className={styles.viewsCol}>
          <div className={styles.colLabel} style={{ padding: '2px 6px 5px', marginBottom: 0 }}>MY VIEWS</div>
          {views.map((v) => (
            <div key={v.name} className={v.active ? styles.viewItemActive : styles.viewItem}>{v.name}</div>
          ))}
        </div>
        <div className={styles.recordsCol}>
          <div className={styles.filterChipsRow}>
            <span className={styles.filterLabel}>Filters:</span>
            <span className={styles.filterChip}>Status: New</span>
            <span className={styles.filterChip}>Owner: Meera</span>
            <span className={styles.filterChip}>Last activity: 7d+</span>
          </div>
          <table className={styles.viewsTable}>
            <thead>
              <tr>
                <th className={styles.viewsTh}>NAME</th>
                <th className={styles.viewsTh}>SOURCE</th>
                <th className={styles.viewsTh}>VALUE</th>
                <th className={styles.viewsTh}>LAST</th>
              </tr>
            </thead>
            <tbody>
              {records.map((r) => (
                <tr key={r.name} className={styles.viewsTr}>
                  <td className={styles.viewsTd} style={{ fontWeight: 600, color: 'var(--color-text)' }}>{r.name}</td>
                  <td className={styles.viewsTd}>{r.source}</td>
                  <td className={styles.viewsTd} style={{ fontWeight: 700, color: 'var(--color-primary)' }}>{r.value}</td>
                  <td className={styles.viewsTd}>{r.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.viewsPagination}>
            <span style={{ fontSize: 9, color: 'var(--color-text-faint)' }}>42 records</span>
            <div style={{ display: 'flex', gap: 5 }}>
              <span className={styles.pageDot}>‹</span>
              <span className={styles.pageDotActive}>1</span>
              <span className={styles.pageDot}>2</span>
              <span className={styles.pageDot}>›</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
