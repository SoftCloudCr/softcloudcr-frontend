// src/components/LanguageSwitcher.jsx
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const cambiarIdioma = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("softcloudcr-idioma", lng); // para recordar la selección
  };

  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <button
        onClick={() => cambiarIdioma("es")}
        className={`text-sm px-3 py-1 rounded border ${i18n.language === "es" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        ES
      </button>
      <button
        onClick={() => cambiarIdioma("en")}
        className={`text-sm px-3 py-1 rounded border ${i18n.language === "en" ? "bg-blue-500 text-white" : "bg-white text-gray-800"}`}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
