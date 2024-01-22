import "./App.css";
import Inicio from "./components/Inicio";
import Contacto from "./components/Contacto";
import Nosotros from "./components/SobreNosotros";
import { Route, Routes } from "react-router-dom";
/* import { Route, Routes } from "react-router-dom"; */

//Routes. actúa como contenedor padre de todas las rutas individuales que se crearán en la aplicación.

/**Route- es la ruta 'hija' de cada componente. recibe dos atributos.
 * 1.path: especifica la ruta url a seguir
 * 2.element: especifica el compomente que se renderiza
 */
function App() {
  return (
    <>
      <div>
      <Routes>
      <Route path="/" element={ <Inicio /> } />
      <Route path="nosotros" element={ <Nosotros /> } />
      <Route path="contacto" element={ <Contacto /> } />
    </Routes>
      </div>
    </>
  );
}

export default App;
