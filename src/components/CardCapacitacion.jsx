// src/components/CardCapacitacion.jsx
import { BadgeCheck, AlertCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const estadoColor = {
  Activa: "text-green-600 border-green-500",
  Pendiente: "text-yellow-600 border-yellow-500",
  Vencida: "text-red-600 border-red-500",
};

const iconoPorEstado = {
  Activa: <BadgeCheck size={24} className="text-green-600" />,
  Pendiente: <Clock size={24} className="text-yellow-600" />,
  Vencida: <AlertCircle size={24} className="text-red-600" />,
};

const CardCapacitacion = ({ titulo, estado, fechaLimite, onClick }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white hover:shadow-xl transition-all rounded-xl p-5 mt-5 ms-5 sm:pt-2 min-h-[200px] max-h-[400px] sm:max-h-[450px] md:max-h-[500px]  border border-gray-200 shadow-sm flex items-start justify-between gap-4"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
        <p className="text-sm text-gray-500">
          {t("dashboard.fechaLimite")}: {fechaLimite}
        </p>
        <span
          className={`inline-block mt-2 text-xs font-medium px-3 py-1 border rounded-full ${estadoColor[estado]}`}
        >
          {estado}
        </span>
      </div>
      <div>{iconoPorEstado[estado]}</div>
    </div>
  );
};

export default CardCapacitacion;
