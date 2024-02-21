//FUNCIONES

function mostrarMensaje() {
    console.log("¡Hola Mundo000!");
}

mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

/*Administrador@DESKTOP-RD513SO MINGW64 ~/Documents/Ejercicios de JavaScript/Funciones (main)
INGW64 ~/Documents/Ejercicios d
e JavaScript/Funciones (main)
$ node funciones.js
¡Hola Mundo000!
¡Hola Mundo000!
¡Hola Mundo000!
¡Hola Mundo000!
¡Hola Mundo000!
¡Hola Mundo000!
¡Hola Mundo000!*/


//Retornar el valor de una funcion. El resultado de la operacion en el cuerpo de la funcion lo asignamos a una variable luego dentro de la misma funciones le pedimos a esa variable q se muestre con un console.log y asi al llamar a la funcion se mostrara el valor guardado en la variable suma. Tambien podemos solo asignar el valor a la variable y no mostrarlo y al llamar la funcion solo conseguiriamos darle el valor a la funcion. 
function sumar(a, b){
    let suma = a + b;
    console.log("El resultado de " + a + " + " + b + " = " + suma );
}
sumar(20, 45);//El resultado de 20 + 45 = 65
sumar(50, 25);//El resultado de 50 + 25 = 75
sumar(210, 4);//El resultado de 210 + 4 = 214
sumar(132, 98);//El resultado de 132 + 98 = 230

//En la funcion sumar(a, b) a y b son los parametros y los valores q se designan a dichos parametros se les llama argumentos. Al llamar a la funcion sumar(20, 45); 20 y 45 vienen a ser los argumentos de los parametros a y b respectvamente.

/*Trabajar la funcion con variables. 
En el ejemplo anterior se le dio valor a los parametros de la funcion con argumentos ahora lo haremos con variables. Ejemplo:*/

function sumar(a, b){
    let suma = a + b;
    console.log("El resultado de " + a + " + " + b + " = " + suma );
}
let a = 46;
let b = 22;
sumar(a, b);//El resultado de 46 + 22 = 68

//Ejemplo con cadenas

function concatenarCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3 )
}
concatenarCadenas("Estoy", "aprendiendo", "a programar");

//ahora mismo ejemplo con funciones

function concatenarCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3)
}

let cadena1 = "Estoy";
let cadena2 = "aprendiendo";
let cadena3 = "a programar";
(concatenarCadenas(cadena1, cadena2, cadena3));

//en el anterior solo se muestra el mensaje pero no se retorna hagamoslo retornado el valor a una funcion:

function concatenarCadenas(cadena4, cadena5, cadena6){
    let cadenaFinal = (cadena4 + " " + cadena5 + " " + cadena6)
    console.log(cadenaFinal);
    return cadenaFinal
}

let cadena4 = "Estoy";
let cadena5 = "aprendiendo";
let cadena6 = "a programar";
(concatenarCadenas(cadena1, cadena2, cadena3));
