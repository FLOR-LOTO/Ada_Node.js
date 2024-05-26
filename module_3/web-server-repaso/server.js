const net = require("net"); //protocolo TCP
const processArguments = require("./view/index.js");

const server = net.createServer();

PORT = 3000; //puerto muy usado por TCP

// on permite definirle y escuchar eventos, la CB define que va a pasar cuando pase el evento
server.on("connection", (socket) => {
  console.log("SE CONECTÓ UN CLIENTE");

 
  socket.on("data", (messageClient) => {
    //toString() lo pasa de buffer a string
    const messageTxt = messageClient.toString();

    //verifico el mensaje del cliente para ver que accion voy a realizar
    const sendDataJs = processArguments(messageTxt);
    const sendDataJson = JSON.stringify(sendDataJs);

    socket.write(sendDataJson);
  });
});

//levantar el server
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
