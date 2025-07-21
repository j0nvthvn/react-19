import imagenlocal from "../assets/dog-8781844_1280.jpg";
export const ImagenesPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center">Imagenes con REACT</h1>
      <section className="space-y-2 ">
        <h2 className="text-xl font-semibold">Imagen local importada</h2>
        <img src={imagenlocal} alt="imagen_local" />
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
        <div className="h-64 bg-cover bg-cetner rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2024/05/22/21/51/dog-8781844_960_720.jpg')",
          }}
        >
          <span>Fondo con texto encima</span>
        </div>
      </section>
    </main>
  );
};
