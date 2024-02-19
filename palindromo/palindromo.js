function esPalindromo(string) {
    // La función recibe un argumento "string".
    // Verifica si este string es palíndromo o no.
    // Retorna true si lo es, caso contrario, retorna false.
    // IMPORTANTE: Un palíndromo es una palabra o frase
    // que se lee igual hacia adelante que hacia atrás.
    // Tu código:
    let newText = string.split('').reverse().join('').replace(/\s/g, '');
    newText = newText.toLowerCase();
    string = string.toLowerCase().replace(/\s/g, '');
     if (newText === string) {
        return true;
      } else {
               return false; 
        }
       
     }
  
     let resultado = esPalindromo("La ruta nos aporto otro paso natural");
     console.log(resultado); 
  
     