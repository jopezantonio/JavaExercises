//EL METODO push()

const estaciones = ["verano", "otoño", "invierno", ];
console.log(estaciones);
estaciones.push("primavera");//[ "verano", "otoño", "invierno" ]
/*el metodo push incluye valores nuevos al arreglo en el ultimo lugar aqui lo usamos para incluir primavera como ultimo elemento del array estaciones*/
console.log(estaciones)//[ "verano", "otoño", "invierno", "primavera"]


//EL METODO pop() 
//*el metodo pop( ) para remover el ultimo elemento del arreglo. Veamos como se usa:
estaciones.pop();
console.log(estaciones)// "verano", "otoño", "invierno"

/*incluyamos nuevamente con push el elemento primavera*/
estaciones.push("primavera");
console.log(estaciones);// [ "verano", "otoño", "invierno", "primavera"

/*el metodo pop tambien nos sirve para retornar el ultimo elemento a una variable y eliminarlo del arreglo ejemplo:*/
let estacion = estaciones.pop()//
console.log(estaciones);// [ "verano", "otoño", "invierno" ]
console.log(estacion);//primavera


//EL METODO shift()
//Este metodo elimina el primer elemento de nuestro arreglo:
const DIAS = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log(DIAS); //[ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ]

DIAS.shift();
console.log(DIAS);//[ "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ]

//EL METODO unshift()
//Este metodo agrega un elemento al principio de nuestro arreglo:
console.log(DIAS);//[ "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ]
DIAS.unshift("lunes");
console.log(DIAS); // [ "lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo" ]



//EL METODO splice()
/*El método splice() en JavaScript se utiliza para modificar un array al agregar o eliminar elementos en posiciones específicas. La sintaxis básica es la siguiente:

javascript
Copy code
array.splice(startIndex, deleteCount, item1, item2, ...);
startIndex: Índice en el que se inicia la modificación del array.
deleteCount: Número de elementos a eliminar desde startIndex.
item1, item2, ...: Elementos que se insertarán en el array en la posición startIndex.
A continuación, te doy ejemplos de cómo usar splice() para eliminar y agregar elementos:

Eliminar elementos con splice():
javascript
Copy code
const miArreglo = [1, 2, 3, 4, 5];

// Eliminar 2 elementos comenzando desde el índice 2
const elementosEliminados = miArreglo.splice(2, 2);

console.log(elementosEliminados); // Devuelve [3, 4]
console.log(miArreglo);           // Ahora miArreglo es [1, 2, 5]
Agregar elementos con splice():
javascript
Copy code
const miArreglo = [1, 2, 3, 4, 5];

// Insertar los elementos 10 y 11 en el índice 2 sin eliminar ningún elemento
miArreglo.splice(2, 0, 10, 11);

console.log(miArreglo); // Ahora miArreglo es [1, 2, 10, 11, 3, 4, 5]
En el ejemplo de agregar elementos, el segundo parámetro (deleteCount) es 0 porque no estamos eliminando ningún elemento. Luego, proporcionamos los elementos que queremos agregar después del startIndex.*/