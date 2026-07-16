import { fluidFontSize } from '../../../styles/fluidType';
import styles from './SectionHeading.module.css';

/**
 * Recurring "01 · SECTION LABEL" eyebrow + heading pattern used across every marketing section.
 * layout: 'stack' (heading only, margin below) | 'split' (heading + side paragraph) | 'centered'
 */
export default function SectionHeading({
  index,
  label,
  title,
  description,
  layout = 'stack',
  dark = false,
  titleSize = 42,
  titleMaxWidth,
  descMaxWidth = 340,
  className = '',
}) {
  const wrapClass = layout === 'centered' ? styles.centered : layout === 'split' ? styles.split : styles.stack;
  const fluidSize = fluidFontSize(titleSize);

  const heading = (
    <h2 className={`${styles.title} ${dark ? styles.titleDark : ''}`} style={{ fontSize: fluidSize, maxWidth: titleMaxWidth }}>
      {title}
    </h2>
  );

  return (
    <div className={`${wrapClass} ${className}`.trim()}>
      {layout !== 'centered' && (index || label) && (
        <div className={styles.tag}>
          {index && <span className={`${styles.index} ${dark ? styles.indexDark : ''}`}>{index}</span>}
          {label && <span className={`${styles.label} ${dark ? styles.labelDark : ''}`}>{label}</span>}
        </div>
      )}

      {layout === 'centered' ? (
        <>
          {label && <span className={`${styles.label} ${dark ? styles.labelDark : ''}`}>{label}</span>}
          <h2
            className={`${styles.title} ${dark ? styles.titleDark : ''}`}
            style={{ fontSize: fluidSize, maxWidth: titleMaxWidth, margin: '12px auto 0' }}
          >
            {title}
          </h2>
        </>
      ) : layout === 'split' ? (
        <>
          {heading}
          {description && (
            <p className={`${styles.description} ${dark ? styles.descriptionDark : ''}`} style={{ maxWidth: descMaxWidth }}>
              {description}
            </p>
          )}
        </>
      ) : (
        title && heading
      )}
    </div>
  );
}
