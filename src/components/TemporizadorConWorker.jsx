import { useEffect, useState } from "react";

/**
 * Componente que utiliza un Web Worker para mantener un temporizador confiable,
 * incluso cuando la pestaña está en segundo plano o en modo de ahorro de energía.
 */
const TemporizadorConWorker = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Crea un nuevo Worker desde el archivo estático
    const worker = new Worker(new URL("../workers/timerWorker.js", import.meta.url), {
      type: "module",
    });

    // Escucha los mensajes del Worker
    worker.onmessage = (e) => {
      console.log("Tiempo desde worker:", e.data);
      setSegundos(e.data);
    };

    // Limpia el worker al desmontar el componente
    return () => {
      worker.terminate();
    };
  }, []);

  // Formato mm:ss
  const formatearTiempo = (s) => {
    const min = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };
  let tiempo = 0;
  setInterval(() => {
    postMessage(tiempo++);
  }, 1000);
  return (
    
<div
  key={tiempo} // Forzar re-render visual
  className="bg-blue-100 text-blue-800 font-bold px-4 py-2 rounded-full shadow fixed top-4 right-4 transition-all duration-300"
>
  ⏱️ {tiempo} seg
</div>
  );
};

export default TemporizadorConWorker;
