import { listaVideojuegosSchema } from "../schemas/videojuegoSchema";

const API_URL = `${import.meta.env.VITE_API_URL}/videojuegos`;;

export async function obtenerVideojuegos() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("Error al obtener los videojuegos");
    }

    const datos = await respuesta.json();

    const resultado = listaVideojuegosSchema.safeParse(datos);

    if (!resultado.success) {
        throw new Error("Los datos de la API no son válidos");
    }

    return resultado.data;
}

export async function crearVideojuego(videojuego) {
    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(videojuego)
    });

    if (!respuesta.ok) {
        throw new Error("Error al registrar el videojuego");
    }

    return respuesta.json();
}

export async function eliminarVideojuego(id) {
    const respuesta = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("Error al eliminar el videojuego");
    }
}