/**
 * A small abstracted stamp mark — the residue of a block-print, not a
 * cultural symbol. Four dots in rotational symmetry around a center dot;
 * deliberately generic so it reads as "hand-stamped" rather than any
 * specific motif. Reused sparingly (Memory's closing mark, a corner
 * accent on the Multilingual stage) — one recurring signature, not a
 * pattern repeated across the page.
 */
export default function BlockMotif({ size = 16, color = "#6F5748", className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.1" fill={color} />
      <circle cx="12" cy="4" r="1.4" fill={color} opacity="0.75" />
      <circle cx="12" cy="20" r="1.4" fill={color} opacity="0.75" />
      <circle cx="4" cy="12" r="1.4" fill={color} opacity="0.75" />
      <circle cx="20" cy="12" r="1.4" fill={color} opacity="0.75" />
    </svg>
  );
}
