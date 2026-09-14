import Container from '../../common/Container/Container';
import { OUR_STORY } from '../../../data/shopifyPartner';
import styles from './ShopifyOurStory.module.css';

export default function ShopifyOurStory() {
  return (
    <section id="resources" className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.art}>
            <div className={styles.blob} />
            <div className={styles.stat}>{OUR_STORY.stat}</div>
            <div className={styles.statLabel}>{OUR_STORY.statLabel}</div>
          </div>

          <div className={styles.copy}>
            <h2 className={styles.heading}>
              {OUR_STORY.headingLead}
              <span className="textAccent">{OUR_STORY.headingAccent}</span>
            </h2>
            {OUR_STORY.paragraphs.map((p) => (
              <p key={p} className={styles.desc}>
                {p}
              </p>
            ))}
            <p className={styles.desc}>
              {OUR_STORY.closing}
              <b className={styles.bold}>{OUR_STORY.closingBold}</b>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
