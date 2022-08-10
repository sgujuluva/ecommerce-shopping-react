import React from 'react'
//importing from material-ui
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
function Header() {
  return (
    <>
    <div className="header-logo">
      <StorefrontIcon/>
    </div>
    <div className="header-search">

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
        <div className="nav-item">
       <ShoppingBasketIcon/>
    <span className = "nav-item-secondline">0</span>
        </div>
    </div>
    </>
  )
}

export default Header