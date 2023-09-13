"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function AddUniversidad() {

    const [nombreUniversidad, setNombreUniversidad] = useState("");
    const [numeroFacultades, setNumeroFacultades] = useState("");
    const [numeroEstudiantes, setNumeroEstudiantes] = useState("");
    const [esPublica, setEsPublica] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombreUniversidad || !numeroFacultades || !numeroEstudiantes || !nuevoEstado) {
            alert("¡Por favor, llene todos los campos solicitados!");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/universidades', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({nombreUniversidad, numeroFacultades, numeroEstudiantes, nuevoEstado}),
            });

            if (res.ok) {
                router.push('/');
            } else {
                throw new Error("No se pudo crear la Universidad");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={"bg-white rounded-lg shadow-lg p-6"}>
            <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                <input
                    onChange={(e) => setNombreUniversidad(e.target.value)}
                    value={nombreUniversidad}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el nombre de la Provincia"
                />
                <input
                    onChange={(e) => setNumeroFacultades(e.target.value)}
                    value={numeroFacultades}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el número de habitantes"
                />
                <input
                    onChange={(e) => setNumeroEstudiantes(e.target.value)}
                    value={numeroEstudiantes}
                    className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg"
                    type="text"
                    placeholder="Ingrese el número de habitantes"
                />


                </div>
                <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg">
                    <label className="font-bold">¿La Universidad es publica?</label>
                    <div className="flex gap-16">
                        <label>
                            <input
                                type="radio"
                                value="true"
                                checked={esPublica === "true"}
                                onChange={(e) => setEsPublica(e.target.value)}
                            />
                            <span className="ml-2">Si</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="false"
                                checked={esPublica === "false"}
                                onChange={(e) => setEsPublica(e.target.value)}
                            />
                            <span className="ml-2">No</span>
                        </label>
                    </div>
                </div>
                <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                    <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Agregar
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