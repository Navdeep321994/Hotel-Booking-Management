import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import "./reserve.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId ,dates: selectedDates}) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  // const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);
  // const alldates = dates && dates[0] ? getDatesInRange(dates[0].startDate, dates[0].endDate) : [];
  const alldates = selectedDates && selectedDates[0] ? getDatesInRange(selectedDates[0].startDate, selectedDates[0].endDate) : [];
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const days = selectedDates && selectedDates[0] && selectedDates[0].endDate && selectedDates[0].startDate
    ? dayDifference(selectedDates[0].endDate, selectedDates[0].startDate)
    : 1;
  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      alldates.includes(new Date(date).getTime())
    );
    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(checked ? [value] : []);
    // setSelectedRooms(
    //   checked
    //     ? [...selectedRooms, value]
    //     : selectedRooms.filter((item) => item !== value)
    // );
    setIsButtonDisabled(!checked);
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      // Retrieve user information from local storage
      const user = JSON.parse(localStorage.getItem("user"));
    
      // Array to store information about selected rooms
      const reservationDetails = [];
  
      // Get the current date and time
      const currentDate = new Date();
  
      // Loop through selected rooms and make API calls
      await Promise.all(
        selectedRooms.map(async (roomId) => {
          const res = await axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
  
          // Extract relevant information from the response and the original room data
          const selectedRoom = data.find((item) =>
            item.roomNumbers.some((roomNumber) => roomNumber._id === roomId)
          );
  
          const selectedRoomNumber = selectedRoom.roomNumbers.find(
            (roomNumber) => roomNumber._id === roomId
          );
  
          const roomDetails = {
            roomId: selectedRoomNumber._id,
            roomNumber: selectedRoomNumber.number,
            title: selectedRoom.title,
            reservationDates: alldates,
            price: selectedRoom.price * days,
            currentDate: currentDate.toISOString(), // Include the current date
            userId: user._id, // Add user information to the reservation details
            userName: user.username,
            userEmail: user.email,
            userPhone: user.phone,
            // Add any other user information you may have in the local storage
          };
  
          reservationDetails.push(roomDetails);
  
          return res.data;
        })
      );
  
      // Log the reservation details
      console.log("Reservation Details:", reservationDetails);
  
      // Send reservation details to the admin panel or server
      await axios.post("/books/book-room", {
        reservations: reservationDetails,
      });
      // Close the reservation modal
      navigate('/success');
      setOpen(false);
    } catch (err) {
      // Handle errors
      console.error("Reservation failed:", err);
    }
  };
  
  const makePayment = async () => {
    // Mock implementation, replace with your actual payment logic
    // Example: const paymentResponse = await axios.post("/payment-endpoint", paymentData);
    // Return true if payment is successful, false otherwise
    return true;
  };
  
  return (
    <div className="reserve visibility-scrollbar">
    <div className="inner-reserve">

        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
          onClick={() => setOpen(false)}
        />
        <h4 className="rooms01">Select your stay:</h4>
        {data.map((item) => (
          <div className="bookingdetails" key={item._id}>
            <div className="bookingdetailsInfo">
              <div className="bookingdetailsTitle">{item.title}</div>
              <div className="bookingdetailsDesc"><span className="reser-spn">Rooms Detail:</span>{item.desc}</div>
              <div className="bookingdetailsMax">
              <span className="reser-spn"> Max people: </span><b>{item.maxPeople}</b>
              </div>
              <div className="bookingdetailsPrice"><span className="reser-spn">Total Price:</span>{item.price * days} ( {days} Nights )</div>
              {item.roomNumbers.length > 1 && (
                <div className="bookingdetailsroom">
                  <label>Please Select one checkbox at for booking</label>
                </div>
              )}
            </div>
            <div className="bookingdetailsSelectRooms">
            {/* {item.roomNumbers.length > 1 && (
                <div className="bookingdetailsroom">
                  <label>Please select one checkbox</label>
                </div>
              )} */}
              {item.roomNumbers.map((roomNumber) => (
                <div className="bookingdetailsroom" key={roomNumber._id}>
                  {item.title === "The Eleven Oaks(Single room suite)" ? (
                    <label>{`Floor 5 `}</label>
                  ) : (
                    <label>{item.roomNumbers.length === 1 ? `Book Full Villa` : `Floor ${roomNumber.number}`}</label>
                  )}
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="bookingdetails-btn" disabled={isButtonDisabled}>
          Pay Now!
        </button>
      </div>
    </div>
      
  );
};

export default Reserve;
