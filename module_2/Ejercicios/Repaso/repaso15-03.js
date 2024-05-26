/*Desarrollar un script que imprima en la consola si un número ingresado es par o impar*/

const parImpar = (num) => (num % 2 === 0) ? `${num} es par` : `${num} es impar`

console.log(parImpar(3));

/*Desarrollar un script que imprima en la consola el número mayor, de tres números ingresados.*/

const numMayor = (n1, n2, n3) => {
    return Math.max(n1, n2, n3)
};

console.log(numMayor(23, 8, 20));

/*Dado un número entero n, imprimir todos los números desde n hasta 1 en orden descendente.*/

const numbersDesc = (n) => {
    let arrayDesc = [];
    for (let i = n; i >= 1; i--) {
        arrayDesc.push(i)
    };
    return arrayDesc;
};

console.log(numbersDesc(10));

/*Dado un número entero n, imprimir todos los números desde 1 hasta n en orden ascendente.*/

const numbersAsc = (n) => {
    let arrayAsc = [];
    for (let i = 1; i <= n; i++) {
        arrayAsc.push(i)
    };
    return arrayAsc;
};

console.log(numbersAsc(10));

/*Dado un array de palabras, imprimir la cantidad total de palabras.*/
arrPrueba = ["Florencia", "femenino", "gimnasio"]

const arrPalabras = (arr) => arr.length;

console.log(arrPalabras(arrPrueba));

/*Dado un array de 9 numeros, imprimir el valor booleano true para todos los números pares.*/

arrayNum = [2, 8, 5, 7, 9, 1, 6]

const esPar = (arr) => arr.map(e => e % 2 === 0);

console.log(esPar(arrayNum));

/*Crear una función que calcule el promedio de edad de un grupo de personas. Recibe una array de edades y devuelve el promedio.*/

arrEdades = [25, 32, 44, 30, 21, 50];

const promedioEdades = (arr) => {
    return arr.reduce((ac, curr) => ac += curr) / arr.length;
};

console.log(promedioEdades(arrEdades));

/*Crear una función que cuente la cantidad de veces que aparece un elemento en un array. Recibe un array y un elemento como parámetros y devuelve la cantidad de veces que aparece en el array.*/

arrElementos = ['hola', 'flor', '47', '47', 'hola', 'hola'];

//CON FOREACH

const searchElement = (arr, el) => {
    let count = 0;
    arr.forEach(element => (element === el) ? count += 1 : count);
    return count;
};

//CON REDUCE

const searchElement2 = (arr, el) => {
    return arr.reduce((count, curr) => {
        return curr === el ? count + 1 : count;
    }, 0);
};

console.log(searchElement(arrElementos, 'flor'));
console.log(searchElement2(arrElementos, 'hola'));

/*Crea una función que reciba como parámetro una cadena de texto y devuelva la cantidad de vocales que tiene.*/

//CON FOR
const vocales = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u' ? count += 1 : count
    };
    return count;
};

//CON REDUCE → transformo la string en array con el split
const vocales2 = (str) => {
    return str.split('').reduce((ac, curr) => 'aeiou'.includes(curr) ? ac + 1 : ac, 0)
};

console.log(vocales2('muercielago'));

console.log('----------------------------------------------------------');

const array = [1, 2, 3, 4, 5]
//reduce
console.log(array.reduce((acc, current) => {
   return  acc + current
}, 1))
//forEach
array.forEach(el => {
   console.log(el + ' pase por este elemento'); 
});
//map

//forin

//forof