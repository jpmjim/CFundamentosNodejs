//26.-Benchmarking (console time y timeEnd)
//Aquí vamos a ver cómo hacer para descubrir de todas tus funciones cuando tienes un proceso largo, cuánto esta tardando en ejecutarse y poder detectar procesos que están tardándose más de lo que deberían.
console.time('todo');

let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += 1
};
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {
    suma2 += 1
};
console.timeEnd('bucle 2');

console.timeEnd('todo')

// console.time(*nombre*) → Nos encerrar un bloque de código y después evaluar cuánto tarda en ejecutarse.

// Y también puedes trabajar esto con procesos asíncronos.

console.time('bucle async');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => console.timeEnd('bucle async'));
function asincrona() {
    return new Promise( resolve => {
        setTimeout( () => {
            console.log('Terimina el proceso asíncrono');
            resolve();
        }, 0);
    });
};
