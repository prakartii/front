import { motion } from "framer-motion";
import Card2 from "./Card2";
import logoMudra from "../../assets/v2/financial-inclusion/logo-mudra.png";
import logoVishwakarma from "../../assets/v2/financial-inclusion/logo-vishwakarma.png";
import logoMsme from "../../assets/v2/financial-inclusion/logo-msme.png";
import logoSidbi from "../../assets/v2/financial-inclusion/logo-sidbi.png";
import logoNabard from "../../assets/v2/financial-inclusion/logo-nabard.png";
import logoStandUpIndia from "../../assets/v2/financial-inclusion/logo-standup-india.png";
import confidenceSealImg from "../../assets/v2/financial-inclusion/confidence-seal.png";
import handwrittenNoteImg from "../../assets/v2/financial-inclusion/handwritten-note.png";
import botanicalImg from "../../assets/v2/financial-inclusion/botanical.png";
import iconSecure from "../../assets/v2/financial-inclusion/icon-secure.png";
import iconNoHiddenCharges from "../../assets/v2/financial-inclusion/icon-no-hidden-charges.png";
import iconGuidedByAi from "../../assets/v2/financial-inclusion/icon-guided-by-ai.png";
import iconGovernmentBacked from "../../assets/v2/financial-inclusion/icon-government-backed.png";

/* ---------------------------------------------------------------------- */
/* Local line-icon set — this section's icon language (eligibility cards, */
/* cash-flow stats, readiness rows, next-step rows) doesn't overlap with  */
/* CraftIcon's artisan-object set, so it's kept local to this file.      */
/* ---------------------------------------------------------------------- */

const ICON_PROPS = { viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };

function LeafIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M12 21V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 12C12 8 9 5 5 5c0 4 3 7 7 7Z" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 12c0-3.2 2.2-5.5 5.5-5.5-.2 3.3-2.3 5.5-5.5 5.5Z" fill="currentColor" fillOpacity="0.16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function TempleIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M12 3.2 16.3 6.4V8H7.7V6.4L12 3.2Z" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <rect x="7" y="8.4" width="10" height="9.6" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <path d="M9 18v2.6M12 18v2.6M15 18v2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <rect x="6" y="3" width="12" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 8h6M9 12h6M9 16h3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function PeopleIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <circle cx="9" cy="8" r="2.3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="15.5" cy="9" r="1.9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.6 19c0-3 2.4-5.2 5.4-5.2s5.4 2.2 5.4 5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.8 14.4c2.4.2 4.2 2.1 4.2 4.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldCheckIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M12 3.4 18.5 6v5.4c0 4.6-2.8 7.6-6.5 8.6-3.7-1-6.5-4-6.5-8.6V6L12 3.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M9 12.2 11 14.2 15.2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WalletIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <rect x="3" y="6.5" width="18" height="12" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="14" r="1.3" fill="currentColor" />
    </svg>
  );
}

function ReceiptIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M6 3.5h12v17l-2.2-1.4L13.6 20.5l-2.2-1.4-2.2 1.4L7 19.1 6 20.5V3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BranchIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M12 21V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M12 11.5 6.6 5.3M12 11.5l5.4-6.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="6.6" cy="5" r="1.4" fill="currentColor" />
      <circle cx="17.4" cy="5" r="1.4" fill="currentColor" />
    </svg>
  );
}

function File2Icon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M8 3h6l4 4v14H8V3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10.5 12.5h5M10.5 16h3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BankIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M4 9.6 12 4.8l8 4.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.2 9.6v9M9.4 9.6v9M14.6 9.6v9M18.8 9.6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3.2 20.6h17.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloudUploadIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <path d="M7.4 18a4 4 0 0 1-1-7.9 5.2 5.2 0 0 1 10-1.9A4.4 4.4 0 0 1 16.6 18H7.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 17v-6.2M9.6 13.4 12 11l2.4 2.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CalendarIcon(p) {
  return (
    <svg {...ICON_PROPS} {...p}>
      <rect x="4" y="5.4" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 9.6h16M8 3.4v4M16 3.4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 13.4h2M13.5 13.4h2M8.5 16.8h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronRightIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...p}>
      <path d="M9 5.5 15.5 12 9 18.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 3.2 14.2 9l6.1.9-4.4 4.1 1.1 6-5-3-5 3 1.1-6-4.4-4.1L9.8 9 12 3.2Z" />
    </svg>
  );
}

