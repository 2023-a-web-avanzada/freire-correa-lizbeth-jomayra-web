//EComponenteB.tsx
import {useContext} from "react";
import {ContenedorContext} from "@/app/f_use_context/context/ContenedorContext";
import EComponenteC from "@/app/f_use_context/components/EComponenteC";

export default function EComponenteB() {
    const contenedorContexto = useContext(ContenedorContext);

    return (
        <>
            Componente B
            <button  onClick={
                e=> {
                    e.preventDefault();
                    contenedorContexto.setNombreUsuario("CompB")
                }
            }>
                Actualizar
            </button>
            <p>{contenedorContexto.nombreUsuario}</p>
            <EComponenteC></EComponenteC>
        </>
    )
}