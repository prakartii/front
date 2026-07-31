import Card2 from "./Card2";

const DEFAULT_FRAGMENTS = [
  { tint: "bg-v2-rose/55", radius: "v2-radius-b", w: 250, h: 180, top: "0%", left: "0%", rotate: -9 },
  { tint: "bg-v2-peach/45", radius: "v2-radius-c", w: 190, h: 140, top: "38%", left: "-6%", rotate: 7 },
  { tint: "bg-v2-lavender/40", radius: "v2-radius-a", w: 160, h: 210, top: "-4%", left: "58%", rotate: 4 },
];

/**
 * A small stack of handmade-paper fragments — the "layered paper beneath
 * product cards" gesture, replacing a single flat ghost card with a
 * genuine collage of 2-3 torn/rotated sheets in different pastel tones.
 * Purely atmospheric: sits at z-0, behind whatever the caller layers on
 * top of it.
 */
export default function PaperCollage({ fragments = DEFAULT_FRAGMENTS, className = "" }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      {fragments.map((f, i) => (
        <Card2
          key={i}
          tint={f.tint}
          radius={f.radius}
          pad="p-0"
          className={`v2-fiber-grain absolute`}
          style={{
            width: f.w,
            height: f.h,
            top: f.top,
            left: f.left,
            transform: `rotate(${f.rotate}deg)`,
            boxShadow: "0 24px 60px -28px rgba(111,87,72,0.35)",
          }}
        />
      ))}
    </div>
  );
}
