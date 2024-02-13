

let enterosIngresados = prompt("Ingresa los numeros enteros de los que desea conocer la media separados por comas (ejemplo: 1, 2, 3)");

// Convertir la cadena en un array de números
let arrayNumerico = enterosIngresados.split(",").map
(function (entero) {
    return parseInt(entero.trim()) || 0;
});// Convierte a número, si no es un número, devuelve 0

let suma = arrayNumerico.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
}, 0);//el 0 es el valor inicial q se le da a acumulador puede  tambien ser distinto a cero dependiendo del caso. 

let media = suma / arrayNumerico.length;

// Mostrar resultados:
alert("La suma de los números es: " + suma);
alert("La media de los números es: " + media);















