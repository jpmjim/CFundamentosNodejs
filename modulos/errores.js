function serompe() {
  return 3 + z;
}

try {
  serompe()
} catch (error) {
  console.error('Vaya, algo se ha roto...');
  console.error(error.message);
};

//en funcion asincrona
//Para que esto no pase, tenemos que hacer el Try/catch adentro de función.
function seRompeAsync(cb) {
  setTimeout(() => {
      try {
          return 3 + z
      } catch (error) {
          console.error('Error en mi funcion asincrona')
          cb(error);
      };
  });
};

try {
  seRompeAsync((error) => console.error(error.message))
} catch (error) {
  console.error('Vaya, algo se ha roto...')
  console.error(error.message)
}