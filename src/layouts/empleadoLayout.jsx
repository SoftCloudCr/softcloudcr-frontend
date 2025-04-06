import { useState } from "react";
import NavbarEmpleado from "../components/NavbarEmpleado";
import SidebarEmpleado from "../components/SidebarEmpleado";

const EmpleadoLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      <SidebarEmpleado expanded={sidebarExpanded} setExpanded={setSidebarExpanded} />

      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300`}>
        <NavbarEmpleado />
        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default EmpleadoLayout;
