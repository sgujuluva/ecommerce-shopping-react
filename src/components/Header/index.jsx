import React from 'react'
//importing from material-ui
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
//styles
/* import "../../Header.css";
 */
function Header() {
  return (
    <div className="header">
    <div className="header-logo">
      <StorefrontIcon className="icon-image"/> 
      <p>eShop</p>
    </div>
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
        <div className="nav-item shopping-basket-icon">
       <ShoppingBasketIcon />
    <span className = "nav-item-secondline">0</span>
        </div>
    </div>
    </div>
  )
}

export default Header