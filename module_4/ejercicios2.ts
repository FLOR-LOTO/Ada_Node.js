// ----------- Sólamente modificar los tipos ----------- //

/*

Ejercicio:

    Dados los datos, definir la interfaz User y usarlo correctamente. 

*/

interface Users {}

const users: unknown[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
    },
];

function logPerson(user: unknown) {
    console.log( - ${users.name}, ${user.age});
}
Definir una interfaz para un producto:

Crea una interfaz llamada Producto que represente un producto con las siguientes propiedades:

id: número (identificador único)
nombre: cadena de texto
precio: número
stock: número (opcional)
Crear instancias de productos:

Utiliza la interfaz Producto para crear dos instancias de productos

Definir una función para calcular el IVA:

Crea una función llamada calcularIVA que tome un producto como parámetro y devuelva el precio del producto con el IVA añadido (21%).

Utilizar la función para calcular el IVA de los productos