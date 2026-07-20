import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './ProductHero.module.css';

/**
 * Shared hero layout for product feature pages: an optional pill badge, H1 (accepts a ReactNode
 * so an accent word can sit mid-sentence), description, an optional 2x2 feature checklist,
 * CTA row on the left; a bespoke visual mock (passed as children) on the right.
 */
export default function ProductHero({ badge, title, description, checklist, dark = false, children }) {
  return (
    <section className={`${styles.hero} ${dark ? styles.heroDark : ''}`}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          {badge && (
            <div className={styles.badge} style={{ background: badge.bg }}>
              <Icon name={badge.icon} size={18} color={badge.iconColor} />
              <span style={{ color: badge.textColor }}>{badge.label}</span>
            </div>
          )}
          <h1 className={`${styles.title} ${dark ? styles.titleDark : ''}`}>{title}</h1>
          <p className={`${styles.desc} ${dark ? styles.descDark : ''}`}>{description}</p>
          {checklist && (
            <div className={styles.checklist}>
              {checklist.map((item) => (
                <span key={item.label} className={styles.checklistItem}>
                  <Icon name={item.icon} size={19} color={item.color} />
                  {item.label}
                </span>
              ))}
            </div>
          )}
          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.tryFree} variant={dark ? 'outlineOnDark' : 'outline'} size="lg">
              Try for Free
            </Button>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
              Book a Demo
            </Button>
          </div>
        </div>
        <div className={styles.mock}>{children}</div>
      </Container>
    </section>
  );
}
