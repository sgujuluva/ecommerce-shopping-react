import React from "react";

function Checkoutproducts({id,title,price,rating,image}) {
  return (
    <div className="checkoutprod-container">
      <div className="checkoutprod-info">
        <img src={image} alt="" />
        <div className="prod-details">
          <p className="checkprod-title">{title}</p>
          <br />
          <p className="checkprod-price">{price}</p>
          <div className="checkout-rating">{rating}</div>
        </div>
      </div>

      <button>Remove from Basket</button>
    </div>
  );
}

export default Checkoutproducts;
