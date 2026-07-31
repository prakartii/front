import { motion } from "framer-motion";

const SHADOW_REST = "0 24px 60px -28px rgba(111,87,72,0.35)";
const SHADOW_LIFT = "0 34px 72px -24px rgba(111,87,72,0.4)";

/**
 * SAKHI V2's atomic unit — every piece of real content lives inside one of
 * these. Large, consistent radius + a warm-brown-tinted shadow (never
 * ink-black) so cards read as premium product surfaces, not paper.
 */
export default function Card2({
  tint = "bg-v2-warmwhite",
  radius = "rounded-[28px]",
  pad = "p-6",
  lift = false,
  className = "",
  children,
  ...motionProps
}) {
  return (
    <motion.div
      style={{ boxShadow: SHADOW_REST }}
      whileHover={lift ? { y: -6, boxShadow: SHADOW_LIFT } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`${radius} ${tint} ${pad} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
