import "./Button.css";
/**Props. propiedades ue se pueden signar a los componentes para modificar el texto, la info desde la renderización del mismo. Se asignan como parametro de la funcion con el nombre del prop y debe ir entre llaves. Se manda a llamar en el bloque de código donde se debe de implementar utilizando llaves */

const Button = ({label}) => {
  return (
    <>
      <button>
        {label}
      </button>
    </>
  );
};
export default Button;
