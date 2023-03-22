import React from 'react';
import './navbar.css'
import Nav from 'react-bootstrap/Nav';

function FillExample() {
  return (
    <Nav className='navbar_home' fill variant="tabs" defaultActiveKey="/home">
      <div className='main_container'>
        <Nav.Item >
          <Nav.Link className='navbar_links' href="/pages/Profile">Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar_links' href="/pages/Projets">Projets</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className='navbar_links' href="/pages/Contact">Contact</Nav.Link>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default FillExample;