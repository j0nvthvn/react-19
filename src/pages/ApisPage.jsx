import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

export const ApisPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["consulta a api hijo"],
    queryFn: async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
      return res.data.results;
    },
    refetchOnWindowFocus: false,
  });

  if (isLoading) return <span>Cargando...</span>;
  if (error) return <span>error... {error.message}</span>;

  return (
    <div className="h-screen bg-amber-300 text-black">
      <span>ApisPage</span>
      <button className="bg-black text-white" onClick={() => refetch()}>
        Click a refetch
      </button>
      <section className="flex flex-col">
        {data?.map((item, index) => {
          return <span key={index}>{item.name}</span>;
        })}
      </section>
    </div>
  );
};
