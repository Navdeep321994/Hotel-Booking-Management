import { Link } from "react-router-dom";
import area from "../../../src/img/area.png";
import bedroom from "../../../src/img/bedroom.png";
import bath from "../../../src/img/bath.png";
import cutlery from "../../../src/img/cutlery.png";
import wifirouter from "../../../src/img/wifirouter.png";
import heater from "../../../src/img/heater.png";
import fireplace from "../../../src/img/fireplace.png";
import bbq from "../../../src/img/bbq.png";





import "./searchItem.css";

const SearchItem = ({ item }) => {
  const truncateText = (text, maxLength) => {
    const words = text.split(' ');
    if (words.length > maxLength) {
      return words.slice(0, maxLength).join(' ') + '...';
    }
    return text;
  };
  return (
    <section className="right-serch-list">
    <div className="container">
    <div className="row" id="proprow">
    <div className="col-xxl-4 col-xl-4 col-lg-12 col-md-5 col-12" id="smallpick">
    <img src={item.photos[0]} alt="" className="propimg" />
    </div>
    <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-7 col-12" id="forborder">
    <div className="siD">
        <h3 className="Title">{item.name}</h3>
        <p className="Distane">{item.distance}</p>
        {/* <span className="Distane">{item.distance} Located in mussoorie</span> */}
        <ul className="inner-prop-icon">
          {/* <li><img src={area} className="area" alt="" /><span className="conditioning-icon">80m2</span></li>
          <li><img src={bedroom} className="area" alt="" /><span className="conditioning-icon">2 Bedroom</span></li>
          <li><img src={bath} className="area" alt="" /><span className="conditioning-icon">80m2</span></li> */}
          {item.photos2?.slice(0, 10).map((photo, i) => (
            <li className="hotelImgWrapper1" key={i}>
                <img
                  src={photo}
                  alt=""
                  className="hotelImg"
                />
            </li>
          ))}
          </ul>
           <p className="Located">{truncateText(item.desc, 20)}</p>
          <ul className="inner-prop-icon-bottom">
             <li><img src={cutlery} className="wifirouter" alt="" /></li>
             <li><img src={wifirouter} className="wifirouter" alt="" /> </li>
             <li><img src={heater} className="wifirouter" alt="" /> </li>
             <li><img src={fireplace} className="wifirouter" alt="" /> </li>
             <li><img src={bbq} className="wifirouter" alt="" /> </li>
             
         <li>
          
         </li>
          </ul>
      
      </div>
    </div>
    <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-12">
    <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">₹ {item.cheapestPrice}<span className="niht"> /Night</span></span>
          {/* <span className="siTaxOp">Includes taxes and fees</span> */}
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </div>
    </section>
    
  );
};

export default SearchItem;
