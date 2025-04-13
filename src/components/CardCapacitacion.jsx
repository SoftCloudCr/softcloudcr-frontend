// src/components/CardCapacitacion.jsx
import { BadgeCheck, AlertCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/graduacion.png";
//import { data } from "react-router-dom";

const estadoColor = {
  Activa:
    "text-gray-100  bg-gradient-to-r from-green-400 from-20%   to-green-600 shadow-md shadow-green-200 hover:from-green-500 hover:to-green-700 hover:transform hover:scale-110  transition-all",
  Pendiente:
    "text-gray-100  bg-gradient-to-r from-orange-400 from-20%   to-orange-600 shadow-md shadow-orange-200 hover:from-orange-500 hover:to-orange-700 hover:transform hover:scale-110  transition-all",
  Vencida:
    "text-gray-100 bg-gradient-to-r from-gray-400 from-20%   to-gray-600 shadow-md shadow-gray-200    transition-all ",
  Reprobado:
  "text-gray-100  bg-gradient-to-r from-red-400 from-20%   to-red-600 shadow-md shadow-red-200 hover:from-red-500 hover:to-red-700 hover:transform hover:scale-110  transition-all",

};

function estado(data) {
  if (!data || !data.estado) return ""; // protección
  return data.estado.charAt(0).toUpperCase() + data.estado.slice(1);
}
/*
const iconoPorEstado = {
  Activa: <BadgeCheck size={24} className="text-green-600" />,
  Pendiente: <Clock size={24} className="text-yellow-600" />,
  Vencida: <AlertCircle size={24} className="text-red-600" />,
};

*/
const CardCapacitacion = ({ data, onClick }) => {
  const { t } = useTranslation();
  //console.log(data.nombre_capacitacion);
  return (
    <div
  onClick={onClick}
  className="cursor-pointer bg-white hover:shadow-xl transition-all rounded-xl p-5 min-h-[200px] border border-gray-200 shadow-sm"
>
  {/* PARTE SUPERIOR: ícono + estado */}
  <div className="flex items-start justify-between mb-3">
    {/* Ícono */}
    <div className="flex items-center gap-2">
      <div className="bg-primario p-2 rounded-lg">
        <img
          src={logo}
          alt="Logo_capacitacion"
          className="w-6 h-6 object-contain animate-cloudpulse"
        />
      </div>

    </div>

    {/* Estado */}
    <span
      className={`text-xs font-medium px-3 py-1 border rounded-lg ${estadoColor[estado(data)]}`}
    >
      {estado(data)}
    </span>
  </div>

  {/* PARTE INFERIOR: detalles en columnas */}
  <h3 className="text-lg font-semibold text-gray-800">
        {data.nombre_capacitacion}
      </h3>
  <p className="text-sm text-gray-500">
    {t("capacitacion.fecha_limite")}: {data.fecha_limite.substring(0, 10)}
  </p>

  <div className="h-[3px] w-full bg-gradient-to-r from-from  via-via  to-to opacity-50 mt-4 rounded-full" />
</div>

  );
};

export default CardCapacitacion;
