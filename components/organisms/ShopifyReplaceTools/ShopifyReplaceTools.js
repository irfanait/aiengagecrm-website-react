import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import { REPLACE_TOOLS, REPLACE_BENEFITS } from '../../../data/shopifyPartner';
import styles from './ShopifyReplaceTools.module.css';

export default function ShopifyReplaceTools() {
  return (
    <section id="use-cases" className={styles.section}>
      <Container>
        <div className={styles.panel}>
          <div className={styles.intro}>
            <h2 className={styles.heading}>
              Why Use 7+ Tools When <span className="textAccent">One Is Enough?</span>
            </h2>
            <p className={styles.desc}>
              Stop juggling multiple platforms. AiEngage CRM brings your marketing, sales, support and automation
              together in one connected platform.
            </p>
          </div>

          <div className={styles.before}>
            <div className={styles.beforeLabel}>Instead of this...</div>
            <div className={styles.toolGrid}>
              {REPLACE_TOOLS.map((t) => (
                <div key={t.label} className={styles.tool}>
                  <div className={styles.toolIcon}>
                    {t.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.logo} alt={t.label} className={styles.toolImg} loading="lazy" />
                    ) : (
                      <span className={styles.toolLetter} style={{ background: t.bg, color: t.color }}>
                        {t.letter}
                      </span>
                    )}
                  </div>
                  <div className={styles.toolText}>
                    <div className={styles.toolName}>{t.label}</div>
                    <div className={styles.toolSub}>{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.arrow}>
            <Icon name="arrow_forward" size={44} color="var(--color-primary)" />
          </div>

          <div className={styles.after}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/logo.svg" alt="AiEngage CRM" className={styles.afterLogo} />
            <div className={styles.benefits}>
              {REPLACE_BENEFITS.map((b) => (
                <div key={b} className={styles.benefit}>
                  <span className={styles.benefitCheck}>
                    <Icon name="check" size={16} color="#fff" />
                  </span>
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
