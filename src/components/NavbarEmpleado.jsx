import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarEmpleado = () => {
  const { usuario } = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="bg-gradient-to-b from-[#1E40AF]  via-[#7DA0CA]  to-[#F9FAFB] shadow-md shadow-[#E5E7EB] px-4 py-3 flex items-center justify-between  z-50 h-16">
      <h1 className="text-lg font-semibold text-texto animate-tittlepulse  ">
        {t("dashboard.welcome")}, {usuario?.nombre_usuario}
      </h1>

      <div className="flex items-center gap-2">
      

      </div>
    </nav>
  );
};

export default NavbarEmpleado;
