# Curso de Fundamentos de Node.js Curso de Fundamentos de Node.js

1.-Node: orígenes y filosofía
Es la formas mas rapidas de desarrollar ejecutar en servidor de forma muy escalable.
Es un entorno de ejecución de  JS fuera den navegador se crea en 2009 oriendato a servidores, servidores de manera asincrona, Monohila todas sus entradas y salidas son asincronas, un proceso por cada núcleo del procesador. Todo funciona a base a módulos.
Motor V8 entorno de ejecución de JS creado por Google y libre desde 2008, escrito en C++, convierte JS en código máquina en lugar de interpretarlo  en tiempo real.
Módulos todo lo que no sea sintaxis  de programación, son módulos.
muchos módulos vienen  por defecto  en el paquete de node, podemos crear nuestros propios módulos.
Orientado a eventos, hay un bucle de eventos  que se ejecuta constantemente, puedes orientar  tu código  de forma  reactiva.

3.-EventLoop: Asincronía por diseño
un proceso con un buble que gestiona, de forma asíncrona, todos los eventos  de tu aplicación

Event Queue: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

Event Loop: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

Thread Pool: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop vera si lo pasa a Event Queue o no.

4.-Monohilo: implicaciones en diseño y seguridad
Si no se manejan bien los errores y uno truena, ya no continua con los procesos posteriores
Debes estar pendiente de todo el código
console.log('Hola mundo');

// SetInterval me permtie ejecutar una función cada n cantidad de tiempo, por lo que quiere que recibe como argumentos: Función a ejecutarse, intervalo de tiempo.
//A tener  en cuenta esta función no se detiene y continúa su ejecución ad infinitum.
// Detener ejecución con ctrl+ alt + m en Run Code, o con Ctrl +c en la terminal.
setInterval(function(){console.log('Voy a contar hasta infinito, detén mi ejecución o consumo tu memoria'),1000}); // Esta instrucción es asíncrona, por lo que se ejecuta en n momento.


let i = 0;
setInterval(function() {
    console.log(i);
    i++;

// Al ser monohilo el peligro recae en que si el código se ejectua y no tenemos cuidado el no asignar una variable de manera correcta me puede arrojar un error.
//Hay que escuchar los errores, es muy imporante de todo lo que pase en el código. Comprobar funciones y revisar lo que posiblmente puede fallar.
//Es clave estar pendiente de todos los errores que pueda cortar la ejecución, lo que se corta corta todo.
// Todo lo que sea asíncono y lo pueda llevar a ello, pues llevarlo, y todo lo que no, revisar que no corte el programa.

    // if (i === 5) {
    //     console.log('forzamos error');
    //     var a = 3 + z;
    // }
}, 1000);


console.log('Segunda instrucción');

5.-Variables de entorno
Las variables de entorno son una forma de llamar información de afuera a nuestro software, sirve para definir parámetros sencillos de configuración de los programas de modo que puedan ejecutarse en diferentes ambiente sin necesidad de modificar el código fuente de un script.

El objeto process nos da información sobre el procesos que está ejecutando este script.
La propiedad env es la que nos da acceso a las variables de entorno de manera sencilla.
//Veremos como desde cualquier sitio fuera del entorno podemos meter información adentro.

let ejemplo ="Alejandro-sin" //Esta variable la declaré aquí y puedo llamarla aquí.

//¿Qué ocurre cuando quiero llamar un valor que no va dentro del software, si quiereo llamar una API, o que necesito una clave, o un token?

//+ El código no  debería guardar este tipo de valores credenciales y por esto existen las variables de entorno. Si grabasemos estos datos estaríamos obligados a cambiar el código del programa cada vez que se ejecutan en lugares diferentes, dificultando el despliegue.

//+ Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera (process.env.VARIABLE ) se ponen en mayúscula y se separan mediante guion bajo en vez de espacio.


let nombre = process.env.NOMBRE || 'Sin nombre'; 
let web = process.env.MI_WEB || 'no tengo web';
var apiKey = process.env.APIKEY || 'HF33o9oERVERVEEEEs';

console.log('Hola '+ nombre);
console.log('Mi web es '+ web);

// Me retornara { Hola Sin nombre, mi web es notengo web} ya que tiene  la expresión OR || me asigna estas variables por defecto

// Para que las variables de entorno me tomen valores puedo hacer varias cosas:

//+  Desde la terminal asignarle las variables antes del codigo:

< NOMBRE:"Alejandro" MI_WEB"123QWERTY" APIKEY=10937472 node conceptos/entorno.js >

6.-Herramientas para ser más felices: Nodemon y PM2
Desarrollo
Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

sudo npm install -g nodemon

    Nodemon

Producción

sudo npm install -g pm2

PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

    Voy a poner monitorizar el código para saber si algo se rompe.
    Me permite ver dashboards de mi código, puedo ver que está corriendo.
    Puedo ver el rendimiento de mi cpu
    Con: pm2 stop + id —> me detiene el proceso que está en ejecución con ese ID.

7.-Callback
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo

8.-Callback Hell: refactorizar o sufrir
Los callback Hell se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.

Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.

9.-Promesas
Las promesas vienen de los callbacks, pero las promesas lo que hacen es dar un estado.
Las promesas son una “clase” global que podemos llamar de donde sea, nuestras funciones devuelvan promesas
Promise(), la diferenia entre promises y callbacks es la capacidad de anidar promesas. Formando una cadena de promesas.
Es muy útil para visualizar código asíncrono de manera síncrona.

10.-Async/await
Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.
Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop.

12.-File system
El file system provee una API para interactuar con el sistema de archivos cerca del estándar POSIX.
POSIX es el estándar para interfaces de comando y shell, las siglas las significan: “Interfaz de sistema operativo portátil” la X de POSIX es por UNIX.

El file system nos permite acceder archivo del sistema, leer, modificar., escribirlos, es muy útil para precompiladores, para lo que requiera hacer grabados de disco, o bases de datos en node requieren un uso intensivo de Node.Todo lo que hagamos con modulos por buenas prácticas son asincronos, pero tienen una version sincrona no recomendada pues pordría bloquear el event loop con más facilidad.

