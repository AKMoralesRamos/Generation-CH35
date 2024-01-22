import "./App.css";
import Products from "./components/Products";
import Button from "./components/Button";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Card from './components/Cards';
import Buttons from "./components/Buttons";


function App() {
  const imgFashion = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933";
  const imgDark = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747";
  const imgCamel = "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437";
  
  return (
    <>
      <NavBar></NavBar>
      <Main></Main>
      <Button label="Traer información"></Button>
      <Button label="Enviar información"></Button>

{/*       <Products img='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933' name='Fashion' description='Tennis Fitness running purple' price='1950'/>
      
      <Products img='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747" alt="tenis' name='Fashion' description='Tennis Fitness running impact' price='1830'></Products>


      <Products img='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437" alt="tenis' name='Fashion' description='Tennis Fitness running mobile' price='2750'></Products> */}
    
      <Products img={imgFashion} name='Fashion' description='Tennis Fitness running purple' price='1950'/>
      
      <Products img={imgDark} name='Fashion' description='Tennis Fitness running impact' price='1830'></Products>


      <Products img={imgCamel} name='Fashion' description='Tennis Fitness running mobile' price='2750'></Products>
    
    {/**Aquí irá mi componente de MUI Y JoyUI */}

<Card></Card>
<br></br>
<Buttons></Buttons>
    </>

    
  );
}

export default App;
