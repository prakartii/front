import Card2 from "../Card2";
import widgetAiRecommend from "../../../assets/v2/growth-intelligence/widget-ai-recommend.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

/* The asset sheet doesn't include a standalone package/box glyph (only the
   sparkle used in the card header), so this one icon is hand-drawn to match
   the reference's thin-line style. */
function PackageIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M4 8 12 12.5 20 8M12 12.5V21" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecommendationCard({ title, description, ctaLabel }) {
  return (
    <Card2 tint="bg-v2-warmwhite" radius="rounded-[22px]" pad="p-5" className="flex flex-col" {...fadeUp(0.25)}>
      <div className="flex items-center gap-2.5">
        <img src={widgetAiRecommend} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
        <p className="font-display2 font-semibold text-v2-text text-[15px]">AI Recommendation</p>
      </div>

      <div className="rounded-2xl bg-v2-peach/25 p-4 mt-4 flex-1">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-v2-peach/55 text-[#8B5E34] shrink-0"
          aria-hidden="true"
        >
          <PackageIcon className="w-5 h-5" />
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
