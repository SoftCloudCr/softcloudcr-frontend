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
      <div className="flex w-full pt-16 pl-16  md:pl-0   ">
        
        {sidebarExpanded && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setSidebarExpanded(false)}
          />
        )}
        <SidebarEmpleado
          expanded={sidebarExpanded}
          setExpanded={setSidebarExpanded}
        />
        <main className="  md:p-16 p-2 flex-1 transition-all overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default EmpleadoLayout;
