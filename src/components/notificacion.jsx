import { useState, useEffect } from "react";
import logo from "../assets/graduacion.png";

export default function Notificacion({
  mensaje,
  onClose,
  notificacion,
  cantidad,
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    /*
    const timer = setTimeout(() => {
      setVisible(false);
      if (onClose) onClose();
    }, delay);
    return () => clearTimeout(timer);
    */
    // }, [delay, onClose]);
  }, [onClose]);
  if (!visible) return null;

  return (
<div className="fixed top-6 right-6 z-50 bg-white shadow-xl rounded-xl p-4 w-[320px] flex items-center gap-4 animate-notificacionpulse transition-all duration-500">
  
  {/* Ícono / logo circular */}
  <div className="bg-cyan-500 p-2 rounded-full">
    <img
      src={logo}
      alt="Logo_SoftCloudCR"
      className="w-6 h-6 object-contain animate-cloudpulse"
    />
  </div>

  {/* Contenido de texto */}
  <div className="flex-1">
    <p className="text-texto font-semibold text-sm">{mensaje}</p>
    <div className="flex items-center justify-between mt-1">
      <p className="text-texto-suave text-sm">{notificacion}</p>

      <div className="bg-blue-100 text-blue-500 rounded-full px-3 py-1 text-xs font-bold">
        {cantidad}
      </div>
    </div>
  </div>

  {/* Botón cerrar */}
  <button
    onClick={() => setVisible(false)}
    className="text-gray-400 relative  -top-6 right-1 hover:text-error text-lg ml-2"
  >
    &times;
  </button>
</div>

  );
}
