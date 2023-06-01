const arreglo = [ {
    id: 1, nombre: 'Adrian', nota: 5 },
    { id: 2, nombre: 'Vicente', nota: 8 },
    { id: 3, nombre: 'Carolina', nota: 14 },
    { id: 4, nombre: 'Wendy', nota: 16 },
    { id: 5, nombre: 'Andrea', nota: 19 },
    { id: 6, nombre: 'Pamela', nota: 19 },
    { id: 7, nombre: 'Cristian', nota: 20 },
    { id: 8, nombre: 'Daniel', nota: 19 },
    { id: 9, nombre: 'Lilly', nota: 14 },
    { id: 10, nombre: 'Ramiro', nota: 12 } ];

//operadores son funciones inspirados en la programacion habitual
//Funcion como parametro
//FIND
//Enviamos una expresion -> TRUTY FALSY
//Devuelve el primero que cumpla esa condicion
const respuestaFind = arreglo
.find(
    function (valorActual, indiceAcual,arregloCompleto){
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceAcual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nota < 5; // expresion (<=>
    }
);
console.log('respuestaFind', respuestaFind);

// FINDEX
// Enviamos una expresion -> truty falsy
// devolver el indice del primer elemento que cumpla esa condicion

const respuestaFindIndex = arreglo
.find(
    function (valorActual){
        return valorActual.nota < 5;
    }
    );
console.log('respuestaFindIndex', respuestaFindIndex);

//FOREACH
// Iterar el arreglo
const respuestaForEach = arreglo
.forEach(
    function (valorActual){
        console.log(valorActual)
    }
);

console.log('respuestaForEach', respuestaForEach);

//MAP (modificar o iterar en un nuevo arreglo
// enviamos los datos del nuevo arreglo
// devuelve el nuevo arreglo

const respuestaMap = arreglo
.map(
    function (valorActual){
        const nuevaNota = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota + 1,
            estaAprobado: (valorActual.nota+1)>14,
            registrado: true,
        }
        return nuevaNota
    }

);
console.log('respuestaMap', respuestaMap)
console.log('arreglo', arreglo);

//FILTER (filtra arreglo)
// enviamos expresion
// devuelve los elementos que cumplen esa condicion en un nuevo arreglo

const respuestaFilter = arreglo
    .filter(
        function (valorActual){

                return valorActual.nota>10;


        }

    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//SOME -> Expresion
//devuelve boolean
// hay alguna x que cumpla esta condicion?
// or
const  respuestaSome = arreglo
.some(
    function (valorActual){
        return valorActual.nota>9;
    }
);
console.log('respuestaSome', respuestaSome);

// Every -> expresion
// devuelve boolean
// Todos los X cumplen esta condicion?
// AND

const respuestaEvery = arreglo
.every(
    function (valorActual){
        return valorActual.nota <= 20;
    }
);
console.log('respuestaEvery', respuestaEvery); // true

//REDUCE           izq -> Der
//REDUCE RIGHT     der -> izq
// 1) [1,2,3,4,5,6,7,8,3,1,2]
// 2) 0 -> variable (acumulador)
// 3) devolvemos la operacion
// Ej: Variable inicial en 100
//1.- 100 - 1 = 99
//2.- 99 - 2 = 97
//3.- 97 - 5 = 92
//..
//EJ: variable inicial en 0
// 1_ 0 + 1 = 1
// 2_ 1 + 2 = 3
// 3_ 3 + 5 = 8

const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado, valorActual, indice, arreglo){
            return valorActual.nota + valorActual;
        },
        0 //acumulador
    );
console.log('respuestaReduce', respuestaReduce); //True
console.log(respuestaReduce/ arreglo.lenght); //true

// Concatenar operaciones
arreglo.filter((a)=> a.nota < 14)
    .map((a) => a.nota + 1)
    .some((a) => a < 14);

