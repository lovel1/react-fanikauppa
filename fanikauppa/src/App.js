import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent.js';
import productData from './components/ProductData.js';
import Products from './components/Products.js';
import Cart from './components/Cart.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

function App() {

  const [cartItems, setCartItems] = useState(productData)
  


  return (
    <>
    <NavbarComponent/>
    <Container fluid>
    <Row>
    <Col xs={8}>
    <Row md="4" className="mainRow mt-5 justify-content-center ">
    <Products cartItems = {cartItems} setCartItems={setCartItems}/>
    </Row>
    </Col>
    <Cart cartItems = {cartItems} setCartItems={setCartItems}/>
    </Row>
    </Container>
    </>
  );
}

export default App;
