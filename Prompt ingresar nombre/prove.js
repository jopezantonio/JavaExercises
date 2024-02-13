// Crea una variable llamada nombre y asigna tu nombre. Luego, usando una condición, imprime en la consola "Hola [nombre]" si la longitud del nombre es mayor a 5 caracteres; de lo contrario, imprime "Nombre corto".

const nombre = prompt("Por favor, ingresa tu nombre:");
//lo q esta entrte parentesis luego del prompt es lo q va a aparecer en pantalla, esperando respuesta del usuario
//const nombre = es una constante creada para guardar la informacion incluida por el usuario en el prompt
const saludo = (nombre) => {
    if (nombre.length > 5) {
        console.log(`Hola ${nombre}`)
        alert(`Hola ${nombre}`)
        
    } else {
        console.log('Nombre corto')
        alert('Nombre corto')
    } 
}

saludo(nombre)
