# 

## Retro Arcade

# 

# Misión M4 · Full Contact Forms — Web Development I.

# 

### Cómo probarlo

# Instala las dependencias con `npm install`. Crea un archivo `.env` en

# la raíz del proyecto con `VITE\_API\_URL=http://localhost:3000`.

# 

# Ejecuta `npx json-server db.json` para iniciar la API y, en otra

# terminal, `npm run dev` para iniciar la aplicación.

# 

# Desde el navegador puedes registrar videojuegos indicando su título,

# plataforma, año, puntuación y URL de la portada. Los videojuegos

# aparecen en tarjetas y se pueden eliminar de la colección.

# 

# Prueba también a introducir datos incorrectos para comprobar los

# mensajes de validación del formulario.

# 

### S

# Usé ChatGPT como apoyo para comprender React Hook Form, Zod y

# TanStack Query, y para resolver errores durante el desarrollo.

# 

# Ejemplo de prompt real: "En resumen que es tan stack querer 5 y

# como se usa".

# 

# También utilicé la IA para generar el CSS, pidiendo una estética

# inspirada en las máquinas recreativas de los años 80.

# 

# Fui comprobando los cambios ejecutando la aplicación y revisando

# los errores que aparecían. Las decisiones sobre la temática y la

# organización de los componentes las fui tomando durante el desarrollo.

# 

### Autopsia

# 1\. Separé la lista de videojuegos en dos componentes: uno que recorre

# &#x20;  la colección y otro que representa cada videojuego mediante una

# &#x20;  tarjeta. Descarté mostrar todas las tarjetas directamente desde

# &#x20;  App.jsx porque el componente principal acabaría teniendo demasiado

# &#x20;  código. Aunque ahora tengo que pasar información y funciones

# &#x20;  mediante props, resulta más sencillo modificar las tarjetas sin

# &#x20;  afectar al resto de la aplicación.

# 

# 2\. Utilicé JSON Server para guardar los videojuegos en un archivo

# &#x20;  db.json. Descarté utilizar JSONPlaceholder porque, aunque permite

# &#x20;  probar peticiones HTTP, los cambios no se guardan realmente.

# &#x20;  Preferí tener una API local para que los videojuegos registrados

# &#x20;  siguieran apareciendo después de recargar la página. El inconveniente

# &#x20;  es que necesito mantener dos servidores ejecutándose.



