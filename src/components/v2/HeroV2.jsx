import { staggerParent, staggerChild } from "../../lib/motion";
import { splitEmphasis } from "../../lib/text";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import { motion } from "framer-motion";
import Card2 from "./Card2";
import PillButton from "./PillButton";
import StoryChip from "./StoryChip";
import CraftIcon from "./CraftIcon";
import PressedFlower from "./PressedFlower";
import MarketTicket from "./MarketTicket";
import LedgerLine from "./LedgerLine";
import HandwrittenNote from "../living/HandwrittenNote";
import VoiceWidget from "./widgets/VoiceWidget";
import MemoryWidget from "./widgets/MemoryWidget";
import GrowthWidget from "./widgets/GrowthWidget";
import OpportunityWidget from "./widgets/OpportunityWidget";
import MarketplaceWidget from "./widgets/MarketplaceWidget";

const TRUST_ROW = [
  { icon: "🎙️", label: "Voice-first" },
  { icon: "🧠", label: "Total recall" },
  { icon: "🌍", label: "10 languages" },
];

const TIMES = [
  { label: "09:15 AM", top: 1 },
  { label: "11:30 AM", top: 33 },
  { label: "01:45 PM", top: 61 },
  { label: "03:20 PM", top: 80 },
];

const TICKER = [
  { icon: "📲", label: "UPI Payment Received", value: "₹18,450", tint: "bg-v2-sage", md: true },
  { icon: "🧵", label: "Handloom Fair — Nov 3", tint: "bg-v2-sage" },
  { icon: "🛒", label: "ONDC Store Ready", tint: "bg-v2-powder" },
  { icon: "🏛️", label: "PM Vishwakarma Eligible", tint: "bg-v2-lavender" },
  { icon: "🪔", label: "Festival Sale in 12 Days", tint: "bg-v2-peach" },
  { icon: "📦", label: "Diwali Inventory Reminder", tint: "bg-v2-butter" },
];

/**
 * SAKHI V2 hero — Memory folded into the same canvas as one continuous
 * timeline (09:15 → 03:20), not two separate sections. A clean two-column
 * grid either side of a time-stamped spine, a signals ticker on the far
 * right, and the marketplace opportunity anchored at the bottom of that
 * ticker rather than bleeding off the page.
 */
