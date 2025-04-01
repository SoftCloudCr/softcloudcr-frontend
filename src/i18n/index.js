import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";

const resources = {
  es: { translation: es },
  en: { translation: en },
};

const idiomaGuardado = localStorage.getItem("softcloudcr-idioma") || "es";

i18n.use(initReactI18next).init({
  resources,
  lng: idiomaGuardado,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
