//tenemos un arreglo con 3 elementos donde cada uno es en si otro arreglo
const miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
//ahora tenemos un arreglo principal. Veamos como identificar cada elemento
//guiemos con esta tabla:
/*
Arreglo: const miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9],];
Indices:                         0          1          2
Indices internos:             0  1  2    0  1  2    0  1  2
*/

console.log(miArreglo[0]); //[1, 2, 3]
console.log(miArreglo[1]); //[4, 5, 6]
console.log(miArreglo[2]); //[7, 8, 9]
//arriba vemos como acceder a uno de los arreglos pero completo con todos los elementos contenidos en el.

console.log(miArreglo[0][2]); // 3
console.log(miArreglo[2][1]); // 8
//arriba vemos como acceder a uno de los elementos especificos del arreglos primero especificamos el indice del arreglo, luego el indice del elemento.

console.log(miArreglo[1].slice(0, 2)); // [4, 5]
//arrube vemos un ultimo elemento donde se puede ver q de miArreglo se tomaron dos elementos creando un nuevo arreglo [4, 5]
