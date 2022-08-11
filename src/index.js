import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reducer,{initialState} from "./reducer";
import { ContextProvider } from "./ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider initialState={initialState} reducer={reducer}>
      <App />
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
