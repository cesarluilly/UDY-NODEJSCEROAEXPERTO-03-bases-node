const fs = require('fs');

console.clear();
//  //Vamos a ir a la documentacion de filesystem.
//  //https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback

//  //Lo que queremos es grabar la tabla de multiplicar.

const base = 3;
let salida = '';

console.log('=================================');
console.log(`Tabla del ${base}`);
console.log('=================================');

for (let i = 0; i <= 10; i++) {
    salida += `${base } x ${i} = ${base * i}\n`;
}

console.log(salida);


//  //Este metodo recibe un callback que se va a ejecutar cuando
//  //  todo esto termine.
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');

    console.log(`tabla-${base}.txt creada!`);
    
});
