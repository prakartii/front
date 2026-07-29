/**
 * An organic wave/tear painted in the NEXT section's color across the
 * bottom of THIS one — the seam melts instead of cutting. Sits fully
 * inside the current section (no overflow-bleed needed, so it's safe
 * under sections that already clip for grain/atmosphere).
 */
export default function SectionDivider({ fill = "#FBF8F4", height = "h-20 md:h-28", className = "" }) {
  return (
    <svg
      className={`absolute left-0 right-0 bottom-0 w-full ${height} pointer-events-none ${className}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,55 C110,90 200,20 330,45 C460,70 540,15 670,40 C800,65 880,25 1010,48 C1140,71 1240,30 1440,58 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
