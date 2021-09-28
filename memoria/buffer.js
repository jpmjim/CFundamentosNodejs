//Buffers son datos en binario, datos crudos que se mueven de un lado para otro. 
// Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera temporal.
// Es la forma mas cruda en la que se pueden almacenar los datos. (Se guardan en bytes y no se especifica el tipo de dato)
// En la consola, los datos se muestran en formato hexadecimal.

//let buffer = Buffer.alloc(4);
//array con datos
//let buffer = Buffer.from([1, 2, 3]);
let buffer = Buffer.from('Hola');
console.log(buffer);
console.log(buffer.toString());

//abecedario
let abc = Buffer.alloc(26);
console.log(abc);
for (let i = 0; i < 26; i++){
  abc[i] = i + 97;
}
console.log(abc);
console.log(abc.toString());

