//ME DICE EL INDICE DONDE SE ENCUENTRA EL ELEMENTO
const pets  = [ "PERROS", "GATOS", "PERROS", "PERICOS", "PERROS", "LOROS"];


const perico = pets.indexOf("PERICOS");
console.log(perico);

const perro = pets.indexOf("PERROS");
console.log(perro);

//CONTAR OCURRENCIAS DENTRO DEL ARRAY 
function contarOcurrencias(array, elemento) {
    let contador = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
        contador++;
      }
    }
  
    return contador;
  }
  
  
  
  const vecesPerros = contarOcurrencias(pets, "PERROS");
  console.log(`"PERROS" aparece ${vecesPerros} veces en el array.`);
  