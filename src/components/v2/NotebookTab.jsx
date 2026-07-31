import { motion } from "framer-motion";

/**
 * A small index tab, sticking out from a card's side edge — the divider
 * tab of a real notebook or filing card, labeling what's inside. Caller
 * positions it via className (typically "absolute top-6 -right-2 -z-10"
 * so it reads as tucked behind the card it labels).
 */
export default function NotebookTab({ label, tint = "bg-v2-butter", delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: "0 6px 14px -8px rgba(111,87,72,0.3)" }}
      className={`${tint} rounded-r-md px-2.5 py-1.5 ${className}`}
    >
      <span className="font-body2 font-semibold text-[10px] uppercase tracking-[0.1em] text-v2-brown/80 [writing-mode:vertical-rl]">
        {label}
      </span>
    </motion.div>
  );
}
