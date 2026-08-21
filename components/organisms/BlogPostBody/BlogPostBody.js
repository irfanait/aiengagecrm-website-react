import Container from '../../common/Container/Container';
import BlogTOC from '../../molecules/BlogTOC/BlogTOC';
import styles from './BlogPostBody.module.css';

/** The article's rendered HTML content (from the CMS, already sanitized per the API docs),
 * plus the collapsible table-of-contents built from `toc` [{id,text,level}]. */
export default function BlogPostBody({ toc, contentHtml }) {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <BlogTOC items={toc} />
        {/* data.content is CMS-sanitized HTML per the Blog API docs */}
        <div className={styles.content} dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Container>
    </section>
  );
}
