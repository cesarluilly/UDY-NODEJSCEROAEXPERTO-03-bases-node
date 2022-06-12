# UDY-NODEJSCEROAEXPERTO-03-bases-node

## Video 29, 30

Normalmente archivo de punto de entrada a nuestra aplicacion
se llama `app.js` o `index.js` y tiene que estar lo mas limpio posible.

Aprender sobre el uso de requerir paquetes e ir a la documentacion
de node para aprender mas sobre los metodos y como traer un paquete
de nodejs a nuestra aplicacion.

Documentacion de filesystem para grabar archivos.
https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback

## Video 31 Importar archivos
Separamos en modulo para parte de crear archivo de nuestro app.js y lo convertimos en una promesa.

# Video 32 Recibir informacion desde la linea de comando
Ahora veremos como recibir informacion de consola y es a traves de lo siguiente a traves de **process.argv**
```
const [ , ,arg3 = 'base=5'] = process.argv;
const [ , base = 5] = arg3.split('=');
```
y la manera de mandarselos desde la consola es:

```
node app.js --base=10
```
Pero esto trae inconvenientes, por la posicion del arreglo en 
donde caiga nuestro parametro --base=10 validaciones para el 
splits




























