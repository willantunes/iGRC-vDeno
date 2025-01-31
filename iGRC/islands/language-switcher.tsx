import { useI18n } from "../i18n/context.ts";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n();
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <button 
      onClick={toggleLanguage}
      class="text-sm text-gray-600 hover:text-gray-900"
    >
      {language === "en" ? "PT" : "EN"}
    </button>
  );
} 