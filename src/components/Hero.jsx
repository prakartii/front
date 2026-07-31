import { useRef } from "react";
import { motion } from "framer-motion";
import { staggerParent, staggerChild } from "../lib/motion";
import { useMagnetic } from "../lib/useMagnetic";
import { splitEmphasis } from "../lib/text";
import { useLanguage } from "../lib/i18n/LanguageContext";
import AmbientOrb from "./three/AmbientOrb";
import Card from "./living/Card";
import Blob from "./living/Blob";
import StickerBadge from "./living/StickerBadge";
import HandwrittenNote from "./living/HandwrittenNote";
import SectionDivider from "./living/SectionDivider";

/**
 * The Lumora x Yellow-Marketplace hero: a warm cream stage with two bold
 * blob washes (blush + peach), a premium serif headline still carrying
 * the emphasis-span treatment, and — the pivot's core structural change —
 * every piece of real content (video, note, trust badges) sitting inside
 * its own rounded card instead of scattered loose across an open canvas.
 */
export default function Hero() {
  const heroRef = useRef(null);
  const { t } = useLanguage();
  const magnetic = useMagnetic({ strength: 0.3 });

  const headline = t("hero.headline");
  const badges = [t("hero.chip1"), t("hero.chip2")];
  const badgeTints = ["bg-sage/60", "bg-powder/60"];

  return (
    <section
      ref={heroRef}
      id="film"
      className="relative overflow-hidden bg-gradient-to-b from-ivory via-ivory to-pearl pt-36 md:pt-44 pb-24 lg:pb-32 px-6 lg:px-16"
    >
      <Blob tint="bg-blush/70" size={420} className="-top-24 -right-32 blur-2xl" />
      <Blob tint="bg-peach/60" size={340} className="top-[55%] -left-28 blur-2xl" />

      <div className="relative max-w-[1400px] mx-auto grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-10 items-center">
        <motion.div variants={staggerParent} initial="hidden" animate="visible">
          <motion.div variants={staggerChild}>
            <StickerBadge tint="bg-blush/70" icon="🌸" label={t("hero.eyebrow")} />
          </motion.div>

          <div className="mt-7">
            {headline.map((line, i) => (
              <motion.p
                key={i}
                variants={staggerChild}
                className={`font-display text-balance text-ink-900 ${
                  i === headline.length - 1 ? "text-display-lg" : "text-display-md"
                }`}
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
          </div>

          <motion.p variants={staggerChild} className="font-body text-body-lg text-ink-600 max-w-md mt-7">
            {t("hero.subhead")}
          </motion.p>

          <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-8 mt-10">
            <motion.a
              ref={magnetic.ref}
              href="#start"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              style={magnetic.style}
              className="inline-block font-body font-medium bg-ink-900 text-ivory px-8 py-4 rounded-full text-base hover:bg-terracotta-deep transition-colors"
            >
              {t("hero.ctaPrimary")} →
            </motion.a>
            <a
              href="#memory"
              className="font-body text-sm text-ink-600 hover:text-ink-900 underline underline-offset-4 decoration-terracotta/40 transition-colors"
            >
              {t("hero.ctaSecondary")} ↓
            </a>
          </motion.div>

          <motion.div variants={staggerChild} className="flex flex-wrap gap-3 mt-10">
            {badges.map((b, i) => (
              <StickerBadge key={i} tint={badgeTints[i % badgeTints.length]} label={b} />
            ))}
          </motion.div>
        </motion.div>

        <div className="relative">
          <Card tint="bg-peach/45" pad="p-3" hover>
            <div className="relative overflow-hidden rounded-[22px] aspect-[4/5]">
              <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/sakhi-opening.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </Card>

          <HandwrittenNote
            text={t("hero.annotation")}
            tint="bg-butter"
            rotate={-4}
            className="absolute -left-6 -bottom-6 max-w-[180px] hidden sm:block"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-6 -right-6 hidden sm:flex items-center justify-center w-20 h-20 rounded-full bg-ivory card-shadow"
          >
            <AmbientOrb variant="presence" size={56} />
          </motion.div>
        </div>
      </div>

      <SectionDivider fill="#DCE6D6" />
    </section>
  );
}
