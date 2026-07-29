import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LANGUAGES } from "../lib/i18n/languages";
import { LOCALES } from "../lib/i18n/locales";
import { useLanguage } from "../lib/i18n/LanguageContext";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MaterialSwatch from "./living/MaterialSwatch";
import MicroDot from "./living/MicroDot";

const ADVANCE_MS = 2800;

/**
 * The multilingual dial in the Navbar is a utility; this is the showcase —
 * one sentence, cycling through all ten scripts on its own clock, so the
 * claim ("present in her language from the first word") is something you
 * watch happen rather than a bullet point. Auto-advances, but a click on
 * any language name jumps straight there and resets the clock.
 */
export default function MultilingualExperience() {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % LANGUAGES.length);
    }, ADVANCE_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  function jumpTo(i) {
    setIndex(i);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((cur) => (cur + 1) % LANGUAGES.length);
    }, ADVANCE_MS);
  }

  const current = LANGUAGES[index];
  const line = LOCALES[current.code]?.multilingual?.line ?? LOCALES.en.multilingual.line;

  return (
    <section
      id="multilingual"
      className="relative overflow-hidden bg-gradient-to-t from-sand/45 via-ivory to-champagne/35 py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#D6B87E",
          "--atmo-x": "50%",
          "--atmo-y": "8%",
          "--atmo-opacity": 0.28,
          "--atmo-size": "60%",
        }}
      />

      <Particles count={11} seedOffset={50} className="hidden lg:block absolute inset-0" />
      <MaterialSwatch
        size={26}
        tint="bg-sand"
        rotate={-10}
        seed={0.4}
        className="hidden lg:block absolute top-[14%] left-[10%]"
      />
      <MaterialSwatch
        size={22}
        tint="bg-champagne"
        rotate={12}
        seed={0.6}
        round
        className="hidden lg:block absolute top-[68%] right-[12%]"
      />
      <MicroDot size={6} color="#C17A52" className="hidden lg:block absolute top-[40%] right-[20%]" />

      <div className="relative max-w-[1400px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-label uppercase text-ink-600 mb-4"
        >
          {t("multilingual.eyebrow")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-md text-ink-900 text-balance max-w-2xl mx-auto"
        >
          {t("multilingual.heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-body-lg text-ink-600 max-w-md mx-auto mt-6"
        >
          {t("multilingual.subhead")}
        </motion.p>

        <div className="relative mt-20 lg:mt-28 min-h-[9rem] lg:min-h-[11rem] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.code}
              dir={current.dir}
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, y: -16, filter: "blur(10px)" }}
              transition={{ duration: reduced ? 0.2 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-display-md text-terracotta-deep text-balance max-w-3xl px-4"
            >
              {line}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 mt-16 max-w-2xl mx-auto">
          {LANGUAGES.map((l, i) => (
            <button
              key={l.code}
              type="button"
              onClick={() => jumpTo(i)}
              dir={l.dir}
              aria-current={i === index}
              className={`font-body text-sm transition-colors ${
                i === index ? "text-ink-900 font-medium" : "text-ink-400 hover:text-ink-600"
              }`}
            >
              {l.native}
            </button>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-sm italic text-ink-900 mt-24 lg:mt-32"
        >
          {t("multilingual.closing")}
        </motion.p>
      </div>

      <SectionDivider fill="#FBF3E4" />
    </section>
  );
}
