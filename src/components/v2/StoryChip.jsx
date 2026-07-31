import { motion } from "framer-motion";

/**
 * A small floating business-moment card — the vocabulary for "Sakhi's
 * world is full of real Indian small-business signals," not a generic
 * status pill. Two sizes: `sm` for a single-line badge (scheme
 * eligibility, marketplace readiness), `md` when there's a value line
 * worth calling out (a payment, a sales figure).
 */
export default function StoryChip({
  icon,
  label,
  value,
  tint = "bg-v2-warmwhite",
  size = "sm",
  rotate = 0,
  delay = 0,
  className = "",
}) {
  const isMd = size === "md";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: rotate - 4 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: "0 14px 30px -14px rgba(111,87,72,0.32)" }}
      className={`inline-flex items-center gap-2.5 ${tint} ${
        isMd ? "rounded-2xl px-4 py-3" : "rounded-full px-3.5 py-2"
      } ${className}`}
    >
      {icon && (
        <span className="text-base leading-none shrink-0" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="min-w-0">
        <span
          className={`block font-body2 font-semibold text-v2-text/85 whitespace-nowrap ${
            isMd ? "text-[11px] uppercase tracking-[0.06em]" : "text-xs"
          }`}
        >
          {label}
        </span>
        {value && <span className="block font-display2 text-lg text-v2-text mt-0.5">{value}</span>}
      </span>
    </motion.div>
  );
}
