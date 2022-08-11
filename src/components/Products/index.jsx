import React from "react";
//images
import HandBagImage from "../../images/handbag.png"

function Products() {
  return (
    <div className="product-container">
      <div className="product-info">
        <p className="product-title">Title</p>
        <p className="product-price">30,-€</p>
        <div className="product-rating">⭐️</div>
        <img src={HandBagImage}alt="hand bag " />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
