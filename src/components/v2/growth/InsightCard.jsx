import Card2 from "../Card2";
import widgetKeyInsight from "../../../assets/v2/growth-intelligence/widget-key-insight.png";
import statusPositiveGrowth from "../../../assets/v2/growth-intelligence/status-positive-growth.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function InsightCard({ title, description, ctaLabel }) {
  return (
    <Card2 tint="bg-v2-warmwhite" radius="rounded-[22px]" pad="p-5" className="flex flex-col" {...fadeUp(0.2)}>
      <div className="flex items-center gap-2.5">
        <img src={widgetKeyInsight} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
        <p className="font-display2 font-semibold text-v2-text text-[15px]">Key Insight</p>
      </div>

      <div className="rounded-2xl bg-v2-sage/25 p-4 mt-4 flex-1">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-v2-sage/60 shrink-0"
          aria-hidden="true"
        >
          <img src={statusPositiveGrowth} alt="" aria-hidden="true" className="w-5 h-5 object-contain" />
        </span>
        <p className="font-display2 font-semibold text-v2-text text-[15px] leading-snug mt-3">{title}</p>
        <p className="font-body2 text-[12.5px] text-v2-text/60 mt-2 leading-snug">{description}</p>
        <a
          href="#growth"
          className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[12.5px] text-v2-text mt-4 hover:gap-2.5 transition-all"
        >
          {ctaLabel} →
        </a>
      </div>
    </Card2>
  );
}
