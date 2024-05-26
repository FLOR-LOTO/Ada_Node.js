const fs = require("fs");

const path = ("../db/db.json");

const createFile = (data) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]));
  }
  fs.writeFileSync(path, JSON.stringify(data));
};

const readFile = () => {
  const readFileJs = fs.readFileSync(path, { encoding: "utf-8" });
  const dataJs = JSON.parse(readFileJs);

  return dataJs;
};

module.exports = { createFile, readFile };
