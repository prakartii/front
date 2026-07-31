import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AmbientOrb from "../three/AmbientOrb";
import LanguageSelector from "../LanguageSelector";
import { useMagnetic } from "../../lib/useMagnetic";
import { useLanguage } from "../../lib/i18n/LanguageContext";

const MotionLink = motion(Link);

/**
 * SAKHI V2 navbar — same branding, logo mark, nav items, and destinations
 * as the original, restyled as one more rounded card in the new pastel
 * system instead of the editorial ivory pill.
 */
export default function NavbarV2() {
  const { t } = useLanguage();
  const magnetic = useMagnetic({ strength: 0.3 });

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 md:top-6 inset-x-4 md:inset-x-8 z-40"
    >
      <nav
        style={{ boxShadow: "0 20px 50px -28px rgba(111,87,72,0.4)" }}
        className="relative max-w-[1360px] mx-auto flex items-center justify-between gap-4 px-5 md:px-7 h-16 md:h-[4.25rem] rounded-full bg-v2-warmwhite/95 backdrop-blur-md border border-v2-brown/8"
      >
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <AmbientOrb variant="mark" size={28} className="shrink-0" />
          <span className="font-display2 font-semibold text-lg text-v2-text">Sakhi</span>
        </a>

        <div className="hidden md:flex items-center gap-7 font-body2 font-medium text-[13px] text-v2-text/65">
          <a href="#memory-journal" className="hover:text-v2-text transition-colors">
            {t("nav.memory")}
          </a>
          <a href="#growth" className="hover:text-v2-text transition-colors">
            {t("nav.growth")}
          </a>
          <a href="#stories" className="hover:text-v2-text transition-colors">
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
            className="inline-flex items-center gap-1.5 rounded-full bg-v2-text text-v2-warmwhite px-5 py-2.5 font-body2 font-medium text-[13px] hover:bg-v2-brown transition-colors shrink-0"
          >
            {t("nav.cta")} →
          </MotionLink>
        </div>
      </nav>
    </motion.header>
  );
}
