import Button from '../../atoms/Button/Button';
import { CTA_LINKS } from '../../../utils/constants';
import { fluidFontSize } from '../../../styles/fluidType';
import styles from './CTASection.module.css';

/**
 * Reusable dark CTA band used on the homepage and every WhatsApp feature page.
 * `centered=false` renders the homepage's left-aligned layout with eyebrow + note;
 * `centered=true` renders the compact centered variant used on feature sub-pages.
 */
export default function CTASection({
  eyebrow,
  title,
  description,
  primaryLabel = 'Book a Demo',
  primaryHref = CTA_LINKS.bookDemo,
  secondaryLabel = 'Try for Free',
  secondaryHref = CTA_LINKS.tryFree,
  note,
  centered = true,
  titleSize = 42,
}) {
  return (
    <section className={`${styles.section} ${centered ? styles.sectionCompact : ''}`}>
      <div className={`${styles.body} ${centered ? styles.bodyCentered : ''}`}>
        <div className={styles.content}>
          {eyebrow && (
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              {eyebrow}
            </div>
          )}
          <h2 className={styles.title} style={{ fontSize: fluidFontSize(titleSize), maxWidth: centered ? 640 : 560 }}>
            {title}
          </h2>
          {description && (
            <p className={styles.desc} style={centered ? { marginLeft: 'auto', marginRight: 'auto' } : undefined}>
              {description}
            </p>
          )}
          <div className={styles.ctaRow}>
            <Button href={primaryHref} variant="primary" size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && (
              <Button href={secondaryHref} variant="outlineOnDark" size="lg">
                {secondaryLabel}
              </Button>
            )}
            {note && <span className={styles.note}>{note}</span>}
          </div>
        </div>
      </div>
    </section>
  );
}
