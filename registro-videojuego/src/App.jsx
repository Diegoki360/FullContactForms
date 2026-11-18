import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { videojuegoSchema } from "./schemas/videojuegoSchema";
import { obtenerVideojuegos } from "./services/videojuegos";
import { crearVideojuego } from "./services/videojuegos";
import { eliminarVideojuego } from "./services/videojuegos";
import ListaVideojuegos from "./components/ListaVideojuegos";
import FormularioVideojuego from "./components/FormularioVideojuego";
import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";
import "./App.css";

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
        <div className="app">

            <div className="seccion-formulario">
                <FormularioVideojuego
                    register={register}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    registrarVideojuego={registrarVideojuego}
                    mutacion={mutacion}
                />
            </div>

            <div className="seccion-coleccion">
                <h2>Mi colección de videojuegos</h2>

                {isPending && <p role="status">Cargando videojuegos...</p>}

                {isError && <p role="alert">Error al recuperar videojuegos</p>}

                {videojuegos && (
                    <ListaVideojuegos
                        videojuegos={videojuegos}
                        eliminar={(id) => mutacionEliminar.mutate(id)}
                    />
                )}
            </div>

        </div>
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