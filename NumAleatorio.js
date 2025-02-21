
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;


let intento = 0;


while (intento !== numeroAleatorio) {
    
    intento = parseInt(prompt("Adivina el número entre 1 y 100:"));

    if (intento < numeroAleatorio) {
        alert("Es más alto. ¡Intenta de nuevo!");
    } else if (intento > numeroAleatorio) {
        alert("Es más bajo. ¡Intenta de nuevo!");
    } else {
        alert("¡Felicidades! ¡Has adivinado el número!");
    }
}
