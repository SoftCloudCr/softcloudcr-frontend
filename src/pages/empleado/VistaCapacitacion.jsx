import EmpleadoLayout from "../../layouts/EmpleadoLayout";
import CuestionarioLayout from "../../layouts/CuestionarioLayaout";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import { useEffect,useState } from "react";

function VistaCapacitacion(){
const {usuario} = useAuth(); // Trae todos los datos del usuario

return(
<CuestionarioLayout>


</CuestionarioLayout>

);

};

export default VistaCapacitacion;