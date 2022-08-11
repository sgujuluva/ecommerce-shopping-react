import React from "react";
//context provider
import {useStateValue} from "../../ContextProvider"

function Products({ id, title, price, rating, image }) {
  const [state,dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        image:image,
        price:price,
        rating:rating,
      },
    })
  }
  
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
        <button onClick={addToBasket}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Products;
