import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import type { Language } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLanguage: Language = language === "cs" ? "en" : "cs";
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-primary-400 transition-colors duration-300 rounded-lg hover:bg-slate-800/50"
      aria-label="Change language"
    >
      <Globe size={18} />
      <span className="text-sm font-medium uppercase">
        {language === "cs" ? "EN" : "CS"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
