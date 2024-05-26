//funcion para utilizar los argumentos por consola

const processesArguments = (arguments) => {
    const processedArguments = {}

    const recortado = arguments.slice(2); //con esto pedimos que arranque desde el indice 2 (no lee el llamado a node y el archivo)
    // le pongo un simbolo para generar un patron en las propiedad, ejemplo un -- o ++

    recortado.forEach((param, index )=> { 
        if (param.startsWith('+')) {  // method de string que evalua si empieza con cierto dato en este caso el patrón definido
            const nombrePropiedad = param.slice(1);
            processedArguments[nombrePropiedad] = recortado[index + 1] // le pongo como propiedad ese argumento
        };
    });
    for (const property in processedArguments) { // recorremos el objeto que creamos para que reconozca el separador de palabras
        if(processedArguments[property].includes('_')) {
            processedArguments[property] = processedArguments[property].replaceAll('_', ' ');
//processedArguments[property].split('_').join(' '); el split reemplaza el guion bajo como separador en un array y el join reemplaza la coma por espacio.
        };
    };
    return processedArguments;
};

//funcion para ejecutar funciones
const main = () => {
    const processedArguments = processesArguments(process.argv) // es un array con todos los datos que le paso como arg en consola
    return console.log(processedArguments);
}

main()




