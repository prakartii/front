import { motion } from "framer-motion";

/**
 * A small herbarium-label tag — the vocabulary of a specimen card or a
 * luggage tag, not a UI badge: a punched hole, a loop of twine, a botanical
 * micro-sketch, a handwritten-feeling label. Tilts a little further on
 * hover, like a real tag being nudged.
 */
export default function VintageTag({ label, tint = "bg-v2-warmwhite", rotate = -6, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, rotate: rotate - 6 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      whileHover={{ rotate: rotate + 5 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: "0 12px 26px -14px rgba(111,87,72,0.35)" }}
      className={`w-fit ${tint} ${className || "relative"}`}
    >
      <svg width="18" height="10" viewBox="0 0 18 10" className="absolute -top-[9px] left-1/2 -translate-x-1/2" aria-hidden="true">
        <path d="M2 9C2 3 6 1 9 1s7 2 7 8" stroke="#6F5748" strokeWidth="1" fill="none" strokeLinecap="round" />
      </svg>
      <div
        className="px-3.5 py-3 flex flex-col items-center gap-1.5"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 78%, 50% 100%, 0 78%)" }}
      >
        <span className="w-1 h-1 rounded-full bg-v2-brown/50 mt-0.5" aria-hidden="true" />
        <svg width="20" height="18" viewBox="0 0 20 18" aria-hidden="true">
          <path d="M10 17c0-5-1-8-3-11" stroke="#6F5748" strokeWidth="0.9" fill="none" strokeLinecap="round" />
          <circle cx="8" cy="5" r="2" fill="#EABFC6" opacity="0.85" />
          <circle cx="11" cy="7" r="1.4" fill="#F6B6A8" opacity="0.8" />
        </svg>
        {label && (
          <span className="font-script text-sm text-v2-text/80 leading-none whitespace-nowrap">{label}</span>
        )}
      </div>
    </motion.div>
  );
}
