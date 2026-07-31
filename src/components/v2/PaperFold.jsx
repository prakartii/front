/**
 * A folded paper corner — the dog-ear of a real page, not a decoration.
 * A single triangle via the border trick, shaded to read as paper lifting
 * off the card. Caller positions it at a corner via className (typically
 * "absolute bottom-0 right-0").
 */
export default function PaperFold({ size = 24, shade = "rgba(111,87,72,0.22)", className = "" }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none block ${className}`}
      style={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: `0 0 ${size}px ${size}px`,
        borderColor: `transparent transparent ${shade} transparent`,
        filter: "drop-shadow(-1px -1px 1.5px rgba(111,87,72,0.18))",
      }}
    />
  );
}
