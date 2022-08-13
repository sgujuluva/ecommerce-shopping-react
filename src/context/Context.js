import React from 'react';
import {createContext,useReducer} from "react";
import cartReducer from "./Reducer"
const cart = createContext();

function Context({children}) {

  //reducer
const [state,dispatch] = useReducer(cartReducer,{
basket:[],
})
    return (
    <cart.Provider>{children}</cart.Provider>
  )
}

export default Context