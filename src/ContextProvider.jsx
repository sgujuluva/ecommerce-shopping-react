import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer
export const context = createContext();
//provide the data layer
export function ContextProvider({ reducer, initialState, children }) {
  <context.ContextProvider value={useReducer(reducer, initialState)}>
    {children}
  </context.ContextProvider>;
}
//pull the info from data layer
export const useStateValue = () => useContext(context);
