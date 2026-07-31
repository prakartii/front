const VARIANTS = {
  // A pressed flower — five simple petals, line art, slightly uneven by
  // hand rather than geometrically perfect.
  flower: (c) => (
    <>
      <circle cx="12" cy="12" r="2.3" fill={c} />
      <path
        d="M12 9.2c-1.6-2-1.2-4.6.4-5.6M12 9.2c1.8-1.6 4.4-1 5.3.8M14.5 11.4c2.4-.8 4.6.4 5.3 2.2M14.5 12.9c1.4 2.2.4 4.6-1.4 5.6M9.5 12.9c-1.4 2.4-.4 5 1.6 6M9.5 11.4c-2.5-.6-4.6.8-5.2 2.8"
        stroke={c}
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
    </>
  ),
  // An embroidery thread spool with a loose trailing curl.
  thread: (c) => (
    <>
      <rect x="6" y="5" width="12" height="14" rx="2.5" stroke={c} strokeWidth="1.2" fill="none" />
      <path d="M6 9.5h12M6 14.5h12" stroke={c} strokeWidth="1" opacity="0.6" />
      <path d="M16 19c2 1.6 3 3.4 2.2 5.1" stroke={c} strokeWidth="1.1" fill="none" strokeLinecap="round" />
    </>
  ),
  // A simple thrown-clay pot silhouette — asymmetric by hand.
  pottery: (c) => (
    <path
      d="M9.5 4.5h5l.6 3.2c1.8 1 2.9 3 2.6 5.4-.4 3.4-1.4 7.4-1.4 9.4 0 1-1 1.5-3.3 1.5s-3.3-.5-3.3-1.5c0-2-1-6-1.4-9.4-.3-2.4.8-4.4 2.6-5.4z"
      fill={c}
      opacity="0.9"
    />
  ),
  // A small wooden block-print stamp, seen from above: a handle block
  // with a carved dot-motif face — the tool, not the printed pattern.
  stamp: (c) => (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke={c} strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="12" r="1.6" fill={c} />
      <circle cx="8" cy="8" r="0.9" fill={c} opacity="0.7" />
      <circle cx="16" cy="8" r="0.9" fill={c} opacity="0.7" />
      <circle cx="8" cy="16" r="0.9" fill={c} opacity="0.7" />
      <circle cx="16" cy="16" r="0.9" fill={c} opacity="0.7" />
    </>
  ),
  // A paperclip, for pinned notes.
  clip: (c) => (
    <path
      d="M7 12.5V7a4 4 0 0 1 8 0v10a2.5 2.5 0 0 1-5 0V8.5"
      stroke={c}
      strokeWidth="1.4"
      fill="none"
      strokeLinecap="round"
    />
  ),
};

/**
 * Small hand-drawn-style illustrations of the physical objects around an
 * artisan's workspace — pressed flower, thread spool, clay pot, block
 * stamp, paperclip. Meant to sit directly in the composition (not tucked
 * away as a micro-detail), so default size is deliberately larger than
 * BlockMotif's stamp mark.
 */
export default function CraftIcon({ variant = "flower", size = 32, color = "#6F5748", className = "" }) {
  const render = VARIANTS[variant] || VARIANTS.flower;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      {render(color)}
    </svg>
  );
}
