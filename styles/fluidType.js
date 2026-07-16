/**
 * Fluid clamp() font-size, scaling smoothly between a mobile floor and the desktop max
 * instead of jumping at fixed breakpoints. Used wherever a heading's size is a JS prop
 * (and therefore set as an inline style, which a stylesheet media query can't override).
 */
export function fluidFontSize(maxPx, minPx = Math.max(22, Math.round(maxPx * 0.58))) {
  const vw = (maxPx * 0.045).toFixed(2);
  return `clamp(${minPx}px, ${vw}vw + 16px, ${maxPx}px)`;
}
