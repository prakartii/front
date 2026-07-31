import { useState } from "react";
import Card2 from "../Card2";
import bookmarkOutline from "../../../assets/v2/opportunity-engine/action-bookmark-outline.png";
import bookmarkFilled from "../../../assets/v2/opportunity-engine/action-bookmark-filled.png";
import arrowIcon from "../../../assets/v2/opportunity-engine/action-arrow.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const BADGE_TONE = {
  amber: "bg-v2-butter/70 text-[#8B6A1F]",
  sage: "bg-v2-sage/70 text-[#2F6B3B]",
  powder: "bg-v2-powder/70 text-[#2E5F82]",
  coral: "bg-v2-coral/40 text-[#B5453A]",
};

export default function OpportunityCard({ icon, title, badge, badgeTone = "amber", description, meta, ctaLabel, delay = 0 }) {
  const [saved, setSaved] = useState(false);

  return (
    <Card2 tint="bg-v2-warmwhite" radius="rounded-[22px]" pad="p-5" lift {...fadeUp(delay)}>
      <div className="flex items-start gap-3.5">
        <img src={icon} alt="" aria-hidden="true" className="w-12 h-12 object-contain shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="font-display2 font-semibold text-v2-text text-[15px] leading-snug">{title}</p>
            <span className={`font-body2 font-semibold text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap ${BADGE_TONE[badgeTone]}`}>
              {badge}
            </span>
          </div>
          <p className="font-body2 text-[12.5px] text-v2-text/60 mt-1.5 leading-snug">{description}</p>
        </div>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          className="shrink-0 -mt-1 -mr-1 p-1.5"
          aria-label={saved ? "Remove from saved opportunities" : "Save this opportunity"}
        >
          <img src={saved ? bookmarkFilled : bookmarkOutline} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-3 mt-4 pt-4 border-t border-v2-text/8">
        <div className="flex items-center gap-5 min-w-0">
          {meta.map((m) => (
            <div key={m.label} className="min-w-0">
              <p className="font-body2 text-[10.5px] text-v2-text/40 whitespace-nowrap">{m.label}</p>
              <p className="font-body2 font-semibold text-[12.5px] text-v2-text mt-0.5 whitespace-nowrap">{m.value}</p>
            </div>
          ))}
        </div>
        <a
          href="#opportunities"
          className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[12.5px] text-v2-text border border-v2-text/15 rounded-full px-4 py-2 hover:border-v2-text/35 transition-colors shrink-0"
        >
          {ctaLabel}
          <img src={arrowIcon} alt="" aria-hidden="true" className="w-3 h-3 object-contain" />
        </a>
      </div>
    </Card2>
  );
}
