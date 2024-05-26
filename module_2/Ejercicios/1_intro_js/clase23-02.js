// Dado un número muestra si es positivo, negativo o cero.

let num = 0;

if (num >= 1) {
    console.log(`el número ${num} es positivo`);
} else if (num <= -1) {
    console.log(`el número ${num} es negativo`);
} else console.log(`el número es cero`);

// Dado un número del 1 al 7 muestra el día de la semana correspondiente.

let today = 7;

switch (today) {
    case 1: console.log("Hoy es lunes");
        break;
    case 2: console.log("Hoy es martes");
        break;
    case 3: console.log("Hoy es miercoles");
        break;
    case 4: console.log("Hoy es jueves");
        break;
    case 5: console.log("Hoy es viernes");
        break;
    case 6: console.log("Hoy es sabado");
        break;
    case 7: console.log("Hoy es domingo");
        break;
};

// Contar la cantidad de numeros pares que hay entre 1 y 10 (Inclusive)

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrayPares = [];
let i = 0;

while (i <= arrayNumbers.length) {
    if (arrayNumbers[i] % 2 === 0) {
        arrayPares.push(arrayNumbers[i])
    };
    i++;
};
console.log(`Hay ${arrayPares.length} números pares`);

// Imprimir CADA numero que sea impar entre 1 y 20 (inclusive)

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    };
};

// Dado un array de 5 numeros, imprimir la suma de todos sus valores

let arrayCincoNumbers = [10, 20, 30, 40, 50];
let suma = 0;
let indice = 0;

while (indice <= arrayCincoNumbers.length - 1) {
    suma += arrayCincoNumbers[indice];
    indice++;
};
console.log(`La suma de todos los números del array es ${suma}`);