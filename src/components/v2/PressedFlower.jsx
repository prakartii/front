import { motion, useReducedMotion } from "framer-motion";

/**
 * A small pressed-botanical illustration — a single stem, three or four
 * blossoms, line-art with soft color fills rather than a photographic
 * pressed flower. Drifts gently (2-4px) on its own continuous clock, never
 * still, standing in for something genuinely tucked into the page rather
 * than stamped on it.
 */
export default function PressedFlower({
  size = 44,
  petal = "#EABFC6",
  accent = "#F6B6A8",
  stem = "#6F5748",
  rotate = -6,
  delay = 0,
  className = "",
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
        animate={reduced ? {} : { y: [0, -3, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: delay * 0.6 }}
      >
        <path
          d="M16 30c0-7-1-12-3-16"
          stroke={stem}
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M13 22c-2-1-3.4-.4-4.6.8M14.5 17.5c-1.6-1.8-3.3-1.8-4.8-.8"
          stroke={stem}
          strokeWidth="0.9"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
        <circle cx="13" cy="8" r="3.4" fill={petal} opacity="0.9" />
        <circle cx="8.5" cy="11" r="2.3" fill={accent} opacity="0.85" />
        <circle cx="17" cy="11.5" r="2" fill={accent} opacity="0.8" />
        <circle cx="13" cy="8" r="1" fill={stem} opacity="0.6" />
      </motion.svg>
    </motion.div>
  );
}
