let renta = 64000;
let impuesto = 0;

if (renta < 10000) {
    impuesto = 5;
} else if (renta >= 10000 && renta < 20000) {
    impuesto = 15;
} else if (renta >= 20000 && renta < 35000) {
    impuesto = 20;
} else if (renta >= 35000 && renta < 60000) {
    impuesto = 30;
} else {
    impuesto = 45;
}

console.log("El impuesto es del " + impuesto + "%"); 