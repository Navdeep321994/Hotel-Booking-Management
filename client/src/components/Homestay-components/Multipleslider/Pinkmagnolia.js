import React, { useState, useEffect } from "react";
import pink1 from "../../../img/Pinkmangolia/pink1.webp";
import pink2 from "../../../img/Pinkmangolia/pink2.webp";
import pink3 from "../../../img/Pinkmangolia/pink3.webp";
import pink4 from "../../../img/Pinkmangolia/pink4.webp";
import pink5 from "../../../img/Pinkmangolia/pink5.webp";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Pinkmagnolia = () => {
  
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <section className="pink">
     <Slider {...settings}>
      <div className="single-property-slider">
      <img src={pink1} className="pink1" alt="" />
         </div>
         <div className="single-property-slider">
      <img src={pink2} className="pink1" alt="" />
         </div>
         <div className="single-property-slider">
      <img src={pink3} className="pink1" alt="" />
         </div>
         <div className="single-property-slider">
      <img src={pink4} className="pink1" alt="" />
         </div>
         <div className="single-property-slider">
      <img src={pink5} className="pink1" alt="" />
         </div>
       
       
    </Slider>
</section>
  );
};

export default Pinkmagnolia;