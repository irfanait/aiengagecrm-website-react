// Shared formatting helpers for /blog pages — pure functions, safe on client or server.

/** "2026-08-06T..." -> "Aug 6, 2026", matching the blog design's date style. */
export function formatBlogDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Author display name -> up to 2 initials for the avatar circle. Falls back to "A" (AiEngage). */
export function getInitials(name) {
  const parts = (name || '').trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'A';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Warm palette matching the design's avatar background colors.
const AVATAR_COLORS = ['#FF5F38', '#C87A3F', '#B06A4A', '#B4713C', '#FF5F38', '#E64A24'];

/** Deterministic color from a name/slug/seed so the same author always gets the same avatar color. */
export function getAvatarColor(seed) {
  const str = seed || 'AiEngage';
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
  return AVATAR_COLORS[hash % AVATAR_COLORS.length];
}

/** Approx reading time from rendered HTML content, ~200 wpm, minimum 1 minute. */
export function estimateReadTime(html) {
  if (!html) return null;
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (!words) return null;
  return Math.max(1, Math.round(words / 200));
}

// Candidate field names the CMS might use for a precomputed read time — tried in order so this
// picks the value up automatically whichever one the API ends up returning.
const READ_TIME_KEYS = ['readTime', 'readingTime', 'readTimeMinutes', 'minutesToRead', 'readMinutes'];

/** Minutes to read a post: prefers a value the API already computed, falls back to estimating
 * from `content` (post-detail only — the list/card endpoints don't return full content). */
export function getReadTime(post) {
  if (!post) return null;
  for (const key of READ_TIME_KEYS) {
    const value = post[key];
    if (typeof value === 'number' && value > 0) return Math.round(value);
    if (typeof value === 'string' && value.trim()) {
      const parsed = parseInt(value, 10);
      if (!Number.isNaN(parsed) && parsed > 0) return parsed;
    }
  }
  return estimateReadTime(post.content);
}

/** Strip HTML tags for a plain-text excerpt fallback. */
export function stripHtml(html) {
  return (html || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Normalizes `post.author` into `{ name, bio, avatarUrl, links }` — the API now returns a full
 * author profile object, but this also accepts the older plain-string shape defensively. */
export function getAuthor(post) {
  const raw = post?.author;
  if (typeof raw === 'string') {
    return { name: raw || 'AiEngage Team', bio: '', avatarUrl: '', links: [] };
  }
  return {
    name: raw?.name || 'AiEngage Team',
    bio: raw?.bio || '',
    avatarUrl: raw?.avatarUrl || '',
    links: Array.isArray(raw?.links) ? raw.links : [],
  };
}
