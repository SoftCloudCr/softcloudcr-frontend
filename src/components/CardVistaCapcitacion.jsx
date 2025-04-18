import { useTranslation } from "react-i18next";
import { Award } from "lucide-react";


const CardVistaCapacitacion = ({ data, onVerMaterial }) => {
  const { t } = useTranslation(); // Traduccion
  if (!data) {
    return <p className="text-center mt-10">Cargando información...</p>;
  }

  return (
    <div className="flex flex-col h-auto w-11/12 mx-auto bg-white rounded-2xl border border-gray-200 shadow-lg p-6 transition-all duration-300">
      {/* Título */}
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
        {data.nombre}
      </h2>

      {/* Objetivo Estratégico */}
      <p className="text-center italic text-lg text-gray-600 mb-6">
        {data.objetivo_estrategico}
      </p>

      {/* Fechas y nota mínima */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-700">
            {t("capacitacion.fecha_inicio")}:
          </h5>
          <p className="text-gray-500">{data.fecha_inicio.substring(0, 10)}</p>
        </div>
        <div className="text-center">
          <h5 className="text-lg font-semibold text-gray-700">
            {t("capacitacion.fecha_limite")}:
          </h5>
          <p className="text-gray-500">{data.fecha_limite.substring(0, 10)}</p>
        </div>
        <div className="flex justify-center items-center gap-2 col-span-2">
          <Award className="text-yellow-500" size={28} />
          <span className="text-gray-600 font-medium">
            {t("capacitacion.nota_minima")}:
          </span>
          <span className="font-bold text-gray-800">{data.nota_minima}</span>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <button
          onClick={onVerMaterial} // ⬅️ usamos la función del padre este de encarga de mostrar el modal 1
          className="bg-white text-primario_2 border border-primario_2 rounded-xl px-6 py-2 font-medium shadow hover:bg-primario_2 hover:text-white hover:scale-105 transition-all"
        >
          {t("capacitacion.material")}
        </button>
        <button className="bg-green-600 text-white px-6 py-2 rounded-xl font-medium shadow hover:bg-green-700 hover:scale-105 transition-all">
          {t("capacitacion.iniciar_cuestionario")}
        </button>
      </div>

      {/* Intentos */}
      <p className="text-center text-gray-700 text-base">
        {t("capacitacion.intentos_disponibles_parte1")}{" "}
        <span className="font-bold">{data.intentos_permitidos}</span>{" "}
        {t("capacitacion.intentos_disponibles_parte2")}
      </p>
    </div>
  );
};

export default CardVistaCapacitacion;
