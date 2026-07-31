import { motion } from "framer-motion";

/**
 * A small postage/export stamp — a perforated-edge square, the kind
 * stuck on a parcel bound for another city. Achieves the perforation with
 * a repeating radial-gradient border rather than an SVG, so it stays
 * crisp at any size.
 */
export default function PostageStamp({ icon, label, tint = "bg-v2-powder", rotate = 6, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate - 8 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        boxShadow: "0 10px 22px -12px rgba(111,87,72,0.32)",
        backgroundImage:
          "radial-gradient(circle, #FFF8F2 2.5px, transparent 2.6px)",
        backgroundSize: "9px 9px",
        backgroundPosition: "-4.5px -4.5px",
        backgroundRepeat: "round",
      }}
      className={`${tint} p-2.5 flex flex-col items-center gap-1 w-[74px] ${className}`}
    >
      <span className="text-base leading-none" aria-hidden="true">
        {icon}
      </span>
      <span className="font-body2 text-[9px] uppercase tracking-[0.06em] text-v2-brown/75 text-center leading-tight">
        {label}
      </span>
    </motion.div>
  );
}
