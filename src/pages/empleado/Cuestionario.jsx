import CuestionarioLayout from "../../layouts/CuestionarioLayout";
import PreguntaCard from "../../components/PreguntaCard";
import { useEffect, useState } from "react";

// Preguntas de ejemplo (mock)
const mockPreguntas = [
  {
    id: 1,
    texto: "¿Qué es React?",
    tipo: "unica",
    opciones: [
      { id: 1, texto: "Una base de datos" },
      { id: 2, texto: "Una librería de JavaScript" },
      { id: 3, texto: "Un lenguaje de backend" },
    ],
  },
  {
    id: 2,
    texto: "¿Cuál de estas es una fruta?",
    tipo: "multiple",
    opciones: [
      { id: 4, texto: "Manzana" },
      { id: 5, texto: "Mesa" },
      { id: 6, texto: "Banano" },
      { id: 7, texto: "Lapicero" },
    ],
  },
  {
    id: 3,
    texto: "¿Cuál de estas es una verdura?",
    tipo: "multiple",
    opciones: [
      { id: 4, texto: "Manzana" },
      { id: 5, texto: "Mesa" },
      { id: 6, texto: "Banano" },
      { id: 7, texto: "Lapicero" },
    ],
  },
  {
    id: 4,
    texto: "¿Qué fruta es esta?",
    tipo: "unica",
    imagen: "../../../uploads/img/pregunta.jpg", // o URL externa si querés
    opciones: [
      { id: 10, texto: "Manzana" },
      { id: 11, texto: "Pera" },
      { id: 12, texto: "Uva" }
    ]
  },
  {
    id: 5,
    texto: "Which of the following is a fruit?",
    tipo: "multiple",
    idioma: "en", // 👈 Esto activa el lector en inglés
    opciones: [
      { id: 4, texto: "Apple" },
      { id: 5, texto: "Table" },
      { id: 6, texto: "Banana" },
      { id: 7, texto: "Pen" },
    ],
  },
];

const Cuestionario = () => {
  // Índice de la pregunta que se está mostrando
  const [indexActual, setIndexActual] = useState(0);

  // Estado general de respuestas guardadas para cada pregunta
  const [respuestas, setRespuestas] = useState({});

  // Estado temporal que guarda la selección actual (solo para esta pregunta visible)
  const [seleccionTemporal, setSeleccionTemporal] = useState([]);

  // Cargar pregunta actual según el índice
  const preguntaActual = mockPreguntas[indexActual];

  // Sincroniza selección temporal cada vez que cambia la pregunta o respuestas
  useEffect(() => {
    const seleccionGuardada = respuestas[mockPreguntas[indexActual].id] || [];
    setSeleccionTemporal(seleccionGuardada);
  }, [indexActual]);

  // Se ejecuta cada vez que el usuario selecciona opciones en PreguntaCard
  const manejarSeleccion = (seleccionadas) => {
    // Actualiza selección temporal para validar botones
    setSeleccionTemporal(seleccionadas);

    // Guarda la respuesta en el estado global
    setRespuestas((prev) => ({
      ...prev,
      [preguntaActual.id]: seleccionadas,
    }));
  };

  // Evalúa si se puede avanzar: al menos una opción debe estar seleccionada
  const puedeAvanzar = seleccionTemporal.length > 0;

  return (
    <CuestionarioLayout>
      <div className="min-h-screen  flex flex-col items-center">
        {/* Componente visual que muestra la pregunta y opciones */}
        <PreguntaCard
          pregunta={preguntaActual}
          seleccionadas={seleccionTemporal}
          onSeleccionar={manejarSeleccion}
        />

        {/* Botones de navegación */}
        <div className="flex gap-4 mt-4">
          {/* Botón Anterior */}
          {indexActual > 0 && (
            <button
              onClick={() => setIndexActual((prev) => prev - 1)}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Anterior
            </button>
          )}

          {/* Botón Siguiente */}
          {indexActual < mockPreguntas.length - 1 && (
            <button
              onClick={() => setIndexActual((prev) => prev + 1)}
              className={`px-4 py-2 rounded ${
                puedeAvanzar
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!puedeAvanzar}
            >
              Siguiente
            </button>
          )}

          {/* Botón Enviar (última pregunta) */}
          {indexActual === mockPreguntas.length - 1 && (
            <button
              onClick={() => console.log("Enviar respuestas", respuestas)}
              className={`px-4 py-2 rounded ${
                puedeAvanzar
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
              disabled={!puedeAvanzar}
            >
              Enviar
            </button>
          )}
        </div>
      </div>
    </CuestionarioLayout>
  );
};

export default Cuestionario;
