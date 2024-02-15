import express from "express";
import {  booking  ,getBookingsByUserId ,cancelBooking ,getalluser} from "../controllers/booking.js";

const router = express.Router();

// router.put("/book-room", booking)

router.post("/book-room", booking)
router.get("/bookings/:userId", getBookingsByUserId);
// Add route for canceling a booking
router.post("/bookings/cancelbooking", cancelBooking);

router.get("/completed-bookings", getalluser);

export default router