function SparkleIcon(p) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
      <path d="M12 2.4 13.5 8.2 19.4 9.8 13.5 11.4 12 17.2 10.5 11.4 4.6 9.8 10.5 8.2 12 2.4Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------- */
/* Official partner logos — normalized to a shared height so the strip    */
/* reads as one consistent row regardless of each logo's native aspect.   */
/* ---------------------------------------------------------------------- */

const LOGO_CLASS = "h-8 w-auto object-contain shrink-0";

function MudraMark() {
  return <img src={logoMudra} alt="Mudra (PMMY)" className={LOGO_CLASS} />;
}

function VishwakarmaMark() {
  return <img src={logoVishwakarma} alt="PM Vishwakarma" className={LOGO_CLASS} />;
}

function MsmeMark() {
  return <img src={logoMsme} alt="MSME" className={LOGO_CLASS} />;
}

function SidbiMark() {
  return <img src={logoSidbi} alt="SIDBI" className={LOGO_CLASS} />;
}

function NabardMark() {
  return <img src={logoNabard} alt="NABARD" className={LOGO_CLASS} />;
}

function StandUpMark() {
  return <img src={logoStandUpIndia} alt="Stand Up India" className={LOGO_CLASS} />;
}

function ConfidenceSeal() {
  return (
    <img
      src={confidenceSealImg}
      alt="Confidence Progress seal"
      className="w-[92px] h-[92px] object-contain shrink-0"
      style={{ filter: "drop-shadow(0 10px 20px rgba(111,87,72,0.28))" }}
    />
  );
}

/* ---------------------------------------------------------------------- */
/* Data                                                                    */
/* ---------------------------------------------------------------------- */

const ELIGIBILITY = [
  {
    icon: LeafIcon,
    tint: "bg-v2-sage",
    color: "#2F6B3B",
    title: "Mudra Loan",
    meta: "You may get up to",
    value: "₹2,00,000",
    pill: "82% match",
    pillTint: "bg-v2-sage/70",
  },
  {
    icon: TempleIcon,
    tint: "bg-v2-peach",
    color: "#8B5E34",
    title: "PM Vishwakarma",
    meta: "Benefits up to",
    value: "₹1,00,000",
    pill: "90% match",
    pillTint: "bg-v2-peach/70",
  },
  {
    icon: DocumentIcon,
    tint: "bg-v2-lavender",
    color: "#6B4FA0",
    title: "MSME Registration",
    meta: "Unlock more schemes",
    value: null,
    pill: "Recommended",
    pillTint: "bg-v2-lavender/70",
  },
  {
    icon: PeopleIcon,
    tint: "bg-v2-coral/35",
    color: "#C2534A",
    title: "Stand-Up India",
    meta: "For women entrepreneurs",
    value: null,
    pill: "76% match",
    pillTint: "bg-v2-coral/35",
  },
  {
    icon: ShieldCheckIcon,
    tint: "bg-v2-sage/70",
    color: "#2F6B3B",
    title: "CGTMSE Cover",
    meta: "Collateral-free coverage",
    value: null,
    pill: "Eligible",
    pillTint: "bg-v2-sage/70",
  },
];

const CASHFLOW = [
  { icon: WalletIcon, label: "Money In", value: "₹1,48,500", delta: "18%", up: true },
  { icon: ReceiptIcon, label: "Money Out", value: "₹68,200", delta: "7%", up: false },
  { icon: BranchIcon, label: "Net Cash Flow", value: "₹80,300", delta: "24%", up: true },
];

const READINESS = [
  {
    icon: DocumentIcon,
    tint: "bg-v2-text/5",
    color: "#6F5748",
    title: "GST Filing",
    subtitle: "Active",
    status: "Complete",
    statusTint: "bg-v2-sage/60",
    statusColor: "#2F6B3B",
  },
  {
    icon: File2Icon,
    tint: "bg-v2-powder/50",
    color: "#3B6E8F",
    title: "Digital Invoices",
    subtitle: "12 invoices uploaded",
    status: "Good",
    statusTint: "bg-v2-peach/60",
    statusColor: "#8B5E34",
  },
  {
    icon: BankIcon,
    tint: "bg-v2-text/5",
    color: "#6F5748",
    title: "Bank Account Health",
    subtitle: "Good standing",
    status: "Good",
    statusTint: "bg-v2-sage/60",
    statusColor: "#2F6B3B",
  },
];

