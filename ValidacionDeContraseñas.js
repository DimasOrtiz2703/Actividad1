
let contraseña = prompt("Introduce tu contraseña:");


if (contraseña.length < 8) {
    console.log("Error: La contraseña debe tener al menos 8 caracteres.");
} else {
    console.log("¡Contraseña válida! Acceso concedido.");
}
