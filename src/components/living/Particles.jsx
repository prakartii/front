import { useMemo } from "react";

/**
 * A handful of soft drifting motes — pure atmosphere, no meaning attached.
 * Reuses the `.particle` / `.particle-field` primitives already defined in
 * globals.css (rise + fade keyframe). Deterministic per `seedOffset` so
 * server/client renders match and repeated sections don't drift in unison.
 */
export default function Particles({ count = 8, seedOffset = 0, className = "" }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const n = i + seedOffset;
        return {
          left: `${((n * 37) % 100)}%`,
          bottom: `${((n * 19) % 60)}%`,
          delay: `${((n * 1.3) % 8).toFixed(2)}s`,
          duration: `${(6 + ((n * 2.7) % 5)).toFixed(2)}s`,
        };
      }),
    [count, seedOffset]
  );

  return (
    <div className={`particle-field ${className}`} aria-hidden="true">
      {items.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}
