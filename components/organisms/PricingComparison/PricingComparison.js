import Link from 'next/link';
import Container from '../../common/Container/Container';
import styles from './PricingComparison.module.css';

/** "Traditional CRMs" vs "AiEngage" stacked comparison cards, under a centered heading. */
export default function PricingComparison({ titleLead, titleAccent, titleTail, aiList, tradList, ctaLabel, ctaHref }) {
  return (
    <section id="why-aiengage" className={styles.section}>
      <Container>
        <h2 className={styles.heading}>
          {titleLead}
          <span className="textAccent">{titleAccent}</span>
          {titleTail}
        </h2>

        <div className={styles.compareWrap}>
          <div className={styles.tradCard}>
            <div className={styles.tradTitle}>Traditional CRMs</div>
            <div className={styles.list}>
              {tradList.map((t) => (
                <div key={t} className={styles.tradItem}>
                  <span className={styles.tradDot} />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.aiCard}>
            <div className={styles.aiBrand}>
              <span className={styles.aiBrandText}>
                Ai<span className="textAccent">Engage</span>
              </span>
              <span className={styles.aiBrandBy}>by AiTrillion</span>
            </div>
            <div className={styles.list}>
              {aiList.map((a) => (
                <div key={a} className={styles.aiItem}>
                  <span className={styles.aiDot}>
                    <span className={styles.aiDotInner} />
                  </span>
                  {a}
                </div>
              ))}
            </div>
            <Link href={ctaHref} className={styles.cta}>
              {ctaLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
