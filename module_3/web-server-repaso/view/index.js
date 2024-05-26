const {
    readBooks,
    addBook,
    findById,
  } = require("../controllers/books-controller");

const processArguments = (messeger) => {
    /** el mensaje tiene la siguiente forma:
     * { action:"", body:{} }
     * La propiedad "action" hace referencia a lo que quiere hacer: leer, crear, eliminar, modificar
     * En la propiedad "body" es donde el cliente va a enviar informacion que se va a guardar en la base de datos (es decir, cuando quiera crear un libro, modificarlo)
     */
    const data = JSON.parse(messeger);
  
    if (!data.action) {
      return "No me mandaste ninguna accion";
    }
  
    //verifico si la accion es "read" (obtener todos los libros)
    if (data.action === "read") {
      return readBooks();
    } else if (data.action === "create") {
      return addBook(data.body);
    } else if (data.action === "readOne") {
      const book = findById(data.body.id);
  
      return book;
    } else {
      return "Accion invalida";
    }
  };

  module.exports = processArguments;