import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer
export const StateContext = createContext();
//provide the data layer
export function ContextProvider({ reducer, initialState, children }) {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
}
//pull the info from data layer
export const useStateValue = () => useContext(StateContext);
