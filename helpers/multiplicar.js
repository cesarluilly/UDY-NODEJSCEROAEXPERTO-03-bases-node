const fs = require('fs');
const colors = require('colors');

//  //Vamos a ir a la documentacion de filesystem.
//  //https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback

//  //Lo que queremos es grabar la tabla de multiplicar.

const crearArchivo = async ( base = 5, listar = false, hasta = 10) => {
    try {
        
        let salida = '', consola = '';
        
        
        for (let i = 0; i <= hasta; i++) {
            salida += `${ base } x ${i} = ${base * i}\n`;
            consola += `${ base } ${'x'.green} ${i} = ${base * i}\n`;
        }
        
        if (listar) {
            console.log('================================='.green);
            console.log('Tabla del:'.green, colors.blue(base));
            console.log('================================='.green);
            console.log(consola);
        }
        
        //  //Este metodo recibe un callback que se va a ejecutar cuando
        //  //  todo esto termine.
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

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