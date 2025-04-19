import { useLocation, useNavigate,useParams } from "react-router-dom";
import { CheckCircle, XCircle } from "lucide-react";

/**
 * Página de resultados del cuestionario.
 * Muestra nota final, estado de aprobación y tiempo invertido.
 */
const ResultadoCuestionario = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  // Si no hay datos, redirigir
  if (!state) {
    navigate("/");
    return null;
  }

  const { nota, aprobado, tiempo } = state;

  const formatearTiempo = (s) => {
    const minutos = Math.floor(s / 60).toString().padStart(2, "0");
    const segundos = (s % 60).toString().padStart(2, "0");
    return `${minutos}:${segundos}`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
        {aprobado ? (
          <CheckCircle className="text-green-500 mx-auto" size={64} />
        ) : (
          <XCircle className="text-red-500 mx-auto" size={64} />
        )}

        <h2 className="text-2xl font-bold text-gray-800">
          {aprobado ? "¡Felicidades! Has aprobado" : "No has aprobado esta vez"}
        </h2>

        <p className="text-gray-600 text-lg">
          Tu nota final fue: <span className="font-semibold">{nota}</span>
        </p>

        <p className="text-gray-500 text-sm">
          Tiempo invertido: <span className="font-medium">{formatearTiempo(tiempo)}</span>
        </p>

        <button
          onClick={() => navigate(`/empresa/${slug}/dashboard`)}
          className="mt-4 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
};

export default ResultadoCuestionario;
