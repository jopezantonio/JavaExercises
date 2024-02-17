let num1 = prompt("Ingresar el numero al q se le sumara 5 ocho veces")
num1 = parseFloat(num1);

// Verificar si la conversión fue exitosa y num no es NaN
if (!isNaN(num1)) {
    let num = num1;

    function increaseNum(num) {
        // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
        // Retorna el valor final.
        // PISTA: Utiliza el bucle do-while.
        // Tu código:
        let sum = num;
        let i = 0;
        do {
            sum += 5
            i += 1

        } while (i < 8);
        alert("Resultado: " + sum);
    }
    increaseNum(num);  //aqui llamo a la funcion con el parametro num ingresado
} else {
    alert("La entrada no es un número válido.");
}


