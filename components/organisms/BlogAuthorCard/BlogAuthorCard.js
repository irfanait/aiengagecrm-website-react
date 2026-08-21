import Avatar from '../../atoms/Avatar/Avatar';
import Icon from '../../atoms/Icon/Icon';
import SocialIcon from '../../atoms/SocialIcon/SocialIcon';
import styles from './BlogAuthorCard.module.css';

const KNOWN_HOSTS = {
  'facebook.com': 'facebook',
  'linkedin.com': 'linkedin',
  'instagram.com': 'instagram',
  'youtube.com': 'youtube',
};

function detectPlatform(url) {
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    if (KNOWN_HOSTS[host]) return KNOWN_HOSTS[host];
    if (host === 'twitter.com' || host === 'x.com') return 'x';
    return null;
  } catch {
    return null;
  }
}

/** Author card below the article — avatar, name, bio and any social links, all from the API's
 * `author` profile object ({ name, bio, avatarUrl, links }). */
export default function BlogAuthorCard({ author }) {
  const links = (author?.links || []).map((link) => (typeof link === 'string' ? { url: link } : link)).filter((l) => l.url);

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <Avatar name={author.name} src={author.avatarUrl} size={64} />
        <div className={styles.body}>
          <div className={styles.eyebrow}>Written by</div>
          <div className={styles.name}>{author.name}</div>
          {author.bio && <p className={styles.bio}>{author.bio}</p>}

          {links.length > 0 && (
            <div className={styles.links}>
              {links.map((link) => {
                const platform = detectPlatform(link.url);
                return (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    {platform === 'x' ? (
                      <span className={styles.xGlyph}>X</span>
                    ) : platform ? (
                      <SocialIcon name={platform} size={15} />
                    ) : (
                      <Icon name="link" size={15} />
                    )}
                    {link.label || platform || 'Link'}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
