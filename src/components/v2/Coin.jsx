import { motion } from "framer-motion";

/**
 * The circular "coin" motif — badges, category marks, avatar stacks — that
 * breaks the rectilinear card grid. Meant to sit layered on a card's edge,
 * never centered inside one.
 */
export default function Coin({ tint = "bg-v2-butter", size = 56, rotate = 0, className = "", children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: rotate - 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: size, height: size, boxShadow: "0 10px 24px -10px rgba(111,87,72,0.32)" }}
      className={`v2-brass-sheen rounded-full flex items-center justify-center shrink-0 ${tint} ${className}`}
    >
      <span className="relative z-[1] flex items-center justify-center w-full h-full">{children}</span>
    </motion.div>
  );
}
