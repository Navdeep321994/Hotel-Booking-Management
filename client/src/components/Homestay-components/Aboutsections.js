import React from 'react';
import family from "../../img/family.png"
import leaves from "../../img/leaves.png"
import homestay from "../../img/homestay.png"
import check from "../../img/check.png"

import roundimg from "../../img/roundimg.webp";
import collage1 from "../../img/collage1.png"
import collage2 from "../../img/collage2.png"
import collage3 from "../../img/collage3.png"
import collage4 from "../../img/collage4.png"
import CountUp from 'react-countup';

import Aboutcenter from './Aboutcenter';
import Testimonials from './Testimonials';



const Aboutsections = () => {
    return <div>
    <section className='Aboutsections1'>
        <div className='container'>
        <div className='row'>
          <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
          <div className='nestled'>
          <h4 className='sub-heading-style'>A brief overview   </h4>
          <h2>How we started and how <br />far we’ve come </h2>
           </div>
             </div>
            </div>
            <div className='row' id='abtrow3'> 
            <ul className='abtcollage'>
    <li>
    <img src={collage1} className='collage1' alt='' width={200} />
        </li>
    <li>
    <img src={collage2} className='collage1' alt='' width={200} />
    </li>
    <li>
    <img src={collage3} className='collage1' alt='' width={200} />
    </li>
    <li>
    <img src={collage4} className='collage1' alt='' width={200} />
    </li>
  </ul>
  <div className="light" />
            </div>
            <div className='row' id='abtrow3'> 
            <div className='col-xxl-6 col-xl-6 col-md-6 col-12'>
            <p class="has-dropcap">Our founder, Ms Parmeet Kaur, is a travel freak who has a strong passion for exploring new places. Her love for discovering different cultures and serene landscapes inspired her to create unique accommodations that offer personalized and authentic experiences to travellers. Driven by a deep-rooted desire to offer travellers moments of serenity and relaxation amidst nature’s embrace, Parmeet began her explorative journey to find idyllic properties in Mussoorie.  </p>
          <p className='British'>After searching for a long time, she finally found <span className='forcolor'>“The Log House,”</span> a charming British decor homestay in Mussoorie, surrounded by nature’s beauty and picturesque views. From there, she expanded our portfolio to include<span className='forcolor'> “ The Silverton Chalet” </span>and <span className='forcolor'>"The Horizon Villa”</span> to provide exceptional stay experiences with homely comforts. 
          </p>
            </div>
            <div className='col-xxl-6 col-xl-6 col-md-6 col-12'>
            <p className='British'>Furthermore, Parmeet’s unwavering dedication and commitment to providing unparalleled getaways led her to broaden her range of homestay properties by including<span className='forcolor'>“The Eleven Oaks,”</span>  <span className='forcolor'>“The Pink Magnolia Cottage,”</span> <span className='forcolor'>“The Mini Horizon,”</span> and <span className='forcolor'>"The Si Cottage"</span>. Our collection of impeccably styled homes offers the perfect retreat to create cherished memories in a setting of elegance and comfort. Nestled amidst mesmerizing landscapes, our luxurious properties combine traditional architecture and modern amenities to provide an unforgettable stay for our guests.
             </p>
             <p className='British'>With a perfect blend of aesthetically designed spaces, homely comforts and breathtaking views, So Many Mornings strives to set new standards for luxury stays. Book your ultimate getaway with us to experience the warmth and comforts of a home away from home.   </p>
            </div>
            </div> 
            <div className='row' id='comforts'>
            <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
            <h2>We provide memorable staycation experiences with genuine hospitality </h2>
            <p className='British'>At So Many Mornings, we're committed to ensuring every aspect of your stay is unforgettable. We go above and beyond to create a welcoming atmosphere where lasting memories are made. </p>
        
          
            <div className='row' id='ultimate'>
               <div className='col-xxl-5 col-xl-5 col-md-6 col-sm-6 col-xs-6 col-12'>
            <ul className='Camping'>
              <li>
                <span><img src={check} className='check' alt='' /> Luxury villas </span>
              </li>
              <li>
                <span><img src={check} className='check' alt='' /> Warm Hospitality </span>
              </li>
              <li>
                <span><img src={check} className='check' alt='' /> Scenic Locations </span>
              </li>
            </ul>
            
            </div>
          
            <div className='col-xxl-6 col-xl-6 col-md-6 col-sm-6 col-xs-6 col-12'>
            <ul className='Camping-right'>
              <li>
                <span><img src={check} className='check2' alt='' /> Exclusive Privacy </span>
              </li>
              <li>
                <span><img src={check} className='check2' alt='' /> Local experiences </span>
              </li>
              <li>
                <span><img src={check} className='check2' alt='' /> Homely Comfort</span>
              </li>
            </ul>
            </div>
            </div>
            </div>
    
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12'>
          <img src={roundimg} className='prosingle' alt='' />
          </div>
          
        </div>
        </div>
    </section>
    <section className='commitment'>
        <div className='container'>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            <div className='exciting'>
            <h2>Why book your stay with us </h2>
            <h3>Here are the reasons to book your next staycation with So Many Mornings.  </h3>
            </div>
            </div>
            </div>
            <div className='row' id='adventures'>
            <div className='col-xxl-4 col-xl-4 col-md-4 col-12'>
            <div className='whychoosebox'>
             <img src={leaves} className='leaves' alt='' />
             <h3 className='livee'>Handpicked properties </h3>
             <p>All our properties are exclusively handpicked to provide a perfect vacation experience.</p>
            </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-md-4 col-12'>
            <div className='whychoosebox1'>
             <img src={homestay} className='leaves' alt='' />
             <h3 className='livee'>Unbeatable prices & discounts </h3>
             <p>We not only provide the best price but also offer special discounts on bookings. </p>
            </div>
            </div>
            <div className='col-xxl-4 col-xl-4 col-md-4 col-12'>
            <div className='whychoosebox2'>
             <img src={family} className='leaves' alt='' />
             <h3 className='livee'>Personalized experiences</h3>
             <p>From plush furnishings to personalized amenities, we redefine your staycation to make it extraordinary. </p>
            </div>
            </div>
            </div>
        </div>
    </section>
    <Aboutcenter />


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

export default Aboutsections

