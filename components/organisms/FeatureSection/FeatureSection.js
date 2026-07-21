import Container from '../../common/Container/Container';
import CheckItem from '../../molecules/CheckItem/CheckItem';
import styles from './FeatureSection.module.css';

/**
 * Alternating visual/text feature section used down product feature pages (WhatsApp Business,
 * Multichannel Communication, ...): eyebrow + heading with a trailing accent word, an optional
 * bold lead-in line, one or more description paragraphs, one or two checklist groups, and a
 * mock visual that swaps sides every other section.
 */
export default function FeatureSection({
  id,
  index,
  eyebrow,
  titleLead,
  titleAccent,
  titleTrail,
  leadParagraph,
  paragraphs,
  lists,
  mock,
  reverse = false,
  checkIcon = 'check_circle',
  mutedListHeading = false,
  keyBenefits,
  trailingParagraph,
  dark = false,
}) {
  const checkColor = dark ? 'var(--color-primary-dark-accent)' : 'var(--color-primary)';
  return (
    <section id={id} className={`${styles.section} ${reverse ? styles.alt : ''} ${dark ? styles.dark : ''}`}>
      <Container>
        <div className={`${styles.row} ${reverse ? styles.rowReverse : ''}`}>
          <div className={styles.visual}>{mock}</div>
          <div className={styles.text}>
            {eyebrow && (
              <div className={`${styles.eyebrow} ${dark ? styles.eyebrowDark : ''}`}>
                {index ? `${index} · ${eyebrow}` : eyebrow}
              </div>
            )}
            <h2 className={`${styles.title} ${dark ? styles.titleDark : ''}`}>
              {titleLead}
              {titleAccent && <span className={dark ? styles.accentDark : styles.accent}>{titleAccent}</span>}
              {titleTrail}
            </h2>
            {leadParagraph && <p className={`${styles.leadDesc} ${dark ? styles.leadDescDark : ''}`}>{leadParagraph}</p>}
            {paragraphs.map((p) => (
              <p key={p} className={`${styles.desc} ${dark ? styles.descDark : ''}`}>
                {p}
              </p>
            ))}
            <div className={styles.listGroups}>
              {lists.map((group) => (
                <div key={group.heading} className={styles.listGroup}>
                  <div className={`${styles.listHeading} ${dark ? styles.listHeadingDark : ''} ${mutedListHeading ? styles.listHeadingMuted : ''}`}>{group.heading}</div>
                  <div className={`${styles.listGrid} ${group.columns === 1 ? styles.listGridSingle : ''}`}>
                    {group.items.map((item) => (
                      <CheckItem key={item} small top dark={dark} icon={checkIcon} color={checkColor}>
                        {item}
                      </CheckItem>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {trailingParagraph && <p className={`${styles.desc} ${dark ? styles.descDark : ''}`}>{trailingParagraph}</p>}
          </div>
        </div>
        {keyBenefits && (
          <div className={styles.keyBenefits}>
            <div className={styles.keyBenefitsHeading}>{keyBenefits.heading}</div>
            <div className={styles.keyBenefitsGrid}>
              {keyBenefits.items.map((item) => (
                <CheckItem key={item} small top muted icon="bolt" color="var(--color-green)">
                  {item}
                </CheckItem>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
