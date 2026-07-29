import { useMemo, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useLanguage } from "../lib/i18n/LanguageContext";
import AmbientOrb from "./three/AmbientOrb";
import SectionDivider from "./living/SectionDivider";
import MaterialSwatch from "./living/MaterialSwatch";
import MicroDot from "./living/MicroDot";

// Three phases of the same wavy line — framer morphs smoothly between them
// since each has the same command structure, so the wave never stops
// moving even when nobody's touching the page.
const WAVE_FRAMES = [
  "M0,60 C50,40 100,80 150,60 C200,40 250,80 300,60 C350,40 400,60 400,60",
  "M0,60 C50,82 100,36 150,58 C200,84 250,38 300,62 C350,80 400,58 400,60",
  "M0,60 C50,40 100,80 150,60 C200,40 250,80 300,60 C350,40 400,60 400,60",
];

// A small voice-note blip rising up through the composition — pure
// atmosphere, no text, so it needs no translation and never competes with
// the real chat bubbles for attention.
function RisingNote({ left, delay, duration, reduced }) {
  return (
    <motion.span
      className="absolute bottom-0 flex items-end gap-[2px] h-3"
      style={{ left }}
      animate={reduced ? { opacity: 0.4 } : { y: [0, -160], opacity: [0, 0.7, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden="true"
    >
      {[4, 8, 5].map((h, i) => (
        <span key={i} className="w-[2px] rounded-full bg-lavender-deep/70" style={{ height: h }} />
      ))}
    </motion.span>
  );
}

// The big organic waveform behind the phone — continuously alive on its
// own morph cycle, and stretched taller when the cursor sits further from
// the section's vertical center, so it visibly answers pointer movement
// without needing a per-frame canvas redraw.
function OrganicWave({ amplitude, reduced }) {
  return (
    <motion.svg
      viewBox="0 0 400 120"
      className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-full h-40 lg:h-56 pointer-events-none"
      preserveAspectRatio="none"
      style={{ scaleY: amplitude }}
      aria-hidden="true"
    >
      <motion.path
        d={WAVE_FRAMES[0]}
        animate={reduced ? {} : { d: WAVE_FRAMES }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        stroke="#CBBBE6"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity={0.55}
      />
    </motion.svg>
  );
}

function Bubble({ message, index, reduced }) {
  const fromHer = message.from === "her";
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, x: fromHer ? -10 : 10, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-20% 0px" }}
      transition={{ duration: 0.6, delay: reduced ? 0 : index * 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-[82%] px-4 py-2.5 text-sm leading-snug ${
        fromHer
          ? "self-end bg-ink-900 text-ivory rounded-[14px] rounded-br-sm"
          : "self-start bg-lavender/60 text-ink-900 rounded-[14px] rounded-bl-sm"
      }`}
    >
      {message.text}
    </motion.div>
  );
}

/**
 * The one section built around a device — but staged as a floating,
 * tilted object in an editorial spread, not a centered marketing screenshot.
 * Lavender/ivory mood: cooler and quieter than Opportunity Feed's busy
 * newspaper energy, intimate rather than promotional. Messages reveal in
 * sequence on scroll, like watching a real exchange unfold rather than a
 * static product shot.
 */
export default function SakhiInAction() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const messages = t("action.messages");

  const waveAmplitude = useMotionValue(1);
  const springAmplitude = useSpring(waveAmplitude, { stiffness: 60, damping: 14, mass: 0.6 });

  function onPointerMove(e) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    const ny = (e.clientY - r.top) / r.height - 0.5; // -0.5..0.5
    waveAmplitude.set(1 + Math.abs(ny) * 1.4);
  }
  function onPointerLeave() {
    waveAmplitude.set(1);
  }

  const notes = useMemo(
    () => [
      { left: "12%", delay: 0, duration: 8 },
      { left: "32%", delay: 1.6, duration: 8.5 },
      { left: "45%", delay: 2.6, duration: 9 },
      { left: "62%", delay: 4, duration: 7 },
      { left: "78%", delay: 5.2, duration: 7.5 },
    ],
    []
  );

  return (
    <section
      ref={sectionRef}
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      id="action"
      className="relative overflow-hidden bg-gradient-to-bl from-lavender/40 via-ivory to-pearl py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#CBBBE6",
          "--atmo-x": "20%",
          "--atmo-y": "20%",
          "--atmo-opacity": 0.24,
          "--atmo-size": "48%",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-start">
        <div className="lg:pt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6 }}
            className="font-mono text-label uppercase text-ink-600 mb-4"
          >
            {t("action.eyebrow")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-md text-ink-900 text-balance max-w-xl"
          >
            {t("action.heading")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-body text-body-lg text-ink-600 max-w-sm mt-8"
          >
            {t("action.subhead")}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-sm italic text-ink-900 text-balance mt-20 lg:mt-32 max-w-md"
          >
            {t("action.closing")}
          </motion.p>

          <MaterialSwatch
            size={30}
            tint="bg-lavender"
            rotate={-8}
            seed={0.35}
            className="hidden lg:block relative mt-16 ml-4"
          />
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <OrganicWave amplitude={springAmplitude} reduced={reduced} />

          {notes.map((n, i) => (
            <RisingNote key={i} left={n.left} delay={n.delay} duration={n.duration} reduced={reduced} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 3 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-[270px] sm:w-[300px]"
          >
            {/* idle float — a separate nested element so the continuous
                loop never fights the entrance/settle transform above */}
            <motion.div
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="hard-frame bg-ivory rounded-[2.75rem] border-[6px] border-ink-900 aspect-[9/19] px-4 py-6 flex flex-col overflow-hidden">
                <div className="mx-auto w-16 h-4 rounded-full bg-ink-900/90 mb-5 shrink-0" />

                <div className="flex items-center gap-2 mb-5 shrink-0">
                  <AmbientOrb variant="mark" size={20} />
                  <span className="font-display text-sm text-ink-900">Sakhi</span>
                </div>

                <div className="flex flex-col gap-2.5 flex-1 overflow-hidden">
                  {messages.map((m, i) => (
                    <Bubble key={i} message={m} index={i} reduced={reduced} />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: reduced ? 0 : messages.length * 0.45 + 0.3, duration: 0.6 }}
                  className="flex items-center gap-2 pt-4 shrink-0"
                >
                  <motion.span
                    animate={reduced ? {} : { scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-terracotta"
                  />
                  <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
                    {t("action.listening")}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <SectionDivider fill="#3A332B" />
    </section>
  );
}
