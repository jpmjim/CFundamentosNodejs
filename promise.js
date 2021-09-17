function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola '+ nombre );
      resolve(nombre);
    }, 1500);
  });
};

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log('Bla bla bla bla...');
      // resolve(nombre);
      reject('error code')
    }, 1000);
  })
};

function adios (nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios '+ nombre);
      resolve();
    }, 1000);
  });
};

// ---+
console.log('Inciando el proceso..');
hola('Jimmy')
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log('Terminado el proceso');
  })
  .catch(error => {
    console.error('Habido un error:');
    console.error(error);
  })