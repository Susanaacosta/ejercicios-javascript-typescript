let tablas: string =  "";


for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
    const multiplicacion = i * j;
tablas = tablas + `${i}*${j} = ${multiplicacion}\n`;

   }
   tablas += "---------\n"
    alert(tablas);
    }
