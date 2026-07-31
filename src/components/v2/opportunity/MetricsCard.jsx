import Card2 from "../Card2";
import metricOpportunities from "../../../assets/v2/opportunity-engine/metric-opportunities.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

/**
 * The lavender "found for you" summary strip — one headline stat on the
 * left, four category stats on the right, split by dashed rules the way
 * the reference does.
 */
export default function MetricsCard({ total, categories, metrics }) {
  return (
    <Card2
      tint="bg-gradient-to-br from-v2-lavender/45 to-v2-blush/30"
      radius="rounded-[26px]"
      pad="p-6 lg:p-7"
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.3fr_repeat(4,1fr)] gap-x-4 gap-y-6 items-center"
      {...fadeUp()}
    >
      <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex items-start gap-3.5 lg:border-r lg:border-dashed lg:border-v2-brown/20 lg:pr-5">
        <span
          className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-v2-warmwhite shrink-0"
          style={{ boxShadow: "0 8px 18px -10px rgba(111,87,72,0.35)" }}
        >
          <img src={metricOpportunities} alt="" aria-hidden="true" className="w-6 h-6 object-contain" />
        </span>
        <div>
          <p className="font-body2 text-[12.5px] text-v2-text/65 leading-snug">Opportunities found for you</p>
          <p className="font-display2 font-bold text-v2-text text-[30px] leading-none mt-1.5">{total}</p>
          <p className="font-body2 text-[11.5px] text-v2-text/50 mt-1">across {categories} categories</p>
        </div>
      </div>

      {metrics.map((m, i) => (
        <div
          key={m.label}
          className={`text-center ${i > 0 ? "lg:border-l lg:border-dashed lg:border-v2-brown/20" : ""}`}
        >
          <img src={m.icon} alt="" aria-hidden="true" className="w-11 h-11 mx-auto object-contain" />
          <p className="font-body2 font-bold text-v2-text text-[13px] mt-2">{m.label}</p>
          <p className="font-display2 font-bold text-v2-text text-[21px] mt-0.5">{m.value}</p>
          <p className="font-body2 text-[11px] text-v2-text/50 mt-0.5">{m.caption}</p>
        </div>
      ))}
    </Card2>
  );
}
