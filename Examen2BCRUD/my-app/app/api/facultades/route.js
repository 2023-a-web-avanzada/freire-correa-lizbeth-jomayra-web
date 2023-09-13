import connectMongoDB from "../../../libs/mongodb";
import Facultad from "../../../models/facultad";
import {NextResponse} from "next/server";

export async function POST(request) {

    const {nombre, numeroMaestros, fechaFundacion, estaEnElCampus, idUniversidad} = await request.json();
    await connectMongoDB();
    await Facultad.create({nombre, numeroMaestros, fechaFundacion, estaEnElCampus, idUniversidad});
    return NextResponse.json({message: "La información de la facultad se creó con éxito"}, {status: 201})
}

export async function GET(request) {
    const idUniversidad = request.nextUrl.searchParams.get("idUniversidad");

    await connectMongoDB();
    const facultades = await Facultad.find({idUniversidad: idUniversidad});
    //console.log(habitantes);
    return NextResponse.json({facultades});
}

export async function DELETE(request) {
    const idFacultad = request.nextUrl.searchParams.get("idFacultad");
    await connectMongoDB();
    await Facultad.findByIdAndDelete(idFacultad);
    return NextResponse.json({message: "La información de las facultades se eliminó con éxito"}, {status: 200})
}