const fs = require("fs");
const pathDb = '../../db/db.json'

// el modelo define el tipo de dato, la forma y me ofrece la logica para poder acceder a los datos
const book =  {
    id: 0,
    name: "",
    author: "",
    tags: [],
    sold: 0
}

//defino la forma de acceder 
const create = (book) => {
    fs.writeFileSync(pathDb, book);
}

const read = () => {
    return fs.readFileSync(pathDb, { encoding: "utf-8" });
}


module.exports = { create, read }