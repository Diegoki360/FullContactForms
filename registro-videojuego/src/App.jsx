import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { videojuegoSchema } from "./schemas/videojuegoSchema";
import { obtenerVideojuegos } from "./services/videojuegos";
import { crearVideojuego } from "./services/videojuegos";
import { eliminarVideojuego } from "./services/videojuegos";
import ListaVideojuegos from "./components/ListaVideojuegos";
import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

function App() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(videojuegoSchema)
    });

    const { data: videojuegos, isPending, isError } = useQuery({
        queryKey: ["videojuegos"],
        queryFn: obtenerVideojuegos
    });

    console.log("Videojuegos recuperados:", videojuegos);

    function registrarVideojuego(datos) {
        mutacion.mutate(datos);
    }

    const queryClient = useQueryClient();

    const mutacion = useMutation({
        mutationFn: crearVideojuego,
        onSuccess: () => {
                reset();

            queryClient.invalidateQueries({
                queryKey: ["videojuegos"]
            });
        }
    });

    const mutacionEliminar = useMutation({
        mutationFn: eliminarVideojuego,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["videojuegos"]
            });
        }
    });

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

            <label htmlFor="foto">URL de la portada</label>

            <input
                id="foto"
                type="url"
                {...register("foto")}
            />

            {errors.foto && <p>{errors.foto.message}</p>}

            <button type="submit" disabled={mutacion.isPending}>
                {mutacion.isPending ? "Registrando..." : "Registrar videojuego"}
            </button>

            {mutacion.isError && <p>Error al registrar</p>}

            {mutacion.isSuccess && <p>¡Videojuego registrado!</p>}
        </form>

        <h2>Mi colección de videojuegos</h2>

            {isPending && <p>Cargando videojuegos...</p>}

            {isError && <p>Error al recuperar videojuegos</p>}

            {videojuegos && (
                <ListaVideojuegos
                    videojuegos={videojuegos}
                    eliminar={(id) => mutacionEliminar.mutate(id)}
                />
            )}
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