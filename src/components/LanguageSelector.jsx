import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../lib/i18n/LanguageContext";

/**
 * The multilingual switch as a signature moment, not a utility bolted onto
 * the corner. A small mark that, on interaction, blooms into a gently
 * curved cascade of language names in their own scripts — no native
 * <select>, no flag icons, no "EN ▾".
 */
export default function LanguageSelector() {
  const { language, languages, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const others = languages.filter((l) => l.code !== language.code);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("lang.selectorLabel")}
        onClick={() => setOpen((v) => !v)}
        className="group flex items-center gap-2 font-mono text-2xs tracking-[0.16em] text-ink-600 hover:text-ink-900 transition-colors"
      >
        <span
          aria-hidden="true"
          className="flex items-center justify-center w-7 h-7 rounded-full border border-ink-900/15 group-hover:border-terracotta/50 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
        </span>
        <span className="uppercase">{language.native}</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            role="listbox"
            aria-label={t("lang.selectorLabel")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0.12 : 0.2 }}
            className="absolute right-0 top-full mt-4 py-2 z-50"
          >
            {others.map((l, i) => (
              <motion.li
                key={l.code}
                initial={
                  reduced
                    ? { opacity: 0 }
                    : { opacity: 0, y: -6, x: Math.sin(i * 0.9) * 10, filter: "blur(4px)" }
                }
                animate={
                  reduced
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, x: Math.sin(i * 0.9) * 10, filter: "blur(0px)" }
                }
                transition={{
                  duration: reduced ? 0.1 : 0.4,
                  delay: reduced ? 0 : i * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <button
                  type="button"
                  role="option"
                  aria-selected={false}
                  onClick={() => {
                    setLanguage(l.code);
                    setOpen(false);
                  }}
                  dir={l.dir}
                  className="block w-full text-right px-4 py-1.5 font-display text-base text-ink-600 hover:text-terracotta transition-colors whitespace-nowrap"
                >
                  {l.native}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
