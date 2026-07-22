import Icon from '../../atoms/Icon/Icon';
import Container from '../../common/Container/Container';
import styles from './PricingPlatformTiles.module.css';

/** "All-in-one platform" grid: a tall colored WhatsApp tile plus 6 plain feature tiles. */
export default function PricingPlatformTiles({ eyebrow, heading, whatsappTile, tiles }) {
  return (
    <section id="all-in-one-platform" className={styles.section}>
      <Container>
        <div className={styles.headingWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.whatsappTile}>
            <span className={styles.whatsappIcon}>
              <Icon name={whatsappTile.icon} size={28} color="var(--color-green)" />
            </span>
            <div className={styles.whatsappTitle}>{whatsappTile.title}</div>
            <span className={styles.whatsappRule} />
            <p className={styles.whatsappDesc}>{whatsappTile.description}</p>
            <div className={styles.whatsappSpacer} />
            <div className={styles.whatsappChecks}>
              {whatsappTile.checks.map((c) => (
                <div key={c} className={styles.whatsappCheckItem}>
                  <Icon name="check_circle" size={18} color="#fff" />
                  {c}
                </div>
              ))}
            </div>
          </div>

          {tiles.map((tile) => (
            <div key={tile.title} className={`${styles.tile} ${tile.highlight ? styles.tileHighlight : ''}`}>
              <span className={styles.tileIcon}>
                <Icon name={tile.icon} size={24} color="var(--color-primary)" />
              </span>
              <div className={styles.tileTitle}>{tile.title}</div>
              <p className={styles.tileBody}>{tile.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
