

import React, { useState, useEffect } from "react";
import somany from "../../../src/img/somany.webp";
import bnrslider1 from "../../img/bnrslider1.jpg"
import bnrslider2 from "../../img/bnrslider2.jpg"
import bnrslider3 from "../../img/bnrslider3.jpg"
import bnrslider4 from "../../img/bnrslider4.jpg"
import bnrslider5 from "../../img/bnrslider5.jpg"
import bnrslider6 from "../../img/bnrslider6.jpg"
import bnrslider7 from "../../img/bnrslider7.jpg"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Bannerslider = () => {
  
  const [settings, setSettings] = useState({
    className: "center",
    infinite: true,
    centerPadding: "30px",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
      speed: 300,
      initialSlide: 0,
    
    autoplay: true,
    autoplaySpeed: 2000,
    //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
          }
        },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
    
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    
  });

 

  return (
    <section className="Bannerslider">
    <div className="container">
    <div className="Bannerslider-outer">
    <div class="slider-d1"></div>
    <div
      className="m-palmleft"    />
    <div
      className="m-palmright" />
    
 
        <img src={somany} className='manymore' alt='' />
 
     <Slider {...settings}>
     <div className='slide-box' >
     <a href="http://localhost:3000/hotels/65718c8c517cb31e2a15b9de">
         <img src={bnrslider1} alt='' className='bnrslider-img' id="slider1-img" />
         </a>
     </div>
     <div className='slide-box' >
     <a href="http://localhost:3000/hotels/65ae1919080be1af8bef07ad">
     <img src={bnrslider2} alt='' className='bnrslider-img' id="boxslider1" />
     </a>
      </div>
      <div className='slide-box' >
      <a href="http://localhost:3000/hotels/6572aa21a9b1ba9c080bdeb6">
      <img src={bnrslider3} alt='' className='bnrslider-img' id="slider1-img" />
      </a>
      </div>
     <div className='slide-box' >
      <a href="http://localhost:3000/hotels/658c115a0a5873179e53c260">
      <img src={bnrslider4} alt='' className='bnrslider-img' id="boxslider1" />
      </a>
      </div>
      <div className='slide-box'>
      <a href="http://localhost:3000/hotels/65718e39517cb31e2a15b9df">
      <img src={bnrslider5} alt='' className='bnrslider-img' id="slider1-img" />
      </a>
      </div>
      <div className='slide-box' >
      <a href="http://localhost:3000/hotels/6576a0c5f2ebf78ff15beded">
      <img src={bnrslider7} alt='' className='bnrslider-img'id="boxslider1" />
      </a>
      </div>
      <div className='slide-box'>
      <a href="http://localhost:3000/hotels/65715f70cb924d6c799818bf">
      <img src={bnrslider6} alt='' className='bnrslider-img' id="slider1-img" />
      </a>
      </div>
      <div className='slide-box' >
     <a href="http://localhost:3000/hotels/658c115a0a5873179e53c260">
      <img src={bnrslider4} alt='' className='bnrslider-img' id="boxslider1" />
      </a>
      </div>
     
      </Slider>
      </div>
      </div>
</section>
  );
};

export default Bannerslider;