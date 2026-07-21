import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import styles from './DataManagementMocks.module.css';

const RECORDS = [
  { name: 'Rahul Mewada', phone: '+91 98250 44120', owner: 'Meera', stage: 'New', stageBg: '#f3ede2', stageColor: 'var(--color-text-muted)', checked: true },
  { name: 'Emily Carter', phone: '+1 415 555 0192', owner: 'Dev', stage: 'Qualified', stageBg: 'var(--color-green-tint)', stageColor: 'var(--color-whatsapp)', checked: true },
  { name: 'Priya Nair', phone: '+91 99870 11902', owner: 'Meera', stage: 'Hot', stageBg: '#ffe9e1', stageColor: 'var(--color-primary-hover)', checked: true },
  { name: 'James Miller', phone: '+1 646 555 0148', owner: 'Arjun', stage: 'New', stageBg: '#f3ede2', stageColor: 'var(--color-text-muted)', checked: false },
  { name: 'Aarti Shah', phone: '+91 98795 33218', owner: 'Priya', stage: 'Follow-up', stageBg: '#fbf0d0', stageColor: 'var(--color-yellow-icon)', checked: false },
  { name: 'David Chen', phone: '+1 312 555 0177', owner: 'Dev', stage: 'Won', stageBg: 'var(--color-green-tint)', stageColor: 'var(--color-whatsapp)', checked: false },
];

