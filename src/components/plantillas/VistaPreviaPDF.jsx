// src/components/plantillas/VistaPreviaPDF.jsx

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const VistaPreviaPDF = ({ archivo, onClose }) => {
  const iframeRef = useRef();

  useEffect(() => {
    if (archivo && iframeRef.current) {
      const fileURL = URL.createObjectURL(archivo);
      iframeRef.current.src = fileURL;
      return () => URL.revokeObjectURL(fileURL); // Limpieza
    }
  }, [archivo]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] flex flex-col relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700"
        >
          <X size={24} />
        </button>

        {/* Vista del PDF */}
        <iframe
          ref={iframeRef}
          title="Vista previa PDF"
          className="flex-1 rounded-b-lg border-t mt-10"
        ></iframe>
      </div>
    </div>
  );
};

export default VistaPreviaPDF;
