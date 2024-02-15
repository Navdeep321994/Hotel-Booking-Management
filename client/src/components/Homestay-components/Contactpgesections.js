import React from 'react';

import instagramblack from "../../img/instagramblack.png"
import fbblack from "../../img/fbblack.png"
import contactpick from "../../img/contactpick.webp"






const Contactpgesections = () => {
    return <div>
   
    <section className='contapge'>
        <div className='container'>
            <div className='row'>
            <div className='col-xxl-12 col-xl-12 col-md-12 col-12'>
            <div className='exciting'>
            <h2>Connect with us</h2>
            <h3>Don’t hesitate to reach out and we’ll get back to you.</h3>
            </div>
            </div>
            </div>

            <div className='row' id='cont-row'>
            <div className='col-xxl-4 col-xl-4 col-md-3 col-12'>
              <div className='Make0'>
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
              <h3 className='litre'>Follow us</h3>
              <ul class="contactsocial-icons">
          <li><a href="https://www.facebook.com/people/So-Many-Mornings/61555369394552/" class="contactsocial"><img src={fbblack} className='fbblack1' alt='' /></a></li>
            <li><a href="https://www.instagram.com/somanymornings_/" class="contactsocial"><img src={instagramblack} className='fbblack2' alt='' /></a></li>
            </ul>
            </div>
             </div>
             <div className='col-xxl-4 col-xl-4 col-md-5 col-12'>
              <div className='Make1'>
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
             <h3 className='litre'>Email us</h3>
            <p><a href='mailto:booking@somanymornings.com'>booking@somanymornings.com</a></p>
            </div>
                   </div>
             <div className='col-xxl-4 col-xl-4 col-md-4 col-12'>
              <div className='Make2'>
              <i class="fa fa-phone-square" aria-hidden="true"></i>
           <h3 className='litre'>Call us</h3>
             
             <p><a href='tel:+91 98789 08399'>+91 98789 08399</a></p>
            </div>
             </div>
            </div>
           
        </div>
    </section>
    <section className='formsection'>
      <div className='container'>
        <div className='row'>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12' id='leftpick-img'>
            <img src={contactpick} className="contactpick" alt='' />
          </div>
          <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12'>
          <div className='cont-box'>
          <h4 className='sub-heading-style'>Make an inquiry </h4>
          <h2 className='Uniqueness'>Feel free to drop us a line </h2>
          <form action="contact.php"
                     method="post"
                    encType="multipart/form-data"
                    id="contpg">
                  <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-md-12 col-lg-12 col-12" >
                  <input type="text" name="name" placeholder="Full Name" className="reg-input" required />
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-md-12 col-lg-6 col-12">
                    <input type="email" name="email" placeholder="Email Address" className="reg-input" required />
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-md-12 col-lg-6 col-12" >
                    <input type="tel" name="phone" placeholder="Phone Number" className="reg-input" required />
                    </div>
                  </div>
                  <div className="row">
                  <div className="col-xxl-12 col-xl-12 col-md-12 col-lg-12 col-12" >
                    <input type="text" name="hearing" placeholder="Where did you hear about?" className="reg-input" required />
                    <textarea id="message" 
                  title="Message" 
                  cols="30" 
                  name='message'
                   maxlength="500" 
                  placeholder="Enter Message" 
                  required />
                       </div>
                       </div>
                 <button className="lab-btn" type="submit">Submit<span className='rightarow'><i class="fa fa-arrow-right" aria-hidden="true"></i></span></button>
                 </form>
          </div>
          </div>
        </div>
      </div>
    </section>
    </div>
}

export default Contactpgesections

