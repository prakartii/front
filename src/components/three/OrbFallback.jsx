/**
 * Hard CSS-only safety valve for very small / coarse-pointer devices where a
 * WebGL canvas isn't worth the cost. Same living-presence feeling — a soft
 * pastel glow that breathes — without any canvas at all.
 */
export default function OrbFallback({ className = "", size = 44 }) {
  return (
    <div
      className={`animate-breathe rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background:
          "radial-gradient(circle at 35% 30%, #F0D7D2 0%, #E3DBF0 45%, #E8D2A6 100%)",
        boxShadow: "0 0 40px rgba(203,187,230,0.5)",
      }}
      aria-hidden="true"
    />
  );
}
