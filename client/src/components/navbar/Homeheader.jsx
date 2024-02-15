import React, { useEffect } from 'react';
import blacklogo from "../../../src/img/blacklogo.png";
import Topbar from './Topbar';
import Rlbutton from '../rlbutton/rlbutton';

const Homeheader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
      } else {
        nav.classList.remove('bg-dark', 'shadow');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    
    <section className='Homeheader fixed-top'>
      {/* <Topbar /> */}
      <nav className="navbar  navbar-expand-lg  p-md-3">
         <div className="container">
          <a className="navbar-brand" href="/">
          <img src={blacklogo} alt='' className='smmlogo' />
          </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* <div className="mx-auto"></div> */}
          <ul className="navbar-nav">
            {/* <li className="nav-item">
            <span className='navicon'><i class="fa fa-home" aria-hidden="true"></i></span>
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link text-white" href="/">
              <span className='navicon'><i class="fa fa-home" aria-hidden="true"></i></span>
                    </a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link " href="/About">
         
              About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Stays">
              Stays
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Rooms">
                  Rooms
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Offer">
                Offers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/Hotelsearch">
      Book My Stay
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link " href="/Contact">
              {/* <span className='navicon'><i class="fa fa-phone" aria-hidden="true"></i></span> */}
           Contact
              </a>
            </li>
          </ul>
          <div className='navbtn'>
          <Rlbutton />
            </div>
        </div>
      </div>
    </nav>
    </section>
  );
};

export default Homeheader;
