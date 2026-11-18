import { z } from "zod";

export const videojuegoSchema = z.object({
    titulo: z.string()
        .min(1, "El título es obligatorio")
        .min(3, "El título debe tener al menos 3 caracteres"),

    plataforma: z.string()
        .min(1, "Selecciona una plataforma"),

    anio: z.coerce.number()
        .int("El año debe ser un número entero")
        .min(1972, "El año no puede ser anterior a 1972")
        .max(2026, "El año no puede ser posterior a 2026"),

    puntuacion: z.coerce.number()
        .min(0, "La puntuación mínima es 0")
        .max(10, "La puntuación máxima es 10"),

    foto: z.url("Introduce una URL válida")

}).refine(
    (datos) => {
        if (datos.plataforma === "PS5" && datos.anio < 2020) {
            return false;
        }

        return true;
    },
    {
        message: "La PS5 no existía antes de 2020",
        path: ["anio"]
    }
).refine(
    (datos) => {
        if (datos.plataforma === "Switch" && datos.anio < 2017) {
            return false;
        }

        return true;
    },
    {
        message: "La Nintendo Switch no existía antes de 2017",
        path: ["anio"]
    }
);

export const videojuegoRespuestaSchema = videojuegoSchema.extend({
    id: z.string()
});

export const listaVideojuegosSchema = z.array(videojuegoRespuestaSchema);