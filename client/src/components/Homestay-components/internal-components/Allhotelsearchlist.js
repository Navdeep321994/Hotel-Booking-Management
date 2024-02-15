

import { useLocation, useNavigate } from "react-router-dom";
import { useContext,useState ,useEffect} from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import useFetch from "../../../hooks/useFetch";
import { SearchContext } from "../../../context/SearchContext";
import SearchItem from "../../searchItem/SearchItem";
import Aboutcenter from "../Aboutcenter";
import Testimonials from "../Testimonials";

const Allhotelsearchlist = () => {

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `/hotels?title=${destination}&min=${min !== undefined ? min : 2}&max=${max !== undefined ? max : 99999}`
  );
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();
  const [openDestinationDropdown, setOpenDestinationDropdown] = useState(false); // Add this line
  // const destinations = ["The pink magnolia cottage" , "The silverton chalet" , "The eleven oaks", "The mini horizon" , "The horizon villa" , "The log house" , "The si cottage"  ]; // Add your actual destination data here
  const destinations = [ "The silverton chalet" , "The mini horizon" , "The horizon villa" ,  "The eleven oaks","The log house" , "The pink magnolia cottage" , "The si cottage"  ]; // Add your actual destination data here

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
  const handleClick = () => {
    reFetch();

    if (destination && dates[0].startDate && dates[0].endDate && (options.adult > 0 || options.children > 0 || options.room > 0)) {
      dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
      navigate("/hotels", { state: { destination, dates, options } });
      // setOpenDate(false); // Move setOpenDate(false) here
    } else {
      // Handle the case where not all required fields are filled
      alert("Please fill in all required fields.");
    }
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
  useEffect(() => {
    const handleOutsideClick = (e) => {
      const dropdown = document.querySelector(".destinationDropdown");
      const input = document.querySelector(".Destination-top");

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

  return (
    <div>
 <section className="hotl-srch">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3 col-xl-4 col-lg-5 col-md-12 col-12">
              <div className="searching-list">
              <h3>Book your room</h3>
              <div className="search-area">
              <div className="lsItem">
              <label>Destination</label>
              <input
                type="text"
                placeholder="Where do you want to go? "
                className="Destination-top"
                onClick={handleDestinationClick}
                onChange={handleDestinationChange}
                value={destination}
              />
              {/* Destination dropdown */}
              {openDestinationDropdown && (
                <div className="drpmenu">
                <div className="destinationDropdown">
                  <h6 className="seares-rec">Recent searches</h6>
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
                </div>
              )}
            </div>
            <div className="lsItem" id="date-select">
              <label>Check In - Check Out</label>
              <span className="dtinput" onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate,"MM/dd/yyyy")} - ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
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
            <div className="lsItem">
            <div className="Options-top">
              <label>Options</label>
              </div>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>/per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>/per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="lsOptionInput"
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adults</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rooms</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button  className="lastserchbtn" onClick={handleClick}>Search</button>
              </div>
              </div>
              </div>
              <div className="col-xxl-9 col-xl-8 col-lg-7 col-md-12 col-12">
              <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
              </div>
            </div>
          </div>
        </section>

    </div>
  );
};

export default Allhotelsearchlist;
