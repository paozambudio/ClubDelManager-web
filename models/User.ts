import { model, models, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },

    email: {
      type: String,
      unique: [true, "Email ya existente"],
      required: [true, "Se requiere el mail"],
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

const User = models.User || model("User", UserSchema);
export default User;
