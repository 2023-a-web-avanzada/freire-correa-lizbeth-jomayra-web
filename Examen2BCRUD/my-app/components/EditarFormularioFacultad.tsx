"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import "react-datepicker/dist/react-datepicker.css";
import {format} from 'date-fns';
import Link from "next/link";

export default function EditarFormularioFacultad({idFacultad, nombre, numeroMaestros, fechaFundacion, estaEnElCampus, idUniversidad}) {

    const [nuevoNombre, setNuevoNombre] = useState(nombre);
    const [nuevaUbicacion, setNuevaUbicacion] = useState(estaEnElCampus);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/facultades/${idFacultad}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nuevoNombre,nuevaUbicacion}),
            });

            if (!res.ok) {
                throw new Error("Error al actualizar los datos de la Facultad");
            }
            router.refresh();
            router.push(`/facultades/${idUniversidad}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={"bg-white rounded-lg shadow-lg p-6"}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                <input
                    onChange={(e) => setNuevoNombre(e.target.value)}
                    value={nuevoNombre}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                    type="text"
                    placeholder="Ingrese el nuevo nombre"
                />
                <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                    <span className="font-bold">Número de maestros:</span>
                    <span className="text-black px-3">{numeroMaestros}</span>
                </div>

                <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                    <span className="font-bold">Fecha de Fundacion:</span>
                    <span className="text-black px-3">
                  {format(new Date(fechaFundacion), 'dd/MM/yyyy')}
                </span>
                </div>
                <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                    <label className="font-bold">¿Esta en el campus?</label>
                    <div className="flex gap-16">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="true"
                                checked={nuevaUbicacion === "true"}
                                onChange={(e) => setNuevaUbicacion(e.target.value)}
                            />
                            <span className="ml-2">Si</span>
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                value="false"
                                checked={nuevaUbicacion === "false"}
                                onChange={(e) => setNuevaUbicacion(e.target.value)}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                    <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Actualizar
                    </button>
                    <Link
                        href={`/habitantes/${idUniversidad}`}
                        className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
}