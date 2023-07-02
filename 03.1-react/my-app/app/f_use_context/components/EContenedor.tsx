//EContenedor.tsx

import {useEffect, useState} from "react";
import {ContenedorContextObjeto} from "@/app/f_use_context/interfaces/ContenedorContextObjeto";
import EComponenteA from "@/app/f_use_context/components/EComponenteA";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";

export default function EContenedor() {
    const [nombreUsuario, setNombreUsuario] = useState("Liz")
    const objetoContenedorContext: ContenedorContextObjeto = {
        nombreUsuario,
        setNombreUsuario
    };
    useEffect(
        () => {
            console.log('Cambio de contenedor', objetoContenedorContext.nombreUsuario)
        },
        [objetoContenedorContext.nombreUsuario]
    )
    return (
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
            <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>
        </>
    )
}