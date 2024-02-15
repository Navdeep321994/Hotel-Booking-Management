import React, { useState } from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import blacklogo from "../../../src/img/blacklogo.png";
import Rlbutton from '../rlbutton/rlbutton';

const TransparentNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className='nwheader'>
    <Navbar expand="lg" variant="dark" fixed="top" className="bg-transparent "  p-md-3>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={blacklogo}
            height="30"
            className="d-inline-block align-top newlogo"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(!expanded)} aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav" className={`justify-content-center ${expanded ? 'show' : ''}`}>
          <Nav className="ml-auto">
             <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Stays">Stays</Nav.Link>
            <Nav.Link href="/Rooms">Rooms</Nav.Link>
            <Nav.Link href="/Offer">Offers</Nav.Link>
            <Nav.Link href="/Hotelsearch">Book My Stay</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
            {/* Button on the right side */}
            <Rlbutton />
          </Nav>
        </Navbar.Collapse>
      
        </Container>
    </Navbar>
    </section>
  );
};

export default TransparentNavbar;
