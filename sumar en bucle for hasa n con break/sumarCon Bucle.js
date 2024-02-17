function sumarHastaNConBreak(n) {
    // La función recibe un numero n por argumento.
    // Devuelve la suma de todos los números desde 1 hasta n.
    // Si la suma supera a 100, detén el bucle usando break.
    // Tu código:
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
        if (sum >= 1000) {
            alert("Error: La sumatoria ha superado el límite de 1000");
            break;
        } else if (sum < 1000 && i === n) {
            /*ojo importante en el if esta la condicion q i===n, esto evita q genere el alert
            en cada iteracion y solo se genera cuando ya i === n, o sea q ya se haya cumplido
            todo el bucle for con i desde 0 hasta n.*/
            alert(sum);
        }
    }
}


sumarHastaNConBreak(15);
