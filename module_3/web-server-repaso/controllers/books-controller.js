const { createFile, readFile } = require("../models/books-model");
const uuid = require("uuid")

const validateBook = (book) => {
  if (
    !book.id ||
    !book.name ||
    !book.author ||
    !book.tags.length ||
    (!book.sold && book.sold != 0)
  ) {
    return "Propiedades faltantes";
  }
  //verifico que el id que me pase el cliente sea de tipo numerico
  if (typeof book.id != "number") {
    return "ID tiene que ser de tipo numerico";
  }
  const books = readFile();

  const searchedBook = book.find((book) => book.id === book.id);
  //chequeo si el ID ya existe
  if (searchedBook) {
    return "ERROR: el ID ya existe";
  }
  return true;
};

const addBook = (book) => {
  const isValidate = validateBook(book);

  if (typeof isValidate === "string") {
    return isValidate;
  }
  const books = readFile();

  book.id = uuid.v4()

  books.push(book);

  return createFile(books);
};

function findById(id) {
  const books = booksModel.readFile();

   // find devuelve el libro si lo encuentra o undefined caso contrario
  const searchedBook = books.find((book) => book.id === id);

  if (!searchedBook) {
    return "No existe el libro";
  }

  return searchedBook;
}

function readBooks() {
  console.log("VOY A LLAMAR A LA FUNCION READFILE DEL MODELO");

  return booksModel.readFile();
}

module.exports = {
  addBook,
  findById,
  readBooks,
};
