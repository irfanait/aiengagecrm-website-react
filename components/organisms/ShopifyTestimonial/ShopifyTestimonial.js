import Container from '../../common/Container/Container';
import { TESTIMONIAL } from '../../../data/shopifyPartner';
import styles from './ShopifyTestimonial.module.css';

export default function ShopifyTestimonial() {
  return (
    <section className={styles.section}>
      <Container className={styles.body}>
        <div className={styles.left}>
          <div className={styles.label}>{TESTIMONIAL.label}</div>
          <h3 className={styles.heading}>{TESTIMONIAL.heading}</h3>
          <div className={styles.logos}>
            {TESTIMONIAL.logos.map((l) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={l.name} src={l.logo} alt={l.name} className={styles.logoImg} loading="lazy" />
            ))}
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHead}>
            <div className={styles.avatars}>
              {TESTIMONIAL.avatars.map((a) => (
                <span key={a.initials} className={styles.avatar} style={{ background: a.bg, color: a.color }}>
                  {a.initials}
                </span>
              ))}
            </div>
            <span className={styles.stars}>★★★★★</span>
          </div>
          <p className={styles.quote}>&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
          <div className={styles.attribution}>{TESTIMONIAL.attribution}</div>
        </div>
      </Container>
    </section>
  );
}
