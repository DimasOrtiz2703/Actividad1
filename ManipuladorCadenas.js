// Solicitar al usuario su nombre y apellido
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu apellido:");

// Concatenar el nombre y apellido
let nombreCompleto = nombre + " " + apellido;

// Mostrar mensaje de bienvenida con el nombre completo en mayúsculas
console.log("¡Bienvenido, " + nombreCompleto.toUpperCase() + "!");
