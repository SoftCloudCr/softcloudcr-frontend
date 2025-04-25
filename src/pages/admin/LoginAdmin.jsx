import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import logo from '../../assets/logo.png';
import LanguageSwitcher from "../../components/LanguageSwitcher";

function LoginAdmin() {
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth(); // viene del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://192.168.0.101:4000/api/auth/admin/login", {
        correo,
        clave,
      });

      // 🔐 Guardar token y usuario
      localStorage.setItem("softcloudcr-admin-token", res.data.token);
      login(res.data.usuario, true, res.data.token);


      navigate("/admin/dashboard");
    } catch (err) {
      setError(err?.response?.data?.error || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen pb-10 flex flex-col items-center justify-center bg-gradient-to-b from-[#1E40AF]  via-[#3B82F6]  to-[#d9eaef] px-4 sm:px-6">
       <LanguageSwitcher />

       <div class="mb-1 sm:mb-6">
         <img src={logo}
              alt="Logo_SoftCloudCR" 
              class="w-[15.75rem] h-auto 
              object-contain z-10 animate-cloudpulse " />
       </div>
     
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg shadow-[#1E40AF] p-8 rounded-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Acceso Administrador
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 mb-4 rounded text-sm">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full px-4 py-2 mb-4 border shadow-md rounded-lg focus:outline-none focus:ring-2 focus:[#3B82F6]"
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          className="w-full px-4 py-2 mb-4 border shadow-md rounded-lg focus:outline-none focus:ring-2 focus:[#3B82F6]"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default LoginAdmin;
