import React from 'react'
//importing from material-ui
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
//Routerdom
import {Link} from "react-router-dom";
 
function Header() {
 
  return (
    <div className="header">
      <Link to ="/" style={{ textDecoration:"none"}}>
      <div className="header-logo">
      <StorefrontIcon className="icon-image"/> 
      <p>eShop</p>
    </div>
      </Link>
    
    <div className="header-search">
    <input type="text" />
    <SearchIcon className="search-icon"/>
    </div>
    <div className="header-nav">
    <div className="nav-item">
    <span className = "nav-item-firstline">Hello Guest</span>
    <span className = "nav-item-secondline">Sign In</span>
    </div>
    <div className="nav-item">
    <span className = "nav-item-firstline">Your</span>
    <span className = "nav-item-secondline">Shop</span>
        </div>
       <Link to = "/checkout" style={{color :"white", textDecoration:"none"}}>
       <div className="nav-item shopping-basket-icon">
       <ShoppingBasketIcon />
    <span className = "nav-item-secondline">0</span>
        </div>
       </Link>
       
    </div>
    </div>
  )
}

export default Header