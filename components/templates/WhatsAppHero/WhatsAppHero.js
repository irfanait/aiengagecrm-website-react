import Button from '../../atoms/Button/Button';
import IconBubble from '../../atoms/IconBubble/IconBubble';
import Breadcrumb from '../../molecules/Breadcrumb/Breadcrumb';
import Container from '../../common/Container/Container';
import { CTA_LINKS } from '../../../utils/constants';
import styles from './WhatsAppHero.module.css';

/**
 * Shared hero layout for the WhatsApp hub + its 6 feature pages: breadcrumb, icon bubble,
 * H1, description, CTA row on the left; a bespoke visual mock (passed as children) on the right.
 */
export default function WhatsAppHero({
  breadcrumbItems,
  icon,
  iconBg,
  iconColor,
  title,
  titleAccent,
  description,
  dark = false,
  children,
}) {
  return (
    <section className={`${styles.hero} ${dark ? styles.heroDark : ''}`}>
      <Container className={styles.inner}>
        <div className={styles.content}>
          <Breadcrumb items={breadcrumbItems} dark={dark} />
          <div className={styles.iconBubble}>
            <IconBubble icon={icon} bg={iconBg} color={iconColor} size={54} shape="square" />
          </div>
          <h1 className={`${styles.title} ${dark ? styles.titleDark : ''}`}>
            {title}
            {titleAccent && <span className={styles.titleAccent}> {titleAccent}</span>}
          </h1>
          <p className={`${styles.desc} ${dark ? styles.descDark : ''}`}>{description}</p>
          <div className={styles.ctaRow}>
            <Button href={CTA_LINKS.bookDemo} variant="primary" size="lg" shadow>
              Book a Demo
            </Button>
            <Button href={CTA_LINKS.tryFree} variant={dark ? 'outlineOnDark' : 'outline'} size="lg">
              Try for Free
            </Button>
          </div>
        </div>
        <div className={styles.mock}>{children}</div>
      </Container>
    </section>
  );
}
