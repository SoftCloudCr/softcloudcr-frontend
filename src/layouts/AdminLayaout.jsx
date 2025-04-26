import { useState } from "react";
import SidebarAdmin from "../components/SidebarAdmin";
import NavbarEmpleado from "../components/NavbarEmpleado"; // Si vas a usar uno nuevo, cambialo por NavbarAdmin

const AdminLayout = ({ children }) => {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (

<div className="flex h-screen bg-[#1f5098] relative overflow-hidden">
  {/* Navbar fijo arriba */}
  <div className="absolute top-0 left-0 right-0 z-50">
    <NavbarEmpleado />
  </div>

  {/* Contenedor principal con padding superior */}
  <div className="flex flex-1 pt-16 relative">
    {/* Overlay en móvil */}
    {sidebarExpanded && (
      <div
        className="fixed inset-0 bg-black/40 z-40 md:hidden"
        onClick={() => setSidebarExpanded(false)}
      />
    )}

    {/* Sidebar con scroll si es necesario */}
    <SidebarAdmin
      expanded={sidebarExpanded}
      setExpanded={setSidebarExpanded}
    />

    {/* Contenido principal */}
    <main className="flex-1 overflow-y-auto md:p-16 p-2 transition-all bg-[#f3f4f6]">
      {children}
    </main>
  </div>
</div>

  );
};

export default AdminLayout;