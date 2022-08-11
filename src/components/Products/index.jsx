import React from "react";
//images
import HandBagImage from "../../images/handbag.png"

function Products() {
  return (
    <div className="product-container">
      <div className="product-info">
        <p className="product-title">Lenovo Laptop Shoulder Bag T210, 15.6-Inch Laptop or Tablet, Sleek, Durable and Water-Repellent Fabric, Lightweight Toploader, Business Casual or School, GX40Q17229, Grey</p>
        <p className="product-price">30,-€</p>
        <div className="product-rating">⭐️⭐️⭐️⭐️</div>
        <img src={HandBagImage}alt="hand bag " />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
