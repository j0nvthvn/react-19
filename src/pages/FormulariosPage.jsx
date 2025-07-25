import { useForm } from "react-hook-form";

export const FormulariosPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const enviar = (data) => {
    alert(data.nombre);
  };

  return (
    <main className="h-screen bg-amber-300 text-black flex flex-col">
      <h1>FormulariosPage</h1>
      <form onSubmit={handleSubmit(enviar)}>
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
        <button
          type="submit"
          className="px-4 py-2 rounded bg-amber-950 text-white hover:bg-indigo-700"
        >
          Enviar
        </button>
      </form>
    </main>
  );
};
