
# Retro Arcade

## Descripción

Retro Arcade es una aplicación web para registrar y gestionar una colección personal de videojuegos.

El usuario puede añadir videojuegos indicando su título, plataforma, año de lanzamiento, puntuación y una URL para mostrar su portada. Los videojuegos registrados aparecen en tarjetas y pueden eliminarse de la colección.

La aplicación utiliza una estética inspirada en las máquinas recreativas de los años 80, con colores neón y un fondo oscuro.

## Cómo ejecutar el proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto.
3. Instalar las dependencias con `npm install`.
4. Crear un archivo `.env` en la raíz del proyecto con `VITE_API_URL=http://localhost:3000`.
5. Ejecutar `npx json-server db.json` para iniciar la API local.
6. Abrir otra terminal y ejecutar `npm run dev`.
7. Abrir en el navegador la dirección indicada por Vite.

Es necesario mantener tanto JSON Server como Vite ejecutándose para utilizar la aplicación correctamente.

## Funcionamiento

- El usuario puede registrar videojuegos mediante un formulario.
- Cada videojuego contiene título, plataforma, año, puntuación y URL de la portada.
- Los campos del formulario se gestionan mediante React Hook Form.
- Los datos se validan utilizando un esquema de Zod.
- Se muestran mensajes de error cuando los campos contienen datos incorrectos.
- Se comprueba que el año de lanzamiento sea compatible con determinadas plataformas.
- Los videojuegos se almacenan en una API local mediante JSON Server.
- La colección se obtiene mediante peticiones HTTP GET.
- Los nuevos videojuegos se registran mediante peticiones POST.
- Los videojuegos pueden eliminarse mediante peticiones DELETE.
- Los videojuegos se muestran mediante tarjetas individuales.
- La colección se actualiza después de registrar o eliminar un videojuego.
- Se muestran mensajes de carga y error durante las peticiones a la API.
- Los datos recibidos de la API se validan mediante Zod.

## Decisiones tomadas

- Se utiliza React Hook Form para gestionar el formulario sin tener que controlar manualmente cada campo con `useState`.
- La validación se realiza mediante Zod y se integra con React Hook Form utilizando `zodResolver`.
- Se utiliza TanStack Query para gestionar las peticiones HTTP y actualizar los datos de la colección.
- La comunicación con la API se organiza en un archivo de servicios separado de los componentes.
- Se utiliza JSON Server para almacenar los videojuegos de forma local.
- El formulario se separa en su propio componente para evitar concentrar todo el código en `App.jsx`.
- La colección se divide en un componente de lista y otro de tarjeta individual.
- Las tarjetas reciben los datos del videojuego y la función de eliminación mediante props.
- Se utiliza una variable de entorno para configurar la dirección de la API.
- El diseño utiliza CSS con una estética arcade inspirada en los años 80.

## Uso de IA

Durante el desarrollo he utilizado ChatGPT como herramienta de apoyo para resolver dudas sobre React, React Hook Form, Zod y TanStack Query. La IA se ha utilizado principalmente para comprender conceptos nuevos, detectar errores, estudiar alternativas para implementar algunas funcionalidades y ayudar con el diseño CSS y la redacción del README.

Dos prompts reales relevantes realizados durante el desarrollo fueron:

- "En resumen que es tan stack querer 5 y como se usa"
- "y con un rollo mas retro??"

Las respuestas de la IA se utilizaron como apoyo y posteriormente fui adaptando las soluciones a la estructura y funcionamiento de mi proyecto.

Para verificar el código sugerido, he ido ejecutando la aplicación en el navegador, comprobando el funcionamiento del formulario, los mensajes de validación y las peticiones a la API. También he revisado los errores que aparecían durante el desarrollo para entender sus causas y corregirlos.

La temática de la colección de videojuegos, la organización de sus funcionalidades y las decisiones sobre la estructura de los componentes se han ido definiendo durante el desarrollo. También he revisado el código utilizado para comprender el funcionamiento de las herramientas de esta unidad.

## Autopsia

### 1. Separar la colección en componentes de lista y tarjeta

Una decisión que tomé fue separar la representación de los videojuegos en dos componentes diferentes: `ListaVideojuegos`, que recorre los videojuegos registrados, y un componente de tarjeta que muestra individualmente la información de cada uno. Esto permite que `App.jsx` se encargue principalmente de gestionar el formulario y las peticiones, mientras que los otros componentes se encargan de mostrar la colección.

La alternativa que descarté fue utilizar directamente un `.map()` dentro de `App.jsx` para generar todas las tarjetas. Elegí separar los componentes porque quería mantener el código más organizado y poder modificar el diseño de las tarjetas sin tener que tocar el componente principal. El inconveniente es que ahora necesito pasar los datos y la función de eliminación mediante props, aumentando el número de componentes y las conexiones entre ellos.

### 2. Utilizar JSON Server para almacenar los videojuegos

Para almacenar los videojuegos decidí utilizar JSON Server junto con un archivo `db.json`. De esta manera puedo realizar peticiones GET, POST y DELETE sobre una API local, y los videojuegos registrados permanecen guardados aunque recargue la página.

La alternativa que descarté fue utilizar una API externa de pruebas como JSONPlaceholder. Aunque permite realizar peticiones HTTP, los cambios realizados mediante POST o DELETE no se almacenan realmente. Elegí JSON Server porque quería que la aplicación funcionase como una colección personal en la que pudiera añadir y eliminar videojuegos de verdad. El inconveniente es que necesito mantener un servidor adicional ejecutándose y que esta solución está pensada para desarrollo y pruebas, no para una aplicación en producción.
