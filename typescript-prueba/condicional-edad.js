var cantidadEdad = prompt("Ingrese su edad");
if (!cantidadEdad) {
    throw new Error("la edad no esta definida");
}
var edad = parseInt(cantidadEdad);
if (edad >= 18) {
    alert("es mayor de edad");
}
else {
    alert("es menor de edad");
}
