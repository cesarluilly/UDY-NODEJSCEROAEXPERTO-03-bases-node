const { crearArchivo } = require('./helpers/multiplicar')

console.clear();

//  //Manda info de la aplicacion y parametros al ejecutar 
//  //nuestro programa.
// console.log(process.argv);

//  //Desescruturamos el arreglo.
const [ , ,arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
    .catch(err => console.log(err));

























