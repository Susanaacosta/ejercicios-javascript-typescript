let hectareas= 1000001;
let AreaPinos;
let AreaOyamel;
let AreaCedro

if (hectareas <= 1000000) {
   AreaPinos = hectareas * 0.05;
   AreaOyamel = hectareas * 0.3;
   AreaCedro = hectareas * 0.2;
} else   {
   AreaPinos = hectareas * 0.7;
   AreaOyamel = hectareas * 0.3;
   AreaCedro = hectareas * 0.2;
    
}
console.log("El area sera distribuida de la siguiente manera:");
console.log("Pinos: " + AreaPinos);
console.log("Oyamel: " + AreaOyamel);
console.log("Cedro: " + AreaCedro);