const NEXT_STEPS = [
  {
    icon: CloudUploadIcon,
    tint: "bg-v2-sage",
    color: "#2F6B3B",
    title: "Upload 2 more digital invoices",
    desc: "Boosts loan approval chances",
  },
  {
    icon: File2Icon,
    tint: "bg-v2-peach",
    color: "#8B5E34",
    title: "File GST return for this quarter",
    desc: "Improves eligibility for higher loans",
  },
  {
    icon: BankIcon,
    tint: "bg-v2-lavender",
    color: "#6B4FA0",
    title: "Maintain bank balance above ₹10k",
    desc: "Strengthens your financial profile",
  },
  {
    icon: CalendarIcon,
    tint: "bg-v2-coral/35",
    color: "#C2534A",
    title: "Repay on time to build credit history",
    desc: "Better score, bigger opportunities",
  },
];

const TRUST_ITEMS = [
  { icon: iconSecure, title: "100% Secure", subtitle: "Your data is safe" },
  { icon: iconNoHiddenCharges, title: "No Hidden Charges", subtitle: "Schemes are government-backed" },
  { icon: iconGuidedByAi, title: "Guided by AI", subtitle: "Recommendations just for you" },
  { icon: iconGovernmentBacked, title: "Government-backed", subtitle: "Trusted by authorities" },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ---------------------------------------------------------------------- */
/* Section                                                                 */
/* ---------------------------------------------------------------------- */

export default function FinancialInclusionV2() {
  return (
    <section
      id="financial-inclusion"
      className="v2-weave-ground relative bg-v2-peach/10 py-16 lg:py-20 px-5 lg:px-10 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[40vh]"
        style={{
          background: "radial-gradient(ellipse 900px 400px at 50% 0%, rgba(255,255,255,0.55), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1360px] mx-auto">
        {/* ---------------- Top row: heading + eligibility cards ---------------- */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          <motion.div className="lg:w-[400px] xl:w-[430px] shrink-0" {...fadeUp()}>
            <span className="inline-flex items-center gap-1.5 font-body2 font-semibold text-[10px] uppercase tracking-[0.16em] text-terracotta bg-terracotta/12 px-3.5 py-1.5 rounded-full">
              <SparkleIcon className="w-3 h-3" />
              AI Financial Inclusion
            </span>

            <h2 className="font-display2 font-semibold text-v2-text text-[clamp(1.9rem,1.2rem+2.2vw,2.75rem)] leading-[1.14] mt-5 lg:whitespace-nowrap">
              Financial confidence,
              <br />
              <span className="text-terracotta">within her reach.</span>
            </h2>

            <p className="font-body2 text-v2-text/65 text-[15px] mt-4 max-w-sm">
              Sakhi understands her business and unlocking the financial support she truly deserves.
            </p>
          </motion.div>

          <div className="flex-1 min-w-0 w-full">
            <motion.div className="flex items-center justify-between mb-4" {...fadeUp(0.05)}>
              <span className="inline-flex items-center gap-1.5 font-body2 font-bold text-[12px] uppercase tracking-[0.1em] text-v2-text/80">
                <SparkleIcon className="w-3 h-3 text-terracotta" />
                AI Eligibility Match
              </span>
              <a
                href="#opportunities"
                className="hidden sm:inline-flex items-center gap-1.5 font-body2 font-semibold text-[13px] text-terracotta hover:gap-2.5 transition-all"
              >
                View all schemes →
              </a>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3.5">
              {ELIGIBILITY.map((card, i) => (
                <Card2
                  key={card.title}
                  tint="bg-v2-warmwhite"
                  radius="rounded-[20px]"
                  pad="p-4"
                  lift
                  {...fadeUp(0.08 + i * 0.05)}
                >
                  <span
                    className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${card.tint}`}
                    style={{ color: card.color }}
                  >
                    <card.icon className="w-5 h-5" />
                  </span>
                  <p className="font-display2 font-semibold text-v2-text text-[14px] mt-3 leading-snug">
                    {card.title}
                  </p>
                  <p className="font-body2 text-[11.5px] text-v2-text/55 mt-1 leading-snug">{card.meta}</p>
                  {card.value && (
                    <p className="font-body2 font-bold text-v2-text text-[17px] mt-1.5">{card.value}</p>
                  )}
                  <span
                    className={`inline-block font-body2 font-semibold text-[11px] px-2.5 py-1 rounded-full mt-3 ${card.pillTint}`}
                    style={{ color: card.color }}
                  >
                    {card.pill}
                  </span>
                </Card2>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------- Second row: cash flow / readiness / next steps ---------------- */}
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {/* Business Cash Flow Snapshot */}
          <Card2 tint="bg-v2-warmwhite" radius="rounded-[24px]" pad="p-6" {...fadeUp(0.1)}>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 font-body2 font-bold text-[11.5px] uppercase tracking-[0.08em] text-v2-text/80">
                <BranchIcon className="w-4 h-4 text-terracotta" />
                Business Cash Flow Snapshot
              </span>
              <span className="font-body2 text-[12px] text-v2-text/45">This month ⌄</span>
            </div>

            <div className="grid grid-cols-3 mt-5">
              {CASHFLOW.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`px-2 ${i > 0 ? "border-l border-v2-text/8" : ""}`}
                >
                  <stat.icon className="w-5 h-5 text-terracotta" />
                  <p className="font-body2 text-[12px] text-v2-text/55 mt-2.5">{stat.label}</p>
                  <p className="font-display2 font-bold text-v2-text text-[19px] mt-1">{stat.value}</p>
                  <p
                    className="font-body2 font-semibold text-[12px] mt-1.5"
                    style={{ color: stat.up ? "#2F6B3B" : "#C2534A" }}
                  >
                    {stat.up ? "↑" : "↓"} {stat.delta}
                  </p>
                  <p className="font-body2 text-[10.5px] text-v2-text/40 mt-0.5">vs last month</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-v2-sage/35 px-4 py-3 mt-5">
              <LeafIcon className="w-4 h-4 text-[#2F6B3B] shrink-0" />
              <p className="font-body2 text-[12.5px] text-v2-text/75">
                Healthy cash flow! Keep it consistent to unlock higher credit opportunities.
              </p>
            </div>
          </Card2>

          {/* Financial Readiness */}
          <Card2 tint="bg-v2-warmwhite" radius="rounded-[24px]" pad="p-6" {...fadeUp(0.15)}>
            <span className="inline-flex items-center gap-2 font-body2 font-bold text-[11.5px] uppercase tracking-[0.08em] text-v2-text/80">
              <ShieldCheckIcon className="w-4 h-4 text-terracotta" />
              Financial Readiness
            </span>

            <div className="flex flex-col gap-2.5 mt-5">
              {READINESS.map((row) => (
                <div
                  key={row.title}
                  className="flex items-center justify-between gap-3 rounded-xl border border-v2-text/6 px-3.5 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${row.tint}`}
                      style={{ color: row.color }}
                    >
                      <row.icon className="w-[18px] h-[18px]" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-body2 font-semibold text-v2-text text-[13.5px] truncate">{row.title}</p>
                      <p className="font-body2 text-[11.5px] text-v2-text/50 truncate">{row.subtitle}</p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1 font-body2 font-semibold text-[11px] px-2.5 py-1 rounded-full shrink-0 ${row.statusTint}`}
                    style={{ color: row.statusColor }}
                  >
                    {row.status} ✓
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2.5 rounded-xl bg-v2-butter/45 px-4 py-3 mt-4">
              <StarIcon className="w-4 h-4 text-[#B5763B] shrink-0" />
              <p className="font-body2 text-[12.5px] text-v2-text/75">
                You're on the right track! A few more steps can open bigger opportunities.
              </p>
            </div>
          </Card2>

          {/* Smart Next Steps */}
          <Card2 tint="bg-v2-warmwhite" radius="rounded-[24px]" pad="p-6" {...fadeUp(0.2)}>
            <span className="font-body2 font-bold text-[11.5px] uppercase tracking-[0.08em] text-v2-text/80">
              Smart Next Steps
            </span>

            <div className="flex flex-col mt-4 -mx-2">
              {NEXT_STEPS.map((step, i) => (
                <a
                  href="#opportunities"
                  key={step.title}
                  className={`flex items-center gap-3 rounded-xl px-2 py-3 hover:bg-v2-cream/70 transition-colors ${
                    i > 0 ? "border-t border-v2-text/6" : ""
                  }`}
                >
                  <span
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${step.tint}`}
                    style={{ color: step.color }}
                  >
                    <step.icon className="w-[18px] h-[18px]" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-body2 font-semibold text-v2-text text-[13px] leading-snug">{step.title}</p>
                    <p className="font-body2 text-[11.5px] text-v2-text/50 leading-snug mt-0.5">{step.desc}</p>
                  </div>
                  <ChevronRightIcon className="w-4 h-4 text-v2-text/30 shrink-0" />
                </a>
              ))}
            </div>
          </Card2>
        </div>

        {/* ---------------- Trusted partners strip ---------------- */}
        <div className="relative mt-8">
          <Card2
            tint="bg-v2-warmwhite"
            radius="rounded-[24px]"
            pad="px-6 lg:px-8 py-5"
            className="flex items-center gap-6 lg:gap-8 overflow-x-auto"
            {...fadeUp(0.1)}
          >
            <span className="font-body2 font-bold text-[11px] uppercase tracking-[0.12em] text-terracotta shrink-0">
              Trusted Partners
            </span>
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <MudraMark />
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <VishwakarmaMark />
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <MsmeMark />
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <SidbiMark />
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <NabardMark />
            <span className="h-6 w-px bg-v2-text/10 shrink-0" aria-hidden="true" />
            <StandUpMark />
            <span className="flex-1 min-w-[1rem]" aria-hidden="true" />
            <ConfidenceSeal />
          </Card2>

          <div className="mt-5 flex justify-center sm:justify-end min-[1400px]:block min-[1400px]:mt-0 min-[1400px]:absolute min-[1400px]:-right-3 min-[1400px]:-bottom-7 min-[1400px]:z-10">
            <img
              src={handwrittenNoteImg}
              alt="She's not asking for help. She's building her future."
              className="max-w-[220px] min-[1400px]:w-44 w-auto h-auto"
              style={{
                transform: "rotate(4deg)",
                filter: "drop-shadow(0 14px 30px rgba(43,38,32,0.3))",
              }}
            />
          </div>
        </div>

        {/* ---------------- Bottom CTA bar ---------------- */}
        <motion.div
          className="v2-fiber-grain relative mt-16 lg:mt-20 rounded-[28px] overflow-hidden px-6 lg:px-10 py-6 lg:py-8 flex flex-col xl:flex-row items-center gap-6 lg:gap-8"
          style={{
            background: "linear-gradient(120deg, #FCE0BC 0%, #F8CFA0 100%)",
            boxShadow: "0 20px 48px -30px rgba(111,87,72,0.3)",
          }}
          {...fadeUp(0.1)}
        >
          <div className="flex items-center gap-3 shrink-0">
            <img
              src={botanicalImg}
              alt=""
              aria-hidden="true"
              className="hidden md:block w-10 h-auto object-contain shrink-0 opacity-55"
            />
            <p className="font-display2 font-semibold text-v2-text text-[16px] leading-snug">
              Every step today,
              <br />
              builds financial freedom tomorrow.
            </p>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 w-full xl:w-auto">
            {TRUST_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`flex items-center gap-2.5 ${i > 0 ? "sm:border-l sm:border-v2-brown/15 sm:pl-4" : ""}`}
              >
                <img src={item.icon} alt="" aria-hidden="true" className="w-9 h-9 rounded-xl object-contain shrink-0" />
                <div>
                  <p className="font-body2 font-bold text-v2-text text-[13px] leading-snug">{item.title}</p>
                  <p className="font-body2 text-[11.5px] text-v2-text/60 leading-snug">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#opportunities"
            className="inline-flex items-center gap-2 bg-v2-warmwhite text-terracotta font-body2 font-semibold text-[14px] px-6 py-3.5 rounded-full shrink-0 hover:bg-white transition-colors"
            style={{ boxShadow: "0 14px 30px -16px rgba(111,87,72,0.35)" }}
          >
            Explore all financial tools →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
