import { motion } from "framer-motion";
import bookmarkFilled from "../../../assets/v2/opportunity-engine/action-bookmark-filled.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function SavedOpportunities({ items }) {
  return (
    <motion.div
      className="rounded-[22px] border border-dashed border-v2-text/20 bg-v2-warmwhite/60 px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-6"
      {...fadeUp(0.25)}
    >
      <div className="flex items-center gap-2 shrink-0">
        <img src={bookmarkFilled} alt="" aria-hidden="true" className="w-4 h-4 object-contain" />
        <span className="font-display2 font-semibold text-[13.5px] text-v2-text whitespace-nowrap">
          Saved opportunities ({items.length})
        </span>
      </div>

      <div className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-2 min-w-0">
        {items.map((it) => (
          <div key={it.title} className="flex items-center gap-2 min-w-0">
            <img src={it.icon} alt="" aria-hidden="true" className="w-8 h-8 object-contain shrink-0" />
            <span className="font-body2 text-[12.5px] text-v2-text/75 leading-snug">{it.title}</span>
          </div>
        ))}
      </div>

      <a
        href="#opportunities"
        className="font-body2 font-semibold text-[12.5px] shrink-0 hover:underline"
        style={{ color: "#8B7FD1" }}
      >
        View all saved →
      </a>
    </motion.div>
  );
}
