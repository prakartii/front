import { motion, useReducedMotion } from "framer-motion";

/**
 * The recurring "she's aware of this" artifact — a small paper-textured
 * object that never sits still: it settles in on scroll, then breathes on
 * its own continuous clock (phase offset by `seed` so a cluster of chips
 * never moves in lockstep), and can additionally be pushed by a shared
 * cursor-parallax spring passed in from the section (`parallax`). This is
 * the single primitive reused across Hero/Memory/Stories for every
 * floating note, receipt, reminder, and insight tag — never a plain card.
 */
export default function FloatingChip({
  children,
  rotate = 0,
  tint = "bg-ivory/90",
  hard = false,
  seed = 0.5,
  parallax,
  delay = 0,
  from = "below",
  className = "",
}) {
  const reduced = useReducedMotion();
  const floatDuration = 5 + seed * 3.5;
  const floatDelay = seed * 2.2;

  const enter =
    from === "below"
      ? { y: 26 }
      : from === "above"
      ? { y: -22 }
      : from === "left"
      ? { x: -22 }
      : { x: 22 };

  return (
    <motion.div
      style={parallax ? { x: parallax.x, y: parallax.y } : undefined}
      className={className}
    >
      <motion.div
        initial={{ opacity: 0, ...enter, rotate: rotate - 3, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, x: 0, rotate, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={reduced ? {} : { y: [0, -7, 0] }}
          transition={{ duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
          className={`paper-grain rounded-sm ${tint} ${
            hard ? "hard-frame" : "border border-ink-900/10 shadow-[0_16px_38px_-18px_rgba(43,38,32,0.32)]"
          }`}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
