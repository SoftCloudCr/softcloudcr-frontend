import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const PrivateRouteAdmin = ({ children }) => {
  const { usuario, cargando } = useAuth();
  const [listo, setListo] = useState(false);

  useEffect(() => {
    // Espera explícitamente a que cargue sesión
    if (!cargando) setListo(true);
  }, [cargando]);

  if (!listo) return <div className="text-center p-8">Cargando sesión...</div>;

  if (!usuario || usuario.id_rol !== 1) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRouteAdmin;
