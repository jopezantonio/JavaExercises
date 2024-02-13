/*Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias

.5 comensales,

Se necesitará:

1 kg de papas

5 huevos

300 gr de cebolla*/

let comensales = prompt("Por favor ingrese la cantidad de comensales");
comensales = parseInt(comensales);

function cantidadIngredientes(comensales){
    if (isNaN(comensales))  {
        alert("La entrada no es un número entero válido.");
        return
      }


let patatasPorPersona = 200 *comensales / 1000;
let huevosPorPersona = 1 * comensales;
let cebollaPorPersona = 300 * comensales / 1000;
alert("Para " + comensales + " comensales" + " se necesitan " + patatasPorPersona + " kgrms de patatas" + " " + huevosPorPersona + " huevos " + "y " +  cebollaPorPersona + " kgms de cebolla");
}
 cantidadIngredientes(comensales);

