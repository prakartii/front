import Card2 from "../Card2";
import Coin from "../Coin";

const TILES = [
  { tint: "bg-v2-peach", icon: "🧵", label: "Block Print" },
  { tint: "bg-v2-sage", icon: "🏺", label: "Pottery" },
  { tint: "bg-v2-powder", icon: "🪢", label: "Handloom" },
  { tint: "bg-v2-blush", icon: "🪡", label: "Chikankari" },
];

/**
 * The Marketplace preview widget — a 2x2 tile grid inside a powder-blue
 * card, the densest composition in the collage, standing in for "a whole
 * marketplace, previewed in miniature."
 */
export default function MarketplaceWidget({ className = "" }) {
  return (
    <Card2 tint="bg-v2-powder" radius="rounded-[26px]" pad="p-5" lift className={`relative w-[220px] ${className}`}>
      <Coin tint="bg-v2-warmwhite" size={40} rotate={10} className="absolute -top-4 -left-4 text-base">
        🛍️
      </Coin>
      <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown">
        Categories
      </span>
      <div className="grid grid-cols-2 gap-2 mt-3">
        {TILES.map((tile, i) => (
          <div key={i} className={`${tile.tint} rounded-2xl p-3 flex flex-col items-center gap-1`}>
            <span className="text-lg" aria-hidden="true">
              {tile.icon}
            </span>
            <span className="font-body2 text-[10px] text-v2-text/75">{tile.label}</span>
          </div>
        ))}
      </div>
    </Card2>
  );
}
