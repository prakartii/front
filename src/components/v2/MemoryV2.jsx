import { motion } from "framer-motion";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import Card2 from "./Card2";
import CraftIcon from "./CraftIcon";
import PressedFlower from "./PressedFlower";
import PillButton from "./PillButton";
import notebookStack from "../../assets/v2/notebook-stack.jpg";
import textileSwatch from "../../assets/v2/textile-swatch.jpg";

const RECENT_MEMORIES = [
  { title: "Price change worked", date: "June 12", detail: "Sales increased by 27%", tag: "Pricing", dot: "#E6A489", flower: false },
  { title: "Wholesale enquiry", date: "June 10", detail: "Buyer from Bengaluru", tag: "Leads", dot: "#A9D3E8", flower: true },
  { title: "Fabric supplier delayed", date: "June 8", detail: "Rescheduled delivery to June 14", tag: "Operations", dot: "#E6A489", flower: true },
  { title: "Raksha Bandhan boost", date: "June 5", detail: "Orders increased across 3 products", tag: "Festival", dot: "#BBD0B2", flower: true },
];

const INSIGHTS = [
  { icon: "🎇", text: "Diwali orders predicted to rise by 38% this month", tint: "bg-v2-peach" },
  { icon: "🧵", text: "Cotton prices falling in Gujarat mandi", tint: "bg-v2-sage" },
  { icon: "🗓️", text: "New exhibition in Jaipur from 18–21 June", tint: "bg-v2-powder" },
  { icon: "🏛️", text: "Government subsidy updated", tint: "bg-v2-lavender" },
];

// A real photograph of a tied stack of fabric-bound notebooks, resting in
// a woven tray — replaces the earlier CSS-built stand-in.
function BookStack() {
  return (
    <div className="relative w-full h-[130px] rounded-xl overflow-hidden" aria-hidden="true">
      <img
        src={notebookStack}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ boxShadow: "0 4px 10px -6px rgba(111,87,72,0.22)" }}
      />
    </div>
  );
}

// The real block-print textile photograph, standing in for the earlier
// CSS-dot approximation — draped large across the card's top-right corner
// so it reads as the visual anchor of the whole cluster, the way it does
// in the reference, not a contained thumbnail.
function FabricSwatch() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block absolute -top-7 -right-5 bottom-4 w-[190px] xl:w-[230px] rotate-[11deg] z-10 pointer-events-none"
      aria-hidden="true"
    >
      <img
        src={textileSwatch}
        alt=""
        className="w-full h-full object-cover rounded-[14px]"
        style={{ boxShadow: "0 16px 34px -22px rgba(111,87,72,0.3)" }}
      />
      <div
        className="absolute top-[300px] -left-6 w-16 h-16 rounded-lg bg-v2-cream flex flex-col items-center justify-center -rotate-[11deg] z-30"
        style={{ boxShadow: "0 6px 14px -10px rgba(111,87,72,0.25)" }}
      >
        <PressedFlower size={22} rotate={0} />
        <span className="font-body2 text-[7px] tracking-[0.08em] text-v2-brown/70 mt-0.5">2026 · INDIA</span>
      </div>
    </motion.div>
  );
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

/**
 * SAKHI V2 — Memory's second half, once the timeline above has told the
 * day's story: one framed handmade-paper strip holding a closing line, a
 * Recent Memories feed, a What's Happening digest, a textile swatch, and
 * a closing ribbon with the voice CTA.
 */
