import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "../../context/AuthContext";
import SearchList from "../searchlist/searchlist";

// import Login from "./pages/login/Login";

const Homebanner = ({ type }) => {

  const { user } = useContext(AuthContext);

  return (
    <section className="homebnr height-850 bg-overlay bg_image">
          <div className="container">
        {/* <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <a className="headerlist" href="">Hotels</a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <a className="headerlist" href="">Flights</a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <a className="headerlist" href="">Car rentals</a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <a className="headerlist" href="">Attractions</a>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <a className="headerlist" href="">Airport taxis</a>
          </div>
        </div> */}
    
          <div className="dcounts">
            <h1 className="headerTitle">
            Effortless booking for <br />your perfect getaway 
            </h1>
            <p className="headerDesc">
            Choose from a multitude of homestay accommodations.  
            </p>
          <div className="bnr-btn">
            <a href="/hotels">Find out your stay</a>
          </div>
           </div>
         
      </div>
    </section>
  );
};

export default Homebanner;
