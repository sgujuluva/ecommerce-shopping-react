import React from "react";

function Products({ id, title, price, rating, image }) {
  return (
    <div className="product-container">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">{price},-€</p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <img src={image} alt="hand bag " />
        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
