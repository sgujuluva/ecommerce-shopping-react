//components
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
//styles
import "./App.css";

//router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        Eshop website
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/Checkout"
          element={
            <>
              <Header /> <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
