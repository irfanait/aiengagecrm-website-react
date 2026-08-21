import Container from '../../common/Container/Container';
import styles from './BlogPostBanner.module.css';

/** Optional promo banner (`data.banner`) between the article body and the tags row —
 * a clickable image the admin uploads/configures per post. Renders nothing when absent. */
export default function BlogPostBanner({ banner }) {
  if (!banner?.imageUrl) return null;

  const image = (
    // eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded promo creative
    <img src={banner.imageUrl} alt="" className={styles.image} />
  );

  return (
    <div className={styles.section}>
      <Container className={styles.inner}>
        {banner.linkUrl ? (
          <a href={banner.linkUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {image}
          </a>
        ) : (
          image
        )}
      </Container>
    </div>
  );
}
