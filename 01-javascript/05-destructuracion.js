const liz = {
    nombre: "Liz",
};
const anthony = {
    nombre: "Anthony",
    apellido: "Freire",
};
const lizanthony = { //Crea una nueva referencia valor
    ...anthony, // 1 el orden es importante para propiedades que se repiten
    ...liz, //el ultimo reemplaza a los anteriores
};
console.log('lizanthony',lizanthony);

//Destructuracion de arreglos
const arregloUno = [1,2,3,4,5];
const arregloDos= [6,7,8,9,10];
const superArreglo = [
    ...arregloUno, //el orden importa
    ...arregloDos,
]; // [1,2,3,4,5,6,7,8,9,10];
console.log('superArreglo', superArreglo)