import React from 'react';
import offer1 from "../../../src/img/offer1.png";
import offer2 from "../../../src/img/offer2.png";
import offer3 from "../../../src/img/offer3.png";
import instagramlogo from "../../../src/img/instagramlogo.png";


const Offerpagesection = () => {
  return (
    <div>
<section className='Offerpagesection1'>
<div className='container'>
  <div className='row'>
    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <div className='modernized '>
       <h2>Early bird offer </h2>
       <p>Book your stay in advance and grab an exclusive discount of up to 15% on your bookings. </p>
       <div className="bnr-btn">
            <a href="/Contact">Book Now</a>
          </div>
      </div>
    </div>
    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <img src={offer1} className='offer1' alt='' />
    </div>
  </div>
  <div className='row' id='two'>
  <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <img src={offer2} className='offer1' alt='' />
    </div>
    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <div className='modernized2 '>
       <h2>40% off on selected nights </h2>
       <p>Enjoy up to 40% discount on selected nights. Check out the dates and save big. </p>
       <div className="bnr-btn">
            <a href="/Contact">Book Now</a>
          </div>
      </div>
    </div>
   
  </div>
  <div className='row'>
    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <div className='modernized '>
       <h2>28% off on selected dates </h2>
       <p>Experience significant savings of up to 28% on selected dates. Limited-time time offer- Don’t miss it out. </p>
       <div className="bnr-btn">
            <a href="/Contact">Book Now</a>
          </div>
      </div>
    </div>
    <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 just'>
      <img src={offer3} className='offer1' alt='' />
    </div>
  </div>
</div>
</section>

 </div>

  );
};

export default Offerpagesection;
