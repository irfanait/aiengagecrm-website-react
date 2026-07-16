import Link from 'next/link';
import IconBubble from '../../atoms/IconBubble/IconBubble';
import Icon from '../../atoms/Icon/Icon';
import styles from './FeatureCard.module.css';

/**
 * White (or dark) bordered card with an icon bubble, title and description.
 * Used for the WhatsApp feature grids, "what it does" grids, and benefit grids.
 * If `href` is set, renders as a Link with a "Learn more" affordance; otherwise a static card.
 */
export default function FeatureCard({
  href,
  icon,
  iconBg,
  iconColor,
  title,
  description,
  dark = false,
  compact = false,
  learnMore = true,
  titleSize = 'lg',
}) {
  const content = (
    <>
      <div className={styles.icon}>
        <IconBubble icon={icon} bg={iconBg} color={iconColor} size={compact ? 44 : 50} />
      </div>
      <div className={titleSize === 'sm' ? styles.titleSm : styles.title}>{title}</div>
      <p className={`${titleSize === 'sm' ? styles.descSm : styles.desc} ${dark ? styles.descDark : ''}`.trim()}>{description}</p>
      {href && learnMore && (
        <span className={`${styles.learnMore} ${dark ? styles.learnMoreDark : ''}`.trim()}>
          Learn more
          <Icon name="arrow_forward" size={16} />
        </span>
      )}
    </>
  );

  const cardClass = `${styles.card} ${dark ? styles.dark : ''} ${compact ? styles.compact : ''} ${href ? styles.linked : ''}`.trim();

  if (href) {
    return (
      <Link href={href} className={cardClass}>
        {content}
      </Link>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
