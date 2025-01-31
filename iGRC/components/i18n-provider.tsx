import { JSX } from "preact";
import { useState, useCallback } from "preact/hooks";
import { I18nContext } from "../i18n/context.ts";
import { en, ptBR } from "../i18n/translations.ts";

interface I18nProviderProps {
  children: JSX.Element;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<"en" | "pt-BR">("en");

  const t = useCallback((key: string) => {
    const keys = key.split(".");
    let value: any = language === "en" ? en : ptBR;
    
    for (const k of keys) {
      value = value[k];
    }
    
    return value || key;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
} 