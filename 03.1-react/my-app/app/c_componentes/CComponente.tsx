import {useState} from "react";

export type PropiedadesComponente ={
    url: string;
    iteraciones: number;
    mostrar?: boolean;
}
export default function CComponente(
    props: PropiedadesComponente
) {
    // const url = props.url
    // const iteraciones = props.iteraciones
    // const mostrar = props.mostrar
    // const numeroUno = arreglo[0]
    // const numeroDos = arreglo[1]
    const {url, iteraciones, mostrar} = props, arreglo = [0, 1], [numeroUno, numeroDos] = arreglo,
        contenidoAdicional = () => {
            if (mostrar) {
                return <p>Mostrar</p>
            }
            return <p>Ocultar</p>
        };
    const objeto = {}
    //useState
    const [iteracionLocal, setIteracionLocal] = useState(
        iteraciones // valor de la variable
    ) //click al boton, cambiar al classname de bg-yelow-500
    // a bg-red-500 y cuando vuelva a dar click de nuevo cambiar a bg-yellow
    const estilos = ["yellow", "red"]
    const [estilosParrafo, setEstilosParrafo] = useState(
        estilos[0]
    )

    return(
        <div className="border border-solid border-black p-3 m-2">
            <a target="_blank" href={url}>Ir a url</a>
            <p className={`bg-${estilosParrafo}-500`}>Iteracion: {iteraciones} {iteracionLocal}</p>
            <p>Mostrar: {mostrar}</p>
            {contenidoAdicional()}
            {mostrar && <p>Mostrar Rapido</p>}

            <button className="border border-solid border-black bg-blue-500" onClick={
                (event) => {
                    setEstilosParrafo(estilosParrafo == estilos[0]? estilos[1]: estilos[0])
                    setIteracionLocal(iteracionLocal+1)
                    console.log(event)
                }
            }> Aumentar </button>
        </div>
    )

}