import { Github } from "lucide-react";
import todoImage from "../assets/todo.png";
import learnCzechImage from "../assets/learn-czech.png";
import marbleGame from "../assets/marble-game.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Mobilní aplikace To Do List",
      description:
        "Aplikace umožňuje uživatelům vytvářet, upravovat a mazat úkoly s možností notifikací.",
      image: todoImage,
      tech: ["C#", "SQLite", "Xamarin"],
      github: "https://github.com/Pilnas2/ToDoList",
      live: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Mobilní aplikace pro podporu výuky českého jazyka pro cizince",
      description:
        "Bakalářská práce. Slovní zásoba, gramatika, poslech, testy, chatbot.",
      image: learnCzechImage,
      tech: ["Flutter", "Dart", "Firebase", "OpneAI API"],
      github: "https://github.com/Pilnas2/Bakalarska_prace",
      live: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Počítačová hra Marble",
      description:
        "Jednoduchá hra s kuličkami, kde hráč ovládá kuličku a snaží se dostat do cíle, 3 úrovně.",
      image: marbleGame,
      tech: ["C#", "Unity"],
      github: "https://github.com/Pilnas2/UPCE-.NET-semestralniPrace",
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
            <span className="gradient-text">Projekty</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Přehled projektů, na kterých jsem pracoval
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Vybrané projekty
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
                      Kód
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
