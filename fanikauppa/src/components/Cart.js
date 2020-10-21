import React from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Cart = ({cartItems, setCartItems}) => {

  const reduceAmount = id => {
    const tempAddAmount = cartItems.map(cartItems => {
        if(cartItems.id === id){
          cartItems = {...cartItems, amount: (cartItems.amount - 1)};
        }
        return cartItems;
    })
    setCartItems(tempAddAmount);
  }

    return (
      <>  
      <Col className="cart p-4 border border-info rounded m-4 shadow-lg mt-5 align-self-start fixed sticky-top" >
        <h3>Cart</h3>
        <hr></hr>
        <div>
        {cartItems.filter(product => product.amount > 0).map(product =>
          <div className="cartItem" key={product.id}>
          <div className="textPlusBtn">
            <p className ="cartItemElement">{product.name} <b>{product.price}</b> € x {product.amount}</p>
            <Button onClick={()=>reduceAmount(product.id)} variant="info"><b>-</b></Button>
          </div>
            <br></br>
            <hr></hr>
          </div>
        )}
        </div>
        <p><b>Total: </b> 
        {cartItems.filter(product => product.amount > 0).map(product => product.price * product.amount).reduce((a,b) => a + b, 0)}  
         €</p>
        <Button variant="outline-info" className="float-right text-center">Check Out</Button>
      </Col>
      </>
    );
  };

export default Cart;