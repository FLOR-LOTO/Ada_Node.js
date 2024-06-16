//anotacion de tipo - type annotation

let edad: number = 27;

let nombre: string = 'Flor'

// edad = nombre --> error


//afirmacion de tipos - type assertion

type User = {name: string, age: number}

function getUserDataFromExternalDataBase() {
    return 'hola'; 
}

const userDataString = getUserDataFromExternalDataBase()
const userData = JSON.parse(userDataString) as User; //le indico el formato que debe tener