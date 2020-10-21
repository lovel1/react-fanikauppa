import React from 'react';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarComponent = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow-lg">
    <Navbar.Brand className="ml-5">Fanikauppa</Navbar.Brand>
    <Nav className="ml-auto mr-5">
      <Navbar.Text className="mr-4">
      Signed in as: <b>User</b>
      </Navbar.Text>
      <Button variant="outline-info" className="ml-3">Log Out</Button>
    </Nav>
    </Navbar>
    )
    } 

export default NavbarComponent;
