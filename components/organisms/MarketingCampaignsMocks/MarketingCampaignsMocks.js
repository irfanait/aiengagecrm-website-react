import Icon from '../../atoms/Icon/Icon';
import waStyles from '../WhatsAppMocks/WhatsAppMocks.module.css';
import lmStyles from '../LeadManagementMocks/LeadManagementMocks.module.css';
import styles from './MarketingCampaignsMocks.module.css';

/** Hero: recent campaigns across channels + a delivered/replies/leads summary. */
export function CampaignsDashboardMock() {
  const campaigns = [
    { icon: 'mail', bg: 'var(--color-blue-tint)', color: 'var(--color-blue)', title: 'Diwali Offer · Email', meta: 'Sent to 8,240', value: '62%', label: 'open', color2: 'var(--color-whatsapp)' },
    { icon: 'chat', bg: 'var(--color-green-tint)', color: 'var(--color-whatsapp)', title: 'New Launch · WhatsApp', meta: 'Sent to 12,480', value: '88%', label: 'read', color2: 'var(--color-whatsapp)' },
    { icon: 'sms', bg: 'var(--color-purple-tint)', color: 'var(--color-purple)', title: 'Renewal · SMS', meta: 'Sent to 3,100', value: '316', label: 'clicks', color2: 'var(--color-primary)' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Campaigns</span>
        <span className={waStyles.pillGreen}>4 active</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {campaigns.map((c) => (
          <div key={c.title} className={styles.campaignRow}>
            <span className={styles.campaignIcon} style={{ background: c.bg }}>
              <Icon name={c.icon} size={18} color={c.color} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className={styles.campaignTitle}>{c.title}</div>
              <div className={styles.campaignMeta}>{c.meta}</div>
            </div>
            <div className={styles.campaignStat}>
              <div className={styles.campaignStatValue} style={{ color: c.color2 }}>{c.value}</div>
              <div className={styles.campaignStatLabel}>{c.label}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.darkStatRow}>
        <div className={styles.darkStatChip}>
          <div className={styles.darkStatLabel}>Delivered</div>
          <div className={styles.darkStatValue}>23,820</div>
        </div>
        <div className={styles.darkStatChip}>
          <div className={styles.darkStatLabel}>Replies</div>
          <div className={styles.darkStatValue}>1,204</div>
        </div>
        <div className={styles.darkStatChip}>
          <div className={styles.darkStatLabel}>Leads</div>
          <div className={styles.darkStatValue} style={{ color: 'var(--color-primary-dark-accent)' }}>418</div>
        </div>
      </div>
    </div>
  );
}

/** [1] Email Campaigns: a drag-and-drop builder with a live email preview. */
export function EmailBuilderMock() {
  const blocks = [
    { icon: 'title', color: 'var(--color-primary)', label: 'Heading' },
    { icon: 'image', color: 'var(--color-blue)', label: 'Image' },
    { icon: 'smart_button', color: 'var(--color-purple)', label: 'Button' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Email Builder</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-blue)', background: 'var(--color-blue-tint)', borderRadius: 999, padding: '3px 10px' }}>Diwali Offer</span>
      </div>
      <div className={styles.tinyLabel}>TEMPLATE GALLERY</div>
      <div className={styles.templateGallery}>
        <div className={`${styles.templateSwatch} ${styles.templateSwatchActive}`} style={{ background: 'linear-gradient(120deg, #ffd9cc, #ff8c68)' }} />
        <div className={styles.templateSwatch} style={{ background: '#eef3fb' }} />
        <div className={styles.templateSwatch} style={{ background: '#ede7fa' }} />
        <div className={styles.templateSwatch} style={{ background: '#e7f5ec' }} />
        <div className={`${styles.templateSwatch} ${styles.templateSwatchAdd}`}>
          <Icon name="add" size={16} color="var(--color-text-faint)" />
        </div>
      </div>
      <div className={styles.builderSplit}>
        <div className={styles.blocksCol}>
          <div className={styles.tinyLabel} style={{ marginBottom: 0 }}>BLOCKS</div>
          {blocks.map((b) => (
            <div key={b.label} className={styles.blockItem}>
              <Icon name={b.icon} size={14} color={b.color} />
              {b.label}
            </div>
          ))}
          <div className={`${styles.blockItem} ${styles.blockItemActive}`}>
            <Icon name="drag_indicator" size={14} color="var(--color-primary-hover)" />
            Drag
          </div>
        </div>
        <div className={styles.canvasPanel}>
          <div className={styles.canvasCard}>
            <div className={styles.canvasBanner} style={{ background: 'linear-gradient(90deg, #ffd9cc, #ff8c68)' }} />
            <div className={styles.canvasHeadline}>
              Hi <span className={styles.mergeTag}>[First Name]</span> 🎉
            </div>
            <div className={styles.skeletonLine} style={{ width: '100%' }} />
            <div className={styles.skeletonLine} style={{ width: '80%', marginBottom: 10 }} />
            <span className={styles.canvasCta}>Claim 30% off</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <div className={styles.metaRow} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-text-faint)', width: 52, flexShrink: 0 }}>SUBJECT</span>
          <span style={{ flex: 1, fontSize: 11, fontWeight: 600 }}>We miss you — here&apos;s 30% off 🎉</span>
        </div>
        <div style={{ display: 'flex', gap: 7 }}>
          <div className={styles.metaRow} style={{ flex: 1 }}>
            <div className={styles.metaRowLabel}>FROM</div>
            <div className={styles.metaRowValue}>AiEngage Team</div>
          </div>
          <div className={styles.metaRow} style={{ flex: 1 }}>
            <div className={styles.metaRowLabel}>PREHEADER</div>
            <div className={styles.metaRowValue}>Limited-time festive deal</div>
          </div>
        </div>
      </div>
      <div className={styles.footerRow}>
        <div className={styles.footerChips}>
          <span className={styles.footerChip}>
            <Icon name="group" size={13} color="var(--color-text-muted)" />Warm leads · 8,240
          </span>
          <span className={styles.footerChip}>
            <Icon name="schedule" size={13} color="var(--color-text-muted)" />Fri 10 AM
          </span>
        </div>
        <span className={styles.footerAction}>Send test</span>
      </div>
    </div>
  );
}

/** [2] WhatsApp Campaigns: a template preview with delivery, read, and reply tracking. */
export function WhatsAppCampaignBuilderMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>WhatsApp Campaign</span>
        <span className={waStyles.pillGreen}>12,480 recipients</span>
      </div>
      <div className={styles.waSplit}>
        <div className={styles.waPreviewCol}>
          <div className={styles.waCard}>
            <div className={styles.waCardBanner} style={{ background: 'linear-gradient(120deg, #b7e9cc, #128c4b)' }}>
              <Icon name="celebration" size={30} color="#fff" />
            </div>
            <div className={styles.waCardBody}>
              <div className={styles.waCardText}>
                🎉 Festive Sale is live! Flat 30% off for <b>[Name]</b> till Nov 5.
              </div>
              <div style={{ marginTop: 9, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <span className={styles.waCardBtn}>🛍 Shop now</span>
                <span className={styles.waCardBtn}>💬 Talk to us</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.waStatsCol}>
          <div className={styles.waStatCard}>
            <div className={styles.waStatLabel}>TEMPLATE</div>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-whatsapp)' }}>Approved ✓</div>
          </div>
          <div className={styles.waStatCard}>
            <div className={styles.waStatLabel}>DELIVERED</div>
            <div className={styles.waStatValue}>11,940</div>
          </div>
          <div className={styles.waStatCard}>
            <div className={styles.waStatLabel}>READ</div>
            <div className={styles.waStatValue} style={{ color: 'var(--color-whatsapp)' }}>88%</div>
          </div>
        </div>
      </div>
      <div className={styles.tinyLabel} style={{ marginTop: 12 }}>PERSONALIZATION VARIABLES</div>
      <div className={styles.varChipRow} style={{ marginBottom: 12 }}>
        {['[name]', '[city]', '[offer]', '[expiry]'].map((v) => (
          <span key={v} className={styles.varChip}>{v}</span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <div className={styles.miniInfoChip}>
          <Icon name="schedule" size={15} color="var(--color-purple)" />
          Scheduled · Fri 6 PM
        </div>
        <div className={styles.miniInfoChip}>
          <Icon name="group" size={15} color="var(--color-primary)" />
          Inactive 60d
        </div>
      </div>
      <div className={styles.statGrid4} style={{ marginBottom: 12 }}>
        <div className={styles.statGrid4Chip}>
          <div className={styles.statGrid4Label}>Delivered</div>
          <div className={styles.statGrid4Value}>11,940</div>
        </div>
        <div className={styles.statGrid4Chip}>
          <div className={styles.statGrid4Label}>Read</div>
          <div className={styles.statGrid4Value} style={{ color: 'var(--color-whatsapp)' }}>88%</div>
        </div>
        <div className={styles.statGrid4Chip}>
          <div className={styles.statGrid4Label}>Replies</div>
          <div className={styles.statGrid4Value} style={{ color: 'var(--color-blue)' }}>1,046</div>
        </div>
        <div className={styles.statGrid4Chip}>
          <div className={styles.statGrid4Label}>Clicks</div>
          <div className={styles.statGrid4Value} style={{ color: 'var(--color-primary)' }}>512</div>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <span className={styles.statusPill} style={{ color: 'var(--color-whatsapp)', background: 'var(--color-green-tint)' }}>Delivered</span>
        <span className={styles.statusPill} style={{ color: 'var(--color-blue)', background: 'var(--color-blue-tint)' }}>1,046 replies</span>
        <span className={styles.statusPill} style={{ color: 'var(--color-purple)', background: 'var(--color-purple-tint)' }}>Catalog attached</span>
      </div>
    </div>
  );
}

/** [3] AI Campaign Builder: a prompt turning into subject lines and message drafts. */
export function AICampaignBuilderMock() {
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded}`}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 14 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: 'var(--color-purple-tint)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="auto_awesome" size={18} color="var(--color-purple)" />
        </span>
        <span className={styles.panelTitle}>AI Campaign Builder</span>
      </div>
      <div className={styles.promptRow} style={{ marginBottom: 13 }}>
        <Icon name="edit" size={16} color="var(--color-text-faint)" />
        <span className={styles.promptText}>Diwali offer for inactive customers, 30% off</span>
        <span className={styles.generateBtn}>Generate</span>
      </div>
      <div className={styles.tinyLabel}>SUBJECT LINES</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 13 }}>
        <div className={styles.subjectRow}>
          <span className={styles.subjectText}>🎉 Your exclusive 30% Diwali gift inside</span>
          <Icon name="content_copy" size={15} color="var(--color-text-faint)" />
        </div>
        <div className={`${styles.subjectRow} ${styles.subjectRowActive}`}>
          <span className={styles.subjectText} style={{ fontWeight: 600 }}>We miss you — here&apos;s 30% off, [Name] ✨</span>
          <span className={styles.useThisTag}>Use this</span>
        </div>
      </div>
      <div className={styles.tinyLabel}>MESSAGE DRAFT</div>
      <div className={styles.draftBox}>
        <div className={styles.draftSkeleton} style={{ width: '95%' }} />
        <div className={styles.draftSkeleton} style={{ width: '100%' }} />
        <div className={styles.draftSkeleton} style={{ width: '70%', marginBottom: 0 }} />
        <div className={styles.variationRow}>
          <span className={`${styles.variationChip} ${styles.variationChipActive}`}>Variation A</span>
          <span className={`${styles.variationChip} ${styles.variationChipInactive}`}>Variation B</span>
        </div>
      </div>
      <div className={styles.draftBox} style={{ marginTop: 12 }}>
        <div className={styles.draftSkeleton} style={{ width: '95%' }} />
        <div className={styles.draftSkeleton} style={{ width: '70%', marginBottom: 0 }} />
        <div className={styles.variationRow}>
          <span className={`${styles.variationChip} ${styles.variationChipInactive}`}>Variation A</span>
          <span className={`${styles.variationChip} ${styles.variationChipActive}`}>Variation B</span>
        </div>
      </div>
    </div>
  );
}

/** [4] AI Campaign Insights: cross-channel performance with a per-campaign breakdown. */
export function CampaignInsightsMock() {
  const filters = ['All channels', 'Email', 'WhatsApp', 'SMS'];
  const stats = [
    { label: 'Delivery', value: '96%', color: 'var(--color-whatsapp)' },
    { label: 'Open', value: '62%' },
    { label: 'Click', value: '21%', color: 'var(--color-primary)' },
    { label: 'Read', value: '88%', color: 'var(--color-whatsapp)' },
  ];
  const channels = [
    { label: 'Email', pct: 62, color: 'var(--color-blue)' },
    { label: 'WhatsApp', pct: 88, color: 'var(--color-whatsapp)' },
    { label: 'SMS', pct: 44, color: 'var(--color-purple)' },
  ];
  const rows = [
    { name: 'Diwali Offer', sent: '8,240', leads: '214' },
    { name: 'New Launch', sent: '12,480', leads: '204' },
    { name: 'Renewal Reminder', sent: '3,100', leads: '96' },
    { name: 'Weekend Flash Sale', sent: '6,720', leads: '143' },
  ];
  return (
    <div className={`${waStyles.card} ${waStyles.cardFluid} ${waStyles.cardPadded} ${waStyles.cardTinted}`}>
      <div className={styles.panelHead}>
        <span className={styles.panelTitle}>Campaign Insights</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-purple)', background: 'var(--color-purple-tint)', borderRadius: 999, padding: '3px 10px' }}>Last 30 days</span>
      </div>
      <div className={waStyles.filterRow} style={{ marginBottom: 13 }}>
        {filters.map((f, i) => (
          <span key={f} className={i === 0 ? waStyles.filterActive : waStyles.filterChip}>{f}</span>
        ))}
      </div>
      <div className={styles.statGrid4} style={{ marginBottom: 14 }}>
        {stats.map((s) => (
          <div key={s.label} className={styles.statGrid4Chip} style={{ background: '#fff', borderRadius: 11, padding: 10 }}>
            <div className={styles.statGrid4Label} style={{ fontSize: 9 }}>{s.label}</div>
            <div className={styles.statGrid4Value} style={{ fontSize: 16, color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
      <div className={styles.channelBox}>
        <div className={styles.channelBoxTitle}>Channel comparison</div>
        {channels.map((c) => (
          <div key={c.label} className={lmStyles.signalRow} style={{ marginBottom: 9, fontSize: 10.5 }}>
            <span className={lmStyles.signalLabel} style={{ width: 60 }}>{c.label}</span>
            <div className={lmStyles.signalTrack} style={{ height: 9 }}>
              <div className={lmStyles.signalFill} style={{ height: 9, width: `${c.pct}%`, background: c.color }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 700, width: 30, textAlign: 'right' }}>{c.pct}%</span>
          </div>
        ))}
      </div>
      <div className={styles.tableBox}>
        <div className={styles.tableHeadRow}>
          <span style={{ flex: 1 }}>CAMPAIGN</span>
          <span className={styles.tableColNum}>SENT</span>
          <span className={styles.tableColNum}>LEADS</span>
        </div>
        {rows.map((r) => (
          <div key={r.name} className={styles.tableRow}>
            <span className={styles.tableColName}>{r.name}</span>
            <span className={styles.tableColNum} style={{ color: 'var(--color-text-muted)' }}>{r.sent}</span>
            <span className={styles.tableColNum} style={{ fontWeight: 700, color: 'var(--color-whatsapp)' }}>{r.leads}</span>
          </div>
        ))}
      </div>
      <div className={styles.insightBanner}>
        <Icon name="trending_up" size={17} color="var(--color-whatsapp)" />
        <span className={styles.insightBannerLabel}>Top segment: Repeat customers</span>
        <span className={styles.insightBannerValue}>+34% CTR</span>
      </div>
    </div>
  );
}
