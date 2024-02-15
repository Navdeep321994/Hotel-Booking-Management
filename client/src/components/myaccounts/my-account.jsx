import React, { useState, useContext ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb"
import Navbar from '../navbar/Navbar';
import { AuthContext } from '../../context/AuthContext';
import './my-account.css';
import BookingList from './BookingList';
import axios from 'axios';
import Footer1 from '../footer/Footer';
import Homeheader from '../navbar/Homeheader';
import TransparentNavbar from '../navbar/Navbar';

const MyAccount = () => {
  const backgroundImg = '/assets/img//bg/inrbnr.webp'; 
  const pageTitle = 'My Account'; 
  const pageSubheading = 'Discover the exciting adventures that await you.';
  
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('myAccount');

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
    <TransparentNavbar />
{/* <Homeheader /> */}
      <Breadcrumb backgroundImg={backgroundImg}
       title={pageTitle} 
       subheading={pageSubheading}
        />
  
      <div className="liton__wishlist-area ">
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
                        <li>
                          <a
                            className={`nav-link ${activeTab === 'myAccount' ? 'active' : ''}`}
                            onClick={() => handleTabChange('myAccount')}
                          >
                            My Account
                          </a>
                          </li>
                          <li>
                          <a
                            className={`nav-link ${activeTab === 'myBooking' ? 'active' : ''}`}
                            onClick={() => handleTabChange('myBooking')}
                          >
                            My Booking
                          </a>
                          </li>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* PRODUCT TAB AREA END */}
              {/* Content for My Account Tab */}
              {activeTab === 'myAccount' && (
                <div className="tab-content" id='myaccountdetail'>
                <h2>Account Information</h2>
                  <div className="tab-pane fade show active" id="ltn_tab_1_1">
                    {/* Add content for My Account tab here */}
                    <p className='userdeatil'><strong>Name :</strong> </p>
                    <p className='urserholder'>{user.username}</p>
                    <p  className='userdeatil'><strong>Email : </strong></p>
                    <p className='urserholder'>{user.email}</p>
                    <p  className='userdeatil'><strong>Country :</strong> </p>
                    <p className='urserholder'>{user.country}</p>
                    <p className='userdeatil'><strong>City : </strong></p>
                    <p className='urserholder'>{user.city} </p>
                    <p className='userdeatil'><strong>Phone :</strong> </p>
                    <p className='urserholder'>{user.phone}</p>
                    {/* <p className='userdeatil'><strong>Admin : </strong></p>
                    <p className='urserholder'>{user.isAdmin ? 'true':'false'}</p> */}
                    <div class="back-btn">
                    <a href="/"><span className='backk'>
                    <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </span>Back</a></div>
                  </div>
                </div>
              )}
              {/* Content for My Booking Tab */}
              {activeTab === 'myBooking' && (
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="ltn_tab_1_2">
                    {/* Add content for My Booking tab here */}
                    <BookingList/>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default MyAccount;
