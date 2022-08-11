//components
import Header from "./components/Header"
import Home from "./components/Home";
import Products from "./components/Products"
//styles
import './App.css';
import "./Header.css"; 
import "./Home.css";
import "./Products.css";

function App() {
  return (
    <div className="App">
     Eshop website
     <Header/>
     <Home/>
  
    </div>
  );
}

export default App;
