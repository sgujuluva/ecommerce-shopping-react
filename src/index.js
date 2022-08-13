import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
/* import Context from "./context/Context"; */
import reducer,{initialState} from "./context/Reducer";
import {Context} from "./context/Context"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context initialState={initialState} reducer={reducer}>
        <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
