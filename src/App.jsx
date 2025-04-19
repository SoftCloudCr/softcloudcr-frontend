// src/App.jsx
// App.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
//Rutas de la pagina
import LoginEmpleado from "./pages/empleado/LoginEmpleado";
import DashboardEmpleado from "./pages/empleado/DashboardEmpleado";
import CapacitacionesEmpleado from "./pages/empleado/CapacitacionesEmpleado";
import VistaCapacitacion from "./pages/empleado/VistaCapacitacion";
import Cuestionario from "./pages/empleado/Cuestionario";

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
          element = {
            <PrivateRoute>
              <VistaCapacitacion/>
            </PrivateRoute>
          }
          />
          {  /* Ruta de cuestionario */}
          <Route 
          path="/empresa/:slug/cuestionario/:id_asignacion"
          element={
            <PrivateRoute>
              <Cuestionario/>
            </PrivateRoute>
          }
          />

      </Routes>
    </AuthProvider>
  );
}

export default App;
