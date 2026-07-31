import { motion } from "framer-motion";

/**
 * A small embossed seal — the "this is official/settled" mark for a
 * financial or completed moment. Rotates softly on hover rather than
 * lifting, since a wax seal doesn't float, it turns.
 */
export default function WaxSeal({ size = 34, color = "#C98E86", className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ rotate: 12 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 32% 28%, ${color}, ${color}CC 70%, ${color}99 100%)`,
        boxShadow: "0 8px 18px -8px rgba(111,87,72,0.4), inset 0 -3px 5px rgba(0,0,0,0.12), inset 0 2px 3px rgba(255,255,255,0.35)",
      }}
      className={`rounded-full flex items-center justify-center ${className}`}
    >
      <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2" fill="#FFFCF8" opacity="0.85" />
        <circle cx="12" cy="5" r="1.3" fill="#FFFCF8" opacity="0.6" />
        <circle cx="12" cy="19" r="1.3" fill="#FFFCF8" opacity="0.6" />
        <circle cx="5" cy="12" r="1.3" fill="#FFFCF8" opacity="0.6" />
        <circle cx="19" cy="12" r="1.3" fill="#FFFCF8" opacity="0.6" />
      </svg>
    </motion.div>
  );
}
