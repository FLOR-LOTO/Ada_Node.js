const processArgv = require("../utils/fcProcessArgv.js");
const books = require("../books/books.js");

const main = () => {
  //ejecuto la funcion con el parametro process.argv
  const processedArgs = processArgv(process.argv);

  const bookName = processedArgs.name;
  const bookId = processedArgs.id;
  const bookTag = processedArgs.tags;
  const bookAuthor = processedArgs.author;

  if (bookName) {
    console.log(
      "------------------------BUSCAR POR NOMBRE--------------------------"
    );
    console.log(books.getByName(bookName));
  }
  if (bookId) {
    console.log(
      "------------------------BUSCAR POR ID------------------------------"
    );
    console.log(books.getById(bookId));
  }
  if (bookTag) {
    console.log(
      "------------------------BUSCAR POR CATEGORIA-----------------------"
    );
    console.log(books.getByTag(bookTag));
  }
  if (bookAuthor) {
    console.log(
      "------------------------BUSCAR POR AUTOR---------------------------"
    );
    console.log(books.getByAuthor(bookAuthor));
  }
// Verificar si processedArgs está vacío //el metodo object.keys() devuelve la propiedades del en forma de array
  if (Object.keys(processedArgs).length === 0) {
    console.log(
      "------------------------TODOS LOS LIBROS---------------------------"
    );
    console.log(books.getAll());
  } else if (!bookName && !bookId && !bookTag && !bookAuthor) {
    console.log("ERROR: LA PROPIEDAD ES INEXISTENTE");
  }
};

main();
