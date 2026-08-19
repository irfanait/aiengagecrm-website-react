import Container from '../../common/Container/Container';
import PartnerFeatureGrid from '../PartnerFeatureGrid/PartnerFeatureGrid';
import styles from './PartnerSupport.module.css';

/** "We Help You Win" section: kicker + heading, then a 6-card support grid. */
export default function PartnerSupport({ data }) {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.label}>{data.label}</div>
        <h2 className={styles.heading}>
          {data.headingLine1}
          <br />
          {data.headingLine2}
          <span className="textAccent">{data.headingAccent}</span>
          {data.headingLine2Suffix}
        </h2>

        <PartnerFeatureGrid items={data.items} columns={3} />
      </Container>
    </section>
  );
}
