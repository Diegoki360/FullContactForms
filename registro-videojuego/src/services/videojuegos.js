export async function obtenerVideojuegos() {
    const respuesta = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (!respuesta.ok) {
        throw new Error("Error al obtener los videojuegos");
    }

    return respuesta.json();
}