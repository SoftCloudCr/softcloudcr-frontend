import { useAuth } from "../context/AuthContext";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const NavbarEmpleado = () => {
  const { usuario } = useAuth();
  const { t } = useTranslation();

  return (
    <nav className="bg-primario_2 shadow-md px-4 py-3 flex items-center justify-between z-40 relative">
      <h1 className="text-lg font-semibold text-gray-800">
        {t("dashboard.welcome")}, {usuario?.nombre_usuario}
      </h1>

      <div className="flex items-center gap-2">
      

      </div>
    </nav>
  );
};

export default NavbarEmpleado;
