import React from "react";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal-items">
      <CurrencyFormat
        renderText={(value) => (
          <p>
            SubTotal (0 items): <b>€ 0</b>
          </p>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
      />
    </div>
  );
}

export default Subtotal;
