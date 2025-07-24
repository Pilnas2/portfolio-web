import { Database, AppWindow, Bot } from "lucide-react";

const About = () => {
  const stats = [
    { number: "3+", label: "Roky zkušeností" },
    { number: "Bc. Titul", label: "IT - Mobilní a Webové Technologie" },
  ];

  const values = [
    {
      icon: <Database className="w-8 h-8 text-primary-400" />,
      title: "SQL a NoSQL databáze",
    },
    {
      icon: <AppWindow className="w-8 h-8 text-primary-400" />,
      title: "Webové technologie",
    },
    {
      icon: <Bot className="w-8 h-8 text-primary-400" />,
      title: "AI a Automatizace",
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">O mně</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Jsem vývojář se zaměřením na IT a mobilní aplikace. Věnuji se tvorbě
            moderních, funkčních a uživatelsky přívětivých řešení na míru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Můj příběh</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Začal jsem svou cestu ve světě programování na Fakultě
              elektrotechniky a informatiky Univerzity Pardubice, kdde jsem se
              zaměřoval na mobilní a webové aplikace. Bakalářskou práci s názvem
              Mobilní aplikace pro podporu výuky českého jazyka pro cizince jsem
              vyvíjel ve frameworku Flutter, který mi umožňuje vytvářet
              multiplatformní řešení s moderním a intuitivním designem. Pracuji
              s technologiemi jako Firebase (Realtime Database, Authentication),
              REST API, lokální databáze a integrace třetích stran. Mám také
              zkušenosti s prací s databázemi, a to jak relačními SQL, tak
              nerelačními NoSQL systémy
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-slate-800 rounded-xl card-hover"
              >
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 bg-slate-800 rounded-xl card-hover"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h4 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
