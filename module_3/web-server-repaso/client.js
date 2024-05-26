const net = require("net"); //protocolo TCP

// defino la logica para crear la coneccion
const client = new net.createConnection({ port: 3000 });

//aca lo conecto
client.on("connect", () => {
  const book = {
    id: 6,
    name: "json",
    author: "Julio Verne",
    tags: ["Ciencia Ficcion", "Aventura", "Accion"],
  };
  const data = { action: "create", body: book };

  const message = JSON.stringify(data);

  //envio mensaje al servidor
  client.write(message);
});

// la CB que se le pasa la evento 'data' se va a ejecutar exclusivamente cuando el server envie un mensaje a nuestro cliente
client.on("data", (messageServer) => {
  console.log(messageServer.toString());
});
