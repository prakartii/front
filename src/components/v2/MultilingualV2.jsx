import { motion } from "framer-motion";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import multilingualMap from "../../assets/v2/paper/multilingual-map.png";
import stampFlowers from "../../assets/v2/paper/stamp-flowers.png";
import pinnedTextileLavender from "../../assets/v2/paper/pinned-textile-lavender.png";

const FEATURES = [
  {
    icon: "💬",
    title: "10+ Indian languages",
    desc: "Thoughtfully crafted for every voice.",
    tint: "bg-v2-lavender/45",
    iconTint: "bg-v2-lavender",
  },
  {
    icon: "🌐",
    title: "Context, not word by word",
    desc: "Meaning-first communication.",
    tint: "bg-v2-peach/40",
    iconTint: "bg-v2-peach",
  },
  {
    icon: "🌸",
    title: "Cultural intelligence",
    desc: "Understands nuances, idioms & emotions.",
    tint: "bg-v2-blush/45",
    iconTint: "bg-v2-blush",
  },
  {
    icon: "👥",
    title: "Always evolving",
    desc: "Learns with every conversation.",
    tint: "bg-v2-powder/45",
    iconTint: "bg-v2-powder",
  },
];

/**
 * SAKHI V2 — Multilingual Experience, editorial-museum-spread pass. Left:
 * copy + a 2x2 feature grid + one full-width summary card. Right: the
 * approved final map illustration (language bubbles, notebook, stamp,
 * textile all baked into the artwork itself) — rendered directly, not
 * recreated in CSS/SVG.
 */
export default function MultilingualV2() {
  const { t } = useLanguage();

  return (
    <section
      id="multilingual"
      className="v2-weave-ground relative bg-v2-lavender/15 py-16 lg:py-20 px-5 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[50vh]"
        style={{
          background: "radial-gradient(ellipse 900px 460px at 50% 0%, rgba(255,255,255,0.5), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 xl:gap-16 items-start">
          {/* Left — copy + features */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] text-v2-brown bg-v2-lavender/60 px-3.5 py-1.5 rounded-full">
              {t("multilingual.eyebrow")}
            </span>

            <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.7rem,1.1rem+2vw,2.65rem)] leading-[1.16] mt-5">
              She speaks the way
              <br />
              <span className="text-[#8B7FD1]">you actually think.</span>
            </h2>

            <p className="font-body2 text-v2-text/65 text-[15px] mt-4 max-w-sm">{t("multilingual.subhead")}</p>

            <div className="flex items-center gap-3 mt-6">
              <span className="flex-1 h-px bg-v2-brown/12" aria-hidden="true" />
              <span className="text-v2-coral text-xs" aria-hidden="true">
                ♥
              </span>
              <span className="flex-1 h-px bg-v2-brown/12" aria-hidden="true" />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              {FEATURES.map((f) => (
                <div key={f.title} className={`rounded-xl p-4 ${f.tint}`}>
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg text-base ${f.iconTint}`}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <p className="font-display2 font-semibold text-v2-text text-[13px] mt-2.5 leading-snug">
                    {f.title}
                  </p>
                  <p className="font-body2 text-[11px] text-v2-text/60 mt-1 leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-v2-lavender/30 p-4 mt-3">
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-v2-blush text-base shrink-0"
                aria-hidden="true"
              >
                💌
              </span>
              <div>
                <p className="font-display2 font-semibold text-v2-text text-[13px]">
                  Your language. Your rhythm. Your Sakhi.
                </p>
                <p className="font-body2 text-[11px] text-v2-text/60 mt-0.5">
                  Because the right words feel like home.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — the final map illustration */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-4 lg:mt-0"
          >
            <div
              className="relative overflow-hidden bg-[#F4EEE1]"
              style={{
                borderRadius: "28px 20px 30px 22px",
                boxShadow: "0 24px 56px -30px rgba(111,87,72,0.3)",
              }}
            >
              <img
                src={multilingualMap}
                alt="An illustrated postal map showing Sakhi greeting her in English, Hindi, Bengali, Marathi, Gujarati, Tamil, Telugu, and Kannada, each connected by a dotted thread to India."
                width={1536}
                height={1024}
                loading="eager"
                decoding="sync"
                className="block w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Closing ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="v2-fiber-grain relative mt-16 lg:mt-20 rounded-[22px] overflow-hidden px-6 lg:px-10 py-4 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-4"
          style={{
            background: "linear-gradient(120deg, #E4C7D2 0%, #DCC4D6 100%)",
            boxShadow: "0 18px 40px -30px rgba(111,87,72,0.28)",
          }}
        >
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
            <svg width="34" height="30" viewBox="0 0 34 30" className="hidden md:block opacity-45" aria-hidden="true">
              <path
                d="M17,29 C17,20 15,13 11,7"
                stroke="#6F5748"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M12,17 C9,15 7,15.5 5,17.5 M13,12 C10,10.5 8,11 6.5,12.5"
                stroke="#6F5748"
                strokeWidth="0.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
            </svg>
          </div>

          <div className="relative z-10">
            <span
              className="hidden md:block absolute -top-2.5 left-1/2 -translate-x-1/2 w-9 h-4 bg-v2-butter/70 rotate-[-6deg] z-20"
              style={{ boxShadow: "0 1px 2px rgba(111,87,72,0.15)" }}
              aria-hidden="true"
            />
            <div
              className="inline-block rounded-2xl bg-v2-warmwhite/90 px-4 py-3 rotate-[-1deg]"
              style={{ boxShadow: "0 14px 30px -16px rgba(43,38,32,0.3)" }}
            >
              <p className="font-script text-xl leading-snug text-ink-900">
                Small steps.
                <br />
                Quiet courage.
                <br />
                Big change.
              </p>
            </div>
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

          <img
            src={stampFlowers}
            alt=""
            className="hidden lg:block absolute bottom-3 right-24 w-11 rotate-[-4deg] pointer-events-none select-none"
            aria-hidden="true"
          />
          <img
            src={pinnedTextileLavender}
            alt=""
            className="hidden lg:block absolute -top-3 -right-4 bottom-0 w-24 rotate-[5deg] pointer-events-none select-none"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
