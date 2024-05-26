const processArgv = require("../utils/fcProcessArgv.js");
const {addBook, getAll,getById,getByName,getByAuthor,getSoldByAuthor} = require("../controllers/booksControllers.js");

const main = () => {
  //ejecuto la funcion con el parametro process.argv
  const processedArgs = processArgv(process.argv);

  const bookName = processedArgs.name;
  const bookId = processedArgs.id;
  const bookTag = processedArgs.tags;
  const bookAuthor = processedArgs.author;
  const bookSold = processedArgs.author;
  // const bookToAdd = processedArgs.add;
  
  // if (bookToAdd) {
  //   console.log(
  //     "------------------------AGREGAR NUEVO LIBRO--------------------------"
  //   );
  //   addBook(bookToAdd);
  //   console.log('Nuevo libro agregado con éxito');
  
  if (bookName) {
    console.log(
      "------------------------BUSCAR POR NOMBRE--------------------------"
    );
    console.log(getByName(bookName));
  } else if (bookId) {
    console.log(
      "------------------------BUSCAR POR ID------------------------------"
    );
    console.log(getById(bookId));
  } else if (bookTag) {
    console.log(
      "------------------------BUSCAR POR CATEGORIA-----------------------"
    );
    console.log(getByTag(bookTag));
  } else if (bookAuthor) {
    console.log(
      "------------------------BUSCAR POR AUTOR---------------------------"
    );
    console.log(getByAuthor(bookAuthor));
  } else if (bookSold) {
    console.log(
      "------------------------VENTAS POR AUTOR---------------------------"
    );
    console.log(getSoldByAuthor(bookSold));
  } else if (Object.keys(processedArgs).length === 0) {
    console.log(Object.keys(processedArgs));
    console.log(
      "------------------------TODOS LOS LIBROS---------------------------"
    );
    console.log(getAll());
  } else {
    console.log("ERROR: LA PROPIEDAD ES INEXISTENTE");
  }
};

main();
