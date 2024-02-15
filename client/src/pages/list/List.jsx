import "./list.css";
import Navbar from "../../components/navbar/Navbar";

import { useLocation , useNavigate } from "react-router-dom";
import { useContext,useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Allhotelsearchlist from "../../components/Homestay-components/internal-components/Allhotelsearchlist";
import { SearchContext } from "../../context/SearchContext";
import Homeheader from "../../components/navbar/Homeheader";
import Footer1 from "../../components/footer/Footer";
import TransparentNavbar from "../../components/navbar/Navbar";

const List = () => {
  const backgroundImg = '/assets/img//bg/homebnner.webp'; 
  const pageTitle = 'Hotel booking search'; 
  const pageSubheading = 'Discover the exciting adventures that await you.'; 
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  console.log("Min:", min);
  console.log("Max:", max);
  
  const { data, loading, error, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min !== undefined ? min : 2}&max=${max !== undefined ? max : 99999}`
  );
  const { dispatch } = useContext(SearchContext);
  const navigate = useNavigate();

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

  return (
    <div>
    <TransparentNavbar />
    {/* <Homeheader /> */}
        {/* <Navbar /> */}
        {/* <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        /> */}
<Allhotelsearchlist />
<section className='explore'>
        <div className='container'>
            <div className='row text-center'>
                <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
                    <h2>Explore More Properties </h2>
                    <p className='now'>From charming cottages nestled in serene landscapes to lavish villas equipped with high-class <br />facilities, we have an extensive range of accommodations to suit your preferences. </p>
                </div>
            </div>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            {/* <FeaturedProperties /> */}
            </div>
            </div>
        </div>
      </section>
      <Footer1 />
    </div>
  );
};

export default List;
