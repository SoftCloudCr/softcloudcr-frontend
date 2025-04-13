import EmpleadoLayout from "../../layouts/EmpleadoLayout";
import { useNavigate, useParams } from "react-router-dom";
import CardCapacitacion from "../../components/CardCapacitacion";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";

function CapacitacionesEmpleado() {
  const { usuario } = useAuth(); // Se almacenan los datos del usuario
  const [capacitaciones, setCapacitaciones] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();

  // Creamos el metodo para el handle que hace la funcion del click
  const handleClick = (id_asignacion) => {
    navigate(`/empresa/${slug}/capacitacion/${id_asignacion}`);
  };
  useEffect(() => {
    const fetchCapacitaciones = async () => {
      try {
        console.log(usuario.id_usuario);
        const res = await axios.get(
          `http://localhost:4000/api/empleado/capacitaciones/pendientes/${usuario.id_usuario}/8`
        );
        setCapacitaciones(res.data);
        console.log("prueba :" + capacitaciones);
      } catch (err) {
        console.error("Error cargando capacitaciones :", err);
      }
    };
    fetchCapacitaciones();
  }, [usuario.id_usuario]);

  return (
    <EmpleadoLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {capacitaciones.map((capacitacion) => (
          <CardCapacitacion
            key={capacitacion.id_capacitacion}
            data={capacitacion}
            onClick={() => handleClick(capacitacion.id_asignacion)}
          />
        ))}
      </div>
    </EmpleadoLayout>
  );
}

export default CapacitacionesEmpleado;

/*
const CapacitacionesEmpleado = () => {
  return (
    <EmpleadoLayout>
      {/* Aqui va el contenido  */ /*}
      <div className="flex h-screen bg-[#E6E8EB] relative"  >

        <CardCapacitacion
          titulo="Curso de Seguridad"
          estado="Activa"
          fechaLimite="15 de Abril"
          onClick={() => console.log("Ver detalle de la capacitación")}
        />
      </div>
    </EmpleadoLayout>
  );
};
*/
