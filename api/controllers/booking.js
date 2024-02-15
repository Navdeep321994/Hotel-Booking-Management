// Assuming you are sending an array of reservations in the request body
import Booking from "../models/Booking.js";
import moment from 'moment';

export const booking = async (req, res, next) => {
  try {
    const { reservations } = req.body;

    // Loop through each reservation in the array and save it
    const savedBookings = await Promise.all(
      reservations.map(async (reservation) => {
        const {
          roomId,
          roomNumber,
          title,
          reservationDates,
          price,
          currentDate,
          userId,
          userName,
          userEmail,
          userPhone,
        } = reservation;

        const formattedReservationDates = Array.isArray(reservationDates)
        ? reservationDates.map((date) => moment(date).format('YYYY-MM-DD'))
        : [];

        const formattedCurrentDate = currentDate
          ? moment(currentDate)
          : new Date();

        const booking = new Booking({
          roomId,
          roomNumber,
          title,
          reservationDates: formattedReservationDates,
          price,
          currentDate: formattedCurrentDate,
          userId,
          userName,
          userEmail,
          userPhone,
        });

        return await booking.save();
      })
    );
     res.send("Room Booked")
    res.status(201).json({
      success: true,
      data: savedBookings,
    });
  } catch (error) {
    next(error);
  }
};


export const getBookingsByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const bookings = await Booking.find({ userId });
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
export const cancelBooking = async (req, res, next) => {
  try {
    const { bookingid, roomId } = req.body;

    // Find the booking based on booking ID and room ID
    const canceledBooking = await Booking.findOneAndUpdate(
      { _id: bookingid, roomId },
      { status: 'Cancelled' }, // Update the status to 'canceled'
      { new: true } // Return the updated document
    );

    if (!canceledBooking) {
      return res.status(404).json({
        success: false,
        error: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      data: canceledBooking,
    });
  } catch (error) {
    console.error("Error canceling booking:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};

// export const getalluser = async (req, res, next) => {
//   try {
//     // Assuming you have a 'status' field in your booking model/schema
//     const completedBookings = await Booking.find({ status: 'Booked' }).populate('userId');
//     res.json({ data: completedBookings });
//   } catch (error) {
//     console.error('Error fetching completed bookings:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

export const getalluser = async (req, res, next) => {
  try {
    // Fetch bookings with both 'Booked' and 'Cancelled' statuses
    const allBookings = await Booking.find({ $or: [{ status: 'Booked' }, { status: 'Cancelled' }] }).populate('userId');
    
    res.status(200).json({
      success: true,
      data: allBookings,
    });
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
    });
  }
};