const { read, create } = require("../models/booksModels");
const fs = require("fs");
const pathDb = "../../db/db.json";

const addBook = (id, name, author, tags, sold) => {
  const newBook = {id, name, author, tags, sold}
  const books = read();
  const bookParse = JSON.parse(books);

  bookParse.push(newBook);

  const bookJson = JSON.stringify(bookParse);
  create(bookJson);
};

const readDb = (book) => {
  const books = read(book);
  const booksParse = JSON.parse(books);

  return booksParse;
};

const createDb = (book) => {
  create(book);
  return book;
};

const getAll = () => {
  if (!fs.existsSync(pathDb)) {
    createDb([]);
  }
  return readDb();
};

const getById = (id) => {
  const dbBooks = readDb();
  const bookById = dbBooks.find((el) => el.id === parseInt(id));

  return bookById;
};

const getByName = (name) => {
  const dbBooks = readDb();
  const bookByName = dbBooks.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  return bookByName;
};

// console.log(getByName());

const getByTag = (tag) => {
  const dbBooks = readDb();
  const filteredBooks = dbBooks
    .filter((book) => book.tags.includes(tag))
    .map((book) => book.name);

  return filteredBooks;
};

// console.log(getByTag());

const getSoldByAuthor = (author) => {
  const dbBooks = readDb();
  const totalSold = dbBooks.reduce((acc, current) => {
    return current.author.toLowerCase() === author.toLowerCase()
      ? acc + current.sold
      : acc;
  }, 0);

  return totalSold;
};

//console.log(getSoldByAuthor());

const getByAuthor = (author) => {
  const arrBooks = [];

  const dbBooks = readDb();
  dbBooks.forEach((e) => {
    if (e.author.toLowerCase() === author.toLowerCase()) {
      arrBooks.push(e.name);
    }
  });

  return arrBooks;
};

// console.log(getByAutho());

module.exports = {
  addBook,
  readDb,
  getAll,
  getById,
  getByName,
  getByTag,
  getSoldByAuthor,
  getByAuthor,
};
