import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const useDocumentMeta = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title =
      language === "cs"
        ? "Martin Pilný - Juniorní vývojář"
        : "Martin Pilný - Junior Developer";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "cs" ? "Juniorní vývojář" : "Junior Developer"
      );
    }
  }, [language, t]);
};

export default useDocumentMeta;
