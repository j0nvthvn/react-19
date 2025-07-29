import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const CardList = () => {
  const [itemSelect, setItemSelect] = useState();
  const urlImage =
    "https://www.infobae.com/resizer/v2/ZGAA4ML5JZECVN24L7Z3XFDDD4.jpg?auth=a870cb85f7a92ea418827654f26da1bf86ecc50d5b241b00a70068e236f0180e&smart=true&width=1200&height=900&quality=85";
  const temasTeoria = [
    {
      title: "hook useEffect",
      to: "/useffect",
    },
    {
      title: "imagenes",
      to: `/imagenes?src=${urlImage}}`,
    },
    {
      title: "rutas anidadas",
      to: "rutasanidadas",
    },
    {
      title: "apis",
      to: "/apis",
    },
    {
      title: "formularios",
      to: "/formularios",
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      {temasTeoria.map((item, index) => (
        <Link
          onClick={() => setItemSelect(item)}
          to={item.to}
          key={index}
          className="group w-full bg-[#151515] p-5 rounded-2xl border-3 border-[#333] flex justify-between hover:border-[#e776f3] cursor-pointer"
        >
          <h3 className="font-medium text-lg">{item.title}</h3>
          <Icon
            className="group-hover:text-[#e776f3]"
            icon="weui:arrow-filled"
            width="12"
            height="24"
          />
        </Link>
      ))}
    </div>
  );
};
