//01-variables.ts
// npm install -g typescript
//tsc
var nombre = 'Liz'; //primivito
var nombre2 = 'Liz'; //Clase String
// tsc 01-variables.ts --target es3
//tsc 01-variables-ts --target es6
//nombre =1;
var edad = 24;
var casado = false;
var fecha = new Date();
var sueldo;
sueldo = 12.4;
//Duck Typing
var apellido = 'Freire'; //String ->
// apellido = 1; //Error, no es un string
apellido = 'Correa';
apellido.toUpperCase();
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
var edadMultiple = '2'; //2/new Date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 2222;
var numeroUnico = 1; // para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow(edadMultiple, 2);
