import React, { useContext } from "react";
//context
import { Cart } from "../../context/Context";
import { ACTIONS } from "../../context/Reducer";
//styles
import "./Products.css";

function Products({ product }) {
  const { state, dispatch } = useContext(Cart);
  const { title, price, rating, image } = product;
  //handler
  const handleCart = () => {
    dispatch({
      type: ACTIONS.ADD_TO_CART,
      item: product,
    });
  };
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
        <button onClick={handleCart}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
