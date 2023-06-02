const fs = require('fs');
//camino feliz (resolve) y triste (reject)
function promesaEsPar(numero){ // f->Promesa
    const miPrimerPromesa = new Promise(
        (resolve, reject) =>{
            if(numero % 2 == 0){
                resolve(numero);/*return (then)*/
            }else{
                reject(':no es par'); /*throw (catch*/
            }
    }
    );
    return miPrimerPromesa
}
function promesaElevarAlCuadradro(){
    return new Promise((res) => res(Math.pow(numero,2)));
}
promesaEsPar(4)
.then( //try
    (data) => {
        console.log('DATA', data); // 4
        return promesaElevarAlCuadradro(data);
    }
)
.then(
    (data) => {
        console.error('DATA', data); //string
        return promesaElevarAlCuadradro(data); //16
    }
)
.then(
    () => {
        console.log('Finally');
    }
)

