"use client";
import {HiOutlineTrash} from "react-icons/hi";
import {useRouter} from "next/navigation";

export default function EliminarBtn({ idFacultad }){

    const router = useRouter();
    const eliminarFacultad = async () =>{
        const confirmed = confirm('¿Está seguro de eliminar?');

        if (confirmed){
            const res = await fetch(`http://localhost:3000/api/universidades?idUniversidad=${idUniversidad}`, {
                method: "DELETE",
            });

            if (res.ok){
                router.refresh();
            }
        }
    };

    return (
        <button onClick={eliminarUniversidad} className = "text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}