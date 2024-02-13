/*filter(funcion)(ojo muy bueno filtra un array con una condicion y crea nuevo array con los elementos q cumplen la condicion)
Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
let numeros = [1, 2, 3, 4, 5];
let numerosPares = numeros.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Imprime: [2, 4]
Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
*/

/*let frase;

do{
    frase= prompt("Indique su frase (solo letras)");
} while (!/^[a-zA-Z]+$/.test(frase));

let letters = frase.split("");

let lettersWanted = letters.filter(function(letter) {
    return letter === "a";
});


document.write(lettersWanted.length);*/

let frase;

do {
    frase = prompt("Indique su frase (solo letras):");
} while (!/^[a-zA-Z]+$/.test(frase));

let letters = frase.split("");

let lettersWanted = letters.filter(function(letter) {
    return letter.toLowerCase() === "a"; // Convertir a minúsculas para comparación insensible a mayúsculas y minúsculas
});

while (lettersWanted.length === 0) {
    alert("No se ingresó la letra 'a'. Ingrese nuevamente su frase.");
    
    do {
        frase = prompt("Indique su frase (solo letras):");
    } while (!/^[a-zA-Z]+$/.test(frase));

    letters = frase.split("");
    lettersWanted = letters.filter(function(letter) {
        return letter.toLowerCase() === "a";
    });
}

document.write(lettersWanted.length);


