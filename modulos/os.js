const os = require('os'); //llamando al modulo
console.log(os.arch());//arquitectura del sistema 
console.log(os.platform());//plataforma del corriendo
console.log(os.cpus().length);//nucleos que tenemos podemos levantar 4 procesos
console.log(os.constants);//señales del sistema

//Tamaño de memoria
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE};
function mb(bytes) { return kb(bytes) / SIZE};
function gb(bytes) { return mb(bytes) / SIZE};

console.log(os.freemem());//memoria libre que tenemos en bytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));//total de la memoria

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());






