// src/components/plantillas/PasoDatosGenerales.jsx

import { useState, useEffect } from "react";

const PasoDatosGenerales = ({ datos, actualizarDatos, puedeAvanzar }) => {
  // Estados locales que controlan los campos del formulario
  const [nombre, setNombre] = useState(datos.nombre || "");
  const [objetivo, setObjetivo] = useState(datos.objetivo_estrategico || "");

  // ✅ Al cargar el componente, desactiva avanzar por seguridad
  useEffect(() => {
    puedeAvanzar(false);
  }, []);

  // ✅ Cada vez que el usuario escriba, actualizamos los datos del padre
  useEffect(() => {
    actualizarDatos({
      nombre,
      objetivo_estrategico: objetivo,
    });
  }, [nombre, objetivo]);

  // ✅ Valida si se puede avanzar cuando los campos cambian
  useEffect(() => {
    const nombreValido = nombre.trim().length > 0;
    const objetivoValido = objetivo.trim().length > 0;

    if (nombreValido && objetivoValido) {
      puedeAvanzar(true);
    } else {
      puedeAvanzar(false);
    }
  }, [nombre, objetivo]);

  return (
    <div className="bg-fondo_estatico rounded-2xl shadow-md p-6 h-auto w-full max-w-3xl mx-auto">
      {/* Título principal */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📚 Información General
      </h2>

      {/* Campo: Nombre de la plantilla */}
      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Nombre de la plantilla
        </label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ej: Inducción de nuevos empleados"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Campo: Objetivo Estratégico */}
      <div>
        <label className="block text-gray-700 font-semibold mb-2">
          Objetivo Estratégico
        </label>
        <textarea
          value={objetivo}
          onChange={(e) => setObjetivo(e.target.value)}
          placeholder="Ej: Desarrollar habilidades de seguridad laboral"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
        />
      </div>
    </div>
  );
};

export default PasoDatosGenerales;
