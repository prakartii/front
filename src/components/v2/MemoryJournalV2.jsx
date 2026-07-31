import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Card2 from "./Card2";
import PressedFlower from "./PressedFlower";
import StoryChip from "./StoryChip";
import MarketTicket from "./MarketTicket";
import HandwrittenNote from "../living/HandwrittenNote";

const ENTRIES = [
  {
    id: "price-change",
    day: "12",
    month: "JUN",
    monthFull: "JUNE",
    year: "2024",
    dot: "#E0685F",
    chip: "bg-v2-blush",
    title: "Price change worked",
    summary: "Increased prices after weeks of hesitation.",
    category: "Pricing",
    categoryTint: "bg-v2-blush",
    highlight: { icon: "⭐", text: "Raised prices in June" },
    whyMatters:
      "Standing up for my value was tough, but it reminded me—I can grow my business with confidence.",
    whatsNext: "Plan festive collection pricing for upcoming fairs.",
  },
  {
    id: "wholesale",
    day: "10",
    month: "JUN",
    monthFull: "JUNE",
    year: "2024",
    dot: "#8B7FD1",
    chip: "bg-v2-lavender",
    title: "Wholesale enquiry",
    summary: "Buyer from Bengaluru showed interest in bulk order.",
    category: "Leads",
    categoryTint: "bg-v2-lavender",
    highlight: { icon: "🤝", text: "Bengaluru buyer, bulk order" },
    whyMatters:
      "A stranger believing in her work, unprompted — proof the word is spreading on its own.",
    whatsNext: "Send the wholesale pricing sheet and minimum order quantities.",
  },
  {
    id: "fabric-delay",
    day: "08",
    month: "JUN",
    monthFull: "JUNE",
    year: "2024",
    dot: "#E0A24A",
    chip: "bg-v2-peach",
    title: "Fabric supplier delayed",
    summary: "Rescheduled delivery to June 14.",
    category: "Operations",
    categoryTint: "bg-v2-peach",
    highlight: { icon: "📦", text: "Delivery moved to June 14" },
    whyMatters:
      "Staying calm under a delay instead of scrambling — she's learning to plan around what she can't control.",
    whatsNext: "Follow up with a backup supplier, just in case.",
  },
  {
    id: "raksha-bandhan",
    day: "05",
    month: "JUN",
    monthFull: "JUNE",
    year: "2024",
    dot: "#6FA37A",
    chip: "bg-v2-sage",
    title: "Raksha Bandhan boost",
    summary: "Orders increased across 3 products!",
    category: "Festival",
    categoryTint: "bg-v2-sage",
    highlight: { icon: "🎉", text: "Orders up across 3 products" },
    whyMatters:
      "Festival demand rewarded the stock she prepared early — the planning paid off.",
    whatsNext: "Restock the two fastest-selling designs before Diwali.",
  },
  {
    id: "jaipur",
    day: "01",
    month: "JUN",
    monthFull: "JUNE",
    year: "2024",
    dot: "#8B7FD1",
    chip: "bg-v2-lavender",
    title: "New exhibition in Jaipur",
    summary: "Booked my stall for 18–21 June.",
    category: "Opportunity",
    categoryTint: "bg-v2-lavender",
    highlight: { icon: "📅", text: "Stall booked, 18–21 June" },
    whyMatters:
      "Her first exhibition outside her own city — a real step beyond the neighbourhood market.",
    whatsNext: "Prepare festival-ready stock and a travel budget.",
  },
];

const INSIGHTS = [
  { icon: "📈", tint: "bg-v2-sage", text: "You've captured 8 key moments this month." },
  { icon: "❤️", tint: "bg-v2-blush", text: "You're consistent on good days." },
  { icon: "💡", tint: "bg-v2-butter", text: "You pause, reflect, and try again." },
  { icon: "🌱", tint: "bg-v2-sage", text: "You care about your work." },
];

const SOFT_SHADOW = "0 14px 32px -24px rgba(111,87,72,0.16)";

/**
 * SAKHI V2 — Memory Journal: a standalone, near-full-viewport interactive
 * section inserted between the existing bento Memory section and
 * Multilingual. Three columns — the journal list, the selected entry's
 * detail, and her insights — built to match the approved screenshot's
 * editorial-magazine visual language: light weights, small delicate type,
 * soft paper cards, generous but not oversized breathing room. Decorative
 * assets (textile, stamp) are deliberately plain placeholders per spec; a
 * later pass swaps those in without touching this structure.
 */
