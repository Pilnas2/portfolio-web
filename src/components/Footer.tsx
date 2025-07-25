import { Heart } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const quickLinks = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Pilnas2" },
    { name: "Instagram", href: "https://www.instagram.com/pilnakis/" },
  ];

  return (
    <footer className="bg-slate-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Martin Pilný
            </h3>
            <p className="text-gray-500 leading-relaxed mb-6">
              {t("footer.description")}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-primary-500 transition-all duration-300"
                >
                  {social.name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-2 text-gray-500">
              <p>martin.pilnas@email.cz</p>
              <p>+420 774 970 347</p>
              <p>{t("contact.locationValue")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} {t("footer.copyright")}
              <Heart size={14} className="text-red-500" />
              {t("footer.location")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
