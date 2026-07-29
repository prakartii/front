import { motion, useReducedMotion, useScroll } from "framer-motion";
import AmbientOrb from "./three/AmbientOrb";
import LanguageSelector from "./LanguageSelector";
import { useMagnetic } from "../lib/useMagnetic";
import { useGatedTransform, rangeMap } from "../lib/motion";
import { useLanguage } from "../lib/i18n/LanguageContext";

/**
 * A thin running masthead, not app chrome — wordmark and a hairline, not a
 * filled bar with a boxed button. It fades in on mount, then a faint
 * ivory tint + hairline gain opacity as the page scrolls past the hero,
 * so the bar stays legible over Hero's bright collage without ever
 * reading as a solid "nav bar."
 */
export default function Navbar() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const { t } = useLanguage();
  const chromeOpacity = useGatedTransform(scrollY, reduced, rangeMap([0, 480], [0, 1]), 1);
  const magnetic = useMagnetic({ strength: 0.35 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-40"
    >
      <motion.div
        style={{ opacity: chromeOpacity }}
        className="absolute inset-0 bg-ivory/80 backdrop-blur-sm border-b border-ink-900/[0.08]"
      />

      <nav className="relative max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
        <a href="#" className="flex items-center gap-3 shrink-0">
          <AmbientOrb variant="mark" size={26} className="shrink-0" />
          <span className="font-display text-lg tracking-[0.06em] text-ink-900">
            Sakhi
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex items-center gap-8 font-mono text-2xs uppercase tracking-[0.16em] text-ink-600">
            <a href="#memory" className="hover:text-ink-900 transition-colors">
              {t("nav.memory")}
            </a>
            <a href="#growth" className="hover:text-ink-900 transition-colors">
              {t("nav.growth")}
            </a>
            <a href="#stories" className="hover:text-ink-900 transition-colors">
              {t("nav.stories")}
            </a>
          </div>

          <span className="hidden md:block w-px h-4 bg-ink-900/15" aria-hidden="true" />

          <LanguageSelector />
        </div>

        <motion.a
          ref={magnetic.ref}
          href="#start"
          onMouseMove={magnetic.onMouseMove}
          onMouseLeave={magnetic.onMouseLeave}
          style={magnetic.style}
          className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-900 border-b border-ink-900/40 px-1 py-2 hover:border-terracotta hover:text-terracotta transition-colors"
        >
          {t("nav.cta")} →
        </motion.a>
      </nav>
    </motion.header>
  );
}
