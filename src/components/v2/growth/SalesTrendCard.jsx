import Card2 from "../Card2";
import widgetSalesTrend from "../../../assets/v2/growth-intelligence/widget-sales-trend.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const DATA = [
  { label: "12 May", value: 6000 },
  { label: "13 May", value: 14000 },
  { label: "14 May", value: 9500 },
  { label: "15 May", value: 16000 },
  { label: "16 May", value: 18500 },
  { label: "17 May", value: 22500 },
  { label: "18 May", value: 27500 },
];

const MAX = 30000;
const W = 400;
const H = 170;
const PAD_L = 6;
const PAD_R = 6;

function toPoint(i, value) {
  const x = PAD_L + (i / (DATA.length - 1)) * (W - PAD_L - PAD_R);
  const y = H - (value / MAX) * H;
  return [x, y];
}

const linePoints = DATA.map((d, i) => toPoint(i, d.value));
const linePath = linePoints.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
const areaPath = `${linePath} L${linePoints[linePoints.length - 1][0].toFixed(1)},${H} L${linePoints[0][0].toFixed(1)},${H} Z`;

/**
 * The Sales Trend chart is hand-built SVG (7 static data points, no chart
 * library) using the asset sheet's exact line/dot/gradient-fill style
 * rather than a placeholder chart component.
 */
export default function SalesTrendCard() {
  return (
    <Card2 tint="bg-v2-warmwhite" radius="rounded-[22px]" pad="p-5" {...fadeUp(0.1)}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <img src={widgetSalesTrend} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
          <p className="font-display2 font-semibold text-v2-text text-[15px]">Sales Trend</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 font-body2 text-[12px] text-v2-text/75 border border-v2-text/12 rounded-full px-3 py-1.5 shrink-0"
        >
          Last 7 Days <span aria-hidden="true">⌄</span>
        </button>
      </div>

      <p className="font-body2 text-[12px] text-v2-text/50 mt-2">Your sales over the last 7 days</p>

      <div className="flex mt-4">
        <div className="flex flex-col justify-between text-[10.5px] text-v2-text/40 font-body2 pr-2 py-0.5" style={{ height: H }}>
          <span>30K</span>
          <span>20K</span>
          <span>10K</span>
          <span>0</span>
        </div>
        <div className="flex-1 min-w-0">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto block" preserveAspectRatio="none" style={{ height: H }}>
            <defs>
              <linearGradient id="gi-sales-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#BB894A" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#BB894A" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#gi-sales-fill)" />
            <path d={linePath} fill="none" stroke="#BB894A" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
            {linePoints.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="3.2" fill="#BB894A" stroke="#FFFCF8" strokeWidth="1.2" />
            ))}
          </svg>
          <div className="flex justify-between mt-1.5">
            {DATA.map((d) => (
              <span key={d.label} className="font-body2 text-[10px] text-v2-text/40">
                {d.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card2>
  );
}
