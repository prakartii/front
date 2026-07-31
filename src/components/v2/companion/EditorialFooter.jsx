import { motion } from "framer-motion";
import PressedFlower from "../PressedFlower";
import { HeartOutlineIcon, VoiceWaveIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function EditorialFooter() {
  return (
    <motion.div
      className="relative rounded-[24px] overflow-hidden px-6 lg:px-10 py-6 lg:py-7 flex flex-col lg:flex-row items-center gap-6 lg:gap-8"
      style={{ background: "linear-gradient(120deg, #F7EEE1 0%, #F3E5D2 100%)", boxShadow: "0 20px 48px -32px rgba(111,87,72,0.28)" }}
      {...fadeUp(0.1)}
    >
      <HeartOutlineIcon className="w-9 h-9 text-terracotta/70 shrink-0" />

      <p className="font-script text-[19px] leading-snug text-ink-900 lg:mr-auto">
        I&apos;m learning with you.
        <br />
        I&apos;m growing with you.
        <br />
        I&apos;m here, always.
      </p>

      <span className="hidden lg:block w-px h-14 bg-v2-brown/15 shrink-0" aria-hidden="true" />

      <div className="flex items-center gap-3 shrink-0">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-v2-peach/45 text-terracotta shrink-0">
          <VoiceWaveIcon className="w-5 h-5" />
        </span>
        <div>
          <p className="font-body2 font-semibold text-v2-text text-[14px]">Need to talk?</p>
          <p className="font-body2 text-[12px] text-v2-text/55">I&apos;m just a voice away.</p>
        </div>
      </div>

      <a
        href="#companion"
        className="inline-flex items-center gap-2 bg-v2-text text-v2-warmwhite font-body2 font-semibold text-[13.5px] px-6 py-3.5 rounded-full shrink-0 hover:bg-v2-brown transition-colors"
      >
        Talk to Sakhi →
      </a>

      <PressedFlower
        size={64}
        petal="#E3C8A3"
        accent="#D1AD7C"
        stem="#8B6A4A"
        rotate={6}
        className="hidden xl:block absolute -right-2 -bottom-2"
      />
    </motion.div>
  );
}
