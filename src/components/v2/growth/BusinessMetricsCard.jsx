import Card2 from "../Card2";
import noteLargeImg from "../../../assets/v2/growth-intelligence/deco-note-large.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

/**
 * "Business at a glance" — four metric columns in a cream card, with the
 * quote note pinned over the card's right edge on wide screens only (below
 * that it drops into normal flow, the same responsive trick used for the
 * Financial Inclusion trusted-partners note, to avoid overlapping content
 * at tablet widths).
 */
export default function BusinessMetricsCard({ metrics }) {
  return (
    <div className="relative">
      <Card2 tint="bg-v2-cream" radius="rounded-[26px]" pad="p-6 lg:p-7" {...fadeUp()}>
        <p className="font-display2 font-semibold text-v2-text text-[16px]">Business at a glance</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-7 mt-6 min-[1400px]:pr-56">
          {metrics.map((m, i) => (
            <div key={m.label} className={i > 0 ? "sm:border-l sm:border-v2-text/10 sm:pl-5" : ""}>
              <img src={m.icon} alt="" aria-hidden="true" className="w-14 h-14 object-contain" />
              <p className="font-body2 text-[13px] text-v2-text/60 mt-3">{m.label}</p>
              <p className="font-display2 font-bold text-v2-text text-[23px] mt-1">{m.value}</p>
              <p className="font-body2 text-[12px] mt-1.5">
                <span style={{ color: "#16A34A" }} className="font-semibold">
                  ↑ {m.delta}
                </span>{" "}
                <span className="text-v2-text/40">vs last month</span>
              </p>
            </div>
          ))}
        </div>
      </Card2>

      <div className="mt-5 flex justify-center sm:justify-end min-[1400px]:mt-0 min-[1400px]:absolute min-[1400px]:top-1/2 min-[1400px]:right-7 min-[1400px]:-translate-y-1/2 min-[1400px]:z-10">
        <img
          src={noteLargeImg}
          alt={'"Small steps today, big growth tomorrow." — Sakhi'}
          className="w-full max-w-[290px] min-[1400px]:w-64 h-auto object-contain"
          style={{ filter: "drop-shadow(0 16px 34px rgba(111,87,72,0.25))" }}
        />
      </div>
    </div>
  );
}
