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
        ...style,
      }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
