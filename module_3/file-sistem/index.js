const fs = require("fs");

//crear archivo
const createFile = (data) => {
  const dataTrasformada = JSON.stringify(data); //transformo a json string por que quiero crear un archivo de ese tipo
  fs.writeFileSync("./db.json", dataTrasformada);
};

//leer archivo
const readFile = () => {
  const datos = fs.readFileSync("./db.json", { encoding: "utf-8" });
  const dataTransformada = JSON.parse(datos); // transformo a dato js
  return dataTransformada;
};

//eliminar archivo
// const removeFile = () => {
//     fs.unlinkSync('./db.json') //elimina un archivo
// }

//crear y leer archivo
const addBook = (book) => {
    const books = readFile(); //llamo a la funcion que lee el archivo y lo transforma en js para poder pushearle la nueva info
    books.push(book)//pushee el book que entra por params

    createFile(books) //llamo a la función para crear el archivo nuevamente y le paso el archivo modificado para que lo sobreescriba
};

addBook({
  id: 15,
  name: "Inventado",
  author: "Flor Loto",
  tags: ["Filosofia"],
  sold: 100
});

