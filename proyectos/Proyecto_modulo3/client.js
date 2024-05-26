const net = require("net")

const port = 3000;

const client = new net.createConnection({port})

client.on("connect", () => {
    const book = {
        id: 8,
        name: 'New book',
        author: 'Desconocido',
        tags: ['Acción', 'Drama']
    }

    const data = { action: 'getById', body: book}

    const dataJson = JSON.stringify(data)

    client.write(dataJson)
})

client.on("data", (messageServer) => {
    const msgToString = messageServer.toString()
    const msgToJs = jsonToJS(msgToString)
    console.log(msgToJs);
  });