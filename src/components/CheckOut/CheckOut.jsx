import React, { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import CustomCheckout from "./CustomCheckOut/CustomCheckout";
import ShippingAddress from "./CustomCheckOut/ShippingAddress";
// import StripeCheckOut from "./stripe-checkout/StripeCheckOut";

const CheckOut = () => {
  const { itemCount, total, cartItems } = useContext(CartContext);

  const [shipping, setShipping] = useState(null);
  const addressShown = {
    display: shipping ? "none" : "block",
  };
  const cardShown = {
    display: shipping ? "block" : "none",
  };

  return (
    <div className="text-center d-flex align-items-center justify-content-center">
      <div>
        <h2>Check Out Summary</h2>
        <h3> Total Items: {itemCount}</h3>
        <h3> Amounts To pay: $ {total}</h3>
        <div style={addressShown}>
          <ShippingAddress setShipping={setShipping} />
        </div>
        <div style={cardShown}>
          <CustomCheckout {...{ shipping, cartItems }} />
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
