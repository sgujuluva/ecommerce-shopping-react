import React from 'react';
import {createContext,useReducer,useContext} from "react";
/* import cartReducer from "./Reducer" */
export const cart = createContext();

/* function Context({children}) {

  //reducer
const [state,dispatch] = useReducer(cartReducer,{
cart:[],
})
    return (
    <cart.Provider value = {{state,dispatch}}>{children}</cart.Provider>
  )
}

export default Context */

export const Context = ({reducer,initialState,children}) => {
  <cart.Provider value = {useReducer(reducer,initialState)}>{children}</cart.Provider>
}

export const useStateValue = () => useContext(cart)

