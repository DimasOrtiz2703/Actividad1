
class Coche {
    
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

 
    encender() {
        console.log("El coche " + this.marca + " " + this.modelo + " está encendido.");
    }
}


let miCoche = new Coche("ford", "mustang", 2022);

miCoche.encender();
