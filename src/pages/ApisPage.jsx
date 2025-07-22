import axios from "axios";
import { useEffect, useState } from "react";

export const ApisPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // axios
    //   .get("https://pokeapi.co/api/v2/pokemon?limit=20")
    //   .then((res) => {
    //     setPokemons(res.data.results);
    //     setCargando(false);
    //   })
    //   .catch((err) => {
    //     console.error("error al cargar", err);
    //     setCargando(false);
    //   });
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data.results);
        console.log("data", data.results);
      })
      .catch((error) => console.error("error de codigo", error));
  }, []);
  return (
    <div className="h-screen bg-amber-300 text-black">
      <span>ApisPage</span>
      <section className="flex flex-col">
        {pokemons?.map((item, index) => {
          return <span key={index}>{item.name}</span>;
        })}
      </section>
    </div>
  );
};
