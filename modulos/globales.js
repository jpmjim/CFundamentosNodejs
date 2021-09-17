//Globals
//=======
//Los modulos globales son módulos del core.
// Una de las funciones muy usadas en Node es setInterval, clearInterval, para evaluar en n tiempo si el servidor está caído o no.
// TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas

let i = 0;
let intervalo = setInterval(function () {
  console.log('Hola');
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
}, 1000);

setImmediate(function() {
  console.log('Hola');
});

console.log(__dirname); //directorio donde nos encontramos
console.log(__filename); //archivo dentro del directorio

//crear varible global
global.miVariable = 'elValor';
console.log(miVariable);