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
      <div className="sm:pl-28">
      <CardProgreso></CardProgreso>
      </div>


    </EmpleadoLayout>
  );
};

export default DashboardEmpleado;
