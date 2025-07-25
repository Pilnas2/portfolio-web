import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

export type Language = "cs" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translations
const translations = {
  cs: {
    // Navigation
    "nav.home": "Domů",
    "nav.about": "O mně",
    "nav.skills": "Dovednosti",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",

    // Hero Section
    "hero.title1": "Vytvářím mobilní aplikace",
    "hero.title2": "pro iOS a Android",
    "hero.dragHint": "Táhněte pro otočení telefonu",

    // About Section
    "about.title": "O mně",
    "about.subtitle":
      "Jsem vývojář se zaměřením na IT a mobilní aplikace. Věnuji se tvorbě aplikací jak pro operační systém IOS, tak pro Android.",
    "about.story": "Můj příběh",
    "about.description":
      "Začal jsem svou cestu ve světě programování na Fakultě elektrotechniky a informatiky Univerzity Pardubice, kde jsem se zaměřoval na mobilní a webové aplikace. Bakalářskou práci s názvem Mobilní aplikace pro podporu výuky českého jazyka pro cizince jsem vyvíjel ve frameworku Flutter, který mi umožňuje vytvářet multiplatformní řešení s moderním a intuitivním designem. Pracuji s technologiemi jako Firebase (Realtime Database, Authentication), REST API, lokální databáze a integrace třetích stran. Mám také zkušenosti s prací s databázemi, a to jak relačními SQL, tak nerelačními NoSQL systémy",
    "about.location": "Adresa",
    "about.locationValue": "Chlumec nad Cidlinou, Česká republika",
    "about.education": "Vzdělání",
    "about.educationValue":
      "Univerzita Pardubice - FEI - Mobilní a webové aplikace, Bc.",
    "about.languages": "Jazyky",
    "about.languagesValue": "Angličtina, Němčina, Čeština",
    "about.experience": "Zkušenosti",
    "about.experienceValue": "3+ let",
    "about.value1": "SQL a NoSQL databáze",
    "about.value2": "Webové technologie",
    "about.value3": "AI a Automatizace",

    // Skills Section
    "skills.title": "Dovednosti",

    // Projects Section
    "projects.title": "Projekty",
    "projects.subtitle": "Přehled projektů, na kterých jsem pracoval",
    "projects.featured": "Vybrané projekty",
    "projects.code": "Kód",
    "projects.project1.title": "Mobilní aplikace To Do List",
    "projects.project1.description":
      "Aplikace umožňuje uživatelům vytvářet, upravovat a mazat úkoly s možností notifikací.",
    "projects.project2.title":
      "Mobilní aplikace pro podporu výuky českého jazyka pro cizince",
    "projects.project2.description":
      "Bakalářská práce. Slovní zásoba, gramatika, poslech, testy, chatbot.",
    "projects.project3.title": "Počítačová hra Marble",
    "projects.project3.description":
      "Jednoduchá hra s kuličkami, kde hráč ovládá kuličku a snaží se dostat do cíle, 3 úrovně.",

    // Contact Section
    "contact.title": "Pojďme Spolupracovat",
    "contact.subtitle":
      "Máte projekt na mysli? Dejte mi vědět a společně vytvoříme něco úžasného!",
    "contact.info": "Kontaktní informace",
    "contact.email": "Email",
    "contact.phone": "Telefon",
    "contact.location": "Lokace",
    "contact.locationValue": "Hradec Králové, Česká republika",
    "contact.form.name": "Jméno",
    "contact.form.email": "Email",
    "contact.form.subject": "Předmět",
    "contact.form.message": "Zpráva",
    "contact.form.namePlaceholder": "Vaše jméno",
    "contact.form.emailPlaceholder": "vas.email@example.com",
    "contact.form.subjectPlaceholder": "O čem chcete mluvit?",
    "contact.form.messagePlaceholder": "Napište mi o vašem projektu...",
    "contact.form.send": "Odeslat zprávu",
    "contact.form.sending": "Odesílám...",
    "contact.form.success": "Zpráva odeslána!",
    "contact.form.successMessage":
      "Děkuji za vaši zprávu. Odpovím vám co nejdříve.",
    "contact.form.required": "*",

    // Footer
    "footer.description":
      "Mobilní a webový vývojář specializující se na vytváření moderních a uživatelsky přívětivých aplikací.",
    "footer.quickLinks": "Rychlé odkazy",
    "footer.contact": "Kontakt",
    "footer.copyright": "Portfolio. Vytvořeno s",
    "footer.location": "v České republice",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title1": "I create mobile applications",
    "hero.title2": "for iOS and Android",
    "hero.dragHint": "Drag to rotate phone",

    // About Section
    "about.title": "About Me",
    "about.subtitle":
      "I am a developer focused on IT and mobile applications. I develop applications for both iOS and Android operating systems.",
    "about.story": "My Story",
    "about.description":
      'I started my journey in the world of programming at the Faculty of Electrical Engineering and Informatics at the University of Pardubice, where I focused on mobile and web applications. I developed my bachelor\'s thesis titled "Mobile Application for Supporting Czech Language Learning for Foreigners" using the Flutter framework, which allows me to create cross-platform solutions with modern and intuitive design. I work with technologies like Firebase (Realtime Database, Authentication), REST API, local databases, and third-party integrations. I also have experience working with databases, both relational SQL and non-relational NoSQL systems.',
    "about.location": "Location",
    "about.locationValue": "Chlumec nad Cidlinou, Czech Republic",
    "about.education": "Education",
    "about.educationValue":
      "University of Pardubice - FEI - Mobile and Web Applications, Bc.",
    "about.languages": "Languages",
    "about.languagesValue": "English, German, Czech",
    "about.experience": "Experience",
    "about.experienceValue": "3+ years",
    "about.value1": "SQL and NoSQL databases",
    "about.value2": "Web technologies",
    "about.value3": "AI and Automation",

    // Skills Section
    "skills.title": "Skills",

    // Projects Section
    "projects.title": "Projects",
    "projects.subtitle": "Overview of projects I have worked on",
    "projects.featured": "Featured Projects",
    "projects.code": "Code",
    "projects.project1.title": "Mobile To Do List Application",
    "projects.project1.description":
      "The application allows users to create, edit and delete tasks with notification capabilities.",
    "projects.project2.title":
      "Mobile Application for Supporting Czech Language Learning for Foreigners",
    "projects.project2.description":
      "Bachelor's thesis. Vocabulary, grammar, listening, tests, chatbot.",
    "projects.project3.title": "Marble Computer Game",
    "projects.project3.description":
      "Simple marble game where the player controls a marble and tries to reach the goal, 3 levels.",

    // Contact Section
    "contact.title": "Let's Work Together",
    "contact.subtitle":
      "Have a project in mind? Let me know and let's create something amazing together!",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.locationValue": "Hradec Králové, Czech Republic",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.emailPlaceholder": "your.email@example.com",
    "contact.form.subjectPlaceholder": "What would you like to talk about?",
    "contact.form.messagePlaceholder": "Tell me about your project...",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message Sent!",
    "contact.form.successMessage":
      "Thank you for your message. I will respond as soon as possible.",
    "contact.form.required": "*",

    // Footer
    "footer.description":
      "Mobile and web developer specializing in creating modern and user-friendly applications.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "Portfolio. Created with",
    "footer.location": "in Czech Republic",
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Get initial language from localStorage or default to English
  const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem("portfolio-language");
    if (stored && (stored === "cs" || stored === "en")) {
      return stored as Language;
    }
    // Try to detect user's browser language
    const browserLang = navigator.language.toLowerCase();
    return browserLang.startsWith("cs") ? "cs" : "en";
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Update document language attribute and localStorage when language changes
  React.useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem("portfolio-language", language);
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["cs"]] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
