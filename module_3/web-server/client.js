const { ClientRequest } = require('http');
const net = require ('net');

/* me traigp la logica para realizar una conexion al servidor: con un metodo new net.createConnection({}) dentro creo la variable 
para declarar el puerto y puede llevar un segundo parametro que defina la dirección IP a la que me quiero conectar: 
new net.createConnection({ port: 3000, host: "323.233..." })
en este caso como nos conectamos a nuestra misma pc no hace falta por que entiende que es misma IP*/

const client = new net.createConnection({ port: 3000 });

//me conecto con el servidor: en el servidor es connection en el cliente es connect

client.on('connect', () => {
    console.log('Me conecte al servidor');
    client.write('Hola Server!!')
})

//declaramos el metodo Data: recibe la informacion que pasa el SERVIDOR

client.on('data', (mensajeDelServidor) => {
    console.log('SERVIDOR DICE: ' + mensajeDelServidor);
})