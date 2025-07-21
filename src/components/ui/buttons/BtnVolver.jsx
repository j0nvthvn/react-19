import { Icon } from "@iconify/react/dist/iconify.js";
import { useNavigate } from "react-router-dom";

export const BtnVolver = () => {
    const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(-1)} className="absolute top-4 left-4 bg-white text-black hover:bg-[#f2f2f2] p-3 rounded-full shadow-lg cursor-pointer">
      <Icon icon="ic:round-arrow-back" width="24" height="24" />
    </button>
  );
};
