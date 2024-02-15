// BookingList.js
import React, { useState, useEffect, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import Navbar from "../../components/navbar/Navbar";
import Footer1 from "../../components/footer/Footer";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";

// import { Modal } from "react-responsive-modal";

const Success = ({ userId  }) => {
  const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
  const pageTitle = 'Booking Confirmation '; 
  const pageSubheading = 'Discover the exciting adventures that await you.'; 
  const [modalShow, setModalShow] = React.useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null); // New state for selected booking
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
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

  if (loading) {
    return <div>Loading...</div>;
  }

  const lastBooking = bookings.length > 0 ? bookings[bookings.length - 1] : null;

return (
<>
<TransparentNavbar />
{/* <Homeheader /> */}
{/* <Navbar /> */}
      <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        />
      <section className="bookingtable">
        <div className="container">
          <h3 className="Thank">Thank you. Your booking has been confirmed. </h3>
          <div className="finl-booking">
          <h4>View Booking Details </h4>
          {lastBooking && (
            <p key={lastBooking._id}>
              <p data-th="Room Number"><span className="reser-spn">Room No. </span>{lastBooking.roomNumber}</p>
              <p className="Reservation-dt" data-th="Reservation Dates">
              <span className="reser-spn"> Reservation Dates :</span> {lastBooking.reservationDates && lastBooking.reservationDates.length > 0
                     ? `${new Date(lastBooking.reservationDates[0]).toLocaleDateString()} to ${new Date(lastBooking.reservationDates[lastBooking.reservationDates.length - 1]).toLocaleDateString()}`
                     : "N/A"}
              </p>
              <p data-th="Room Price"><span className="reser-spn">Price : </span>{lastBooking.price}</p>
              <p data-th="Room Price"><span className="reser-spn">Room Name :</span> {lastBooking.title}</p>
              <p data-th="Room Id"><span className="reser-spn">Booking Status :</span> {lastBooking.status}</p>
              <p className="btn-table-data" key={lastBooking._id}></p>
            </p>
          )}
          <div className="bokin-btn">
            <a href="/Stays">Explore More Stays</a>
          </div>
          </div>
        </div>
      </section>
<Footer1 />
</>
);
};
export default Success;