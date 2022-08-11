import React from 'react';
import Checkoutproducts from '../Checkoutproduct';
import Subtotal from "../Subtotal";

function Checkout() {
  return (
    <div className="checkout-container">
    <div className="checkout-items">
     <h2>Your Shopping Basket</h2>
     <Checkoutproducts/>
    </div>
   <div className="checkoutAmount">
    <Subtotal/>
   </div>
      </div>
  )
}

export default Checkout