import { motion, useReducedMotion } from "framer-motion";

/**
 * A kantha running-stitch seam, full width — the literal gesture of two
 * panels sewn together, standing in for a hard section boundary. Draws
 * itself in on scroll, like ConnectorLine, but horizontal and full-bleed.
 */
export default function StitchSeam({ color = "#6F5748", opacity = 0.28, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <div className={`relative w-full h-4 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 16" preserveAspectRatio="none">
        <motion.path
          d="M0,8 Q250,2 500,8 T1000,8"
          stroke={color}
          strokeWidth="1.3"
          strokeLinecap="round"
          fill="none"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="5 2.2 1.5 2.6"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: reduced ? opacity * 0.7 : opacity }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduced ? 0.3 : 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}
