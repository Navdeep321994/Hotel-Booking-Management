// reservation.js in models directory
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  roomId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
  },
  roomNumber: String,
  title: String,
  reservationDates: {type: [Date]},
  price: String,
  currentDate: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  userName: String,
  userEmail: String,
  userPhone: String,
  status: {
    type: String,
    enum: [ 'Booked', 'canceled'], // Adjust as needed
    default: 'Booked',
  }
});

const Booking = mongoose.model("Booking", BookingSchema);

export default Booking;
