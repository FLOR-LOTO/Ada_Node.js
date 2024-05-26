const fs = require("fs");
const pathDb = '../db/datos.json'

// el modelo define el tipo de dato, la forma y me ofrece la logica para poder acceder a los datos
const book =  {
    "id": 0,
    name: "",
    author: "",
    tags: [],
    sold: 0
}

//defino la forma de acceder 
const create = (data) => {
    if (data.id && data.name && data.author && data.tags && data.sold)
    fs.writeFileSync(pathDb, data);
}

const read = () => {
    return fs.readFileSync(pathDb, { encoding: "utf-8" });
}


module.exports = { create, read }
