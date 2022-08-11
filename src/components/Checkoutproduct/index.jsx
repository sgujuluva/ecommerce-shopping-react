import React from "react";
//image
import laptopbag from "../../images/amazon-laptop.png";
function Checkoutproducts() {
  return (
    <div className="checkoutprod-container">
      <div className="checkoutprod-info">
        <img src={laptopbag} alt="" />
        <div className="prod-details">
          <p className="checkprod-title">laptop bag</p>
          <br />
          <p className="checkprod-price">20$</p>
          <div className="checkout-rating">⭐️</div>
        </div>
      </div>

      <button>Remove from Basket</button>
    </div>
  );
}

export default Checkoutproducts;
