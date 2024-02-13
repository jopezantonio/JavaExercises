/*En una variable tienes el lado de un cuadrado, debes escribir un programa que te calcule el área y el perímetro del cuadrado.
El area la calculas como lado multiplicado por lado. El perímetro es la suma de los cuatro lados*/

let lado = prompt("¿Cuanto mide el lado del cuadradado (Ingrese solo numeros)");
let area;
let perimetro;
lado = Number(lado);
function areaYPerimetro(lado) {
    if (!isNaN(lado) && lado >= 0){
    area = lado * lado;
    perimetro = lado *4;
    alert("El area del cuadrado es " + area +  " y su perimetro es " + perimetro);
    }
    else {
        alert("Ingrese una medida valida");
    }
}
  areaYPerimetro(lado);


