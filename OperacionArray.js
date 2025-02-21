
let numeros = [];


for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    numeros.push(numero);
}


let suma = numeros.reduce((acc, num) => acc + num, 0);


let promedio = suma / numeros.length;

let numeroMayor = Math.max(...numeros);
let numeroMenor = Math.min(...numeros);

console.log("Suma: " + suma);
console.log("Promedio: " + promedio);
console.log("Número mayor: " + numeroMayor);
console.log("Número menor: " + numeroMenor);
