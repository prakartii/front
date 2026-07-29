import { motion, useReducedMotion } from "framer-motion";

/**
 * A small colored paper/clay rectangle — pure material texture, no text.
 * The same swatch language Hero introduced, extracted so every section can
 * scatter a few without re-inventing them. Idle float, seeded so a cluster
 * never moves in unison.
 */
export default function MaterialSwatch({
  size = 56,
  tint = "bg-sage",
  rotate = -6,
  seed = 0.5,
  round = false,
  className = "",
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 4.5 + seed * 3, repeat: Infinity, ease: "easeInOut", delay: seed * 2 }}
        className={`paper-grain ${tint} ${round ? "rounded-full" : ""} shadow-[0_14px_32px_-16px_rgba(43,38,32,0.32)]`}
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
}
