import { add } from "./operaciones"
import * as operaciones from "./operaciones"
import { generateRandomNum } from "../src/utils/generateRandomNum"

const numRandom = generateRandomNum()
const numRandom2 = generateRandomNum()

console.log(`La SUMA entre ${numRandom} y ${numRandom2} es: ${add(numRandom, numRandom2)}`);

console.log(`La RESTA entre ${numRandom} y ${numRandom2} es: ${operaciones.default.substract(numRandom, numRandom2)}`);
console.log(`La MULTIPLICACIÓN entre ${numRandom} y ${numRandom2} es: ${operaciones.default.multiply(numRandom, numRandom2)}`);
console.log(`La DIVISIÓN entre ${numRandom} y ${numRandom2} es: ${operaciones.default.divide(numRandom, numRandom2)}`);



