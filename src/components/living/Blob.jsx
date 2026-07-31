import { motion, useReducedMotion } from "framer-motion";

const SHAPE_A = "42% 58% 65% 35% / 45% 40% 60% 55%";
const SHAPE_B = "58% 42% 35% 65% / 55% 60% 40% 45%";

/**
 * A soft organic background shape — pure atmosphere, not content, so it's
 * fine for this one to sit loose behind a card rather than inside a
 * container. Morphs slowly between two asymmetric border-radius states so
 * it never reads as a static decorative circle.
 */
export default function Blob({ tint = "bg-blush", size = 320, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      aria-hidden="true"
      className={`absolute pointer-events-none ${tint} ${className}`}
      style={{ width: size, height: size, borderRadius: SHAPE_A }}
      animate={reduced ? {} : { borderRadius: [SHAPE_A, SHAPE_B, SHAPE_A] }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
