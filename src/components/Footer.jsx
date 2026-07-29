import AmbientOrb from "./three/AmbientOrb";
import { useLanguage } from "../lib/i18n/LanguageContext";

/**
 * Mirrors the Navbar's restraint on the way out — a thin closing line, not
 * a four-column sitemap. Quiet on purpose: this page has already made its
 * case.
 */
export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-pearl border-t border-ink-900/10 px-6 lg:px-16 py-12">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <AmbientOrb variant="mark" size={22} />
          <span className="font-display text-base text-ink-900">Sakhi</span>
          <span className="hidden sm:inline w-px h-4 bg-ink-900/15 mx-2" aria-hidden="true" />
          <span className="font-body text-sm text-ink-600 max-w-xs">{t("footer.tagline")}</span>
        </div>

        <p className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
          {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
