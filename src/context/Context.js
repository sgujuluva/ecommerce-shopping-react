 import React from 'react';
import {createContext,useReducer,useContext} from "react";
 import cartReducer from "./Reducer" 
export const Cart = createContext();

 function Context({children}) {

  //reducer
const [state,dispatch] = useReducer(cartReducer,{
cart:[],
})
    return (
    <Cart.Provider value = {{state,dispatch}}>{children}</Cart.Provider>
  )
}

export default Context 



