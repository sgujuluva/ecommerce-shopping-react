import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
//context
import { Cart } from "../../context/Context";
import { getCartTotal } from "../../context/Reducer";
//styles
import "./Subtotal.css";

function Subtotal() {
  const { state, dispatch } = useContext(Cart);
  return (
    <div className="subtotal-items">
      <div className="sub-items">
      <CurrencyFormat
        renderText={(value) => (
          <>
          <p className="currency">
            SubTotal ({state.cart.length} items):</p>
             <span><b>€ {value}</b></span>
             </>
        )}
        decimalScale={2}
        value={getCartTotal(state.cart)}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
    </div>
  );
}

export default Subtotal;
