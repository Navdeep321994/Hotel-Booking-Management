import React from 'react';
import many from "../../../src/img/many.webp";
import instagramlogo from "../../../src/img/instagramlogo.png";
import mobilepick from "../../img/mobilepick.jpg";

const Aboutcenter = () => {
  return (
    <div>
<section className="mdl-experiences" id-panel="panel_experiences0_0">
  <div className="container">
    <div className="m-d1">
      <div className="m-gradient" />
    </div>
    <div
      className="m-palmleft"    />
    <div
      className="m-palmright" />
    <div className="m-instagram">
      <p>
        <span>INSTAGRAM</span>
      </p>
    </div>
    <div className="m-tag">
        <img src={many} className='many' alt='' />
    </div>
    <div className='formobilee'>
    <img src={mobilepick} className='mobilepick' alt='' />
    </div>
    <div className="m-slide">

      <a
        href="https://www.instagram.com/somanymornings_/"
        className="m-item mpick1"
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        href="https://www.instagram.com/somanymornings_/"
        className="m-item mpick2"
        
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        href="https://www.instagram.com/somanymornings_/"
        className="m-item mpick3"
        
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        href="https://www.instagram.com/somanymornings_/"
        className="m-item mpick4"
       
        target="_blank"
        rel="noopener noreferrer"
      />
      <a
        href="https://www.instagram.com/somanymornings_/"
        className="m-item mpick5"
      
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
    <a
      href="https://www.instagram.com/somanymornings_/"
      target="_blank"
      aria-label=""
      className="m-cuenta"
    >
    <img src={instagramlogo} className='instagramlogo' alt='instagram' />
     <span className='morning'>@ So Many Mornings</span>
    </a>
  </div>
</section>

 </div>

  );
};

export default Aboutcenter;
