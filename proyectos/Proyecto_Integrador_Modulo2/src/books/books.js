const fs = require("fs");
const { createFile, readFile } = require('../utils/fcCreateRead');
const pathDb = '../../db/db.json'

const main = () => {

const getAll = () => {
  if (!fs.existsSync(pathDb)) {   //fs.existsSync(ruta)  devuelve booleano
    createFile([])
  }
    return readFile();
};

const addBooks = (book) => {
  const books = getAll();

  books.push(book);

  createFile(books)
};

const getById = (id) => {
  const bookById = dbBooks.find((el) => el.id.toString() === id);

  return bookById
    ? bookById
    : `ERROR! El libro con ID "${id}", no existe en nuestra base de datos`;
};

const getByName = (name) => {
  const bookByName = dbBooks.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  return bookByName
    ? bookByName
    : `ERROR! El libro con "${name}", no existe en nuestra base de datos`;
};

const getByTag = (tag) => {
  const filteredBooks = dbBooks
    .filter((book) => book.tags.includes(tag))
    .map((book) => book.name);

  if (filteredBooks.length === 0) {
    return `ERROR! No se encontraron libros con la etiqueta "${tag}" en nuestra base de datos.`;
  }
  return filteredBooks;
};

const getSoldByAuthor = (author) => {
  const totalSold = dbBooks.reduce((acc, current) => {
    return current.author.toLowerCase() === author.toLowerCase()
      ? acc + current.sold
      : acc;
  }, 0);

  if (totalSold === 0) {
    return `ERROR! No se encontraron libros vendidos del autor "${author}" en nuestra base de datos.`;
  }
  return `Total de libros vendidos por "${author}": ${totalSold}`;
};

const getByAuthor = (author) => {
  const arrBooks = [];

  dbBooks.forEach((e) => {
    if (e.author.toLowerCase() === author.toLowerCase()) {
      arrBooks.push(e.name);
    }
  });

  if (arrBooks.length > 0) {
    arrBooks.push(getSoldByAuthor(author));
  } else {
    return `ERROR! No se encontraron libros del autor "${author}" en nuestra base de datos.`;
  }

  return arrBooks;
};

};

main()

module.exports = {
  getAll,
  getById,
  getByName,
  getByTag,
  getByAuthor,
  getSoldByAuthor,
};
