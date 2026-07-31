import { startTransition } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../lib/auth/AuthContext";
import { useLanguage } from "../../lib/i18n/LanguageContext";
import AmbientOrb from "../three/AmbientOrb";
import LanguageSelector from "../LanguageSelector";
import PersistentAtmosphere from "../living/PersistentAtmosphere";

/**
 * The chrome that never leaves: a light masthead (not a boxed app-bar) and
 * a fixed voice affordance in the corner. Everything else on the page is
 * scrollable content between these two constants — this is what makes
 * voice "always accessible" literal rather than a slogan. The floating mic
 * here is a placeholder circle; it's swapped for the real VoiceButton
 * (hero + compact variants) in the next checkpoint.
 */
export default function DashboardShell({ children }) {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const reduced = useReducedMotion();

  function handleLogout() {
    // React Router's own navigation update appears to land in a deferred
    // transition, while a plain setUser(null) here would commit as an
    // urgent update one tick sooner — so RequireAuth briefly re-renders
    // with user=null while location is still stale at /dashboard, and its
    // <Navigate to="/login"> effect fires and wins the race, overwriting
    // our own navigate("/"). Wrapping both calls in the same transition
    // keeps them committing together, so RequireAuth never sees that
    // in-between state.
    startTransition(() => {
      navigate("/");
      logout();
    });
  }

  return (
    <div className="relative min-h-screen bg-ivory font-body">
      <PersistentAtmosphere />

      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-40 bg-ivory/85 backdrop-blur-sm border-b border-ink-900/[0.08]"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 h-20">
          <div className="flex items-center gap-3 shrink-0">
            <AmbientOrb variant="mark" size={26} />
            <span className="font-display text-lg tracking-[0.06em] text-ink-900">
              Sakhi
            </span>
          </div>

          <div className="flex items-center gap-6 md:gap-8">
            {user?.businessName && (
              <span className="hidden md:block font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
                {user.businessName}
              </span>
            )}
            <span className="hidden md:block w-px h-4 bg-ink-900/15" aria-hidden="true" />
            <LanguageSelector />
            <button
              type="button"
              onClick={handleLogout}
              className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-600 hover:text-terracotta transition-colors"
            >
              {t("dashboard.shell.logout")}
            </button>
          </div>
        </div>
      </motion.header>

      <main className="relative">{children}</main>

      {/* Placeholder floating voice affordance — becomes the real
          VoiceButton (compact variant) in the next checkpoint. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
      >
        <motion.div
          animate={reduced ? {} : { scale: [1, 1.06, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 rounded-full bg-terracotta text-ivory flex items-center justify-center shadow-[0_16px_40px_-12px_rgba(43,38,32,0.4)] cursor-pointer"
          aria-hidden="true"
        >
          🎤
        </motion.div>
      </motion.div>
    </div>
  );
}
