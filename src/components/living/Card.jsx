import { motion } from "framer-motion";

/**
 * The workhorse of the Lumora x Yellow-Marketplace visual system. Almost
 * every piece of real content (copy, stats, quotes, product-style tiles)
 * lives inside one of these now — nothing important floats loose on the
 * page anymore. Large rounding + layered shadow read as "premium rounded
 * container"; the tint prop is any palette token so each section can keep
 * its own confident dominant pastel per card.
 */
export default function Card({
  tint = "bg-ivory",
  pad = "px-6 py-6 lg:px-8 lg:py-8",
  border = false,
  hover = false,
  grain = true,
  className = "",
  children,
  ...motionProps
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`${grain ? "paper-grain" : ""} rounded-[28px] ${tint} ${pad} card-shadow ${
        hover ? "hover:card-shadow-lift transition-shadow" : ""
      } ${border ? "border border-ink-900/8" : ""} ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
