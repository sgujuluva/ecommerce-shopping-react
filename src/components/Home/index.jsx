import React from "react";
//images
import eShopImage from "../../images/shopimage-4.png";
//components
import Products from "../Products";

function Home() {
  return (
     <div className="home-container">
        <div className="home-image">
            <img src={eShopImage} alt="" />
        </div>
<div className="home-row">
<Products/>
<Products/>
</div>
<div className="home-row">
<Products/>
<Products/>
<Products/>
</div>
<div className="home-row">
<Products/>
<Products/>
<Products/>
</div>
     </div>
     )
}

export default Home;
