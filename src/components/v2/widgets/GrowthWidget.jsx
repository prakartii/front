import Card2 from "../Card2";
import Coin from "../Coin";
import MiniSparkline from "../../living/MiniSparkline";

/**
 * The Growth widget — a butter-yellow card built around one big stat, the
 * opposite rhythm of MemoryWidget's list. The sparkline stands in for
 * "she's already tracking the trend."
 */
export default function GrowthWidget({ signal, className = "" }) {
  return (
    <Card2 tint="bg-v2-butter" radius="rounded-[26px]" pad="p-5" lift className={`relative w-[190px] ${className}`}>
      <Coin tint="bg-v2-warmwhite" size={36} rotate={-10} className="absolute -top-3 -right-3 text-sm">
        📈
      </Coin>
      <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown">
        Growth
      </span>
      <p className="font-display2 text-4xl text-v2-text mt-2 leading-none">
        {signal.value}
        <span className="text-lg align-top ml-0.5">{signal.unit}</span>
      </p>
      <p className="font-body2 text-sm text-v2-text/80 mt-1">{signal.label}</p>
      <MiniSparkline color="#6F5748" width={56} className="mt-3" />
    </Card2>
  );
}
