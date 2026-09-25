import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import Avatar from '../../atoms/Avatar/Avatar';
import BlogShareButtons from '../../molecules/BlogShareButtons/BlogShareButtons';
import { formatBlogDate, getReadTime, getAuthor } from '../../../utils/blogFormat';
import styles from './BlogPostHeader.module.css';

/** Category badge, title, excerpt and the author/read-time/share meta row. */
export default function BlogPostHeader({ post, url }) {
  const author = getAuthor(post);
  const readMinutes = getReadTime(post);
  // The meta description is written by hand for SEO, so it isn't subject to the CMS's auto-generated
  // excerpt sometimes getting cut off mid-word — prefer it here, falling back to the excerpt only
  // when a post has no meta description at all.
  const summary = post.seo?.description || post.excerpt;

  return (
    <header className={styles.section}>
      <Container className={styles.inner}>
        {post.category?.name && <span className={styles.categoryPill}>{post.category.name}</span>}
        <h1 className={styles.title}>{post.title}</h1>
        {summary && <p className={styles.excerpt}>{summary}</p>}

        <div className={styles.meta}>
          <div className={styles.author}>
            <Avatar name={author.name} src={author.avatarUrl} size={44} />
            <div>
              <div className={styles.authorName}>{author.name}</div>
              <time className={styles.date} dateTime={post.publishedAt}>
                {formatBlogDate(post.publishedAt)}
              </time>
            </div>
          </div>

          {readMinutes && (
            <span className={styles.readTime}>
              <Icon name="schedule" size={17} color="var(--color-text-muted)" />
              {readMinutes} min read
            </span>
          )}

          <BlogShareButtons url={url} title={post.title} />
        </div>
      </Container>
    </header>
  );
}
