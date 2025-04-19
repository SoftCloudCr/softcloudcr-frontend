import { Dialog } from "@headlessui/react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Modal que se muestra mientras se calculan los resultados del cuestionario.
 * Incluye animación visual con spinner y barra progresiva infinita.
 */
const ModalCargaResultado = ({ visible }) => {
  if (!visible) return null;

  return (
    <Dialog open={visible} onClose={() => {}} className="relative z-50">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenido modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md rounded-xl bg-white shadow-lg p-6 space-y-6 text-center">
          <div className="flex justify-center">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
          </div>

          <Dialog.Title className="text-xl font-bold text-gray-800">
            Calculando tus resultados...
          </Dialog.Title>
          <p className="text-gray-500 text-sm">
            Estamos evaluando tus respuestas. Un momento por favor.
          </p>

          {/* Barra de animación progresiva infinita */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-4">
            <motion.div
              className="h-full bg-blue-500"
              animate={{ x: ["-100%", "100%"] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              style={{ width: "50%" }}
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default ModalCargaResultado;
