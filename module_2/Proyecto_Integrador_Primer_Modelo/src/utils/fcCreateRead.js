const fs = require("fs");
const pathDb = '../../db/db.json'

const createFile = (data) => {
  const dateStringify = JSON.stringify(data);
  fs.writeFileSync(pathDb, dateStringify);
};

const readFile = () => {
  const date = fs.readFileSync(pathDb, { encoding: "utf-8" });
  const dateParse = JSON.parse(date);

  return dateParse;
};

module.exports = { readFile, createFile };
