"use client";

import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

export default function EliminarBtnFacultad({ idFacultad }){

    const router = useRouter();
    const eliminarFacultad = async () =>{
        const confirmed = confirm('¿Está seguro de eliminar?');

        if (confirmed){
            const res = await fetch(`http://localhost:3000/api/facultades?idFacultad=${idHabitante}`, {
                method: "DELETE",
            });

            if (res.ok){
                router.refresh();
            }
        }
    };

    return (
        <button onClick={eliminarFacultad} className = "text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}