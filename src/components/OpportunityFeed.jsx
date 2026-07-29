import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../lib/i18n/LanguageContext";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MicroDot from "./living/MicroDot";
import MiniSparkline from "./living/MiniSparkline";
import MaterialSwatch from "./living/MaterialSwatch";

/**
 * VisionOS-style floating windows, not a newspaper column and not a card
 * grid: three opportunity objects drift independently in a loose cluster.
 * Hover expands the one under the cursor to reveal its detail, and the
 * other two ease back and dim slightly — windows reacting to each other,
 * not three static rectangles.
 */
function OpportunityWindow({ story, index, hovered, setHovered, seed, big, className }) {
  const reduced = useReducedMotion();
  const isHovered = hovered === index;
  const isDimmed = hovered !== null && hovered !== index;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.05 : isDimmed ? 0.95 : 1,
          opacity: isDimmed ? 0.65 : 1,
          y: isDimmed ? 6 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={reduced ? {} : { y: [0, -9, 0] }}
          transition={{ duration: 5.5 + seed * 3, repeat: Infinity, ease: "easeInOut", delay: seed * 2 }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          className="paper-grain rounded-[28px] border border-ink-900/10 bg-ivory/92 shadow-[0_24px_60px_-24px_rgba(43,38,32,0.3)] px-6 py-6 lg:px-7 lg:py-7 cursor-default"
        >
          <span className="inline-flex items-center gap-1.5 font-mono text-2xs uppercase tracking-[0.14em] text-ink-600">
            <MicroDot size={5} />
            {story.tag}
          </span>
          <h3 className={`font-display text-ink-900 text-balance mt-3 ${big ? "text-2xl lg:text-[1.75rem]" : "text-xl"}`}>
            {story.headline}
          </h3>
          <div className="flex items-center gap-2 mt-3">
            <p className="font-mono text-2xs uppercase tracking-[0.12em] text-ink-400">{story.meta}</p>
            <MiniSparkline color="#C17A52" width={30} />
          </div>

          <motion.div
            initial={false}
            animate={{ maxHeight: isHovered ? 120 : 0, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-body-sm text-ink-600 mt-3 max-w-[32ch]">{story.body}</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function OpportunityFeed() {
  const sectionRef = useRef(null);
  const { t } = useLanguage();
  const [hovered, setHovered] = useState(null);

  return (
    <section
      ref={sectionRef}
      id="opportunity"
      className="relative overflow-hidden bg-gradient-to-b from-pearl via-ivory to-blush/35 py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#E6C0B9",
          "--atmo-x": "10%",
          "--atmo-y": "30%",
          "--atmo-opacity": 0.24,
          "--atmo-size": "46%",
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
          {t("opportunity.eyebrow")}
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-ink-900/15 pb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-display-md text-ink-900 text-balance max-w-2xl"
          >
            {t("opportunity.heading")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-body text-body text-ink-600 max-w-xs"
          >
            {t("opportunity.subhead")}
          </motion.p>
        </div>

        <div className="relative mt-20 lg:mt-28 lg:min-h-[560px]">
          <Particles count={10} seedOffset={30} className="hidden lg:block absolute inset-0" />

          <OpportunityWindow
            story={t("opportunity.lead")}
            index={0}
            hovered={hovered}
            setHovered={setHovered}
            seed={0.2}
            big
            className="relative lg:absolute lg:top-0 lg:left-0 lg:w-[38%]"
          />
          <OpportunityWindow
            story={t("opportunity.mentor")}
            index={1}
            hovered={hovered}
            setHovered={setHovered}
            seed={0.6}
            className="relative mt-8 lg:mt-0 lg:absolute lg:top-[8%] lg:right-[4%] lg:w-[32%]"
          />
          <OpportunityWindow
            story={t("opportunity.scheme")}
            index={2}
            hovered={hovered}
            setHovered={setHovered}
            seed={0.9}
            className="relative mt-8 lg:mt-0 lg:absolute lg:top-[58%] lg:left-[28%] lg:w-[34%]"
          />

          <MaterialSwatch
            size={30}
            tint="bg-terracotta"
            rotate={12}
            seed={0.4}
            round
            className="hidden lg:block absolute top-[6%] left-[46%]"
          />
          <MaterialSwatch
            size={22}
            tint="bg-rose"
            rotate={-14}
            seed={0.7}
            className="hidden lg:block absolute top-[38%] left-[58%]"
          />
          <MicroDot size={6} color="#B5766D" className="hidden lg:block absolute top-[24%] left-[42%]" />
          {/* bridge swatch — hands off toward Sakhi in Action's lavender */}
          <MaterialSwatch
            size={28}
            tint="bg-lavender"
            rotate={6}
            seed={0.55}
            className="hidden lg:block absolute top-[98%] right-[20%]"
          />
        </div>

        <motion.a
          href="#action"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="group inline-flex items-center gap-2 font-body text-sm text-ink-600 hover:text-ink-900 mt-24 lg:mt-32 transition-colors"
        >
          <span className="underline underline-offset-4 decoration-terracotta/40">
            {t("opportunity.footerLink")}
          </span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </motion.a>
      </div>

      <SectionDivider fill="#E7E0F2" />
    </section>
  );
}
