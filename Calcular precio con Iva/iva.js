/*Has hecho una compra y sabes el precio del producto y su iva. Haz un script que te calcule el precio total que vas a pagar por tu compra.

Te recuerdo que para calcular el total debes sumar al precio el resultado de multiplicasr precio por el iva y dividir por 100.

Iva: 21%*/

let precio = prompt("Introduce el precio del producto");

function total(precio){
    // Convertimos el precio a número antes de realizar el cálculo
    precio = Number(precio);
   
     // Verificamos si la conversión fue exitosa y si el número es válido
     if (!isNaN(precio) && precio >= 0) { /*(!isNaN(precio) && precio >= 0) !isNan diferente a not a number o sea q sea un numero ademas q sea mayor o igual a cero para ser tomado como un precio valido y hacer la operacion, sino da un msnj de introduce precio valido */ 
        precio = precio * 1.21;
        return precio;
    } else {
        // En caso de que la entrada no sea un número válido
        return "Por favor, introduce un precio válido.";
    }
}
// Mostramos el resultado en un cuadro de diálogo
    alert("El precio total con iva es " + total(precio))








