/**
 * Hand-drawn line-art portrait — a woman in profile, hair in a low bun,
 * shawl draped over her shoulder, holding a warm mug with steam rising.
 * No asset was supplied for this illustration, so it's built as SVG in the
 * same single-stroke terracotta line-art language as CraftIcon/PressedFlower
 * rather than a stock/generic icon.
 */
export default function WomanIllustration({ width = 170, height = 210, stroke = "#6F5748", className = "" }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 240"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* soft hair/head mass, sits behind everything — a generous fill,   */}
      {/* not meant to align precisely with the crisp profile line above it */}
      <ellipse cx="108" cy="66" rx="42" ry="42" fill={stroke} opacity="0.08" />

      {/* shawl / shoulders, filled */}
      <path
        d="M60,140 Q100,122 140,140 Q170,154 176,188 L176,236 L34,236 L34,192 Q38,156 60,140 Z"
        fill={stroke}
        opacity="0.07"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M76,156 Q82,182 76,208 M120,150 Q128,178 122,206"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.4"
        strokeLinecap="round"
      />

      {/* face profile — one continuous line, forehead to chin */}
      <path
        d="M100,40
           Q88,44 78,52
           Q70,60 66,70
           Q68,76 74,80
           Q70,84 72,87
           Q76,93 82,97
           Q88,101 92,103"
        stroke={stroke}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* hair sweep from crown back to the bun */}
      <path d="M100,40 Q126,38 134,62" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M104,46 Q118,47 126,58" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* bun */}
      <circle cx="135" cy="76" r="15" fill={stroke} opacity="0.14" stroke={stroke} strokeWidth="1.4" />

      {/* eyelash + brow */}
      <path d="M79,69 Q84,72 88,70" stroke={stroke} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M77,61 Q82,58 87,60" stroke={stroke} strokeWidth="1" strokeLinecap="round" opacity="0.7" />

      {/* neck into shoulder */}
      <path d="M92,103 Q90,114 86,122" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" />

      {/* shoulder / shawl outer line */}
      <path
        d="M60,140 Q100,122 140,140 Q170,154 176,188"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* forearm to mug */}
      <path d="M104,140 Q96,154 96,168 Q96,176 103,179" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M138,152 Q146,162 144,174 Q142,182 134,184" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />

      {/* mug */}
      <path d="M100,168 h30 v14 a15,15 0 0 1 -30,0 Z" stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M130,171 c8,0 8,12 0,12" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />

      {/* steam */}
      <path
        d="M108,162 Q104,156 109,151 M117,160 Q113,154 118,149"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.5"
        strokeLinecap="round"
      />

      {/* leaf sprig beside her */}
      <path d="M24,112 Q28,142 22,170" stroke={stroke} strokeWidth="1.1" opacity="0.55" strokeLinecap="round" />
      <path
        d="M24,124 Q16,120 10,126 M25,138 Q33,133 39,139 M23,152 Q15,149 9,155"
        stroke={stroke}
        strokeWidth="1"
        opacity="0.45"
        strokeLinecap="round"
      />
    </svg>
  );
}
