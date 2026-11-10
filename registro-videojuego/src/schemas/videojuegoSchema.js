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
        .max(10, "La puntuación máxima es 10")
});