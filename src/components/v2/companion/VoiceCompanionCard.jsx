import { motion, useReducedMotion } from "framer-motion";
import Card2 from "../Card2";
import { MicIcon, SendIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const LEFT_BARS = [3, 5, 9, 15, 22, 30, 24, 16, 10, 6];
const RIGHT_BARS = [24, 30, 22, 15, 9, 5, 3, 6, 10, 16];

function Waveform({ bars, reduced, align }) {
  return (
    <div className={`flex items-center gap-[3px] h-9 ${align === "right" ? "justify-start" : "justify-end"}`} aria-hidden="true">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          className="w-[2.5px] rounded-full bg-terracotta"
          style={{ height: h, opacity: 0.2 + (h / 30) * 0.55 }}
          animate={reduced ? {} : { scaleY: [1, 1.25, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
        />
      ))}
    </div>
  );
}

export default function VoiceCompanionCard() {
  const reduced = useReducedMotion();

  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[26px]"
      pad="p-6 lg:p-7"
      className="h-full flex flex-col"
      {...fadeUp(0.1)}
    >
      <p className="font-display2 font-semibold text-v2-text text-[19px]">Talk to Sakhi</p>
      <p className="font-body2 text-[13px] text-v2-text/55 mt-1">Ask anything about your business.</p>

      <div className="flex-1 flex flex-col items-center justify-center py-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <Waveform bars={LEFT_BARS} reduced={reduced} align="left" />
          <span
            className="inline-flex items-center justify-center w-[92px] h-[92px] rounded-full bg-v2-peach/40 text-terracotta shrink-0"
            aria-hidden="true"
          >
            <MicIcon className="w-9 h-9" />
          </span>
          <Waveform bars={RIGHT_BARS} reduced={reduced} align="right" />
        </div>
        <p className="font-body2 font-semibold text-v2-text text-[13.5px] mt-5">Tap to speak</p>
      </div>

      <div className="flex items-center gap-3 rounded-full bg-v2-cream px-5 py-3.5">
        <input
          type="text"
          placeholder="Type your question..."
          className="flex-1 min-w-0 bg-transparent font-body2 text-[13.5px] text-v2-text placeholder:text-v2-text/40 outline-none"
        />
        <button type="button" aria-label="Send" className="shrink-0 text-terracotta">
          <SendIcon className="w-[18px] h-[18px]" />
        </button>
      </div>
    </Card2>
  );
}
