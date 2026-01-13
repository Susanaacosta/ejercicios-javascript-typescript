let numeroString: string |null  = prompt("Ingrese un número entero positivo");

let vectorNumeros: number[] = [];

if (!numeroString) {
    throw new Error ("El numero no esta definido");
}

let numero: number = parseInt(numeroString);

for (let i = numero; i >= 0; i--) {
    vectorNumeros.push(i);
    }

    alert(vectorNumeros);