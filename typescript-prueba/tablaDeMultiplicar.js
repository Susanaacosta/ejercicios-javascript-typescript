var tablas = "";
for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
        var multiplicacion = i * j;
        tablas = tablas + "".concat(i, "*").concat(j, " = ").concat(multiplicacion, "\n");
    }
}
console.log(tablas);
