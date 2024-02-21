//en este ejemplo se guarda el array invertido en una variable
const myArray = [15, 13, 10, 2];
let reverse = myArray.reverse();
console.log(reverse);

//en este arreglo se modifica directamente el arreglo original 
const myArray1 = [15, 13, 10, 2];
myArray1.reverse();
console.log(myArray1);


/*nota sobre return
Si deseas asignar el valor resultante de una función a una variable fuera de la función, generalmente necesitarás utilizar la declaración return dentro de la función. La declaración return se utiliza para devolver un valor desde una función y asignar ese valor a la variable que llama a la función.

Aquí hay un ejemplo:

function suma(a, b) {
  return a + b;
}

// Asignar el resultado de la función a una variable
const resultado = suma(3, 4);

console.log(resultado); // Salida: 7
En este caso, la función suma toma dos parámetros, suma los valores y devuelve el resultado con return. Luego, al llamar a la función suma(3, 4), el valor resultante (7) se asigna a la variable resultado.

Es importante destacar que no todas las funciones necesitan devolver un valor. Las funciones en JavaScript pueden no tener un return o pueden devolver undefined implícitamente. Sin embargo, si deseas asignar el resultado de una función a una variable, necesitas que la función utilice return para proporcionar ese valor.*/

function sumar(a, b){
    return a + b;
}

let resultado = sumar(5, 2)
console.log(resultado);