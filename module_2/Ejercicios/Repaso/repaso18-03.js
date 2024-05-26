/* Buscar objetos por propiedad: Hacer una función que tome 3 parametros:  una collection, una propiedad y el valor a buscar dentro de esa propiedad. Debe devolver un array con los objetos que tengan esa propiedad igual al valor indicado por parametro*/
let characters =  [
    {
       id: 1,
       name: 'Rick Sanchez',
       status: 'Alive',
       species: 'Human',
       gender: 'Male'
    },
    {
       id: 2,
       name: 'Morty Smith',
       status: 'Alive',
       species: 'Human',
       gender: 'Male'
    },
    {
       id: 3,
       name: 'Summer Smith',
       status: 'Alive',
       species: 'Human',
       gender: 'Female'
    },
    {
       id: 4,
       name: 'Beth Smith',
       status: 'Alive',
       species: 'Human',
       gender: 'Female'
    },
    {
       id: 5,
       name: 'Jerry Smith',
       status: 'Alive',
       species: 'Human',
       gender: 'Male'
    },
 ];

 //CON forEach:

 const searchObj = (collection, property, value) => {
    let objectsMatch = [];

    collection.forEach(char => {
        return (char[property] === value)  ? objectsMatch.push(char) : null
    });
    return objectsMatch;
 };

 console.log(searchObj(characters, 'gender', 'Female'));

 //CON reduce:

 const searchObj2 = (collection, property, value) => {
    return collection.reduce((ac, char) => {
        if(char[property] === value) {
           ac.push(char)
        };
        return ac;
    }, []);
 };

 console.log(searchObj2(characters, 'gender', 'Male'));

/*Buscar elemento: Hacer una función que tome un array y un valor por parametro, y devuelva true si el valor está presente en el array, false caso contrario.*/

const arrElements = ['mate', 'bombilla', 'yerba', 'azucar', 'edulcorante']

const searchEl = (array, value) => {
    return array.includes(value)
}

console.log(searchEl(arrElements, 'cafe'));
console.log(searchEl(arrElements, 'yerba'));
console.log(searchEl(arrElements, 'azucar'));