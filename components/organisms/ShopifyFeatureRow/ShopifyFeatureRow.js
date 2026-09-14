import Image from 'next/image';
import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './ShopifyFeatureRow.module.css';

/**
 * One alternating copy+image card — used 6 times on /shopify-partner with different content
 * (`reverse` flips which side the image sits on). `groupHeading` renders the shared "One CRM to
 * Automate the Entire Customer Journey" heading above the card, passed only on the first row.
 */
export default function ShopifyFeatureRow({ id, heading, accent, tail, desc, checks, flow, image, imageAlt, reverse = false, groupHeading }) {
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
            <Image
              src={image}
              alt={imageAlt}
              width={1484}
              height={1060}
              className={styles.image}
              sizes="(max-width: 900px) 100vw, 555px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
