import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { LANGUAGES, DEFAULT_LANGUAGE } from "./languages";
import { LOCALES } from "./locales";

const STORAGE_KEY = "sakhi-lang";

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

function readStoredLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return LANGUAGES.some((l) => l.code === stored) ? stored : DEFAULT_LANGUAGE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [code, setCode] = useState(readStoredLanguage);

  const language = useMemo(
    () => LANGUAGES.find((l) => l.code === code) ?? LANGUAGES[0],
    [code]
  );

  useEffect(() => {
    document.documentElement.lang = language.code;
    document.documentElement.dir = language.dir;
    window.localStorage.setItem(STORAGE_KEY, language.code);
  }, [language]);

  const t = useMemo(() => {
    const dict = LOCALES[code] ?? LOCALES[DEFAULT_LANGUAGE];
    const fallback = LOCALES[DEFAULT_LANGUAGE];
    return (path) => {
      const value = getByPath(dict, path);
      return value ?? getByPath(fallback, path) ?? path;
    };
  }, [code]);

  const value = useMemo(
    () => ({ language, languages: LANGUAGES, setLanguage: setCode, t }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
