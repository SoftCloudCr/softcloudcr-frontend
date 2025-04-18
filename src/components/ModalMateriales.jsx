// ModalMateriales.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalMateriales({ materiales, visible, onClose }) {
  const [modalPdf, setModalPdf] = useState(false);
  const [pdfSeleccionado, setPdfSeleccionado] = useState(null);

  useEffect(() => {
    // Resetear visor al cerrar
    if (!visible) {
      setModalPdf(false);
      setPdfSeleccionado(null);
    }
  }, [visible]);

  const verPDF = (pdf) => {
    setPdfSeleccionado(pdf);
    setModalPdf(true);
  };

  const volverLista = () => {
    setModalPdf(false);
    setPdfSeleccionado(null);
  };

  return (
    <>
      {/* MODAL 1 - Lista de PDFs */}
      <AnimatePresence>
        {visible && !modalPdf && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-bold mb-4">Materiales disponibles</h2>
              <ul className="space-y-2">
                {materiales.map((mat, i) => (
                  <li key={i}>
                    <button
                      onClick={() => verPDF(mat)}
                      className="w-full text-left bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
                    >
                      {mat.nombre}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={onClose} className="mt-4 text-red-500">
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

{/* MODAL 2 - Visor del PDF */}

<AnimatePresence>
  {visible && modalPdf && (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg p-4 w-[95%] max-w-4xl h-[90vh] flex flex-col"
        initial={{ scale: 0.95, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 40 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">
            Visualizando: {pdfSeleccionado?.nombre}
          </h2>
          <div>
            <button
              onClick={volverLista}
              className="mr-2 text-blue-600 font-medium"
            >
              Volver
            </button>
            <button
              onClick={onClose}
              className="text-red-500 font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>

        {/* 👇 CONTENEDOR RESPONSIVO CON FORZADO DE ALTURA */}
        <div className="flex-1 min-h-[400px] overflow-hidden rounded border">
          <iframe
            key={pdfSeleccionado?.url}
            src={`http://192.168.0.101:4000${pdfSeleccionado?.url}`}
            title="PDF Material"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </>
  );
}
