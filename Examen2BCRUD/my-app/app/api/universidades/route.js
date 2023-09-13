import connectMongoDB from "../../../libs/mongodb";
import Universidad from "../../../models/universidad";
import { NextResponse } from "next/server";

export async function POST(request){

    const { nombreUniversidad,numeroEstudiantes, numeroFacultades, esPublica } = await request.json();
    await connectMongoDB();
    await Universidad.create({nombreUniversidad,numeroEstudiantes, numeroFacultades, esPublica});
    return NextResponse.json({ message: "Universidad Creada" }, { status: 201 });
}

export async function GET(){
    await connectMongoDB();
    const universidades = await Universidad.find();
    return NextResponse.json({ universidades });
}

export async function DELETE(request){
    const idUniversidad = request.nextUrl.searchParams.get("idUniversidad");
    await connectMongoDB();
    await Universidad.findByIdAndDelete(idUniversidad);
    return NextResponse.json({message: "Universidad Eliminada"}, {status: 200});
}