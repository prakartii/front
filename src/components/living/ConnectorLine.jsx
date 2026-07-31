import { motion, useReducedMotion } from "framer-motion";

/**
 * A thin curved line between two points (percentages of the parent's own
 * box) that draws itself in on scroll — the visual grammar for "this is
 * connected to that": orb-to-note in Hero, artifact-to-spine in Memory,
 * node-to-node in Growth Signals. Never a straight ruled line; always a
 * single soft bezier bow, so it reads as a hand-drawn thread rather than a
 * wiring diagram.
 */
export default function ConnectorLine({
  from,
  to,
  bow = 18,
  color = "#C17A52",
  opacity = 0.45,
  width = 1.4,
  dashed = false,
  // Kantha running-stitch — short, slightly irregular dashes standing in
  // for hand-stitched thread, rather than a mechanically even dash rule.
  stitch = false,
  delay = 0,
  className = "",
}) {
  const reduced = useReducedMotion();
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.hypot(dx, dy) || 1;
  // perpendicular offset, in the same 0-100 coordinate space
  const nx = (-dy / len) * bow * 0.15;
  const ny = (dx / len) * bow * 0.15;
  const d = `M ${from.x} ${from.y} Q ${midX + nx} ${midY + ny} ${to.x} ${to.y}`;

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d={d}
        stroke={color}
        strokeWidth={stitch ? width + 0.3 : width}
        strokeLinecap="round"
        fill="none"
        vectorEffect="non-scaling-stroke"
        strokeDasharray={stitch ? "5 2.2 1.5 2.6" : dashed ? "3 4" : undefined}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: reduced ? opacity * 0.7 : opacity }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: reduced ? 0.3 : 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}