export default function MemoryJournalV2() {
  const [selectedId, setSelectedId] = useState(ENTRIES[0].id);
  const [showOlderNote, setShowOlderNote] = useState(false);
  const active = ENTRIES.find((e) => e.id === selectedId) ?? ENTRIES[0];

  return (
    <section
      id="memory-journal"
      className="v2-weave-ground relative z-0 bg-v2-cream px-5 lg:px-10 pt-10 md:pt-14 pb-16 lg:pb-20 lg:min-h-[90vh] flex flex-col justify-center scroll-mt-36"
    >
      {/* Extremely subtle warm lighting — a whisper, not a spotlight */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(ellipse 900px 480px at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.3fr_0.85fr] gap-10 xl:gap-16 items-start">
          {/* Left — journal */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] text-v2-brown bg-v2-blush px-3.5 py-1.5 rounded-full">
              Her story, your remembrance.
            </span>

            <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.7rem,1.1rem+2vw,2.65rem)] leading-[1.16] mt-5">
              A diary of moments
              <br />
              <span className="text-v2-brown">that shaped her.</span>
            </h2>

            <p className="font-body2 text-v2-text/65 text-[15px] mt-3">Pause. Reflect. Remember.</p>

            <Card2
              tint="bg-v2-warmwhite"
              radius="rounded-[22px]"
              pad="p-5 lg:p-6"
              className="v2-fiber-grain v2-thread-edge relative mt-7"
              style={{ boxShadow: SOFT_SHADOW }}
            >
              {/* Notebook punch holes — the one detail that says "bound
                  journal" before you've read a word */}
              <div
                className="hidden md:flex flex-col gap-8 absolute left-2.5 top-1/2 -translate-y-1/2"
                aria-hidden="true"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2 h-2 rounded-full bg-v2-cream"
                    style={{ boxShadow: "inset 0 1px 2px rgba(111,87,72,0.18)" }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 md:pl-4">
                <span className="inline-flex items-center gap-2 font-display2 font-semibold text-v2-text text-[15px]">
                  <span aria-hidden="true">📔</span> Your Memory Journal
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-1.5 shrink-0 font-body2 font-medium text-xs text-v2-brown border border-v2-coral/35 rounded-full px-3 py-1.5 hover:bg-v2-blush/40 transition-colors"
                >
                  <span aria-hidden="true">+</span> Add memory
                </button>
              </div>

              {/* The journal's own timeline spine — a thin connecting
                  thread behind the date chips, so the list reads as one
                  continuous notebook of days rather than a stacked list */}
              <div className="relative mt-5 md:pl-4">
                <span
                  className="absolute left-[37px] top-2 bottom-2 w-px bg-v2-brown/10"
                  aria-hidden="true"
                />
                <div className="divide-y divide-v2-brown/6">
                  {ENTRIES.map((entry) => {
                    const isActive = entry.id === selectedId;
                    return (
                      <button
                        key={entry.id}
                        type="button"
                        onClick={() => setSelectedId(entry.id)}
                        aria-current={isActive}
                        className={`w-full flex items-center gap-3 text-left py-3 px-2 -mx-2 rounded-lg transition-colors relative ${
                          isActive ? "bg-v2-blush/50" : "hover:bg-v2-cream"
                        }`}
                      >
                        {isActive && (
                          <span
                            className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-v2-coral"
                            aria-hidden="true"
                          />
                        )}
                        <span
                          className={`relative z-10 flex flex-col items-center justify-center w-11 h-11 rounded-lg shrink-0 ${entry.chip}`}
                        >
                          <span className="font-display2 font-semibold text-v2-text text-sm leading-none">
                            {entry.day}
                          </span>
                          <span className="font-body2 text-[8px] tracking-[0.08em] text-v2-text/60 mt-0.5">
                            {entry.month}
                          </span>
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-1.5">
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ background: entry.dot }}
                              aria-hidden="true"
                            />
                            <span className="font-body2 font-semibold text-sm text-v2-text truncate">
                              {entry.title}
                            </span>
                          </span>
                          <span className="block font-body2 text-xs text-v2-text/55 mt-0.5 truncate">
                            {entry.summary}
                          </span>
                        </span>

                        <span className="font-body2 text-v2-text/25 shrink-0 text-sm" aria-hidden="true">
                          ›
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-3 pt-1 md:pl-4">
                <button
                  type="button"
                  onClick={() => setShowOlderNote((v) => !v)}
                  className="inline-flex items-center gap-1.5 font-body2 font-medium text-xs text-v2-brown hover:text-v2-text transition-colors"
                >
                  View older memories
                  <span
                    className={`inline-block transition-transform ${showOlderNote ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </button>
                <AnimatePresence>
                  {showOlderNote && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="font-body2 text-[11px] text-v2-text/45 mt-2 overflow-hidden"
                    >
                      You're all caught up — no older memories yet.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Card2>
          </motion.div>

          {/* Center — selected entry detail */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href="#hero"
              className="inline-flex items-center gap-2 font-body2 font-medium text-[13px] text-v2-brown hover:text-v2-text transition-colors"
            >
              ← Back to all memories
            </a>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6"
              >
                <span
                  className={`inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.14em] text-v2-brown px-3 py-1 rounded-full ${active.categoryTint}`}
                >
                  {active.category}
                </span>

                <h3 className="font-display2 font-semibold text-v2-text text-[clamp(1.5rem,1rem+1.4vw,2.15rem)] leading-[1.15] mt-3">
                  {active.title}
                </h3>
                <span className="block w-9 h-[2px] rounded-full bg-v2-coral mt-3" aria-hidden="true" />

                <p className="font-body2 text-v2-text/70 text-[15px] mt-4">{active.summary}</p>

                <span className="inline-flex items-center gap-2 font-body2 font-medium text-[13px] text-v2-text bg-v2-butter/50 border border-v2-brown/5 rounded-full px-4 py-2 mt-5">
                  <span aria-hidden="true">{active.highlight.icon}</span>
                  {active.highlight.text}
                </span>

                <div className="h-px bg-v2-brown/8 mt-7 mb-6" />

                <span className="inline-flex items-center gap-2 font-body2 font-semibold text-[11px] uppercase tracking-[0.12em] text-v2-brown/65">
                  <span aria-hidden="true">♡</span> Why this matters
                </span>
                <p className="font-body2 text-v2-text/80 text-[15px] leading-relaxed mt-3 max-w-md">
                  {active.whyMatters}
                </p>

                <div className="h-px bg-v2-brown/8 mt-7 mb-6" />

                <span className="inline-flex items-center gap-2 font-body2 font-semibold text-[11px] uppercase tracking-[0.12em] text-v2-brown/65">
                  <span aria-hidden="true">🌿</span> What's next?
                </span>
                <p className="font-body2 text-v2-text/80 text-[15px] leading-relaxed mt-3 max-w-md">
                  {active.whatsNext}
                </p>

                <a
                  href="#start"
                  className="inline-flex items-center gap-2 font-body2 font-medium text-[13px] text-v2-brown border border-v2-coral/35 rounded-full px-5 py-2.5 mt-7 hover:bg-v2-blush/40 transition-colors"
                >
                  Create next step <span aria-hidden="true">✦</span>
                </a>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right — date + insights */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-display2 font-semibold text-v2-brown text-[2.75rem] leading-none">
                    {active.day}
                  </p>
                  <p className="font-body2 font-medium text-[10px] tracking-[0.14em] text-v2-text/55 mt-1.5">
                    {active.monthFull} {active.year}
                  </p>
                </motion.div>
              </AnimatePresence>

              <span
                className="w-11 h-11 rounded-lg bg-v2-warmwhite border border-v2-brown/8 flex items-center justify-center text-base shrink-0"
                style={{ boxShadow: "0 6px 16px -12px rgba(111,87,72,0.16)" }}
                aria-hidden="true"
              >
                📅
              </span>
            </div>

            {/* Quiet business-memory artifacts — the same small workspace
                objects the Hero uses (a scheme chip, a mandi ticket),
                scaled down and understated so this column doesn't read as
                a bare stat block next to the two busier columns */}
            <div className="hidden lg:flex flex-col gap-4 mt-8 mb-2" aria-hidden="true">
              <StoryChip
                icon="🏦"
                label="PM Mudra Loan Eligible"
                tint="bg-v2-butter/55"
                rotate={-2}
                className="self-end scale-[0.85] origin-right opacity-90"
              />
              <MarketTicket
                label="Cotton Rate"
                value="₹2,100/qtl ↓"
                tint="bg-v2-sage/55"
                rotate={2}
                className="self-start scale-[0.85] origin-left opacity-90"
              />
            </div>

            <Card2
              tint="bg-v2-blush/25"
              radius="rounded-[22px]"
              pad="p-5 lg:p-6"
              className="v2-fiber-grain v2-thread-edge mt-6 lg:mt-4"
              style={{ boxShadow: SOFT_SHADOW }}
            >
              <span className="inline-flex items-center gap-2 font-body2 font-semibold text-[10px] uppercase tracking-[0.14em] text-v2-brown/75">
                <span aria-hidden="true">📈</span> Memory insights
              </span>

              <ul className="mt-4 divide-y divide-v2-brown/6">
                {INSIGHTS.map((item) => (
                  <li key={item.text} className="flex items-start gap-2.5 py-2.5 first:pt-0 last:pb-0">
                    <span
                      className={`w-6 h-6 rounded-md ${item.tint} flex items-center justify-center text-[11px] shrink-0`}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <span className="font-body2 text-[13px] text-v2-text/75 leading-snug">{item.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 mt-5 font-body2 text-[13px] text-v2-brown underline underline-offset-4 decoration-v2-brown/35 hover:text-v2-text transition-colors"
              >
                View all insights →
              </a>
            </Card2>
          </motion.div>
        </div>

        {/* Closing ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="v2-fiber-grain relative mt-12 lg:mt-14 rounded-[22px] bg-v2-rose/70 overflow-hidden px-6 lg:px-10 py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-4"
          style={{ boxShadow: "0 18px 40px -30px rgba(111,87,72,0.28)" }}
        >
          {/* Notebook margin line — the same ruled-edge cue as the page's
              own left margin, echoed inside this one card */}
          <span
            className="hidden lg:block absolute left-10 top-3 bottom-3 w-px bg-v2-brown/12"
            aria-hidden="true"
          />

          <div className="flex items-center gap-3 relative z-10">
            <span
              className="w-5 h-5 rounded-full shrink-0"
              style={{
                background: "linear-gradient(135deg, #E8D2A6, #C9A463)",
                border: "2px solid #B5926A",
                boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5), 0 1px 3px rgba(111,87,72,0.18)",
              }}
              aria-hidden="true"
            />
            <p className="font-body2 text-sm text-v2-text/80">
              Sakhi quietly holds space for the moments you might forget.
            </p>
            <PressedFlower size={30} rotate={-8} className="hidden md:block opacity-60" />
          </div>

          <div className="relative z-10">
            {/* Washi tape, pinning the note down */}
            <span
              className="hidden md:block absolute -top-2.5 left-1/2 -translate-x-1/2 w-9 h-4 bg-v2-butter/70 rotate-[-6deg] z-20"
              style={{ boxShadow: "0 1px 2px rgba(111,87,72,0.15)" }}
              aria-hidden="true"
            />
            <HandwrittenNote
              text={
                <>
                  Small steps.
                  <br />
                  Quiet courage.
                  <br />
                  Big change.
                </>
              }
              tint="bg-v2-warmwhite/90"
              rotate={-1}
            />
          </div>

          <div className="text-center lg:text-right relative z-10">
            <a
              href="#start"
              className="inline-flex items-center gap-2 bg-v2-text text-v2-warmwhite font-body2 font-medium text-sm px-6 py-3 rounded-full hover:bg-v2-brown transition-colors"
            >
              🎙 Talk to Sakhi
            </a>
            <p className="font-body2 text-[11px] text-v2-text/60 mt-2">
              Voice-first · Your language · Always learning
            </p>
          </div>

          {/* Textile swatch, peeking from the corner — a layered pair of
              tilted pastel fragments rather than one flat block, with a
              soft fold shadow along its inner edge */}
          <div className="hidden lg:block absolute -top-5 -right-5 w-24 h-28" aria-hidden="true">
            <div
              className="absolute inset-0 rounded-xl bg-v2-lavender/40 rotate-[10deg]"
              style={{ boxShadow: "0 10px 22px -16px rgba(111,87,72,0.28)" }}
            />
            <div
              className="absolute inset-1 rounded-xl bg-v2-peach/45 rotate-[3deg]"
              style={{ boxShadow: "inset 6px 6px 10px -8px rgba(111,87,72,0.25)" }}
            />
          </div>

          {/* Postage stamp — a perforated square, not a photo */}
          <div
            className="hidden lg:flex absolute bottom-3 right-24 w-11 h-11 rounded-[3px] bg-v2-warmwhite items-center justify-center text-base"
            style={{
              border: "1px dashed rgba(111,87,72,0.35)",
              outline: "5px solid rgba(255,252,248,0.9)",
              boxShadow: "0 6px 14px -10px rgba(111,87,72,0.25)",
            }}
            aria-hidden="true"
          >
            🌸
          </div>
        </motion.div>
      </div>
    </section>
  );
}
