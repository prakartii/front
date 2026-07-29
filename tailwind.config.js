/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Palette v2 — ten premium pastels, each section leans on its own
        // subset (see plan doc) rather than every section sharing one wash.
        // Name mapping to the product's canonical ten: Warm Ivory → ivory,
        // Porcelain White → pearl, Champagne → champagne, Soft Clay → clay,
        // Dusty Rose → rose, Lavender Mist → lavender, Soft Sage → sage,
        // Warm Sand → sand, Muted Terracotta → terracotta, Warm Charcoal →
        // charcoal. blush/coral are earlier secondary tones, kept as-is.
        ivory: {
          DEFAULT: "#FBF8F4", // Warm Ivory — page base
        },
        pearl: {
          DEFAULT: "#F3ECE5", // Pearl — panel / alt-section background
        },
        champagne: {
          DEFAULT: "#E8D2A6",
          deep: "#D6B87E",
        },
        blush: {
          DEFAULT: "#F0D7D2",
          deep: "#E6C0B9",
        },
        lavender: {
          DEFAULT: "#E3DBF0", // "Lavender Mist"
          deep: "#CBBBE6",
        },
        sage: {
          DEFAULT: "#D8E3D2", // "Soft Sage"
          deep: "#BBD0B2",
        },
        coral: {
          DEFAULT: "#E6A489", // "Muted Coral"
          deep: "#D4886A",
        },
        rose: {
          DEFAULT: "#C98E86", // "Dusty Rose"
          deep: "#B5766D",
        },
        // "Light Terracotta" — rare accent only, never a solid CTA fill.
        // .deep is reserved for at most one emphasis moment per section.
        terracotta: {
          DEFAULT: "#C17A52",
          deep: "#9C5330",
        },
        sand: {
          DEFAULT: "#E3C8A3", // "Warm Sand"
          deep: "#D1AD7C",
        },
        clay: {
          DEFAULT: "#D9BFAE", // "Soft Clay"
          deep: "#C7A794",
        },
        // Warm Charcoal — the first invertible dark-panel background in the
        // codebase (every prior section is ivory-based). Used for the one
        // section on the page that goes full-bleed dark.
        charcoal: {
          DEFAULT: "#3A332B",
          deep: "#241F1A",
        },
        ink: {
          900: "#2B2620",
          600: "#5B5650",
          400: "#8B857C",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Manrope", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
        // Handwritten marginalia only — Sakhi's own voice, used once or
        // twice per section at most. Never a primary content font.
        script: ["Caveat", "cursive"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.16em" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.65" }],
        body: ["1.0625rem", { lineHeight: "1.7" }],
        "body-lg": ["1.3125rem", { lineHeight: "1.6" }],
        "display-sm": [
          "clamp(1.75rem, 1.2rem + 2vw, 2.75rem)",
          { lineHeight: "1.15", letterSpacing: "-0.01em" },
        ],
        "display-md": [
          "clamp(2.25rem, 1.4rem + 3.2vw, 3.75rem)",
          { lineHeight: "1.08", letterSpacing: "-0.015em" },
        ],
        "display-lg": [
          "clamp(2.75rem, 1.6rem + 4.6vw, 5.5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.02em" },
        ],
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.04)", opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.05)" },
        },
        "particle-rise": {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%, 90%": { opacity: "0.6" },
          "100%": { transform: "translateY(-120px)", opacity: "0" },
        },
        "rays-rotate": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        breathe: "breathe 6s ease-in-out infinite",
        "blob-drift": "drift 18s ease-in-out infinite",
        "particle-rise": "particle-rise 8s ease-in infinite",
        "rays-rotate": "rays-rotate 90s linear infinite",
      },
    },
  },
  plugins: [],
};
