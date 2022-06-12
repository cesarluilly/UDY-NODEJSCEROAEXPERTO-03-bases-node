const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');
console.clear();

// console.log("************************************");
// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);
// console.log("************************************");


//  //Manda info de la aplicacion y parametros al ejecutar 
//  //nuestro programa.
// console.log(process.argv);

//  //Desescruturamos el arreglo.
const [ , ,arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch(err => console.log(err));

























