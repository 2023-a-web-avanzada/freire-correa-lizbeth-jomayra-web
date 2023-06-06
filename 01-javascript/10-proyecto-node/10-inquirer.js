//09-inquirer.js
//npm init -> package.json -> dependencias
//npm install inquirer -> npm i inquierer
//node_modules -> estan las dependencias
import inquirer from "inquirer";
async function main (){
    try{
        const respuesta = await  inquirer.prompt([
            {
                type: 'input',
                name: 'apellido',
                message: 'Ingresa Tu Nombre'
            },
            {
                type: 'input',
                name: 'edad',
                message: 'Ingresa Tu Edad'
            }
        ]);
        console.log('Respuesta', respuesta);
    } catch (e){console.error(e);}
}
main();