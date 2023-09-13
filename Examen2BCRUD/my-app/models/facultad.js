import mongoose, {Schema} from "mongoose";

const facultadSchema = new Schema(
    {
        nombre: String,
        numeroMaestros: Number,
        fechaFundacion: Date,
        estaEnElCampus: Boolean,
        idUniversidad: String

    },
    {
        timestamps: true,
    }
);

const Facultad = mongoose.models.Facultad || mongoose.model("Facultad", facultadSchema);

export default Facultad;