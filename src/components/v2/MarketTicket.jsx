import { motion } from "framer-motion";

/**
 * A price/market ticket — a mandi tag or export label, not a UI pill: a
 * rectangle with one torn/notched edge and a punched string-hole, the
 * kind of tag tied onto a bale or crate. Distinct silhouette from
 * StoryChip so the scattered workspace reads as different real objects,
 * not one component repeated.
 */
export default function MarketTicket({ label, value, tint = "bg-v2-warmwhite", rotate = -4, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotate: rotate - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        boxShadow: "0 12px 26px -14px rgba(111,87,72,0.32)",
        clipPath: "polygon(10% 0, 100% 0, 100% 100%, 10% 100%, 0 50%)",
      }}
      className={`${tint} pl-4 pr-3 py-2.5 ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-0.5">
        <span className="w-1 h-1 rounded-full bg-v2-brown/50" />
        <span className="font-body2 font-semibold text-[10px] uppercase tracking-[0.08em] text-v2-brown/75">
          {label}
        </span>
      </div>
      {value && <p className="font-display2 text-base text-v2-text">{value}</p>}
    </motion.div>
  );
}
