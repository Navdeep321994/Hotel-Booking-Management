import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json(savedRoom);
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (err) {
    next(err);
  }
};
export const updateRoomAvailability = async (req, res, next) => {
  try {
    const roomId = req.params.id;
    const { dates, cancelBooking } = req.body;

    if (cancelBooking) {
      // Remove canceled booking dates
      await Room.updateOne(
        { "roomNumbers._id": roomId },
        {
          $pull: {
            "roomNumbers.$.unavailableDates": { $in: dates },
          },
        }
      );
      res.status(200).json("Booking has been canceled.");
    } else {
      // Update room availability
      await Room.updateOne(
        { "roomNumbers._id": roomId },
        {
          $push: {
            "roomNumbers.$.unavailableDates": { $each: dates },
          },
        }
      );
      res.status(200).json("Room availability has been updated.");
    }
  } catch (err) {
    next(err);
  }
};
export const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Room has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    res.status(200).json(room);
  } catch (err) {
    next(err);
  }
};
export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (err) {
    next(err);
  }
};

// export const getBooking = async (req, res, next) => {
//   try {
//     const reservations = await Reservation.find();
//     res.status(200).json(reservations);
//   } catch (err) {
//     next(err);
//   }
// };