/* Dado un array de 10 numeros, desarrollar una función que reciba como parámetro un numero y devuelva 
true si es par, false si es impar. Imprimir en la terminal un array que contenga todos los números pares
del array "numbers"*/
/* 2 funciones, una que reciba UN SOLO numero por parametro y verifique que es par. Luego otra funcion que 
va a utilizar a la funcion par y se va a encargar de crear el array de numeros pares*/

//fc. para verificar si es par

let numbers = [1, 12, 23, 4, 15, 10, 20, 35, 40, 55];

const esPar = (num) => {
    if (num % 2 === 0 && num !== 0) {
        return true;
    } else return false;
};

//fc. para devolver numero pares

const arrayNumPar = (array) => {
    const newArr = [];
    let indice = 0;

    for (let i = 0; i < array.length; i++) {
        if (esPar(array[i])) {
            newArr[indice] = array[i];
            indice++;
        };
    };
    return newArr;
};

const devolverPares = console.log(arrayNumPar(numbers));

//Crear una funcion que reciba como parametro un string y devuelva la cantidad de vocales

const cantVocales = (str) => {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            contador += 1;
        };
    };
    return contador;
};

console.log(cantVocales("ornitorrinco"));
