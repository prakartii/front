import { motion } from "framer-motion";
import Card2 from "./Card2";
import MetricsCard from "./opportunity/MetricsCard";
import FilterSidebar from "./opportunity/FilterSidebar";
import OpportunityCard from "./opportunity/OpportunityCard";
import SavedOpportunities from "./opportunity/SavedOpportunities";
import BottomOpportunityBanner from "./opportunity/BottomOpportunityBanner";

import metricSales from "../../assets/v2/opportunity-engine/metric-sales.png";
import metricSchemes from "../../assets/v2/opportunity-engine/metric-schemes.png";
import metricLearning from "../../assets/v2/opportunity-engine/metric-learning.png";
import metricPartnerships from "../../assets/v2/opportunity-engine/metric-partnerships.png";

import cardShoppingCart from "../../assets/v2/opportunity-engine/card-shopping-cart.png";
import cardGovernment from "../../assets/v2/opportunity-engine/card-government.png";
import cardBook from "../../assets/v2/opportunity-engine/card-book.png";
import cardHandshake from "../../assets/v2/opportunity-engine/card-handshake.png";

import sidebarBell from "../../assets/v2/opportunity-engine/sidebar-bell.png";
import lavenderSprig from "../../assets/v2/opportunity-engine/band-lavender-sprig.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const METRICS = [
  { icon: metricSales, label: "Sales", value: "5", caption: "High potential" },
  { icon: metricSchemes, label: "Schemes", value: "3", caption: "You may qualify" },
  { icon: metricLearning, label: "Learning", value: "2", caption: "Build new skills" },
  { icon: metricPartnerships, label: "Partnerships", value: "2", caption: "Grow together" },
];

const OPPORTUNITIES = [
  {
    icon: cardShoppingCart,
    title: "Festive season demand surge",
    badge: "High match",
    badgeTone: "amber",
    description: "Rakhi and Diwali demand for block printed and handloom products is rising in your region.",
    meta: [
      { label: "Why this match?", value: "High demand in Jaipur" },
      { label: "Potential uplift", value: "25–40%" },
    ],
    ctaLabel: "View details",
  },
  {
    icon: cardGovernment,
    title: "PM Vishwakarma Yojana",
    badge: "You may qualify",
    badgeTone: "sage",
    description: "Get financial support up to ₹3 lakh for tools, training and business growth.",
    meta: [
      { label: "Benefit", value: "Up to ₹3,00,000" },
      { label: "Application window", value: "Open till 31 Dec 2024" },
    ],
    ctaLabel: "Check eligibility",
  },
  {
    icon: cardBook,
    title: "Learn Digital Marketing",
    badge: "New for you",
    badgeTone: "powder",
    description: "Short course to help you reach more customers online and grow your sales.",
    meta: [
      { label: "Duration", value: "4 weeks" },
      { label: "Start date", value: "15 June 2024" },
    ],
    ctaLabel: "Explore course",
  },
  {
    icon: cardHandshake,
    title: "Partner with craft stores",
    badge: "High potential",
    badgeTone: "coral",
    description: "3 stores in your area are looking for new handloom and handcrafted product partners.",
    meta: [
      { label: "Nearby stores", value: "3" },
      { label: "Expected orders", value: "Regular" },
    ],
    ctaLabel: "View partners",
  },
];

const SAVED = [
  { icon: cardShoppingCart, title: "Festive season demand surge" },
  { icon: cardGovernment, title: "PM Vishwakarma Yojana" },
  { icon: cardBook, title: "Learn Digital Marketing" },
];

/**
 * SAKHI V2 — Opportunity Engine. Two-column composition: left is copy +
 * primary CTA + the filter/notification stack, right is the metrics strip,
 * the 2x2 recommendation grid, and the saved-opportunities rail. Closes
 * with a full-width lavender banner, mirroring FinancialInclusionV2's
 * closing CTA band but in this section's own purple mood.
 */
