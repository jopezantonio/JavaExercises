let fechaString = prompt("Ingrese su fecha de nacimiento (dd/mm/aaaa)");

// Dividir la fecha ingresada en un array utilizando "/"
let fechaArray = fechaString.split("/");

// Se convierte a numerico el string ingresado en el prompt
let fechaNum = fechaArray.map(elemento => parseInt(elemento));


// Obtener la fecha actual
//se asigna fecha actual con new Date a una variable creada para almacenarla
//luego usando la variable creada(fechaActual) mas el metodo.getDate se obtuvo el dia actual por separado y getMont para el mes y getFullYear para el año. 
let fechaActual = new Date();
let diaActual = fechaActual.getDate();
let mesActual = fechaActual.getMonth() + 1; // Meses en JavaScript de 0 a 11
let anioActual = fechaActual.getFullYear();

//para obtemer los años meses y dias de la persona q se introdujo la fecha de nacimiento en el prompt se resta año mes y fecha a los parametros del array fechaNum en sus indices [2][1][0], con año actual mes actual y dia actual. 
let edadAnios = anioActual - fechaNum[2];
let edadMeses = mesActual - fechaNum[1];
let edadDias = diaActual - fechaNum[0];


//se crean los ciclos de if para comparar valores y determinar si es mayor de edad. Asi lo hice yo:


//version simplificada q me dio chatgpt
function mayorDeEdad() {
    if (edadAnios > 18 || (edadAnios === 18 && (edadMeses > 0 || (edadMeses === 0 && edadDias >= 0)))) {
      alert("Es mayor de edad");
    } else {
      alert("Es menor de edad, no puede pasar");
    }
  }
  
  mayorDeEdad();

/*function mayorDeEdad() {
    if (edadAnios < 18) {
        alert("Es menor de edad, no puede pasar")
        return
    }
    
    if (edadAnios > 18) {
        alert("Es mayor de edad")
        return
    }

    if (edadAnios === 18 && edadMeses > 0) {
        alert("Es mayor de edad")
        return
    }

    if (edadMeses === 0 && edadDias >= 0) {
        alert("Es mayor de edad")
        return
    }

    alert("Es menor de edad, no puede pasar");
}


mayorDeEdad()*/
