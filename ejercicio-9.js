let edad  = 20;
let precioEntrada = 0;

if (edad < 4) { 
    precioEntrada = 0; 

  } else if (edad >= 4 && edad <= 18) {
      precioEntrada = 5;
    
} else {
     precioEntrada = 10;

}

console.log("El precio de la entrada es: $" + precioEntrada);

