import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import StripeCheckOut from "./stripe-checkout/StripeCheckOut";

const CheckOut = () => {
  const { itemCount, total } = useContext(CartContext);

  return (
    <div className="text-center d-flex align-items-center justify-content-center">
      <div>
        <h2>Check Out Summary</h2>
        <h3> Total Items: {itemCount}</h3>
        <h3> Amounts To pay: $ {total}</h3>
        <StripeCheckOut />
      </div>
    </div>
  );
};

export default CheckOut;
