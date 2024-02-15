import React from 'react';
import phonecall from "../../../src/img/phonecall.png";
import email01 from "../../../src/img/email01.png";
import instagram from "../../../src/img/instagram.png";
import fb from "../../../src/img/fb.png";


// import hrlogo from "../../assets/images/hrlogo.png";


const Footer1 = () => {
    return (
        <>
        <section className='second footer'>
                <div className='container'>
                <div className='row' id='challenges'>
                <div className='col-xxl-l2 col-xl-12 col-md-12 col-lg-12 col-12'>
         <h2 className='newsletter1'>Sign up for our Newsletter for the best deals on your next escape </h2>
             </div>
            <form 
            className="wow fadeInUp"
              data-wow-delay="0.12s"
              data-wow-duration="1s"
              style={{
                visibility: "visible",
                animationDuration: "1s",
                animationDelay: "0.12s",
                animationName: "fadeInUp"
              }}
              action="newsletter.php"
                     method="post"
                    encType="multipart/form-data"
                    id="myForm">
  <input className='bnnrfrm' name='email'placeholder='Your Email' type="email"  required />
  <button className="mysignup" type="submit">Sign up</button>
  </form>
     </div>
     <div className='row' id='footerrow2'>
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
        <div className='firstcol'>
        <p>
        <span>
          <img src={phonecall} className='phonecall' alt='' />
        </span>
          <a href='tel:+91 98789 08399'>+91 98789 08399</a>    
        </p>
        </div>
      </div>
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-12'>
        <div className='firstcol'>
        <p>
        <span>
          <img src={email01} className='email-2' alt='' />
        </span>
          <a className="somanymornings" href='mailto:booking@somanymornings.com'>booking@somanymornings.com</a>    
        </p>
        </div>
      </div>
      <div className='col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12'>
        <div className='firstcol'>
        <ul class="lab-ul social-icons" id='Reserved'>
          <li><a href="https://www.facebook.com/people/So-Many-Mornings/61555369394552/" class="oursocial"><img src={fb} className='fb' alt='' /></a></li>
            <li><a href="https://www.instagram.com/somanymornings_/" class="oursocial"><img src={instagram} className='fb' alt='' /></a></li>
            </ul>
        </div>
      </div>
     </div>
       <div className='row text-center' id='offs'>
          <div className='col-xxl-12 col-xl-12 col-md-12' id='footercol'>
            <ul className='Solutions'>
              <li><a href='/About'> About</a></li>
              <li><a href='/Stays'> Stays</a></li>
              <li><a href='/Offer'>Offers</a></li>
              <li><a href='/Hotelsearch'>Book Your Stay</a></li>
               <li><a href='/Contact'> Contact</a></li>
                 </ul>
                 </div>
                  </div>      
                </div>
            </section>
      
            {/* <div className="whatsapp">
          < a href="https://api.whatsapp.com/send?phone=919876769096&amp;text=Hello! I am Looking for Digital Marketing Service">
          <i class="icofont-whatsapp"></i></a>
        </div> */}
             <div className="copyright-area copyright-style-one no-border">
                    <div className="container">
                        <div className="row">
                         <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12 col-12">
                                <div className="copyright-right">
                               <p className="copyright-text"> © Copyright 2024. All Rights Reserved by <a className='Copyright' href="/">somanymornings.com</a></p>
                                </div>
                            </div>
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 col-12">
                            <ul className='Spolis'>
              <li><a href='/privacy-policy'> Privacy Policy</a></li>
              <li><a href='/Terms-conditions'> Terms & Conditons</a></li>
                                        </ul>
                            </div>
                        </div>
                    </div>
                </div>


                  </>
    )
}

export default Footer1;
