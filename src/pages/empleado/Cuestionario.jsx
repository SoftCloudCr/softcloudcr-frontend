import CuestionarioLayout from "../../layouts/CuestionarioLayout";
import PreguntaCard from "../../components/PreguntaCard";
import Temporizador from "../../components/Temporizador";
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Cuestionario = () => {
  const { id_asignacion } = useParams(); // viene desde la URL
  const { usuario } = useAuth(); // trae id_usuario e id_empresa
  const [preguntas, setPreguntas] = useState([]);
  const [indexActual, setIndexActual] = useState(0);
  const [respuestas, setRespuestas] = useState({});
  const [seleccionTemporal, setSeleccionTemporal] = useState([]);
  const tiempoRef = useRef(0);

  // Cargar preguntas reales desde el backend
  useEffect(() => {
    const fetchPreguntas = async () => {
      try {
        const res = await axios.get(
          `http://192.168.0.101:4000/api/capacitaciones/resolver/${id_asignacion}?id_empresa=${usuario.id_empresa}&id_usuario=${usuario.id_usuario}`
        );

        // Reformatear preguntas para que encajen con el componente visual
        const preguntasFormateadas = res.data.preguntas.map((p) => ({
          ...p,
          id: p.id_pregunta,
          imagen: p.url_imagen,
          opciones: p.opciones.map((o) => ({
            id: o.id_opcion,
            texto: o.texto,
          })),
        }));

        setPreguntas(preguntasFormateadas);
      } catch (err) {
        console.error("Error cargando preguntas:", err);
      }
    };

    fetchPreguntas();
  }, [id_asignacion, usuario]);

  // Actualizar selección temporal al cambiar de pregunta
  useEffect(() => {
    if (preguntas.length > 0) {
      const id = preguntas[indexActual]?.id;
      const seleccionGuardada = respuestas[id] || [];
      setSeleccionTemporal(seleccionGuardada);
    }
  }, [indexActual, preguntas]);

  const manejarSeleccion = (seleccionadas) => {
    const idPregunta = preguntas[indexActual]?.id;
    setSeleccionTemporal(seleccionadas);
    setRespuestas((prev) => ({
      ...prev,
      [idPregunta]: seleccionadas,
    }));
  };

  const manejarTiempo = (tiempo) => {
    tiempoRef.current = tiempo;
  };

  const puedeAvanzar = seleccionTemporal.length > 0;

  const enviarRespuestas = () => {
    console.log("📝 Respuestas:", respuestas);
    console.log("⏱ Tiempo total:", tiempoRef.current, "segundos");

    // Aquí podés hacer tu POST a la API
    // axios.post("/api/cuestionarios/responder", { respuestas, tiempo: tiempoRef.current })
  };

  const preguntaActual = preguntas[indexActual];

  return (
    <CuestionarioLayout>
      <Temporizador onTick={manejarTiempo} />

      {preguntaActual && (
        <div className="min-h-screen flex flex-col items-center">
          <PreguntaCard
            pregunta={preguntaActual}
            seleccionadas={seleccionTemporal}
            onSeleccionar={manejarSeleccion}
          />

          <div className="flex gap-4 mt-4">
            {indexActual > 0 && (
              <button
                onClick={() => setIndexActual((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Anterior
              </button>
            )}

            {indexActual < preguntas.length - 1 && (
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

            {indexActual === preguntas.length - 1 && (
              <button
                onClick={enviarRespuestas}
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
      )}
    </CuestionarioLayout>
  );
};

export default Cuestionario;
