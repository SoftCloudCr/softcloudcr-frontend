import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRouteAdmin = ({ children }) => {
  const { usuario } = useAuth();

  if (!usuario || usuario.rol !== 1) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRouteAdmin;
