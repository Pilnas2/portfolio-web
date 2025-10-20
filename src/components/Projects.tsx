import { Github } from "lucide-react";
import todoImage from "../assets/todo.png";
import learnCzechImage from "../assets/learn-czech.png";
import marbleGame from "../assets/marble-game.png";
import mobgoSharedCluster from "../assets/mongoDBSharedCluster.png";
import { useLanguage } from "../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      title: t("projects.project1.title"),
      description: t("projects.project1.description"),
      image: todoImage,
      tech: ["C#", "SQLite", "Xamarin"],
      github: "https://github.com/Pilnas2/ToDoList",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: t("projects.project2.title"),
      description: t("projects.project2.description"),
      image: learnCzechImage,
      tech: ["Flutter", "Dart", "Firebase", "OpneAI API"],
      github: "https://github.com/Pilnas2/Bakalarska_prace",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: t("projects.project3.title"),
      description: t("projects.project3.description"),
      image: marbleGame,
      tech: ["C#", "Unity"],
      github: "https://github.com/Pilnas2/UPCE-.NET-semestralniPrace",
      live: "#",
      featured: true,
    },
    {
      id: 4,
      title: t("projects.project4.title"),
      description: t("projects.project4.description"),
      image: mobgoSharedCluster,
      tech: ["MongoDB", "Docker"],
      github: "https://github.com/Pilnas2/UPCE-MongoCluster",
      live: "#",
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">{t("projects.title")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            {t("projects.featured")}
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-800 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
