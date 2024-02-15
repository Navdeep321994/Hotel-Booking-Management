import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./featuredProperties.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=7");

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    //  nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
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

  useEffect(() => {
    const slider = document.querySelector(".slick-slider");
    slider.addEventListener("afterChange", (event) => {
      console.log(event.target.currentSlide);
    });
  }, []);

  return (
    <section className="slick-propertises">
   <div className="container">
    <Slider {...settings}>
    {data.map((item) => (
        <div className="fpItem" key={item._id}>
    
          <div className="img-body" id="allprprty">
          <img src={item.photos[0]} alt="" className="fpImg" />
            {/* <Link to={`/hotels/${item._id}`}>
             
            </Link> */}
            <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none" }}>
              <span className="fpName">{item.name}</span>
            </Link>
            <div className="img-body">
            <span className="fpCity">{item.city}</span>
            </div>
            <div className="img-body" id="prp-price">
            <span className="fpPrice">
              ₹ {item.cheapestPrice} <span className="pricespan">/ Per Night</span>
            </span>
            </div>
            {/* {item.rating && (
              <div className="fpRating0">
                <p>{item.rating}</p>
                <span>Excellent</span>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>
  );
};

export default FeaturedProperties;