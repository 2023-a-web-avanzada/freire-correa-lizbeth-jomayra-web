//Variables mutables pueden ser re asignadas
var numeroUno = 1; //tiene problemas en el alcance de las variables
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;
numeroDos = true;

//Variables inmutables no se pueden re asignar
const configuracionArchivos = 'XML';
//vamos a preferir CONST> LET> VAR (mejor no usar )

//Tipos de variables (primitivas)
const numero = 1; //number
const sueldo = 1.2; //number
const texto = 'Lizbeth';//string
const apellidos = "Freire"//string
const casado = false; //boolean
const hijos= null; //object
const zapatos = undefined; //undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof casado);
console.log(typeof hijos);
console.log(typeof zapatos);

//truty y falsy
if(""){ //string vacio
    console.log('Es verdadero');
}else{
    console.log('Es falso'); // falsy
}

if("Liz"){ //string
    console.log('Es verdadero'); //truty
}else{
    console.log('Es falso');
}

if(-1){ //string
    console.log('Es verdadero'); //truty
}else{
    console.log('Es falso');
}
if(0){ //string
    console.log('Es verdadero');
}else{
    console.log('Es falso'); //falso
}
if(1){ //string
    console.log('Es verdadero'); //truty
}else{
    console.log('Es falso');
}

if(null){ //string
    console.log('Es verdadero');
}else{
    console.log('Es falso');//false
}
if(undefined){ //string
    console.log('Es verdadero');
}else{
    console.log('Es falso');//falso
}
const liz ={
    "nombre": "Liz",
    'apellido': 'Freire',
    edad: 24,
    hijos: null,
    casado : false,
    zapatos: undefined,
    ropa:{
        color: 'plomo',
        talla: 38,
    },
    mascotas:['ScoobyDoo'],
};
console.log(liz)

//Acceder a las propiedades
liz.nombre
liz.apellido
liz["nombre"]

//Modificar valores
liz.nombre = "Jomayra";
liz["nombre"] = "Liz"

//Crear atributos
liz.sueldo;
console.log(liz.sueldo);
liz.sueldo = 1.2;
console.log(liz.sueldo);
liz["gastos"] = 0.8;
console.log(liz.gastos);
console.log(liz);

//Eliminar propiedades
liz.nombre = undefined;
console.log(liz);
console.log(Object.keys(liz));
console.log(Object.values(liz));
delete liz.nombre;
console.log(Object.keys(liz));
console.log(liz); 