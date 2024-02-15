import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './home.scss';
const BookingList = ({ userId }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, dispatch } = useContext(AuthContext);

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  const handleCancelBooking = async (bookingId, roomId) => {
    try {
      // Make an HTTP request to cancel the booking
      const response = await axios.post('http://localhost:8800/api/books/bookings/cancelbooking', {
        bookingid: bookingId,
        roomId: roomId,
      });

      // Check if the cancellation was successful
      if (response.data.success) {
        // Update the local state or perform any necessary actions
        // (e.g., refetch the list of bookings)
        console.log('Booking cancelled successfully');
        window.alert('Booking cancelled successfully');
        window.location.reload();
      } else {
        console.error('Failed to cancel booking:', response.data.error);
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      window.alert('Error cancelling booking. Please try again.');
    }
  };
  useEffect(() => {
    const fetchCompletedBookings = async () => {
      try {
        const response = await axios.get('http://localhost:8800/api/books/completed-bookings');
        const completedBookings = response.data.data;
        setBookings(completedBookings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching completed bookings:', error);
        setLoading(false);
      }
    };
  
    // Trigger the fetch when the component mounts or as needed
    fetchCompletedBookings();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div class="datatableTitle" bis_skin_checked="1">
          <h3 className="listContainerhd">All Bookings Data</h3>
        </div>
        <div className="listContainer">
        <div>
          <table>
            <thead>
              <tr>
                <th>RoomNumber</th>
                <th>UserName</th>
                <th>Reservation Dates</th>
                <th>Price</th>
                <th>Booking Date</th>
                <th>Room Name</th>
                <th>User Email</th>
                <th>User Phone</th>
                <th>Booking Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.roomNumber}</td>
                  <td>{booking.userName}</td>
                  <td>{booking.reservationDates && booking.reservationDates.length > 0
                     ? `${new Date(booking.reservationDates[0]).toLocaleDateString()} to ${new Date(booking.reservationDates[booking.reservationDates.length - 1]).toLocaleDateString()}`
                     : "N/A"}</td>
                  <td>{booking.price}</td>
                  <td>{booking.currentDate ? new Date(booking.currentDate).toLocaleDateString() : "N/A"}</td>
                  <td>{booking.title}</td>
                  <td>{booking.userEmail}</td>
                  <td>{booking.userPhone}</td>
                  <td>{booking.status	}</td>
                  {/* <td>
                    <button >Cancel</button>
                  </td> */}
                  <td>
                    <button onClick={() => handleCancelBooking(booking._id, booking.roomId)} hidden={booking.status === 'Cancelled'}>
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default BookingList;
