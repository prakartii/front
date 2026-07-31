/**
 * The Lumora-style trust-badge / category-pill / sale-ribbon language —
 * small rounded chips carrying an icon + short label, always sitting on
 * their own (not inside another card's padding flow) so they read as
 * little stickers on the page.
 */
export default function StickerBadge({ icon, label, tint = "bg-ivory", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ${tint} px-3.5 py-2 shadow-[0_8px_20px_-10px_rgba(43,38,32,0.3)] font-mono text-2xs uppercase tracking-[0.12em] text-ink-900 ${className}`}
    >
      {icon && (
        <span aria-hidden="true" className="text-sm leading-none">
          {icon}
        </span>
      )}
      {label}
    </span>
  );
}

/** The circular category-icon variant — Lumora's "Shop by Category" motif. */
export function StickerCircle({ icon, label, tint = "bg-blush", size = 64, className = "" }) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        className={`flex items-center justify-center rounded-full ${tint} shadow-[0_12px_28px_-14px_rgba(43,38,32,0.32)]`}
        style={{ width: size, height: size }}
      >
        <span aria-hidden="true" style={{ fontSize: size * 0.4 }}>
          {icon}
        </span>
      </div>
      {label && (
        <span className="font-mono text-2xs uppercase tracking-[0.1em] text-ink-600 text-center">
          {label}
        </span>
      )}
    </div>
  );
}
