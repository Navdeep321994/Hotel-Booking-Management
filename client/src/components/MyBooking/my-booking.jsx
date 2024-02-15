import React, { Component } from 'react';
import { Link , useNavigate  } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import Homeheader from '../navbar/Homeheader';

const MyBooking = () => {
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
<Homeheader />
	<div className="liton__wishlist-area pb-70">
	  <div className="container">
		<div className="row">
		  <div className="col-lg-12">
			{/* PRODUCT TAB AREA START */}
			<div className="ltn__product-tab-area">
			  <div className="container">
				<div className="row">
				  <div className="col-lg-12">
					<div className="ltn__tab-menu-list mb-50">
					  <div className="nav">                                            
						<a className="active show" data-bs-toggle="tab" href="#ltn_tab_1_1">My Hotel Booking </a>
						{/* <a className="active show1" data-bs-toggle="tab" href="/forgot-password">Change Password </a> */}
						<a  className="active show" onClick={handleLogout}>Logout </a>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>
			{/* PRODUCT TAB AREA END */}
		  </div>
		</div>
	  </div>
	</div>
	</>
	);
};

export default MyBooking