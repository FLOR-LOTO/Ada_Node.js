const {addBook, readDb} = require("../controllers/bookController");

const main = () => {
    addBook({});
    console.log(readDb()); 

}

main()