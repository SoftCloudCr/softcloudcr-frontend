// ModalMateriales.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ModalMateriales({ materiales }) {
  const [modalLista, setModalLista] = useState(false);
  const [modalPdf, setModalPdf] = useState(false);
  const [pdfSeleccionado, setPdfSeleccionado] = useState(null);

  const abrirLista = () => setModalLista(true);

  const verPDF = (pdf) => {
    setPdfSeleccionado(pdf);
    setModalLista(false);
    setModalPdf(true);
  };

  const volverLista = () => {
    setModalPdf(false);
    setModalLista(true);
  };

  return (
    <div>
      <button onClick={abrirLista} className="bg-primario text-white px-4 py-2 rounded">
        Ver materiales
      </button>

      {/* MODAL 1 - Lista de PDFs */}
      <AnimatePresence>
        {modalLista && (
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
              <button onClick={() => setModalLista(false)} className="mt-4 text-red-500">
                Cerrar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL 2 - Visor del PDF */}
      <AnimatePresence>
        {modalPdf && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-4 w-[95%] h-[90%] max-w-4xl"
              initial={{ scale: 0.95, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 40 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-bold">Visualizando: {pdfSeleccionado?.nombre}</h2>
                <div>
                  <button onClick={volverLista} className="mr-2 text-blue-600 font-medium">
                    Volver
                  </button>
                  <button onClick={() => setModalPdf(false)} className="text-red-500 font-medium">
                    Cerrar
                  </button>
                </div>
              </div>
              <iframe
                src={pdfSeleccionado?.url}
                title="PDF Material"
                className="w-full h-[85%] rounded border"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
