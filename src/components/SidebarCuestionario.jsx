
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const SidebarCuestionario = ({ expanded, setExpanded }) => {

  return (
    <aside
      className={`bg-gradient-to-b from-[#005BDB]  via-[#2BA1ED]  to-[#F9FAFB] shadow-lg shadow-[#2BA1ED] z-40 h-full transition-all duration-300 flex flex-col justify-between ${
        expanded ? "w-64" : "w-20"
      }`}
    >
      <div className="p-2">
        {/* Toggle */}
        <div className="flex justify-end mb-6">
          <button onClick={() => setExpanded(!expanded)} className="p-1">
            {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          
        </div>

        </div>
    </aside>
  );
};

export default SidebarCuestionario;