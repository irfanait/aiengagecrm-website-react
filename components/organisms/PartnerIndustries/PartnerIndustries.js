import Link from 'next/link';
import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import styles from './PartnerIndustries.module.css';

/** "Sell Across Industries" section: centered heading, an auto-fit grid of industry links,
 * and a "Become a Partner" CTA into the dedicated signup page. */
export default function PartnerIndustries({ data }) {
  return (
    <section id="sell-across-industries" className={styles.section}>
      <Container>
        <div className={styles.header}>
          <div className={styles.label}>{data.label}</div>
          <h2 className={styles.heading}>
            {data.titleLead} <span className="textAccent">{data.titleAccent}</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {data.items.map((item) =>
            item.href ? (
              <Link key={item.label} href={item.href} className={styles.card}>
                <span className={styles.iconBox}>
                  <Icon name={item.icon} size={24} color="var(--color-primary)" />
                </span>
                {item.label}
              </Link>
            ) : (
              <span key={item.label} className={styles.card}>
                <span className={styles.iconBox}>
                  <Icon name={item.icon} size={24} color="var(--color-primary)" />
                </span>
                <span className={item.muted ? styles.muted : undefined}>{item.label}</span>
              </span>
            )
          )}
        </div>

        <div className={styles.ctaRow}>
          <Button href={data.ctaHref} variant="primary" size="lg" shadow>
            {data.ctaLabel} →
          </Button>
        </div>
      </Container>
    </section>
  );
}
