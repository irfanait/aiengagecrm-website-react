import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './IndustryProblem.module.css';

function AssignedCell({ assigned }) {
  if (assigned.type === 'avatar') {
    return (
      <div className={styles.assignedAvatar}>
        <span className={styles.avatarCircle} style={{ background: assigned.bg, color: assigned.fg }}>
          {assigned.initials}
        </span>
        <span className={styles.avatarName}>{assigned.name}</span>
      </div>
    );
  }
  return (
    <span className={assigned.overdue ? styles.lastContactOverdue : assigned.strong ? styles.assignedTextStrong : styles.assignedText}>
      {assigned.value}
    </span>
  );
}

/**
 * "The Challenge" section: a messy lead/inquiry table mock on the left, problem list on the
 * right. `ratio` sets the two-column split (mock fr, text fr) — most industries use a narrower
 * mock (42fr 58fr) but pages with a wider table (more columns) pass 58fr 42fr instead.
 */
export default function IndustryProblem({ eyebrow, heading, problems, mock, ratio = '42fr 58fr' }) {
  const gridStyle = mock.columnTemplate ? { gridTemplateColumns: mock.columnTemplate } : undefined;

  return (
    <section id="problem" className={styles.section}>
      <Container className={styles.grid} style={{ gridTemplateColumns: ratio }}>
        <div className={styles.mockCard}>
          <div className={styles.mockHeader}>
            <span className={styles.mockHeaderTitle}>{mock.title}</span>
            <div className={styles.mockHeaderTools}>
              <span className={styles.mockSearch}>
                <Icon name="search" size={14} />
                {mock.searchLabel}
              </span>
              <span className={styles.mockFilter}>
                {mock.filterLabel || 'Source'}
                <Icon name="expand_more" size={14} />
              </span>
            </div>
          </div>

          <div className={styles.colHeaders} style={gridStyle}>
            {mock.columns.map((c) => (
              <span key={c} className={styles.colHeaderLabel}>
                {c}
              </span>
            ))}
          </div>

          {mock.rows.map((row, i) => (
            <div key={i} className={styles.row} style={gridStyle}>
              <div>
                <div className={styles.rowName}>{row.name}</div>
                {row.phone && <div className={styles.rowPhone}>{row.phone}</div>}
              </div>
              {row.product && <span className={styles.rowProduct}>{row.product}</span>}
              <span className={styles.sourceCell}>
                <span className={styles.tag}>{row.source}</span>
                {row.sourceExtra && <span className={styles.tagSmall}>{row.sourceExtra}</span>}
              </span>
              <AssignedCell assigned={row.assigned} />
              {row.lastContact && (
                <span className={row.lastContact.overdue ? styles.lastContactOverdue : styles.lastContact}>{row.lastContact.text}</span>
              )}
              <span className={styles.tag}>{row.status}</span>
            </div>
          ))}

          <div className={styles.mockFooter}>
            <span className={styles.mockFooterCount}>{mock.footerCount || mock.footerText}</span>
            {!mock.footerText && (
              <div className={styles.pager}>
                <span className={styles.pagerBtn}>
                  <Icon name="chevron_left" size={14} color="var(--color-text-faint)" />
                </span>
                <span className={styles.pagerNumActive}>1</span>
                <span className={styles.pagerNum}>2</span>
                <span className={styles.pagerNum}>3</span>
                <span className={styles.pagerBtn}>
                  <Icon name="chevron_right" size={14} color="var(--color-text-faint)" />
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className={styles.eyebrow}>{eyebrow}</div>
          <h2 className={styles.heading}>{heading}</h2>
          <div className={styles.problemList}>
            {problems.map((text) => (
              <div key={text} className={styles.problemItem}>
                <Icon name="priority_high" size={15} color="#c0503a" className={styles.problemIcon} />
                <span className={styles.problemText}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
