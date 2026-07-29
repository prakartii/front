import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { useGatedTransform, rangeMap } from "../lib/motion";
import { useLanguage } from "../lib/i18n/LanguageContext";
import FloatingChip from "./living/FloatingChip";
import ConnectorLine from "./living/ConnectorLine";
import Particles from "./living/Particles";
import SectionDivider from "./living/SectionDivider";
import MicroDot from "./living/MicroDot";
import MiniSparkline from "./living/MiniSparkline";
import MaterialSwatch from "./living/MaterialSwatch";

// A hand-generated jagged top edge — the one card that reads as a torn
// paper fragment rather than a clean rectangle. Deterministic (not random)
// so it's stable across renders/hydration.
function tornTopClipPath(teeth) {
  const pts = [];
  for (let i = 0; i <= teeth; i++) {
    const x = (i / teeth) * 100;
    const y = i % 2 === 0 ? 0 : 3.4;
    pts.push(`${x}% ${y}%`);
  }
  pts.push("100% 100%", "0% 100%");
  return `polygon(${pts.join(", ")})`;
}
const TORN_EDGE = tornTopClipPath(16);

const underlineVariants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 },
};

// A small ambient waveform — bars breathe at slightly offset phases so it
// reads as "still listening," not a static icon. Freezes to a flat row
// under reduced motion.
function Waveform({ reduced }) {
  const heights = [6, 12, 18, 10, 15, 8, 13];
  return (
    <div className="flex items-end gap-[3px] h-5" aria-hidden="true">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-terracotta/70"
          style={{ height: h }}
          animate={reduced ? {} : { scaleY: [1, 1.6, 1] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.12,
          }}
        />
      ))}
    </div>
  );
}

function VoiceNote({ note, reduced, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -18, rotate: -3, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, rotate: -3, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`hard-frame bg-ivory/90 px-5 py-4 ${className}`}
    >
      <div className="flex items-center gap-3 mb-3">
        <Waveform reduced={reduced} />
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
          {note.label}
        </span>
      </div>
      <p className="font-body text-body-sm text-ink-600 italic">{note.transcript}</p>
      <p className="font-display italic text-terracotta mt-2 text-base">{note.sakhi}</p>
    </motion.div>
  );
}

// A torn wholesale-invoice slip — the receipt artifact in the scrapbook.
function ReceiptCard({ receipt, className }) {
  return (
    <FloatingChip
      seed={0.35}
      rotate={-4}
      hard
      tint="bg-ivory/95"
      className={className}
    >
      <div className="px-4 py-3.5" style={{ clipPath: tornTopClipPath(10) }}>
        <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
          {receipt.label}
        </span>
        <p className="font-display text-2xl text-ink-900 mt-1">{receipt.amount}</p>
        <p className="font-body text-xs text-ink-600 mt-1.5">{receipt.sakhi}</p>
      </div>
    </FloatingChip>
  );
}

// A WhatsApp-toned reminder bubble — the one artifact styled as a chat
// bubble rather than a paper fragment, asymmetric corner and all.
function ReminderBubble({ reminder, className }) {
  return (
    <FloatingChip seed={0.6} rotate={2} tint="bg-sage/55" className={className}>
      <div className="px-4 py-3.5 rounded-2xl rounded-bl-sm">
        <div className="flex items-center gap-2 mb-1.5">
          <MicroDot size={5} color="#5B9E5B" />
        </div>
        <p className="font-body text-sm text-ink-900">{reminder.text}</p>
        <p className="font-display italic text-terracotta-deep text-sm mt-2">{reminder.sakhi}</p>
      </div>
    </FloatingChip>
  );
}

// A single handwritten line — the journal artifact, ink on paper, no card
// chrome at all.
function JournalNote({ text, className }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16, rotate: -2, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, rotate: -2, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`font-script text-2xl text-ink-600 ${className}`}
    >
      {text}
    </motion.p>
  );
}

function MemoryCard({ entry, className, tint, big, dashed, torn, hard, delay, from, rotate = 0 }) {
  // Static per-card tilt is folded into the same framer-motion transform as
  // the entrance animation (not a separate Tailwind rotate-* class) — a
  // class-based transform would simply be clobbered by Motion's own inline
  // transform once it starts animating x/y/filter on the same element.
  const initial =
    from === "below"
      ? { opacity: 0, y: 36, rotate, filter: "blur(4px)" }
      : from === "right"
      ? { opacity: 0, x: 28, rotate, filter: "blur(4px)" }
      : { opacity: 0, y: -24, rotate, filter: "blur(4px)" };

  // One of the three entries picks up the hard-edge "cut paper" framing
  // (shared with Founder Stories) instead of the soft border + heavy
  // shadow the others use — a single thread of that language here, not a
  // wholesale swap, so Memory stays its own composition.
  const frameClass = hard
    ? "hard-frame"
    : `border ${dashed ? "border-dashed" : "border-solid"} border-ink-900/12 shadow-[0_18px_45px_-20px_rgba(43,38,32,0.22)]`;

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, y: 0, x: 0, rotate, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover="hover"
      className={`group ${frameClass} px-6 py-6 lg:px-8 lg:py-8 ${tint} ${className}`}
      style={torn ? { clipPath: TORN_EDGE } : undefined}
    >
      <span className="inline-block font-mono text-2xs uppercase tracking-[0.16em] text-ink-600 border border-ink-900/15 px-2.5 py-1 -rotate-2 bg-ivory/60">
        {entry.label}
      </span>
      <p className={`font-body text-ink-900 mt-4 ${big ? "text-body-lg" : "text-body"}`}>
        {entry.moment}
      </p>
      <p className="relative inline-block font-display italic text-terracotta mt-3 text-lg">
        {entry.sakhi}
        <motion.span
          variants={underlineVariants}
          initial="initial"
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 -bottom-1 h-[2px] w-full bg-terracotta origin-left"
        />
      </p>
    </motion.div>
  );
}

