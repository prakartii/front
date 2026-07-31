import { motion } from "framer-motion";
import BusinessMetricsCard from "./growth/BusinessMetricsCard";
import SalesTrendCard from "./growth/SalesTrendCard";
import TopProductCard from "./growth/TopProductCard";
import InsightCard from "./growth/InsightCard";
import RecommendationCard from "./growth/RecommendationCard";
import GrowthTimeline from "./growth/GrowthTimeline";

import metricTotalSales from "../../assets/v2/growth-intelligence/metric-total-sales.png";
import metricOrders from "../../assets/v2/growth-intelligence/metric-orders.png";
import metricProfit from "../../assets/v2/growth-intelligence/metric-profit.png";
import metricCustomers from "../../assets/v2/growth-intelligence/metric-customers.png";
import deceoLeftLeaf from "../../assets/v2/growth-intelligence/deco-left-leaf.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const METRICS = [
  { icon: metricTotalSales, label: "Total Sales (This Month)", value: "₹1,24,560", delta: "18%" },
  { icon: metricOrders, label: "Orders", value: "320", delta: "12%" },
  { icon: metricProfit, label: "Profit", value: "₹32,450", delta: "15%" },
  { icon: metricCustomers, label: "Customers", value: "210", delta: "9%" },
];

/**
 * SAKHI V2 — Growth Intelligence. Top: heading + botanical flourish on the
 * left, the "Business at a glance" metrics card (with its pinned quote
 * note) on the right. Middle: four equal insight/action cards. Bottom: the
 * horizontal growth-journey timeline paired with a taped motivational note.
 */
export default function GrowthIntelligenceV2() {
  return (
    <section
      id="growth"
      className="v2-weave-ground relative bg-v2-butter/12 py-16 lg:py-12 px-5 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background: "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto">
        {/* ---------------- Top row: heading + business-at-a-glance ---------------- */}
        <div className="grid xl:grid-cols-[360px_1fr] gap-8 lg:gap-10 items-start">
          <motion.div className="relative" {...fadeUp()}>
            <span
              className="inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full"
              style={{ color: "#8B5E34", background: "rgba(187,137,74,0.14)" }}
            >
              Growth Intelligence
            </span>

            <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.7rem,1.1rem+1.8vw,2.35rem)] leading-[1.16] mt-5">
              Understand today.
              <br />
              <span style={{ color: "#BB894A" }}>Grow tomorrow.</span>
            </h2>

            <p className="font-body2 text-v2-text/65 text-[14.5px] mt-4 leading-relaxed max-w-sm">
              AI-powered insights to help you make smarter decisions and grow your business with confidence.
            </p>

            <img
              src={deceoLeftLeaf}
              alt=""
              aria-hidden="true"
              className="hidden lg:block w-28 h-auto object-contain opacity-70 mt-0"
            />
          </motion.div>

          <BusinessMetricsCard metrics={METRICS} />
        </div>

        {/* ---------------- Second row: four insight/action cards ---------------- */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-2">
          <SalesTrendCard />
          <TopProductCard />
          <InsightCard
            title="High demand for Handloom Dupatta"
            description="Demand is expected to increase in the next 2 weeks."
            ctaLabel="See prediction"
          />
          <RecommendationCard
            title="Increase stock of Handwoven Dupatta"
            description="and promote on WhatsApp this week."
            ctaLabel="View action plan"
          />
        </div>

        {/* ---------------- Bottom row: growth journey timeline ---------------- */}
        <div className="mt-2">
          <GrowthTimeline />
        </div>
      </div>
    </section>
  );
}
