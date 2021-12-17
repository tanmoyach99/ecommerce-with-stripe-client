import React, { useEffect, useState } from "react";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../../Utilities/helpers";
import { useHistory } from "react-router";

const CustomCheckout = ({ shipping, cartItems }) => {
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const history = useHistory();
  const elements = useElements();

  useEffect(() => {
    const items = cartItems.map((item) => ({
      price: item.price,
      quantity: item.quantity,
    }));
    if (shipping) {
      const body = {
        cartItems: items,
        shipping: {
          name: shipping.name,
          address: {
            line1: shipping.address,
          },
        },
        description: "lorem",
        receipt_email: shipping.email,
      };

      const customCheckout = async () => {
        const { clientSecret } = await fetchFromAPI("create-payment-intent", {
          body,
        });
        setClientSecret(clientSecret);
      };
      customCheckout();
    }
  }, [shipping, cartItems]);

  const cardStyle = {
    style: {
      base: {
        color: "#000",
        fontFamily: "Roboto, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#606060",
        },
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleCheckOut = async () => {
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardNumberElement),
      },
    });
    if (payload.error) {
      console.log(payload.error);
      setError(`payment failed:${payload.error.message}`);
    } else {
      history.push("success");
    }
  };

  const cardHandleChange = (e) => {
    const { error } = e;
    setError(error ? error.message : "");
  };

  return (
    <div>
      <div>
        <h4> Enter payment Details</h4>
        <div className="stripe-card">
          <CardNumberElement
            className="card-element"
            options={cardStyle}
            onChange={cardHandleChange}
          />
        </div>
        <div className="stripe-card">
          <CardExpiryElement
            className="card-element"
            options={cardStyle}
            onChange={cardHandleChange}
          />
        </div>
        <div className="stripe-card">
          <CardCvcElement
            className="card-element"
            options={cardStyle}
            onChange={cardHandleChange}
          />
        </div>
        <div className="submit-btn">
          <button
            disabled={processing}
            className="btn btn-primary"
            onClick={() => handleCheckOut()}
          >
            {processing ? "PROCESSING" : "PAY"}
          </button>
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default CustomCheckout;
