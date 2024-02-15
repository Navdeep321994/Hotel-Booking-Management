import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    status: {
      type: String,
      enum: [ 'Booked', 'canceled'], // Adjust as needed
      default: 'Booked',
    }
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
