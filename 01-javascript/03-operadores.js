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