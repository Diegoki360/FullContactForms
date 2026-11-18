import VideojuegoCard from "./VideojuagoCard";

export default function ListaVideojuegos({ videojuegos, eliminar }) {
    return (
        <div className="lista-videojuegos">
            {videojuegos.map((juego) => (
                <VideojuegoCard
                    key={juego.id}
                    juego={juego}
                    eliminar={eliminar}
                />
            ))}
        </div>
    );
}