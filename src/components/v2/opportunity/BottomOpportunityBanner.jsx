import { motion } from "framer-motion";
import voiceProfileIcon from "../../../assets/v2/opportunity-engine/band-voice-profile.png";
import quoteStripImg from "../../../assets/v2/opportunity-engine/deco-quote-strip.png";
import sparkleWand from "../../../assets/v2/opportunity-engine/band-sparkle-wand.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function BottomOpportunityBanner() {
  return (
    <motion.div
      className="relative rounded-[26px] overflow-hidden px-6 lg:px-10 py-6 lg:py-7 flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
      style={{
        background: "linear-gradient(120deg, #F1E8F7 0%, #F7E7EE 100%)",
        boxShadow: "0 20px 48px -32px rgba(111,87,72,0.28)",
      }}
      {...fadeUp(0.1)}
    >
      <div className="flex items-center gap-3 shrink-0">
        <img src={voiceProfileIcon} alt="" aria-hidden="true" className="w-9 h-9 object-contain shrink-0" />
        <p className="font-body2 text-v2-text/85 text-[14px] leading-snug whitespace-nowrap">
          Sakhi finds opportunities others miss.
        </p>
      </div>

      <div className="flex-1 flex justify-center w-full">
        <img
          src={quoteStripImg}
          alt="The right time. The right nudge. The right growth."
          className="max-w-[420px] w-full h-auto object-contain"
          style={{ filter: "drop-shadow(0 10px 22px rgba(111,87,72,0.18))" }}
        />
      </div>

      <div className="text-center lg:text-right shrink-0">
        <a
          href="#opportunities"
          className="inline-flex items-center gap-2 bg-v2-text text-v2-warmwhite font-body2 font-semibold text-[14px] px-6 py-3.5 rounded-full hover:bg-v2-brown transition-colors"
        >
          <img
            src={sparkleWand}
            alt=""
            aria-hidden="true"
            className="w-4 h-4 object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          Talk to Sakhi
        </a>
        <p className="font-body2 text-[11px] text-v2-text/55 mt-2 whitespace-nowrap">
          Voice-first &middot; Your language &middot; Always learning
        </p>
      </div>
    </motion.div>
  );
}
