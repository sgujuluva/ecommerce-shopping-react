import React from "react";
import CurrencyFormat from "react-currency-format";
//context
import {Cart} from "../../context/Context";
import {getCartTotal} from "../../context/Reducer"

function Subtotal() {
  return (
    
    <div className="subtotal-items">
      <CurrencyFormat
        renderText={(value) => (
          <p  className="currency">
            SubTotal (0 items): <b>€ 0</b>
          </p>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
