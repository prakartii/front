import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useMagnetic } from "../lib/useMagnetic";
import { splitEmphasis } from "../lib/text";
import { useLanguage } from "../lib/i18n/LanguageContext";
import AmbientOrb from "./three/AmbientOrb";
import FloatingChip from "./living/FloatingChip";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MaterialSwatch from "./living/MaterialSwatch";
import MicroDot from "./living/MicroDot";

/**
 * The brightest closing note — ivory/champagne, bookending Hero's warmth —
 * but structurally nothing like Hero: no video collage, no split panel.
 * The CTA is a large ghost-circle (echoing the reference's circular
 * "watch film" mark) rather than another centered pill button, and the
 * orb makes its most visible — still modest — appearance of the page,
 * drifting behind the headline as a quiet full-circle moment.
 */
export default function FinalCTA() {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const magnetic = useMagnetic({ strength: 0.4 });
  const headline = t("start.headline");

  return (
    <section
      id="start"
      className="paper-grain relative overflow-hidden bg-gradient-to-b from-ivory via-champagne/25 to-ivory py-32 lg:py-48 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#E8D2A6",
          "--atmo-x": "68%",
          "--atmo-y": "50%",
          "--atmo-opacity": 0.3,
          "--atmo-size": "55%",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: reduced ? 0.35 : 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="hidden lg:block absolute top-[18%] right-[18%] pointer-events-none"
      >
        <AmbientOrb variant="presence" size={220} />
      </motion.div>

      <Particles count={9} seedOffset={60} className="hidden lg:block absolute inset-0" />
      <MaterialSwatch
        size={24}
        tint="bg-sand"
        rotate={-6}
        seed={0.45}
        className="hidden lg:block absolute top-[34%] left-[58%]"
      />
      <MicroDot size={6} color="#D6B87E" className="hidden lg:block absolute top-[48%] left-[64%]" />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-label uppercase text-ink-600 mb-8"
        >
          {t("start.eyebrow")}
        </motion.p>

        <div className="relative lg:min-h-[380px]">
          <FloatingChip
            seed={0.4}
            rotate={-2}
            tint="bg-sage/40"
            className="hidden lg:block absolute top-[82%] left-[2%] w-[15%] pointer-events-none"
          >
            <p className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-600 px-3.5 py-2.5">
              {t("hero.chip1")}
            </p>
          </FloatingChip>
          <div className="max-w-2xl">
            {headline.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ duration: 0.9, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-display-lg text-ink-900 text-balance"
              >
                {splitEmphasis(line).map((seg, j) =>
                  seg.em ? (
                    <em key={j} className="text-terracotta not-italic">
                      {seg.t}
                    </em>
                  ) : (
                    <span key={j}>{seg.t}</span>
                  )
                )}
              </motion.p>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="font-body text-body-lg text-ink-600 max-w-md mt-8"
            >
              {t("start.subhead")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 lg:mt-0 lg:absolute lg:top-[8%] lg:right-[4%] flex flex-col items-center gap-3"
          >
            <motion.a
              ref={magnetic.ref}
              href="#start"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              style={magnetic.style}
              className="group relative flex items-center justify-center w-32 h-32 lg:w-40 lg:h-40 rounded-full border border-ink-900/30 hover:border-terracotta transition-colors"
            >
              <span className="font-display text-3xl text-ink-900 group-hover:text-terracotta transition-colors">
                →
              </span>
            </motion.a>
            <span className="font-mono text-2xs uppercase tracking-[0.16em] text-ink-600 text-center max-w-[10rem]">
              {t("start.ctaPrimary")}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="hidden lg:block absolute top-[68%] right-[6%] font-script text-2xl text-terracotta -rotate-3 pointer-events-none"
          >
            {t("start.annotation")}
          </motion.p>
        </div>
      </div>

      <SectionDivider fill="#F3ECE5" />
    </section>
  );
}
