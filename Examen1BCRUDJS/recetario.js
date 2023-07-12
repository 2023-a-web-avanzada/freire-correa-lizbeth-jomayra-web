import fs from "fs"
import inquirer from "inquirer";
class Receta {
    constructor(id, nombre, porciones, tiempoDePreparacion, listaIngredientes ) {
        this.id = id;
        this.nombre= nombre;
        this.porciones = porciones;
        this.tiempoDePreparacion= tiempoDePreparacion;
        this.listaIngredientes = listaIngredientes;
    }
    //Create
    async createReceta(){
        const receta1 = new Receta();
        let promesareceta;
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Ingrese el id'
                },
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre de la receta'
                },
                {
                    type: 'input',
                    name: 'porciones',
                    message: 'Ingrese para cuantas personas es la receta: '
                },
                {
                    type: 'input',
                    name: 'tiempoDePreparacion',
                    message: 'Ingrese el tiempo de preparacion: '
                },
            ]).then(a=> {
                promesareceta = new Promise(
                    respuesta => (
                        receta1.id = a.id,
                            receta1.nombre = a.nombre,
                            receta1.porciones = a.porciones,
                            receta1.tiempoDePreparacion = a.tiempoDePreparacion,
                            receta1.listaIngredientes = [],
                            respuesta(receta1)
                    )
                );
            });
        return promesareceta
    }
    async actualizarReceta(listaRecetas){
        let promesaReceta;
        let indexReceta;
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'recetaNombre',
                    message: 'Ingrese el nombre de la receta'
                },
                {
                    type: 'rawlist',
                    name: 'opcionesCambiar',
                    message: '¿Qué desea actualizar?',
                    choices: ['nombre', 'porciones', 'tiempoPreparacion']
                },
                {
                    type: 'input',
                    name: 'nuevoDato',
                    message: 'Ingrese el nuevo dato: '
                }
            ]).then(a=>{
                promesaReceta = new Promise(
                    respuesta => (
                        listaRecetas.forEach(
                            valorActual => {
                                if(valorActual.nombre === a.recetaNombre){
                                    indexReceta = listaRecetas.indexOf(valorActual)
                                    switch (a.opcionesCambiar) {
                                        case "nombre":
                                            listaRecetas[indexReceta].nombre = a.nuevoDato
                                            break
                                        case "porciones":
                                            listaRecetas[indexReceta].porciones = a.nuevoDato
                                            break
                                        case "tiempoPreparacion":
                                            listaRecetas[indexReceta].tiempoDePreparacion = a.nuevoDato
                                            break
                                    }
                                }
                            }
                        ),
                            respuesta(listaRecetas)
                    )
                );
            });
        return promesaReceta
    }

    async eliminarReceta(listaRecetas){
        let promesaReceta;
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Ingrese el id de la receta para eliminar'
                },
            ]).then(respuestaAsincrona=>{
                promesaReceta = new Promise(
                    respuesta =>(
                        respuesta(listaRecetas.filter(item => item.id!== respuestaAsincrona.id))
                    )
                );
            });
        return promesaReceta
    }
}
class Ingrediente {
    constructor(id, nombre, cantidad, esReemplazable, alGusto) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.esReemplazable = esReemplazable;
        this.alGusto = alGusto;
    }

    async indexReceta(listaRecetas){
        var promesaIndexReceta;
        var indiceReceta;
        await inquirer.prompt([
            {
                type: 'input',
                name: 'opcionesReceta',
                message: 'Ingrese el nombre de la receta',
            },
        ]).then(respuestaAsincrona =>{
            promesaIndexReceta = new Promise(
                respuesta => (
                    listaRecetas.forEach(
                        valorActual => {
                            if(valorActual.nombre === respuestaAsincrona.opcionesReceta){
                                indiceReceta = listaRecetas.indexOf(valorActual)
                            }
                        }
                    ),
                        respuesta(indiceReceta)
                )
            );
        });
        return promesaIndexReceta
    }
    async agregarIngrediente(){
        const nuevoIngrediente = new Ingrediente();
        let promesaIngrediente;
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Ingrese el id del ingrediente'
                },
                {
                    type: 'input',
                    name: 'nombre',
                    message: 'Ingrese el nombre'
                },
                {
                    type: 'input',
                    name: 'cantidad',
                    message: 'Ingrese la cantidad'
                },
                {
                    type: 'input',
                    name: 'esReemplazable',
                    message: 'Este ingrediente es reemplazable por otro?',
                    choices:['Si','No']
                },
                {
                    type: 'input',
                    name: 'alGusto',
                    message: 'Este ingrediente es al gusto?',
                    choices:['Si','No']
                }
            ]).then(respuestaAsincrona => {
                promesaIngrediente = new Promise(
                    respuesta => (
                        nuevoIngrediente.id = respuestaAsincrona.id,
                            nuevoIngrediente.nombre = respuestaAsincrona.nombre,
                            nuevoIngrediente.cantidad = parseFloat(respuestaAsincrona.cantidad),
                            nuevoIngrediente.esReemplazable = (respuestaAsincrona.esReemplazable === 'Si'),
                            nuevoIngrediente.alGusto = (respuestaAsincrona.alGusto === 'Si'),
                            respuesta(nuevoIngrediente)
                    )
                );
            });
        return promesaIngrediente
    }
    async actualizarIngrediente(listaRecetas, indexReceta){
        let promesaReceta;
        let indexIngrediente;
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'ingredienteCambiar',
                    message: 'Ingrese el nombre del ingrediente'
                },
                {
                    type: 'rawlist',
                    name: 'cambiarDato',
                    message: '¿Qué desea editar?',
                    choices: ['nombre', 'cantidad', 'esReemplazable', 'alGusto']
                },
                {
                    type: 'input',
                    name: 'nuevosDatos',
                    message: 'Ingrese la actualización'
                },
            ]).then(respuestaAsincrona=>{
                promesaReceta = new Promise(
                    respuesta => (
                        listaRecetas[indexReceta].listaIngredientes
                            .forEach(
                                ingrediente => {
                                    if(ingrediente.nombre == respuestaAsincrona.ingredienteCambiar){
                                        indexIngrediente = listaRecetas[indexReceta].listaIngredientes.indexOf(ingrediente)
                                        switch (respuestaAsincrona.cambiarDato) {
                                            case "nombre":
                                                listaRecetas[indexReceta].listaIngredientes[indexIngrediente].nombre = respuestaAsincrona.nuevosDatos
                                                break
                                            case 'cantidad':
                                                listaRecetas[indexReceta].listaIngredientes[indexIngrediente].cantidad = respuestaAsincrona.nuevosDatos
                                                break
                                            case 'esReemplazable':
                                                listaRecetas[indexReceta].listaIngredientes[indexIngrediente].esReemplazable = respuestaAsincrona.nuevosDatos
                                                break
                                            case 'alGusto':
                                                listaRecetas[indexReceta].listaIngredientes[indexIngrediente].alGusto = respuestaAsincrona.nuevosDatos
                                                break
                                        }
                                    }
                                }

                            ),
                            respuesta(listaRecetas)
                    )
                );
            });
        return promesaReceta
    }
    async eliminarIngrediente(listaRecetas, indexReceta){
        let promesaReceta;
        let listIngredientes = listaRecetas[indexReceta].listaIngredientes;
        await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'Ingrese el id del ingrediente que quiere eliminar: '
                },

            ]).then(respuestaAsincrona =>{
                promesaReceta = new Promise(
                    respuesta => (
                        listaRecetas[indexReceta].listaIngredientes = listIngredientes.filter(item => item.id !== respuestaAsincrona.id),
                            respuesta(listaRecetas)
                    )
                );
            });
        return promesaReceta
    }
}
async function main(){
    try{
        const receta = new Receta()
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: '(---Recetario by Lizbeth Freire)\n' + 'Elige una opción:',
                    choices: ['Agregar', 'Listar Recetas', 'Actualizar', 'Eliminar', 'Ingredientes', 'Salir']
                }
            ]).then((answer) =>{
                switch (answer.opcion) {
                    case 'Agregar':
                        receta.createReceta().then(
                            (datosReceta) => {
                                readWriteFile('./Recetas.txt', datosReceta)
                                main()
                            }
                        )
                        break
                    case 'Listar Recetas':
                        readFile('./Recetas.txt').then(
                            datosReceta => {
                                console.log(JSON.parse(datosReceta))
                                main()
                            }
                        )
                        break
                    case 'Actualizar':
                        readFile('./Recetas.txt').then(
                            datosReceta => {
                                const listaRecetas = JSON.parse(datosReceta)
                                receta.actualizarReceta(listaRecetas).then(
                                    nuevosDatos => {
                                        writeFile('./Recetas.txt', JSON.stringify(nuevosDatos))
                                        console.log('Actualización exitosa')
                                        main()
                                    }
                                )
                            }
                        )
                        break
                    case 'Eliminar':
                        readFile('./Recetas.txt').then(
                            datosReceta =>{
                                const listaRecetas = JSON.parse(datosReceta)
                                receta.eliminarReceta(listaRecetas).then(
                                    nuevosDatos =>{
                                        writeFile('./Recetas.txt', JSON.stringify(nuevosDatos))
                                        console.log('Los datos fueron eliminados')
                                        main()
                                    }
                                )
                            }
                        )
                        break
                    case 'Ingredientes':
                        var ingredienteN = new Ingrediente()
                        var indexReceta;
                        readFile('./Recetas.txt').then(
                            datosReceta =>{
                                const listaRecetas = JSON.parse(datosReceta)
                                ingredienteN.indexReceta(listaRecetas).then(
                                    indice => {
                                        indexReceta = parseInt(indice)
                                        mainIngrediente();
                                    }
                                )
                            }
                        )
                    async function mainIngrediente(){
                        try{
                            ingredienteN = new Ingrediente()
                            var recetas = readFile('./Recetas.txt').then(
                                datosReceta => {
                                    recetas = JSON.parse(datosReceta)
                                }
                            )
                            const respuestaOpciones = await inquirer
                                .prompt([
                                    {
                                        type: 'rawlist',
                                        name: 'opcion',
                                        message: 'Ingredientes\n'+ 'Elige una opción: ',
                                        choices: ['Agregar','Listar', 'Actualizar','Borrar','Salir']
                                    }
                                ]).then((respuestaP)=>{
                                    switch (respuestaP.opcion) {
                                        case 'Agregar':
                                            ingredienteN.agregarIngrediente().then(
                                                (datosIngredientes) =>{
                                                    recetas[indexReceta].listaIngredientes.push(datosIngredientes)
                                                    writeFile('./Recetas.txt', JSON.stringify(recetas))
                                                    mainIngrediente()
                                                }
                                            )
                                            break
                                        case 'Listar':
                                            console.log(recetas[indexReceta].listaIngredientes)
                                            mainIngrediente()
                                            break
                                        case 'Actualizar':
                                            ingredienteN.actualizarIngrediente(recetas, indexReceta).then(
                                                nuevosDatos => {
                                                    writeFile('./Recetas.txt', JSON.stringify(nuevosDatos))
                                                    console.log('Actualización exitosa')
                                                    mainIngrediente()
                                                }
                                            )
                                            break
                                        case 'Borrar':
                                            ingredienteN.eliminarIngrediente(recetas, indexReceta).then(
                                                nuevosDatos => {
                                                    writeFile('./Recetas.txt', JSON.stringify(nuevosDatos))
                                                    console.log('Se ha eliminado correctamente')
                                                    mainIngrediente()
                                                }
                                            )
                                            break
                                        case 'Salir':
                                            main()
                                            break

                                    }
                                });

                        }catch(e){
                            console.error(e);
                        }
                    }
                        break
                    case 'Salir':
                        console.log('Gracias')
                        break
                }
            });
    }catch (e){
        console.error(e);
    }

}
main();

async function readFile(path){
    let myFirstPromise = await new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (errorReadFirstFile, content) => {
                    if(errorReadFirstFile){
                        reject('Error en lectura de archivo');
                    }else{
                        resolve(content);
                    }
                }
            );
        }
    );
    return myFirstPromise
}
async function writeFile(path, content){
    const myPromise = await new Promise(
        (resolve, reject)=> {
            fs.writeFile(
                path,
                content,
                (errorWrite) => {//callback
                    if (errorWrite) {
                        reject('Error en la escritura de archivo');
                    } else {
                        resolve(content);
                    }
                }
            );
        }
    );
    return myPromise
}
async function readWriteFile(path, newContent){
    try {
        let answerContentFileOriginal = await readFile(path); //espera una respuesta
        if(answerContentFileOriginal == ""){
            answerContentFileOriginal='[]'
        }
        answerContentFileOriginal = JSON.parse(answerContentFileOriginal);
        answerContentFileOriginal.push(newContent)
        const strReceta = JSON.stringify(answerContentFileOriginal);
        await writeFile(path, strReceta);
    }catch (error){
        console.error(error);
    }
}
