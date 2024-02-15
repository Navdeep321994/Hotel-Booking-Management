import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Your username is required"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Your email address is required"],
      unique: true,
    },
    country: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: [true, "Your phone number is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Your password is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
