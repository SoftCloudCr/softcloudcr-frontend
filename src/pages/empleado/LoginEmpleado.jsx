// src/pages/empleado/LoginEmpleado.jsx
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher";



function LoginEmpleado() {
  const [codigo_empleado, setCodigo] = useState("");
  const [clave, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [password,setPassword] = useState("");
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
    
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <LanguageSwitcher />
      <form
        onSubmit={handleLogin}flex flex-col items-center p-7 rounded-2xl
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">

          
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        <h2>{t("login.title")}</h2>
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="text"
          placeholder={t("login.code")}
          value={codigo_empleado}
          onChange={(e) => setCodigo(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder= {t("login.password") } 
          value={clave}
          onChange={(e) => setContrasena(e.target.value)}
          className="w-full px-4 py-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
        {t("login.button")}
        </button>
      </form>
    </div>
  );
}

export default LoginEmpleado;
