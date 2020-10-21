import React from 'react';

const CartItems = (cartItems, setCartItems, newCartItems, setNewCartItems)  => {

    const addCartItem = (cartItems) => {
        cartItems.preventDefault();

        let tempCartItems = {...newCartItems};

        setCartItems(cartItems.concat(tempCartItems));

        setNewCartItems({id:"", name:"", price:"", category:"", picUrl:""});
    }

    return (
      <>  
      
      </>
    );
  };

export default CartItems;