import { useEffect, useState } from "react";

const Temporizador = ({ onTick }) => {
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);

  useEffect(() => {
    const tiempoInicio = Date.now();

    const intervalo = setInterval(() => {
      const ahora = Date.now();
      const segundos = Math.floor((ahora - tiempoInicio) / 1000);
      setTiempoTranscurrido(segundos);
      if (onTick) onTick(segundos); // 🔁 Enviamos al padre
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return null; // 🧪 No se muestra nada
};

export default Temporizador;
