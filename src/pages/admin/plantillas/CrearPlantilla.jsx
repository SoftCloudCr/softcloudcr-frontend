// src/pages/admin/plantillas/CrearPlantilla.jsx

import { useState, useEffect } from "react";
import PasoDatosGenerales from "../../../components/plantillas/PasoDatosGenerales";
import PasoSeleccionarCuestionario from "../../../components/plantillas/PasoSeleccionarCuestionario";
import PasoAdjuntarMateriales from "../../../components/plantillas/PasoAdjuntarMaterial ";
import PasoVistaPrevia from "../../../components/plantillas/PasoVistaPrevia";

const CrearPlantilla = () => {
  // Estado principal que almacena todos los datos de la plantilla
  const [datosPlantilla, setDatosPlantilla] = useState({});

  // Control del paso actual
  const [pasoActual, setPasoActual] = useState(0);

  // Control si se puede avanzar al siguiente paso
  const [puedeAvanzar, setPuedeAvanzar] = useState(false);

  const [archivos, setArchivos] = useState([]);


  // Funciones para actualizar datos y validación
  const actualizarDatos = (nuevosDatos) => {
    setDatosPlantilla((prev) => ({ ...prev, ...nuevosDatos }));
  };

  // Lista de componentes de cada paso
  const pasos = [
    <PasoDatosGenerales
      datos={datosPlantilla}
      actualizarDatos={actualizarDatos}
      puedeAvanzar={setPuedeAvanzar}
    />,
    <PasoSeleccionarCuestionario
      datos={datosPlantilla}
      actualizarDatos={actualizarDatos}
      puedeAvanzar={setPuedeAvanzar}
    />,
<PasoAdjuntarMateriales
  archivos={archivos}
  setArchivos={setArchivos}
  puedeAvanzar={setPuedeAvanzar}
/>,
  <PasoVistaPrevia
    datos={datosPlantilla}
    puedeAvanzar={setPuedeAvanzar}
  />

  ];

  // Actualiza el paso visible
  const irAlSiguientePaso = () => {
    if (pasoActual < pasos.length - 1) {
      setPasoActual((prev) => prev + 1);
    }
  };

  const irAlPasoAnterior = () => {
    if (pasoActual > 0) {
      setPasoActual((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-card py-10 px-4 flex flex-col shadow-lg rounded-lg items-center">
      {/* Título */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Crear Nueva Plantilla
      </h1>

      {/* Contenedor de pasos */}
      <div className="w-full max-w-4xl">
        {pasos[pasoActual]}

        {/* Botones de navegación */}
        <div className="flex justify-between mt-8">
          {pasoActual > 0 && (
            <button
              onClick={irAlPasoAnterior}
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-xl hover:bg-gray-400 transition"
            >
              ⬅️ Anterior
            </button>
          )}

          <button
            onClick={irAlSiguientePaso}
            disabled={!puedeAvanzar}
            className={`px-6 py-2 rounded-xl font-semibold transition ${
              puedeAvanzar
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-400 cursor-not-allowed"
            }`}
          >
            Siguiente ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default CrearPlantilla;
