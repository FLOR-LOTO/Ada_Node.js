/* Hacer una funcion que reciba un objeto y retorne un array con todos los valores de sus propiedades como elementos */

const comidas = {
    desayuno: 'tostadas con queso y mermelada',
    almuerzo: 'pollo con arroz',
    merienda: 'yogurt con cereales y frutas',
    cena: 'ravioles con salsa roja'
};

const functionObj = (obj) => {
    let arrObj = [];
    let count = 0;

    for (const value in comidas) {
        let i = count++;
        arrObj[i] = comidas[value];
    };
    return arrObj;
};

console.log(functionObj(comidas));

/* Desarrollar una función range() que tome como parámetros dos valores tipo number, start y end, y que retorne un array 
con todos los numeros enteros desde start hasta e incluyendo a end */

/* Además, esta funcion tiene un tercer parámetro opcional de tipo number, step, que modifica la cantidad en la que se 
incrementa el contador interno. Si ningun step es indicado, los elementos del array se incrementarán de uno en uno, sino, 
según el step indicado:*/

const range = (start, end, step = 1) => {
    let arrNumbers = [];
    let index = 0;

    for (let i = start; i <= end; i = i + step) {
        arrNumbers[index] = i;
        index++;
    };
    return arrNumbers;
};

console.log(range(10, 20, 2));