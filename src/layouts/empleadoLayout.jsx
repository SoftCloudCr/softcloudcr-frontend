import { useState } from "react";
import NavbarEmpleado from "../components/NavbarEmpleado";
import SidebarEmpleado from "../components/SidebarEmpleado";

import Notificacion from "../components/notificacion";

const EmpleadoLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-[#E6E8EB] relative">
      {/* Navbar como overlay arriba */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <NavbarEmpleado />
      </div>

      {/* Contenedor principal con padding top para que el navbar no tape */}
      <div className="flex w-full pt-16">

        <SidebarEmpleado
          expanded={sidebarExpanded}
          setExpanded={setSidebarExpanded}
        />
        <main className="p-16 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default EmpleadoLayout;
