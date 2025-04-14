import { useTranslation } from "react-i18next";

const CardVistaCapacitacion = ({ data }) => {
    const { t } = useTranslation(); // Traduccion
    if (!data) {
        return <p className="text-center mt-10">Cargando información...</p>;
      }
    

  return (
    <div className="flex flex-col h-auto  bg-card rounded-lg border border-fondo shadow-md shadow-slate-300 ">
      <div className="flex flex-col">
        {/*Titulo  */}
        <div className="flex   justify-center items-center w-auto h-14 m-1 md:m-6 sm:m-2 bg-fondo  rounded-md border  shadow-md  transition-all">
          <p className=" text-lg font-bold font-serif"> {data.nombre}</p>
        </div>
        {/*Objetivo Estrategico  */}
        <div className="flex  justify-center items-center w-auto h-14 m-1 md:m-6 md:mt-1 sm:m-2 bg-fondo  rounded-md border  shadow-md  transition-all">
          <p className=" text-lg font-bold font-serif">
            
           { data.objetivo_estrategico}
          </p>
        </div>
      </div>
      {/* Contenido de la carta  */}
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-1 m-2  md:m-6 transition-all">
        {/* Fechas  */}
        <div className=" p-4 rounde ">
            <h5 className=" text-lg font-bold">
            {t("capacitacion.fecha_inicio")}: 
            </h5>

          <p className="text-md text-gray-500">
          {data.fecha_inicio.substring(0, 10)}
          </p>
        </div>
        <div className=" p-4 rounde">
            <h5 className=" text-lg font-bold">
            {t("capacitacion.fecha_limite")}: 
            </h5>
        
        <p className="text-md text-gray-500" >
        {data.fecha_limite.substring(0, 10)}
        </p>
        
        </div>
        {/* Nota minima  */}
        <div className="bg-blue-800 p-4 rounde ">
          <p>Nota minima </p>
          <p>Nota minima </p>
        </div>
        <div className="bg-blue-600 p-4 rounde">
          <p>Nota minima </p>
          <p>Nota minima </p>
        </div>
        {/* Botones  */}
        <div className="bg-blue-800 p-4 rounde ">
          <p>Botones</p>
        </div>
        <div className="bg-blue-600 p-4 rounde">
          <p>Botones</p>
        </div>
      </div>
      {/* Intentos  */}
      <div className="flex flex-col">
        <div className="flex  justify-center items-center w-auto h-14 m-1 md:m-6 md:mt-1 sm:m-2 bg-fondo  rounded-md border  shadow-md  transition-all">
          <p className=" text-lg font-bold font-serif">
            {" "}
            Objetivo Estrategico{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardVistaCapacitacion;
