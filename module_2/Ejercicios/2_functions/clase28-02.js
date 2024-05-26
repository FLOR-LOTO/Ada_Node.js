/*Crear una función que calcule el área de un círculo. 
Recibe un parámetro (radio) y devuelve el área del círculo.*/

const areaCirculo = (radio) => {
    let area = Math.PI * radio ** 2;
    return Math.round(area);
};

const calculadorArea = console.log(areaCirculo(5));

/*Crear una funcion que cuente la cantidad de veces que aparece un elemento en un array, recibe un array
y un elemento como parametros y devuelve la cantidad de veces que aparece en el array*/

let elementosDeCocina = ["cuchillo", "tenedor", "cuchara", "cuchara", "tenedor", "cuchara", "cuchara"]
let arrayVacio = [];

//CON FOR

// const contadorElemento = (array, elemento) => {
//     let contador = 0;
//     if (array.length === 0) {
//         return "el array esta vacio";
//     } else for (let i = 0; i < array.length; i++) {
//         if (array[i] === elemento) {
//             contador += 1;
//         }
//     }
//     return contador;
// };

// console.log(contadorElemento(elementosDeCocina, "cuchara"));
// console.log(contadorElemento(elementosDeCocina, "tenedor"));
// console.log(contadorElemento(elementosDeCocina, "cuchillo"));
// console.log(contadorElemento(arrayVacio, "cuchillo"));

//CON WHILE

const contadorElemento = (array, elemento) => {
    let contador = 0;
    let i = 0;

    if (array.length === 0) {
        return "El array está vacío";
    } else while (i < array.length) {
        if (array[i] === elemento) {
            contador += 1;
        };
        i++;
    };
    return contador;
};

console.log(contadorElemento(elementosDeCocina, "cuchara"));
console.log(contadorElemento(elementosDeCocina, "tenedor"));
console.log(contadorElemento(elementosDeCocina, "cuchillo"));
console.log(contadorElemento(arrayVacio, "cuchillo"));