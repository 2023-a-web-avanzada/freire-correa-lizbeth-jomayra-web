const fs = require('fs'); //file system importando una libreria
                            // Importar modulo fs

console.log('PRIMERO');
fs.readFile(
    './06-ejemplo.txt', //Nombre o path del archivo
    'utf-8', // codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        console.log('SEGUNDO')
        if(errorLecturaPrimerArchivo){
            console.error(errorLecturaPrimerArchivo);
            throw new Error('Error leyendo primer archivo');

        }else{
            fs.readFile(
                './01-variables.js', //Nombre o path del archivo
                'utf-8', //codificacion
                (errorLecturaSegundoArchivo, contenidoSegundoArchivo)=>{
                if(errorLecturaSegundoArchivo){
                    console.error(errorLecturaSegundoArchivo);
                    throw new Error('Error leyendo segundo archivo');
                }else{
                    fs.writeFile(
                        './06-nuevo-archivo.txt',
                        contenidoPrimerArchivo + contenidoSegundoArchivo,
                        (errorTercerArchivo)=>{
                            if(errorTercerArchivo){
                                console.error(errorTercerArchivo);
                                throw new Error('Error tercer archivo');
                            }else{
                                console.log('CREADO')
                            }
                        }

                    );
                }
                }
            )
        }
    }
);
console.log('TERCERO');

//1) Leer archivo: 06-ejemplo.txt,
//luego imprimir en consola
//2) Despues del paso 1, Leer archivo:01-variables.js
//luego imprimir en consola
//3)Crear un nuevo archivo llamado 06-nuevo-ejemplo.txt,
// con el contenido de los otros dos archivos

