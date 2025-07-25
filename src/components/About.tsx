import {
  Database,
  AppWindow,
  Bot,
  MapPin,
  GraduationCap,
  Languages,
  Calendar,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const personalInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-400" />,
      label: t("about.location"),
      value: t("about.locationValue"),
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-400" />,
      label: t("about.education"),
      value: t("about.educationValue"),
    },
    {
      icon: <Languages className="w-6 h-6 text-primary-400" />,
      label: t("about.languages"),
      value: t("about.languagesValue"),
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary-400" />,
      label: t("about.experience"),
      value: t("about.experienceValue"),
    },
  ];

  const values = [
    {
      icon: <Database className="w-8 h-8 text-primary-400" />,
      title: t("about.value1"),
    },
    {
      icon: <AppWindow className="w-8 h-8 text-primary-400" />,
      title: t("about.value2"),
    },
    {
      icon: <Bot className="w-8 h-8 text-primary-400" />,
      title: t("about.value3"),
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="gradient-text">{t("about.title")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="animate-slide-up">
            {/* Personal Info Cards */}

            <h3 className="text-2xl font-bold text-white mb-6">
              {t("about.story")}
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("about.description")}
            </p>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-slate-800 rounded-lg card-hover"
                >
                  <div className="mr-4">{info.icon}</div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider">
                      {info.label}
                    </div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
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
