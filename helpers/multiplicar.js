const fs = require('fs');

//  //Vamos a ir a la documentacion de filesystem.
//  //https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback

//  //Lo que queremos es grabar la tabla de multiplicar.

const crearArchivo = async ( base = 5) => {
    try {
        console.log('=================================');
        console.log('Tabla del:', base);
        console.log('=================================');

        let salida = '';


        for (let i = 0; i <= 10; i++) {
            salida += `${base } x ${i} = ${base * i}\n`;
        }

        console.log(salida);


        //  //Este metodo recibe un callback que se va a ejecutar cuando
        //  //  todo esto termine.
        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    //  //En ecmascript tener una propiedad que se llame igual
    //  //  la constante, es redundante y es por eso que se
    //  //  pone de la siguiente manera.
    crearArchivo
}