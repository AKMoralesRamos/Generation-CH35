//creando función para determinar si un número es par o 
//Necesitamos exportar está función para que pueda ser utilizada en cualquier parte del proyecto, solamente llamando al script. Para ello tenemos que agregar las palabras reservadas "export deafult".

export default function determinarParImpar(numero){
(numero % 2 === 0) ? console.log(`El número ${numero} es par`) : console.log(`El número ${numero} es impar`);
}

