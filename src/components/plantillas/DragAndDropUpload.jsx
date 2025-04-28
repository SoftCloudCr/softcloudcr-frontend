// src/components/plantillas/DragAndDropUpload.jsx

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";

/**
 * Componente reutilizable para cargar archivos por Drag & Drop.
 * Props:
 * - onDrop: función que recibe los archivos válidos
 */
const DragAndDropUpload = ({ onDrop }) => {
  // Callback que maneja los archivos soltados
  const handleDrop = useCallback(
    (acceptedFiles) => {
      onDrop(acceptedFiles);
    },
    [onDrop]
  );

  // Configuración del Dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: { "application/pdf": [".pdf"] },
    multiple: true,
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all
        ${isDragActive ? "bg-blue-50 border-blue-400" : "bg-blue-100 border-blue-300"}`}
    >
      <input {...getInputProps()} />
      <div className="flex justify-center items-center gap-2 text-blue-700 font-medium">
        <UploadCloud size={22} />
        <span>Soltá o hacé clic para subir archivos PDF</span>
      </div>
      <p className="text-sm text-gray-600 mt-2">Tamaño máximo: 10MB por archivo</p>
    </div>
  );
};

export default DragAndDropUpload;
