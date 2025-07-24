import { Code, Palette, Server, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8 text-primary-400" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      icon: <Server className="w-8 h-8 text-primary-400" />,
      title: "Backend & Tools",
      skills: [
        { name: "Node.js" },
        { name: "Git", level: 90 },
        { name: "Webpack", level: 70 },
        { name: "Vite", level: 85 },
        { name: "REST APIs", level: 80 },
        { name: "GraphQL", level: 65 },
      ],
    },
    {
      icon: <Palette className="w-8 h-8 text-primary-400" />,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "UI/UX Design", level: 85 },
        { name: "Responsive Design", level: 95 },
        { name: "Prototyping", level: 80 },
        { name: "User Research", level: 70 },
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary-400" />,
      title: "Other Technologies",
      skills: [
        { name: "React Native", level: 70 },
        { name: "PWA", level: 80 },
        { name: "Testing (Jest)", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "Firebase", level: 75 },
        { name: "Docker", level: 60 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-slate-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">Dovednosti</span>
          </h2>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {[
              "Flutter",
              "React",
              "Xamarin",
              "SQLite",
              "Figma",
              "Github",
              "Firebase",
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
