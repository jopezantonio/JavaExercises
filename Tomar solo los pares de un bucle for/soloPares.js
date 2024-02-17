// Configuración
const myArray = [];

// Cambia solo el código debajo de esta línea
/*for(let i=1; i<=9; i += 2){
  myArray.push(i);
}
console.log(myArray)*/
let i =1 
for( i; i<=10; i++){
  if (i % 2 != 0){
    continue
  }  else {
    myArray.push(i);
    
  }
}
console.log(myArray);