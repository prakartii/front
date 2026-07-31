import Card2 from "../Card2";
import { BulbIcon, SparkleStarIcon } from "./icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function SmartSuggestionCard({ description, ctaLabel }) {
  return (
    <Card2
      tint="bg-v2-warmwhite"
      radius="rounded-[22px]"
      pad="p-5 lg:p-6"
      className="flex flex-col h-full"
      {...fadeUp(0.2)}
    >
      <div className="flex items-center gap-2">
        <BulbIcon className="w-5 h-5 text-terracotta" />
        <p className="font-display2 font-semibold text-v2-text text-[16px]">Smart suggestions</p>
      </div>
      <p className="font-body2 text-[12.5px] text-v2-text/55 mt-1">Sakhi thinks you should</p>

      <div className="rounded-2xl bg-v2-peach/20 p-4 mt-5 flex-1 flex items-start gap-3">
        <span
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-v2-peach/45 text-[#8B5E34] shrink-0"
          aria-hidden="true"
        >
          <SparkleStarIcon className="w-5 h-5" />
        </span>
        <p className="font-body2 font-medium text-v2-text text-[13.5px] leading-relaxed">{description}</p>
      </div>

      <a
        href="#companion"
        className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[13px] text-v2-text mt-5 hover:gap-2.5 transition-all"
      >
        {ctaLabel} →
      </a>
    </Card2>
  );
}
