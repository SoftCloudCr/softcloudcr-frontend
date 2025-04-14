import EmpleadoLayout from "../../layouts/EmpleadoLayout";

import CardVistaCapacitacion from "../../components/CardVistaCapcitacion";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function VistaCapacitacion() {
  const { usuario } = useAuth(); // Trae todos los datos del usuario
  const { id_asignacion } = useParams();
  const [capacitacion, setCapacitacion] = useState(null);

  // Metodo para traer los datos de las  BD
  useEffect(() => {
    const fetchCapacitacion = async () => {
      // establecemos la constante para buscar la capacitacion
      try {
        // Establecemos la constante que va a almacenar los datos
        const res = await axios.get(
          `http://localhost:4000/api/capacitaciones/vista-previa/${id_asignacion}`
        );
        if (!res.data || res.data.length === 0) {
            console.warn("La respuesta vino vacía");
          }
          setCapacitacion (res.data);
        console.log("Datos de la capacitación:", res.data); 
       console.table(res.data);
      } catch (err) {
        console.error("Error cargando capacitacion :", err);
      }
    };
    fetchCapacitacion();
  },[id_asignacion]);

  return <EmpleadoLayout>

  <CardVistaCapacitacion data={capacitacion}>

  </CardVistaCapacitacion>
  </EmpleadoLayout>;
}

export default VistaCapacitacion;
