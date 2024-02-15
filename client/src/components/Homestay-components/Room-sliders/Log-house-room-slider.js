

import React, { useState, useEffect } from "react";
import loghousepick0 from "../../../img/Rooms/loghousepick0.webp";
import loghousepick1 from "../../../img/Rooms/loghousepick1.webp";
import loghousepick2 from "../../../img/Rooms/loghousepick2.webp";
import loghousepick3 from "../../../img/Rooms/loghousepick3.webp";
import area from "../../../img/area.png";
import bedroom from "../../../img/area.png";
import bath from "../../../img/area.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Loghouseroomslider = () => {
  
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    autoplay: true,
    autoplaySpeed: 2000,
    //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 4,
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
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
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
    <section className="pink">
     <Slider {...settings}>
     <div className='room-box'>
                <div className='living-spaces .overlay'>
                     <img src={loghousepick0} alt='' className='loghousepick0' />
                     </div>
                     <div className='room-detail'>
                        <h4>Bedroom</h4>
                        <ul className="inner-prop-icon">
                      <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
                      <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      </ul>
                      <p className='established'>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
                      <p className='detailed'><a href='/'>Room detail</a></p>
                     </div>
      </div>
      <div className='room-box'>
                <div className='living-spaces .overlay'>
                     <img src={loghousepick1} alt='' className='loghousepick0' />
                     </div>
                     <div className='room-detail'>
                        <h4>Living Room</h4>
                        <ul className="inner-prop-icon">
                      <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
                      <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      </ul>
                      <p className='established'>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
                      <p className='detailed'><a href='/'>Room detail</a></p>
                     </div>
        </div>
        <div className='room-box'>
                <div className='living-spaces .overlay'>
                     <img src={loghousepick2} alt='' className='loghousepick0' />
                     </div>
                     <div className='room-detail'>
                        <h4>Bedroom</h4>
                        <ul className="inner-prop-icon">
                      <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
                      <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      </ul>
                      <p className='established'>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
                      <p className='detailed'><a href='/'>Room detail</a></p>
                     </div>
          </div>
     <div className='room-box'>
                <div className='living-spaces .overlay'>
                     <img src={loghousepick3} alt='' className='loghousepick0' />
                     </div>
                     <div className='room-detail'>
                        <h4>Bedroom</h4>
                        <ul className="inner-prop-icon">
                      <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
                      <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      </ul>
                      <p className='established'>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
                      <p className='detailed'><a href='/'>Room detail</a></p>
                     </div>
      </div>
        
      <div className='room-box'>
                <div className='living-spaces .overlay'>
                     <img src={loghousepick3} alt='' className='loghousepick0' />
                     </div>
                     <div className='room-detail'>
                        <h4>Bedroom</h4>
                        <ul className="inner-prop-icon">
                      <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
                      <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
                      </ul>
                      <p className='established'>It is a long established fact that a reader will be distracted by the readable content of a page when...</p>
                      <p className='detailed'><a href='/'>Room detail</a></p>
                     </div>
      </div>
        
       
    </Slider>
</section>
  );
};

export default Loghouseroomslider;