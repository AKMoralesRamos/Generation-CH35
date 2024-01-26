## Axios API
1. Revisar el sitio oficial de Axios [https://axios-http.com/es/]
2. Instalar axios desde npm con el comando

npm install axios

3. Ejecutar el proyecto de react en el navegador con el comando 

npm run dev

## Manejando axios
1. En el archivo App.js, importar axios 

import axios from 'axios'

2. Crear la función de tipo async-await para consumir una API
3. Indicamos el evento en línea para el primer botón, con el tipo de evento y la función a ejecutar `onClick={getUsers}`

4. Crear la función `postUser` de tipo async-await para enviar datos a la API.

5. Asignamos el evento en línea para el segundo botón, con el tipo de evento y la función a ejecutar. El id es autoincrementable, no necesitamos asignarlo.

```javascript
<button onClick={postUser}>
```






