import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalConfirmacion({
  visible,
  onClose,
  onConfirm,
  intento_actual,
  intentos_permitidos,
  nota_minima,
  fecha_limite,
}) {

  const intentos = (intento_actual) => {
    const hecho = intento_actual;
    console.log("-----");
  console.log(hecho);
    // Si es null, undefined o no es un número válido, asumimos que es el primer intento
    if (!Number.isInteger(hecho)) {
      return 1;
    }
  
    // Si ya ha hecho intentos válidos, sumamos 1
    return hecho + 1;
  }


  return (
    
    <AnimatePresence>
      {visible && (
        <Dialog
          open={visible}
          onClose={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Fondo oscuro con fade */}
          <motion.div
            className="fixed inset-0 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal animado */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <motion.div
              className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg space-y-4"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
            >
              <Dialog.Title className="text-xl font-bold text-gray-800">
                ¿Estás listo para comenzar?
              </Dialog.Title>

              <p className="text-gray-600">
                Vas a iniciar el intento{" "}
                <strong>{intentos(intento_actual) ?? "?"}</strong> de{" "}
                <strong>{intentos_permitidos}</strong>.
              </p>

              <p className="text-gray-600">
                Nota mínima requerida: <strong>{nota_minima}</strong>
              </p>

              <p className="text-gray-600">
                Fecha límite: <strong>{fecha_limite?.substring(0, 10)}</strong>
              </p>

              <p className="text-sm text-red-600 mt-2">
                Una vez iniciado, no podrás repetir este intento.
              </p>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  className="text-gray-500 hover:text-gray-800 transition"
                  onClick={onClose}
                >
                  Cancelar
                </button>
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  onClick={onConfirm}
                >
                  Comenzar ahora
                </button>
              </div>
            </motion.div>
          </div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
