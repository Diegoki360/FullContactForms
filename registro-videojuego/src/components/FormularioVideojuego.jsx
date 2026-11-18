export default function FormularioVideojuego({
    register,
    handleSubmit,
    errors,
    registrarVideojuego,
    mutacion
}) {
    return (
        <form onSubmit={handleSubmit(registrarVideojuego)} noValidate>
            <h1>Registro de videojuegos</h1>

            <label htmlFor="titulo">Título</label>
            <input
                id="titulo"
                {...register("titulo")}
                aria-invalid={!!errors.titulo}
                aria-describedby={errors.titulo ? "error-titulo" : undefined}
            />
            {errors.titulo && (
                <p id="error-titulo" role="alert">
                    {errors.titulo.message}
                </p>
            )}

            <label htmlFor="plataforma">Plataforma</label>
            <select
                id="plataforma"
                {...register("plataforma")}
                aria-invalid={!!errors.plataforma}
                aria-describedby={errors.plataforma ? "error-plataforma" : undefined}
            >
                <option value="">Selecciona una plataforma</option>
                <option value="Switch">Nintendo Switch</option>
                <option value="PS5">PlayStation 5</option>
                <option value="PC">PC</option>
            </select>
            {errors.plataforma && (
                <p id="error-plataforma" role="alert">
                    {errors.plataforma.message}
                </p>
            )}

            <label htmlFor="anio">Año de lanzamiento</label>
            <input
                id="anio"
                type="number"
                {...register("anio")}
                aria-invalid={!!errors.anio}
                aria-describedby={errors.anio ? "error-anio" : undefined}
            />
            {errors.anio && (
                <p id="error-anio" role="alert">
                    {errors.anio.message}
                </p>
            )}

            <label htmlFor="puntuacion">Puntuación</label>
            <input
                id="puntuacion"
                type="number"
                step="0.1"
                {...register("puntuacion")}
                aria-invalid={!!errors.puntuacion}
                aria-describedby={errors.puntuacion ? "error-puntuacion" : undefined}
            />
            {errors.puntuacion && (
                <p id="error-puntuacion" role="alert">
                    {errors.puntuacion.message}
                </p>
            )}

            <label htmlFor="foto">URL de la portada</label>
            <input
                id="foto"
                type="url"
                {...register("foto")}
                aria-invalid={!!errors.foto}
                aria-describedby={errors.foto ? "error-foto" : undefined}
            />
            {errors.foto && (
                <p id="error-foto" role="alert">
                    {errors.foto.message}
                </p>
            )}

            <button type="submit" disabled={mutacion.isPending}>
                {mutacion.isPending ? "Registrando..." : "Registrar videojuego"}
            </button>

            {mutacion.isError && (
                <p role="alert">Error al registrar</p>
            )}

            {mutacion.isSuccess && (
                <p role="status">¡Videojuego registrado!</p>
            )}
        </form>
    );
}