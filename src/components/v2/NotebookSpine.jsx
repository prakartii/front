import { motion, useReducedMotion } from "framer-motion";

/**
 * A vertical stitched spine — the binding of a notebook, running the full
 * height of a section's margin with a few punched holes threaded by the
 * same kantha running-stitch as ConnectorLine. The section-level version
 * of "this is a handmade book," not just a small accent.
 */
export default function NotebookSpine({ color = "#6F5748", holes = 4, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <div className={`relative w-6 ${className}`} aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
        <motion.line
          x1="12"
          y1="0"
          x2="12"
          y2="100%"
          stroke={color}
          strokeWidth="1.2"
          strokeDasharray="5 2.2 1.5 2.6"
          opacity="0.3"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduced ? 0.3 : 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="relative h-full flex flex-col justify-evenly items-center py-10">
        {Array.from({ length: holes }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="w-2 h-2 rounded-full bg-v2-cream border border-v2-brown/25"
            style={{ boxShadow: "inset 0 1px 2px rgba(111,87,72,0.3)" }}
          />
        ))}
      </div>
    </div>
  );
}
