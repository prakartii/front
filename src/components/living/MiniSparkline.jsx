import { motion } from "framer-motion";

const PATHS = [
  "M2,20 C8,14 12,22 18,16 C24,10 28,18 34,12",
  "M2,14 C8,20 12,10 18,18 C24,8 28,16 34,10",
];

/**
 * A tiny hand-drawn squiggle — "she's processing something here." Purely
 * decorative, no axes, no numbers: a recurring glyph for ambient AI
 * attention, small enough to tuck beside a card without competing with it.
 */
export default function MiniSparkline({ color = "#C17A52", width = 40, className = "" }) {
  return (
    <svg viewBox="0 0 36 24" width={width} height={(width * 24) / 36} className={className} aria-hidden="true">
      <motion.path
        d={PATHS[0]}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.6 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
