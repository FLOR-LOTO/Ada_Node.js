/*
1) crear la funciones suma, resta, multiplicacion y division 
2) exportar las funciones. 
3) importar solamente la función suma y utilizarla desde otro archivo. 
4) importar el modulo completo con un alias y utilizar el resto de las funciones
*/

export const add = (a: number, b: number): number => {
    return a + b
}
const substract = (a: number, b: number): number => {
    return a - b
}
const multiply = (a: number, b: number): number => {
    return a * b
}
const divide = (a: number, b: number): number=> {
    return a / b
}

export default {substract, multiply, divide}

