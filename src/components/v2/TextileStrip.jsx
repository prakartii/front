import { useId } from "react";

/**
 * A hand-block-print-inspired margin — small repeating geometric units
 * (diamond outline, dot, square) in the rhythm of ajrakh and bagru
 * printing, purely abstract, never a literal plant/leaf shape. Meant to
 * run the full height of the page as a bound-journal margin. Two-tone: a
 * ground wash plus a single printed ink color.
 */
export default function TextileStrip({
  width = 20,
  ground = "#FFF8F2",
  ink = "#6F5748",
  opacity = 0.85,
  className = "",
}) {
  const id = useId();
  return (
    <svg
      width={width}
      height="100%"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern id={id} width={width} height={64} patternUnits="userSpaceOnUse">
          <rect width={width} height={64} fill={ground} />
          <path
            d={`M${width / 2} 6 L${width - 5} 16 L${width / 2} 26 L5 16 Z`}
            fill="none"
            stroke={ink}
            strokeWidth="1"
            opacity="0.55"
          />
          <circle cx={width / 2} cy="16" r="1.4" fill={ink} opacity="0.7" />
          <rect
            x={width / 2 - 3}
            y="37"
            width="6"
            height="6"
            fill="none"
            stroke={ink}
            strokeWidth="0.8"
            opacity="0.4"
            transform={`rotate(45 ${width / 2} 40)`}
          />
          <path
            d={`M4 50h${width - 8}`}
            stroke={ink}
            strokeWidth="0.6"
            strokeDasharray="1.5 3"
            opacity="0.4"
          />
        </pattern>
      </defs>
      <rect width={width} height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
