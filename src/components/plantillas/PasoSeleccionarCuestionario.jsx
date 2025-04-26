// src/components/plantillas/PasoSeleccionarCuestionario.jsx

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const PasoSeleccionarCuestionario = ({ datos, actualizarDatos, puedeAvanzar }) => {
  const { usuario } = useAuth();

  // Estados locales
  const [cuestionarios, setCuestionarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [seleccionado, setSeleccionado] = useState(datos.id_cuestionario || "");
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(false);

  // 🔵 Cargar cuestionarios cuando se monta el componente
  useEffect(() => {
    const fetchCuestionarios = async () => {
      try {
        const res = await axios.get(`http://192.168.0.101:4000/api/cuestionarios/${usuario.id_empresa}`);
        setCuestionarios(res.data);
        setError(false);
      } catch (err) {
        console.error("Error cargando cuestionarios:", err);
        setError(true);
      } finally {
        setCargando(false);
      }
    };

    if (usuario?.id_empresa) {
      fetchCuestionarios();
    }
  }, [usuario]);

  // 🔵 Actualizar datos en el padre cada vez que cambia la selección
  useEffect(() => {
    actualizarDatos({
      id_cuestionario: seleccionado || null,
    });
  }, [seleccionado]);

  // 🔵 Permitir avanzar siempre desde este paso
  useEffect(() => {
    puedeAvanzar(true); 
  }, []); // Ejecutar solo al montar, no en cada cambio

  // 🔵 Filtrar cuestionarios por búsqueda
  const cuestionariosFiltrados = cuestionarios.filter((q) => {
    const nombre = typeof q.nombre === "string" ? q.nombre.toLowerCase() : "";
    const terminoBusqueda = busqueda.toLowerCase().trim();
  
    console.log("🔎 Comparando:", nombre, "vs", terminoBusqueda);
  
    return nombre.includes(terminoBusqueda);
  });
  
  

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-3xl mx-auto">
      {/* Título */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        🔢 Seleccioná un Cuestionario
      </h2>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar cuestionario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {/* Lista de cuestionarios */}
      <div className="space-y-3">
        {cargando && <p className="text-gray-500 text-center">Cargando cuestionarios...</p>}
        {error && <p className="text-red-500 text-center">Error cargando cuestionarios.</p>}
        {!cargando && !error && cuestionariosFiltrados.length === 0 && (
          <p className="text-gray-500 text-center">No hay cuestionarios disponibles. Crea uno primero.</p>
        )}

        {cuestionariosFiltrados.map((q) => (
          <div key={q.id_cuestionario}>
            <label className="flex items-start gap-3 p-3 bg-gray-100 rounded-xl hover:bg-blue-100 cursor-pointer">
              <input
                type="radio"
                name="cuestionario"
                value={q.id_cuestionario}
                checked={seleccionado === q.id_cuestionario}
                onChange={() => setSeleccionado(q.id_cuestionario)}
                className="mt-1"
              />
              <div>
                <p className="font-semibold text-gray-800">{q.nombre}</p>
                <p className="text-gray-600 text-sm line-clamp-2">{q.descripcion}</p>
              </div>
            </label>
          </div>
        ))}
      </div>

      {/* Mensaje final */}
      <p className="text-sm text-gray-500 mt-6 text-center">
        ⚠️ Puedes dejar esta selección vacía si quieres guardar la plantilla como borrador.
      </p>
    </div>
  );
};

export default PasoSeleccionarCuestionario;
