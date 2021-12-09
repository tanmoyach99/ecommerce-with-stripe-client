import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../../../context/cartContext";

const Success = () => {
  const { clearCart } = useContext(CartContext);
  const history = useHistory();

  useEffect(clearCart, []);

  return (
    <div>
      <h1> Thank you for yor order</h1>
      <h4> your payment is on processing and you will get notified shortly</h4>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => history.push("/shop")}
        >
          {" "}
          continue shopping
        </button>
      </div>
    </div>
  );
};

export default Success;