export default function MemoryV2() {
  const { t } = useLanguage();

  return (
    <section id="memory" className="relative z-0 px-5 lg:px-10 pb-20 lg:pb-28">
      <div className="max-w-[1360px] mx-auto">
        <div
          className="v2-fiber-grain v2-thread-edge relative rounded-[28px] bg-v2-warmwhite overflow-hidden lg:overflow-visible"
          style={{ boxShadow: "0 14px 34px -22px rgba(111,87,72,0.2)" }}
        >
          <div className="flex">
            {/* The book's own bound edge — a narrow decorative spine for
                this card specifically, not the page-level margin */}
            <div className="hidden lg:flex flex-col items-center gap-4 w-12 py-8 bg-v2-peach/25 border-r border-v2-brown/8 shrink-0">
              <CraftIcon variant="clip" size={16} color="#6F5748" />
              <div className="flex-1 w-px bg-v2-brown/15" />
              <PressedFlower size={22} rotate={-4} />
              <span className="w-1.5 h-1.5 rounded-full bg-v2-brown/25" />
              <span className="w-1.5 h-1.5 rounded-full bg-v2-brown/25" />
              <span className="w-1.5 h-1.5 rounded-full bg-v2-brown/25" />
            </div>

            <div className="grid lg:grid-cols-[1fr_2.1fr_0.8fr_0.8fr] gap-8 lg:gap-10 p-8 lg:p-12 flex-1">
              {/* Closing line + book stack */}
              <motion.div {...fadeUp(0)}>
                <span className="inline-block text-lg" aria-hidden="true">📎</span>
                <p className="font-display2 italic text-v2-text text-lg leading-snug mt-2 mb-6">
                  {t("memory.closing")}
                </p>
                <Card2 tint="bg-v2-cream" radius="rounded-2xl" pad="p-4" className="relative rotate-[-1deg]">
                  <BookStack />
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-sm bg-v2-rose rotate-12"
                    style={{ boxShadow: "0 3px 8px -4px rgba(111,87,72,0.2)" }}
                    aria-hidden="true"
                  />
                </Card2>
              </motion.div>

              {/* Recent Memories */}
              <motion.div {...fadeUp(0.08)}>
                <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown/70">
                  Recent Memories
                </span>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  {RECENT_MEMORIES.map((m, i) => (
                    <Card2
                      key={m.title}
                      tint="bg-v2-cream"
                      radius="rounded-xl"
                      pad="p-5"
                      className="v2-thread-edge relative flex flex-col justify-between min-h-[164px]"
                    >
                      {m.flower && (
                        <PressedFlower size={20} rotate={6} delay={0.1 * i} className="absolute top-3 right-3 opacity-90" />
                      )}
                      <div>
                        <p className="font-display2 text-sm text-v2-text leading-snug">{m.title}</p>
                        <p className="font-body2 text-[11px] text-v2-text/50 mt-1">{m.date}</p>
                        <p className="font-body2 text-xs text-v2-text/70 mt-2 leading-snug">{m.detail}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 mt-3 font-body2 text-[10px] uppercase tracking-[0.06em] text-v2-brown/70">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: m.dot }} />
                        {m.tag}
                      </span>
                    </Card2>
                  ))}
                </div>
              </motion.div>

              {/* What's Happening */}
              <motion.div {...fadeUp(0.16)}>
                <span className="font-body2 font-semibold text-[11px] uppercase tracking-[0.14em] text-v2-brown/70">
                  What's Happening
                </span>
                <ul className="mt-4 space-y-4">
                  {INSIGHTS.map((item) => (
                    <li key={item.text} className="flex items-start gap-2">
                      <span
                        className={`w-6 h-6 rounded-lg ${item.tint} flex items-center justify-center text-[11px] shrink-0`}
                        style={{ boxShadow: "0 3px 6px -4px rgba(111,87,72,0.18)" }}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </span>
                      <span className="font-body2 text-xs text-v2-text/75 leading-snug">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-block mt-5 font-body2 text-xs text-v2-brown underline underline-offset-4 decoration-v2-brown/40 hover:text-v2-text transition-colors"
                >
                  View all insights ↓
                </a>
              </motion.div>

              {/* Textile swatch column — reserves the grid track; the
                  photograph itself is a bled, oversized sibling below so it
                  can spill past this card as the section's visual anchor */}
              <div className="hidden lg:block" aria-hidden="true" />
            </div>
          </div>

          <FabricSwatch />

          {/* Closing ribbon */}
          <motion.div
            {...fadeUp(0.32)}
            className="relative z-20 bg-v2-rose/70 px-6 lg:px-10 lg:pr-44 xl:pr-52 py-3 lg:py-3.5 flex flex-col lg:flex-row items-center justify-between gap-3"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-5 h-5 rounded-full shrink-0"
                style={{
                  background: "linear-gradient(135deg, #E8D2A6, #C9A463)",
                  border: "2px solid #B5926A",
                  boxShadow: "inset 0 1px 2px rgba(255,255,255,0.5), 0 1px 3px rgba(111,87,72,0.18)",
                }}
                aria-hidden="true"
              />
              <p className="font-body2 text-sm text-v2-text/80">Sakhi quietly watches over the details you can't.</p>
              <PressedFlower size={34} rotate={-8} className="hidden md:block opacity-70" />
            </div>

            <div className="flex items-center gap-2 bg-v2-warmwhite/90 rounded-xl px-3.5 py-1.5 rotate-[-1deg]" style={{ boxShadow: "0 4px 10px -8px rgba(111,87,72,0.18)" }}>
              <PressedFlower size={16} rotate={0} />
              <p className="font-script text-sm text-v2-text/85 leading-none">
                You focus on creating.
                <br />
                Sakhi handles the rest.
              </p>
            </div>

            <div className="text-center lg:text-right">
              <PillButton href="#start">🎙 Talk to Sakhi</PillButton>
              <p className="font-body2 text-[11px] text-v2-text/60 mt-1.5">
                Voice-first · Your language · Always learning
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
