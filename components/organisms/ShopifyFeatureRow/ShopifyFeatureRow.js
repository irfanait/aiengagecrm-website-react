import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './ShopifyFeatureRow.module.css';

/**
 * One alternating copy+image card — used 6 times on /shopify-partner with different content
 * (`reverse` flips which side the image sits on). `groupHeading` renders the shared "One CRM to
 * Automate the Entire Customer Journey" heading above the card, passed only on the first row.
 */
export default function ShopifyFeatureRow({
  id,
  heading,
  accent,
  tail,
  desc,
  checks,
  flow,
  image,
  imageAlt,
  reverse = false,
  groupHeading,
  rawImage = false,
}) {
  return (
    <section id={id} className={styles.section}>
      <Container>
        {groupHeading && <h2 className={styles.groupHeading}>{groupHeading}</h2>}

        <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
          <div className={styles.copy}>
            <h3 className={styles.heading}>
              {heading}
              <span className="textAccent">{accent}</span>
              {tail}
            </h3>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.checks}>
              {checks.map((c) => (
                <div key={c} className={styles.check}>
                  <Icon name="check_circle" size={17} color="var(--color-primary)" />
                  {c}
                </div>
              ))}
            </div>
            <div className={styles.flow}>{flow}</div>
          </div>

          <div className={styles.art}>
            {rawImage ? (
              // Test path: serves the source file's bytes directly, bypassing next/image's
              // resize/re-encode entirely — no responsive srcset, no format negotiation, no
              // built-in CLS sizing, just the original file at whatever size CSS renders it.
              // eslint-disable-next-line @next/next/no-img-element
              <img src={image} alt={imageAlt} className={styles.image} loading="lazy" />
            ) : (
              <Image
                src={image}
                alt={imageAlt}
                width={1484}
                height={1060}
                className={styles.image}
                sizes="(max-width: 900px) 100vw, 555px"
                quality={95}
              />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
