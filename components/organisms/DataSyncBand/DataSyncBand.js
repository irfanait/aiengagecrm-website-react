import SectionHeading from '../../molecules/SectionHeading/SectionHeading';
import styles from './DataSyncBand.module.css';

/** A full-width, centered-heading band wrapping a single bespoke visual (used for the
 * Integrations page's "How Your Data Stays In Sync" dashboard). */
export default function DataSyncBand({ eyebrow, heading, children }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <SectionHeading layout="centered" label={eyebrow} title={heading} titleSize={36} />
        </div>
        {children}
      </div>
    </section>
  );
}