export default function OpportunityEngineV2() {
  return (
    <section
      id="opportunities"
      className="v2-weave-ground relative bg-v2-lavender/12 py-16 lg:py-20 px-5 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background: "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto">
        <div className="grid xl:grid-cols-[400px_1fr] gap-8 lg:gap-10 items-start">
          {/* ---------------- Left column ---------------- */}
          <div className="flex flex-col gap-5">
            <motion.div {...fadeUp()}>
              <span
                className="inline-flex items-center font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] px-3.5 py-1.5 rounded-full"
                style={{ color: "#6B4FA0", background: "rgba(139,127,209,0.16)" }}
              >
                Opportunity Engine
              </span>

              <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.6rem,1.1rem+1.6vw,2.05rem)] leading-[1.2] mt-5 xl:whitespace-nowrap">
                The right opportunities,
                <br />
                <span style={{ color: "#8B7FD1" }}>before</span> you even look.
              </h2>

              <p className="font-body2 text-v2-text/65 text-[14.5px] mt-4 leading-relaxed">
                Sakhi scans market shifts, government updates, and your business signals — and brings you
                opportunities that match your moment.
              </p>

              <a
                href="#opportunities"
                className="inline-flex items-center gap-2 bg-v2-text text-v2-warmwhite font-body2 font-medium text-[14px] px-6 py-3.5 rounded-full mt-6 hover:bg-v2-brown transition-colors"
              >
                See opportunities for me →
              </a>
            </motion.div>

            <FilterSidebar />

            {/* Notification paper card */}
            <Card2
              tint="bg-v2-cream"
              radius="rounded-[18px]"
              pad="px-5 py-4"
              className="relative flex items-center gap-3.5 overflow-hidden"
              {...fadeUp(0.2)}
            >
              <span
                className="absolute inset-y-2 left-0 w-2 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(111,87,72,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "6px 10px",
                }}
                aria-hidden="true"
              />
              <span
                className="absolute inset-y-2 right-0 w-2 opacity-40"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(111,87,72,0.35) 1.5px, transparent 1.5px)",
                  backgroundSize: "6px 10px",
                }}
                aria-hidden="true"
              />
              <span
                className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-v2-butter/60 rotate-[-2deg]"
                style={{ boxShadow: "0 1px 3px rgba(111,87,72,0.15)" }}
                aria-hidden="true"
              />

              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-v2-warmwhite shrink-0"
                style={{ boxShadow: "0 6px 14px -8px rgba(111,87,72,0.3)" }}
              >
                <img src={sidebarBell} alt="" aria-hidden="true" className="w-[18px] h-[18px] object-contain" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display2 font-semibold text-v2-text text-[13.5px] leading-snug">
                  New opportunities, every morning
                </p>
                <p className="font-body2 text-[11.5px] text-v2-text/55 mt-0.5 leading-snug">
                  Sakhi's engine works while you focus on your craft.
                </p>
              </div>
              <img
                src={lavenderSprig}
                alt=""
                aria-hidden="true"
                className="hidden sm:block w-9 h-auto object-contain opacity-80 shrink-0"
              />
            </Card2>
          </div>

          {/* ---------------- Right column ---------------- */}
          <div className="flex flex-col gap-6 min-w-0">
            <MetricsCard total={12} categories={4} metrics={METRICS} />

            <div>
              <motion.span
                className="inline-flex items-center gap-2 font-display2 font-semibold text-v2-text text-[16px] mb-4"
                {...fadeUp(0.05)}
              >
                Recommended for you
              </motion.span>

              <div className="grid sm:grid-cols-2 gap-4">
                {OPPORTUNITIES.map((o, i) => (
                  <OpportunityCard key={o.title} {...o} delay={0.08 + i * 0.05} />
                ))}
              </div>
            </div>

            <SavedOpportunities items={SAVED} />
          </div>
        </div>

        <div className="mt-10 lg:mt-12">
          <BottomOpportunityBanner />
        </div>
      </div>
    </section>
  );
}
