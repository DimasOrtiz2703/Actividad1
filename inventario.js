
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    agregarUnidades(cantidad) {
        this.cantidad += cantidad;
        console.log(`${cantidad} unidades de ${this.nombre} agregadas. Inventario actual: ${this.cantidad}`);
    }

 
    quitarUnidades(cantidad) {
        if (this.cantidad >= cantidad) {
            this.cantidad -= cantidad;
            console.log(`${cantidad} unidades de ${this.nombre} quitadas. Inventario actual: ${this.cantidad}`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}. Inventario actual: ${this.cantidad}`);
        }
    }

  
    mostrarInfo() {
        console.log(`Producto: ${this.nombre}\nPrecio: $${this.precio}\nCantidad en inventario: ${this.cantidad}`);
    }
}


let producto1 = new Producto('Camiseta', 20, 50);


producto1.mostrarInfo();


producto1.agregarUnidades(30);


producto1.quitarUnidades(10);


producto1.quitarUnidades(100);


producto1.mostrarInfo();
