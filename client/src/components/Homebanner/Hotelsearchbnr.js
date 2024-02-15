import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "../../context/AuthContext";


// import Login from "./pages/login/Login";

const Hotelsearchbnr = ({ type }) => {

  const { user } = useContext(AuthContext);

  return (
    <section className="Hotelsearchbnr height-850 bg-overlay bg_image">
          <div className="container">
            <div className="dcounts">
          <h4 className="sub-heading-style bnrsub">Book your luxurious escape </h4>
            <h1 className="headerTitle">
            Reserve your ultimate getaway <br />amidst nature's embrace 
            </h1>
           </div>
         
      </div>
    </section>
  );
};

export default Hotelsearchbnr;
