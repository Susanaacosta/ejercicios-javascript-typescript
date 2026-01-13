let puntuacion = 0.2;
let dinero = 2400 * puntuacion;
let nivel = null;

if (puntuacion === 0.0) {
    nivel = "inaceptable";

} else if (puntuacion === 0.4) {
    nivel = "aceptable";

} else if (puntuacion >= 0.6) {
    nivel = "meritorio";
    
    }
    if (nivel !==null) {
        dinero = 2400 * puntuacion;

    }
 else {
    console.log("Puntuación inválida");
}
console.log("Nivel: " + nivel + ", dinero: $" + dinero)