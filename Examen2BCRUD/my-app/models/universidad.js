import mongoose, {Schema} from "mongoose";

const universidadSchema = new Schema(
    {
        nombreUniversidad: String,
        numeroEstudiantes: Number,
        numeroFacultades: Number,
        esPublica: Boolean,

    },
    {
        timestamps: true,
    }
);

const Universidad = mongoose.models.Universidad || mongoose.model("Universidad", universidadSchema);

export default Universidad;