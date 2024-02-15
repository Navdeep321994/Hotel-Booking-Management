import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "../../context/AuthContext";
import SearchList from "../searchlist/searchlist";

// import Login from "./pages/login/Login";

const Contactpagebnr = ({ type }) => {

  const { user } = useContext(AuthContext);

  return (
    <section className="Contactpagebnr height-850 bg-overlay bg_image">
          <div className="container">
            <div className="dcounts">
          <h4 className="sub-heading-style bnrsub">Get in touch</h4>
            <h1 className="headerTitle">
            Have any queries? <br/>We’re here to assist you
            </h1>
           </div>
         
      </div>
    </section>
  );
};

export default Contactpagebnr;
