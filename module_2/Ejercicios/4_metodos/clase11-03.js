/* Hacer una funcion que reciba un objeto y retorne un array con todos los valores de sus propiedades como elementos */

const comidas = {
    desayuno: 'tostadas con queso y mermelada',
    almuerzo: 'pollo con arroz',
    merienda: 'yogurt con cereales y frutas',
    cena: 'ravioles con salsa roja'
};

const functionObj = (obj) => {
    let arrObj = [];

    for (const value in comidas) {
        arrObj.push(comidas[value]);
    };
    return arrObj;
};

console.log(functionObj(comidas));

/* Desarrollar una función range() que tome como parámetros dos valores tipo number, start y end, y que retorne un array 
con todos los numeros enteros desde start hasta e incluyendo a end */

/* Además, esta funcion tiene un tercer parámetro opcional de tipo number, step, que modifica la cantidad en la que se 
incrementa el contador interno. Si ningun step es indicado, los elementos del array se incrementarán de uno en uno, sino, 
según el step indicado:*/

// const range = (start, end, step = 1) => {
//     let arrNumbers = [];

//     for (let i = start; i <= end; i = i + step) {
//         arrNumbers.push(i);
//     };
//     return arrNumbers;
// };

const range = (start, end, step = 1) => {
    let arrNumbers = [];
    let i = start

    while (i <= end) {
        arrNumbers.push(i);
        i += step;
    };
    return arrNumbers;
};

console.log(range(10, 20, 3));

// Dada la siguiente collection, realizar las siguientes operaciones:

const movies = [
    {
        name: 'El día de la marmota',
        rating: 9,
        tags: ['drama', 'comedia']
    },
    {
        name: 'Un hombre con suerte',
        rating: 7,
        tags: ['drama', 'crítica social']
    },
    {
        name: 'Bulworth',
        rating: 8,
        tags: ['comedia', 'crítica social']
    },
    {
        name: 'Wallstrit',
        rating: 7,
        tags: ['drama', 'crimen']
    },
    {
        name: 'Apocalypse now',
        rating: 9,
        tags: ['guerra', 'drama']
    },
    {
        name: 'The deer hunter',
        rating: 10,
        tags: ['guerra', 'drama']
    },
];

/* - Desarrollar una funcion getNames() que reciba como parámetro la collection y que retorne un array con todos los nombres 
de las películas */

const getNames = (collection) => {
    let arrMovies = [];

    collection.forEach((el) => {
        arrMovies.push(el.name);
    });
    return arrMovies;
};

console.log(getNames(movies));

/* - Desarrollar una función searchTitle() que reciba un string y la collection cómo parámetros y que retorne el objeto completo 
correspondiente al título de la película especificado */

const searchTitle = (title, collection) => {
    // for (let i = 0; i < collection.length; i++) {
    //     if (collection[i].name === title) {
    //         return collection[i];
    //     };
    // };
    collection.forEach((element) => {
        if (element.name === title) {
            return console.log(element);
        }
    });
};

console.log(searchTitle('Bulworth', movies));