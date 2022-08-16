import React, {useContext} from "react";
//context
import {Cart} from "../../context/Context"
//components
import Products from "../Products";
//styles
import "./Home.css";


function Home() {
  const {products} = useContext(Cart);
  return (
    <div className="home-container">
      <div className="home-image">
        <span>eCommerce</span>
        {/* <img src={eShopImage} alt="" /> */}
      </div>
      <div className="home-row">
        {products.map((item, index) => {
          return <Products product={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
