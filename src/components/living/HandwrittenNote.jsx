import { motion } from "framer-motion";

/**
 * Sakhi's handwritten voice, promoted from a rare accent to a recurring
 * visible content element. Always a small self-contained card (rounded,
 * shadowed, gently rotated) — pinned inside the composition, never a bare
 * floating line of script text.
 */
export default function HandwrittenNote({ text, tint = "bg-butter", rotate = -3, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`inline-block rounded-2xl ${tint} px-4 py-3 shadow-[0_14px_30px_-16px_rgba(43,38,32,0.3)] ${className}`}
    >
      <p className="font-script text-xl leading-snug text-ink-900">{text}</p>
    </motion.div>
  );
}
