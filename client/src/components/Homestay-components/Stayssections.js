import React from 'react';
import loghouse from "../../img/loghouse.webp"
import Pinkmangolia from "../../img/Pinkmangolia.webp"
import horizonvilla from "../../img/horizonvilla.webp"
import junglibakri from "../../img/junglibakri.webp"
import TheSilvertonChalet from "../../img/TheSilvertonChalet.webp"
import bbq from "../../img/bbq.png"
import parking from "../../img/parking.png"
import laundry from "../../img/laundry.png"
import { Link } from 'react-router-dom'
import minihorizon from "../../img/minihorizon.webp"
import sicottage from "../../img/sicottage.webp"
import CountUp from 'react-countup';
import cutlery from "../../img/cutlery.png";
import wifirouter from "../../img/wifirouter.png";
import fireplace from "../../img/fireplace.png";
import PropertyList from '../propertyList/PropertyList';
import FeaturedProperties from '../featuredProperties/FeaturedProperties';
import SearchList from '../searchlist/searchlist';
import Aboutcenter from './Aboutcenter';
import Testimonials from './Testimonials';




const Stayssections = () => {
    return <div>
    <section className='Stayssections'>
        <div className='container'>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
          <div className='homely'>
          <h2>Our handpicked properties </h2>
          <p className='tranquility'>Explore our finest collection of lavish villas, charming cottages and luxury homes. </p>
           </div>
             </div>
            </div>
            <div className='row' id='propty'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
             <div className='propertybox1'>
            <img src={loghouse} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#loghouse`}> 
            <h2>The Log House</h2>
            </Link>
            <ul>
              <li>2 Bedrooms </li>
              <li>Modernized Kitchen</li>
              <li>Living Room</li>
              <li>Bonfire Pit </li>          
              </ul>
            <ul>
              <li>Barbecue Area</li>
               <li>WiFi/TV</li>
              <li>Pet-friendly </li>
            </ul>
            </div>
            </div>
          
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
        
            <div className='propertybox1'>
            <img src={horizonvilla} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#Horizon`}> 
            <h2>The Horizon Villa</h2>
            </Link>
            <ul>
              <li>4 Bedrooms </li>
              <li>Trained Chef</li>
              <li>Wi-Fi/TV </li>
              <li>Air Conditioning</li>
               </ul>
            <ul>
               <li>Workspace</li>
               <li>Patio or Balcony </li>
               <li>Bonfire/BBQ </li>
            </ul>
            </div>
            </div>
         
              </div>
            </div>  
            <div className='row' id='propty2'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
             <div className='propertybox1'>
            <img src={Pinkmangolia} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#PinkMagnolia`}> 
            <h2>The Pink Magnolia</h2>
            </Link>
            <ul>
              <li>4 Bedrooms</li>
              <li>Private Terrace</li>
              <li>Dining Area </li>
              <li>Housekeeping</li>
               </ul>
            <ul>
              <li>Sundeck</li>
              <li>Convenient Parking </li>
              <li>Wi-Fi/TV</li>
            </ul>
            </div>
            </div>
    
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
         
            <div className='propertybox1'>
            <img src={junglibakri} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#Eleven`}> 
            <h2>The Eleven Oaks</h2>
            </Link>
            <ul>
              <li>1 Suite Rroom</li>
              <li>4 Cottages</li>
              <li>Garden Area</li>
              <li>Skilled Chef</li>
               </ul>
            <ul>
              <li>Pet-friendly </li>
              <li>Bonfire/BBQ </li>
              <li>Free Parking</li>
            </ul>
            </div>
            </div>
      
              </div>
            </div> 
            <div className='row' id='propty2'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
   
            <div className='propertybox1'>
            <img src={minihorizon} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#MiniHorizon`}> 
            <h2>The Mini Horizon</h2>
            </Link>
            <ul>
              <li>1 Bedroom</li>
              <li>Private Bathroom</li>
              <li>Scenic Balcony </li>
              <li>Wi-Fi/TV</li>
               </ul>
            <ul>
              <li>Modernized Kitchen</li>
              <li>Free Parking </li>
              <li>Living Lounge </li>
            </ul>
            </div>
            </div>
       
              </div>
              <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
                      <div className='propertybox1'>
            <img src={TheSilvertonChalet} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#Silverton`}>
            <h2>The Silverton Chalet</h2>
            </Link>
            <ul>
              <li>3 Bedrooms</li>
              <li>1 Duplex Room </li>
              <li>3 Sit Out Areas</li>
              <li>Skilled Chef</li>
               </ul>
            <ul>
              <li>2 Housekeepers</li>
              <li>Private Kitchen</li>
              <li>4 Smart TVs</li>
            </ul>
            </div>
            </div>
           
              </div>
            </div> 
            <div className='row' id='propty2'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
      
            <div className='propertybox1'>
            <img src={sicottage} className='loghouse' alt='' />
            <div className='propertybox1-content'>
            <Link to={`/Rooms/#sicottage`}>  <h2>The SI Cottage</h2>  </Link>
            <ul>
              <li>3 Bedrooms</li>
              <li>Garden</li>
              <li>Living Room </li>
              <li>Open Air Deck</li>
               </ul>
            <ul>
              <li>Secured Parking </li>
              <li>Indoor Fireplace </li>
              <li>Inverter/Heater</li>
            </ul>
            </div>
            </div>
          
              </div>
            
            </div> 
        </div>
    </section>
    <section className='amanitiessectoin'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
            <div className='ani-outer'>
            <h4 className='sub-heading-style'>Top-notch amenities </h4>
               <h2>Modern amenities for <br /> unparalleled comfort </h2>
               {/* <p className='world'>Immerse in the world of luxury and tranquility in our luxurious homestays that boast<br /> modernized amenities, breathtaking panoramic views and homely comforts. </p> */}
               </div>
          </div>
        </div>
        <div className='row' id='lastrow'>
            <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={cutlery} className='cutlery' alt='' />
                       <p className='Kitchen'>Modernized Kitchen </p>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={wifirouter} className='cutlery' alt='' />
                       <p className='Kitchen'>Free-Wifi/TV</p>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={fireplace} className='cutlery' alt='' />
                       <p className='Kitchen'>Cozy Fireplace </p>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={laundry} className='cutlery' alt='' />
                       <p className='Kitchen'>Laundry Services</p>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={bbq} className='cutlery' alt='' />
                       <p className='Kitchen'>Barbecue Facilities</p>
                    </div>
                </div>
                <div className='col-xxl-2 col-xl-4 col-lg-4 col-md-6 col-6'>
                    <div className='anmini'>
                    <img src={parking} className='cutlery' alt='' />
                       <p className='Kitchen'>Convenient Parking </p>
                    </div>
                </div>
            </div>
      </div>
    </section>
    {/* <section className='property-view'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
            <div className='view-propty'>
              <h2>View Properties</h2>
              <h3>Indulge in comfort and relaxation while enjoying the best amenities and heart-winning hospitality. </h3>
            </div>
          </div>
        </div>
      </div>
    </section> */}

<Testimonials />

    <section className='countspeaks'>
        <div className='container'>
            <div className='row'>
                <div className='col-xxl-4 col-xl-3 col-lg-4 col-md-12 col-12'>
                <div className='SPEAKS'>
                <h2>Key numbers </h2>
                 <h3 className='Perfect'>Reflecting our success</h3>
                </div>
                 </div>
                <div className='col-xxl-8 col-xl-9 col-lg-8 col-md-12 col-12'>
                <div className='row'>
                
                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6'>
                <div className='newcounter'>
                <h5 className="mycounter">
                     <CountUp
                      start={0}
                      end={5}
                     duration={11.75}
                      separator=" "
                      decimals={0}
                        decimal=","
                     // prefix="EUR "
                    //  suffix=" +"
                      onEnd={() => console.log('Ended! 👏')}
                     onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                        </h5>
                    <p class="count-text ">Years of expertise</p>
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6'>
                <div className='newcounter'>
                <h5 className="mycounter">
                     <CountUp
                      start={0}
                      end={50}
                     duration={11.75}
                      separator=" "
                      decimals={0}
                        decimal=","
                     // prefix="EUR "
                     suffix="k"
                      onEnd={() => console.log('Ended! 👏')}
                     onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                        </h5>
                    <p class="count-text ">Yearly bookings </p>
                </div>
              

                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6'>
                <div className='newcounter'>
                <h5 className="mycounter">
                     <CountUp
                      start={10}
                      end={90}
                     duration={11.75}
                      separator=" "
                      decimals={0}
                        decimal=","
                     // prefix="EUR "
                     suffix="k"
                      onEnd={() => console.log('Ended! 👏')}
                     onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                        </h5>
                    <p class="count-text ">Happy guests hosted </p>
                    </div>
                </div>
                <div className='col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6'>
                <div className='newcounter'>
                <h5 className="mycounter">
                     <CountUp
                      start={0}
                      end={95}
                     duration={11.75}
                      separator=" "
                      decimals={0}
                        decimal=","
                     // prefix="EUR "
                     suffix="%"
                      onEnd={() => console.log('Ended! 👏')}
                     onStart={() => console.log('Started! 💨')}
                    ></CountUp>
                        </h5>
                    <p class="count-text ">Guest satisfaction </p>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
}

export default Stayssections

