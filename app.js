const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true, 
                    default:false
                })
                .check( (argv, option) => {
                    if ( isNaN(argv.b) ) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                    // console.log('yargs', argv);
                })
                .argv;

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

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));

























