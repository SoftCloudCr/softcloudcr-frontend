import LanguageSwitcher from "./LanguageSwitcher";

const CardProgreso = () => {
  return (
    <div class="w-full h-auto bg-red-500 rounded-lg border border-gray-300 shadow-inner">
      {/*<!-- contenido interno como una barra de progreso o íconos -->*/}
      <div class="w-full h-6 bg-gray-200 rounded-lg overflow-hidden">
        <div class="h-full bg-primario w-[10%] transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default CardProgreso;
