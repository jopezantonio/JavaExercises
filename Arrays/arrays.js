//sintaxis de Arrays

var miArreglo = [10, 20, 30];
console.log(miArreglo);

//como actualizar un elemento de un arrglo usanod su indice

miArreglo[1] = 25;
console.log(miArreglo);

// el console.log nos demuestra como cambia el valor del indice 1 del arreglo:
//Array(3) [ 10, 20, 30 ]
//Array(3) [ 10, 25, 30 ]

miArreglo[0, 3] = 4, 5;
console.log(miArreglo);

//Array(4) [ 10, 25, 30, 4 ]

miArreglo[0, 7] = 1, 7;
console.log(miArreglo);
//Array(8) [  10, 25, 30, 4, <3 empty slots>, 1];
// si el indice es mayor a  la cantidad de elementos como en el ejemplo  anterior entonces deja los espacios en blancos y crea el slot en el indice indicado ver console.log

//Podemos tambien anidar arreglos dentro de otro arreglo:
miArreglo[2] = ["string", "nido", 24, true];
console.log(miArreglo);
/*Array(8) [ 10, 25, (4) […], 4, <3 empty slots>, 1 ]
​0: 10
​1: 25
​2: Array(4) [ "string", "nido", 24, … ]
​3: 4
​7: 1
​length: 8*/

