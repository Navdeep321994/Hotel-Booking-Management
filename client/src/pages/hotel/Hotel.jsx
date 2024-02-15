import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import area from "../../../src/img/area.png";
import bedroom from "../../../src/img/bedroom.png";
import bath from "../../../src/img/bath.png";
import pickup from "../../../src/img/pickup.webp";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft,faCircleArrowRight,faCircleXmark,faLocationDot,faCalendarDays,faPerson,} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useLocation, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import Reserve from "../../components/reserve/Reserve";
import Pinkmagnolia from "../../components/Homestay-components/Multipleslider/Pinkmagnolia";
import Homeheader from "../../components/navbar/Homeheader";
import TransparentNavbar from "../../components/navbar/Navbar";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";

const Hotel = () => {
  const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
  const pageTitle = 'Hotel booking search'; 
  const pageSubheading = 'Discover the exciting adventures that await you.'; 
  const [openDate, setOpenDate] = useState(false);


  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date, // Set end date to next day
      key: "selection",
    },
  ]);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      // Set the maximum number of adults based on the hotel name
      let maxAdults;
      switch (data.name) {
        case "The Silverton Chalet":
          maxAdults = 8;
          break;
        case "The Mini Horizon":
          maxAdults = 2;
          break;
        case "The Horizon Villa":
          maxAdults = 12;
          break;
        case "The Eleven Oaks":
          maxAdults = 4;
          break;
        case "The Log House":
          maxAdults = 6;
          break;
        case "The Pink Magnolia Cottage":
          maxAdults = 8;
          break;
        case "The SI Cottage":
            maxAdults = 8;
            break;
        default:
          maxAdults = Infinity; // Default to no limit
      }

      return {
        ...prev,
        [name]: operation === "i" ? Math.min(prev[name] + 1, maxAdults) : Math.max(prev[name] - 1, 0),
      };
    });
  };
  const days = dates && dates[0] && dates[0].endDate && dates[0].startDate
  ? dayDifference(dates[0].endDate, dates[0].startDate)
  : 1;

  const handleOpen = (initialSlideNumber = 0) => {
    setSlideNumber(initialSlideNumber);
    setOpen(true);
  };
  const [endDateSelected, setEndDateSelected] = useState(false);
  const handleDateChange = (item) => {
    const { startDate, endDate } = item.selection;
    
    // If start date is selected, but end date is not, update start date only
    if (!endDateSelected) {
      setDates([{
        startDate,
        endDate,
        key: "selection",
      }]);
    } else {
      // Both start and end dates are selected, update both
      setDates([{
        startDate,
        endDate,
        key: "selection",
      }]);
      setOpenDate(false); // Close the date picker after selecting both dates
    }

    // Toggle the end date selected state
    setEndDateSelected(!endDateSelected);
  };
  const handleMove = (direction) => {
    const totalImages = data.photos ? data.photos.length : 0;
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? totalImages - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === totalImages - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    if (user) {
      if (days > 0) {
        setOpenModal(true);
      } else {
        alert("Please select valid check-in and check-out dates.");
      }
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
    <TransparentNavbar />
 {/* <Homeheader /> */}
      <section className="blockimg">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-12" id="single-property-row"></div>
                    <div className="hotelImages">
               <div className="firstImageRow">
                  {data.photos?.slice(0, 1).map((photo, i) => (
                     <div className="hotelImgWrapper1" key={i}>
                        <img
                           onClick={() => handleOpen(i)}
                           src={photo}
                           alt=""
                           className="hotelImg"
                        />
                     </div>
                  ))}
               </div>

               <div className="otherImagesRow">
                  {data.photos?.slice(1, 3).map((photo, i) => (
                     <div className="hotelImgWrapper" key={i + 1}>
                        <img
                           onClick={() => handleOpen(i + 1)}
                           src={photo}
                           alt=""
                           className="hotelImg"
                        />
                     </div>
                  ))}
               </div>
               <div className="otherImagesRows">
                  {data.photos?.slice(3, 5).map((photo, i) => (
                     <div className="hotelImgWrapper" key={i + 1}>
                        <img
                           onClick={() => handleOpen(i + 1)}
                           src={photo}
                           alt=""
                           className="hotelImg"
                        />
                     </div>
                  ))}
               </div>
            </div>
            <h6 className="hotelImagesdata"><a className="hotelImagesdata" onClick={() => handleOpen(0)}>Show More Images</a></h6>
            </div>
            </div>
            </section>
      <section className="single-property">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-12 col-12" id="single-property-row">
            <div className="single-property-detail">
           {open && (
            <div className="slider">

              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("l")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="hotelWrapper-2">
          <div className="propty-heading">
             <h2 className="single-heading">{data.name}<span className="single-price">₹{data.cheapestPrice} </span></h2>
             </div>
                <div className="property-location">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <ul className="inner-prop-icon">
          {/* <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
          <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
          <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li> */}
          {data.photos2?.slice(0, 10).map((photo, i) => (
            <li className="hotelImgWrapper1" key={i}>
                <img
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
            </li>
          ))}
          </ul>
            {/* <p className="hotelDistance">
              Excellent location – {data.distance}m from center
            </p> */}
            {/* <p className="over-stay">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </p> */}
           
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                {/* <h1 className="hotelTitle">{data.title}</h1> */}
                <p className="property-dec">{data.desc}</p>
              </div>
             </div>
             <div className="properties-facilities">
              <h3>Amenities</h3>
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-6 col-12 dd">
                <ul className="amenities-list2">
                  {data.photos1?.slice(0, 10).map((photo, i) => (
                        <li className="hotelImgWrapper1" key={i}>
                            <img
                              src={photo}
                              alt=""
                              className="hotelImg"
                            />
                        </li>
                      ))}
                      </ul>
                <ul className="amenities-list2">

                      </ul>
                      <ul className="amenities-list2">
                    {data.amenities && data.amenities.length > 0 ? (
                      data.amenities.map((amenity, index) => (
                        <li key={index} className="amenity-item1">
                          {amenity}
                        </li>
                      ))
                    ) : (
                      <p>No amenities available.</p>
                    )}
                </ul>
                </div>
              </div>
               </div>
               <div className="additonal-ser">
                <h3>Additional facilities</h3>
                <ul className="facilities-list1">
                  {data.facilities && data.facilities.length > 0 ? (
                    data.facilities.map((facility, index) => (
                      <li key={index} className="amenity-item">
                        {facility}
                      </li>
                    ))
                  ) : (
                    <p>No amenities available.</p>
                  )}
                </ul>
               
                <div className="more-ser">
                <h3>Room Rules</h3>
                <ul className="entry-detail list-rules">
                  {data.rules && data.rules.length > 0 ? (
                    data.rules.map((rule, index) => (
                      <li key={index} className="amenity-item1">
                        {rule}
                      </li>
                    ))
                  ) : (
                    <p>No amenities available.</p>
                  )}
                </ul>

                </div>
               </div>
               <div className="properties-facilities">
               
                  <h3>Cancellation policy</h3>
                  <h5>Please note that cancellations are only allowed before check-in.
                    Our cancellation policy is as follows:</h5>
                  <div className="row">
                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
                        <ul>
                          <li class="amenity-item1">
                              <span>- Guests are eligible for a 100% refund if they cancel their booking within 24 hours of booking as long as the stay is at least 60 days away.</span>
                          </li>
                          <li class="amenity-item1">
                              <span>- Guests can receive a 50% refund if they cancel their booking at least 1 month or 4 weeks before the check-in date.</span>
                          </li>
                          <li class="amenity-item1">
                              <span>- No refund will be given once the booking is confirmed.</span>
                          </li>
                        </ul>
                    </div>
              </div>
            </div>
               {/* <div className="slider-area-pro">
                  <h3>Other Rooms</h3>
                  <Pinkmagnolia />  
                </div> */}
          </div>
 
            </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-12 col-12">
               <div className="hotelDetailsPrice">
                <h3 className="Perfect-price">Perfect for a minimum one-night stay</h3>
                {/* <h3 className="Perfect-price">Perfect for a {days}-night stay!</h3> */}
                <p>
                Located in the heart of Mussoorie, this delightful property has a rating of {data.rating} 
                </p>
                {/* <h4 className="single-heading"><span >Full Property ₹ {data.cheapestPrice}/night </span></h4> */}
                <div className="lsItem" id="date-select">
                    <h4>Check In - Check Out</h4>
                    <div className="headerSearchItem7">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon3" />
                      <span className="dtinput" onClick={() => setOpenDate(!openDate)}>
                        {dates && dates[0] && format(dates[0].startDate, "MM/dd/yyyy")} - {dates && dates[0] && format(dates[0].endDate, "MM/dd/yyyy")}
                    </span>
                    {openDate && (
                    <DateRange
                    editableDateInputs={true}
                    onChange={handleDateChange}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                    />
                    )}
                    </div>
                    </div>
                    <div className="headerSearchItem4">
                    <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                      >{`${options.adult} adult · ${options.children} children `}</span>
                    </div>
                    <div className="headerSearchItem3">
                      {openOptions && (
                        <div className="options">
                          <div className="optionItem">
                            <p className="optionText">Adult</p>
                            <div className="optionCounter">
                              <button
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.adult}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="optionItem">
                            <p className="optionText">Children</p>
                            <div className="optionCounter">
                              <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.children}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("children", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          {/* <div className="optionItem">
                            <span className="optionText">Room</span>
                            <div className="optionCounter">
                              <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "d")}
                              >
                                -
                              </button>
                              <span className="optionCounterNumber">
                                {options.room}
                              </span>
                              <button
                                className="optionCounterButton"
                                onClick={() => handleOption("room", "i")}
                              >
                                +
                              </button>
                            </div>
                          </div> */}
                        </div>
                      )}
                    </div>
                {/* <h3 className="boled">
                  <b>₹{days * data.cheapestPrice }</b> ({days}{" "}
                  Night)
                </h3> */}
                {days === 0 ? (
                    <h4 className="single-heading">
                      <span>Full Property ₹ {data.cheapestPrice}/night </span>
                    </h4>
                  ) : (
                    <h3>
                      <b>₹ {days * data.cheapestPrice}</b> ({days} Night)
                    </h3>
                  )}
                <button onClick={handleClick} >Book Now</button>
                {/* <button onClick={handleClick} disabled={days === 0}>Reserve or Book Now!</button> */}
              </div>
              </div>
          </div>
        </div>
      </section>
      <div className="slider-area-single">
        <div className='container'>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
                    <h3>Explore other properties </h3>
                      </div>
            </div>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            <FeaturedProperties />
            </div>
            </div>
        </div>
   </div>
      {openModal && <Reserve setOpen={setOpenModal} hotelId={id} dates={dates} />}
       <Footer />
 
    </div>
  );
};

export default Hotel;
