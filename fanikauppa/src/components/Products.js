import React from 'react';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const Products = ({cartItems, setCartItems}) => {

  const addAmount = id => {
    const tempAddAmount = cartItems.map(cartItems => {
        if(cartItems.id === id){
          cartItems = {...cartItems, amount: (cartItems.amount + 1)};
        }
        return cartItems;
    })
    setCartItems(tempAddAmount);
  }

    return (
      <>
        {cartItems.map(product =>
          <Col className="product p-4 border m-4 shadow-lg rounded" key={product.id}>
            <h5>{product.name}</h5>
            <p className="text-muted">Category: {product.category}</p>
            <Image className="pic" src={product.picUrl} fluid></Image>
            <br></br>
            <br></br>
            <p>Price: <b>{product.price}</b> €</p>
            <hr></hr>
            <Button onClick={()=>addAmount(product.id)} variant="info" className="float-right" >Add to Cart</Button>
          </Col>
        )}
      </>
    );
  };

export default Products;