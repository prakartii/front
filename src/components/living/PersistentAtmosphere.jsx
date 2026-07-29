import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * The one element that never resets: a fixed, viewport-spanning field of
 * slow particles rendered once at the page root, drifting independently of
 * scroll. Every section passes behind the same motes — the literal
 * mechanism behind "this never visually resets," not an illusion re-created
 * per section.
 */
export default function PersistentAtmosphere() {
  const reduced = useReducedMotion();
  const items = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        left: `${(i * 7.3) % 100}%`,
        size: 3 + ((i * 5) % 4),
        duration: 14 + ((i * 3.1) % 10),
        delay: (i * 1.7) % 12,
      })),
    []
  );

  if (reduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {items.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-terracotta/25"
          style={{ left: p.left, width: p.size, height: p.size, top: "100%" }}
          animate={{ top: ["100%", "-5%"], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }}
        />
      ))}
    </div>
  );
}
