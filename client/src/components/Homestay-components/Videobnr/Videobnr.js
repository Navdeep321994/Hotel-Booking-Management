import React from 'react';
import sicottage from "../../../img/sicottage.mp4";

const Videobnr = () => {
  return (
    <section className='video-bnr'>
    <div className="banner-container">
      <video autoPlay muted loop className="background-video">
        <source src={sicottage} type="video/mp4" />
        {/* Add additional video sources if needed for different browsers */}
      </video>
      <div className="overlay"></div>
      <div className="content">
      <h1 className="headerTitle">
            Effortless booking for <br />your perfect getaway 
            </h1>
        <p className="headerDesc">
            Choose from a multitude of homestay accommodations.  
            </p>
            <div className="bnr-btn2">
            <a href="/hotels">Find out your stay</a>
          </div>
      </div>
    </div>
    </section>
  );
};

export default Videobnr;