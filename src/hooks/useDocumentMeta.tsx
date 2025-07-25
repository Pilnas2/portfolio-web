import { useLanguage } from "../contexts/LanguageContext";
import { useEffect } from "react";

const useDocumentMeta = () => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Update document title
    document.title =
      language === "cs"
        ? "Martin Pilný - Mobilní vývojář"
        : "Martin Pilný - Mobile Developer";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        language === "cs"
          ? "Mobilní a webový vývojář specializující se na vytváření moderních aplikací pro iOS a Android"
          : "Mobile and web developer specializing in creating modern applications for iOS and Android"
      );
    }
  }, [language, t]);
};

export default useDocumentMeta;
