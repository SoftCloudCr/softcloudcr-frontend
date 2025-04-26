// src/components/plantillas/PasoAdjuntarMateriales.jsx

import { useState, useEffect } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import DragAndDropUpload from "./ui/DragAndDropUpload";

const PasoAdjuntarMateriales = ({ archivos = [], setArchivos, puedeAvanzar }) => {
  const [error, setError] = useState("");

  useEffect(() => {
    if (!Array.isArray(archivos)) {
      setArchivos([]);
    }
  }, []);

  // Ñúcleo de validación compartido para input y drag and drop
  const procesarArchivos = (nuevosArchivos) => {
    const total = archivos.length + nuevosArchivos.length;

    if (total > 5) {
      setError("Solo se permiten hasta 5 archivos PDF.");
      return;
    }

    const archivosValidos = nuevosArchivos.filter(
      (file) => file.type === "application/pdf" && file.size <= 10 * 1024 * 1024
    );

    if (archivosValidos.length !== nuevosArchivos.length) {
      setError("Algunos archivos no son PDF o superan los 10MB.");
      return;
    }

    const nuevos = [...archivos, ...archivosValidos];
    setArchivos(nuevos);
    puedeAvanzar(nuevos.length > 0);
    setError("");
  };

  const handleInputFiles = (event) => {
    const files = Array.from(event.target.files);
    procesarArchivos(files);
  };

  const eliminarArchivo = (index) => {
    const copia = [...archivos];
    copia.splice(index, 1);
    setArchivos(copia);
    puedeAvanzar(copia.length > 0);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📎 Adjuntar Materiales PDF
      </h2>

      {/* Input tradicional */}


      {/* Drag and Drop */}
      <div className="mb-4">
        <DragAndDropUpload onDrop={procesarArchivos} accept="application/pdf" multiple />
      </div>
      <div className="mb-4">

        <p className="text-sm text-gray-500 mt-2 text-center">
          Máximo 5 archivos. Cada uno no debe superar los 10MB.
        </p>
      </div>
      {/* Mensaje de error */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Archivos cargados */}
      {Array.isArray(archivos) && archivos.length > 0 && (
        <div className="space-y-2 mt-4">
          {archivos.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 rounded-xl p-3"
            >
              <div className="flex items-center gap-2">
                <FileText className="text-gray-500" />
                <span className="text-gray-700 text-sm">{file.name}</span>
              </div>
              <button onClick={() => eliminarArchivo(index)}>
                <X size={18} className="text-red-500 hover:text-red-700" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PasoAdjuntarMateriales;
