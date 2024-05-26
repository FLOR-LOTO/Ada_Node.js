const net = require ("net")

const server = net.createServer()

const port = 3000

server.on("connection", (socket) => {

    socket.on("data", (messageClient) => {

        const bufferToString = messageClient.toString()

//falta un paso

        const response = JSON.stringify(bufferToString)

        socket.write(response)
    })
})

server.listen(port, () => {
    console.log('Servidor escuchando en puerto' + port);
})
