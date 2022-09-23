import React, { useContext, useEffect, useRef } from "react";
//context
import { Cart } from "../../context/Context";
import { ACTIONS } from "../../context/Reducer";
//components
import Products from "../Products";
//styles
import "./Home.css";

function Home() {
  const ref = useRef(false);
  const { products, state, setInput, dispatch } = useContext(Cart);
  const resultArr = products.filter((item) => {
    return item?.title?.toLowerCase().includes(state.searchQuery.toLowerCase());
  });
  console.log("the result is", resultArr);
  //to make the search input empty / clear

  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
      return;
    }
    return () => {
      if (ref.current) {
        ref.current = false;
        setInput("");
        dispatch({
          type: ACTIONS.SEARCH_QUERY,
          query: "",
        });
      }
    };
  }, []);
  return (
    <div className="home-container">
      <div className="home-image">
        <span>eCommerce</span>
      </div>
      <div className="home-row">
        {resultArr.map((item, index) => {
          return <Products key={index} product={item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
