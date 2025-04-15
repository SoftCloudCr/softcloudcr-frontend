import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Import de componentes
import EmpleadoLayout from "../../layouts/EmpleadoLayout";
import ModalMateriales from "../../components/ModalMateriales";
import CardVistaCapacitacion from "../../components/CardVistaCapcitacion";

function VistaCapacitacion() {
  const { usuario } = useAuth(); // Trae todos los datos del usuario
  const { id_asignacion } = useParams();
  // Control de estados
  const [capacitacion, setCapacitacion] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarModalLista, setMostrarModalLista] = useState(false);

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
        setCapacitacion(res.data);
        console.log("Datos de la capacitación:", res.data);
        console.table(res.data);
      } catch (err) {
        console.error("Error cargando capacitacion :", err);
      }
    };
    fetchCapacitacion();
  }, [id_asignacion]);

  // Mostrar materiales
  const materiales = [
    { nombre: "Política de seguridad", url: "/pdfs/seguridad.pdf" },
    { nombre: "Reglamento interno", url: "/pdfs/reglamento.pdf" },
  ];

  const abrirModalLista = () => setMostrarModalLista(true);
  const cerrarModal = () => setMostrarModal(false);

  return (
    <EmpleadoLayout>
      <CardVistaCapacitacion
        data={capacitacion}
        onVerMaterial={abrirModalLista}
      >
        {/* Renderizamos el modal si está activo */}
        {mostrarModalLista && (
          <ModalMateriales
            materiales={capacitacion?.archivos_pdf.map((pdf) => ({
              nombre: pdf.nombre_original,
              url: pdf.url_archivo,
            }))}
            visible={mostrarModalLista}
            onClose={() => setMostrarModalLista(false)}
          />
        )}
      </CardVistaCapacitacion>
    </EmpleadoLayout>
  );
}

export default VistaCapacitacion;
