/*crea una función que convierta grados Celsius a grados Farenheit. 
Recibe un parámetro (grados Celsius) y devuelve el resultado en grados Farenheit*/

function conversorDeGrados(celsius) {
    let farenheit = celsius * (9 / 5) + 32;
    return farenheit;
};

console.log(conversorDeGrados(150));

/*Crea una función que calculé el promedio de edad de un grupo de personas.
Recibe un array de edades y devuelve el promedio.*/

function promedioEdad(edades) {
    let promedio = 0;

    if (!edades) {
        return 0;
    } else {
        for (let i = 0; i < edades.length; i++) {
            promedio = promedio + edades[i];
        };
    };
    return promedio / edades.length;
};

console.log(`El promedio de edad es de ${promedioEdad([10, 20, 30, 40])} años`);

/*Dado un array de números, imprimir la suma de los números en el array que son mayores 
que el promedio del array. (ULTIMO)*/

let arrayNum = [14, 18, 24, 58, 49, 45, 10, 60];

// const mayorQueElPromedio = (array) => {
//     let suma = 0;

//     for (let i = 0; i < array.length; i++) {
//         suma = suma + array[i];
//     };

//     let promedio = suma / array.length;
//     let sumaMayores = 0;

//     for (let x = 0; x < array.length; x++) {
//         if (array[x] > promedio) {
//             sumaMayores += array[x];
//         };
//     };
//     return sumaMayores;
// };

// console.log(mayorQueElPromedio(arrayNum))

const obtenerPromedio = (array) => {
    let suma = 0;

    for (let i = 0; i < array.length; i++) {
        suma = suma + array[i];
    };
    let promedio = suma / array.length;
    return promedio;
}

const sumaMayorPromedio = (array, cb) => { //uso el resultado de la otra funcion como parametro
    let sumaMayores = 0;

    for (let x = 0; x < array.length; x++) {
        if (array[x] > cb) {
            sumaMayores += array[x];
        };
    };
    return sumaMayores;
}

const sumaMayores = console.log(sumaMayorPromedio(arrayNum, obtenerPromedio(arrayNum)));