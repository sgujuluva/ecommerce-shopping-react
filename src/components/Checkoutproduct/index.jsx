import React, { useContext } from "react";
//context
import { Cart } from "../../context/Context";

function Checkoutproducts({ id, title, price, rating, image }) {
  const { state, dispatch } = useContext(Cart);
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: "id",
    });
  };
  return (
    <div className="checkoutprod-container">
      <div className="checkoutprod-info">
        <img src={image} alt="" />
        <div className="prod-details">
          <p className="checkprod-title">{title}</p>
          <br />
          <p className="checkprod-price">{price}</p>
          <div className="checkout-rating">
            {rating}
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐️</p>
              ))}
          </div>
        </div>
      </div>

      <button onClick={removeFromCart}>Remove from Basket</button>
    </div>
  );
}

export default Checkoutproducts;