/** Hero: a records workspace with toolbar, bulk-selection banner, and a data table. */
export function DataWorkspaceMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`} style={{ width: 500 }}>
      <div className={styles.toolbarRow}>
        <span className={styles.searchBox}>
          <Icon name="search" size={14} color="var(--color-text-faint)" />Search records…
        </span>
        <span className={styles.toolbarBtn}>
          <Icon name="filter_list" size={13} />Filters
        </span>
        <span className={styles.toolbarBtnOutline}>
          <Icon name="upload" size={13} />Import
        </span>
        <span className={styles.toolbarBtnPrimary}>
          <Icon name="download" size={13} />Export
        </span>
      </div>
      <div className={styles.selectionBar}>
        <span className={styles.selectionCount}>3 selected</span>
        <span className={styles.selectionAction}>Assign</span>
        <span className={styles.selectionAction}>Tag</span>
        <span className={styles.selectionAction}>Export</span>
        <span className={styles.selectionDelete}>Delete</span>
      </div>
      <div className={styles.table}>
        <div className={styles.tableHead}>
          <span className={styles.checkboxCol} />
          <span style={{ flex: 1.3 }}>NAME</span>
          <span style={{ flex: 1.3 }}>PHONE</span>
          <span style={{ flex: 0.8 }}>OWNER</span>
          <span style={{ flex: 0.8, textAlign: 'right' }}>STAGE</span>
        </div>
        {RECORDS.map((r) => (
          <div key={r.name} className={styles.tableRow}>
            <span className={styles.checkboxCol}>
              {r.checked ? (
                <span className={styles.checkboxChecked}>
                  <Icon name="check" size={10} color="#fff" />
                </span>
              ) : (
                <span className={styles.checkboxEmpty} />
              )}
            </span>
            <span className={styles.tableCellStrong} style={{ flex: 1.3 }}>{r.name}</span>
            <span className={styles.tableCellMuted} style={{ flex: 1.3 }}>{r.phone}</span>
            <span className={styles.tableCellMuted} style={{ flex: 0.8 }}>{r.owner}</span>
            <span style={{ flex: 0.8, textAlign: 'right' }}>
              <span className={waStyles.tagPill} style={{ background: r.stageBg, color: r.stageColor }}>{r.stage}</span>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.paginationRow}>
        <span>1–6 of 1,248 records</span>
        <div className={styles.pageDots}>
          <span className={styles.pageDot}>‹</span>
          <span className={`${styles.pageDot} ${styles.pageDotActive}`}>1</span>
          <span className={styles.pageDot}>2</span>
          <span className={styles.pageDot}>›</span>
        </div>
      </div>
    </div>
  );
}

/** [1] Import & Export: an upload progress card plus recent saved exports. */
export function ImportExportMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Import Records</span>
        <span className={styles.headMeta}>Step 1 of 3 · Upload</span>
      </div>
      <div className={styles.dropzone}>
        <div className={styles.dropzoneHead}>
          <span className={styles.dropzoneIcon}>
            <Icon name="description" size={20} color="var(--color-primary-hover)" />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className={styles.dropzoneTitle}>leads_july.csv</div>
            <div className={styles.dropzoneMeta}>2.4 MB · 1,248 rows detected</div>
          </div>
          <span className={styles.progressPct}>92%</span>
        </div>
        <div className={styles.progressTrack}>
          <div className={styles.progressFill} style={{ width: '92%' }} />
        </div>
      </div>
      <div className={styles.statGrid3}>
        <div className={styles.statBox}>
          <div className={styles.statBoxValue}>1,248</div>
          <div className={styles.statBoxLabel}>Detected</div>
        </div>
        <div className={styles.statBox}>
          <div className={styles.statBoxValue} style={{ color: 'var(--color-whatsapp)' }}>1,214</div>
          <div className={styles.statBoxLabel}>Valid</div>
        </div>
        <div className={`${styles.statBox} ${styles.statBoxAlert}`}>
          <div className={styles.statBoxValue} style={{ color: '#c0503a' }}>34</div>
          <div className={styles.statBoxLabel} style={{ color: '#c0503a' }}>Duplicates</div>
        </div>
      </div>
      <div className={styles.exportSection}>
        <div className={styles.exportHead}>
          <span className={styles.headTitle} style={{ fontSize: 12 }}>Export data</span>
          <div className={styles.exportChips}>
            <span className={styles.exportChipActive}>CSV</span>
            <span className={styles.exportChip}>Excel</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          <div className={styles.exportRow}>
            <Icon name="task_alt" size={15} color="var(--color-whatsapp)" />
            <span className={styles.exportRowLabel}>All leads · 1,248 rows</span>
            <span className={styles.exportRowMeta}>Jul 14 · CSV</span>
          </div>
          <div className={styles.exportRow}>
            <Icon name="task_alt" size={15} color="var(--color-whatsapp)" />
            <span className={styles.exportRowLabel}>Won deals Q2 · 312 rows</span>
            <span className={styles.exportRowMeta}>Jul 09 · Excel</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [2] Products: a product catalog table with a quick add-to-deal banner. */
export function ProductCatalogMock() {
  const products = [
    { name: 'Premium CRM Plan', meta: 'Annual · 25 seats', category: 'Software', price: '₹60,000', status: 'In stock', statusColor: 'var(--color-whatsapp)', statusBg: 'var(--color-green-tint)' },
    { name: 'Onboarding Package', meta: 'One-time setup', category: 'Service', price: '₹15,000', status: 'Available', statusColor: 'var(--color-whatsapp)', statusBg: 'var(--color-green-tint)' },
    { name: 'WhatsApp Add-on', meta: 'Monthly · per number', category: 'Add-on', price: '₹2,500', status: 'In stock', statusColor: 'var(--color-whatsapp)', statusBg: 'var(--color-green-tint)' },
    { name: 'Extra Seats ×5', meta: 'Annual add-on', category: 'Add-on', price: '₹25,000', status: 'Low', statusColor: '#c0503a', statusBg: '#fff6f3' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.productHeadRow}>
        <span className={styles.headTitle} style={{ flex: 1 }}>Product Catalog</span>
        <span className={styles.toolbarBtnOutline}>
          <Icon name="search" size={13} color="var(--color-text-faint)" />Search
        </span>
        <span className={styles.toolbarBtnPrimary}>
          <Icon name="add" size={13} />Add
        </span>
      </div>
      <div className={styles.table} style={{ background: '#fff' }}>
        <div className={styles.tableHead}>
          <span style={{ flex: 1.5 }}>PRODUCT</span>
          <span style={{ flex: 0.9 }}>CATEGORY</span>
          <span style={{ flex: 0.8, textAlign: 'right' }}>PRICE</span>
          <span style={{ flex: 0.9, textAlign: 'right' }}>STATUS</span>
        </div>
        {products.map((p) => (
          <div key={p.name} className={styles.tableRow} style={{ alignItems: 'center' }}>
            <div style={{ flex: 1.5 }}>
              <div className={styles.tableCellStrong}>{p.name}</div>
              <div className={styles.dropzoneMeta}>{p.meta}</div>
            </div>
            <span className={styles.tableCellMuted} style={{ flex: 0.9 }}>{p.category}</span>
            <span style={{ flex: 0.8, textAlign: 'right', fontWeight: 700, color: 'var(--color-primary)' }}>{p.price}</span>
            <span style={{ flex: 0.9, textAlign: 'right' }}>
              <span className={waStyles.tagPill} style={{ background: p.statusBg, color: p.statusColor }}>{p.status}</span>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.darkBanner}>
        <span className={styles.darkBannerIcon}>
          <Icon name="add_shopping_cart" size={18} color="#fff" />
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.darkBannerTitle}>Add to deal · Skyline 2BHK</div>
          <div className={styles.darkBannerMeta}>Premium CRM Plan · ₹60,000</div>
        </div>
        <span className={styles.darkBannerTag}>Add</span>
      </div>
    </div>
  );
}

/** [3] Forms: a drag-and-drop form builder with a live preview. */
export function FormBuilderMock() {
  const fields = [
    { icon: 'title', label: 'Text' },
    { icon: 'mail', label: 'Email' },
    { icon: 'call', label: 'Phone', active: true },
    { icon: 'arrow_drop_down_circle', label: 'Dropdown' },
    { icon: 'calendar_today', label: 'Date' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Form Builder</span>
        <span className={styles.toolbarBtn}>Preview</span>
      </div>
      <div className={styles.formRow}>
        <div className={styles.fieldPalette}>
          <div className={styles.fieldPaletteLabel}>FIELDS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {fields.map((f) => (
              <div key={f.label} className={f.active ? styles.fieldChipActive : styles.fieldChip}>
                <Icon name={f.icon} size={14} color={f.active ? 'var(--color-primary-hover)' : 'var(--color-primary)'} />{f.label}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.formPreview}>
          <div className={styles.formPreviewTitle}>Demo Booking Form</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div className={styles.formField}>
              <div className={styles.formFieldLabel}>FULL NAME</div>
              <div className={styles.formFieldValue}>Rahul Mewada</div>
            </div>
            <div className={styles.formField}>
              <div className={styles.formFieldLabel}>EMAIL</div>
              <div className={styles.formFieldValue}>rahul.m@example.com</div>
            </div>
            <div className={styles.formFieldDragging}>
              <div className={styles.formFieldLabelDragging}>PHONE · dragging</div>
              <div className={styles.formFieldValue}>+91 98250 44120</div>
            </div>
            <div className={styles.formField} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div className={styles.formFieldLabel}>INTEREST</div>
                <div className={styles.formFieldValue}>2BHK Apartment</div>
              </div>
              <Icon name="expand_more" size={15} color="var(--color-text-faint)" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.formMetaRow}>
        <div className={styles.formMetaBox}>
          <Icon name="account_tree" size={15} color="var(--color-primary)" />
          <div style={{ minWidth: 0 }}>
            <div className={styles.formMetaLabel}>DESTINATION</div>
            <div className={styles.formMetaValue}>Real Estate Pipeline</div>
          </div>
        </div>
        <div className={styles.formMetaBox}>
          <Icon name="person" size={15} color="var(--color-whatsapp)" />
          <div style={{ minWidth: 0 }}>
            <div className={styles.formMetaLabel}>ASSIGN OWNER</div>
            <div className={styles.formMetaValue}>Meera · Sales</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** [4] Audit Logs: a chronological feed of tracked field-level changes. */
export function AuditLogMock() {
  const logs = [
    { initials: 'MK', bg: '#ffe1d6', color: 'var(--color-primary-hover)', who: 'Meera', action: 'changed deal stage', from: 'Negotiation', to: 'Closed Won', time: '11:04' },
    { initials: 'DV', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', who: 'Dev', action: 'updated payment', from: '₹40,000', to: '₹45,000', time: '10:41' },
    { initials: 'AJ', bg: '#fbf0d0', color: 'var(--color-yellow-icon)', who: 'Arjun', action: 'reassigned lead', from: 'Priya', to: 'Meera', time: '09:58' },
    { initials: 'PN', bg: '#ffe1d6', color: 'var(--color-primary-hover)', who: 'Priya', action: 'edited contact phone', from: '…33218', to: '…44120', time: 'Jul 13' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Activity Log</span>
        <span className={styles.toolbarBtnOutline}>
          <Icon name="filter_list" size={13} />All activity
        </span>
      </div>
      <div className={styles.table} style={{ background: '#fff' }}>
        {logs.map((l) => (
          <div key={l.who + l.action} className={styles.logRow}>
            <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 8.5, background: l.bg, color: l.color }}>{l.initials}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.logText}>
                <b>{l.who}</b> {l.action}
              </div>
              <div className={styles.logDiff}>
                <span className={styles.logDiffOld}>{l.from}</span>{' '}
                <Icon name="arrow_forward" size={11} color="var(--color-text-faint)" />{' '}
                <span className={styles.logDiffNew}>{l.to}</span>
              </div>
            </div>
            <span className={styles.logTime}>{l.time}</span>
          </div>
        ))}
        <div className={styles.logRow}>
          <span className={waStyles.avatarCircle} style={{ width: 26, height: 26, fontSize: 8.5, background: 'var(--color-green-tint)', color: 'var(--color-whatsapp)' }}>DV</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div className={styles.logText}>
              <b>Dev</b> imported records
            </div>
            <div className={styles.logDiff} style={{ color: 'var(--color-text-faint)' }}>1,248 leads · via CSV</div>
          </div>
          <span className={styles.logTime}>Jul 13</span>
        </div>
      </div>
      <div className={styles.statGrid3} style={{ marginTop: 12, marginBottom: 0 }}>
        <div className={styles.statBox} style={{ background: '#fff' }}>
          <div className={styles.statBoxValue}>1,904</div>
          <div className={styles.statBoxLabel}>Changes today</div>
        </div>
        <div className={styles.statBox} style={{ background: '#fff' }}>
          <div className={styles.statBoxValue}>18</div>
          <div className={styles.statBoxLabel}>Active users</div>
        </div>
        <div className={styles.statBox} style={{ background: '#fff' }}>
          <div className={styles.statBoxValue} style={{ color: 'var(--color-primary)' }}>100%</div>
          <div className={styles.statBoxLabel}>Tracked</div>
        </div>
      </div>
    </div>
  );
}

/** [5] Sheet View: a spreadsheet-style grid with bulk selection. */
export function SheetViewMock() {
  const rows = [
    { name: 'Rahul Mewada', stage: 'New', owner: 'Meera', value: '₹85L', checked: true },
    { name: 'Aarti Shah', stage: 'Follow-up', owner: 'Priya', value: '₹42L', checked: true, editing: true },
    { name: 'Emily Carter', stage: 'Qualified', owner: 'Dev', value: '$12K', checked: true },
    { name: 'Manoj Joshi', stage: 'Hot', owner: 'Meera', value: '₹1.2Cr', checked: true },
    { name: 'James Miller', stage: 'Missing', owner: 'Arjun', value: '$8K', checked: false, alert: true },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.selectionBar}>
        <span className={styles.selectionCount}>4 selected</span>
        <span className={styles.selectionAction}>Assign owner</span>
        <span className={styles.selectionAction}>Add tag</span>
        <span className={styles.selectionAction}>Change stage</span>
        <span className={styles.selectionDelete}>Delete</span>
      </div>
      <div className={styles.sheetTable}>
        <div className={styles.sheetHeadRow}>
          <span className={styles.sheetColCheck}>
            <span className={styles.checkboxChecked} style={{ background: 'var(--color-primary)' }} />
          </span>
          <span className={styles.sheetCol} style={{ flex: 1.4, display: 'flex', alignItems: 'center', gap: 3 }}>
            NAME <Icon name="arrow_upward" size={11} />
          </span>
          <span className={styles.sheetCol} style={{ flex: 0.9 }}>STAGE</span>
          <span className={styles.sheetCol} style={{ flex: 0.9 }}>OWNER</span>
          <span className={styles.sheetCol} style={{ flex: 0.9, borderRight: 'none', display: 'flex', alignItems: 'center', gap: 3 }}>
            VALUE <Icon name="unfold_more" size={11} />
          </span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className={styles.sheetRow}>
            <span className={styles.sheetColCheck}>
              {r.checked ? (
                <span className={styles.checkboxChecked}>
                  <Icon name="check" size={9} color="#fff" />
                </span>
              ) : (
                <span className={styles.checkboxEmpty} />
              )}
            </span>
            {r.editing ? (
              <span className={styles.sheetCol} style={{ flex: 1.4, padding: '7px 8px' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', background: '#fff', border: '1.5px solid var(--color-primary)', borderRadius: 5, padding: '3px 5px', boxShadow: '0 4px 10px -4px rgba(244,80,10,0.4)', fontWeight: 600 }}>
                  {r.name}
                  <span style={{ width: 1, height: 12, background: 'var(--color-primary)', marginLeft: 1 }} />
                </span>
              </span>
            ) : (
              <span className={styles.sheetCellStrong} style={{ flex: 1.4 }}>{r.name}</span>
            )}
            <span className={r.alert ? styles.sheetCellAlert : styles.sheetCell} style={{ flex: 0.9 }}>{r.stage}</span>
            <span className={styles.sheetCell} style={{ flex: 0.9 }}>{r.owner}</span>
            <span className={styles.sheetCell} style={{ flex: 0.9, borderRight: 'none' }}>{r.value}</span>
          </div>
        ))}
      </div>
      <div className={styles.sheetFootRow}>
        <span>Saved view · &quot;Hot leads Q3&quot;</span>
        <span>1–6 of 842</span>
      </div>
    </div>
  );
}

/** [6] Data Mapping: spreadsheet columns matched to CRM fields, one still unmapped. */
export function DataMappingMock() {
  const mapped = [
    { from: 'Full Name', to: 'Contact Name' },
    { from: 'Mobile', to: 'Phone Number' },
    { from: 'Email ID', to: 'Email' },
    { from: 'Company', to: 'Company Name' },
    { from: 'Source', to: 'Lead Source' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Map Fields · leads_july.csv</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>5 / 6 mapped</span>
      </div>
      <div className={styles.mapColHeadRow}>
        <span style={{ flex: 1 }}>SPREADSHEET COLUMN</span>
        <span style={{ width: 24 }} />
        <span style={{ flex: 1 }}>CRM FIELD</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {mapped.map((m) => (
          <div key={m.from} className={styles.mapRow}>
            <span className={styles.mapField}>{m.from}</span>
            <span className={styles.mapArrow}>
              <Icon name="arrow_forward" size={15} color="var(--color-whatsapp)" />
            </span>
            <span className={styles.mapTarget}>
              {m.to}
              <Icon name="check_circle" size={14} color="var(--color-whatsapp)" />
            </span>
          </div>
        ))}
        <div className={styles.mapRow}>
          <span className={styles.mapFieldAlert}>Budget</span>
          <span className={styles.mapArrow}>
            <Icon name="arrow_forward" size={15} color="#c0503a" />
          </span>
          <span className={styles.mapTargetAlert}>
            Select field…
            <Icon name="error" size={14} color="#c0503a" />
          </span>
        </div>
      </div>
      <div className={styles.mapWarning}>
        <Icon name="info" size={17} color="var(--color-primary-dark-accent)" />
        <span className={styles.mapWarningText}>1 column needs mapping before import</span>
        <span className={styles.mapWarningSkip}>Skip</span>
      </div>
    </div>
  );
}

/** [7] AI Data Cleanup: a data-health score with flagged issues and a merge suggestion. */
export function AIDataCleanupMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.headRow}>
        <span className={styles.headTitle}>Data Health</span>
        <span className={waStyles.tagPill} style={{ color: 'var(--color-primary)', background: 'var(--color-primary-tint)' }}>
          <Icon name="auto_fix_high" size={13} color="var(--color-primary)" style={{ marginRight: 4 }} />AI scan
        </span>
      </div>
      <div className={styles.scoreRow}>
        <span className={styles.scoreRing} style={{ background: 'conic-gradient(var(--color-green) 0turn 0.82turn, #22335c 0.82turn 1turn)' }}>
          <span className={styles.scoreRingInner}>
            <span className={styles.scoreValue}>82</span>
            <span className={styles.scoreMax}>/100</span>
          </span>
        </span>
        <div style={{ flex: 1 }}>
          <div className={styles.scoreLabel}>Overall data quality</div>
          <div className={styles.scoreMeta}>74 records need attention across 1,248</div>
        </div>
      </div>
      <div className={styles.issueGrid}>
        <div className={styles.issueCard} style={{ background: '#fff6f3', border: '1px solid #f6c9ba' }}>
          <Icon name="content_copy" size={15} color="#c0503a" />
          <div className={styles.issueValue} style={{ color: '#c0503a' }}>24</div>
          <div className={styles.issueLabel} style={{ color: '#b06a4a' }}>Duplicates</div>
        </div>
        <div className={styles.issueCard} style={{ background: '#fbf4e6', border: '1px solid #ead9ae' }}>
          <Icon name="phone_missed" size={15} color="var(--color-yellow-icon)" />
          <div className={styles.issueValue} style={{ color: 'var(--color-yellow-icon)' }}>38</div>
          <div className={styles.issueLabel} style={{ color: '#a9841a' }}>Missing phone</div>
        </div>
        <div className={styles.issueCard} style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border-light)' }}>
          <Icon name="person_off" size={15} color="var(--color-text-muted)" />
          <div className={styles.issueValue}>12</div>
          <div className={styles.issueLabel} style={{ color: 'var(--color-text-faint)' }}>No owner</div>
        </div>
      </div>
      <div className={styles.duplicateCard}>
        <div className={styles.duplicateHead}>
          <Icon name="merge" size={15} color="#c0503a" />
          <span className={styles.duplicateLabel}>POSSIBLE DUPLICATE</span>
        </div>
        <div className={styles.duplicateRow}>
          <div className={styles.duplicateCol}>
            <div className={styles.duplicateName}>Priya Nair</div>
            <div className={styles.duplicateMeta}>+91 99870 11902</div>
          </div>
          <div className={styles.duplicateCol}>
            <div className={styles.duplicateName}>Priya Nair</div>
            <div className={styles.duplicateMeta}>priya.n@example.com</div>
          </div>
          <span className={styles.mergeBtn}>Merge</span>
        </div>
      </div>
    </div>
  );
}
