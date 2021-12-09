import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartDeatils from "./CartDeatils";
import { useHistory } from "react-router";

const Cart = () => {
  const history = useHistory();
  const {
    cartItems,
    total,
    itemCount,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useContext(CartContext);

  return (
    <div className="p-5 m-5 text-center cart d-flex">
      {cartItems.map((product) => (
        <CartDeatils
          product={product}
          total={total}
          increase={increase}
          decrease={decrease}
          removeProduct={removeProduct}
        />
      ))}
      <div>
        <h4> quantity: {itemCount}</h4>
        <h3> total :{total}</h3>
        <button
          className="btn btn-warning"
          onClick={() => history.push("/checkOut")}
        >
          Proceed to checkOut
        </button>
        <button className="btn btn-danger" onClick={() => clearCart()}>
          Clear the Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
