import { motion } from "framer-motion";
import Card2 from "./Card2";
import PressedFlower from "./PressedFlower";
import MorningBriefCard from "./companion/MorningBriefCard";
import VoiceCompanionCard from "./companion/VoiceCompanionCard";
import DailyBriefingCard from "./companion/DailyBriefingCard";
import SmartSuggestionCard from "./companion/SmartSuggestionCard";
import ReminderCard from "./companion/ReminderCard";
import EditorialFooter from "./companion/EditorialFooter";

import noteSmallImg from "../../assets/v2/growth-intelligence/deco-note-small.png";
import driedFlower from "../../assets/v2/growth-intelligence/deco-right-dried-flower.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const REMINDERS = [
  { day: "16", month: "May", title: "Follow up with Meera Sharma", time: "10:30 AM" },
  { day: "18", month: "May", title: "Rakhi Festival Campaign", time: "All day" },
];

/**
 * SAKHI V2 — AI Business Companion. Top: intro copy + botanical/note on the
 * left, the wide "Good morning" brief in the middle, the voice companion on
 * the right. Middle: three update cards plus a decorative botanical paper
 * card. Bottom: the editorial closing band.
 */
export default function BusinessCompanionV2() {
  return (
    <section
      id="companion"
      className="v2-weave-ground relative bg-v2-cream py-16 lg:py-14 px-5 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background: "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto">
        {/* ---------------- Top row ---------------- */}
        <div className="grid xl:grid-cols-[330px_1fr_360px] gap-6 lg:gap-7 items-stretch">
          {/* Left — intro copy + botanical + note */}
          <motion.div className="flex flex-col" {...fadeUp()}>
            <span
              className="inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full self-start"
              style={{ color: "#8B5E34", background: "rgba(187,137,74,0.14)" }}
            >
              AI Business Companion
            </span>

            <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.6rem,1.1rem+1.6vw,2.15rem)] leading-[1.16] mt-5 relative">
              Sakhi is here.
              <br />
              <span style={{ color: "#BB894A" }}>Every day, for you.</span>
              <span
                className="absolute -right-1 top-1 text-terracotta/50 text-sm hidden sm:inline"
                aria-hidden="true"
              >
                ♡
              </span>
            </h2>

            <p className="font-body2 text-v2-text/65 text-[14px] mt-4 leading-relaxed max-w-xs">
              Your AI companion that listens, remembers and helps you grow—one step at a time.
            </p>

            <div className="flex items-start gap-3 mt-8">
              <PressedFlower
                size={66}
                petal="#E3C8A3"
                accent="#D1AD7C"
                stem="#8B6A4A"
                rotate={-10}
                className="shrink-0 mt-2 hidden sm:block"
              />
              <div
                className="relative flex-1 rounded-lg bg-v2-cream px-6 pt-6 pb-5"
                style={{ boxShadow: "0 18px 34px -20px rgba(111,87,72,0.4)" }}
              >
                <span
                  className="absolute inset-y-2 left-0 w-2 opacity-40"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(111,87,72,0.4) 1.4px, transparent 1.4px)",
                    backgroundSize: "6px 10px",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute inset-y-2 right-0 w-2 opacity-40"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(111,87,72,0.4) 1.4px, transparent 1.4px)",
                    backgroundSize: "6px 10px",
                  }}
                  aria-hidden="true"
                />
                <span
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10"
                  style={{
                    background: "linear-gradient(135deg,#C9A463,#9C7B4E)",
                    boxShadow: "0 2px 4px rgba(43,38,32,0.3), inset 0 1px 1px rgba(255,255,255,0.4)",
                  }}
                  aria-hidden="true"
                />
                <p className="font-script text-[17px] leading-snug text-ink-900 px-2">
                  You focus on
                  <br />
                  your dreams.
                  <br />
                  Sakhi handles
                  <br />
                  the rest. <span style={{ color: "#BB894A" }}>♡</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Center — Good morning brief */}
          <MorningBriefCard />

          {/* Right — Voice companion */}
          <VoiceCompanionCard />
        </div>

        {/* ---------------- Second row ---------------- */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-[1.25fr_1.05fr_1.15fr_0.62fr] gap-5 mt-6">
          <DailyBriefingCard />
          <SmartSuggestionCard
            description="Demand for Handloom Dupatta may increase next week. Consider increasing stock."
            ctaLabel="View all suggestions"
          />
          <ReminderCard items={REMINDERS} />

          <motion.div className="relative hidden xl:block" {...fadeUp(0.3)}>
            <img
              src={noteSmallImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover rounded-[18px]"
              style={{ boxShadow: "0 20px 44px -26px rgba(111,87,72,0.35)" }}
            />
            <img
              src={driedFlower}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 m-auto w-2/3 h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* ---------------- Bottom band ---------------- */}
        <div className="mt-8">
          <EditorialFooter />
        </div>
      </div>
    </section>
  );
}
