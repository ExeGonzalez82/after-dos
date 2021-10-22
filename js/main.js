let topping = prompt("Que topping queres?");

let precio = 0.00;
let helado = 1.90;
let precioFinal = 0.00;

if (topping == "oreo") {
    precio = 1;
}else if (topping == "kitkat"){
    precio = 1.50;
}else if (topping == "brownie"){
    precio = 0.75;
}else if (topping == "lacacitos"){
    precio = 0.95;
}else {
    console.log("No tenemos ese topping");
    precio = 0;
}

precioFinal = helado + precio;
console.log("El helado cuesta " + precioFinal);

console.log("terminamos el ejercicio");