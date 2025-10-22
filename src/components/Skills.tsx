import { useLanguage } from "../contexts/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="section-padding bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">{t("skills.title")}</span>
          </h2>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "OOP",
              "C#",
              "Xamarin",
              "Python",
              "Java",
              "C",
              "JavaScript",
              "SQLite",
              "Flutter",
              "Github",
              "PL/SQL",
              "MongoDB",
            ].map((tech, index) => (
              <div
                key={index}
                className="text-4xl font-bold text-gray-500 hover:text-primary-400 transition-colors duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
