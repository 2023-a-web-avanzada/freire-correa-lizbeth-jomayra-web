"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function EditarFormularioUniversidad({idUniversidad, nombreUniversidad,numeroEstudiantes, numeroFacultades, esPublica}){

    const [nuevoNombre, setNuevoNombreUniversidad] = useState(nombreUniversidad);
    const [nuevoNumFacultades, setNuevoNumeroFacultades] = useState(numeroFacultades);
    const [nuevoNumEstudiantes, setNuevoNumeroEstudiantes] = useState(numeroEstudiantes);
    const [nuevoEstado, setNuevoEstado] = useState(esPublica);

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/universidades/${idUniversidad}`,{
                method: "PUT",
                headers:{
                    "Content-type": "application/json",
                },
                body: JSON.stringify({nuevoNombre, nuevoNumFacultades,
                    nuevoNumEstudiantes, nuevoEstado}),
            });

            if (!res.ok){
                throw new Error("Error al actualizar los datos de Universidad");
            }
            router.refresh();
            router.push("/");
        }catch (error){
            console.log(error);
        }
    };

    return (
        <div className={"bg-white rounded-lg shadow-lg p-6"}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                <input
                    onChange={(e) => setNuevoNombreUniversidad(e.target.value)}
                    value={nuevoNombre}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el nombre de la Universidad"
                />
                <input
                    onChange={(e) => setNuevoNumeroFacultades(e.target.value)}
                    value={nuevoNumFacultades}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el número de facultades"
                />
                <input
                    onChange={(e) => setNuevoNumeroEstudiantes(e.target.value)}
                    value={nuevoNumEstudiantes}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el número de estudiantes"
                />

                </div>
                <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg">
                    <label className="font-bold">¿La Universidad es pública?</label>
                    <div className="flex gap-16">
                        <label>
                            <input
                                type="radio"
                                value="true"
                                checked={nuevoEstado === "true"}
                                onChange={(e) => setNuevoEstado(e.target.value)}
                            />
                            <span className="ml-2">SI</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="false"
                                checked={nuevoEstado === "false"}
                                onChange={(e) => setNuevoEstado(e.target.value)}
                            />
                            <span className="ml-2">NO</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                    <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Actualizar Universidad
                    </button>
                    <Link
                        href={`/`}
                        className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                    </Link>
                </div>
            </form>
        </div>
    );
}