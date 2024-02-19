let ana1 = prompt("Ingresar primera palabra a comprobar");
let ana2 = prompt("Ingresar segunda palabra a comprobar");


function anagrama(){
    ana1 = ana1.replace(/\s/g, '').toLowerCase();
    ana2 = ana2.replace(/\s/g, '').toLowerCase();
    let largoString1 = ana1.length;
    let largoString2 = ana2.length;
    console.log(largoString1)
    console.log(largoString2)

if (largoString1 != largoString2){
    console.log("falso");
    return false;
}
else{
    let arr1 = ana1.split('').sort();
    let arr2 = ana2.split('').sort();
    console.log(arr1);
    console.log(arr2);
    const sonAnagramas = JSON.stringify(arr1) === JSON.stringify(arr2);
    console.log(sonAnagramas)
    return sonAnagramas;
}
}
let resultado = anagrama()
alert(resultado);

/*Asi lo resolvio Chat Gpt un poco mas sencillo:
function sonAnagramas(str1, str2) {
  // Convertir los strings a minúsculas y eliminar espacios en blanco
  const cleanStr1 = str1.toLowerCase().replace(/\s/g, '');
  const cleanStr2 = str2.toLowerCase().replace(/\s/g, '');

  // Ordenar los caracteres de cada string y comparar
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  // Comparar si los strings ordenados son iguales
  return sortedStr1 === sortedStr2;
}

// Ejemplo de uso:
const palabra1 = "listen";
const palabra2 = "silent";

const resultado = sonAnagramas(palabra1, palabra2);
console.log(resultado);  // Salida esperada: true
*/

