// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("softcloudcr-session");
    if (data) {
      setUsuario(JSON.parse(data));
      
    }
  }, []);

  const login = (data) => {
    localStorage.setItem("softcloudcr-session", JSON.stringify(data));
    setUsuario(data);
   
  };

  const logout = () => {
    localStorage.removeItem("softcloudcr-session");
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
