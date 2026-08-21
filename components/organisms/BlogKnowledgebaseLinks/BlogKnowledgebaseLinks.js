import Container from '../../common/Container/Container';
import Icon from '../../atoms/Icon/Icon';
import styles from './BlogKnowledgebaseLinks.module.css';

/** Optional "Helpful resources" list of linked Knowledge Base articles (`data.knowledgebaseLinks`). */
export default function BlogKnowledgebaseLinks({ links }) {
  if (!links?.length) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h2 className={styles.heading}>Helpful resources</h2>
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.url || link.slug}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <Icon name="menu_book" size={16} color="var(--color-primary)" />
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
