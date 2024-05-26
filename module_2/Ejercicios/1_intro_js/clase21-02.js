/*Desarrollar un algoritmo que permita imprimir en la consola todos los números desde el 0 al 30. 
Con la excepción de que cuando un número sea divisible por 3, se imprima FIZZ en su lugar. 
Cuando sea divisible por 5, BUZZ. Y cuando sea divisible por ambos, FIZZBUZZ */

let count = 0;

while (count <= 30) {
  if (count % 3 === 0 && count % 5 === 0) {
    console.log("FIZZBUZZ");
  } else if (count % 5 === 0) {
    console.log("BUZZ");
  } else if (count % 3 === 0) {
    console.log("FIZZ");
  } else {
    console.log(count);
  }
  count++;
}

// Dado un array de palabras, imprimir CADA palabra.

let miArray = ["amor", "paz", "música", "armonía"]; 
let indice = 0;

while (indice < miArray.length) {
  console.log(miArray[indice]);
  indice++;
};

//Dado un array de palabras, imprimir la cantidad total de palabras

let miArray1 = ["milanesa", "lechuga", "tomate", "pepino"]; 

console.log(`La cantidad de palabras es: ${miArray1.length}`);

//Dado un array de 9 numeros, imprimir el valor booleano true para todos los números pares

let arrayNum = [1, 56, 12, 21, 98, 45, 24, 6, 10];

for (let i = 0; i < arrayNum.length; i++) {
  if (arrayNum[i] % 2 === 0) {
    console.log(true);
  } else {
    console.log(arrayNum[i]);
  }
}
// Dado un numero entero n, imprimir la suma de todos los valores desde 0 hasta n.
/* LÓGICA: tengo que lograr que el código haga la siguiente suma → 
1+2=3
3+3=6
6+4=10
10+5=15
15+6=21
21+7=28
28+8=36
36+9=45
45+10=55 */

let n = 10; 
let suma = 0; 

for (let i = 0; i <= n; i++) {
  suma = suma + i;
}
console.log(`La suma de todos los valores desde 0 hasta ${n} es: ${suma}`);

// Dado un array de 18 números, imprimir la suma de todos sus valores.
/*LÓGICA: Identica a la anterior solo que esta vez vamos a recorrer un array, resultado tiene que ser 171*/

let arrayNumbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
]; 
let suma1 = 0;

for (let i = 0; i < arrayNumbers.length; i++) {
  suma1 = suma1 + arrayNumbers[i];
}
console.log(`La suma de todos los valores del array suman: ${suma1}`);


