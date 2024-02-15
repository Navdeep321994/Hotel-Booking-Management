import {faBed,faCalendarDays,faCar,faPerson,faPlane,faTaxi,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { AuthContext } from "../../context/AuthContext";
import SearchList from "../searchlist/searchlist";

// import Login from "./pages/login/Login";

const Roomsbnner = ({ type }) => {

  const { user } = useContext(AuthContext);

  return (
    <section className="Roomsbnner height-850 bg-overlay bg_image">
          <div className="container">
            <div className="dcounts">
          <h4 className="sub-heading-style bnrsub">Properties Layout  </h4>
            <h1 className="headerTitle">
            Spacious interiors, fully furnished rooms <br /> and inviting living spaces
            </h1>
           </div>
         
      </div>
    </section>
  );
};

export default Roomsbnner;
