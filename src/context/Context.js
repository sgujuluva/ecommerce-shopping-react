import React from 'react';
import {createContext} from "react";

const cart = createContext();

function Context({children}) {
  return (
    <cart.Provider>{children}</cart.Provider>
  )
}

export default Context