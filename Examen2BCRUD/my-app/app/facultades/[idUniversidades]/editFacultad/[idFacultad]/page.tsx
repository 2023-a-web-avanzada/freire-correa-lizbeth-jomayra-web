import EditarFormularioHabitante from "../../../../../components/EditarFormularioHabitante";
import React from "react";
import NavbarFacultad from "../../../../../components/NavbarFacultad";
import EditarFormularioFacultad from "../../../../../components/EditarFormularioFacultad";

const getFacultadById = async (idFacultad) => {
    try {
        const res = await fetch(`http://localhost:3000/api/facultades/${idFacultad}`,
            {cache: 'no-store'});

        if(!res.ok) {
            throw new Error("No se pudo recuperar la información de la Universidad");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditFacultad({params}){
    const idUniversidad = params.idUniversidad;
    const {idFacultad} = params;
    const {facultad} = await getFacultadByById(idFacultad);
    const {nombre, numeroMaestros, fechaFundacion, estaEnElCampus} = facultad;
    return (
        <>
            <NavbarHabitante params={idUniversidad}/>
            <EditarFormularioFacultad idFacultad={idFacultad} nombre={nombre}
                                      numeroMaestros={numeroMaestros} fechaFundacion={fechaFundacion}
                                      estaEnElCampus={estaEnElCampus} idUniversidad={idUniversidad}/>
        </>
    )
};