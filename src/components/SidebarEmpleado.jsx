import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Book,
  BarChart,
  Award,
  KeyRound,
  Languages,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import CustomTooltip from "./CustomTooltip";



const SidebarEmpleado = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const { logout } = useAuth();

  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  const navItems = [
    {
      icon: <Book size={20} />,
      label: t("sidebar.capacitaciones"),
      route: `/empresa/${slug}/dashboard`,
    },
    {
      icon: <BarChart size={20} />,
      label: t("sidebar.intentos"),
      route: `/empresa/${slug}/intentos`,
    },
    {
      icon: <Award size={20} />,
      label: t("sidebar.resultados"),
      route: `/empresa/${slug}/resultados`,
    },
    {
      icon: <KeyRound size={20} />,
      label: t("sidebar.clave"),
      route: `/empresa/${slug}/cambiar-clave`,
    },
    
  ];

  const handleNavigate = (route) => {
    if (!expanded) {
        setExpanded(true); // abrimos el sidebar
      }


    navigate(route);
  };

  const toggleIdioma = () => {
    if (!expanded) {
        setExpanded(true); // abrimos el sidebar
      }
    setShowLanguageOptions((prev) => !prev);
  };

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("softcloudcr-idioma", lng);
  };

  useEffect(() => {
    if (window.innerWidth >= 768) setExpanded(true);
  }, [setExpanded]);

  return (
    <aside
      className={`bg-gradient-to-b from-[#005BDB]  via-[#2BA1ED]  to-[#F9FAFB] shadow-lg shadow-[#2BA1ED] z-50 h-full transition-all duration-300 flex flex-col justify-between ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="p-2">
        {/* Toggle */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setExpanded(!expanded)} className="p-1">
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          
        </div>

        {/* Navegación */}
        <ul className="space-y-2">
        {navItems.map((item, index) => (
  <li key={index}>
    <CustomTooltip label={item.label}>
      <button
        onClick={() => handleNavigate(item.route)}
        className="flex  items-center gap-2 px-2 py-2 text-[#1F2937] hover:text-[#6B7280] w-full transition"
      >
        {item.icon}
        {expanded && <span>{item.label}</span>}
      </button>
    </CustomTooltip>
  </li>
))}

          {/* Idioma */}
          <li>
          <CustomTooltip label={t("sidebar.idioma")}>
            <button
              onClick={toggleIdioma}
             
              
              className="flex items-center gap-2 px-2 py-2 text-gray-700 hover:text-blue-600 w-full transition"
            >
                
              <Languages size={20} />
              {expanded && <span>{t("sidebar.idioma")}</span>}
            </button>
            </CustomTooltip>
            {/* Subopciones */}
            {expanded && showLanguageOptions && (
              <div className="ml-8 mt-1 space-y-1">
                <button
                  onClick={() => cambiarIdioma("es")}
                 
                  className={`block text-left text-sm w-full text-gray-600 hover:text-blue-500 ${
                    i18n.language === "es" ? "font-semibold" : ""
                  }`}
                >
                  Español
                </button>
                
                <button
                  onClick={() => cambiarIdioma("en")}
                  
                  className={`block text-left text-sm w-full text-gray-600 hover:text-blue-500 ${
                    i18n.language === "en" ? "font-semibold" : ""
                  }`}
                >
                  English
                </button>
               
              </div>
            )}
          </li>
        </ul>
      </div>

      {/* Cerrar sesión */}
      <div className="p-2 mb-4">
      <CustomTooltip label={t("sidebar.logout")}>
        <button
          onClick={logout}
        
          className="flex items-center gap-2 text-red-500 hover:text-red-700 px-2 py-2 w-full transition"
        >
          <LogOut size={20} />
          {expanded && <span>{t("sidebar.logout")}</span>}
        </button>
        </CustomTooltip>
      </div>
    </aside>
  );
};

export default SidebarEmpleado;