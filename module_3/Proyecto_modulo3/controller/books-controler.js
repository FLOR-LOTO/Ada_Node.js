const { createFile, readFile } = require("../models/books-models");
const uuid = require("uuid")

//const bookModel = require("../models/books-models");

const allBooks = readFile()

const getAll = () => {
   return readFile()
};


const getById = (id) => {
    const bookId = allBooks.find((book) => book.id.toString() === id.toString())

    return bookId ? bookId : `El ID: ${id} no se encuentra en nuestra base de datos`
};

const createBook = (book) => {

    book.id = uuid.v4()

    allBooks.push(book)
    createFile(allBooks)

    return "Libro creado existosamente!!"
 };

console.log(createBook({id: 78, name:'Flor', author:'Laura'}));


module.exports = { getAll, getById, createFile };
