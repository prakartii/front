import Card2 from "../Card2";
import widgetTopProduct from "../../../assets/v2/growth-intelligence/widget-top-product.png";
import productFabric from "../../../assets/v2/growth-intelligence/product-fabric.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function TopProductCard() {
  return (
    <Card2 tint="bg-v2-warmwhite" radius="rounded-[22px]" pad="p-5" className="flex flex-col" {...fadeUp(0.15)}>
      <div className="flex items-center gap-2.5">
        <img src={widgetTopProduct} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
        <p className="font-display2 font-semibold text-v2-text text-[15px]">Top Selling Product</p>
      </div>
      <p className="font-body2 text-[12px] text-v2-text/50 mt-2">Based on this month&apos;s sales</p>

      <div className="flex items-center gap-4 mt-4">
        <img
          src={productFabric}
          alt="Handwoven Dupatta fabric"
          className="w-20 h-20 rounded-xl object-cover shrink-0"
          style={{ boxShadow: "0 8px 18px -10px rgba(111,87,72,0.35)" }}
        />
        <div className="min-w-0">
          <p className="font-display2 font-semibold text-v2-text text-[15px] leading-snug">Handwoven Dupatta</p>
          <p className="font-display2 font-bold text-v2-text text-[19px] mt-1">₹36,400</p>
          <span
            className="inline-flex items-center gap-1 font-body2 font-semibold text-[11px] px-2.5 py-1 rounded-full mt-2"
            style={{ background: "rgba(22,163,74,0.12)", color: "#16A34A" }}
          >
            ↑ 32% vs last month
          </span>
        </div>
      </div>

      <button
        type="button"
        className="inline-flex items-center justify-center gap-1.5 font-body2 font-semibold text-[13px] text-v2-text border border-v2-text/15 rounded-full px-4 py-2.5 mt-5 hover:border-v2-text/35 transition-colors"
      >
        View all products →
      </button>
    </Card2>
  );
}
