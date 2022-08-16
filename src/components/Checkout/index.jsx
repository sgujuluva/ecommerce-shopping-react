import React,{useContext}  from "react";
import Checkoutproducts from "../Checkoutproduct";
import Subtotal from "../Subtotal";
//context
import {Cart} from "../../context/Context";
import {ACTIONS} from "../../context/Reducer"

function Checkout() {
  const {state,dispatch} = useContext(Cart);

  /* id, title, price, rating, image */
  return (
    <div className="checkout-container">
      <div className="checkout-items">
        <h2>Your Shopping Basket</h2>
        {/* <Checkoutproducts /> */}
        {state.cart.map(item => ( <Checkoutproducts 
        id = {item.id}
        title={item.title}
        price={item.price}
        rating={item.rating}
        image={item.image}/>))}
      </div>
      <div className="checkoutAmount">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
