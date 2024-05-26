/**
1) Crear una variable nombre de tipo string y asígnarle un valor.
2) Definir una variable edad de tipo number y realizar operaciones aritméticas con ella.
3) Declarar un array de numeros de tipo number y almacenar elementos en él.
4) Crear un objeto "persona" de tipo any y luego asignarle propiedades con diferentes tipos de datos.
5) crear una función "sumar" que reciba dos números como parámetros y devuelva su suma (TIPAR los parámetros y lo que retorna)
 */
let names: string = "Flora";
let age: number = 37;

let sumando: number = age + 1;
let restar: number = age - 1;
let multiplicar: number = age * 2;
let dividir: number = age / 2;

console.log(sumando);

let array: number[] = [];

array.push(2);

console.log(array);

let persona: any = {
  name: "Florencia",
  age: 23,
  hijos: false,
  saludar: () => {
    return "Soy " + persona.name;
  },
};

console.log(persona.saludar());

// function sumar(num1: number, num2: number): number {
//   let sumando = num1 + num2;
//   return sumando;
// }

const sumar = (num1: number, num2: number): number => {
    let sumando = num1 + num2;
    return sumando;
  }
console.log(sumar(2, 5));

