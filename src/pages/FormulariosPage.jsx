import { useForm } from "react-hook-form";
import { useMenuStore } from "../store/MenuStore";

export const FormulariosPage = () => {
  const { itemSelect } = useMenuStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      nombre: "jonathan",
      edad: 22,
      email: "jonathan@gmail.com",
    },
  });
  const enviar = (data) => {
    alert(data.email);
  };

  return (
    <main className="h-screen text-black flex flex-col gap-5 p-4">
      <h1>FormulariosPage {watch("nombre")}</h1>
      {itemSelect?.title}
      {itemSelect?.to}
      <form
        onSubmit={handleSubmit(enviar)}
        className="border p-2 flex flex-col gap-4"
      >
        <section className="bg-amber-200 p-2">
          <h2>Validar textos</h2>
          <input
            {...register("nombre", {
              required: "El nombre es obligatorio",
              minLength: {
                value: 3,
                message: "Debe tener al menos 3 caracteres",
              },
            })}
            className="p-2 border"
            placeholder="Nombre"
          />
          <p>{errors.nombre?.message}</p>
        </section>
        <section className="bg-amber-200 p-2">
          <h2>Validar correos</h2>
          <input
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Correo inválido",
              },
            })}
            className="p-2 border"
            placeholder="Correo"
          />
          <p>{errors.email?.message}</p>
        </section>
        <section className="bg-amber-200 p-2">
          <h2>Validar números</h2>
          <input
            type="number"
            {...register("edad", {
              required: "La edad es obligatoria",
              valueAsNumber: true,
              min: {
                value: 18,
                message: "Debe ser mayor a 18 años",
              },
              max: {
                value: 99,
                message: "Edad máxima permitida: 99",
              },
            })}
            placeholder="Ej: 25"
          />
          <p>{errors.edad?.message}</p>
        </section>
        <button
          type="submit"
          className="px-4 py-2 rounded bg-amber-950 text-white hover:bg-indigo-700"
        >
          Enviar
        </button>
      </form>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded bg-amber-950 text-white hover:bg-indigo-700"
      >
        Resetear
      </button>
    </main>
  );
};