export default function HeroV2() {
  const { t } = useLanguage();

  const headline = t("hero.headline");
  const entries = t("memory.entries");
  const signal = t("growth.signals")[0];
  const lead = t("opportunity.lead");
  const reminder = t("memory.reminder");
  const quote = t("action.messages")[0].text;

  return (
    <section id="hero" className="relative z-10 bg-v2-cream pt-28 md:pt-32 pb-10 lg:pb-14 px-5 lg:px-10 scroll-mt-28">
      <div className="relative max-w-[1360px] mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-14 lg:gap-8 items-start">
        {/* Left — copy column */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="visible"
          className="relative z-20 lg:pt-6"
        >
          <motion.span
            variants={staggerChild}
            className="inline-flex items-center gap-2 font-body2 font-semibold text-[11px] uppercase tracking-[0.16em] text-v2-brown bg-v2-butter px-4 py-2 rounded-full"
          >
            {t("hero.eyebrow")}
          </motion.span>

          <div className="mt-6">
            {headline.map((line, i) => (
              <motion.p
                key={i}
                variants={staggerChild}
                className="font-display2 font-semibold text-balance text-v2-text text-[clamp(2rem,1.3rem+3.2vw,3.6rem)] leading-[1.06]"
              >
                {splitEmphasis(line).map((seg, j) =>
                  seg.em ? (
                    <em key={j} className="text-v2-brown not-italic">
                      {seg.t}
                    </em>
                  ) : (
                    <span key={j}>{seg.t}</span>
                  )
                )}
              </motion.p>
            ))}
          </div>

          <motion.p variants={staggerChild} className="font-body2 text-lg text-v2-text/75 max-w-md mt-6 leading-relaxed">
            {t("hero.subhead")}
          </motion.p>

          <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-6 mt-9">
            <PillButton href="#start">{t("hero.ctaPrimary")} →</PillButton>
            <a
              href="#memory"
              className="font-body2 text-sm text-v2-text/70 hover:text-v2-text underline underline-offset-4 decoration-v2-brown/40 transition-colors"
            >
              {t("hero.ctaSecondary")} ↓
            </a>
          </motion.div>

          <motion.div variants={staggerChild} className="flex flex-wrap items-center gap-5 mt-11">
            {TRUST_ROW.map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-body2 text-sm text-v2-text/70">
                <span
                  className="w-8 h-8 rounded-full bg-v2-warmwhite flex items-center justify-center text-sm"
                  style={{ boxShadow: "0 10px 24px -10px rgba(111,87,72,0.28)" }}
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                {item.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — her memory, as one timeline */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex items-center gap-2 mb-5"
          >
            <span className="w-2 h-2 rounded-full bg-v2-coral" aria-hidden="true" />
            <span className="font-body2 text-sm text-v2-text/70">Her memory, your timeline</span>
          </motion.div>

          <div className="hidden lg:block relative h-[680px]">
            {/* The spine — one thread, four moments in her day */}
            <div className="absolute left-[39%] top-[1%] h-[88%] w-px bg-v2-brown/15" aria-hidden="true" />
            {TIMES.map((tItem) => (
              <div
                key={tItem.label}
                className="absolute left-[39%] -translate-x-1/2 flex flex-col items-center"
                style={{ top: `${tItem.top}%` }}
              >
                <span className="font-body2 text-[11px] text-v2-text/55 mb-2 whitespace-nowrap">{tItem.label}</span>
                <span className="w-2 h-2 rounded-full bg-v2-warmwhite border-2 border-v2-brown/30" />
              </div>
            ))}

            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="absolute top-0 left-0 z-10"
            >
              <div className="relative">
                <MemoryWidget entries={entries.slice(0, 2)} />
                <CraftIcon variant="clip" size={18} color="#6F5748" className="absolute -top-2 left-6 rotate-[4deg] z-10" />
                <PressedFlower size={26} rotate={4} delay={0.4} className="absolute -top-3 -right-3 z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute top-[33%] left-0 z-10"
            >
              <div className="relative">
                <GrowthWidget signal={signal} />
                <PressedFlower size={24} rotate={-4} delay={0.5} className="absolute -top-3 -right-3 z-10" />
                <HandwrittenNote
                  text="Jaipur exhibition — don't forget"
                  tint="bg-v2-butter"
                  rotate={4}
                  className="absolute -top-4 left-[92%] max-w-[120px] scale-90 z-20 hidden xl:block"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[74%] left-0 z-[7] flex items-start gap-2 scale-[0.82] origin-top-left"
            >
              <LedgerLine entry="Fabric — 14 June" amount="₹2,100 paid" rotate={-2} />
              <MarketTicket label="Cotton Rate" value="₹2,100/qtl ↓" tint="bg-v2-sage" rotate={2} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.26 }}
              className="absolute top-[87%] left-0 z-[7]"
            >
              <StoryChip icon="🏦" label="PM Mudra Loan Eligible" tint="bg-v2-butter" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.32 }}
              className="absolute top-[96%] left-0 z-[7]"
            >
              <StoryChip icon="📋" label="GST Filed on Time" tint="bg-v2-warmwhite" />
            </motion.div>

            {/* Right column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="absolute top-0 left-[46%] z-20"
            >
              <VoiceWidget quote={quote} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-[28%] left-[46%] z-20"
            >
              <MarketplaceWidget />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="absolute top-[68%] left-[46%] w-[26%] z-20"
            >
              <Card2 tint="bg-v2-powder" radius="rounded-2xl rounded-bl-md" pad="p-5" lift className="relative">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-v2-brown/60" />
                  <span className="font-body2 text-[11px] uppercase tracking-[0.1em] text-v2-brown/70">Reminder</span>
                </div>
                <p className="font-body2 text-sm text-v2-text">{reminder.text}</p>
                <p className="font-display2 italic text-v2-brown text-sm mt-2">{reminder.sakhi}</p>
              </Card2>
            </motion.div>

            {/* Far-right signals ticker */}
            {TICKER.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="absolute left-[79%] z-[7]"
                style={{ top: `${i * 11}%` }}
              >
                <StoryChip icon={item.icon} label={item.label} value={item.value} tint={item.tint} size={item.md ? "md" : "sm"} />
              </motion.div>
            ))}

            {/* Marketplace opportunity — anchored at the bottom of the
                ticker, in step with the Reminder row, not bleeding past
                the section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-[68%] left-[79%] w-[21%] z-20"
            >
              <OpportunityWidget lead={lead} className="!w-full" />
            </motion.div>
          </div>

          {/* Mobile / tablet: simple flowing stack */}
          <div className="flex lg:hidden flex-col items-start gap-4 pt-4">
            <VoiceWidget quote={quote} className="w-full max-w-xs" />
            <MemoryWidget entries={entries.slice(0, 2)} className="w-full max-w-xs" />
            <div className="flex gap-4 flex-wrap">
              <GrowthWidget signal={signal} />
              <MarketplaceWidget />
            </div>
            <OpportunityWidget lead={lead} className="w-full max-w-xs" />
          </div>
        </div>
      </div>
    </section>
  );
}
