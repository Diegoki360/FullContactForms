import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { videojuegoSchema } from "./schemas/videojuegoSchema";
import { obtenerVideojuegos } from "./services/videojuegos";

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(videojuegoSchema)
    });

    function registrarVideojuego(datos) {
        console.log("Videojuego válido:", datos);
    }

    return (
      <>
        <form onSubmit={handleSubmit(registrarVideojuego)}>
            <h1>Registro de videojuegos</h1>

            <label htmlFor="titulo">Título</label>
            <input id="titulo" {...register("titulo")} />
            {errors.titulo && <p>{errors.titulo.message}</p>}

            <label htmlFor="plataforma">Plataforma</label>
            <select id="plataforma" {...register("plataforma")}>
                <option value="">Selecciona una plataforma</option>
                <option value="Switch">Nintendo Switch</option>
                <option value="PS5">PlayStation 5</option>
                <option value="PC">PC</option>
            </select>
            {errors.plataforma && <p>{errors.plataforma.message}</p>}

            <label htmlFor="anio">Año de lanzamiento</label>
            <input id="anio" type="number" {...register("anio")} />
            {errors.anio && <p>{errors.anio.message}</p>}

            <label htmlFor="puntuacion">Puntuación</label>
            <input id="puntuacion" type="number" step="0.1" {...register("puntuacion")} />
            {errors.puntuacion && <p>{errors.puntuacion.message}</p>}

            <button type="submit">Registrar videojuego</button>
        </form>

        <button type="button" onClick={probarAPI}>
            Probar API
        </button>
      </>  
    );
}

async function probarAPI() {
    try {
        const datos = await obtenerVideojuegos();
        console.log(datos);
    } catch (error) {
        console.error(error.message);
    }
}

export default App;