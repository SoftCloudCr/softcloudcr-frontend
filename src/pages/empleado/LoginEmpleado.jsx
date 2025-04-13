// src/pages/empleado/LoginEmpleado.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";
// Si usás Vite (React)
import logo from '../../assets/logo.png';




function LoginEmpleado() {
  const [codigo_empleado, setCodigo] = useState("");
  const [clave, setContrasena] = useState("");
  const [error, setError] = useState("");
  //const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const { slug } = useParams();
  const { t } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!codigo_empleado || !clave) {
      setError("Por favor complete todos los campos.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/api/auth/login-empleado/"+slug, {
        codigo_empleado,
        clave,
        //slug,
      });

      const { id_usuario, id_empresa, rol, nombre_usuario } = res.data;

      localStorage.setItem("softcloudcr-session", JSON.stringify({
        id_usuario,
        id_empresa,
        rol,
        nombre_usuario,
        slug_empresa: slug
      }));
console.log("exito");
      navigate(`/empresa/${slug}/dashboard`);
    } catch (err) {
      setError(err?.response?.data?.message || "Error al iniciar sesión.");
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
        onSubmit={handleLogin}flex flex-col items-center p-7 rounded-2xl
        className="bg-fondo shadow-lg shadow-[#1E40AF]  p-8 sm:p-8 rounded-2xl  w-full max-w-md">

          
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-00">
        <h2>{t("login.title")}</h2>
        </h2>

        {error && (
          <div className="bg-red-100 shadow-sm shadow-[#EF4444] text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder={t("login.code")}
          value={codigo_empleado}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full px-4 py-2 mb-4 border shadow-md rounded-lg focus:outline-none focus:ring-2 focus:[#3B82F6]"
        />

        <input
          type="password"
          placeholder= {t("login.password") } 
          value={clave}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full shadow-md px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:[#3B82F6]"
        />

        <button
          type="submit"
          className="w-full bg-primario shadow-lg text-white py-2 rounded-lg hover:bg-secundario transition  "
        >
        {t("login.button")}
        </button>
      </form>
      </div>
    
  );
}

export default LoginEmpleado;
