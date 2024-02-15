import React, { useState, useEffect } from "react";
import stars from "../../../src/img/stars.png";
import client2 from "../../../src/img/client2.webp";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sunny from "../../../src/img/sunny.png";
import sanidhya from "../../../src/img/sanidhya.png";
import himanshu from "../../../src/img/himanshu.png";
import sangeeta from "../../../src/img/sangeeta.png";

const Testimonials = () => {
  
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
          }
        },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  });

 

  return (
    <section className="customer-reviews">
    <div className="container">
    <Slider {...settings}>
    
       <div className="testmoinals-text">
     
      <img src={stars} className="stars" alt="" />
      <p className="review">“I loved the stay. The staff was very kind and the location was very pretty. I really liked the stay and the cleanliness in the hotel and the tasty breakfast. I really enjoyed it, and I want to say big thanks to Subhash Ji who took care of us at every single step and made our stay comfortable.”</p>

      <div className="clientpick">
      <img src={himanshu} className="client2" alt="" />
      <p className="client-name">Himanshu</p>
      <h4 className="reviewed-propty">The Eleven Oaks </h4>
      </div>
       </div>
       <div className="testmoinals-text">
       
      <img src={stars} className="stars" alt="" />
      <p className="review">“Place as clean and beautiful as mentioned in the photos. The staff was excellent, hospitality and food was amazing . Every corner was beautifully made and decorated . We really loved the bonfire and the food .”</p>

      <div className="clientpick">
      <img src={sanidhya} className="client2" alt="" />
      <p className="client-name">Sanidhya </p>
      <h4 className="reviewed-propty">The Silverton Chalet</h4>
      </div>
       </div>
       <div className="testmoinals-text">
      
      <img src={stars} className="stars" alt="" />
      <p className="review">“Excellent hospitality and support from Mrs Kaur and property caretaker. Would like to recommend others to visit as well. Thanks”</p>

      <div className="clientpick">
      <img src={sunny} className="client2" alt="" />
      <p className="client-name">Sunny</p>
      <h4 className="reviewed-propty">The Log House</h4>
      </div>
       </div>
       <div className="testmoinals-text">
       
      <img src={stars} className="stars" alt="" />
      <p className="review">“Best possible view and good meals served. Great sit outs to enjoy the place. Location is its USP”</p>

      <div className="clientpick">
      <img src={sangeeta} className="client2" alt="" />
      <p className="client-name">Sangeeta </p>
      <h4 className="reviewed-propty">The Horizon Villa </h4>
      </div>
       </div>
    </Slider>
  </div>
</section>
  );
};

export default Testimonials;