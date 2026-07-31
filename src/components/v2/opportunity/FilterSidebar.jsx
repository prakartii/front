import { useState } from "react";
import Card2 from "../Card2";
import filterIcon from "../../../assets/v2/opportunity-engine/sidebar-filter.png";
import lavenderSprig from "../../../assets/v2/opportunity-engine/band-lavender-sprig.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const CATEGORIES = [
  { key: "sales", label: "Sales", color: "#D6A93B" },
  { key: "schemes", label: "Schemes", color: "#5B8C5A" },
  { key: "learning", label: "Learning", color: "#4C86C9" },
  { key: "partnerships", label: "Partnerships", color: "#C97D8A" },
];

const TIMEFRAMES = [
  { key: "week", label: "This week" },
  { key: "month", label: "This month" },
  { key: "quarter", label: "This quarter" },
];

export default function FilterSidebar() {
  const [categories, setCategories] = useState({ sales: true, schemes: true, learning: true, partnerships: true });
  const [timeframe, setTimeframe] = useState("week");

  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[22px]"
      pad="p-5"
      className="relative overflow-visible"
      {...fadeUp(0.1)}
    >
      <span
        className="hidden sm:block absolute -top-2.5 -left-3 w-11 h-6 bg-v2-peach/55 rotate-[-9deg] rounded-[2px] z-0"
        style={{ boxShadow: "0 2px 4px rgba(111,87,72,0.15)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center justify-between">
        <span className="font-body2 font-bold text-[11px] uppercase tracking-[0.1em] text-v2-text/75">Filter by</span>
        <img src={filterIcon} alt="" aria-hidden="true" className="w-4 h-4 object-contain opacity-70" />
      </div>

      <label className="relative z-10 flex items-center gap-2.5 mt-4 cursor-pointer">
        <input type="radio" name="oe-sort" defaultChecked className="w-3.5 h-3.5 accent-[#8B7FD1]" />
        <span className="font-body2 text-[12.5px] text-v2-text/80">Relevance for me</span>
      </label>

      <p className="relative z-10 font-body2 font-semibold text-[11px] text-v2-text/45 mt-5">Category</p>
      <div className="relative z-10 flex flex-col gap-2.5 mt-2.5">
        {CATEGORIES.map((c) => (
          <label key={c.key} className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="checkbox"
              checked={categories[c.key]}
              onChange={() => setCategories((prev) => ({ ...prev, [c.key]: !prev[c.key] }))}
              className="w-3.5 h-3.5 rounded accent-[#8B7FD1]"
            />
            <span className="w-2.5 h-2.5 rounded-[3px] shrink-0" style={{ background: c.color }} aria-hidden="true" />
            <span className="font-body2 text-[12.5px] text-v2-text/80">{c.label}</span>
          </label>
        ))}
      </div>

      <p className="relative z-10 font-body2 font-semibold text-[11px] text-v2-text/45 mt-5">Time to act</p>
      <div className="relative z-10 flex flex-col gap-2.5 mt-2.5">
        {TIMEFRAMES.map((t) => (
          <label key={t.key} className="flex items-center gap-2.5 cursor-pointer">
            <input
              type="radio"
              name="oe-timeframe"
              checked={timeframe === t.key}
              onChange={() => setTimeframe(t.key)}
              className="w-3.5 h-3.5 accent-[#8B7FD1]"
            />
            <span className="font-body2 text-[12.5px] text-v2-text/80">{t.label}</span>
          </label>
        ))}
      </div>

      <img
        src={lavenderSprig}
        alt=""
        aria-hidden="true"
        className="absolute bottom-3 right-3 w-14 h-auto object-contain opacity-90 pointer-events-none"
      />
    </Card2>
  );
}
