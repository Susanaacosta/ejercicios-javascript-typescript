var numeroString = prompt("Ingrese un número entero positivo");
var vectorNumeros = [];
if (!numeroString) {
    throw new Error("El numero no esta definido");
}
var numero = parseInt(numeroString);
for (var i = numero; i >= 0; i--) {
    vectorNumeros.push(i);
}
alert(vectorNumeros);
