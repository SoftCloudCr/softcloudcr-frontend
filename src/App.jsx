// src/App.jsx
// App.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import PrivateRouteAdmin from "./components/PrivateRouteAdmin";
import AdminLayout from "./layouts/AdminLayaout";
//Rutas de la pagina Empleados
import LoginEmpleado from "./pages/empleado/LoginEmpleado";
import DashboardEmpleado from "./pages/empleado/DashboardEmpleado";
import CapacitacionesEmpleado from "./pages/empleado/CapacitacionesEmpleado";
import VistaCapacitacion from "./pages/empleado/VistaCapacitacion";
import Cuestionario from "./pages/empleado/Cuestionario";
import ResultadoCuestionario from "./pages/empleado/ResultadoCuestionario";
import CrearPlantilla from "./pages/admin/plantillas/CrearPlantilla";

// Rutas de la pagina Admin
import LoginAdmin from "./pages/admin/LoginAdmin";
import DashboardAdmin from "./pages/admin/DashboardAdmin";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/*Ruta del login  */}
        <Route path="/empresa/:slug/login" element={<LoginEmpleado />} />
        {/*Ruta del dashboard  */}
        <Route
          path="/empresa/:slug/dashboard"
          element={
            <PrivateRoute>
              <DashboardEmpleado />
            </PrivateRoute>
          }
        />
        {/*Ruta de las capacitaciones  */}
        <Route
          path="/empresa/:slug/capacitaciones"
          element={
            <PrivateRoute>
              <CapacitacionesEmpleado />
            </PrivateRoute>
          }
        />
        {/*Ruta del Vista Capacitacion  */}
        <Route
          path="/empresa/:slug/capacitacion/:id_asignacion"
          element={
            <PrivateRoute>
              <VistaCapacitacion />
            </PrivateRoute>
          }
        />
        {/* Ruta de cuestionario */}
        <Route
          path="/empresa/:slug/cuestionario/:id_asignacion"
          element={
            <PrivateRoute>
              <Cuestionario />
            </PrivateRoute>
          }
        />
        <Route
          path="/empresa/:slug/resultado/"
          element={
            <PrivateRoute>
              <ResultadoCuestionario></ResultadoCuestionario>
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginAdmin />} />

        <Route
  path="/admin/dashboard"
  element={
    <PrivateRouteAdmin>
      <AdminLayout>
        <DashboardAdmin />
      </AdminLayout>
    </PrivateRouteAdmin>
  }
/>

<Route
  path="/admin/plantillas/crear"
  element={
    <PrivateRouteAdmin>
      <AdminLayout>
        <CrearPlantilla />
      </AdminLayout>
    </PrivateRouteAdmin>
  }
/>
      </Routes>
    </AuthProvider>
  );
}

export default App;
