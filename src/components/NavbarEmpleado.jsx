import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarEmpleado = () => {
  const { usuario } = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="bg-gradient-to-r from-[#005BDB]  via-[#2BA1ED] via-50%    to-[#F9FAFB]  to-100%  shadow-sm  px-4 py-3 flex items-center justify-between  z-50 h-16">
      <h1 className="text-lg font-semibold text-texto animate-tittlepulse pl-16  ">
        {t("dashboard.welcome")}, {usuario?.nombre_usuario}
      </h1>

      <div className="flex items-center gap-2">
      

      </div>
    </nav>
  );
};

export default NavbarEmpleado;
