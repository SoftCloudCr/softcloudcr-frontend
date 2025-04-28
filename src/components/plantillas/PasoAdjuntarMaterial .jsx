// src/components/plantillas/PasoAdjuntarMateriales.jsx

import { useState, useEffect } from "react";
import { UploadCloud, FileText, X, Eye } from "lucide-react";
import { Dialog } from "@headlessui/react";
import DragAndDropUpload from "./DragAndDropUpload";

const PasoAdjuntarMateriales = ({ archivos, setArchivos, puedeAvanzar }) => {
  const [error, setError] = useState("");
  const [archivoVistaPrevia, setArchivoVistaPrevia] = useState(null);
  const [requierePdf, setRequierePdf] = useState(true); // 🧠 Switch, activado por defecto

  // Procesa archivos arrastrados o seleccionados
  const procesarArchivos = (files) => {
    const nuevosArchivos = Array.from(files);
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
    setError("");
  };

  const eliminarArchivo = (index) => {
    const copia = [...archivos];
    copia.splice(index, 1);
    setArchivos(copia);
  };

  const verArchivo = (archivo) => {
    const urlTemporal = URL.createObjectURL(archivo);
    setArchivoVistaPrevia(urlTemporal);
  };

  const cerrarVistaPrevia = () => {
    if (archivoVistaPrevia) {
      URL.revokeObjectURL(archivoVistaPrevia);
      setArchivoVistaPrevia(null);
    }
  };

  // Controla si se puede avanzar
  useEffect(() => {
    if (requierePdf) {
      puedeAvanzar(archivos.length > 0);
    } else {
      puedeAvanzar(true);
    }
  }, [archivos, requierePdf]);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto">
      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📎 Adjuntar Materiales PDF
      </h2>

      {/* Switch */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <span className="text-gray-700 font-medium">¿Requiere Materiales?</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={requierePdf}
            onChange={() => setRequierePdf((prev) => !prev)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-300 peer-checked:bg-blue-600 transition-all"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
        </label>
      </div>

      {/* Drag and Drop */}
      <div className="mb-4">
        <DragAndDropUpload onDrop={procesarArchivos} accept="application/pdf" multiple />
      </div>

      {/* Error */}
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Lista de archivos */}
      {archivos.length > 0 && (
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
              <div className="flex items-center gap-2">
                <button onClick={() => verArchivo(file)}>
                  <Eye size={18} className="text-blue-500 hover:text-blue-700" />
                </button>
                <button onClick={() => eliminarArchivo(index)}>
                  <X size={18} className="text-red-500 hover:text-red-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Vista Previa */}
      <Dialog open={!!archivoVistaPrevia} onClose={cerrarVistaPrevia} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white w-full max-w-4xl h-[90vh] p-4 rounded-xl shadow-xl flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-gray-700">Vista previa del PDF</h3>
              <button onClick={cerrarVistaPrevia} className="text-red-500 hover:text-red-700">
                Cerrar
              </button>
            </div>
            <iframe
              src={archivoVistaPrevia || ""}
              className="w-full h-full border rounded-lg"
              title="Vista previa del archivo"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PasoAdjuntarMateriales;
