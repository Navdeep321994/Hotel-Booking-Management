import React from 'react';
import HSPick1 from "../../img/HSPick1.webp"
import HSPick2 from "../../img/HSPick2.webp"
import HSPick3 from "../../img/HSPick3.webp"
import BBQ from "../../img/BBQ.webp"
import family from "../../img/family.png"
import leaves from "../../img/leaves.png"
import homestay from "../../img/homestay.png"

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




const Hotelsearchsections = () => {
    return <div>
 

    <section className='hotelcommitment'>
        <div className='container'>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            <div className='exciting'>
            <h2>Check booking availability </h2>
            <h3>Pick your desired dates to book your stay in our exclusive properties.</h3>
            </div>
            <div className='adventures'>
            <SearchList />
            </div>
            </div>
            </div>
          
        </div>
    </section>
  
  
    </div>
}

export default Hotelsearchsections

