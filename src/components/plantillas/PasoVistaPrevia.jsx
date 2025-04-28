import { CheckCircle } from "lucide-react";

const PasoVistaPrevia = ({ datosPlantilla, archivos, cuestionarioSeleccionado, nombreCuestionario }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-3xl mx-auto">
      {/* Título */}
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        🔹 Vista previa de tu Plantilla
      </h2>

      {/* Resumen general */}
      <div className="space-y-6">
        {/* Nombre */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Nombre de la plantilla:</h3>
          <p className="text-gray-600">{datosPlantilla.nombre || "-"}</p>
        </div>

        {/* Objetivo */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Objetivo Estratégico:</h3>
          <p className="text-gray-600">{datosPlantilla.objetivo_estrategico || "-"}</p>
        </div>

        {/* Cuestionario */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Cuestionario asignado:</h3>
          <p className="text-gray-600">
            {cuestionarioSeleccionado ? nombreCuestionario : "(Esta plantilla quedará como borrador)"}
          </p>
        </div>

        {/* Materiales adjuntos */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Materiales adjuntos:</h3>
          {archivos.length > 0 ? (
            <ul className="list-disc list-inside text-gray-600">
              {archivos.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No se adjuntaron materiales.</p>
          )}
        </div>
      </div>

      {/* Confirmación visual */}
      <div className="flex flex-col items-center mt-10">
        <CheckCircle size={80} className="text-green-500 mb-4 animate-bounce" />
        <p className="text-gray-700 text-lg font-semibold text-center">
          ¡Todo listo! Revisa la información antes de continuar.
        </p>
      </div>
    </div>
  );
};

export default PasoVistaPrevia;
