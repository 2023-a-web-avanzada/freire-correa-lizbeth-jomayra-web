import Link from "next/link";
import EliminarBtnFacultad from "./EliminarBtnFacultad";
import {HiPencilAlt} from "react-icons/hi";
import { format } from 'date-fns';

import {cache} from "browserslist";
import EditarFormularioFacultad from "./EditarFormularioFacultad";

const getFacultad = async (params) => {
    try {
        const res = await fetch(`http://localhost:3000/api/habitantes/?idFacultad=${params.params}`, {
            cache: "no-store"
        });
        // console.log("funcion api", params.params); // para destruction
        if(!res.ok){
            throw new Error('No se pudieron recuperar los datos de los habitantes');
        }
        return res.json();
    }catch (error){
        console.log("Error al cargar los habitantes", error);
    }
};

export default async function ListaFacultades({params}) {

    const { facultades } = await getFacultad({params});
    //console.log(JSON.stringify(params));
    return (
        <>
            {facultades.map(f => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start shadow-md rounded-lg">
                    <div>
                        <h2 className="font-bold text-4xl divide-black-y">{f.nombre}</h2>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Número de maestros:</span>
                            <span>{f.numeroMaestros}</span>
                        </div>
                        <div className="flex grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Fecha de fundacion:</span>
                            <span>{format(new Date(f.fechaFundacion), 'dd/MM/yyyy')}</span>
                        </div>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">¿Esta en el campus?:</span>
                            <span>
                            {f.estaEnElCampus
                                ? "La facultad SÍ está en el campus"
                                : "La facultad NO está en el campus"}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EliminarBtnHabitante idFacultad={f._id}/>
                        <Link href={`/habitantes/${params}/editHabitante/${f._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}