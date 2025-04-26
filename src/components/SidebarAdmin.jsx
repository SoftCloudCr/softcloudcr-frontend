import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  FilePlus,
  FileText,
  Book,
  BarChart2,
  Award,
  Shield,
  Users,
  Layers,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Languages,
  LayoutDashboard,
  PieChart,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import CustomTooltip from "./CustomTooltip";

const SidebarAdmin = ({ expanded, setExpanded }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { logout } = useAuth();

  // Submenús
  const [showPlantillas, setShowPlantillas] = useState(false);
  const [showCuestionarios, setShowCuestionarios] = useState(false);
  const [showReportes, setShowReportes] = useState(false);
  const [showGamificacion, setShowGamificacion] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [showPlanes, setShowPlanes] = useState(false);
  const [showIdioma, setShowIdioma] = useState(false);

  const handleNavigate = (route) => {
    if (!expanded) setExpanded(true);
    navigate(route);
  };

  const toggle = (setter) => {
    if (!expanded) setExpanded(true);
    setter((prev) => !prev);
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
      className={`fixed md:static top-0 left-0 z-50 h-auto bg-gradient-to-b from-from via-via via-70% to-to shadow-lg shadow-[#2BA1ED]
      transition-all duration-300 flex flex-col justify-between
      ${expanded ? "w-64" : "sm:w-10 md:w-20"}`}
    >
      <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
        <div className="flex justify-end mb-6">
          <button onClick={() => setExpanded(!expanded)} className="p-1">
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>

        <ul className="space-y-2">

          {/* 🧭 Dashboard */}
          <li>
            <CustomTooltip label="Dashboard">
              <button
                onClick={() => handleNavigate("/admin/dashboard")}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <LayoutDashboard size={20} />
                {expanded && <span>Dashboard</span>}
              </button>
            </CustomTooltip>
          </li>

          {/* 📘 Plantillas */}
          <li>
            <CustomTooltip label="Plantillas">
              <button
                onClick={() => toggle(setShowPlantillas)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <FileText size={20} />
                {expanded && <span>Plantillas</span>}
              </button>
            </CustomTooltip>
            {expanded && showPlantillas && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/plantillas/crear")}>Crear</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/plantillas/activas")}>Ver plantillas</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/plantillas/borradores")}>Borradores</button>
              </div>
            )}
          </li>

          {/* 🧠 Cuestionarios */}
          <li>
            <CustomTooltip label="Cuestionarios">
              <button
                onClick={() => toggle(setShowCuestionarios)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <Book size={20} />
                {expanded && <span>Cuestionarios</span>}
              </button>
            </CustomTooltip>
            {expanded && showCuestionarios && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/cuestionarios/crear")}>Crear</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/cuestionarios/todos")}>Ver cuestionarios</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/cuestionarios/borradores")}>Borradores</button>
              </div>
            )}
          </li>

          {/* 📢 Capacitaciones activas */}
          <li>
            <CustomTooltip label="Capacitaciones activas">
              <button
                onClick={() => handleNavigate("/admin/capacitaciones/activas")}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <FilePlus size={20} />
                {expanded && <span>Capacitaciones</span>}
              </button>
            </CustomTooltip>
          </li>

          {/* 📊 Reportes */}
          <li>
            <CustomTooltip label="Reportes">
              <button
                onClick={() => toggle(setShowReportes)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <BarChart2 size={20} />
                {expanded && <span>Reportes</span>}
              </button>
            </CustomTooltip>
            {expanded && showReportes && (
              <div className="ml-8 mt-1 space-y-1">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/reportes/general")}>General</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/reportes/departamento")}>Por departamento</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]"  onClick={() => handleNavigate("/admin/reportes/individual")}>Individual</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/reportes/mensual")}>Mensual</button>
              </div>
            )}
          </li>

          {/* 🏆 Gamificación */}
          <li>
            <CustomTooltip label="Gamificación">
              <button
                onClick={() => toggle(setShowGamificacion)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <Award size={20} />
                {expanded && <span>Gamificación</span>}
              </button>
            </CustomTooltip>
            {expanded && showGamificacion && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/gamificacion/insignias")}>Insignias</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/gamificacion/ranking")}>Ranking</button>
              </div>
            )}
          </li>

          {/* 👥 Administración */}
          <li>
            <CustomTooltip label="Administración">
              <button
                onClick={() => toggle(setShowAdmin)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <Users size={20} />
                {expanded && <span>Administración</span>}
              </button>
            </CustomTooltip>
            {expanded && showAdmin && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/empleados")}>Empleados</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/departamentos")}>Departamentos</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/roles")}>Roles y niveles</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/logs")}>Logs del sistema</button>
              </div>
            )}
          </li>

          {/* 💳 Planes */}
          <li>
            <CustomTooltip label="Planes">
              <button
                onClick={() => toggle(setShowPlanes)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <PieChart size={20} />
                {expanded && <span>Planes</span>}
              </button>
            </CustomTooltip>
            {expanded && showPlanes && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/planes")}>Ver planes</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/creditos")}>Créditos</button>
                <button className="block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA]" onClick={() => handleNavigate("/admin/facturacion")}>Facturación</button>
              </div>
            )}
          </li>

          {/* 🌐 Idioma */}
          <li>
            <CustomTooltip label={t("sidebar.idioma")}>
              <button
                onClick={() => toggle(setShowIdioma)}
                className="flex items-center gap-2 px-2 py-2 text-[#F9FAFB] hover:text-[#7DA0CA] hover:scale-105 w-full transition"
              >
                <Languages size={20} />
                {expanded && <span>{t("sidebar.idioma")}</span>}
              </button>
            </CustomTooltip>
            {expanded && showIdioma && (
              <div className="ml-8 mt-1 space-y-1 text-sm text-[#E3F2FD]">
                <button
                  onClick={() => cambiarIdioma("es")}
                  className={`block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA] ${
                    i18n.language === "es" ? "font-semibold" : ""
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => cambiarIdioma("en")}
                  className={`block text-left text-sm w-full text-[#C3D2D6] hover:text-[#7DA0CA] ${
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
            {/* 🔒 Cerrar sesión */}
            <div className="p-2 mb-4">
        <CustomTooltip label={t("sidebar.logout")}>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-500 hover:scale-105 hover:text-red-700 px-2 py-2 w-full transition"
          >
            <LogOut size={20} />
            {expanded && <span>{t("sidebar.logout")}</span>}
          </button>
        </CustomTooltip>
      </div>
    </aside>
  );
};

export default SidebarAdmin;
