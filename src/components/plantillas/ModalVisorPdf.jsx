// src/components/plantillas/ModalVisorPdf.jsx

import { Dialog } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";

const ModalVisorPdf = ({ visible, archivo, onClose }) => {
  if (!visible || !archivo) return null;

  return (
    <AnimatePresence>
      <Dialog open={visible} onClose={onClose} className="relative z-50">
        {/* Fondo oscuro */}
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

        {/* Contenedor del modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}  // Al inicio, pequeño y transparente
            animate={{ opacity: 1, scale: 1 }}    // Animación al entrar
            exit={{ opacity: 0, scale: 0.9 }}      // Animación al salir
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] p-4 flex flex-col"
          >
            {/* Título y botón cerrar */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800 truncate">
                {archivo.name}
              </h2>
              <button
                onClick={onClose}
                className="text-red-500 font-semibold hover:text-red-700"
              >
                ✖️
              </button>
            </div>

            {/* Contenido: Visor PDF */}
            <div className="flex-1 overflow-hidden rounded border">
              <iframe
                src={URL.createObjectURL(archivo)}
                title="Vista previa PDF"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </Dialog>
    </AnimatePresence>
  );
};

export default ModalVisorPdf;
