import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useLanguage } from "../lib/i18n/LanguageContext";
import ConnectorLine from "./living/ConnectorLine";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MaterialSwatch from "./living/MaterialSwatch";
import MicroDot from "./living/MicroDot";

// Three different re-crops of the same pottery footage, standing in for
// three different founders — different aspect, different object-position,
// different scale, so it never reads as "the same photo three times."
const CROPS = [
  { aspect: "aspect-[3/4]", position: "object-[20%_30%]", scale: 1.15, parallax: 0.5 },
  { aspect: "aspect-[4/5]", position: "object-[70%_40%]", scale: 1, parallax: 1 },
  { aspect: "aspect-square", position: "object-[50%_65%]", scale: 1.3, parallax: 1.5 },
];

/**
 * The dark inversion — the one full-bleed charcoal panel on the page,
 * directly honoring the reference's dark editorial-row block. Hard-edged
 * video re-crops stand in for founder portraits (contrasting Hero's organic
 * blob), each paired with a pull-quote. Signature interaction: the whole
 * row drifts horizontally with the cursor at different depths per item —
 * a "flip-through" feel distinct from every other section's motion.
 */
export default function SuccessStories() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const quotes = t("stories.quotes");

  const driftX = useMotionValue(0);
  const springDriftX = useSpring(driftX, { stiffness: 40, damping: 20, mass: 0.7 });
  // Fixed at three (CROPS.length), so these stay top-level hook calls
  // rather than being created inside the .map() below.
  const drift0 = useTransform(springDriftX, (v) => v * CROPS[0].parallax);
  const drift1 = useTransform(springDriftX, (v) => v * CROPS[1].parallax);
  const drift2 = useTransform(springDriftX, (v) => v * CROPS[2].parallax);
  const drifts = [drift0, drift1, drift2];

  function onPointerMove(e) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    driftX.set(((e.clientX - r.left) / r.width - 0.5) * 40);
  }
  function onPointerLeave() {
    driftX.set(0);
  }

  return (
    <section
      ref={sectionRef}
      id="stories"
      onMouseMove={onPointerMove}
      onMouseLeave={onPointerLeave}
      className="paper-grain-dark relative overflow-hidden bg-charcoal py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#B5766D",
          "--atmo-x": "85%",
          "--atmo-y": "15%",
          "--atmo-opacity": 0.28,
          "--atmo-size": "50%",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="font-mono text-label uppercase text-sand mb-4"
        >
          {t("stories.eyebrow")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-md text-ivory text-balance max-w-2xl"
        >
          {t("stories.heading")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-body text-body-lg text-ivory/60 max-w-md mt-6"
        >
          {t("stories.subhead")}
        </motion.p>

        <div className="relative mt-20 lg:mt-28 grid sm:grid-cols-3 gap-10 lg:gap-8">
          <Particles count={10} seedOffset={40} className="hidden lg:block absolute inset-0" />
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <ConnectorLine from={{ x: 30, y: 20 }} to={{ x: 50, y: 8 }} color="#E3C8A3" opacity={0.3} dashed delay={0.3} />
            <ConnectorLine from={{ x: 50, y: 8 }} to={{ x: 72, y: 24 }} color="#E3C8A3" opacity={0.3} delay={0.5} />
          </div>
          <MicroDot size={6} color="#E3C8A3" className="hidden lg:block absolute top-[4%] left-[50%]" />

          {CROPS.map((crop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.85, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div style={{ x: drifts[i] }}>
                <div className={`hard-frame-dark relative overflow-hidden ${crop.aspect}`}>
                  <video
                    className={`absolute inset-0 w-full h-full object-cover ${crop.position}`}
                    style={{ transform: `scale(${crop.scale})` }}
                    src="/sakhi-opening.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/50 via-transparent to-transparent pointer-events-none" />
                </div>
                <p className="font-display italic text-ivory text-lg mt-5 text-balance">
                  “{quotes[i].quote}”
                </p>
                <div className="flex items-center gap-2.5 mt-3">
                  <MaterialSwatch
                    size={16}
                    tint={i === 0 ? "bg-rose" : i === 1 ? "bg-sand" : "bg-clay"}
                    rotate={0}
                    seed={i * 0.3}
                    round
                    className=""
                  />
                  <p className="font-mono text-2xs uppercase tracking-[0.14em] text-sand">
                    {quotes[i].attribution}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <SectionDivider fill="#F3E4C4" />
    </section>
  );
}
