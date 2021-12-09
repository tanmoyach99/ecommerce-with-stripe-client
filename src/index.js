import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductContextProvider from "./context/ProductContext";
import CartContextProvider from "./context/cartContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Iu0RzDVuG4dQji9ReyfG4EDP7X25Gcle68AKSOjVj8KHr9z4sxuNS4vbQ5I8X0745t34rNaiFaRz4faPlSm5oT500LkCQckJe"
);

ReactDOM.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CartContextProvider>
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
      </CartContextProvider>
    </ProductContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
