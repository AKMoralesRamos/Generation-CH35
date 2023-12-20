/**Paradigmas de programación
 * 
 * Programación immperativa: se basa en instrucciones detalladas ejecutando un flujo o una secuencia determinada
 * 
 * programación basada en eventos: se basa en la gestión y respuesta de eventos.
 * 
 * programación declarativa: explicar lo que queremos obtener.
 * 
 * programación orientada a objetos: toma cierta información o estructura del mundo real (objetos) y sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).
 * 
 */


//objetos
//El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos para inicializar un objeto es necesario definir un constructor que tomará a los atributos.
//clases: plantillas para crear objetos. nos ayudan a definir un tipo de objeto y crear instancias.

class persona {
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";

    constructor(nombre, apellido, edad, email, telefono){
        
    }

    comer() {
        console.log("gran comida");
    }// método comer

    bailar() {
        console.log("bailando música divertida")
    }

    mostrarInfo() {
        console.log("Nombre: ")
    }
}