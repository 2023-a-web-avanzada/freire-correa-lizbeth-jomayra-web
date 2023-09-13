import EditarFormularioUniversidad from "../../../components/EditarFormularioUniversidad";
import React from "react";

const getUniversidadById = async (idUniversidad) => {
    try {
        const res = await fetch(`http://localhost:3000/api/universidades/${idUniversidad}`,
            {cache: 'no-store'});

        if(!res.ok) {
            throw new Error("No se pudo recuperar la información de la Universidad");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function editUniversidad({params}){
    const {idUniversidad} = params;
    const {universidad} = await getUniversidadById(idUniversidad);
    const {nombreUniversidad,numeroEstudiantes, numeroFacultades, esPublica} = universidad;
    return (
        <EditarFormularioUniversidad idUniversidad={} = {idUniversidad} nombreUniversidad={nombreUniversidad}
                                     numeroEstudiantes={numeroEstudiantes} numeroFacultades={numeroFacultades}
                                     esPublica={esPublica}/>
    )};