import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../lib/i18n/LanguageContext";
import AmbientOrb from "./three/AmbientOrb";
import ConnectorLine from "./living/ConnectorLine";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MicroDot from "./living/MicroDot";
import MaterialSwatch from "./living/MaterialSwatch";

// A hand-drawn-feeling current running beneath the node network — not a
// chart axis, just a sense of "a year's shape," faint and ambient.
const CHART_PATH =
  "M4,92 C40,88 55,60 82,64 C112,68 118,30 150,26 C182,22 190,55 224,46 C258,37 268,8 300,10 C330,12 340,50 366,42";

// A single point in the network — a small pulsing marker, an optional
// count-up numeral for the signals that carry one, and a short label +
// detail line. The pulsing dot is what makes this read as "alive data,"
// not a static diagram.
function SignalNode({ label, detail, value, unit, reduced, delay = 0, className }) {
  const target = parseInt(value, 10);
  const [display, setDisplay] = useState(reduced || !value ? target : 0);
  const started = useRef(false);

  function onEnter() {
    if (started.current || reduced || !value || Number.isNaN(target)) return;
    started.current = true;
    const duration = 1000;
    const t0 = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - t0) / duration);
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-15% 0px" }}
      onViewportEnter={onEnter}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div className="flex items-start gap-3">
        <span className="relative mt-1.5 shrink-0" aria-hidden="true">
          <span className="block w-2 h-2 rounded-full bg-terracotta" />
          {!reduced && (
            <motion.span
              className="absolute inset-0 rounded-full bg-terracotta"
              animate={{ scale: [1, 2.6], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay }}
            />
          )}
        </span>
        <div>
          {value && (
            <p className="font-display text-3xl lg:text-4xl text-ink-900 leading-none tabular-nums">
              {display}
              <span className="text-[0.45em] align-super ml-0.5 text-terracotta">{unit}</span>
            </p>
          )}
          <p className={`font-mono text-2xs uppercase tracking-[0.14em] text-ink-600 ${value ? "mt-2" : ""}`}>
            {label}
          </p>
          <p className="font-body text-body-sm text-ink-600 mt-1.5 max-w-[24ch]">{detail}</p>
        </div>
      </div>
    </motion.div>
  );
}

/**
 * "The AI sees patterns I cannot" — made literal. Five signals (three
 * carrying a count-up numeral, two plain) scattered as nodes and threaded
 * by curved connector lines into one loose web, an ambient hand-drawn
 * current running beneath. No axes, no bars, no dashboard chrome —
 * champagne/sand mood, warm and forward-leaning after Memory's cooler
 * reflection.
 */
export default function GrowthSignals() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const signals = t("growth.signals");
  const extra = t("growth.extraNodes");

  return (
    <section
      ref={sectionRef}
      id="growth"
      className="relative overflow-hidden bg-gradient-to-br from-champagne/45 via-ivory to-sand/50 py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#D6B87E",
          "--atmo-x": "82%",
          "--atmo-y": "18%",
          "--atmo-opacity": 0.26,
          "--atmo-size": "50%",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-label uppercase text-ink-600 mb-4"
        >
          {t("growth.eyebrow")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-lg text-ink-900 text-balance max-w-3xl"
        >
          {t("growth.heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-body-lg text-ink-600 max-w-md mt-8 lg:ml-auto lg:mt-[-2.5rem]"
        >
          {t("growth.subhead")}
        </motion.p>

        <div className="relative mt-28 lg:mt-36 lg:min-h-[640px]">
          <svg
            viewBox="0 0 370 100"
            className="hidden lg:block absolute top-[6%] left-[18%] w-[64%] h-auto pointer-events-none opacity-60"
            fill="none"
          >
            <motion.path
              d={CHART_PATH}
              stroke="#C17A52"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.5 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{ duration: reduced ? 0 : 1.8, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <Particles count={6} seedOffset={20} className="hidden lg:block absolute inset-0" />

          {/* the web — five nodes, loosely connected, never a fully-meshed
              diagram (that would read as wiring, not thought) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <ConnectorLine from={{ x: 14, y: 10 }} to={{ x: 46, y: 4 }} opacity={0.3} delay={0.1} />
            <ConnectorLine from={{ x: 46, y: 4 }} to={{ x: 76, y: 34 }} opacity={0.3} delay={0.25} />
            <ConnectorLine from={{ x: 76, y: 34 }} to={{ x: 58, y: 68 }} opacity={0.3} dashed delay={0.4} />
            <ConnectorLine from={{ x: 58, y: 68 }} to={{ x: 20, y: 58 }} opacity={0.3} delay={0.55} />
            <ConnectorLine from={{ x: 20, y: 58 }} to={{ x: 14, y: 10 }} opacity={0.25} dashed delay={0.7} />
          </div>

          <SignalNode
            {...extra[0]}
            reduced={reduced}
            delay={0}
            className="relative lg:absolute lg:top-0 lg:left-[4%] lg:w-[26%]"
          />
          <SignalNode
            {...signals[0]}
            reduced={reduced}
            delay={0.12}
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[-2%] lg:left-[38%] lg:w-[24%]"
          />
          <SignalNode
            {...signals[1]}
            reduced={reduced}
            delay={0.24}
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[28%] lg:left-[68%] lg:w-[26%]"
          />
          <SignalNode
            {...signals[2]}
            reduced={reduced}
            delay={0.36}
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[62%] lg:left-[50%] lg:w-[26%]"
          />
          <SignalNode
            {...extra[1]}
            reduced={reduced}
            delay={0.48}
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[52%] lg:left-[12%] lg:w-[24%]"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="hidden lg:block absolute top-[2%] right-[2%] pointer-events-none"
          >
            <AmbientOrb variant="presence" size={68} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="font-display italic text-ink-600 text-lg relative lg:absolute lg:top-[82%] lg:left-[70%] lg:w-[24%] mt-10 lg:mt-0"
          >
            {t("growth.chartCaption")}
          </motion.p>

          {/* bridge swatch — matches the tone Memory just handed off */}
          <MaterialSwatch
            size={26}
            tint="bg-sage"
            rotate={-8}
            seed={0.2}
            className="hidden lg:block absolute top-[-6%] left-[8%]"
          />
          <MaterialSwatch
            size={34}
            tint="bg-terracotta"
            rotate={10}
            seed={0.65}
            round
            className="hidden lg:block absolute top-[46%] right-[6%]"
          />
          <MicroDot size={6} color="#9C5330" className="hidden lg:block absolute top-[18%] left-[62%]" />
          {/* bridge swatch — hands off into Opportunity's pearl/blush */}
          <MaterialSwatch
            size={30}
            tint="bg-blush"
            rotate={-4}
            seed={0.5}
            className="hidden lg:block absolute top-[100%] left-[46%]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-sm italic text-ink-900 text-balance mt-24 lg:mt-32 max-w-2xl"
        >
          {t("growth.closing")}
        </motion.p>
      </div>

      <SectionDivider fill="#F5EDE8" />
    </section>
  );
}
