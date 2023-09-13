"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import NavbarFacultad from "../../../../components/NavbarFacultad";
import Link from "next/link";

export default function AddFacultad({params}) {

    const idUniversidadA = params.idUniversidad
    const idUniversidad = idUniversidadA
    console.log("Funcion add", idUniversidadA);

    const [nombre, setNombreFacultad] = useState("");
    const [numeroMaestros, setNumeroMaestros] = useState("");
    const [fechaFundacion, setFechaFundacion] = useState("");
    const [estaEnElCampus, setEstaEnElCampus] = useState("");

    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nombre || !numeroMaestros || !fechaFundacion || !estaEnElCampus) {
            alert("¡Por favor, llene todos los campos solicitados!");
            return;
        }
        console.log("antes de entrar al fetch")
        try {
            const res = await fetch('http://localhost:3000/api/facultades', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({nombre, numeroMaestros, fechaFundacion, estaEnElCampus, idUniversidad}),
            });
            console.log("respuesta res",res);
            if (res.ok) {
                router.push(`http://localhost:3000/facultades/${idUniversidadA}`);
            } else {
                throw new Error("No se pudo crear la facultad");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <NavbarFacultad params={idUniversidadA}/>
            <div className={"bg-white rounded-lg shadow-lg p-6"}>
                <form onSubmit={handleSubmit} className={"flex flex-col gap-3"}>
                    <input
                        onChange={(e) => setNombreHabitante(e.target.value)}
                        value={nombre}
                        className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                        type="text"
                        placeholder="Ingrese el nombre"
                    />
                    <input
                        onChange={(e) => setNumeroMaestros(e.target.value)}
                        value={numeroMaestros}
                        className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                        type="text"
                        placeholder="Ingrese su número de maestros"
                    />
                    <input
                        onChange={(e) => setFechaFundacion(e.target.value)}
                        value={fechaFundacion}
                        className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6"
                        type="date"
                        placeholder="Ingrese su fecha de fundacion"
                    />
                    <div className="border border-slate-500 px-8 py-2 rounded-lg shadow-lg p-6">
                        <label className="font-bold">¿Esta en el campus?</label>
                        <div className="flex gap-16">
                            <label>
                                <input
                                    type="radio"
                                    value="true"
                                    checked={estaEnElCampus === "true"}
                                    onChange={(e) => setEstaCasado(e.target.value)}
                                />
                                <span className="ml-2">Si</span>
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="false"
                                    checked={estaEnElCampus === "false"}
                                    onChange={(e) => setEstaEnElCampus(e.target.value)}
                                />
                                <span className="ml-2">NO</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bg-white px-8 py-3 my-3 shadow-md rounded-lg">
                        <button className="text-white font-bold  p-2 shadow-md rounded-lg bg-emerald-600">Agregar Facultad
                        </button>
                        <Link
                            href={`/habitantes/${idUniversidad}`}
                            className="text-white bg-red-700 p-2 font-bold shadow-md rounded-lg">Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}