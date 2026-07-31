import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { useAuth } from "../lib/auth/AuthContext";
import { useLanguage } from "../lib/i18n/LanguageContext";
import { useMagnetic } from "../lib/useMagnetic";
import AmbientOrb from "../components/three/AmbientOrb";
import Particles from "../components/living/Particles";

/**
 * The one door into the product. Demo-only auth — no password, nothing to
 * get wrong — so the screen can spend its whole budget on warmth instead
 * of security chrome: underline inputs, not boxed form fields, and Sakhi's
 * own presence sitting quietly above the question.
 */
export default function Login() {
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const reduced = useReducedMotion();
  const magnetic = useMagnetic({ strength: 0.3 });

  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    login({ name: trimmed, businessName: businessName.trim() });
    navigate("/dashboard");
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-lavender/40 via-ivory to-blush/35 flex flex-col">
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#E6C0B9",
          "--atmo-x": "18%",
          "--atmo-y": "20%",
          "--atmo-opacity": 0.28,
          "--atmo-size": "50%",
        }}
      />
      <div
        className="atmosphere"
        style={{
          "--atmo-color": "#D6B87E",
          "--atmo-x": "85%",
          "--atmo-y": "85%",
          "--atmo-opacity": 0.22,
          "--atmo-size": "46%",
        }}
      />
      <Particles count={10} seedOffset={5} className="absolute inset-0" />

      <div className="relative flex items-center justify-between px-6 md:px-10 h-20 shrink-0">
        <Link
          to="/"
          className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-600 hover:text-ink-900 transition-colors"
        >
          {t("login.backToSite")}
        </Link>
      </div>

      <main className="relative flex-1 flex items-center justify-center px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md text-center"
        >
          <motion.div
            animate={reduced ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center mb-8"
          >
            <AmbientOrb variant="presence" size={72} />
          </motion.div>

          <p className="font-mono text-label uppercase text-ink-600 mb-4">
            {t("login.eyebrow")}
          </p>
          <h1 className="font-display italic text-display-sm text-ink-900 text-balance">
            {t("login.heading")}
          </h1>
          <p className="font-body text-body text-ink-600 mt-5 max-w-sm mx-auto">
            {t("login.subhead")}
          </p>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8 text-left">
            <label className="block">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
                {t("login.nameLabel")}
              </span>
              <input
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("login.namePlaceholder")}
                className="w-full bg-transparent border-0 border-b border-ink-900/20 focus:border-terracotta outline-none font-display text-2xl text-ink-900 py-2 mt-2 placeholder:text-ink-400/50 transition-colors"
              />
            </label>

            <label className="block">
              <span className="font-mono text-2xs uppercase tracking-[0.14em] text-ink-400">
                {t("login.businessLabel")}
              </span>
              <input
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder={t("login.businessPlaceholder")}
                className="w-full bg-transparent border-0 border-b border-ink-900/20 focus:border-terracotta outline-none font-display text-2xl text-ink-900 py-2 mt-2 placeholder:text-ink-400/50 transition-colors"
              />
            </label>

            <motion.button
              ref={magnetic.ref}
              type="submit"
              onMouseMove={magnetic.onMouseMove}
              onMouseLeave={magnetic.onMouseLeave}
              style={magnetic.style}
              disabled={!name.trim()}
              className="group self-center mt-4 inline-flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.14em] text-ink-900 border-b border-ink-900/40 px-1 py-2 hover:border-terracotta hover:text-terracotta transition-colors disabled:opacity-40 disabled:pointer-events-none"
            >
              {t("login.cta")}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
