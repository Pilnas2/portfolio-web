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
    "hero.title1": "Vývoj, který dává smysl",
    "hero.title2": "pro lidi i stroje",
    "hero.dragHint": "Táhněte pro otočení telefonu",

    // About Section
    "about.title": "O mně",
    "about.subtitle":
      "Věnuji se vývoji softwaru a rád se učím nové věci. Baví mě proměňovat nápady v funkční digitální řešení.",
    "about.story": "Můj příběh",
    "about.description":
      "Začal jsem svou cestu ve světě programování na Fakultě elektrotechniky a informatiky Univerzity Pardubice, kde jsem studoval obor se zaměřením na mobilní a webové aplikace. Během studia jsem získal zkušenosti s databázemi, a to jak relačními SQL, tak nerelačními NoSQL systémy. V rámci předmětů jsem pracoval s objektově orientovaným programováním v jazycích C# a Java, a osvojil si základy jazyka C. Ve webovém vývoji jsem pracoval s HTML, CSS a JavaScriptem, kde jsem se zaměřoval na tvorbu responzivních a uživatelsky přívětivých rozhraní. V oblasti mobilního vývoje jsem se věnoval Kotlinu. Bakalářskou práci s názvem Mobilní aplikace pro podporu výuky českého jazyka pro cizince jsem vyvíjel ve frameworku Flutter, který umožňuje vytvářet multiplatformní řešení s moderním a intuitivním designem.",
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
    "about.value2": "Mobilní a webové technologie",
    "about.value3": "C# a objektové programování",

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
    "projects.project4.title": "Konfigurace databáze MongoDB v Dockeru",
    "projects.project4.description":
      "Konfigurace a správa databáze MongoDB v kontejneru Docker.",

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
    "footer.description": "Kreativní mysl v digitálním světě.",
    "footer.quickLinks": "Rychlé odkazy",
    "footer.contact": "Kontakt",
    "footer.copyright": "Portfolio.",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero Section
    "hero.title1": "Development that makes sense",
    "hero.title2": "for people and machines",
    "hero.dragHint": "Drag to rotate phone",

    // About Section
    "about.title": "About Me",
    "about.subtitle":
      "I work on software development and I enjoy learning new things. I like turning ideas into functional digital solutions.",
    "about.story": "My Story",
    "about.description":
      "I began my journey in programming at the Faculty of Electrical Engineering and Informatics at the University of Pardubice, where I studied Mobile and Web Applications. During my studies I gained experience with databases, both relational SQL and non-relational NoSQL systems. In coursework I worked with object-oriented programming in C# and Java, and learned the basics of C. In web development I worked with HTML, CSS and JavaScript, focusing on creating responsive and user-friendly interfaces. In mobile development I worked with Kotlin. I developed my bachelor’s thesis titled 'Mobile Application for Supporting Czech Language Learning for Foreigners' using the Flutter framework, which enables creating cross-platform solutions with modern and intuitive design.",
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
    "about.value2": "Mobile and web technologies",
    "about.value3": "C# and object-oriented programming",

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
    "projects.project4.title": "MongoDB Database Configuration in Docker",
    "projects.project4.description":
      "Configuration and management of a MongoDB database inside a Docker container.",

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
    "footer.description": "A creative mind in the digital world.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.copyright": "Portfolio.",
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
