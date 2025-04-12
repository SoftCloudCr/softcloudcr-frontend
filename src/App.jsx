// src/App.jsx
// App.jsx
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
//Rutas de la pagina
import LoginEmpleado from "./pages/empleado/LoginEmpleado";
import DashboardEmpleado from "./pages/empleado/DashboardEmpleado";
import CapacitacionesEmpleado from "./pages/empleado/CapacitacionesEmpleado";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/empresa/:slug/login" element={<LoginEmpleado />} />
        <Route
          path="/empresa/:slug/dashboard"
          element={
            <PrivateRoute>
              <DashboardEmpleado />
            </PrivateRoute>
          }
        />
        <Route 
        path="/empresa/:slug/capacitaciones"
        element ={
          <PrivateRoute>
            <CapacitacionesEmpleado />
          </PrivateRoute>
        }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
