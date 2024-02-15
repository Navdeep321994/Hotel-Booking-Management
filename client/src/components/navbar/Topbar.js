
import React from 'react';
import india from "../../../src/img/india.png";
import Rlbutton from '../rlbutton/rlbutton';

const Topbar = () => {
  return (
    <section className='mytopbar'>
        <div className='container'>
        <div className='row'>
        <div className="top-bar">
            <div className='col-xxl-4 col-xl-4 col-md-4 col-12'>
            <div className="left-side">
        {/* <img src="your-logo-url.png" alt="Logo" className="logo" /> */}
        <h3 className="logo">Homestay</h3>
      </div>
         </div>
         <div className='col-xxl-8 col-xl-8 col-md-8 col-12'>
        <div className="right-side">
      <ul className='tolbarlist'>
      <li className='firtlist'><i class="fa fa-question-circle-o" aria-hidden="true"></i></li>
        <li className='sendlist'><span>
          <img src={india} className='india' alt='india' />
          INR
        </span></li>
        <li className='lstlist'>
        <a href='/'><span className='locking'></span>Book your stay</a>
        </li>
      </ul>
    <Rlbutton />
       </div>
    </div>
        </div>
      
    </div>
        </div>
    </section>
   
  );
};

export default Topbar;
