import { Link , useNavigate  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import {NavLink} from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


const Rlbutton = () => {
    const { user ,dispatch } = useContext(AuthContext);
    const navigate = useNavigate ();
  
    const handleLogout = () => {
      // Perform logout action, for example, dispatching the LOGOUT action
      dispatch({ type: "LOGOUT" });
  
      // Redirect the user to the login page (adjust the path as needed)
      navigate("/login");
    };
    return (
        <>
                {user ? (
           <div className="topnavItems">
            {/* <span className="username">{user.username}</span> */}
            {/* <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
              {user.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/my-account">My Account</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
            {/* <a onClick={handleLogout} className="headerBtn1">Logout</a> */}
            <Dropdown>
              <Dropdown.Toggle  className="headerBtn-reg" >
                {user.username}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/my-account">My Account</Dropdown.Item>
                {/* <Dropdown.Item href="/my-booking">My Booking</Dropdown.Item> */}
                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <a onClick={handleLogout} className="headerBtn2">Logout</a>
          </div>
        ) : (
          <div className="topnavItems">
            <a href="/Register" className="headerBtn1">Register</a>
            <a href="/Login" className="headerBtn2">Login</a>
          </div>
        )}
        </>
    );
};

export default Rlbutton;