import { JSX } from "preact";
import { useSignal } from "@preact/signals";
import { I18nContext, type Language } from "../i18n/context.ts";
import { en, pt } from "../i18n/translations.ts";

interface I18nProviderProps {
  children: JSX.Element;
}

export default function I18nProvider({ children }: I18nProviderProps) {
  const language = useSignal<Language>("en");
  
  const t = (key: string) => {
    const keys = key.split(".");
    const translations = language.value === "en" ? en : pt;
    let value: any = translations;
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    return value || key;
  };

  const setLanguage = (lang: Language) => {
    language.value = lang;
  };

  const contextValue = {
    language: language.value,
    t,
    setLanguage,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
} 