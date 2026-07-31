import { motion } from "framer-motion";
import Card2 from "../Card2";
import stepCompleted from "../../../assets/v2/growth-intelligence/step-completed.png";
import stepActive from "../../../assets/v2/growth-intelligence/step-active.png";
import noteSmallImg from "../../../assets/v2/growth-intelligence/deco-note-small.png";
import driedFlower from "../../../assets/v2/growth-intelligence/deco-right-dried-flower.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const MILESTONES = [
  { month: "Jan '25", label: "Getting started", status: "completed" },
  { month: "Feb '25", label: "First sales boost", status: "completed" },
  { month: "Mar '25", label: "More customers", status: "completed" },
  { month: "Apr '25", label: "Higher engagement", status: "completed" },
  { month: "May '25", label: "Strong growth", status: "active" },
];

export default function GrowthTimeline() {
  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-5">
      <Card2 tint="bg-v2-warmwhite" radius="rounded-[26px]" pad="p-6 lg:p-7" {...fadeUp(0.1)}>
        <p className="font-display2 font-semibold text-v2-text text-[16px]">Business Growth Journey</p>
        <p className="font-body2 text-[12.5px] text-v2-text/55 mt-1">Your progress over time</p>

        <div className="relative mt-8">
          <div className="flex items-start px-1 sm:px-2">
            {MILESTONES.map((m, i) => (
              <div key={m.month} className="relative flex-1 flex flex-col items-center text-center px-0.5">
                {i > 0 && (
                  <span
                    className="absolute top-4 right-1/2 w-full h-px bg-v2-text/15"
                    style={{ transform: "translateY(-50%)" }}
                    aria-hidden="true"
                  />
                )}
                <span
                  className="relative z-10 inline-flex items-center justify-center w-8 h-8 rounded-full overflow-hidden bg-v2-warmwhite shrink-0"
                  style={{ boxShadow: "0 4px 10px -6px rgba(111,87,72,0.4)" }}
                >
                  <img
                    src={m.status === "active" ? stepActive : stepCompleted}
                    alt={m.status === "active" ? "Current milestone" : "Completed milestone"}
                    className="w-full h-full object-cover"
                  />
                </span>
                <p className="font-body2 font-semibold text-v2-text text-[11.5px] sm:text-[13px] mt-3 whitespace-nowrap">
                  {m.month}
                </p>
                <p
                  className={`font-body2 text-[10.5px] sm:text-[12px] mt-0.5 leading-snug ${
                    m.status === "active" ? "font-semibold text-v2-text" : "text-v2-text/55"
                  }`}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card2>

      {/* Motivational note — uses the actual taped-paper texture asset as
          the card surface (not a flat tint) with our own text laid on top. */}
      <motion.div
        className="relative rounded-[22px] overflow-hidden min-h-[150px]"
        style={{ boxShadow: "0 24px 60px -28px rgba(111,87,72,0.35)" }}
        {...fadeUp(0.2)}
      >
        <img src={noteSmallImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 flex items-center gap-2 h-full px-5 py-6">
          <div className="min-w-0 flex-1">
            <p className="font-script text-[19px] leading-snug text-ink-900">
              Keep going, you&apos;re
              <br />
              building something
              <br />
              beautiful. <span style={{ color: "#BB894A" }}>♡</span>
            </p>
          </div>
          <img
            src={driedFlower}
            alt=""
            aria-hidden="true"
            className="hidden sm:block w-16 h-auto object-contain shrink-0 opacity-95"
          />
        </div>
      </motion.div>
    </div>
  );
}
