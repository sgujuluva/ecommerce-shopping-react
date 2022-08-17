import React, { useContext, useState } from "react";
//importing from material-ui
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
//Routerdom
import { Link, useNavigate,useLocation } from "react-router-dom";
//context
import { Cart } from "../../context/Context";
import {ACTIONS} from "../../context/Reducer"
//styles
import "./Header.css";

function Header() {
  /* const [input, setInput] = useState(""); */
  const { state, dispatch, products,input, setInput } = useContext(Cart);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    };

    const handleClick=() => {
      console.log(location)
      if(location.pathname!== "/"){
        navigate("/")
      }
      dispatch({
        type:ACTIONS.SEARCH_QUERY,
        query:input
      })

    }
  

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header-logo">
          <StorefrontIcon className="icon-image" />
          <p>eShop</p>
        </div>
      </Link>

      <div className="header-search">
        <input type="text" onChange={handleSearch} value={input} />
        <SearchIcon onClick={handleClick} className="search-icon" />
      </div>
      <div className="header-nav">
        <div className="nav-item">
          <span className="nav-item-firstline">Hello Guest</span>
          <span className="nav-item-secondline">Sign In</span>
        </div>
        <div className="nav-item">
          <span className="nav-item-firstline">Your</span>
          <span className="nav-item-secondline">Shop</span>
        </div>
        <Link to="/checkout" style={{ color: "white", textDecoration: "none" }}>
          <div className="nav-item shopping-basket-icon">
            <ShoppingBasketIcon />
            <span className="nav-item-secondline"> {state.cart.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
