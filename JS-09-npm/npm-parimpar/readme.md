Crear cuenta npm
iniciar sesión

# Crear y publicar un nuevo paquete de npm

## Creación del package
Iniciar sesión a través de la línea de comandos

npm init //para crear desde cero hay que personalizar (comando son -y).

Me guiará a través de una serie de pasos donde me solicite información realcionada con mi package, como el nombre único(buscar en npm que no exista), la versión, la descripción, el punto de entrada(index.js), comando de prueba, repositorio de git en donde vice, palabras clave para coincidir con búsquedas, autor, licencia.

2. Presionar enter para aceptar que la información es correcta y generar el archivo package.json
Este archivo contiene información sobre el proyecto-módulo que vamos a crear. Son un estándar de nodejs para facilitar la estructura y ejecución de los proyectos dentro del entorno de ejecución y de esta manera poder compartirlo a través del sitio de [https://wwwnpmjs.com].
-La información se estructura como objeto de Js con notación JSON.



3. Crear una carpeta llamada `modules` en donde vivirán nuestros script.

4. Dentro de `modules` crear el script (.js) con el nombre `parimpar.js`

5. crear la función del script y exportarlo con export default.

6. Importar el script desde el archivo `index.js` con `import + function + from + ruta` e invocamos la función con parámetros.

import determinarParImpar from ./modules/parimpar.js //no olvidar marcar bien la ruta.

7. Configurar el `type:module` en el rchivo `package.json`

8. Ejecutamos el programa desde el entorno de nodejs con el comando

node index.js

## Publicar package en npm

1. Iniciar sesión de npm pero ahora desde CLI con el comando

npm login

2. Esperamos que cargue y presionamos enter para abrir el navegador

3. Recibiremos un correo con un password de una sola vez, lo agregamos y presionamos Login

4. Regresamos a la terminal y nos mostrará el mensaje `logged in on npmjs.org`

5. Publicar el package con acceso público desde CLI a npm con el comando 
npm publish --access=public







