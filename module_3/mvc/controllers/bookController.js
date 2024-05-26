//el controlador es el intermediario entre el modelo y la view, 
//primero uso las formas de acceso
const { read, create } = require("../models/bookModel");

//defino la logica si el cliente me pide agreagar un nuevo libro

const addBook = (book) => {
    const books = read();
    const booksParse = JSON.parse(books);

    booksParse.push(book)

    const booksJson = JSON.stringify(booksParse);
    create(booksJson)
};

const readDb = (book) => {
    const books = read(book);
    const booksParse = JSON.parse(books);

    return booksParse;
};

module.exports = {addBook, readDb};