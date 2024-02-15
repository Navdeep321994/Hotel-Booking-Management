import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from "react-date-range";
import { useContext, useState,useEffect } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import Footer1 from "../footer/Footer";

const SearchList = () => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]);
    const [openDestinationDropdown, setOpenDestinationDropdown] = useState(false); // Add this line
    // const destinations = [ "The silverton chalet" , "The eleven oaks", "The mini horizon" , "The horizon villa" , "The pink magnolia cottage" ,"The log house" , "The si cottage"  ]; // Add your actual destination data here
    const destinations = [ "The silverton chalet" , "The mini horizon" , "The horizon villa" , "The eleven oaks", "The pink magnolia cottage" ,"The log house" , "The si cottage"  ]; // Add your actual destination data here

    const handleDestinationClick = () => {
      // Show destination dropdown or perform any other action
      console.log("Destination input clicked");
      setOpenDestinationDropdown(true);
    };
  
    const handleDestinationSelect = (selectedDestination) => {
      setDestination(selectedDestination);
      setOpenDestinationDropdown(false);
    };
  
    const handleDestinationChange = (e) => {
      setDestination(e.target.value);
    };
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const navigate = useNavigate();
  
    const handleOption = (name, operation) => {
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };
  
    const { dispatch } = useContext(SearchContext);
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
    useEffect(() => {
      const handleOutsideClick = (e) => {
        const dropdown = document.querySelector(".destinationDropdown");
        const input = document.querySelector(".headerSearchInput");
  
        if (dropdown && !dropdown.contains(e.target) && input && !input.contains(e.target)) {
          setOpenDestinationDropdown(false);
        }
      };
  
      // Attach the event listener when the component mounts
      document.addEventListener("click", handleOutsideClick);
  
      // Detach the event listener when the component unmounts
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, [openDestinationDropdown]);
    const handleSearch = () => {
      if (destination && dates[0].startDate && dates[0].endDate && (options.adult > 0 || options.children > 0 || options.room > 0)) {
        dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
        navigate("/hotels", { state: { destination, dates, options } });
        // setOpenDate(false); // Move setOpenDate(false) here
      } else {
        // Handle the case where not all required fields are filled
        alert("Please fill in all required fields.");
      }
    };
    return (
        <div className="headerSearch">
        <div className="search-outer">
        <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon" />
          <input
            type="text"
            placeholder="Where do you want to go? "
            className="headerSearchInput"
            onClick={handleDestinationClick}
            onChange={handleDestinationChange}
            value={destination}
          />
          {/* Destination dropdown */}
          {openDestinationDropdown && (
            <div className="destinationDropdown">
            <h3 className="searches-rec">Recent searches</h3>
              {destinations.map((dest) => (
               
                
                <div
                  key={dest}
                  className="destinationOption"
                  onClick={() => handleDestinationSelect(dest)}
                >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
                  {dest}
              
                </div>
                    ))}
            </div>
          )}
        </div>
        <div className="headerSearchItem">
          <div className="headerSearchItem4">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(dates[0].startDate, "MM/dd/yyyy")} - ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>
          </div>
          <div className="headerSearchItem1">
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
        <div className="headerSearchItem">
        <div className="headerSearchItem2">
          <div className="headerSearchItem3">
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
                  <p className="optionText">Adults</p>
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
          </div>
       
        </div>
        {/* <div className="headerSearchItem">
       
        </div> */}
        <button className="headerBtn" onClick={handleSearch}>
            SEARCH
          </button>
      </div>
</div>
  );
};

export default SearchList;