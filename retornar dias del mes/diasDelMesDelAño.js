const mesesConDias = {
    1: 31,
    2: 28, // Asumiendo un año no bisiesto
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
};

const mesesLetras = [
    "Enero",
     "Febrero", // Asumiendo un año no bisiesto
     "Marzo",
     "Abril",
     "Mayo",
    "Junio",
    "Julio",
     "Agosto",
 "Septiembre",
     "Octubre",
     "Noviembre",
    "Diciembre"
];

let numeroMes = parseInt(prompt("Ingrese un mes (en formato número):"));

function diasEnMes() {
    do {
        

        // Verificar si el mes es válido
        if (!isNaN(numeroMes) && numeroMes > 0 && numeroMes <= 12) {
            let respuesta = mesesConDias[numeroMes]
            alert(`El mes de ${mesesLetras[numeroMes - 1]} tiene ${respuesta} dias.`);
            return;
        } else {
            alert("Por favor, ingrese un mes válido (número del 1 al 12).");
            return;
        }

    } while (true);
}

diasEnMes(numeroMes);