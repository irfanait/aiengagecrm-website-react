import Container from '../../common/Container/Container';
import styles from './BlogPostHeroImage.module.css';

/** Full-width featured image below the post header. Renders nothing when the post has no image. */
export default function BlogPostHeroImage({ src, alt }) {
  if (!src) return null;

  return (
    <div className={styles.section}>
      <Container className={styles.inner}>
        {/* eslint-disable-next-line @next/next/no-img-element -- external, admin-uploaded blog media */}
        <img src={src} alt={alt} className={styles.image} />
      </Container>
    </div>
  );
}
