import { calculator } from "./calculator"; //importo el objeto desestructurado
// import * as cualquierNombre from "./calculator" --> me trae todo * dentro de un objeto
// import cualquierNombre from "./calculator" --> me trae solo lo que este exportando por default la funcion principal del modulo
// import cualquierNombre {numeros} from "./calculator" --> me trae solo lo que este exportando por default y ademas le sumo una desestructuracion / destructured
import { generateRandomNum } from "./utils/generateRandomNum"

const main = () => {
    const result =calculator.add(generateRandomNum(), generateRandomNum())

    return result
}

console.log(main());

