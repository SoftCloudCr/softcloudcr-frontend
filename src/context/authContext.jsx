import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true); // 👈 para evitar redirect inmediato

  useEffect(() => {
    const cargarSesion = () => {
      const sessionEmpleado = localStorage.getItem("softcloudcr-session");
      const tokenAdmin = localStorage.getItem("softcloudcr-admin-token");
  
      if (sessionEmpleado) {
        setUsuario(JSON.parse(sessionEmpleado));
      } else if (tokenAdmin) {
        const adminData = localStorage.getItem("softcloudcr-admin-data");
        if (adminData) {
          setUsuario(JSON.parse(adminData));
        }
      }
  
      setCargando(false);
    };
  
    cargarSesion(); // ejecuta al montar
  }, []);
  

  const login = (data, isAdmin = false, token = null) => {
    if (isAdmin) {
      localStorage.setItem("softcloudcr-admin-token", token);
      localStorage.setItem("softcloudcr-admin-data", JSON.stringify(data));
    } else {
      localStorage.setItem("softcloudcr-session", JSON.stringify(data));
    }
    setUsuario(data);
  };

  const logout = () => {
    localStorage.removeItem("softcloudcr-session");
    localStorage.removeItem("softcloudcr-admin-token");
    localStorage.removeItem("softcloudcr-admin-data");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, cargando }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
