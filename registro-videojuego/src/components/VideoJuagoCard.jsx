export default function VideojuegoCard({ juego, eliminar }) {
    return (
        <div className="videojuego-card">

            <img
                src={juego.foto}
                alt={juego.titulo}
                width={200}
                onLoad={() => console.log("Imagen cargada")}
                onError={() => console.log("Error al cargar la imagen")}
            />

            <h3>{juego.titulo}</h3>
            <p>Plataforma: {juego.plataforma}</p>
            <p>Año: {juego.anio}</p>
            <p>Puntuación: {juego.puntuacion}/10</p>

            <button onClick={() => eliminar(juego.id)}>
                Eliminar
            </button>
        </div>
    );
}