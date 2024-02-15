import React from 'react';
import HSPick1 from "../../img/HSPick1.webp"
import HSPick2 from "../../img/HSPick2.webp"
import HSPick3 from "../../img/HSPick3.webp"
import BBQ from "../../img/BBQ.webp"
import bbq from "../../img/bbq.png"
import parking from "../../img/parking.png"
import laundry from "../../img/laundry.png"
import homecenter from "../../img/homecenter.mp4"
import nature from "../../img/nature.webp"
import tracking from "../../img/tracking.webp"
import CountUp from 'react-countup';
import cutlery from "../../img/cutlery.png";
import wifirouter from "../../img/wifirouter.png";
import fireplace from "../../img/fireplace.png";
import PropertyList from '../propertyList/PropertyList';
import FeaturedProperties from '../featuredProperties/FeaturedProperties';
import SearchList from '../searchlist/searchlist';
import Aboutcenter from './Aboutcenter';




const Homesection1 = () => {
    return <div>

  <section className='serchsec'>
    <div className='container'>
    <SearchList />
    </div>
    </section>
      <section className='Homesection1'>
        <div className='container'>
            <div className='row' id='fistrow'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
                <div className='ingelit'>
               <h4 className='sub-heading-style'>Luxury amidst nature </h4>
               <h2>Luxurious villas for your ultimate retreat  </h2>
               <p>Immerse in the world of luxury and tranquility in our luxurious properties that boast modernized amenities,<br /> breathtaking panoramic views and homely comforts. </p>
                </div>
                </div>
            </div>
            <div className='row' id='hsecond'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                
                <div className='living-spaces .overlay'>
                     <img src={HSPick1} alt='' className='HSPick1' />
                     </div>
                    <p className='Greece'>Inviting living spaces to unwind and relax </p>
                      </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                <div className='Trip2'>
                <video src={homecenter}   controls
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop id='pseudo-partial-border'></video>
                {/* <img src={HSPick3} alt='' className='HSPick3' /> */}
        
                   </div>
                </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                <div className='living-spaces'>
                    <img src={HSPick2} alt='' className='HSPick1' />
                    </div>
                    <p className='Greece'>Spacious rooms with panoramic mountain views </p>
                </div>
               
            </div>
            <div className='row' id='Poular'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
                    <h3 className='amenities'>Highlighted amenities </h3>
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
    
      <section className='explore'>
        <div className='container'>
            <div className='row text-center'>
                <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
                    <h2>Explore our exquisite properties </h2>
                    <p className='now'>From charming cottages nestled in serene landscapes to lavish villas equipped with high-class <br />facilities, we have an extensive range of accommodations to suit your preferences. </p>
                </div>
            </div>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            <FeaturedProperties />
            </div>
            </div>
        </div>
      </section>
      <section className='things'>
        <div className='container'>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12'>
            <div className='thingdo'>
                <h2> Activities you can indulge in </h2>
                <h3>Discover the exciting adventures that await you </h3>
                 </div>
            </div>
            </div>
            <div className='row' id='hGG'>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                     <img src={BBQ} alt='' className='nature' />
                     <div className='consectetur'>
                     <h3 className='ece'>Outdoor BBQ </h3>
                    <p>Relish a delicious barbecue night in the open outdoor garden space.  </p>
                      </div>
                     </div>
                    <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                   <img src={nature} alt='' className='nature' />
                   <div className='consectetur'>
                     <h3 className='ece'>Nature’s walk </h3>
                    <p>Enjoy leisurely strolls amidst the scenic beauty. </p>
                      </div>
                     </div>
                <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12'>
                    <img src={tracking} alt='' className='nature' />
                    <div className='consectetur'>
                     <h3 className='ece'>Bonfire </h3>
                    <p>Indulge in the warmth of a crackling bonfire with your loved ones.  </p>
                      </div>
  
                </div>
               
            </div>
        </div>
      </section>
      {/* <Aboutcenter /> */}
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

export default Homesection1

