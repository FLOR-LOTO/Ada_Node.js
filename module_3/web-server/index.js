//traigo paquete nativo de Node (net utiliza el protocolo tcp)
const net = require("net");

//defino el puerto para pasar la informacion
const port = 3000;

//crear app/servidor que utilizar protocolo tcp para intercambiar info con otras pc createServer() aun no esta a la escucha, antes lo tengo que levantar
const server = net.createServer();

// levanto la app/servidor y listen va a estar a la escucha de peticiones, en consecuenta actua con lo que dice la cb que pasamos como segundo param

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

/*escuchar las conexiones con el metodo on... escucha el evento que le pasamos como param, en este caso connection escucha cuando alguien se quiera concetar 
con IP y puerto (socket), cuando se conecta se ejecuta la CB.
El socket lo puedo utilizar para volver a mandarle información*/

server.on('connection', (socket) => {
    console.log('CLIENTE CONECTADO');

    socket.write('Bienvenido a mi servidor') // le envio un mensaje al cliente que se conecto a traves de sus datos de IP y puerto que se guardo en el socket

    //declaramos el metodo Data: recibe la informacion que pasa el CLIENTE
    socket.on('data', (mensajeDelCliente) => {
        console.log('CLIENTE DICE: ' + mensajeDelCliente);
    });
})

