import "./NavBar.css"; //Importación de CSS
import IssLogo from "../assets/ISS_logo.svg"

//Crear función que contiene el marcado para que viva nuestro código

const NavBar = () => {
  const url1 = "https://www.nasa.gov/international-space-station/";
  const url2 ="https://www.nasa.gov/mission/apollo-13/";
  const url3 = "http://open-notify.org/Open-Notify-API/People-In-Space/";
  return (
    <>
      {/*fragmento de código, el comentario debe ser multilínea y estar encerrado entre llaves*/}
      <div className="navbar--container">
        <div className="navbar--title">
          <a href={url1} id="link--logo">
            <img src={IssLogo} alt="" />
          </a>
        </div>
        <div className="navbar--links">
          <div className="navbar--link">
            <a href="#">Home</a>
          </div>
          <div className="navbar--link">
            <a href={url2}>Apolo 13</a>
          </div>
          <div className="navbar--link">
            <a href={url3}>Astros</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

/* function NavBar(){
    //
} */
