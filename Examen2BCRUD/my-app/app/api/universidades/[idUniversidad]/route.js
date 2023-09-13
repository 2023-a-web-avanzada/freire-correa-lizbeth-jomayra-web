import connectMongoDB from "../../../../libs/mongodb";
import Universidad from "../../../../models/universidad";
import { NextResponse } from "next/server";

export async function PUT(request, { params }){
    const { idUniversidad } = params;
    const {nuevoNombre: nombreUniversidad, nuevoNumFacultades: numeroFacultades, nuevoNumEstudiantes: numeroEstudiantes, nuevoEstado: esPublica} = await request.json();
    await connectMongoDB();
    await Universidad.findByIdAndUpdate(idUniversidad, { nombreUniversidad, numeroFacultades, numeroEstudiantes, esPublica });
    return NextResponse.json({message: "Universidad Actualizada"}, {status: 200});
}

export async function GET(request, { params }){
    const { idUniversidad } = params;
    await connectMongoDB();
    const universidad = await Universidad.findOne({ _id: idUniversidad });
    return NextResponse.json({ universidad }, {status: 200});
}