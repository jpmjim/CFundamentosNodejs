process.on('beforeExit', () => {
  console.log('el proceso va a terminar');
});

process.on('exit', () => {
  console.log('Jim, el proceso acabó');
  setTimeout(() => {
    console.log('esto no se va a ver nunca');
  }, 0);
});

setTimeout(() => {
  console.log('esto se va a ver');
}, 0);

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  setTimeout(() => {
    console.log('esto viene de las excepciones ');
  }, 0);
});

functionQuenoExiste();
