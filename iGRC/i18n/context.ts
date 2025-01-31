import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { translations } from "./translations.ts";

export type Language = "en" | "pt";

export interface I18nContextType {
  language: Language;
  t: (key: string) => string;
  setLanguage: (lang: Language) => void;
}

const defaultContext: I18nContextType = {
  language: "en",
  t: (key) => {
    const keys = key.split(".");
    let value: any = translations.en;
    for (const k of keys) {
      value = value[k];
    }
    return value || key;
  },
  setLanguage: () => {},
};

export const I18nContext = createContext<I18nContextType>(defaultContext);

export function useI18n() {
  return useContext(I18nContext);
} 