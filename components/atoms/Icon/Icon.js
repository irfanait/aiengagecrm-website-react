/**
 * Renders a Material Symbols Rounded glyph by ligature name, e.g. <Icon name="chat" />.
 * Matches the design source 1:1 since it references the same icon set/ligatures.
 */
export default function Icon({ name, size = 20, color, weight, filled = false, className = '', style = {} }) {
  return (
    <span
      className={`material-symbols-rounded ${className}`.trim()}
      style={{
        fontSize: size,
        color,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight || 400}, 'GRAD' 0, 'opsz' 24`,
        // Fixed square box + clipped overflow: before the Material Symbols font finishes
        // loading, this span's content is literally the ligature text (e.g. "keyboard_arrow_down"),
        // rendered in a fallback font that's far wider than the eventual glyph. Without a locked
        // box, that text reflows surrounding layout (e.g. the header nav) once the font swaps in.
        display: 'inline-flex',
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        lineHeight: 1,
        flexShrink: 0,
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
