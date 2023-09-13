import React from "react";
import ListaFacultades from "../../../components/ListaFacultades";
import NavbarFacultad from "../../../components/NavbarFacultad";

export default function HomeFacultad({params}) {
    const idUniversidad = params.idUniversidad
    return (
        <>
            <NavbarFacultad params={idUniversidad}/>
            <ListaFacultades params={idUniversidad}/>
        </>
    )
}