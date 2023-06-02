/*
* Una funcion que acepte como parametro una variable
* del "path" del archivo y otra variable con el "contenidoArchivo".
* Utilizar el modulo 'fs' para leer el archivo en ese "path" y anadir el
* "contenidoArchivo" a ese archivo.
* */
const fs = require('fs');
//Una funcion que acepte como parametro una variable

function leerArchivo(path){
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                './06-ejemplo.txt',
                'utf-8',
                (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
                    if(errorLecturaPrimerArchivo){
                        console.error(errorLecturaPrimerArchivo);
                        reject('Error leyendo primer archivo')
                    }else{
                        resolve(contenidoPrimerArchivo)
                    }
                }
            )
        }
    )
}

function escribirArchivo(path, nuevoContenido){
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                nuevoContenido,
                (errorEscritura) =>{
                    if(errorEscritura){
                        console.error(errorEscritura);
                        reject('Error escribiendo nuevo archivo');
                    }else{
                        resolve('Completado');
                    }
                }
            )
        }
    )

}

function ejercicio(
    pathArchivoUno,
    pathArchivoDos,
    pathArchivoNuevo){
        let contenidoTotal = '';
        leerArchivo(pathArchivoUno)
            .then(
                (contenidoPrimerArchivo) => {
                    contenidoTotal = contenidoTotal+contenidoPrimerArchivo;
                    return leerArchivo(pathArchivoUno);
                }
            )
            .then(
                (contenidoSegundoArchivo) => {
                    contenidoTotal = contenidoTotal+contenidoSegundoArchivo;
                    return escribirArchivo(pathArchivoNuevo, contenidoTotal);
                }
            )
            .catch(error => console.error(error))
}
