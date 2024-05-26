const fs = require("fs");

const path = "./db/db.json";

const createFile = (data) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  const dataJson = JSON.stringify(data);
  fs.writeFileSync(path, dataJson);
};

const readFile = () => {
  const booksJson = fs.readFileSync(path, { encoding: "utf-8" }); // lee la db
  const booksJs = JSON.parse(booksJson); // la pasa a js

  return booksJs; // la retorna
};


module.exports = { createFile, readFile };
