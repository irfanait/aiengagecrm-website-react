import Icon from '../../atoms/Icon/Icon';
import Button from '../../atoms/Button/Button';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './AboutHero.module.css';

/**
 * Centered hero with no side visual — used by the About Us page, unlike ProductHero which
 * always pairs its text block with a mock on the right.
 */
export default function AboutHero({ badge, title, description }) {
  return (
    <section id="hero" className={styles.hero}>
      <Container className={styles.inner}>
        {badge && (
          <div className={styles.badge} style={{ background: badge.bg }}>
            {badge.icon && <Icon name={badge.icon} size={18} color={badge.iconColor} />}
            <span style={{ color: badge.textColor, marginLeft: badge.icon ? 9 : 0 }}>{badge.label}</span>
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{description}</p>
        <div className={styles.ctaRow}>
          <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
            Book a Demo
          </Button>
          <Button href={CTA_LINKS.tryFree} variant="outline" size="lg">
            Try for Free
          </Button>
        </div>
      </Container>
    </section>
  );
}
