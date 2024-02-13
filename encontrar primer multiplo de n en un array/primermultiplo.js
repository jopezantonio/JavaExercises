
const inputArray = prompt("Ingrese la cadena de numeros enteros separados por comas para el arreglo").split(",")
const  myArray = inputArray.map(Number);

let n = prompt("ingrese el numero q desea q se le busque un multiplo dentro de la cadena");
 n = parseInt(n);

function encontrarPrimerMultiploDeN( n, myArray) {
  let secuencia = myArray.length;

  for (let i = 0; i < secuencia; i++) {
    let multiplo = myArray[i] % n;

    if (multiplo === 0) {
      console.log(myArray[i] + " Es multiplo de " + n);
      return
    } 
  }
  console.log("No hay multiplos de " + n + " en el array")
}
encontrarPrimerMultiploDeN(n, myArray);


/*
const myArray = prompt("Introduce una lista de números separados por comas").split(",");

const myArrayInt = myArray.map(parseInt);

console.log(myArrayInt);*/