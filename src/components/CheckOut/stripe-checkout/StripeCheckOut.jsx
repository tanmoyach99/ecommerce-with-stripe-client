import { useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useState } from "react";

import { CartContext } from "../../../context/cartContext";

import { fetchFromAPI } from "../../../Utilities/helpers";

const StripeCheckOut = () => {
  const stripe = useStripe();
  const [email, setEmail] = useState("");
  const { cartItems } = useContext(CartContext);
  //   console.log(cartItems);

  const handleCheckOut = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      return {
        quantity: item.quantity,
        price_data: {
          currency: "usd",
          unit_amount: item.price * 100,
          product_data: {
            name: item.name,
            description: "lorem",
            images: [item.img],
          },
        },
      };
    });
    // console.log(line_items);

    const response = await fetchFromAPI("create-checkout-session", {
      body: {
        line_items,
        customer_email: email,
      },
    });

    const { sessionId } = response;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleCheckOut}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          className="input-stripe"
        />
        <div className="submit-area">
          <button className="btn btn-primary" type="submit">
            checkout
          </button>
        </div>
      </form>
    </div>
  );
};

export default StripeCheckOut;
