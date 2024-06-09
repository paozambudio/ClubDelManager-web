import { model, models, Schema } from "mongoose";

const MemberSchema = new Schema(
  {
    nombre: String,
    apellido: String,
    username: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    provincia: String,
    profesion: String,
    empresa: String,
    rol: String,
    telefono: String,
    email: {
      type: String,
      required: [true, "Se requiere el mail"],
    },
    linkedin: String,
    otroAporte: String,
    fechaIngreso: Date,
    activo: Boolean,
    squad: {
      type: Schema.Types.ObjectId,
      ref: "Member",
    },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);

const Member = models.Member || model("Member", MemberSchema);
export default Member;
