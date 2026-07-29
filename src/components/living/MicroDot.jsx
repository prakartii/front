import { motion, useReducedMotion } from "framer-motion";

/**
 * A tiny breathing/pulsing indicator — no label, no copy, just a quiet
 * "something is live here" signal. The recurring smallest unit of
 * ambient intelligence, dropped anywhere density is needed without
 * adding a single word.
 */
export default function MicroDot({ color = "#C17A52", size = 6, ring = true, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <span className={`relative inline-block ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <span className="block rounded-full" style={{ width: size, height: size, background: color }} />
      {ring && !reduced && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: color }}
          animate={{ scale: [1, 2.8], opacity: [0.55, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </span>
  );
}