/**
 * Deliberately not Hero again: a cooler sage/lavender/dusty-rose page, an
 * irregular journal-collage of three differently-shaped entries instead of
 * a repeated card template, and a diagonal italic pull-quote standing in
 * for the old drawn spine-with-dots timeline. No CTA here — this section's
 * job is reflection, not conversion.
 */
export default function Memory() {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const ruleScale = useGatedTransform(scrollYProgress, reduced, rangeMap([0.05, 0.4], [0, 1]), 1);

  const entries = t("memory.entries");

  return (
    <section
      ref={sectionRef}
      id="memory"
      className="relative overflow-hidden bg-gradient-to-br from-sage/55 via-ivory to-lavender/40 py-28 lg:py-40 px-6 lg:px-16"
    >
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#C98E86",
          "--atmo-x": "14%",
          "--atmo-y": "82%",
          "--atmo-opacity": 0.22,
          "--atmo-size": "52%",
        }}
      />
      {/* a third tone (clay) folded into the wash — richer than the
          original two-tone sage/lavender gradient without becoming Hero's
          palette */}
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#D9BFAE",
          "--atmo-x": "88%",
          "--atmo-y": "10%",
          "--atmo-opacity": 0.2,
          "--atmo-size": "40%",
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
          {t("memory.eyebrow")}
        </motion.p>

        <div className="relative mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 16, rotate: -1, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, rotate: -1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-display italic text-display-lg text-ink-900 text-balance max-w-3xl origin-left"
          >
            {t("memory.heading")}
          </motion.h2>

          <motion.div
            style={{ scaleX: ruleScale, transformOrigin: "left" }}
            className="h-px bg-gradient-to-r from-terracotta via-rose-deep to-transparent w-full max-w-2xl mt-7"
          />
          <MiniSparkline color="#C98E86" width={48} className="mt-3" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="font-body text-body-lg text-ink-600 max-w-sm mt-10 lg:absolute lg:top-0 lg:right-0"
          >
            {t("memory.subhead")}
          </motion.p>
        </div>

        <div className="relative mt-24 lg:mt-32 lg:min-h-[640px]">
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <Particles count={6} seedOffset={11} className="absolute inset-0" />
            <ConnectorLine from={{ x: 8, y: -3 }} to={{ x: 75, y: 3 }} color="#9C5330" opacity={0.3} delay={0.2} />
            <ConnectorLine from={{ x: 13, y: 12 }} to={{ x: 39, y: 34 }} color="#5B5650" opacity={0.25} dashed delay={0.4} />
          </div>

          <MemoryCard
            entry={entries[0]}
            big
            hard
            from="top"
            delay={0}
            rotate={-2}
            tint="bg-ivory/85"
            className="relative lg:absolute lg:top-0 lg:right-[4%] lg:w-[42%]"
          />
          {t("memory.voiceNote") && (
            <VoiceNote
              note={t("memory.voiceNote")}
              reduced={reduced}
              className="hidden lg:block relative lg:absolute lg:top-[4%] lg:left-[1%] lg:w-[24%]"
            />
          )}
          <MemoryCard
            entry={entries[1]}
            dashed
            from="below"
            delay={0.18}
            rotate={3}
            tint="bg-lavender/30"
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[40%] lg:left-0 lg:w-[28%]"
          />
          <MemoryCard
            entry={entries[2]}
            torn
            from="right"
            delay={0.32}
            rotate={-1}
            tint="bg-rose/25"
            className="relative mt-10 lg:mt-0 lg:absolute lg:top-[64%] lg:left-[26%] lg:w-[48%]"
          />

          <ReceiptCard
            receipt={t("memory.receipt")}
            className="hidden lg:block absolute top-[32%] left-[32%] w-[15%]"
          />
          <ReminderBubble
            reminder={t("memory.reminder")}
            className="hidden lg:block absolute top-[44%] right-[2%] w-[20%]"
          />
          <JournalNote
            text={t("memory.journal")}
            className="hidden lg:block absolute top-[90%] left-[2%] w-[17%]"
          />

          <MaterialSwatch
            size={38}
            tint="bg-clay"
            rotate={8}
            seed={0.3}
            className="hidden lg:block absolute top-[18%] right-[24%]"
          />
          <MaterialSwatch
            size={28}
            tint="bg-lavender"
            rotate={-10}
            seed={0.8}
            className="hidden lg:block absolute top-[76%] right-[6%]"
          />
          {/* bridge swatch — same shape/color family Growth Signals opens
              with, tucked at the very edge so the eye carries it forward */}
          <MaterialSwatch
            size={30}
            tint="bg-champagne"
            rotate={5}
            seed={0.5}
            round
            className="hidden lg:block absolute top-[105%] right-[10%]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-sm italic text-ink-900 text-balance mt-24 lg:mt-32 max-w-2xl"
        >
          {t("memory.closing")}
        </motion.p>
      </div>

      <SectionDivider fill="#F0DFB8" />
    </section>
  );
}
