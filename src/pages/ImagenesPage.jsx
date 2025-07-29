import { useParams, useSearchParams } from "react-router-dom";
import imagenlocal from "../assets/dog-8781844_1280.jpg";
import { BtnVolver } from "../components/ui/buttons/BtnVolver.jsx";
import { useMenuStore } from "../store/MenuStore.jsx";
export const ImagenesPage = () => {
  const { itemSelect } = useMenuStore();
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src");
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <BtnVolver />
      <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>
      {itemSelect?.title}
      {itemSelect?.to}
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen local importada</h2>
        <img src={imagenlocal} alt="imagen_local" />
      </section>
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen con searchParams</h2>
        <img src={src} alt="imagen_local" />
      </section>
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen desde URL externa</h2>
        <img
          src="https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_960_720.jpg"
          alt="imagen_local"
        />
      </section>
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen como fondo</h2>
        <div
          className="h-64 bg-cover bg-center rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_960_720.jpg')",
          }}
        >
          <span className="bg-black/60 px-4 py-2 rounded-2xl text-white">
            Fondo con texto encima
          </span>
        </div>
      </section>
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen Lazy loading</h2>
        <img
          src="https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_960_720.jpg"
          alt="imagen_local"
          loading="lazy"
        />
      </section>
    </main>
  );
};
