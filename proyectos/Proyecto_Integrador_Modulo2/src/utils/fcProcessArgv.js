const processesArguments = (arguments) => {
  const processedArguments = {};

  const recortado = arguments.slice(2);

  recortado.forEach((param, index) => {
    if (param.startsWith("+")) {
      const nombrePropiedad = param.slice(1);
      processedArguments[nombrePropiedad] = recortado[index + 1];
    }
  });
  for (const property in processedArguments) {
    if (processedArguments[property].includes("_")) {
      processedArguments[property] = processedArguments[property].replaceAll( "_", " " );
    }
  }
  return processedArguments;
};

module.exports = processesArguments;

