const API_URL = "http://localhost:3000/videojuegos";

export async function obtenerVideojuegos() {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("Error al obtener los videojuegos");
    }

    return respuesta.json();
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