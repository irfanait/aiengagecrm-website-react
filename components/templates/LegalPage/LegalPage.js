import Container from '../../common/Container/Container';
import styles from './LegalPage.module.css';

function Block({ block }) {
  if (block.type === 'subheading') {
    return <h3 className={styles.subheading}>{block.text}</h3>;
  }
  if (block.type === 'list') {
    return (
      <ul className={styles.list}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }
  return <p className={styles.paragraph}>{block.text}</p>;
}

/**
 * Shared long-form legal document layout: centered title + effective/updated dates, numbered
 * sections (each a heading plus a mix of paragraph/subheading/list blocks), and a closing
 * company-details footer. Used by /terms-of-service and /privacy-policy — content lives in
 * data/legal.js so this component stays purely structural.
 */
export default function LegalPage({ title, intro, sections, meta }) {
  return (
    <section className={styles.section}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.metaLine}>
            Effective Date: {meta.effectiveDate} &middot; Last Updated: {meta.lastUpdated}
          </p>
        </header>

        <article className={styles.article}>
          {intro &&
            intro.map((text) => (
              <p key={text} className={styles.intro}>
                {text}
              </p>
            ))}
          {sections.map((sec) => (
            <div key={sec.number} className={styles.sectionBlock}>
              <h2 className={styles.sectionHeading}>
                {sec.number}. {sec.heading}
              </h2>
              {sec.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          ))}
        </article>

        <footer className={styles.footerMeta}>
          <div className={styles.footerGrid}>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Operated By</span>
              <span>{meta.operatedBy}</span>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Registered Office</span>
              <span>{meta.registeredOffice}</span>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Legal</span>
              <a href={`mailto:${meta.legalEmail}`}>{meta.legalEmail}</a>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Privacy</span>
              <a href={`mailto:${meta.privacyEmail}`}>{meta.privacyEmail}</a>
            </div>
            <div className={styles.footerItem}>
              <span className={styles.footerLabel}>Support</span>
              <a href={`mailto:${meta.supportEmail}`}>{meta.supportEmail}</a>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}
