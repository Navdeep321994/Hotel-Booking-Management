// BookingList.js
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';

// import { Modal } from "react-responsive-modal";
function MyVerticallyCenteredModal(props) {
const { booking, onHide } = props; // Destructure booking and onHide from props

return (
  <div className="booking-dtls-modal">

<Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
 <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
    Your Booking Details
        </Modal.Title>
      </Modal.Header>
<Modal.Body>
   <p><span className="reser-spn">Username:</span> {booking.userName}</p>
   <p><span className="reser-spn">Price: </span>{booking.price}</p>
   <p><span className="reser-spn">Reservation Dates:</span>{" "}{booking.reservationDates && booking.reservationDates.length > 0
                     ? `${new Date(booking.reservationDates[0]).toLocaleDateString()} to ${new Date(booking.reservationDates[booking.reservationDates.length - 1]).toLocaleDateString()}`
                     : "N/A"}</p>
   {/* <p><span className="reser-spn">RoomId:</span> {booking.roomId}</p> */}
   <p><span className="reser-spn">Room Name: </span>{booking.title}</p>
   <p><span className="reser-spn">Room Number:</span> {booking.roomNumber}</p>
   <p><span className="reser-spn">Booking Date: </span>{booking.currentDate ? new Date(booking.currentDate).toLocaleDateString() : "N/A"}</p>
   <p><span className="reser-spn">Email: </span>{booking.userEmail}</p>
   <p><span className="reser-spn">Phone: </span>{booking.userPhone}</p>
   <p><span className="reser-spn">Status: </span>{booking.status}</p>
</Modal.Body>
 <Modal.Footer>
 <Button className="closefoote" onClick={props.onHide}>Close</Button>
    </Modal.Footer>
</Modal>
</div>
);
}
const BookingList = ({ userId  }) => {
const [modalShow, setModalShow] = React.useState(false);
const [bookings, setBookings] = useState([]);
const [loading, setLoading] = useState(true);
const { user, dispatch } = useContext(AuthContext);
const [open, setOpen] = useState(false);
const [selectedBooking, setSelectedBooking] = useState(null); // New state for selected booking
const [showConfirmation, setShowConfirmation] = useState(false);
const [confirmedBooking, setConfirmedBooking] = useState(null);
const styles = {
fontFamily: "sans-serif",
textAlign: "center",
};
const onOpenModal = (booking) => {
setSelectedBooking(booking);
setOpen(true);
};
const onCloseModal = () => {
setSelectedBooking(null);
setOpen(false);
};
const handleCancelConfirmation = () => {
   setConfirmedBooking(selectedBooking);
   setShowConfirmation(false);
 };
 useEffect(() => {
   const fetchBookings = async () => {
     try {
       const userBookings = await axios.get(`http://localhost:8800/api/books/bookings/${user._id}`);
       setBookings(userBookings.data.data);
       setLoading(false);
     } catch (error) {
       console.error("Error fetching bookings:", error);
       setLoading(false);
     }
   };
   fetchBookings();
 }, [userId]);
const cancelBooking = async (bookingid, roomId) => {
   try {
      setShowConfirmation(false);
     const result = await axios.post("http://localhost:8800/api/books/bookings/cancelbooking", { bookingid, roomId });
     console.log(result.data);

     alert("Booking canceled successfully!");

    // Reload the page
    window.location.reload();
     // Update room availability on the server when canceling booking
     const cancel = await axios.put(`http://localhost:8800/api/rooms/availability/${roomId}`, { dates: roomId.reservationDates, cancelBooking: true });
     console.log(cancel.data);
 
     // Remove the canceled booking from the local state
     setBookings((prevBookings) => prevBookings.filter((booking) => booking._id !== bookingid));
   } catch (error) {
     console.log(error);
   }
 };
if (loading) {
return 
<div>Loading...</div>
;
}
return (
<>
<Modal show={showConfirmation} onHide={() => setShowConfirmation(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Cancellation Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to cancel your booking?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmation(false)}>
            No
          </Button>
          <Button variant="primary" onClick={handleCancelConfirmation}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
<section className="bookingtable">
   <div className="container">
      <h3>Your Bookings {user.username}</h3>
      <table className="rwd-table">
         <tbody className="rwd-table-body">
            <tr className="theader">
               <th className="numbers">Room No.</th>
               <th >Reservation Dates</th>
               <th>Price</th>
               <th>Booking Status</th>
               <th>Action</th>
               <th>Cancel</th>
            </tr>
            {bookings.map((booking) => (
            <tr key={booking._id}>
               <td  data-th="Room Number">{booking.roomNumber}</td>
               <td className="Reservation-dt" data-th="Reservation Dates">{booking.reservationDates && booking.reservationDates.length > 0
                     ? `${new Date(booking.reservationDates[0]).toLocaleDateString()} to ${new Date(booking.reservationDates[booking.reservationDates.length - 1]).toLocaleDateString()}`
                     : "N/A"}</td>
               <td  data-th="Room Price">{booking.price}</td>
               <td data-th="Room Id">{booking.status}</td>
               <td className="btn-table-data" key={booking._id}>
               {/* ... other table cells ... */}
           
                  <div style={styles}>
                     <Button className="View-Detail" variant="primary" onClick={() => onOpenModal(booking)}>
                     View
                     </Button>
                     <MyVerticallyCenteredModal
                     show={open && selectedBooking === booking}
                     onHide={onCloseModal}
                     booking={booking}  // Pass the booking object as a prop
                     />
                  </div>
               
               {/* ... other table cells ... */}
            </td>
            <td className="btn-table-data">
               <button className="Cancel-btn" onClick={() => cancelBooking(booking._id, booking.roomId)}
               hidden={booking.status === 'Cancelled'}>Cancel</button>
            </td>
            </tr>
            ))}
         </tbody>
      </table>
   </div>
</section>
</>
);
};
export default BookingList;