import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AmbientOrb from "./three/AmbientOrb";
import LanguageSelector from "./LanguageSelector";
import { useMagnetic } from "../lib/useMagnetic";
import { useLanguage } from "../lib/i18n/LanguageContext";

/**
 * The Lumora-style rounded floating pill — a small "premium container"
 * signal at the very top of the page, replacing the old flat hairline
 * masthead. Always visible (not a scroll-gated chrome fade): a floating
 * chip reads as always-there, not something that only earns a background
 * once you've scrolled past the hero.
 */
const MotionLink = motion(Link);

export default function Navbar() {
  const { t } = useLanguage();
  const magnetic = useMagnetic({ strength: 0.3 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-40"
    >
      <nav className="relative max-w-[1400px] mx-auto flex items-center justify-between gap-4 px-5 md:px-8 h-16 md:h-[4.5rem] rounded-full bg-ivory/95 backdrop-blur-md card-shadow border border-ink-900/5">
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <AmbientOrb variant="mark" size={30} className="shrink-0" />
          <span className="font-display text-lg text-ink-900">Sakhi</span>
        </a>

        <div className="hidden md:flex items-center gap-7 font-mono text-2xs uppercase tracking-[0.16em] text-ink-600">
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

        <div className="flex items-center gap-3 md:gap-5">
          <LanguageSelector />

          <MotionLink
            ref={magnetic.ref}
            to="/login"
            onMouseMove={magnetic.onMouseMove}
            onMouseLeave={magnetic.onMouseLeave}
            style={magnetic.style}
            className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 text-ivory px-5 py-2.5 font-mono text-2xs uppercase tracking-[0.12em] hover:bg-terracotta-deep transition-colors shrink-0"
          >
            {t("nav.cta")} →
          </MotionLink>
        </div>
      </nav>
    </motion.header>
  );
}
