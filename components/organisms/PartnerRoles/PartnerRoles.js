import Container from '../../common/Container/Container';
import PartnerFeatureGrid from '../PartnerFeatureGrid/PartnerFeatureGrid';
import styles from './PartnerRoles.module.css';

/** "More Than Referrals" section: split heading/paragraph header row + 3-card role grid. */
export default function PartnerRoles({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div>
            <div className={styles.label}>{data.label}</div>
            <h2 className={styles.heading}>
              {data.headingLine1}
              <br />
              {data.headingLine2}
              <span className="textAccent">{data.headingAccent}</span>
              {data.headingLine2Suffix}
            </h2>
          </div>
          <div className={styles.copy}>
            {data.paragraphs.map((p) => (
              <p key={p} className={styles.paragraph}>
                {p}
              </p>
            ))}
            <p className={styles.paragraph}>
              {data.paragraphLead}
              <span className={styles.paragraphAccent}>{data.paragraphAccent}</span>
            </p>
          </div>
        </div>

        <PartnerFeatureGrid items={data.items} columns={3} />
      </Container>
    </section>
  );
}
