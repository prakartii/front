import { motion } from "framer-motion";
import { useMagnetic } from "../../lib/useMagnetic";

/**
 * Solid, confident pill CTA — SAKHI V2 never uses a ghost/outline button as
 * a primary action.
 */
export default function PillButton({ children, tone = "solid", className = "", magnetic: useMag = true, ...props }) {
  const magnetic = useMagnetic({ strength: 0.3 });
  const toneClass =
    tone === "solid"
      ? "bg-v2-text text-v2-warmwhite hover:bg-v2-brown"
      : "bg-v2-warmwhite text-v2-text border border-v2-text/12 hover:border-v2-text/25";

  return (
    <motion.a
      ref={useMag ? magnetic.ref : undefined}
      onMouseMove={useMag ? magnetic.onMouseMove : undefined}
      onMouseLeave={useMag ? magnetic.onMouseLeave : undefined}
      style={useMag ? magnetic.style : undefined}
      className={`inline-flex items-center gap-2 font-body2 font-medium px-7 py-3.5 rounded-full text-[15px] transition-colors duration-300 ${toneClass} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
