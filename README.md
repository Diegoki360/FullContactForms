# \# M4 - Full Contact Forms | Retro Arcade

# 

# \## Descripción

# 

# Retro Arcade es una aplicación web que permite registrar

# videojuegos y gestionar una colección personal.

# 

# Cada videojuego cuenta con un título, una plataforma,

# un año de lanzamiento, una puntuación y una portada.

# 

# El diseño está inspirado en la estética de las máquinas

# recreativas de los años 80.

# 

# \## Tecnologías utilizadas

# 

# \- React y Vite.

# \- React Hook Form.

# \- Zod.

# \- TanStack Query v5.

# \- JSON Server.

# \- CSS.

# 

# \## Instalación y ejecución

# 

# Instalar las dependencias:

# 

# ```bash

# npm install

# ```

# 

# Iniciar la API local:

# 

# ```bash

# npx json-server db.json

# ```

# 

# Iniciar la aplicación en otra terminal:

# 

# ```bash

# npm run dev

# ```

# 

# Crear un archivo .env en la raíz del proyecto con:

# 

# ```env

# VITE\_API\_URL=http://localhost:3000

# ```

# 

# \## Verificación

# 

# \- Registrar videojuegos mediante el formulario.

# \- Validar los campos mediante Zod.

# \- Mostrar mensajes de error al introducir datos incorrectos.

# \- Comprobar la compatibilidad entre plataforma y año.

# \- Vaciar el formulario después de registrar un videojuego.

# \- Mostrar los videojuegos mediante tarjetas.

# \- Eliminar videojuegos de la colección.

# \- Mantener los videojuegos registrados al recargar la página.

# \- Mostrar los estados de carga y error de la API.

# 

# \## Uso de IA

# 

# \*\*Herramienta utilizada:\*\* ChatGPT.

# 

# He utilizado la IA principalmente para resolver dudas

# sobre los nuevos conceptos de esta unidad, especialmente

# React Hook Form, Zod y TanStack Query.

# 

# También la he utilizado para resolver errores durante

# el desarrollo y para generar el CSS de la aplicación,

# siguiendo una estética retro de los años 80.

# 

# \*\*Ejemplos de prompts:\*\*

# 

# \- ¿Qué es TanStack Query y cómo se utiliza?

# \- ¿Cómo puedo añadir un campo de foto mediante una URL?

# \- ¿Cómo puedo darle una estética más retro de los años 80?

# 

# \*\*Verificación:\*\*

# 

# He ido probando las soluciones propuestas por la IA

# durante el desarrollo de la aplicación, intentando

# entender el funcionamiento del código antes de utilizarlo.

# 

# \## Autopsia

# 

# \### Decisión 1: Separar la lista de videojuegos en tarjetas

# 

# \*\*Decisión tomada:\*\*

# 

# Crear un componente para la lista de videojuegos y otro

# componente individual para representar cada videojuego

# mediante una tarjeta.

# 

# \*\*Alternativa descartada:\*\*

# 

# Mostrar todos los videojuegos directamente desde App.jsx.

# 

# \*\*Justificación:\*\*

# 

# He decidido separar los videojuegos en tarjetas para

# tener el código más organizado y evitar que App.jsx

# contenga toda la lógica y la representación visual

# de los videojuegos.

# 

# Además, esto permite modificar el diseño de las tarjetas

# sin tener que modificar el componente principal.

# 

# \*\*Inconvenientes:\*\*

# 

# Es necesario crear más componentes y pasar información

# y funciones entre ellos mediante props.

# 

# \### Decisión 2: Utilizar una API local

# 

# \*\*Decisión tomada:\*\*

# 

# Utilizar JSON Server para almacenar los videojuegos

# registrados en un archivo db.json.

# 

# \*\*Alternativa descartada:\*\*

# 

# Utilizar una API externa de pruebas como JSONPlaceholder.

# 

# \*\*Justificación:\*\*

# 

# He decidido utilizar JSON Server porque quería que los

# videojuegos se guardasen realmente al registrarlos y

# que no desapareciesen al recargar la página.

# 

# De esta manera, la aplicación funciona como una pequeña

# biblioteca personal de videojuegos.

# 

# \*\*Inconvenientes:\*\*

# 

# Es necesario mantener dos servidores ejecutándose

# al mismo tiempo para utilizar la aplicación.

