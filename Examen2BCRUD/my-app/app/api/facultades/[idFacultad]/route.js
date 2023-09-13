import connectMongoDB from "../../../../libs/mongodb";
import Facultad from "../../../../models/facultad";
import {NextResponse} from "next/server";

export async function PUT(request, {params}) {
    const {idFacultad} = params;
    const {nuevoNombre: nombre,
        nuevaCedula:  numeroMaestros,
        nuevaFechaFundacion: fechaFundacion,
        nuevaUbicacion: estaEnElCampus} = await request.json();
    await  connectMongoDB();
    await Facultad.findByIdAndUpdate(idFacultad, {nombre, numeroMaestros, fechaFundacion, estaEnElCampus});
    return NextResponse.json({message: "La información de LAS FACULTADES se actualizó con éxito"}, {status: 200});
}

export async function GET(request, { params }) {
    const {idFacultad} = params;
    await  connectMongoDB();
    const facultad = await Facultad.findOne({_id: idFacultad});
    return NextResponse.json({facultad}, {status: 200});
}