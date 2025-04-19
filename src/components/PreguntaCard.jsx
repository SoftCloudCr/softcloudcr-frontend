import { useState, useEffect } from "react";

/**
 * Componente visual para mostrar una pregunta con imagen, opciones y lector por voz.
 * Soporta selección única o múltiple. Usa SpeechSynthesis API para lectura automática.
 */
const PreguntaCard = ({ pregunta, seleccionadas, onSeleccionar }) => {
  const [seleccionLocal, setSeleccionLocal] = useState(seleccionadas || []);

  // Sincroniza selección local cuando cambia desde el padre
  useEffect(() => {
    setSeleccionLocal(seleccionadas || []);
  }, [seleccionadas]);

  // Notifica al padre cada vez que cambia la selección local
  useEffect(() => {
    onSeleccionar(seleccionLocal);
  }, [seleccionLocal]);

  /**
   * Alterna la selección de opciones según tipo de pregunta
   */
  const toggleOpcion = (id_opcion) => {
    if (pregunta.tipo === "multiple") {
      setSeleccionLocal((prev) =>
        prev.includes(id_opcion)
          ? prev.filter((id) => id !== id_opcion)
          : [...prev, id_opcion]
      );
    } else {
      setSeleccionLocal((prev) =>
        prev.includes(id_opcion) ? [] : [id_opcion]
      );
    }
  };


  const getLabel = (idioma, index) => {
    if (idioma === "en") return `Option ${index + 1}`;
    return `Opción ${index + 1}`;
  };
  /**
   * Función que activa el lector inmersivo con SpeechSynthesis API
   */
  const leerPregunta = () => {
    if (!window.speechSynthesis) {
      alert("Tu navegador no soporta lectura por voz.");
      return;
    }

    const texto =
    pregunta.texto +
    ". " +
    pregunta.opciones
      .map((op, i) => `${getLabel(pregunta.idioma, i)}: ${op.texto}.`)
      .join(" ");

    const mensaje = new SpeechSynthesisUtterance(texto);

    // Detectamos el idioma o usamos español por defecto
    const idioma = pregunta.idioma === "en" ? "en-US" : "es-ES";
    mensaje.lang = idioma;

    // Inicia lectura
    window.speechSynthesis.cancel(); // cancela si había otra lectura
    window.speechSynthesis.speak(mensaje);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mx-auto transition-all">
      {/* Encabezado de pregunta */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-800">{pregunta.texto}</h3>
        <button
          onClick={leerPregunta}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          🔊 Escuchar
        </button>
      </div>

      {/* Imagen si aplica */}
      {pregunta.imagen && (
        <div className="w-full max-w-md max-h-64 mx-auto mb-4 bg-gray-50 border border-white rounded-lg flex items-center justify-center overflow-hidden shadow">
          <img
            src={pregunta.imagen}
            alt="Imagen relacionada a la pregunta"
            className="object-contain w-full h-full"
          />
        </div>
      )}

      {/* Lista de opciones */}
      <div className="space-y-2">
        {pregunta.opciones.map((opcion) => (
          <button
            key={opcion.id}
            onClick={() => toggleOpcion(opcion.id)}
            className={`w-full text-left px-4 py-2 border rounded-lg transition-all ${
              seleccionLocal.includes(opcion.id)
                ? "bg-blue-100 border-blue-500 text-blue-700 font-semibold"
                : "bg-gray-100 border-gray-300 hover:bg-gray-200"
            }`}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreguntaCard;
