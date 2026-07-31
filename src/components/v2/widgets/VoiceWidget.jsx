import { motion, useReducedMotion } from "framer-motion";
import Card2 from "../Card2";
import Coin from "../Coin";

const HEIGHTS = [7, 13, 20, 11, 17, 9, 14, 8];

function Waveform({ reduced }) {
  return (
    <div className="flex items-end gap-[3px] h-6" aria-hidden="true">
      {HEIGHTS.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-v2-brown/70"
          style={{ height: h }}
          animate={reduced ? {} : { scaleY: [1, 1.7, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}

/**
 * The Voice AI widget — a lavender card with a live waveform and the most
 * recent line Sakhi caught, standing in for "always listening."
 */
export default function VoiceWidget({ quote, className = "" }) {
  const reduced = useReducedMotion();
  return (
    <Card2 tint="bg-v2-lavender" radius="rounded-[26px]" pad="p-5" lift className={`relative w-[240px] ${className}`}>
      <Coin tint="bg-v2-warmwhite" size={40} rotate={-6} className="absolute -top-4 -left-4 text-base">
        🎙️
      </Coin>
      <div className="flex items-center justify-between gap-3">
        <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown">
          Voice
        </span>
        <Waveform reduced={reduced} />
      </div>
      <p className="font-body2 text-sm text-v2-text/85 mt-3 leading-snug">"{quote}"</p>
      <span className="inline-flex items-center gap-1.5 mt-3 font-body2 text-[11px] text-v2-brown/80">
        <span className="w-1.5 h-1.5 rounded-full bg-v2-brown/70 animate-pulse" />
        Listening
      </span>
    </Card2>
  );
}
