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
    for (let i = 0; i < collection.length; i++) {
        arrMovies[i] = collection[i].name;
    }
    return arrMovies;
}

console.log(getNames(movies));

/* - Desarrollar una función searchTitle() que reciba un string y la collection cómo parámetros y que retorne el objeto completo 
correspondiente al título de la película especificado */

const searchTitle = (title, collection) => {
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].name === title) {
            return collection[i];
        };
    };
};

console.log(searchTitle('Bulworth', movies));

/*- Desarrollar una funcion getRatingAverage() que reciba como parametro la collection de peliculas y que retorne el rating promedio */

const getRatingAverage = (collection) => {
    let suma = 0;

    for (let i = 0; i < collection.length; i++) {
        suma += collection[i].rating
    };

    return `El promedio del rating es de ${suma / collection.length}`;
};

console.log(getRatingAverage(movies));

/*- Desarrollar una funcion getByTag() que reciba como parametro la collection y un tag, y que retorne un array con la o las peliculas
que incluyen ese tag especificado*/

const getByTag = (collection, tag) => {
    let arrMovies = [];
    let index = 0;

    for (let i = 0; i < collection.length; i++) {
        for (let x = 0; x < collection[i].tags.length; x++) {
            if (collection[i].tags[x] === tag) {
                arrMovies[index] = (collection[i].name)
                index++;
            };
        };
    };
    //return arrMovies;
    return `Las peliculas con esa género son: ${arrMovies}`;
};

console.log(getByTag(movies, 'comedia'));