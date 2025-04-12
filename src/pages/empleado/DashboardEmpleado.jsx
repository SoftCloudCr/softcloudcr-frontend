import EmpleadoLayout from "../../layouts/EmpleadoLayout";
import Notificacion from "../../components/notificacion";
import CardProgreso from "../../components/CardProgreso";

const DashboardEmpleado = () => {
  return (
    <EmpleadoLayout>
      <Notificacion
        mensaje="Capacitaciones pendientes"
        notificacion="Tienes capacitaciones sin completar"
        cantidad="2"
      />
      {/* Aquí van las cards */}
<CardProgreso></CardProgreso>

    </EmpleadoLayout>
  );
};

export default DashboardEmpleado;
