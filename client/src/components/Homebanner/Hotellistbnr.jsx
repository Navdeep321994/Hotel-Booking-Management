import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "../../context/AuthContext";
import SearchList from "../searchlist/searchlist";

// import Login from "./pages/login/Login";

const Hotellistbnr = ({ type }) => {

  const { user } = useContext(AuthContext);

  return (
    <section className="homebnr height-850 bg-overlay bg_image">
          <div className="container">
                <div className="dcounts">
            <h1 className="headerTitle">
            Effortless booking for <br />your perfect getaway 
            </h1>
            <p className="headerDesc">
            Choose from a multitude of homestay accommodations.  
            </p>
          <div className="bnr-btn">
            <a href="/">Book Now</a>
          </div>
           </div>
         
      </div>
    </section>
  );
};

export default Hotellistbnr;
