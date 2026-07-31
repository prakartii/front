import Card2 from "../Card2";
import Coin from "../Coin";

/**
 * The Business Memory widget — a blush card holding a compact, scannable
 * list of remembered moments. Distinct rhythm from VoiceWidget: rows, not a
 * single focal stat.
 */
export default function MemoryWidget({ entries, className = "" }) {
  return (
    <Card2 tint="bg-v2-blush" radius="rounded-[26px]" pad="p-5" lift className={`relative w-[260px] ${className}`}>
      <Coin tint="bg-v2-warmwhite" size={40} rotate={8} className="absolute -top-4 -right-4 text-base">
        🧠
      </Coin>
      <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown">
        Memory
      </span>
      <ul className="mt-3 space-y-2.5">
        {entries.map((entry, i) => (
          <li key={i} className="flex items-start gap-2.5">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-v2-brown/60 shrink-0" />
            <div>
              <p className="font-body2 text-[11px] uppercase tracking-[0.08em] text-v2-brown/70">
                {entry.label}
              </p>
              <p className="font-body2 text-sm text-v2-text/85 leading-snug">{entry.sakhi}</p>
            </div>
          </li>
        ))}
      </ul>
    </Card2>
  );
}
