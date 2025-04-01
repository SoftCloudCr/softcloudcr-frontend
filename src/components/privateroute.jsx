// src/components/PrivateRoute.jsx
import { Navigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { usuario } = useAuth();
  const { slug } = useParams();

  if (!usuario || usuario.slug_empresa !== slug) {
    return <Navigate to={`/empresa/${slug}/login`} replace />;
  }

  return children;
}

export default PrivateRoute;
