import Link from "next/link";
import EliminarBtn from "./EliminarBtn";
import {HiPencilAlt} from "react-icons/hi";
import { FaUser } from 'react-icons/fa';
import {cache} from "browserslist";

const getUniversidades = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/universidades', {
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error('No se pudieron recuperar las universidades');
        }
        return res.json();
    }catch (error){
        console.log("Error al cargar las universidades", error);
    }
};

export default async function ListaUniversidades() {

    const { universidades } = await getUniversidades();

    return (
        <>
            {universidades.map(p => (
                <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start shadow-md rounded-lg">
                    <div>
                        <h2 className="font-bold text-4xl divide-black-y">{p.nombreUniversidad}</h2>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Número de estudiantes:</span>
                            <span>{p.numeroEstudiantes}</span>
                        </div>
                        <div className="flex grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">Número de Facultades:</span>
                            <span>{p.numeroFacultades}</span>
                        </div>
                        <div className="grid grid-cols-1 divide-y gap-x-5">
                            <span className="font-bold">¿Es pública?:</span>
                            <span>
                            {p.esPublica
                                ? "La universidad es pública SI"
                                : "La universidad es pública NO"}
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <EliminarBtn idUniversidad={p._id}/>
                        <Link href={`/editUniversidad/${p._id}`}>
                            <HiPencilAlt size={24} />
                        </Link>
                        <Link href={`/facultades/${p._id}`}>
                            <FaUser size={24} style={{ color: 'green' }}/>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
}